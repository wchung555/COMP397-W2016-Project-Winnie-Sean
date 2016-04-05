var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // WORLD CLASS ++++++++++++++++++++++++++++++++++++
    var World = (function (_super) {
        __extends(World, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function World() {
            _super.call(this, "WorldPlatform");
            this._speed.x = 5; //space speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the world is met the left of the scene
        World.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the space off-screen
        World.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the space 5 px per frame
        World.prototype.update = function () {
            this._checkBounds(-808); // world width - canvas width
            this.x -= this._speed.x;
        };
        return World;
    })(objects.GameObject);
    objects.World = World;
})(objects || (objects = {}));
//# sourceMappingURL=world.js.map