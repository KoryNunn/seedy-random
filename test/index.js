var test = require('tape');
var seedyRandom = require('../');

test('randoms seem pretty hekin random', function(t){
    t.plan(1);
    var random1 = seedyRandom('foo');
    var random2 = seedyRandom('bar');

    t.notEqual(random1(), random2(), 'different');
});

test('multiple runs with the same seed return the same value', function(t){
    t.plan(1);
    var random1 = seedyRandom('foo');
    var random2 = seedyRandom('foo');

    t.equal(random1(), random2(), 'same');
});

test('subsequent calls from the same random return different values', function(t){
    t.plan(1);
    var random1 = seedyRandom('foo');

    t.notEqual(random1(), random1(), 'different');
});

test('handles long text', function(t){
    t.plan(2);

    var random1 = seedyRandom(
        `Did you ever hear the Tragedy of Darth Plagueis the Wise?
        It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith so powerful and so wise,
        he could use the Force to influence the midi-chlorians to create...life.
        He had such a knowledge of the Dark Side, he could even keep the ones he cared about...from dying.
        He became so powerful, the only thing he was afraid of was losing his power...which,
        eventually of course, he did. Unfortunately, he taught his apprentice everything he knew.
        Then his apprentice killed him in his sleep. Ironic. He could save others from death...
        but not himself.`
    );

    t.ok(random1() < 1, 'in range');
    t.ok(random1() > 0, 'also in range');
});

test('A bunch of randoms are not the same', function(t){
    t.plan(1);

    var random1 = seedyRandom('foo');
    var random2 = seedyRandom('bar');
    var random3 = seedyRandom('baz');

    var results = new Set();

    for(var i = 0; i < 100000; i++){
        var result1 = random1();
        var result2 = random2();
        var result3 = random3();

        if(results.has(result1)){
            t.fail();
        }

        results.add(result1);

        if(results.has(result2)){
            t.fail();
        }

        results.add(result2);

        if(results.has(result3)){
            t.fail();
        }

        results.add(result3);
    }

    t.pass();
})