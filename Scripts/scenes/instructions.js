var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            //Add background
            this._instructionsBackground = new createjs.Bitmap(assets.getResult("InstructionsBackground"));
            this.addChild(this._instructionsBackground);
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button("playButton", 512, 220, false);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add the Exit button to the MENU scene
            this._menuButton = new objects.Button("menuButton", 50, 220, false);
            this.addChild(this._menuButton);
            // Exit Button event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Instructions.prototype._startButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL01;
            bgm.stop();
            changeScene();
        };
        // EXIT Button click event handler
        Instructions.prototype._menuButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map