// CommonJS, every file is module (by defualt)
//Modules - Encapusulated Code (Only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-gernade");

sayHi("Kevin");
sayHi(names.john);
sayHi(names.peter);
