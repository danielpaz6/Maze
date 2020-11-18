In this assignment you are asked to finish the implementation of a maze game.
The maze is built using React and HTML5 Canvas.

* Installation
In order to install the project dependencies, make sure you have NodeJS and yarn package manager installed.
Then, extract the zip and in the project directory run:

yarn install

Then, you can run:

yarn start

which runs the app in the development mode.
Open http://localhost:3000 to view it in the browser

* The assignment
In order to complete the assignment you need to do the tasks below.
Feel free to change and move code that was already done for better design and reuse of code.

1. During the game, the user can move the StorrSoft logo through the maze using the arrow keys.
   - The logo cannot move through walls
   - When the game is over, the logo will not move with arrows;
     Return key will start a new game (already implemented).

2. After each move of the StorrSoft logo, the user gets +10 points.

3. By reaching the goal, the user will get points according to this calculation:
    round No * time left * 100

4. Music: when a level starts, an audio file should be played (/src/audio/maze.mp3)
   in a loop until the end of the level (or until game is over).

   When the user reaches the goal, the music is stopped and instead the 'level end tune' is played
   (in src\audio\level_end.mp3).

5. Only after the 'level end tune' finishes to play we move to the next level -
   a new maze is generated, the round is increased by one, the time gets reset to 60 seconds,
   and the annoying music starts from the beginning.

6. The goal text should 'blink': it should appear for a second and then hide for a second and over again.

7. Prizes: in each round, after 30 seconds, a lollipop should appear on a random cell until the end of the level.
    (src\images\lollipop.svg)
    15 seconds before the time ends, ice cream should appear on a random cell. (src\images\ice_cream.svg)
    Hitting each one of them will add points and time to the user.
    When the level is finished, if the time is greater than 60, it should not be reset to 60.
    Lollipop = 5000 pts, 15 seconds
    Ice cream = 10000 pts, 30 seconds.

8. After hitting a prize, the prize disappears and the points added should appear instead, for 3 seconds.
   For example, after hitting a lollipop, the text '+5000' will appear instead of the lollipop.
