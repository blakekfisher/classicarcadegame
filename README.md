# Frontend-Nanodegree-Arcade-Game

**Table Of Contents**
\-Running the application
\-Notes
\-Bugs
\-TODO
\-Dependencies
\-Resources

**Running the application**
The game automatically starts when the index.html is opened in the browser. The sprites initially have the same speed at runtime but speed varies on the second and all additional passes of the sprites on the board. The game is over when the player reaches the water which is indicated by a pop-up modal. The player can start again by moving the arrow keys at which time the modal disappears until the player wins again.

**Notes**
I decided to focus solely on the project rubric and use the provided art assets and game engine files as opposed to building the game from scratch as I did in the Memory Game project. I feel that I learned less by doing this but am confident in my decision given my knowledge of object oriented JavaScript. I also left in the original comments along with adding my own for clarification so I would know what was asked in the original app.js file.

I tried to focus on ensuring the code is object oriented and that the keyword 'this' is used correctly. I used 'strict' so that the value of this didn't get away from me.

I still do not feel that I have a masterful grasp on the contents of this lesson and am unsure that I could build this game from scratch as I did in previous projects.

As the last project left me with a time deficit, I plan to spend the extra time re-doing the lessons in section 5: Object Oriented JavaScript and revisiting the Web Accessibility lessons that I skipped in order to get caught up.

I also need to do the class on HTML Canvas suggested in the project overview. I didn't feel confident enough in my skills in this area to modify the game layout in the game engine provided.

Therefore there are many TODOs for the future to add functionality to the game (see TODO section).

I did add a winner pop-up to indicate that the player won and can play again. I used the code that I wrote for the modal in the memory game project.

**Bugs**
After the pop-up displays the winner message, the player is set back to the beginning position. If the player continues playing immediately after reaching the water before the `setTimeout` of 4 ms has a chance to display the pop-up, the pop-up sometimes displays twice. It immediately disappears so it still meets the rubric specifications.

**TODO**
\-When the pop-up displays the game should completely reset and the sprites and the player should pause until a replay button is pressed.
\-The game should keep count of the number of player moves and give a rating when the player wins (like the memory game).
\-The player should be able to select different characters from the provided images file.
\-There could be difficulty levels with a bigger playing surface, board obstacles, and more variability in the sprite speed and numbers. A beautiful example of this is in the resources below.

**Dependencies:**
Google fonts - Open Sans
<https://fonts.googleapis.com/css?family=Open+Sans>

**Resources:**
Udacity Arcade Rubric and Instructions
<https://review.udacity.com/#!/projects/2696458597/rubric>
<https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true>

Office Hours: P3: Understanding the engine.js
<https://www.youtube.com/watch?time_continue=9&v=oLSu3zc2jSA>

Example of an Optimized Classic Arcade Game
<http://irene.marin.cat/udacity/project3/index.html>

Object Playground
<http://www.objectplayground.com/>

Jonas Schmedtmann's The Complete JavaScript Course 2018
<https://www.udemy.com>

Colt Steele's Web Developer Bootcamp
<https://udemy.com>

Colt Steele's Advanced Web Developer Bootcamp
<https://udemy.com>

The Coding Train - Helped me think about logic of the game
<https://www.youtube.com/watch?v=giXV6xErw0Y&t=253s>

2D Collision detection
<https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection>
