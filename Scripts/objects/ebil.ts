module objects {
    // EBIL (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    export class Ebil extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("ebil");

            this._reset(this._rightBounds);
            this.name = "ebil";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        protected _checkBounds(value: number): void {                     
            if (this.x <= value || this.y >= this._bottomBounds) {
                this._reset(this._rightBounds);
            }
        }

        // reset the enemy offscreen
        protected _reset(value: number): void {
            this._speed.y = Math.floor(Math.random() * 6) - 3; // between -3 and 3
            this._speed.x = Math.floor(Math.random() * 5) + 5; // between 5 and 10

            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            this._checkBounds(this._leftBounds);
            this.y += this._speed.y;
            this.x -= this._speed.x;            
        }
    }
}