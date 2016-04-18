module objects {
    // BATWING (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    export class Boss extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("EnemyBatman");

            this._leftBounds = 0;
            this.x = config.Screen.CENTER_X;
            this.y = config.Screen.CENTER_Y;
            this._speed.x = Math.random() * 10;
            this._speed.y = Math.random() * 10;
            this.name = "boss";
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        protected _checkBounds(): void {
            if (this.x <= this._leftBounds || this.x >= this._rightBounds) {
                this.bounceX();
            }
            if (this.y >= this._bottomBounds || this.y <= this._topBounds) {
                this.bounceY();
            }
        }

        //reverse the horizontal motion of object (bounce)
        public bounceX(): void {
            this._speed.x = -this._speed.x;
        }//bounceX

        //reverse the vertical motion of object (bounce)
        public bounceY(): void {
            this._speed.y = -this._speed.y;
        }//bounceY


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            this._checkBounds();
            this.y += this._speed.y;
            this.x += this._speed.x;
        }//update()
    }//class
}//module