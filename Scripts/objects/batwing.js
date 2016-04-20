var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BATWING (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    var Batwing = (function (_super) {
        __extends(Batwing, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Batwing() {
            _super.call(this, "EnemyCat");
            this._reset(this._rightBounds);
            this.name = "batwing";
            this.isColliding = false;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        Batwing.prototype._checkBounds = function (value) {
            if (this.x <= value || this.y >= this._bottomBounds) {
                this._reset(this._topBounds);
            }
        };
        // reset the enemy offscreen
        Batwing.prototype._reset = function (value) {
            this._speed.y = Math.floor(Math.random() * 2) + 4; // between 4 and 6
            this._speed.x = Math.floor(Math.random() * 10) - 5; // between -5 and 5
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
            this.y = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Batwing.prototype.update = function () {
            if (this.isColliding) {
                this._reset(this._topBounds);
            }
            else {
                this._checkBounds(this._leftBounds);
                this.y += this._speed.y;
                this.x -= this._speed.x;
            }
        };
        return Batwing;
    }(objects.GameObject));
    objects.Batwing = Batwing;
})(objects || (objects = {}));

//# sourceMappingURL=batwing.js.map
