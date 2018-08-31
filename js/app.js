/* Notes:

  Images -
    All images have a pixel ratio of 101 x-axis x 171 y-axis. This defines the axis of an enemy and a player.

  Board Size -
    Canvas.width is 505
    Canvas.height is 606
    Board is 6 rows x 5 columns
*/

// Winner pop-up modal
var modal = document.querySelector(".modal");

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  "use strict"
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  "use strict"
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;

  //Start sprites off the screen at start of x-axis and finish at the end of the x-axis at a random speed
  this.offAxisX = 505;
  this.startAxisX = -101;
  if (this.x > this.offAxisX) {
    this.x = this.startAxisX
    this.speedRandom();
  }
  this.collide();
};

// Checks for collisions between the player and the enemies. Half the dimensions of the image x and y axis
Enemy.prototype.collide = function() {
  "use strict"
  //player dimensions
  var playerDimension = {
    x: player.x,
    y: player.y,
    width: 51,
    height: 86
  };

  //enemy dimensions
  var enemyDimension = {
    x: this.x,
    y: this.y,
    width: 51,
    height: 86
  };

  if (playerDimension.x < enemyDimension.x + enemyDimension.width &&
    playerDimension.x + playerDimension.width > enemyDimension.x &&
    playerDimension.y < enemyDimension.y + enemyDimension.height &&
    playerDimension.height + playerDimension.y > enemyDimension.y) {
    //reset to position 1  
    player.x = 200;
    player.y = 400;
  }
};

//Randomize enemies speed. Enemies need a minimum speed or start speed can be too slow.
Enemy.prototype.speedRandom = function() {
  "use strict"
  this.speed = Math.floor(Math.random() * 200) + 100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  "use strict"
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x, y) {
  "use strict"
  this.x = x;
  this.y = y;
  this.player = 'images/char-boy.png';
};

// This class requires an update(), render() and
// a handleInput() method.

//update() - draws board to canvas
Player.prototype.update = function(dt) {
  "use strict"
};

//render() - draws player to board
Player.prototype.render = function() {
  "use strict"
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

//handleInput() - handles keyboard arrow input
Player.prototype.handleInput = function(keypress) {
  "use strict"
  // determins left keyboard handler and checks for left edge
  if (keypress === 'left' && this.x > 0) {
    this.x -= 101;
  }

  // determins right keyboard handler and checks for right edge
  if (keypress === 'right' && this.x < 400) {
    this.x += 101;
  }

  // determins up keyboard handler checks for top edge
  if (keypress === 'up' && this.y > 0) {
    this.y -= 86;
  }

  // determins down keyboard handler and checks for bottom edge
  if (keypress === 'down' && this.y < 400) {
    this.y += 86;
  }

  // if the player reaches the water the player respawns at position 1 and displays a winner modal pop-up
  if (this.y < 0) {
    setTimeout(() => {
      modal.style.display = "block";
      this.x = 200;
      this.y = 400;
    }, 400);
  }
  modal.style.display = "none";
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

//place 3 sprites at 3 locations on the y-axis on the stone tiles
var enemyLocation = [65, 145, 225];

enemyLocation.forEach(function(loc) {
  enemy = new Enemy(0, loc, 300);
  allEnemies.push(enemy);
});


// Place the player object in a variable called player at position 1
var player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  "use strict"
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
