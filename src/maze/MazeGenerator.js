import Maze from './Maze';

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.walls = [true, true, true, true];
    this.visited = false;
  }
}

class MazeGenerator {
  constructor(rows, cols, pickRandomCellsAmount = 2) {
    this.rows = rows;
    this.cols = cols;
    this.stack = [];
    this.pickRandomCellsAmount = pickRandomCellsAmount;
  }

  createGrid() {
    const grid = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        grid.push(new Cell(x, y));
      }
    }
    this.grid = grid;
  }

  getCell(y, x) {
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) {
      return null;
    }
    return this.grid[x + y * this.cols];
  }

  checkNeighbors() {
    const x = this.current.x;
    const y = this.current.y;
    const top = this.getCell(y - 1, x);
    const right = this.getCell(y, x + 1);
    const bottom = this.getCell(y + 1, x);
    const left = this.getCell(y, x - 1);
    const neighbors = [top, right, bottom, left].filter((c) => !!c && !c.visited);

    if (neighbors.length === 0) {
      return null;
    }

    const r = Math.floor(Math.random() * neighbors.length);
    return neighbors[r];
  }

  removeWallsBetweenCurrentAnd(next) {
    const dx = this.current.x - next.x;
    const dy = this.current.y - next.y;

    if (dx === 1) {
      this.current.walls[3] = false;
      next.walls[1] = false;
    } else if (dx === -1) {
      this.current.walls[1] = false;
      next.walls[3] = false;
    }

    if (dy === 1) {
      this.current.walls[0] = false;
      next.walls[2] = false;
    } else if (dy === -1) {
      this.current.walls[2] = false;
      next.walls[0] = false;
    }
  }

  carve() {
    const next = this.checkNeighbors();
    if (next) {
      next.visited = true;
      this.stack.push(this.current);
      this.removeWallsBetweenCurrentAnd(next);
      this.current = next;
      this.carve();
    } else if (this.stack.length > 0) {
      this.current = this.stack.pop();
      this.carve();
    }
  }

  generate() {
    this.createGrid();
    this.current = this.grid[0];
    this.current.visited = true;
    this.carve();

    this.grid[0].walls[3] = false;
    this.getCell(this.rows - 1, this.cols - 1).walls[2] = false;

    return new Maze(
      this.rows,
      this.cols,
      this.grid.map((x) => x.walls),
      [0, 0],
      // [this.rows - 1, this.cols - 1], <-- it was a bug, since X Axis is num of columns
      [this.cols - 1, this.rows - 1],
      this.pickRandomCellsAmount
    );
  }
}

export default MazeGenerator;
