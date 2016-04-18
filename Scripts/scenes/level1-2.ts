// LEVEL 1.5 SCENE
module scenes {
    export class Level12 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneLabel: objects.Label;
        private _startButton: objects.Button;

        //Scene- - - - - - - - - - - - - - - 
        private _background1: objects.World;
        //private _background2: objects.World;
        //player- - - - - - - - - - - - - - - - - -
        private _player: objects.Player;


        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // add world to the scene
            this._background1 = new objects.World("L2_Platform");
            this.addChild(this._background1);

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // add label, start button to scene
            this._sceneLabel = new objects.Label(
                "Level 2",
                "60px Consolas",
                "#FFFFFF",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y,
                false
            );
            this._sceneLabel.regX = this._sceneLabel.getBounds().width * 0.5;
            this._sceneLabel.regY = this._sceneLabel.getBounds().height * 0.5;
            this.addChild(this._sceneLabel);

            this._startButton = new objects.Button(
                "playButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, false);
            this._startButton.regX = this._startButton.width * .5;
            this._startButton.regY = this._startButton.height * .5;
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._background1.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL2 Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        }

    }
}