var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BATWING (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    var Boss = (function (_super) {
        __extends(Boss, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Boss() {
            _super.call(this, "EnemyBatman");
            this._leftBounds = 0;
            this.x = config.Screen.CENTER_X;
            this.y = config.Screen.CENTER_Y;
            this._speed.x = Math.random() * 10;
            this._speed.y = Math.random() * 10;
            this.name = "boss";
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        Boss.prototype._checkBounds = function () {
            if (this.x <= this._leftBounds || this.x >= this._rightBounds) {
                this.bounceX();
            }
            if (this.y >= this._bottomBounds || this.y <= this._topBounds) {
                this.bounceY();
            }
        };
        //reverse the horizontal motion of object (bounce)
        Boss.prototype.bounceX = function () {
            this._speed.x = -this._speed.x;
        }; //bounceX
        //reverse the vertical motion of object (bounce)
        Boss.prototype.bounceY = function () {
            this._speed.y = -this._speed.y;
        }; //bounceY
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Boss.prototype.update = function () {
            this._checkBounds();
            this.y += this._speed.y;
            this.x += this._speed.x;
        }; //update()
        return Boss;
    })(objects.GameObject);
    objects.Boss = Boss; //class
})(objects || (objects = {})); //module
//# sourceMappingURL=boss.js.map