var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        // find the distance between two points
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        // determine if the player's avatar collides with the specified object
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            var isCollision = false;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a doughnut hit
                if (object.name === "doughnut") {
                    console.log("doughnut hit!");
                    createjs.Sound.play("coinSound");
                }
                // check if it's an enemy hit
                if (object.name === "ebil") {
                    console.log("enemy hit!");
                    createjs.Sound.play("stabSound");
                }
                isCollision = true;
            }
            return isCollision;
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map