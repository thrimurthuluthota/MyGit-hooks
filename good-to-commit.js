var Car = require('model/Car');
var version = Car.exec('node --version', {silent:true}).output;
console.log('version ' + version);




