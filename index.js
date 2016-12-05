require("babel-register")({
    presets: [
        "babel-preset-es2015"
    ],
});


var module = require('./9-module-export-math-add');

console.log(module);