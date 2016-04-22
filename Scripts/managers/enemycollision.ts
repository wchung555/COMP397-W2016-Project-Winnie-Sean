module managers {
    // ENEMY COLLISION MANAGER CLASS
    export class EnemyCollision {
        // PRIVATE INSTANCE VARIABLES
        private _enemy: objects.GameObject;
        constructor(enemy: objects.GameObject) {
            this._enemy = enemy;
        }

        // find the distance between two points
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        // determine if the player's avatar collides with the specified object
        public check(object: objects.GameObject): boolean {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._enemy.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var playerHalfWidth: number = this._enemy.width * 0.5;
            var objectHalfWidth: number = object.width * 0.5;
            if (object.name == this._enemy.name) { // bat-on-bat collisiions
                var minimumDistance: number = playerHalfWidth + objectHalfWidth;
            } else 
            {
                var minimumDistance: number = playerHalfHeight + objectHalfHeight;
            }
            var isCollision = false;

            startPoint.x = this._enemy.centerX + this._enemy.x;
            startPoint.y = this._enemy.centerY + this._enemy.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            if(object.name == 'projectile' && this._enemy.name == 'spikes') {
                console.log("distance:" + this.distance(startPoint, endPoint));
                console.log("min distance:" + minimumDistance);
            }

            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) <= minimumDistance) {
                isCollision = true;
            }

            return isCollision;
        }
    }
}