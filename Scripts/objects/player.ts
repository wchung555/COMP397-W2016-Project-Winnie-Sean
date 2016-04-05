module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        constructor() {
            super(assets.getResult("Player"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.y = this._bottomBounds + 20;
            this.x = this.regX;
        }

        // PRIVATE METHODS
        // prevent the player's avatar from going offscreen
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }


        // PUBLIC METHODS
        // move the player's avatar up or down according to the mouse's movements
        public update(): void {
            // this.y = stage.mouseY;
            // this._checkBounds();
        }
    }
}