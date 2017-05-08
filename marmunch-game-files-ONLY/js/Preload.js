var marmunch = marmunch || {};

//loading the game assets
marmunch.Preload = function(){};

marmunch.Preload.prototype = {
  preload: function() {
  	//show loading screen
  	this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
      
    this.load.image('sky', 'assets/images/sky.png');
    this.load.image('mountains', 'assets/images/mountain.png');
    this.load.image('veg', 'assets/images/carrot.png');
    this.load.image('platform', 'assets/images/short.png');
    this.load.spritesheet('dude', 'assets/images/dude.png', 92, 48, 8);
    this.load.image('water', 'assets/images/water.png');
    this.load.image('trophy', 'assets/images/trophy.png');
    this.load.image('sun', 'assets/images/sun2.png');
    this.load.image('mountain', 'assets/images/mountain.png');
    this.load.image('grassyhill', 'assets/images/grassyhill.png');
    this.load.image('waterfall', 'assets/images/waterfall.png');
    this.load.image('tree', 'assets/images/tree.png');
    //add sounds here
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};