var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL 1 SCENE
var scenes;
(function (scenes) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level1.prototype.start = function () {
            // Set starting score
            score = 0;
            // Set lives to 5
            lives = 5;
            // Set Enemy Count
            this._batarangCount = 5;
            // Instantiate Enemy array
            this._batarangs = new Array(this._batarangCount);
            this._enemyCollision = new Array(this._batarangCount);
            // add world to the scene
            this._background1 = new objects.World();
            this.addChild(this._background1);
            //add secondary for smooth scroll
            this._background2 = new objects.World();
            this._background2.setSecondary();
            this.addChild(this._background2);
            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //add enemies to the scene
            for (var i = 0; i < this._batarangCount; i++) {
                this._batarangs[i] = new objects.Batarang();
                this.addChild(this._batarangs[i]);
                this._enemyCollision[i] = new managers.EnemyCollision(this._batarangs[i]);
            }
            // add labels to scene
            this._scoreLabel = new objects.Label("Score: " + score + " m", "35px Consolas", "#FFFFFF", 50, 50, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + lives, "35px Consolas", "#FFFFFF", config.Screen.WIDTH - 200, 50, false);
            this.addChild(this._livesLabel);
            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Level1.prototype.update = function () {
            this._background1.update();
            this._background2.update();
            this._player.update();
            score++;
            this._scoreLabel.text = "Score: " + score + " m";
            // check for collisions
            for (var i = 0; i < this._batarangCount; i++) {
                if (this._collision.check(this._batarangs[i])) {
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    this._livesLabel.text = "Lives: " + lives;
                }
                else {
                    for (var j = 0; j < this._batarangCount; j++) {
                        if (j != i && this._enemyCollision[j].check(this._batarangs[i])) {
                            this._batarangs[i].isHittingBat = true;
                            console.log("Bat on Bat collision: ");
                        }
                    }
                }
                this._batarangs[i].update();
                this._batarangs[i].isHittingBat = false;
                this._batarangs[i].isHittingPlayer = false;
            } //for check all batarangs
            if (lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.LEVEL2; //testing
                changeScene();
            }
            else if (score >= 1000) {
                console.log("transfer to level 2");
                scene = config.Scene.LEVEL2;
                changeScene();
            }
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));

//# sourceMappingURL=level1.js.map
