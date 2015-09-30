
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var enemy;
var rock;
var wasd;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'boulder.png');
}

function create() {
    ship = new Ship(game, game.world.centerX, game.world.centerY)
    //game.add.sprite(200, 200, 'rock');

    enemies = game.add.group();
    rocks = game.add.group();
    for (var i = 0; i < 9; i++) {
    	enemy = new Enemy(game, enemies, i * 80 + 100, 100);
    	rock = new Rock(game, rocks, i*80, 400)
    }

    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}

function update() {
    enemies.forEach(function(enemy){
    	enemy.angle++;
    });

    game.physics.arcade.overlap(ship, enemies, collisionHandler, null, this);
    game.physics.arcade.overlap(ship, rocks, collisionHandler, null, this);
}

function collisionHandler(player, collider){
	collider.collide(player);
}

