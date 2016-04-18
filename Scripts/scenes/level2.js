var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL 1 SCENE
var scenes;
(function (scenes) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level2.prototype.start = function () {
            //scene click event
            this.on("click", this._mouseClick, this);
            // Set starting score
            score = 0;
            // add level lives
            lives += 5;
            // Set Enemy Count
            this._batarangCount = 5;
            this._spikeCount = 3;
            this._plasmaCount = 2;
            // Instantiate Enemy array
            this._batarangs = new Array(this._batarangCount);
            this._enemyCollision = new Array(this._batarangCount);
            this._spikes = new Array(this._spikeCount);
            this._spikeCollision = new Array(this._spikeCount);
            // this._plasmas = new Array<objects.Projectile>(this._plasmaCount);
            // this._projectileCollision = new Array<managers.projectileCollision>(this._plasmaCount);
            // add world to the scene
            this._background1 = new objects.World("L2_Platform");
            this.addChild(this._background1);
            /* //add secondary for smooth scroll
     this._background2 = new objects.World();
     this._background2.setSecondary();
     this.addChild(this._background2);
*/
            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //add enemies to the scene
            for (var i = 0; i < this._batarangCount; i++) {
                this._batarangs[i] = new objects.Batarang();
                this.addChild(this._batarangs[i]);
                this._enemyCollision[i] = new managers.EnemyCollision(this._batarangs[i]);
            }
            for (var i = 0; i < this._spikeCount; i++) {
                this._spikes[i] = new objects.Spikes();
                this.addChild(this._spikes[i]);
                this._spikeCollision[i] = new managers.EnemyCollision(this._spikes[i]);
            }
            this.plasma = new objects.Projectile();
            this.addChild(this.plasma);
            // for (var i: number = 0; i < this._plasmaCount; i++) {
            //     this._plasmas[i] = new objects.Projectile();
            //     this.addChild(this._plasmas[i]);                
            // }
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
        Level2.prototype.update = function () {
            this._background1.update();
            //this._background2.update();
            this._player.update();
            score++;
            this._scoreLabel.text = "Score: " + score + " m";
            // check for collisions
            //batarangs
            for (var i = 0; i < this._batarangCount; i++) {
                if (this._collision.check(this._batarangs[i])) {
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    this._livesLabel.text = "Lives: " + lives;
                    console.log("you've been hit by a batarang...that's gonna leave a mark!");
                }
                else {
                    for (var j = 0; j < this._batarangCount; j++) {
                        if (j != i && this._enemyCollision[j].check(this._batarangs[i])) {
                            this._batarangs[i].isHittingBat = true;
                        } //if
                    } //for
                } //else
                this._batarangs[i].update();
                this._batarangs[i].isHittingBat = false;
                this._batarangs[i].isHittingPlayer = false;
            } //for batarangs
            //spikes           
            for (var i = 0; i < this._spikeCount; i++) {
                if (this._collision.check(this._spikes[i])) {
                    this._spikes[i].isHittingPlayer = true;
                    this._spikes[i].isColliding = true;
                    lives--;
                    this._livesLabel.text = "Lives: " + lives;
                    console.log("ouch! you've been spiked!");
                }
                else {
                    if (this._spikeCollision[i].check(this.plasma)) {
                        this._spikes[i].isColliding = true;
                        this.plasma.isColliding = true;
                        console.log('spike meets plasma');
                    }
                } //else
                this._spikes[i].update();
                this._spikes[i].isColliding = false;
                this.plasma.isColliding = false;
                this._spikes[i].isHittingBat = false;
                this._spikes[i].isHittingPlayer = false;
                this._spikes[i].projectileHit = false;
            } //for spikes
            //plasma blasts
            this.plasma.update();
            // for (var i = 0; i < this._plasmaCount; i++){
            //     this._plasmas[i].update();
            // }
            if (lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.END;
                changeScene();
            }
            else if (score >= 1000) {
                console.log("transfer to level 3");
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Level2.prototype._mouseClick = function (event) {
            var fired = false;
            if (!this.plasma._fired) {
                this.plasma.fire(this._player.x, this._player.y);
                fired = true;
            }
            // for(var i = 0; i < this._plasmaCount; i++) {
            //     if (!this._plasmas[i]._fired){
            //         this._plasmas[i].fire(this._player.x, this._player.y);
            //         fired = true;
            //     }//if                
            //     if(fired)
            //     {break;}
            // }
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));

//# sourceMappingURL=level2.js.map
