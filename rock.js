Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0}; 


function Rock(group, x, y) {
    var rock = group.create(0, 0, 'rock');
  rock.position.x = x;
    rock.position.y = y;
   rock.scale.set(0.6, 0.6);
    rock.anchor.setTo(0.5, 0.5);
    game.physics.enable(rock, Phaser.Physics.ARCADE);

}
Rock.prototype.update = function() {
    
}