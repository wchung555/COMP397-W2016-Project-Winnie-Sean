var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BATWING (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    var Batarang = (function (_super) {
        __extends(Batarang, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Batarang() {
            _super.call(this, "batarang");
            this._reset(this._rightBounds);
            this.name = "batarang";
            this.isColliding = false;
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        Batarang.prototype._checkBounds = function (value) {
            if (this.x <= value || this.y >= this._bottomBounds) {
                this._reset(this._topBounds);
            }
        };
        // reset the enemy offscreen
        Batarang.prototype._reset = function (value) {
            this._speed.y = Math.floor(Math.random() * 2) + 4; // between 4 and 6
            this._speed.x = Math.floor(Math.random() * 10) - 5; // between -5 and 5
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
            this.y = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Batarang.prototype.update = function () {
            if (this.isColliding) {
                this._reset(this._topBounds);
            }
            else {
                this._checkBounds(this._leftBounds);
                this.y += this._speed.y;
                this.x -= this._speed.x;
            }
        };
        return Batarang;
    }(objects.GameObject));
    objects.Batarang = Batarang;
})(objects || (objects = {}));

//# sourceMappingURL=batarang.js.map
