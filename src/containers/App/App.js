import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import styles from './App.module.css';
import useInterval from '@use-it/interval';
import Header from '../../components/Header/Header';
import Notification from '../../components/Notification/Notification';
import MazeGenerator from '../../maze/MazeGenerator';
import Board from '../Board/Board';
import {
  COLS,
  KEYBOARD,
  MAZE_PRIZES,
  MOVEMENT_REWARD,
  ROUND_TIME,
  ROWS,
} from '../../utils/constants';
import { useKey } from '../../hooks/useKey';
import mazeAudioFile from '../../assets/audio/maze.mp3';
import mazeLevelEndAudioFile from '../../assets/audio/level_end.mp3';
import { arraysEqual } from '../../utils/arrayUtils';
import Joystick from '../../components/Joystick/Joystick';

function reducer(state, action) {
  switch (action.type) {
    case 'startGame': {
      return {
        ...state,
        maze: action.payload.maze,
        currentCell: action.payload.maze.startCell,
        time: ROUND_TIME,
        visitedCells: new Set(),
        isGoalReached: false,
        prizes: [],
      };
    }
    case 'reachGoal': {
      return {
        ...state,
        isGoalReached: true,
        points: state.points + state.round * state.time * 100,
      };
    }
    case 'winGame': {
      return {
        ...state,
        maze: action.payload.maze,
        currentCell: action.payload.maze.startCell,
        time: ROUND_TIME,
        round: state.round + 1,
        visitedCells: new Set(),
        isGoalReached: false,
        prizes: [],
      };
    }
    case 'decrementTime': {
      return {
        ...state,
        time: state.time - 1,
      };
    }
    case 'endGame': {
      return {
        ...state,
        hiScore: Math.max(state.hiScore, state.points),
        points: 0,
      };
    }
    case 'addPrize': {
      const index = action.payload.index;

      const prize = {
        ...MAZE_PRIZES[index],
        isTaken: false,
        cell: state.maze.randomCells[index],
      };

      return {
        ...state,
        prizes: [...state.prizes, prize],
      };
    }
    case 'reachPrize': {
      const index = action.payload.removeIndex;

      return {
        ...state,
        points: state.points + (!state.prizes[index].isTaken ? state.prizes[index].points : 0),
        prizes: state.prizes.map((p, idx) =>
          idx === index ? { ...p, isTaken: true, takenTime: new Date() } : p
        ),
      };
    }
    case 'moveCharacter': {
      const isVisited = state.visitedCells.has(action.payload.cells.toString());

      return {
        ...state,
        currentCell: action.payload.cells,
        points: state.points + (!isVisited ? MOVEMENT_REWARD : 0),
        visitedCells: new Set([...state.visitedCells, action.payload.cells.toString()]),
      };
    }
    default:
      throw new Error('Unknown action');
  }
}

const mazeAudio = new Audio(mazeAudioFile);
mazeAudio.loop = true;
// mazeAudio.volume = 0.3;

const levelEndAudio = new Audio(mazeLevelEndAudioFile);

function App() {
  const [state, dispatch] = useReducer(reducer, {
    points: 0,
    round: 1,
    hiScore: 0,
    time: undefined,
    maze: undefined,
    currentCell: undefined,
    visitedCells: new Set(),
    isGoalReached: false,
    prizes: [],
  });

  const container = useRef(null);

  const isGameOver = !state.time;

  const handleOnStartGame = useCallback(() => {
    if (!state.time) {
      dispatch({
        type: 'startGame',
        payload: {
          maze: new MazeGenerator(ROWS, COLS, MAZE_PRIZES.length).generate(),
        },
      });
    }
  }, [state.time]);

  const handleOnArrowKeyPressed = useCallback(
    (event) => {
      if (!state.currentCell || !state.maze || isGameOver || state.isGoalReached) return;
      const { isValid, newPos } = state.maze.validateStep(state.currentCell, event.key);

      if (isValid) {
        const prizeIndex = state.prizes.findIndex((prize) => arraysEqual(prize.cell, newPos));
        if (prizeIndex >= 0) {
          dispatch({
            type: 'reachPrize',
            payload: {
              removeIndex: prizeIndex,
            },
          });
        } else if (state.maze.isGoalReached(newPos)) {
          dispatch({
            type: 'reachGoal',
          });
        }
        dispatch({
          type: 'moveCharacter',
          payload: {
            cells: newPos,
          },
        });
      }
    },
    [state.currentCell, state.maze, isGameOver, state.isGoalReached, state.prizes]
  );

  useKey([KEYBOARD.Enter], handleOnStartGame);
  useKey([KEYBOARD.Left, KEYBOARD.Right, KEYBOARD.Up, KEYBOARD.Down], handleOnArrowKeyPressed);

  useInterval(
    () => {
      dispatch({ type: 'decrementTime' });
    },
    state.time && !state.isGoalReached ? 1000 : null
  );

  useEffect(() => {
    if (state.time === 0) {
      mazeAudio.pause();
      mazeAudio.currentTime = 0;
      dispatch({ type: 'endGame' });
    } else if (ROUND_TIME - state.time === 30) {
      dispatch({
        type: 'addPrize',
        payload: { index: 0 }, // Lolippop
      });
    } else if (state.time === 15) {
      dispatch({
        type: 'addPrize',
        payload: { index: 1 }, // Ice Cream
      });
    }
  }, [state.time]);

  useEffect(() => {
    if (state.round > 0 && state.time > 0 && !state.isGoalReached) {
      mazeAudio.play();
    }
  }, [state.round, state.time, state.isGoalReached]);

  useEffect(() => {
    const onFinishAudio = () => {
      levelEndAudio.currentTime = 0;
      dispatch({
        type: 'winGame',
        payload: {
          maze: new MazeGenerator(ROWS, COLS, MAZE_PRIZES.length).generate(),
        },
      });
    };

    if (state.isGoalReached) {
      mazeAudio.pause();
      mazeAudio.currentTime = 0;

      levelEndAudio.play();
      levelEndAudio.addEventListener('ended', onFinishAudio);
    }

    return () => levelEndAudio.removeEventListener('ended', onFinishAudio);
  }, [state.isGoalReached]);

  return (
    <div className={styles.root}>
      <Header hiScore={state.hiScore} points={state.points} time={state.time} round={state.round} />
      <div className={styles.container} ref={container}>
        <Board
          maze={state.maze}
          currentCell={state.currentCell}
          prizes={state.prizes}
          forwardedRef={container}
        />
        <Joystick handleOnArrowKeyPressed={handleOnArrowKeyPressed} />
      </div>
      <Notification
        show={!state.time}
        gameOver={state.time === 0}
        handleOnStartGame={handleOnStartGame}
      />
    </div>
  );
}

export default App;
