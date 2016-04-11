var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Menu Background
            this._menuBackground = new objects.World();
            this.addChild(this._menuBackground);
            //Add Player
            this._player = new objects.Player();
            this.addChild(this._player);
            //Add Menu Label
            this._menuLabel = new objects.Label("Rad Randal", "60px Consolas", "#FFFFFF", config.Screen.CENTER_X, config.Screen.CENTER_Y, false);
            this._menuLabel.regX = this._menuLabel.getBounds().width * 0.5;
            this._menuLabel.regY = this._menuLabel.getBounds().height * 0.5;
            this.addChild(this._menuLabel);
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button("instructionButton", 262, 318, false);
            this.addChild(this._instructionsButton);
            // Instructions Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("playButton", 360, 258, false);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button("quitButton", 259, 258, false);
            this.addChild(this._exitButton);
            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
            this._menuBackground.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // INSTRUCTIONS Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        // START Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // EXIT Button click event handler
        Menu.prototype._exitButtonClick = function (event) {
            // Switch to the END Scene
            scene = config.Scene.END;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
