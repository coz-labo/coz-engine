coz-engine
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/coz-repo/coz-engine
[bd_travis_url]: http://travis-ci.org/coz-repo/coz-engine
[bd_travis_shield_url]: http://img.shields.io/travis/coz-repo/coz-engine.svg?style=flat
[bd_license_url]: https://github.com/coz-repo/coz-engine/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/coz-repo/coz-engine
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/coz-repo/coz-engine.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/coz-repo/coz-engine.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/coz-repo/coz-engine
[bd_gemnasium_shield_url]: https://gemnasium.com/coz-repo/coz-engine.svg
[bd_npm_url]: http://www.npmjs.org/package/coz-engine
[bd_npm_shield_url]: http://img.shields.io/npm/v/coz-engine.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Abstract engine for coz

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Usage
----

### Define a Custom Engine.

```javascript
var cozEngine = require('coz-engine');

var MyCustomEngine = cozEngine({
    $name: 'baz',
    compile: function (src, callback) {
        /*...*/
    }
});

var engine = new MyCustomEngine({});
```


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/coz-repo/coz-engine/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [coz](https://github.com/coz-repo/coz)

<!-- Links End -->
