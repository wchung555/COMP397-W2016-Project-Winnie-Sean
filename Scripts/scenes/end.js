var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// END SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            //Add Background
            this._endBackground = new objects.World('L2_Platform');
            this.addChild(this._endBackground);
            // add score label
            this._scoreLabel = new objects.Label("Game Over", "60px Consolas", "#FFFFFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 50, true);
            this._scoreLabel.regX = this._scoreLabel.getBounds().width * .5;
            this._scoreLabel.regY = this._scoreLabel.getBounds().height * .5;
            this.addChild(this._scoreLabel);
            // add the RESET button to the PLAY scene
            this._restartButton = new objects.Button("playButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50, false);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
            this._endBackground.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // RESET Button click event handler
        End.prototype._restartButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the MENU Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));

//# sourceMappingURL=end.js.map
