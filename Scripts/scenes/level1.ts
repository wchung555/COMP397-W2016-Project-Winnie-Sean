// LEVEL 1 SCENE
module scenes {
    export class Level1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _world: objects.World;
        private _batwings: objects.Batarang[];
        private _batwingCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _enemyCollision: managers.EnemyCollision[];
        private _scoreLabel: objects.Label;
        private _lives: number;
        private _livesLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set starting score
            score = 0;

            // Set lives = 9
            this._lives = 5;

            // Set Enemy Count
            this._batwingCount = 5;

            // Instantiate Enemy array
            this._batwings = new Array<objects.Batarang>(this._batwingCount);
            this._enemyCollision = new Array<managers.EnemyCollision>(this._batwingCount);

            // add world to the scene
            this._world = new objects.World();
            this.addChild(this._world);

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            //add enemies to the scene
            for (var i: number = 0; i < this._batwingCount; i++) {
                this._batwings[i] = new objects.Batarang();
                this.addChild(this._batwings[i]);
                this._enemyCollision[i] = new managers.EnemyCollision(this._batwings[i]);
            }

            // add labels to scene
            this._scoreLabel = new objects.Label("Score: " + score + " m",
                "35px Consolas",
                "#FFFFFF",
                50,
                50,
                false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + this._lives,
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
            this._world.update();

            this._player.update();

            score++;
            this._scoreLabel.text = "Score: " + score + " m";

            // check for collisions
            for (var i = 0; i < this._batwingCount; i++) {
                if (this._collision.check(this._batwings[i])) {
                    this._batwings[i].isColliding = true;
                    this._lives--;
                    this._livesLabel.text = "Lives: " + this._lives;
                } else {
                    for (var j = 0; j < this._batwingCount; j++) {
                        if (j != i && this._enemyCollision[j].check(this._batwings[i])) {
                            this._batwings[i].isColliding = true;
                        }
                    }
                }
                this._batwings[i].update();
                this._batwings[i].isColliding = false;
            }

            if (this._lives <= 0) {
                console.log("player ran out of lives");
                scene = config.Scene.END;
                changeScene();
            } else if (score >= 1000) {
                console.log("transfer to level 2");
                // scene = config.Scene.LEVEL2;
                // changeScene();
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}