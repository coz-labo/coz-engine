var cozEngine = require('coz-engine');

var MyCustomEngine = cozEngine({
    $name: 'baz',
    compile: function (src, callback) {
        /*...*/
    }
});

var engine = new MyCustomEngine({});