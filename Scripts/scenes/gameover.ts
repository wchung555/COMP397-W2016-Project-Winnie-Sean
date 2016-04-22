// INSTRUCTIONS SCENE
module scenes {
    export class GameOver extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _nextButton: objects.Button;
        private _menuButton: objects.Button;
        private _quitButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Cut the music
            bgm.stop();
            bgm = createjs.Sound.play("endScreenSound", { loop: -1 });
            
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("gameOver"));
            this.addChild(this._background);            
            
            // add the Start button to the INSTRUCTIONS scene
            this._nextButton = new objects.Button(
                "playButton", 370, 330, false);
            this.addChild(this._nextButton);
            
            // Start Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            
             // add the Exit button to the MENU scene
            this._menuButton = new objects.Button(
                "menuButton", 170, 330, false);
            this.addChild(this._menuButton);

            // Exit Button event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            
            // add the Exit button to the MENU scene
            this._quitButton = new objects.Button(
                "quitButton_small", 5, config.Screen.HEIGHT + 25, false);
            this.addChild(this._quitButton);

            // Exit Button event listener
            this._quitButton.on("click", this._quitButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
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
        
        
         // EXIT Button click event handler
        private _quitButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            bgm.stop();
            changeScene();
        }//quit click

    }
}