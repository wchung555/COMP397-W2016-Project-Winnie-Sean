// LEVEL 3 SCENE
module scenes {
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        //Scene- - - - - - - - - - - - - - - 
        private _background1: objects.World;

        //non-Player- - - - - - - - - - - - - - -
        private _boss: objects.Boss;

        private _batarangs: objects.Batarang[];
        private _batarangCount: number;

        private _plasma: objects.Projectile;

        //player- - - - - - - - - - - - - - - - - -
        private _player: objects.Player;

        //other- - - - - - - - - - - - - - - - - - 
        private _collision: managers.Collision;
        private _enemyCollision: managers.EnemyCollision[];
        private _bossCollision: managers.EnemyCollision;
        private _bossLivesLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _exitButton: objects.Button;

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
            this._batarangCount = 3;

            // Instantiate Enemy array
            this._batarangs = new Array<objects.Batarang>(this._batarangCount);
            this._enemyCollision = new Array<managers.EnemyCollision>(this._batarangCount);

            // add world to the scene
            this._background1 = new objects.World("Gotham");
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

            this._plasma = new objects.Projectile(-5);
            this.addChild(this._plasma);

            this._boss = new objects.Boss();
            this.addChild(this._boss);
            this._bossCollision = new managers.EnemyCollision(this._plasma);            

            // add labels to scene
            this._bossLivesLabel = new objects.Label("Boss HP: " + this._boss.checkHealth(),
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
            
            
            // add the Exit button to the scene
            this._exitButton = new objects.Button(
                "quitButton_small", 5, 5, false);
            
            this.addChild(this._exitButton);

            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._background1.update();
            this._player.update();
            
            
          

            // check for collisions
            for (var i = 0; i < this._batarangCount; i++) { //check all
                if (this._collision.check(this._batarangs[i])) { //colliding with player avatar
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    createjs.Sound.play("grunt", {volume: 0.75});
                    console.log("you've been hit by a batarang...that's gonna leave a mark!");
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
            
            //plasma blasts
            this._plasma.update();
            
            //boss
            if (this._bossCollision.check(this._boss)) {
                this._boss.projectileHit = true;
                this._plasma.isColliding = true;
                createjs.Sound.play("bossHit");
                console.log("boss hit!");
            }
            this._boss.update();

            // //plasma blasts
            // this._plasma.update();

            this._livesLabel.text = "Lives: " + lives;
            this._bossLivesLabel.text = "Boss HP: " + this._boss.checkHealth();

            if (lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.GAMEOVER;
                bgm.stop();
                changeScene();
            } else if (this._boss.checkHealth() <= 0) {
                console.log("transfer to WIN scene");
                 scene = config.Scene.WIN;
                 changeScene();
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++
        private _mouseClick(event: createjs.MouseEvent) {
            var fired: boolean = false;
            if (!this._plasma._fired) {
                this._plasma.fire(this._player.x, this._player.y);
                fired = true;
                createjs.Sound.play("plasma");
            }
        }//_mouseClick
        
        // EXIT Button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            changeScene();
        }//_exitButtonClick
        
    }
}