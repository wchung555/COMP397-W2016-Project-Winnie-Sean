// END SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endBackground: createjs.Bitmap;
        private _restartButton: objects.Button;
        private _scoreLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++

        // Start Method
        public start(): void {
            //Add Background
            this._endBackground = new createjs.Bitmap(assets.getResult("EndBackground"));
            this.addChild(this._endBackground);

            // add score label
            this._scoreLabel = new objects.Label("Score: " + score,
                "35px Consolas",
                "#FFFFFF",
                config.Screen.CENTER_X + 20,
                150,
                true);
            this.addChild(this._scoreLabel);

            // add the RESET button to the PLAY scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X - 40,
                config.Screen.CENTER_Y - 30, true);
            this.addChild(this._restartButton);

            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // RESET Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}