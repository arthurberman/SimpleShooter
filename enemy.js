
Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


function Enemy(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'enemy');
    this.anchor.setTo(0.5, 0.5);
    this.scale.setTo(.25,.25);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

}
Enemy.prototype.update = function() {
    var sX = ship.position.x;
    var sY = ship.position.y;
    /* look at the mouse */
    this.angle = Math.atan2(this.position.x - sX, this.position.y - sY)  * -57.2957795;

    game.physics.arcade.moveToObject(this, ship, 45);
}