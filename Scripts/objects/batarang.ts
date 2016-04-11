module objects {
    // BATWING (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    export class Batarang extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        public isColliding: boolean;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("batarang");

            this._reset(this._rightBounds);
            this.name = "batarang";

            this.isColliding = false;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        protected _checkBounds(value: number): void {
            if (this.x <= value || this.y >= this._bottomBounds) {
                this._reset(this._topBounds);
            }
        }

        // reset the enemy offscreen
        protected _reset(value: number): void {
            this._speed.y = Math.floor(Math.random() * 2) + 4; // between 4 and 6
            this._speed.x = Math.floor(Math.random() * 10) - 5; // between -5 and 5

            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
            this.y = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            if (this.isColliding) {
                this._reset(this._topBounds);
            } else {
                this._checkBounds(this._leftBounds);
                this.y += this._speed.y;
                this.x -= this._speed.x;
            }//else
        }//update()
        
        
        //reverse the horizontal motion of object (bounce)
        public bounceX(): void {
            this._speed.x = -this._speed.x;
        }//bounceX
        
    }//class
}//module