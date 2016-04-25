var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Win = (function (_super) {
        __extends(Win, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Win() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Win.prototype.start = function () {
            //Cut the music
            bgm.stop();
            bgm = createjs.Sound.play("victoryLoop", { loop: 0, volume: 0.25 });
            this._secondarySound = createjs.Sound.play("idleSound", { loop: -1 });
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("winScreen"));
            this.addChild(this._background);
            // add the Exit button to the MENU scene
            this._nextButton = new objects.Button("nextButton", 270, 330, false);
            this.addChild(this._nextButton);
            // Exit Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Win.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // EXIT Button click event handler
        Win.prototype._nextButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            bgm.stop();
            changeScene();
        };
        return Win;
    }(objects.Scene));
    scenes.Win = Win;
})(scenes || (scenes = {}));

//# sourceMappingURL=win.js.map
