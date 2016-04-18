module objects {
    // Boss (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    export class Boss extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _health: number;
        private _direction: string;
        public isHittingPlayer: boolean;
        public isHittingBat: boolean;
        public projectileHit: boolean;
        static numSpikes: number = 0;
        static resetLock1: boolean = false;
        static resetLock2: boolean = false;
        
        public isColliding: boolean;
        
        

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("Batwing");

            this._health = 100;
            
            
            this._reset();
            this.name = "Batwing";
            this.y = 40;  
            
            this._speed.x = 3;  
            this._rightBounds = config.Screen.WIDTH - this.width;
            this._leftBounds = config.Screen.WIDTH * 0.4;

            
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++
        // check to see if the left of the enemy is outside the viewport
        protected _checkBounds(): void {
            
            switch (this._direction) {
                case "left":
                    if(this.x <= this._leftBounds){
                        this._speed.x = -this._speed.x;
                    }
                    break;
                    
                case "right":
                    if(this.x >= this._rightBounds){
                        this._speed.x = -this._speed.x;
                    }
                    break;
            
                default:
                    break;
            }
           
        }

        // reset the enemy offscreen
        protected _reset(): void {
            
            this.x = config.Screen.WIDTH + 10;
            this._direction = "left";           
            
        }//reset()


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            
            this._checkBounds();
            this.x -= this._speed.x;
            
            
            if (this.projectileHit) {
                this._health - Projectile.readHitPoints();
                this.x -= this._speed.x
                this.projectileHit = false;
            } 
            
        }//update()
        
        public checkHealth(): number {
            return this._health;
        }
        
        
    }//class
}//module