// INSTRUCTIONS SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _instructionsBackground: createjs.Bitmap;
        private _startButton: objects.Button;
        
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
                "StartButton",
                config.Screen.CENTER_X - 40,
                config.Screen.HEIGHT - 105, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }

    }
}