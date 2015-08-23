var cozEngine = require('coz-engine');

var MyCustomEngine = cozEngine({
    compile: function (src, callback) {
        /*...*/
    }
});

var engine = new MyCustomEngine({});