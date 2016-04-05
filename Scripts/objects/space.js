var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SPACE CLASS ++++++++++++++++++++++++++++++++++++
    var Space = (function (_super) {
        __extends(Space, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Space() {
            _super.call(this, "space");
            this._speed.x = 5; //space speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the space is met the left of the scene
        Space.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the space off-screen
        Space.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the space 5 px per frame
        Space.prototype.update = function () {
            this._checkBounds(-1250); // space width - canvas width
            this.x -= this._speed.x;
        };
        return Space;
    })(objects.GameObject);
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map