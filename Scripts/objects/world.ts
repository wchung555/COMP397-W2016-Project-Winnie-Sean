module objects {
    // WORLD CLASS ++++++++++++++++++++++++++++++++++++
    export class World extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        static resetVal: number = 0;
        static boundVal: number = config.Screen.WIDTH;
        static floor: number = 428;
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("WorldPlatform");

            this._speed.x = 5; //space speed
            this._reset(0);
            World.boundVal -= this.width; //set the value for checkbounds to be world width - canvas width
        }
        
        

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the world is met the left of the scene
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                this._reset(World.resetVal); //place at edge of other background which is now at x=0
            }
        }

        // reset the space off-screen
        protected _reset(value: number): void {
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the space 5 px per frame
        public update(): void {
            this._checkBounds(World.boundVal); //use the boundary value option
            this.x -= this._speed.x;
        }
        
        //Change this instance to be the secondary value and adjust behavior of first object to suit.
                //This method works like a setting to allow for two different background scrolling modes in the interest of code reuse.
                //First mode is default; A single instance of an image is reset repeatedly.
                //Second mode uses a second instance of world image to scroll next to it for smoothness.
        public setSecondary(): void {
            World.resetVal = this.width;
            World.boundVal = -this.width;
            this._reset(World.resetVal);
        }
    }
}