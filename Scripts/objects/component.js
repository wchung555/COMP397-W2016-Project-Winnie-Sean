var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // COMPONENT (DROP) CLASS ++++++++++++++++++++++++++++++++++++
    var Component = (function (_super) {
        __extends(Component, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Component() {
            _super.call(this, "component");
            this._leftBounds = 0;
            this._reset();
            this.name = "component";
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the bottom of the component is outside the viewport
        Component.prototype._checkBounds = function () {
            if (this.y >= this._bottomBounds) {
                this._reset();
            }
        };
        // reset the component at the top of the screen
        Component.prototype._reset = function () {
            this.isCollision = false;
            this._speed.y = Math.floor(Math.random() * 2) + 4; // between 4 and 6
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
            this.y = this._topBounds;
        }; //_reset()
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Component.prototype.update = function () {
            if (this.isCollision) {
                this._reset();
            }
            this._checkBounds();
            this.y += this._speed.y;
        }; //update()
        return Component;
    })(objects.GameObject);
    objects.Component = Component; //class
})(objects || (objects = {})); //module
//# sourceMappingURL=component.js.map