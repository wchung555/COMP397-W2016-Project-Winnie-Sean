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
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function World() {
            _super.call(this, "WorldPlatform");
            this._speed.x = 5; //space speed
            this._reset(0);
            World.boundVal -= this.width; //set the value for checkbounds to be world width - canvas width
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the world is met the left of the scene
        World.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(World.resetVal); //place at edge of other background which is now at x=0
            }
        };
        // reset the space off-screen
        World.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the space 5 px per frame
        World.prototype.update = function () {
            this._checkBounds(World.boundVal); //use the boundary value option
            this.x -= this._speed.x;
        };
        //Change this instance to be the secondary value and adjust behavior of first object to suit.
        //This method works like a setting to allow for two different background scrolling modes in the interest of code reuse.
        //First mode is default; A single instance of an image is reset repeatedly.
        //Second mode uses a second instance of world image to scroll next to it for smoothness.
        World.prototype.setSecondary = function () {
            World.resetVal = this.width;
            World.boundVal = -this.width;
            this._reset(World.resetVal);
        };
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        World.resetVal = 0;
        World.boundVal = config.Screen.WIDTH;
        World.floor = 428;
        return World;
    }(objects.GameObject));
    objects.World = World;
})(objects || (objects = {}));

//# sourceMappingURL=world.js.map
