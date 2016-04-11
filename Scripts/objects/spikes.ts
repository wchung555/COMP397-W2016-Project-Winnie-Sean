module objects {
    // Spikes (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    export class Spikes extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        public isColliding: boolean;
        static numSpikes: number = 0;
        static resetLock1: boolean = false;
        static resetLock2: boolean = false;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("spikes");

            Spikes.numSpikes++;
            //this._rightBounds += this._rightBounds + (Spikes.numSpikes * this.width)
            this._reset();
            this.name = "spikes";
            this.y =  World.floor = this.regY;    

            this.isColliding = false;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        protected _checkBounds(value: number): void {
            
            
            
            if (this.x <= value) {
                this._reset();
            }
        }

        // reset the enemy offscreen
        protected _reset(): void {
            /*this._speed.y = Math.floor(Math.random() * 2) + 4; // between 4 and 6
            this._speed.x = Math.floor(Math.random() * 10) - 5; // between -5 and 5*/
            
            /*since resets are unpredictable and objects are reset to similar the same y-value
                an x position needs to be determined. Assuming 3 positions, 2 position locks have been made.
                This sets a grid of 3 spaces [  ][  ][  ]
                If an object exists in position 1, that position is locked until the last pixel of the image is 
                out of that space. Reset is done to the earliest available reset position available.
                Checks for false condition for computational performance. 
                In future, for scalability, best to use array of locks based on # of instances.*/
                       
            if (!Spikes.resetLock1) { //check position 1
                this.x = this._rightBounds;
            } else if (!Spikes.resetLock2){ //position 1 occupied; check position 2...
                this.x = this._rightBounds + this.width;
            } else { //postition 2 occupied
                this.x = this._rightBounds + (this.width * 2); //place in position 3. 
            }
            
        }//reset()


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            if (this.isColliding) {
                this._reset();
            } else {
                this._checkBounds(this._leftBounds);
                this.x -= this._speed.x;
            }//else
        }//update()
        
        /*
        //reverse the horizontal motion of object (bounce)
        public bounceX(): void {
            this._speed.x = -this._speed.x;
        }//bounceX
        */
    }//class
}//module