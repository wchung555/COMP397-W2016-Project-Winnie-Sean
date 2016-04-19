// END SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endBackground: objects.World;
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
            this._endBackground = new objects.World('L2_Platform');
            this.addChild(this._endBackground);

            // add score label
            this._scoreLabel = new objects.Label("Game Over",
                "60px Consolas",
                "#FFFFFF",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y - 50,
                true);
            this._scoreLabel.regX = this._scoreLabel.getBounds().width * .5;
            this._scoreLabel.regY = this._scoreLabel.getBounds().height * .5;
            this.addChild(this._scoreLabel);

            // add the RESET button to the PLAY scene
            this._restartButton = new objects.Button(
                "playButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 50, false);
            this.addChild(this._restartButton);

            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._endBackground.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // RESET Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the MENU Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
    }
}