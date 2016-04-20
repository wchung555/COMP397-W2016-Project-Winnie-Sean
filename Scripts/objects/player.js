var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        function Player() {
            _super.call(this, assets.getResult("Player"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = (this.height * 0.5) - 3;
            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);
            this.x = this._leftBounds + 20;
            this.y = objects.World.floor - this.regY; //config.Screen.HEIGHT - this.regY;
        }
        // PRIVATE METHODS
        // prevent the player's avatar from going offscreen
        Player.prototype._checkBounds = function () {
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
        };
        // PUBLIC METHODS
        // move the player's avatar left or right according to the mouse's movements
        Player.prototype.update = function () {
            if (stage.mouseX > config.Screen.CENTER_X) {
                this.x = config.Screen.CENTER_X;
            }
            else {
                this.x = stage.mouseX;
            }
            this._checkBounds();
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
