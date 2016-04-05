// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _space: objects.Space;
        private _doughnut: objects.Doughnut;
        private _ebils: objects.Ebil[];
        private _ebilCount: number;
        private _maxEbilCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _enemyCollision: managers.Collision[];
        public _score: number;
        private _scoreLabel: objects.Label;
        private _lives: number;
        private _livesLabel: objects.Label;
        private _heartImage: createjs.Bitmap;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set starting score
            this._score = 0;

            // Set lives = 9
            this._lives = 9;

            // Set Enemy Count
            this._ebilCount = 1;
            this._maxEbilCount = 9;

            // Instantiate Enemy array
            this._ebils = new Array<objects.Ebil>(this._ebilCount);

            // add space to the scene
            this._space = new objects.Space();
            this.addChild(this._space);

            // add doughnut to the scene
            this._doughnut = new objects.Doughnut();
            this.addChild(this._doughnut);

            // add player to the scene
            this._player = new objects.Player();
            this._player.x = this._player.width * 0.5;
            this.addChild(this._player);

            //add enemies to the scene
            for (var i: number = 0; i < this._ebilCount; i++) {
                this._ebils[i] = new objects.Ebil();
                this.addChild(this._ebils[i]);
            }

            // add labels to scene
            this._scoreLabel = new objects.Label("Score: " + this._score,
                "35px Consolas",
                "#FFFFFF",
                50,
                50,
                false);
            this.addChild(this._scoreLabel);
            this._heartImage = new createjs.Bitmap(assets.getResult("heart"));
            this._heartImage.x = config.Screen.WIDTH - 150;
            this._heartImage.y = (this._heartImage.getBounds().height * 0.5);
            this.addChild(this._heartImage);
            this._livesLabel = new objects.Label("x" + this._lives,
                "35px Consolas",
                "#FFFFFF",
                config.Screen.WIDTH - 80,
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
            this._space.update();
            this._doughnut.update();

            this._player.update();

            // check for collisions
            this._collision = new managers.Collision(this._player); // update player reference for collision checker
            if (this._collision.check(this._doughnut)) {
                this.removeChild(this._doughnut);
                this._doughnut = new objects.Doughnut(); // reset doughnut
                this._score += 50;
                if (this._ebilCount < this._maxEbilCount) {
                    this._ebilCount++;
                    this._ebils[this._ebilCount - 1] = new objects.Ebil();
                    this.addChild(this._ebils[this._ebilCount - 1]);
                }
                this.addChild(this._doughnut);
            }
            this._ebils.forEach(ebil => {
                if (this._collision.check(ebil)) {
                    for (var i: number = 0; i < this._ebilCount; i++) { // reset enemies
                        this.removeChild(this._ebils[i]);
                        this._ebils[i] = new objects.Ebil();
                        this.addChild(this._ebils[i]);
                    }
                    this._lives--;
                }
                ebil.update();
            });

            this._livesLabel.text = "x" + this._lives;
            this._scoreLabel.text = "Score: " + this._score;

            if (this._lives <= 0) {
                score = this._score;
                scene = config.Scene.END;
                changeScene();
            }
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}