var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // DOUGHNUT CLASS ++++++++++++++++++++++++++++++++++++
    var Doughnut = (function (_super) {
        __extends(Doughnut, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Doughnut() {
            _super.call(this, "donut");
            this._speed.x = 5; //doughnut speed
            this._reset(this._rightBounds);
            this.name = "doughnut";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the doughnut is outside the viewport  
        Doughnut.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the doughnut offscreen
        Doughnut.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the doughnut 5 px per frame and reset its position if neccessary
        Doughnut.prototype.update = function () {
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Doughnut;
    })(objects.GameObject);
    objects.Doughnut = Doughnut;
})(objects || (objects = {}));
//# sourceMappingURL=doughnut.js.map