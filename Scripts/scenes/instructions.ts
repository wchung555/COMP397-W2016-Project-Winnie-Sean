// INSTRUCTIONS SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _instructionsBackground: createjs.Bitmap;
        private _startButton: objects.Button;
        private _menuButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add background
            this._instructionsBackground = new createjs.Bitmap(assets.getResult("InstructionsBackground"));
            this.addChild(this._instructionsBackground);            
            
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button(
                "playButton", 512, 220, false);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
             // add the Exit button to the MENU scene
            this._menuButton = new objects.Button(
                "menuButton", 50, 220, false);
            this.addChild(this._menuButton);

            // Exit Button event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL01;
            bgm.stop();
            changeScene();
        }
        
         // EXIT Button click event handler
        private _menuButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}