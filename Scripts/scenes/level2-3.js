var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL 2.5 SCENE
var scenes;
(function (scenes) {
    var Level23 = (function (_super) {
        __extends(Level23, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level23() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level23.prototype.start = function () {
            bgm.stop();
            bgm = createjs.Sound.play("bossMusic", { loop: -1 });
            // add world to the scene
            this._background1 = new objects.World("Gotham");
            this.addChild(this._background1);
            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // add label, start button to scene
            this._sceneLabel = new objects.Label("Level 3", "60px Consolas", "#FFFFFF", config.Screen.CENTER_X, config.Screen.CENTER_Y, false);
            this._sceneLabel.regX = this._sceneLabel.getBounds().width * 0.5;
            this._sceneLabel.regY = this._sceneLabel.getBounds().height * 0.5;
            this.addChild(this._sceneLabel);
            this._startButton = new objects.Button("playButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, false);
            this._startButton.regX = this._startButton.width * .5;
            this._startButton.regY = this._startButton.height * .5;
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Level23.prototype.update = function () {
            this._background1.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Level23.prototype._startButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the LEVEL3 Scene
            scene = config.Scene.LEVEL3;
            changeScene();
        };
        return Level23;
    })(objects.Scene);
    scenes.Level23 = Level23;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2-3.js.map