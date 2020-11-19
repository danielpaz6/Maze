import React, { useEffect, useRef, useState } from 'react';
import styles from './Board.module.css';
import PropTypes from 'prop-types';
import useInterval from '@use-it/interval';
import logoImage from '../../assets/images/logo.svg';

// import lollipopImage from '../../assets/images/lollipop.svg';

function Board({ maze, currentCell, prizes }) {
  const canvas = useRef(null);
  const container = useRef(null);
  const [ctx, setCtx] = useState(undefined);
  const [displayGoal, setDisplayGoal] = useState(true);

  
  const onResize = () => {
    const { offsetWidth, offsetHeight } = container.current;
    canvas.current.width = offsetWidth;
    canvas.current.height = offsetHeight;
  };

  useEffect(() => {
    setCtx(canvas.current.getContext('2d'));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let didCancel = false;

    const drawLine = (x1, y1, width, height) => {
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 + width, y1 + height);
      ctx.stroke();
    };

    const draw = () => {
      if (!maze) {
        return;
      }

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);

      const blockWidth = Math.floor(canvas.current.width / maze.cols);
      const blockHeight = Math.floor(canvas.current.height / maze.rows);
      const xOffset = Math.floor((canvas.current.width - maze.cols * blockWidth) / 2);

      for (let y = 0; y < maze.rows; y++) {
        for (let x = 0; x < maze.cols; x++) {
          const cell = maze.cells[x + y * maze.cols];
          if (y === 0 && cell[0]) {
            drawLine(blockWidth * x + xOffset, blockHeight * y, blockWidth, 0);
          }
          if (cell[1]) {
            drawLine(blockWidth * (x + 1) + xOffset, blockHeight * y, 0, blockHeight);
          }
          if (cell[2]) {
            drawLine(blockWidth * x + xOffset, blockHeight * (y + 1), blockWidth, 0);
          }
          if (x === 0 && cell[3]) {
            drawLine(blockWidth * x + xOffset, blockHeight * y, 0, blockHeight);
          }
        }
      }

      const generateImage = (x, y, img) => {
        const logoSize = 0.75 * Math.min(blockWidth, blockHeight);
        const image = new Image(logoSize, logoSize);
        image.onload = () => {
          if (didCancel)
            return;
          
          ctx.drawImage(
            image,
            x * blockWidth + xOffset + (blockWidth - logoSize) / 2,
            y * blockHeight + (blockHeight - logoSize) / 2,
            logoSize,
            logoSize
          );
        };

        image.src = img;
      };

      const generateText = (x, y, text, color) => {
        const textSize = Math.min(blockWidth, blockHeight);
        ctx.fillStyle = color;
        ctx.font = '20px "Joystix"';
        ctx.textBaseline = 'top';

        ctx.fillText(
          text,
          x * blockWidth + xOffset + (blockWidth - textSize) / 2,
          y * blockHeight + (blockHeight - textSize) / 2,
          textSize
        );
      };

      generateImage(currentCell[0], currentCell[1], logoImage);

      if (displayGoal) {
        generateText(maze.endCell[0], maze.endCell[1], 'Goal', 'red');
      }

      prizes.forEach(prize => {
       const {cell, image, isTaken, points, takenTime} = prize;

        if (isTaken && (new Date() - takenTime) <= 3000)
          generateText(cell[0], cell[1], `+${points}`, 'yellow');
        else if(!isTaken)
          generateImage(cell[0], cell[1], image);
      });
    };

    draw();

    return () => {
      didCancel = true;
    };
  }, [ctx, currentCell, maze, displayGoal, prizes]);

  useInterval(() => {
    setDisplayGoal(oldDisplayState => !oldDisplayState);
  }, 1000);

  return (
    <div className={styles.root} ref={container}>
      <div style={{ position: 'absolute' }}>
        <canvas className={styles.canvas} ref={canvas} />
      </div>
    </div>
  );
}

Board.propTypes = {
  maze: PropTypes.shape({
    cols: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
    currentCell: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default Board;
