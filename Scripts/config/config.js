var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTIONS = 1;
        Scene.PLAY = 2;
        Scene.END = 3;
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