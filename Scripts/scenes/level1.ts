// LEVEL 1 SCENE
module scenes {
    export class Level1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background1: objects.World;
        //private _background2: objects.World;
        private _batarangs: objects.Batarang[];
        private _batarangCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _enemyCollision: managers.EnemyCollision[];
        private _scoreLabel: objects.Label;
        //private _lives: number;
        private _livesLabel: objects.Label;
        
        private _exitButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set starting score
            score = 0;

            // Set lives to 5
            lives = 5;

            // Set Enemy Count
            this._batarangCount = 5;

            // Instantiate Enemy array
            this._batarangs = new Array<objects.Batarang>(this._batarangCount);
            this._enemyCollision = new Array<managers.EnemyCollision>(this._batarangCount);

            // add world to the scene
            this._background1 = new objects.World("L1_Platform");
            this.addChild(this._background1);
                 /*   //add secondary for smooth scroll
            this._background2 = new objects.World();
            this._background2.setSecondary();
            this.addChild(this._background2);*/

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            //add enemies to the scene
            for (var i: number = 0; i < this._batarangCount; i++) {
                this._batarangs[i] = new objects.Batarang();
                this.addChild(this._batarangs[i]);
                this._enemyCollision[i] = new managers.EnemyCollision(this._batarangs[i]);
            }

            // add labels to scene
            this._scoreLabel = new objects.Label("Score: " + score + " m",
                "35px Consolas",
                "#FFFFFF",
                120,
                0,
                false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + lives,
                "35px Consolas",
                "#FFFFFF",
                config.Screen.WIDTH - 200,
                0,
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
            // this._background2.update();

            this._player.update();

            score++;
            this._scoreLabel.text = "Score: " + score + " m";

            // check for collisions
            for (var i = 0; i < this._batarangCount; i++) { //check all
                if (this._collision.check(this._batarangs[i])) { //colliding with player avatar
                    this._batarangs[i].isHittingPlayer = true;
                    lives--;
                    createjs.Sound.play("grunt");
                    this._livesLabel.text = "Lives: " + lives;
                } else {
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
            }//for check all batarangs

            if (lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.END; //testing
                changeScene();
            } else if (score >= 1000) {
                console.log("transfer to level 2");
                 scene = config.Scene.LEVEL12;
                 changeScene();
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++
        // EXIT Button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("select");
            // Switch to the END Scene
            scene = config.Scene.END;
            changeScene();
        }

    }
}