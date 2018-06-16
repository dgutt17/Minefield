// var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add('gameState', gameState.state1)
game.state.start('state1')
// game.state.add()


var gameState = {}

gameState.prototype.state1 = function (){}

gameState.state1.prototype = {
    preload: function(){},
    create: function(){},
    update: function(){}
}

// game.prototype.preload = function () {

//     game.load.image('sky', 'assets/sky.png');
//     game.load.image('ground', 'assets/platform.png');
//     game.load.image('star', 'assets/star.png');
//     game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
//     game.load.image('starShip', 'assets/starShip.png')
//     game.load.spritesheet('starShip2', 'assets/starShipAnimation3.png', 107, 49);
//     game.load.image('asteroid', 'assets/asteroid3.png')
// }

// game.create = function () {
//     // game.world.setBounds(0,0, 2000, 2000)
//     game.add.sprite(0, 0, 'sky');
//     this.player = game.add.sprite(32, game.world.height - 150, 'starShip2');
//     this.asteroid = game.add.sprite(500, game.world.height - 300, 'asteroid')
//     game.physics.arcade.enable(this.player);
//     game.physics.arcade.enable(this.asteroid)
//     this.player.animations.add('left', [1], 10, true);
//     this.player.animations.add('right', [3], 10, true);
//     this.player.animations.add('up', [0], 10, true);
//     this.player.animations.add('down', [2], 10, true);


//     // this.player.body.collideWorldBounds = true;

//     // game.camera.follow(this.player)
//     // game.camera.deadzone = new Phaser.Rectangle(400, 0,400, 400 )

//     cursors = game.input.keyboard.createCursorKeys();




// }

// game.update = function () {
//     this.player.body.velocity.x = 0;
//     this.player.body.velocity.y = 0;

//     this.asteroid.body.velocity.x = -100
//     this.asteroid.body.velocity.y = -100

//     game.physics.arcade.collide(this.player, this.asteroid);





//     if (cursors.left.isDown)
//     {
//         //  Move to the left
//         this.player.body.velocity.x = -350;

//         this.player.animations.play('left');
//     }
//     else if (cursors.right.isDown)
//     {
//         //  Move to the right
//         this.player.body.velocity.x = 350;

//         this.player.animations.play('right');
//     }
//     else if (cursors.up.isDown)
//     {
//         this.player.body.velocity.y = -350;
//         this.player.animations.play('up');


//     }
//     else if (cursors.down.isDown){
//         this.player.body.velocity.y = 350;
//         this.player.animations.play('down');

//     }
//     else
//     {
//         //  Stand still
//         this.player.animations.stop();

//         this.player.frame = 4;
//     }
// }