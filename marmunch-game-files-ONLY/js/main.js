var marmunch = marmunch || {};

marmunch.game = new Phaser.Game(800, 600, Phaser.AUTO, "game-area");

marmunch.game.state.add('Boot', marmunch.Boot);
marmunch.game.state.add('Preload', marmunch.Preload);
marmunch.game.state.add('MainMenu', marmunch.MainMenu);
marmunch.game.state.add('Game1', marmunch.Game1);
marmunch.game.state.add('Game2', marmunch.Game2);

marmunch.game.state.start('Boot');