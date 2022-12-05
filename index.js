const informations = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hello I'm ${informations.name} from ${informations.campus}`
}));