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
            var playerHalfWidth = this._enemy.width * 0.5;
            var objectHalfWidth = object.width * 0.5;
            if (object.name == this._enemy.name) {
                var minimumDistance = playerHalfWidth + objectHalfWidth;
            }
            else {
                var minimumDistance = playerHalfHeight + objectHalfHeight;
            }
            var isCollision = false;
            startPoint.x = this._enemy.centerX + this._enemy.x;
            startPoint.y = this._enemy.centerY + this._enemy.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            if (object.name == 'projectile' && this._enemy.name == 'spikes') {
                console.log("distance:" + this.distance(startPoint, endPoint));
                console.log("min distance:" + minimumDistance);
            }
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) <= minimumDistance) {
                isCollision = true;
            }
            return isCollision;
        };
        return EnemyCollision;
    }());
    managers.EnemyCollision = EnemyCollision;
})(managers || (managers = {}));

//# sourceMappingURL=enemycollision.js.map
