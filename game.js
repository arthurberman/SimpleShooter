
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update: update, create:create, collide2: collide2, collide1: collide1});

//var ship;
var wasd;
function preload () {
    game.load.image('rock', 'boulder.png')
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    ship = new Ship(game, 50, 50);
    game.physics.enable(Ship, Phaser.Physics.ARCADE);
    enemies = game.add.group();
    enemies.enableBody = true;
    viewGroup = game.add.group();
    rocks = game.add.group();
    rocks.enableBody = true;
    viewGrouprocks = game.add.group();
    for (var i = 0; i < 10; i ++) {
        var enemy = Enemy(enemies, 200 + i * 70, 200 + i * 5);
        var rock = Rock(rocks, 350 - i * 70, 200 + i * 20);
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

/*    var mX = ship.position.x;
    var mY = ship.position.y;
    /* look at the mouse 
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    game.physics.arcade.moveToPointer(this, 60, game.input.activePointer, 500);

*/

    enemies.forEach(function(enemy) {

        enemy.angle++;
    });
    game.physics.arcade.collide(ship, rocks);
    game.physics.arcade.collide(ship, enemies);
    game.physics.arcade.overlap(ship, enemies, collide2, null, this);
    game.physics.arcade.overlap(rocks, ship, collide1, null, null);

}
function collide1 (x, y){
    console.log("Whats happening")
    y.kill(true);

}
function collide2 (x, y){
    console.log("Whats happening")
    x.kill(true);

}


