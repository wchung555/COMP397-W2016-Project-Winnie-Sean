module managers {
    // ENEMY COLLISION MANAGER CLASS
    export class EnemyCollision {
        // PRIVATE INSTANCE VARIABLES
        private _enemy: objects.GameObject;
        constructor(enemy:objects.GameObject) {
            this._enemy = enemy;
        }
        
        // find the distance between two points
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x),2) + Math.pow(endPoint.y - startPoint.y,2))
        }
        
        // determine if the player's avatar collides with the specified object
        public check(object:objects.GameObject):boolean {
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point = new createjs.Point();
            var playerHalfHeight:number = this._enemy.height * 0.5;
            var objectHalfHeight:number = object.height * 0.5;
            var minimumDistance:number = playerHalfHeight + objectHalfHeight;
            var isCollision = false;
            
            startPoint.x = this._enemy.x;
            startPoint.y = this._enemy.y;
            
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if(this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's an enemy hit
                if(object.name === "batwing") {
                    console.log("inter-enemy collision detected");
                    //createjs.Sound.play("stabSound");
                }
                
                isCollision = true;
            }
            
            return isCollision;
        }
    }
}