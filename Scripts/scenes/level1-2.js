var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Level 1.5 SCENE
var scenes;
(function (scenes) {
    var Level12 = (function (_super) {
        __extends(Level12, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level12() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level12.prototype.start = function () {
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("Pre2"));
            this.addChild(this._background);
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button("playButton", 512, 220, false);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button("quitButton", 55, 220, false);
            this.addChild(this._exitButton);
            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Level12.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Level12.prototype._startButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        };
        // EXIT Button click event handler
        Level12.prototype._exitButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            bgm.stop();
            changeScene();
        };
        return Level12;
    })(objects.Scene);
    scenes.Level12 = Level12;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1-2.js.map