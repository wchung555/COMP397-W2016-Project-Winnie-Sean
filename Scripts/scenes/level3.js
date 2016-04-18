var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL 3 SCENE
var scenes;
(function (scenes) {
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level3.prototype.start = function () {
            //scene click event
            this.on("click", this._mouseClick, this);
            // Set starting score
            score = 0;
            // add level lives
            lives += 5;
            this._bossLives = 100;
            // Set Enemy Count
            this._batarangCount = 3;
            // Instantiate Enemy array
            this._batarangs = new Array(this._batarangCount);
            this._enemyCollision = new Array(this._batarangCount);
            // add world to the scene
            this._background1 = new objects.World("L2_Platform");
            this.addChild(this._background1);
            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //add enemies to the scene
            for (var i = 0; i < this._batarangCount; i++) {
                this._batarangs[i] = new objects.Batarang();
                this.addChild(this._batarangs[i]);
                this._enemyCollision[i] = new managers.EnemyCollision(this._batarangs[i]);
            }
            this._plasma = new objects.Projectile();
            this.addChild(this._plasma);
            this._boss = new objects.Boss();
            this._bossCollision = new managers.EnemyCollision(this._boss);
            this.addChild(this._boss);
            // add labels to scene
            this._bossLivesLabel = new objects.Label("Boss HP: " + this._bossLives, "35px Consolas", "#FFFFFF", 50, 50, false);
            this.addChild(this._bossLivesLabel);
            this._livesLabel = new objects.Label("Lives: " + lives, "35px Consolas", "#FFFFFF", config.Screen.WIDTH - 200, 50, false);
            this.addChild(this._livesLabel);
            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Level3.prototype.update = function () {
            this._background1.update();
            this._player.update();
            this._boss.update();
            // check for collisions
            for (var i = 0; i < this._batarangCount; i++) {
                if (this._collision.check(this._batarangs[i])) {
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    console.log("you've been hit by a batarang...that's gonna leave a mark!");
                }
                else if (this._collision.check(this._boss)) {
                    lives--;
                    console.log("you've been punched in the face by Batman...be thankful his glove wasn't poisoned");
                }
                else {
                    for (var j = 0; j < this._batarangCount; j++) {
                        if (j != i && (this._enemyCollision[j].check(this._batarangs[i]) || this._enemyCollision[j].check(this._boss))) {
                            this._batarangs[i].isHittingBat = true;
                        } //if
                    } //for
                } //else
                this._batarangs[i].update();
                this._batarangs[i].isHittingBat = false;
                this._batarangs[i].isHittingPlayer = false;
            }
            //boss
            if (this._bossCollision.check(this._plasma)) {
                this._bossLives--;
                console.log("boss meets plasma");
            }
            //_plasma blasts
            this._plasma.update();
            this._livesLabel.text = "Lives: " + lives;
            this._bossLivesLabel.text = "Boss HP: " + this._bossLives;
            if (lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.END;
                changeScene();
            }
            else if (this._bossLives <= 0) {
                console.log("transfer to WIN scene");
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Level3.prototype._mouseClick = function (event) {
            var fired = false;
            if (!this._plasma._fired) {
                this._plasma.fire(this._player.x, this._player.y);
                fired = true;
            }
        };
        return Level3;
    })(objects.Scene);
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map