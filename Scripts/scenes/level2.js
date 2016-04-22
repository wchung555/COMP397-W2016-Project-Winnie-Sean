var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL 2 SCENE
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
            this._batarangCount = 3;
            this._spikeCount = 3;
            // Instantiate Enemy array
            this._batarangs = new Array(this._batarangCount);
            this._enemyCollision = new Array(this._batarangCount);
            this._spikes = new Array(this._spikeCount);
            this._spikeCollision = new Array(this._spikeCount);
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
            for (var i = 0; i < this._spikeCount; i++) {
                this._spikes[i] = new objects.Spikes();
                this.addChild(this._spikes[i]);
                this._spikeCollision[i] = new managers.EnemyCollision(this._spikes[i]);
            }
            this._component = new objects.Component();
            this.addChild(this._component);
            this._plasma = new objects.Projectile(.5);
            this.addChild(this._plasma);
            // add labels to scene
            this._scoreLabel = new objects.Label("Score: " + score + " m", "35px Consolas", "#FFFFFF", 120, 0, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + lives, "35px Consolas", "#FFFFFF", config.Screen.WIDTH - 200, 0, false);
            this.addChild(this._livesLabel);
            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add the Exit button to the scene
            this._exitButton = new objects.Button("quitButton_small", 5, 5, false);
            this.addChild(this._exitButton);
            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Level2.prototype.update = function () {
            this._background1.update();
            this._player.update();
            // check for collisions
            //batarangs
            for (var i = 0; i < this._batarangCount; i++) {
                if (this._collision.check(this._batarangs[i])) {
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    createjs.Sound.play("grunt");
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
            //plasma blasts
            this._plasma.update();
            //spikes           
            for (var i = 0; i < this._spikeCount; i++) {
                if (this._collision.check(this._spikes[i])) {
                    this._spikes[i].isHittingPlayer = true;
                    this._spikes[i].isColliding = true;
                    lives--;
                    createjs.Sound.play("grunt");
                    this._livesLabel.text = "Lives: " + lives;
                    console.log("ouch! you've been spiked!");
                }
                else {
                    if (this._spikeCollision[i].check(this._plasma)) {
                        this._spikes[i].isColliding = true;
                        this._plasma.isColliding = true;
                        console.log('spike meets plasma');
                    }
                } //else
                this._spikes[i].update();
                this._spikes[i].isColliding = false;
                this._plasma.isColliding = false;
                this._spikes[i].isHittingBat = false;
                this._spikes[i].isHittingPlayer = false;
                this._spikes[i].projectileHit = false;
            } //for spikes
            //component
            if (this._collision.check(this._component)) {
                this._component.isCollision = true;
                score++;
                createjs.Sound.play("powerup");
            }
            this._component.update();
            this._scoreLabel.text = "Components: " + score;
            this._livesLabel.text = "Lives: " + lives;
            // //plasma blasts
            // this._plasma.update();
            if (lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.END;
                changeScene();
            }
            else if (score >= 10) {
                console.log("transfer to level 3");
                scene = config.Scene.LEVEL23;
                changeScene();
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Level2.prototype._mouseClick = function (event) {
            var fired = false;
            if (!this._plasma._fired) {
                this._plasma.fire(this._player.x, this._player.y);
                fired = true;
                createjs.Sound.play("plasma");
            }
        }; //_mouseClick
        // EXIT Button click event handler
        Level2.prototype._exitButtonClick = function (event) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            changeScene();
        }; //_exitButtonClick
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));

//# sourceMappingURL=level2.js.map
