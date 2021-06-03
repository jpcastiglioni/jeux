kaboom.import();

init({
  fullscreen: true,
  scale: 2,
});

scene("menu", () => {
  add([
    text("Snake game"),
    pos(240, 80),
    scale(3),
  ]);
});

// initialize kaboom context

// const k = kaboom();

// // options
// kaboom({
//     global: true, // import all kaboom functions to global namespace
//     width: 640, // width of canvas
//     height: 480, // height of canvas
//     canvas: document.getElementById("game"), // use custom canvas
//     scale: 2, // pixel size (for pixelated games you might want small canvas + scale)
//     clearColor: [0, 0, 1, 1], // background color (default black [0, 0, 0, 1])
//     fullscreen: true, // if fullscreen
//     crisp: true, // if pixel crisp (for sharp pixelated games)
//     debug: false, // debug mode
//     plugins: [ asepritePlugin, ], // load plugins
// });


// // assets

// // define a scene
// scene("main", () => {

//     // add a text at position (100, 100)
//     add([
//         text("ohhimark", 32),
//         pos(width() / 2, height() / 2),
//         origin("center"),
//     ]);

// });

// // // start the game
// start("main");



