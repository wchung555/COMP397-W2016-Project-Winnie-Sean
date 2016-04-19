module objects {
    // COMPONENT (DROP) CLASS ++++++++++++++++++++++++++++++++++++
    export class Component extends objects.GameObject {
        // PUBLIC INSTANCE VARIABLES +++++++++++++++++
        public isCollision: boolean;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("component");
            
            this._leftBounds = 0;
            this._reset();
            this.name = "component";
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the bottom of the component is outside the viewport
        protected _checkBounds(): void {
            if (this.y >= this._bottomBounds) {
                this._reset();
            }
        }

        // reset the component at the top of the screen
        protected _reset(): void {
            this.isCollision = false;
            
            this._speed.y = Math.floor(Math.random() * 2) + 4; // between 4 and 6

            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
            this.y = this._topBounds;
        }//_reset()

        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            if (this.isCollision) {
                this._reset()
            }
            this._checkBounds();
            this.y += this._speed.y;
        }//update()
    }//class
}//module