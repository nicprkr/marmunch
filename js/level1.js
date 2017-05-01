/************************   LEVEL ONE **************************/

//stuff to add: pause button, death animation, more/different foods, save high score, change character, timer, jump animation

var game = new Phaser.Game(800, 600, Phaser.AUTO, "game-area", { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', '../assets/sky.png');
    game.load.image('water', '../assets/water.png');
    game.load.image('s-ground', '../assets/short.png');
    game.load.image('m-ground', '../assets/medium.png');
    game.load.image('l-ground', '../assets/long.png');
    game.load.image('tree', '../assets/tree.png');
    game.load.image('star', '../assets/star.png');
    game.load.image('poison', '../assets/poison.png');
    game.load.image('grassyhill', '../assets/grassyhill.png');
    game.load.image('sun', '../assets/sun2.png');
    game.load.image('waterfall', '../assets/waterfall.png');
    game.load.image('mountains', '../assets/mountains.png');
    game.load.image('mountain', '../assets/mountain.png');
    game.load.image('trophy', '../assets/trophy.png');
    game.load.spritesheet('dude', '../assets/dude.png', 92, 48, 8);
    game.load.spritesheet('jump1', '../assets/jump.png', 1);
}

// **************   VARIABLES

var player,
    platforms,
    cursors,
    space,
    stars,
    background,
    score = 0,
    scoreText,
    winText,
    trees,
    WATER,
    trophy,
    dead,
    poisons;

function create() {

    //  enables physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // background
        game.add.sprite(0, 0, 'sky');
    game.world.setBounds(0, 0, 4200, 600);
    background = game.add.group();
    background.create(60,60,'sun');
    background.create(210,330,'waterfall');
    background.create(-210,120,'mountain');
    background.create(400,120,'mountain');
    background.fixedToCamera = true;
    game.add.sprite(0,480,'grassyhill');
        trees = game.add.group();
    for (var i = 0; i < 42; i++) {
        var tree = trees.create(i * Math.floor((Math.random() * 300)+1), 400, 'tree');
    }
    
    WATER = game.add.group();
    WATER.enableBody = true;
    for (var i=0; i < 9; i++){
        var x = 460;
        var water = WATER.create((x * i), game.world.height - 10, 'water');
        water.body.immovable = true;
    }

    //makes all platforms
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 24, 'l-ground');
    ground.scale.setTo(1,1);
    ground.body.immovable = true;
    var ledge = platforms.create(400, 400, 's-ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 150, 's-ground');
    ledge.body.immovable = true;
    
    ledge = platforms.create(850, game.world.height - 24, 'm-ground');
    ledge.body.immovable = true;
    
        ledge = platforms.create(1250, 400, 'l-ground');
    ledge.body.immovable = true;
    
    ledge = platforms.create(1650, game.world.height - 24, 'm-ground');
    ledge.body.immovable = true;
    
        ledge = platforms.create(2150, 388, 'm-ground');
    ledge.body.immovable = true;
    
    ledge = platforms.create(2550, 288, 'l-ground');
    ledge.body.immovable = true;

        ledge = platforms.create(3000, 188, 'm-ground');
    ledge.body.immovable = true;
    
            ledge = platforms.create(3550, game.world.height - 24, 'm-ground');
    ledge.body.immovable = true;
    
    trophy = game.add.sprite(3999, game.world.height - 250, 'trophy');
    game.physics.arcade.enable(trophy);
    trophy.enableBody = true;
    trophy.scale.setTo(0.3,0.3);
    
    // player settings
    player = game.add.sprite(92, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 500;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [4, 5, 6, 7], 10, true);
    player.animations.add('jump', [0, 1], 1, true);
    
    //  rewards
    stars = game.add.group();
    stars.enableBody = true;
    for (var i = 0; i < 42; i++){
        var star = stars.create(i * 240, 0, 'star');
        star.body.gravity.y = 600;
        star.body.bounce.y = 0.3 + Math.random() * 0.2;
    }
    var star = stars.create(i * 70, 0, 'star');
    star.body.gravity.y = 300;

    //  score
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    scoreText.fixedToCamera = true;

    //  controls
    cursors = game.input.keyboard.createCursorKeys();
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    game.camera.follow(player);
    
    //poison
    poisons = game.add.group();
    poisons.enableBody = true;
    
    for (var i = 0; i < 3; i++){
        var poison = poisons.create(i * 1000, 0, 'poison');
        poison.body.gravity.y = 600;
        poison.body.bounce.y = 0.1 + Math.random() * 0.1;
    }
    
    var poison = poisons.create(i * 1, 0, 'poison');
    poison.body.gravity.y = 300;
    
}

function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    
    //collide poison with platform
    game.physics.arcade.collide(poisons, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    game.physics.arcade.overlap(player, trophy, nextLevel, null, this);
    game.physics.arcade.overlap(player, WATER, restart, null, this);
    //if player overlaps with poison
    game.physics.arcade.overlap(player, poisons, poisonDie, null, this);
    
    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown) {
        player.body.velocity.x = -300;
        player.animations.play('left');
    } else if (cursors.right.isDown){
        player.body.velocity.x = 300;
        player.animations.play('right');
    } else{
        player.animations.stop();
        player.frame = 4;
    }
    

    if (cursors.up.isDown && player.body.touching.down || space.isDown && player.body.touching.down){
        player.body.velocity.y = -450;
        player.animations.play('jump');
    //jump u chubby thing!!! not working
    }

}

function collectStar (player, star) {
    
    star.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;

}
        
        function restart (player, water){
            player.kill();
            score = 0;
            game.state.restart();
            
        }
        
        function nextLevel (player, trophy){
            trophy.kill();
            winText = game.add.text(300, 200, 'YOU BEAT THE LEVEL', { fontSize: '32px', fill: '#000' });
            winText.fixedToCamera = true;
            //game.pause();
        }
        
function poisonDie (player, poison){
    
    score = 0;
    game.state.restart();
    
}
    
    
    