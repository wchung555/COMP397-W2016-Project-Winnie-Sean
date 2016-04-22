var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            //Cut the music
            bgm.stop();
            //bgm = createjs.Sound.play("idleSound", { loop: -1 });
            //Add background
            this._background = new createjs.Bitmap(assets.getResult("endScreen"));
            this.addChild(this._background);
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button("playButton", 370, 330, false);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add the Exit button to the MENU scene
            this._menuButton = new objects.Button("menuButton", 170, 330, false);
            this.addChild(this._menuButton);
            // Exit Button event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        End.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        End.prototype._startButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the PLAY Scene
            scene = config.Scene.LEVEL01;
            bgm.stop();
            changeScene();
        };
        // EXIT Button click event handler
        End.prototype._menuButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.MENU;
            bgm.stop();
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));

//# sourceMappingURL=end.js.map
