var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Boss (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    var Boss = (function (_super) {
        __extends(Boss, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Boss() {
            _super.call(this, "Batwing");
            this._health = 100;
            this._reset();
            this.name = "Batwing";
            this.y = 40;
            this._speed.x = 3;
            this._rightBounds = config.Screen.WIDTH - this.width;
            this._leftBounds = config.Screen.WIDTH * 0.4;
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        Boss.prototype._checkBounds = function () {
            switch (this._direction) {
                case "left":
                    if (this.x <= this._leftBounds) {
                        this._speed.x = -this._speed.x;
                    }
                    break;
                case "right":
                    if (this.x >= this._rightBounds) {
                        this._speed.x = -this._speed.x;
                    }
                    break;
                default:
                    break;
            }
        };
        // reset the enemy offscreen
        Boss.prototype._reset = function () {
            this.x = config.Screen.WIDTH + 10;
            this._direction = "left";
        }; //reset()
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Boss.prototype.update = function () {
            this._checkBounds();
            this.x -= this._speed.x;
            if (this.projectileHit) {
                this._health - objects.Projectile.readHitPoints();
                this.x -= this._speed.x;
            }
        }; //update()
        Boss.prototype.checkHealth = function () {
            return this._health;
        };
        Boss.numSpikes = 0;
        Boss.resetLock1 = false;
        Boss.resetLock2 = false;
        return Boss;
    }(objects.GameObject));
    objects.Boss = Boss; //class
})(objects || (objects = {})); //module

//# sourceMappingURL=boss.js.map
