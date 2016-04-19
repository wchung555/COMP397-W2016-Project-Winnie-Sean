/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

var score: number;
var lives: number;

var bgm: createjs.AbstractSoundInstance;

// Game Scenes
var menu: scenes.Menu;
var instructions: scenes.Instructions;
var level1: scenes.Level1;
var level12: scenes.Level12;
var level2: scenes.Level2;
var level23: scenes.Level23;
var level3: scenes.Level3;
var end: scenes.End;




var assetData: objects.Asset[] = [
    // Add your Assets here
    { id: "component", src: "../../Assets/images/Component30x30.png" },
    { id: "EnemyBatman", src: "../../Assets/images/EnemyBatman.png" },
    { id: "EnemyCat", src: "../../Assets/images/EnemyCat.png" },
    { id: "hood", src: "../../Assets/images/EnemyBatman.png" },
    { id: "batarang", src: "../../Assets/images/Batarang.png" },
    { id: "spikes", src: "../../Assets/images/spikes.png" },
    { id: "projectile", src: "../../Assets/images/projectile.png" },
    { id: "instructionButton", src: "../../Assets/images/instructionButton.png" },
    { id: "playButton", src: "../../Assets/images/playButton.png" },
    { id: "Player", src: "../../Assets/images/hood.png" },
    { id: "quitButton", src: "../../Assets/images/quitButton.png" },
    { id: "L1_Platform", src: "../../Assets/images/WorldPlatform2.png" },
    { id: "L2_Platform", src: "../../Assets/images/PlatformL2.png" },
    { id: "Gotham", src: "../../Assets/images/Gotham.png" },
    { id: "InstructionsBackground", src: "../../Assets/images/InstructionsScreen.png" },
    { id: "Batwing", src: "../../Assets/images/batwing50.png" },
    { id: "backgroundMusic", src: "../../Assets/audio/NormalLevel_Alt.mp3" },
    { id: "bossMusic", src: "../../Assets/audio/FinalBattle.mp3" },
    { id: "grunt", src: "../../Assets/audio/DamageGrunt.wav" },
    { id: "select", src: "../../Assets/audio/Blip_Select12.wav" },
    { id: "plasma", src: "../../Assets/audio/PlasmaFire.wav" },
    { id: "powerup", src: "../../Assets/audio/Powerup10.wav" }
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");

    // create our main display list container
    stage = new createjs.Stage(canvas);

    // Enable mouse events
    stage.enableMouseOver(20);

    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);

    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);

    // sets up our stats counting workflow
    setupStats();

    // set initial scene
    scene = config.Scene.MENU;
    changeScene();

    // play background music (infinite loop)    
    bgm = createjs.Sound.play("backgroundMusic", { loop: -1 });
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin();

    // calling State's update method
    currentScene.update();

    // redraw/refresh stage every frame
    stage.update();

    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {

    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTIONS:
            // show the PLAY scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRUCTIONS Scene");
            break;
        case config.Scene.LEVEL1:
            // show the PLAY scene
            stage.removeAllChildren();
            level1 = new scenes.Level1();
            currentScene = level1;
            console.log("Starting LEVEL 1 Scene");
            break;
        case config.Scene.LEVEL12:
            // show the PLAY scene
            stage.removeAllChildren();
            level12 = new scenes.Level12();
            currentScene = level12;
            console.log("Starting LEVEL 1.5 Scene");
            break;
        case config.Scene.LEVEL2:
            // show the PLAY scene
            stage.removeAllChildren();
            level2 = new scenes.Level2();
            currentScene = level2;
            console.log("Starting LEVEL 2 Scene");
            break;
            case config.Scene.LEVEL23:
            // show the PLAY scene
            stage.removeAllChildren();
            level23 = new scenes.Level23();
            currentScene = level12;
            console.log("Starting LEVEL 2.5 Scene");
            break;
        case config.Scene.LEVEL3:
            // show the PLAY scene
            stage.removeAllChildren();
            level3 = new scenes.Level3();
            currentScene = level3;
            console.log("Starting LEVEL 3 Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;