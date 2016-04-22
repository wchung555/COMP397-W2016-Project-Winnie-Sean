var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function GameOver() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        GameOver.prototype.start = function () {
            //Cut the music
            bgm.stop();
            bgm = createjs.Sound.play("endScreenSound", { loop: -1 });
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("gameOver"));
            this.addChild(this._background);
            // add the Start button to the INSTRUCTIONS scene
            this._nextButton = new objects.Button("playButton", 370, 330, false);
            this.addChild(this._nextButton);
            // Start Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add the Exit button to the MENU scene
            this._menuButton = new objects.Button("menuButton", 170, 330, false);
            this.addChild(this._menuButton);
            // Exit Button event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            // add the Exit button to the MENU scene
            this._quitButton = new objects.Button("quitButton_small", 5, config.Screen.HEIGHT + 25, false);
            this.addChild(this._quitButton);
            // Exit Button event listener
            this._quitButton.on("click", this._quitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        GameOver.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        GameOver.prototype._nextButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL01;
            bgm.stop();
            changeScene();
        };
        // EXIT Button click event handler
        GameOver.prototype._menuButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.MENU;
            bgm.stop();
            changeScene();
        };
        // EXIT Button click event handler
        GameOver.prototype._quitButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            bgm.stop();
            changeScene();
        }; //quit click
        return GameOver;
    })(objects.Scene);
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map