module objects {
    // SPACE CLASS ++++++++++++++++++++++++++++++++++++
    export class Space extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("space");

            this._speed.x = 5; //space speed
            this._reset(0);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the space is met the left of the scene
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                this._reset(0);
            }
        }

        // reset the space off-screen
        protected _reset(value: number): void {
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the space 5 px per frame
        public update(): void {
            this._checkBounds(-1250); // space width - canvas width
            this.x -= this._speed.x;
        }
    }
}