var managers;
(function (managers) {
    // ENEMY COLLISION MANAGER CLASS
    var EnemyCollision = (function () {
        function EnemyCollision(enemy) {
            this._enemy = enemy;
        }
        // find the distance between two points
        EnemyCollision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        // determine if the player's avatar collides with the specified object
        EnemyCollision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._enemy.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            var isCollision = false;
            startPoint.x = this._enemy.x;
            startPoint.y = this._enemy.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                //var message: string = "";
                // check if it's an enemy hit
                if (object.name === "batarang") {
                    //message = "batarang";
                    console.log("inter-enemy collision detected");
                }
                isCollision = true;
            }
            return isCollision;
        };
        return EnemyCollision;
    }());
    managers.EnemyCollision = EnemyCollision;
})(managers || (managers = {}));

//# sourceMappingURL=enemycollision.js.map
