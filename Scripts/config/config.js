var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTIONS = 1;
        Scene.LEVEL01 = 2;
        Scene.LEVEL1 = 3;
        Scene.LEVEL12 = 4;
        Scene.LEVEL2 = 5;
        Scene.LEVEL23 = 6;
        Scene.LEVEL3 = 7;
        Scene.WIN = 8;
        Scene.END = 9;
        Scene.GAMEOVER = 10;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 420;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 210;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map