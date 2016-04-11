module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _rightBounds: number;
        private _leftBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        constructor() {
            super(assets.getResult("Player"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = (this.height * 0.5) - 3;

            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);

            this.x = this._leftBounds + 20;
            this.y = World.floor - this.regY; //config.Screen.HEIGHT - this.regY;
        }

        // PRIVATE METHODS
        // prevent the player's avatar from going offscreen
        private _checkBounds(): void {
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }

            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
        }


        // PUBLIC METHODS
        // move the player's avatar left or right according to the mouse's movements
        public update(): void {
            if(stage.mouseX > config.Screen.CENTER_X){
                this.x = config.Screen.CENTER_X;
            }
            else{
                this.x = stage.mouseX;
            }
             
             this._checkBounds();
        }
    }
}