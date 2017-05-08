//game dimensions: 4200 x 600
//just add platform map instead of individual platforms?
//to add - death function, next levels
//add - death animation, vegetable array, animations for power ups, background animations (parallax/clouds)

var marmunch = marmunch || {};

//title screen
marmunch.Game2 = function(){};

marmunch.Game2.prototype = {
  create: function() {
    console.log("level two");
  	//set world dimensions
    this.game.world.setBounds(0, 0, 4200, 600);

    //background
    this.background = this.game.add.sprite(0,0, 'sky');
    this.sun = this.game.add.sprite(200,50, 'sun');
    this.sun.fixedToCamera = true;
    this.mountain = this.game.add.sprite(0, 150,'mountain');
    this.mountain.fixedToCamera = true;
    this.grasshill = this.game.add.sprite(0, this.game.world.height - 150, 'grassyhill');
    this.makeTrees();
      
      
    //water
      
    this.water = this.game.add.sprite(0, this.game.world.height - 50, 'water');
    this.game.physics.arcade.enable(this.water);
    this.water.physicsBodyType = Phaser.Physics.ARCADE;
    this.water.enableBody = true;
      
    //need to figure out how to add groups to an object property, this is super long and convoluted
    this.platform1 = this.game.add.sprite(0, this.game.world.height - 200, 'platform');
    this.game.physics.arcade.enable(this.platform1);
    this.platform1.enableBody = true;
    this.platform1.body.immovable = true;
      
    this.platformlast = this.game.add.sprite(4000, this.game.world.height - 100, 'platform');
    this.game.physics.arcade.enable(this.platformlast);
    this.platformlast.enableBody = true;
    this.platformlast.body.immovable = true;
      
    //trophy
    this.trophy = this.game.add.sprite(4050, this.game.world.height - 200, 'trophy');
    this.game.physics.arcade.enable(this.trophy);
    this.trophy.enableBody = true;
    this.trophy.scale.setTo(0.3,0.3);
      
    //create player
    this.player = this.game.add.sprite(92, this.game.world.height - 350, 'dude');
    this.player.scale.setTo(1);
    this.player.animations.add('left', [0, 1, 2, 3], 7, true);
    this.player.animations.add('right', [4, 5, 6, 7],7, true);
    this.game.physics.arcade.enable(this.player);
      
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y =450;
    this.player.body.collideWorldBounds = true;
    

    //player initial score of zero
    this.playerScore = 0;

    //enable player physics
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.game.camera.follow(this.player);
      
    //controls
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //generate game elements
    this.generateCollectables();
    this.makeGround();
   /* this.generateAsteriods(); future reference to add enemies */

    //show score
    this.showLabels();

    //sounds
    this.explosionSound = this.game.add.audio('explosion');
    console.log(this.explosionSound);
    this.collectSound = this.game.add.audio('collect');
  },
    
  update: function() {
    this.game.physics.arcade.collide(this.player, this.platform1);
    this.game.physics.arcade.collide(this.player, this.ground);
    this.game.physics.arcade.collide(this.player, this.platformlast);
    this.game.physics.arcade.collide(this.collectables, this.ground);
    this.game.physics.arcade.collide(this.collectables, this.platform1);
    this.game.physics.arcade.collide(this.collectables, this.platformlast);
    
    this.player.body.velocity.x = 0;
    
      if(this.cursors.left.isDown) {
          this.player.body.velocity.x = -300;
          this.player.animations.play('left');
      } else if(this.cursors.right.isDown) {
          this.player.body.velocity.x = 300;
          this.player.animations.play('right');
      } else {
          this.player.animations.stop();
          this.player.frame = 4;
      }
      
      if(this.cursors.up.isDown && this.player.body.touching.down){
        this.player.body.velocity.y = -450;
      }
    
    /*if(this.game.input.activePointer.justPressed()) {
      
      //move on the direction of the input
      this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
    }*/

    //collision between player and asteroids
   /* this.game.physics.arcade.collide(this.player, this.asteroids, this.hitAsteroid, null, this);*/
    this.game.physics.arcade.collide(this.player, this.trophy, this.level2, null, this);

          //collision between player and water
    this.game.physics.arcade.overlap(this.player, this.water, this.drown, null, this);
      
    //overlapping between player and collectables
    this.game.physics.arcade.overlap(this.player, this.collectables, this.collect, null, this);
  },
    makeTrees: function(){
        this.trees = this.game.add.group();
        var tree;
    for (var i = 0; i < 42; i++) {
        tree = this.trees.create(i * Math.floor((Math.random() * 300)+1), 400, 'tree');
    }
 },
  generateCollectables: function() {
    this.collectables = this.game.add.group();
    this.collectables.enableBody = true;
    this.collectables.physicsBodyType = Phaser.Physics.ARCADE;
    var collectable;
    for (var i = 0; i < 12; i++) {
      collectable = this.collectables.create(i * 240, 0, 'veg');
      collectable.body.gravity.y = 600;
      collectable.body.bounce.y = 0.15 * Math.random() * 0.2;
    }

  },
  /*generateAsteriods: function() {
    this.asteroids = this.game.add.group();
    
    //enable physics in them
    this.asteroids.enableBody = true;

    //phaser's random number generator
    var numAsteroids = this.game.rnd.integerInRange(150, 200)
    var asteriod;

    for (var i = 0; i < numAsteroids; i++) {
      //add sprite
      asteriod = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
      asteriod.scale.setTo(this.game.rnd.integerInRange(10, 40)/10);

      //physics properties
      asteriod.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
      asteriod.body.velocity.y = this.game.rnd.integerInRange(-20, 20);
      asteriod.body.immovable = true;
      asteriod.body.collideWorldBounds = true;
    }
  },
  hitAsteroid: function(player, asteroid) {
    //play explosion sound
    this.explosionSound.play();


    //make the player explode
    var emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
    emitter.makeParticles('playerParticle');
    emitter.minParticleSpeed.setTo(-200, -200);
    emitter.maxParticleSpeed.setTo(200, 200);
    emitter.gravity = 0;
    emitter.start(true, 1000, null, 100);
    this.player.kill();

    this.game.time.events.add(800, this.gameOver, this);
  },*/
    
  gameOver: function() {    
    //pass it the score as a parameter 
    this.game.state.start('MainMenu', true, false, this.playerScore);
  },
  level2: function(player, trophy) {
      console.log("next level");
      this.trophy.destroy();
      this.game.state.start('Game2');
  },
  collect: function(player, collectable) {
    //play collect sound
    this.collectSound.play();

    //update score
    this.playerScore++;
    this.scoreLabel.text = this.playerScore;

    //remove sprite
    collectable.destroy();
  },
  drown: function(player, water) {
    //play explosion sound
    this.player.kill();
    this.game.state.restart();
  },
  showLabels: function() {
    //score text
    var text = "GAME 2";
    var style = { font: "20px Arial", fill: "#fff", align: "center" };
    this.scoreLabel = this.game.add.text(0, 0, text, style);
    this.scoreLabel.fixedToCamera = true;
  },
     makeGround: function() { 
    this.ground = this.game.add.group();

    //enable physics in them
    this.ground.enableBody = true;
    this.ground.physicsBodyType = Phaser.Physics.ARCADE;
    var numLedges = this.game.rnd.integerInRange(10,15);
    var ledge;
        for (var i = 0; i < numLedges; i++){
            ledge = this.ground.create(400+(i*350 + i*2.5), (this.game.world.height - this.game.rnd.integerInRange(100,400)), 'platform');  
            ledge.enableBody = true;
            ledge.physicsBodyType = Phaser.Physics.ARCADE;
            ledge.body.immovable = true;
    }
    }
      
};
  

/*
TODO

-audio
-asteriod bounch
*/
