// INSTRUCTIONS SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _startButton: objects.Button;
        private _menuButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Cut the music
            bgm.stop();
            //bgm = createjs.Sound.play("idleSound", { loop: -1 });
            
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("endScreen"));
            this.addChild(this._background);            
            
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button(
                "playButton", 370, 330, false);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
             // add the Exit button to the MENU scene
            this._menuButton = new objects.Button(
                "menuButton", 170, 330, false);
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
            // Switch to the END Scene
            scene = config.Scene.MENU;
            bgm.stop();
            changeScene();
        }

    }
}