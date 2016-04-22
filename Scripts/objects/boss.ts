module objects {
    // Boss (ENEMY) CLASS ++++++++++++++++++++++++++++++++++++
    export class Boss extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _health: number;
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

            if (isDemo) { this._health = 20; }
            else { this._health = 100; }

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
            if (this.x <= this._leftBounds) {
                this._speed.x = -3;
            } else if (this.x >= this._rightBounds) {
                this._speed.x = 3;
            }
        }

        // reset the enemy offscreen
        protected _reset(): void {
            this.x = config.Screen.WIDTH + 10;
        }//reset()

        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the enemy across the screen
        public update(): void {
            this._checkBounds();
            this.x -= this._speed.x;

            if (this.projectileHit) {
                this._health -= Projectile.readHitPoints();
                this.projectileHit = false;
            }
        }//update()

        public checkHealth(): number {
            return this._health;
        }
    }//class
}//module