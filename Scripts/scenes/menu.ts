// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _menuBackground1: objects.World;
        private _background: createjs.Bitmap;
        //private _menuBackground2: objects.World;
        private _player: objects.Player;
        private _instructionsButton: objects.Button;
        private _startButton: objects.Button;
        private _exitButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++
        
        
        
        
        // Start Method
        public start(): void {
            //sound
            bgm = createjs.Sound.play("idleSound", { loop: -1 });            
            console.log("idleSound Volume at " + bgm.getVolume() );
            firstRun = false;
            
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("Title"));
            this.addChild(this._background);            
            
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "instructionButton", 230, 275, false);
            this.addChild(this._instructionsButton);

            // Instructions Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);

            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "playButton", 330, 215, false);
            this.addChild(this._startButton);

            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button(
                "quitButton", 220, 215, false);
            this.addChild(this._exitButton);

            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);          

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        

        //EVENT HANDLERS ++++++++++++++++++++
        // INSTRUCTIONS Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }

        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL01;
            bgm.stop();
            changeScene();
        }

        // EXIT Button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            changeScene();
        }

    }
}