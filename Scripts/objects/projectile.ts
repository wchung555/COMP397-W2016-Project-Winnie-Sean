module objects {
    // Spikes (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    export class Projectile extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        public isColliding: boolean;
        public _fired: boolean;
        
        static numSpikes: number = 0;
        static resetLock1: boolean = false;
        static resetLock2: boolean = false;

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("projectile");

            Spikes.numSpikes++;
            //this._rightBounds += this._rightBounds + (Spikes.numSpikes * this.width)
            this._reset();
            this.name = "projectile";
            this.y =  World.floor - this.height +3;  
            
            this._speed.x = 5;  
            this._rightBounds = config.Screen.WIDTH;
            this._leftBounds = -this.width;

            this.isColliding = false;
            this._fired = false;
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
            this.x = this._leftBounds;
            this._fired = false;
            
        }//reset()


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            //if !_fired
            //stay in position
            //else if xpos > this._rightbounds, reset, _fired = false
            //else increment xpos
            
            if ( (this.x < 0) && (!this._fired) ) { //if it is sitting on the left, unfired
                //do nothing.
            } else if (this.isColliding) { // if it has been fired and is colliding with something
                this._reset();
            } else if (this.x > this._rightBounds){
                this._reset();
                
            } else {
                this.x += this._speed.x;
            }
            
            
        }//update()
        
        public fire(playerX: number, playerY: number): void {
            this._fired = true;
            this.x = playerX + 44;
            this.y = playerY + 10;
            this.update();
        }
        /*
        //reverse the horizontal motion of object (bounce)
        public bounceX(): void {
            this._speed.x = -this._speed.x;
        }//bounceX
        */
    }//class
}//module