// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _menuBackground: objects.World;
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
            this._menuBackground = new objects.World();
            this.addChild(this._menuBackground);     
            
            //Add Player
            this._player = new objects.Player();
            this.addChild(this._player);   
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "Rad Randal",
                "60px Consolas",
                "#FFFFFF",
                config.Screen.CENTER_Y + 50,
                config.Screen.CENTER_X - 100,
                false
            );
            this.addChild(this._menuLabel);       
            
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "instructionButton",
                config.Screen.CENTER_Y - 250,
                config.Screen.CENTER_X, false);
            this.addChild(this._instructionsButton);
            
            // Instructions Button event listener
            // this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "playButton",
                config.Screen.CENTER_Y,
                config.Screen.CENTER_X, false);
            this.addChild(this._startButton);
            
            // Start Button event listener
            // this._startButton.on("click", this._startButtonClick, this);      
            
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button(
                "quitButton",
                config.Screen.CENTER_Y + 100,
                config.Screen.CENTER_X, false);
            this.addChild(this._exitButton);
            
            // Exit Button event listener
            // this._exitButton.on("click", this._exitButtonClick, this);          
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {
this._menuBackground.update();
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
            scene = config.Scene.PLAY;
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