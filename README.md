# seedy-random

Tiny, Very very bad seeded RNG for use in games.

# Warning

Do not use this in anything where you care about guessability even a little bit.

# Usage

```js
var seedyRandom = require('../');

var fooRandom = seedyRandom('foo');

fooRandom() // 0.9946693298623943
```