var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // EBIL (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    var Ebil = (function (_super) {
        __extends(Ebil, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Ebil() {
            _super.call(this, "ebil");
            this._reset(this._rightBounds);
            this.name = "ebil";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        Ebil.prototype._checkBounds = function (value) {
            if (this.x <= value || this.y >= this._bottomBounds) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Ebil.prototype._reset = function (value) {
            this._speed.y = Math.floor(Math.random() * 6) - 3; // between -3 and 3
            this._speed.x = Math.floor(Math.random() * 5) + 5; // between 5 and 10
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Ebil.prototype.update = function () {
            this._checkBounds(this._leftBounds);
            this.y += this._speed.y;
            this.x -= this._speed.x;
        };
        return Ebil;
    })(objects.GameObject);
    objects.Ebil = Ebil;
})(objects || (objects = {}));
//# sourceMappingURL=ebil.js.map