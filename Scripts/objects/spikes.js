var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Spikes (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    var Spikes = (function (_super) {
        __extends(Spikes, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Spikes() {
            _super.call(this, "spikes");
            Spikes.numSpikes++;
            //this._rightBounds += this._rightBounds + (Spikes.numSpikes * this.width)
            this._reset();
            this.name = "spikes";
            this.y = objects.World.floor - this.height + 3;
            this._speed.x = 5;
            this._rightBounds = config.Screen.WIDTH;
            this.isHittingPlayer = false;
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        Spikes.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset();
            }
        };
        // reset the enemy offscreen
        Spikes.prototype._reset = function () {
            /*this._speed.y = Math.floor(Math.random() * 2) + 4; // between 4 and 6
            this._speed.x = Math.floor(Math.random() * 10) - 5; // between -5 and 5*/
            /*since resets are unpredictable and objects are reset to similar the same y-value
                an x position needs to be determined. Assuming 3 positions, 2 position locks have been made.
                This sets a grid of 3 spaces [  ][  ][  ]
                If an object exists in position 1, that position is locked until the last pixel of the image is
                out of that space. Reset is done to the earliest available reset position available.
                Checks for false condition for computational performance.
                In future, for scalability, best to use array of locks based on # of instances.*/
            if (!Spikes.resetLock1) {
                this.x = this._rightBounds;
            }
            else if (!Spikes.resetLock2) {
                this.x = this._rightBounds + this.width;
            }
            else {
                this.x = this._rightBounds + (this.width * 2); //place in position 3. 
            }
        }; //reset()
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        Spikes.prototype.update = function () {
            if (this.isColliding) {
                this._reset();
            }
            else {
                this._checkBounds(this._leftBounds);
                this.x -= this._speed.x;
            } //else
        }; //update()
        Spikes.numSpikes = 0;
        Spikes.resetLock1 = false;
        Spikes.resetLock2 = false;
        return Spikes;
    }(objects.GameObject));
    objects.Spikes = Spikes; //class
})(objects || (objects = {})); //module

//# sourceMappingURL=spikes.js.map
