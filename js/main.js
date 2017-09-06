var MONCLOA = {};

MONCLOA.Game = function() {
    
};

MONCLOA.Game.prototype = {
    init: function() {
        console.log("init");
    },
    preload: function() {
        console.log("preload");
        
        this.load.path = "media/";
        this.load.image("fondo", "house.png");
        
        this.load.spritesheet("mariano", "mariano.png", 512, 288);
    },
    create: function() {
        console.log("create");
        
        var fondo = this.add.image(this.world.centerX, this.world.centerY, "fondo");
        fondo.anchor.setTo(0.5);
        
        var mariano = this.add.sprite(this.world.centerX, this.world.centerY, "mariano");
        mariano.anchor.setTo(0.5);
        
        mariano.animations.add("fight", [7,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 12, true);
        mariano.animations.add("speak", [59,60,59,60,59,60,0,57,58,56,0,57,58,56,0], 12, true);
        mariano.play("fight");
        //mariano.play("speak");
    }
};

var game = new Phaser.Game(960, 576, Phaser.CANVAS);
game.state.add("MONCLOA.Game", MONCLOA.Game);
game.state.start("MONCLOA.Game");