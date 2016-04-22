// INSTRUCTIONS SCENE
module scenes {
    export class Win extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _startButton: objects.Button;
        private _nextButton: objects.Button;
        private _secondarySound: createjs.AbstractSoundInstance;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Cut the music
            bgm.stop();
            
            bgm = createjs.Sound.play("victoryLoop", { loop: 0, volume: 0.25 });
            this._secondarySound = createjs.Sound.play("idleSound", { loop: -1 });
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("winScreen"));
            this.addChild(this._background);            
            
            
             // add the Exit button to the MENU scene
            this._nextButton = new objects.Button(
                "nextButton", 270, 330, false);
            this.addChild(this._nextButton);

            // Exit Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        
         // EXIT Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            bgm.stop();
            changeScene();
        }

    }
}