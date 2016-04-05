module objects {
    // DOUGHNUT CLASS ++++++++++++++++++++++++++++++++++++
    export class Doughnut extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("donut");
            
           this._speed.x = 5; //doughnut speed
           this._reset(this._rightBounds);
           this.name = "doughnut";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the left of the doughnut is outside the viewport  
        protected _checkBounds(value:number):void {                   
            if(this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the doughnut offscreen
        protected _reset(value:number):void {          
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        // scroll the doughnut 5 px per frame and reset its position if neccessary
        public update():void {            
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}