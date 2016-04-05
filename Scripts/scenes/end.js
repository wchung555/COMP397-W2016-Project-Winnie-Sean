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
            this._endBackground = new createjs.Bitmap(assets.getResult("EndBackground"));
            this.addChild(this._endBackground);
            // add score label
            this._scoreLabel = new objects.Label("Score: " + score, "35px Consolas", "#FFFFFF", config.Screen.CENTER_X + 20, 150, true);
            this.addChild(this._scoreLabel);
            // add the RESET button to the PLAY scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X - 40, config.Screen.CENTER_Y - 30, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // RESET Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    })(objects.Scene);
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map