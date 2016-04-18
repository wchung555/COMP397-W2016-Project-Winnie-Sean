// LEVEL 2 SCENE
module scenes {
    export class Level2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sceneLabel: objects.Label;
        private _startButton: objects.Button;

        //Scene- - - - - - - - - - - - - - - 
        private _background1: objects.World;

        //non-Player- - - - - - - - - - - - - - -
        private _batarangs: objects.Batarang[];
        private _batarangCount: number;

        private _spikes: objects.Spikes[];
        private _spikeCount: number;

        private _plasma: objects.Projectile;

        //player- - - - - - - - - - - - - - - - - -
        private _player: objects.Player;
        //other- -- - - - - - - - - - - - - - - - 
        private _collision: managers.Collision;
        private _enemyCollision: managers.EnemyCollision[];
        private _spikeCollision: managers.EnemyCollision[];
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;



        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            //scene click event
            this.on("click", this._mouseClick, this);

            // Set starting score
            score = 0;

            // add level lives
            lives += 5;

            // Set Enemy Count
            this._batarangCount = 5;
            this._spikeCount = 3;

            // Instantiate Enemy array
            this._batarangs = new Array<objects.Batarang>(this._batarangCount);
            this._enemyCollision = new Array<managers.EnemyCollision>(this._batarangCount);

            this._spikes = new Array<objects.Spikes>(this._spikeCount);
            this._spikeCollision = new Array<managers.EnemyCollision>(this._spikeCount);

            // add world to the scene
            this._background1 = new objects.World("L2_Platform");
            this.addChild(this._background1);
            
            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            //add enemies to the scene
            for (var i: number = 0; i < this._batarangCount; i++) {
                this._batarangs[i] = new objects.Batarang();
                this.addChild(this._batarangs[i]);
                this._enemyCollision[i] = new managers.EnemyCollision(this._batarangs[i]);
            }

            for (var i: number = 0; i < this._spikeCount; i++) {
                this._spikes[i] = new objects.Spikes();
                this.addChild(this._spikes[i]);
                this._spikeCollision[i] = new managers.EnemyCollision(this._spikes[i]);
            }

            this._plasma = new objects.Projectile();
            this.addChild(this._plasma);

            // add labels to scene
            this._scoreLabel = new objects.Label("Score: " + score + " m",
                "35px Consolas",
                "#FFFFFF",
                50,
                50,
                false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + lives,
                "35px Consolas",
                "#FFFFFF",
                config.Screen.WIDTH - 200,
                50,
                false);
            this.addChild(this._livesLabel);

            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._background1.update();
            //this._background2.update();

            this._player.update();

            score++;
            this._scoreLabel.text = "Score: " + score + " m";

            // check for collisions
            //batarangs
            for (var i = 0; i < this._batarangCount; i++) { //check all
                if (this._collision.check(this._batarangs[i])) { //colliding with player avatar
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    this._livesLabel.text = "Lives: " + lives;
                    console.log("you've been hit by a batarang...that's gonna leave a mark!");
                } else {

                    for (var j = 0; j < this._batarangCount; j++) {
                        if (j != i && this._enemyCollision[j].check(this._batarangs[i])) {
                            this._batarangs[i].isHittingBat = true;
                        }//if
                    }//for
                }//else
                this._batarangs[i].update();
                this._batarangs[i].isHittingBat = false;
                this._batarangs[i].isHittingPlayer = false;
            }//for batarangs



            //spikes           
            for (var i = 0; i < this._spikeCount; i++) { //check all
                if (this._collision.check(this._spikes[i])) { //colliding with player avatar
                    this._spikes[i].isHittingPlayer = true;
                    this._spikes[i].isColliding = true;
                    lives--;
                    this._livesLabel.text = "Lives: " + lives;
                    console.log("ouch! you've been spiked!");
                } else {
                    if (this._spikeCollision[i].check(this._plasma)) {
                        this._spikes[i].isColliding = true;
                        this._plasma.isColliding = true;
                        console.log('spike meets plasma');
                    }
                }//else
                this._spikes[i].update();
                this._spikes[i].isColliding = false;
                this._plasma.isColliding = false;
                this._spikes[i].isHittingBat = false;
                this._spikes[i].isHittingPlayer = false;
                this._spikes[i].projectileHit = false;
            }//for spikes

            //plasma blasts
            this._plasma.update();

            if (lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.END;
                changeScene();
            } else if (score >= 1000) {
                console.log("transfer to level 3");
                scene = config.Scene.LEVEL3;
                changeScene();
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++
        private _mouseClick(event: createjs.MouseEvent) {
            var fired: boolean = false;
            if (!this._plasma._fired) {
                this._plasma.fire(this._player.x, this._player.y);
                fired = true;
            }
        }
    }
}