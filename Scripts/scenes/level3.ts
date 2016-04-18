// LEVEL 3 SCENE
module scenes {
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        //Scene- - - - - - - - - - - - - - - 
        private _background1: objects.World;

        //non-Player- - - - - - - - - - - - - - -
        private _boss: objects.Boss;
        private _bossLives: number;

        private _batarangs: objects.Batarang[];
        private _batarangCount: number;

        private _plasma: objects.Projectile;

        //player- - - - - - - - - - - - - - - - - -
        private _player: objects.Player;
        
        //other- -- - - - - - - - - - - - - - - - 
        private _collision: managers.Collision;
        private _enemyCollision: managers.EnemyCollision[];
        private _bossCollision: managers.EnemyCollision;
        private _bossLivesLabel: objects.Label;
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
            this._bossLives = 100;

            // Set Enemy Count
            this._batarangCount = 3;

            // Instantiate Enemy array
            this._batarangs = new Array<objects.Batarang>(this._batarangCount);
            this._enemyCollision = new Array<managers.EnemyCollision>(this._batarangCount);

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

            this._plasma = new objects.Projectile();
            this.addChild(this._plasma);

            this._boss = new objects.Boss();            
            this._bossCollision = new managers.EnemyCollision(this._boss);
            this.addChild(this._boss);

            // add labels to scene
            this._bossLivesLabel = new objects.Label("Boss HP: " + this._bossLives,
                "35px Consolas",
                "#FFFFFF",
                50,
                50,
                false);
            this.addChild(this._bossLivesLabel);
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
            this._player.update();
            this._boss.update();

            // check for collisions
            for (var i = 0; i < this._batarangCount; i++) { //check all
                if (this._collision.check(this._batarangs[i])) { //colliding with player avatar
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    console.log("you've been hit by a batarang...that's gonna leave a mark!");
                } else if (this._collision.check(this._boss)) {
                    lives--;
                    console.log("you've been punched in the face by Batman...be thankful his glove wasn't poisoned");
                } else {
                    for (var j = 0; j < this._batarangCount; j++) {
                        if (j != i && (this._enemyCollision[j].check(this._batarangs[i]) || this._enemyCollision[j].check(this._boss))) {
                            this._batarangs[i].isHittingBat = true;
                        }//if
                    }//for
                }//else
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
            } else if (this._bossLives <= 0) {
                console.log("transfer to WIN scene");
                // scene = config.Scene.LEVEL2;
                // changeScene();
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