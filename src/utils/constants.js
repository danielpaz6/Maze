import lollipopImage from '../assets/images/lollipop.svg';
import iceCreamImage from '../assets/images/ice_cream.svg';

export const ROUND_TIME = 60;
export const MOVEMENT_REWARD = 10;
export const ROWS = 17;
export const COLS = 33;
// export const ROWS = 5;
// export const COLS = 3;

export const KEYBOARD = {
  Enter: 'Enter',
  Left: 'ArrowLeft',
  Right: 'ArrowRight',
  Up: 'ArrowUp',
  Down: 'ArrowDown',
};

export const MAZE_PRIZES = [
  {
    name: 'Lollipop',
    image: lollipopImage,
    points: 2000,
  },
  {
    name: 'IceCream',
    image: iceCreamImage,
    points: 5000,
  },
];
