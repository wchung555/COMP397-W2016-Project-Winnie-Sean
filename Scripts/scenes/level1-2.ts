// Level 1.5 SCENE
module scenes {
    export class Level12 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _startButton: objects.Button;
        private _exitButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
                        
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("Pre2"));
            this.addChild(this._background);            
            
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button(
                "playButton", 512, 220, false);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
             // add the Exit button to the MENU scene
            this._exitButton = new objects.Button(
                "quitButton", 55, 220, false);
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
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        }
        
         // EXIT Button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            bgm.stop();
            changeScene();
        }
        

    }
}