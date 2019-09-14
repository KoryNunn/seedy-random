var minLength = 64;
var characterRange = Math.pow(8, 4);
var baseString = 'seedyRandom will build a string.';
baseString = baseString.padEnd(minLength, baseString);
var seedyseedyRandom = seedyRandom(baseString);

function seedyRandom(seed){
    var lastSeed = seed;
    var lastValue = 0.5;

    return function(){
        while(lastSeed < minLength){
            lastSeed += String.fromCharCode(Math.floor(seedyRandom(lastSeed += String.fromCharCode(Math.floor(seedyseedyRandom() * characterRange)))));
        }

        var characters = lastSeed.split('');
        var characterCodes = characters.map(character => character.charCodeAt(0));
        var cycledCharacterCodes = characterCodes.map(code => Math.abs(Math.sin(code * 100 % 13)) % characterRange);

        lastSeed = cycledCharacterCodes.map(code => String.fromCharCode(Math.floor(code * characterRange))).join('');

        lastValue = ((lastValue * lastValue * 10) + cycledCharacterCodes.reduce((result, value) => {
            return result + value / 2
        }, 0)) % 1;

        return lastValue;
    }
}

module.exports = seedyRandom;