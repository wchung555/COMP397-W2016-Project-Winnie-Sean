// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _menuBackground1: objects.World;
        private _menuBackground2: objects.World;
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
            //Add Menu Background
            this._menuBackground1 = new objects.World();
            this.addChild(this._menuBackground1);
                //add secondary for smooth scroll
            this._menuBackground2 = new objects.World();
            this._menuBackground2.setSecondary();
            this.addChild(this._menuBackground2);

            //Add Player
            this._player = new objects.Player();
            this.addChild(this._player);

            //Add Menu Label
            this._menuLabel = new objects.Label(
                "Rad Randal",
                "60px Consolas",
                "#FFFFFF",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y,
                false
            );
            this._menuLabel.regX = this._menuLabel.getBounds().width * 0.5;
            this._menuLabel.regY = this._menuLabel.getBounds().height * 0.5;
            this.addChild(this._menuLabel);

            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "instructionButton", 262, 318, false);
            this.addChild(this._instructionsButton);

            // Instructions Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);

            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "playButton", 360, 258, false);
            this.addChild(this._startButton);

            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button(
                "quitButton", 259, 258, false);
            this.addChild(this._exitButton);

            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);          

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {
            this._menuBackground1.update();
            this._menuBackground2.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++
        // INSTRUCTIONS Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }

        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }

        // EXIT Button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            // Switch to the END Scene
            scene = config.Scene.END;
            changeScene();
        }

    }
}