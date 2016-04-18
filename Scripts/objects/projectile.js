var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PROJECTILE CLASS ++++++++++++++++++++++++++++++++++++
    var Projectile = (function (_super) {
        __extends(Projectile, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Projectile() {
            _super.call(this, "projectile");
            this._reset();
            this.name = "projectile";
            this.y = objects.World.floor - this.height + 3;
            this._speed.x = 5;
            this._speed.y = .5;
            this._rightBounds = config.Screen.WIDTH;
            this._leftBounds = -this.width;
            this.isColliding = false;
            this._fired = false;
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        Projectile.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset();
            }
        };
        // reset the enemy offscreen
        Projectile.prototype._reset = function () {
            this.x = this._leftBounds;
            this._fired = false;
        }; //reset()
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Projectile.prototype.update = function () {
            //if !_fired
            //stay in position
            //else if xpos > this._rightbounds, reset, _fired = false
            //else increment xpos
            if ((this.x < 0) && (!this._fired)) {
            }
            else if (this.isColliding) {
                this._reset();
            }
            else if (this.x > this._rightBounds || this.y > this._bottomBounds) {
                this._reset();
            }
            else {
                this.x += this._speed.x;
                this.y += this._speed.y;
            }
        }; //update()
        Projectile.prototype.fire = function (playerX, playerY) {
            this._fired = true;
            this.x = playerX + 20;
            this.y = playerY - 20;
            this.update();
        };
        Projectile.readHitPoints = function () {
            return this.hitPoints;
        };
        Projectile.hitPoints = 10;
        Projectile.resetLock1 = false;
        Projectile.resetLock2 = false;
        return Projectile;
    })(objects.GameObject);
    objects.Projectile = Projectile; //class
})(objects || (objects = {})); //module
//# sourceMappingURL=projectile.js.map