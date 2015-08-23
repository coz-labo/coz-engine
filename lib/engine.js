/**
 * Abstract engine. All engine should inherit this class.
 * @memberof module:coz-engine/lib
 * @inner
 * @constructor Engine
 * @param {object} [options] - Optional settings.
 */

"use strict";

/** @lends Engine */
function Engine() {
    var s = this;
    s.init.apply(s, arguments);
}

Engine.prototype = {

    //------------------------
    // Public methods
    //------------------------
    /**
     * Initialize a engine.
     * @abstract
     * @param {object} options - Optional settings.
     * @param {string} [options.basedir] - Base directory path.
     */
    init: function (options) {
        var s = this;
        options = options || {};
        s.basedir = options.basedir || s.basedir;
    },
    /**
     * Base directory path.
     */
    basedir: process.cwd(),
    /**
     * Clone this engine.
     * @returns {*} - Clone of engine.
     */
    clone: function () {
        var s = this;
        var Constructor = s._constructor;
        var clone = new Constructor(s);
        clone.set(s);
        return clone;
    },
    /**
     * Get a property.
     * @param {string} key - Key for property.
     * @returns {*} - Property value.
     */
    get: function (key) {
        var s = this;
        return s[key];
    },
    /**
     * Set a property to this property.
     * You set multiple properties by passing a single, object-type argument.
     * @param {string|object} key - Key for property.
     * @param {?*} [val] - Value to set.
     * @returns {Engine} - Returns self for chaining.
     * @example
     *  engine.set('foo', 'bar');
     *  engine.set({foo: 'bar'});
     */
    set: function (key, val) {
        var s = this;
        var args = arguments;
        var multiple = typeof(args[0]) === 'object';
        if (multiple) {
            s._setProperties(args[0]);
        } else {
            s._setProperty(key, val);
        }
        return s;
    },
    /**
     * Precompile a template string.
     * Precompiled template is a string with represents compiled template function.
     * @abstract
     * @param {string} source - Template source string.
     * @param {module:coz-engine/lib~precompileCallback} callback - callback when done.
     */
    precompile: function (source, callback) {
        throw new Error('[engine.precompile]Not implemented!');
    },
    /**
     * Compile a template string.
     * Compiled template is a function.
     * @abstract
     * @param {string} source - Template source string.
     * @param {module:coz-engine/lib~compileCallback} callback - Callback when done.
     */
    compile: function (source, callback) {
        throw new Error('[engine.compile]Not implemented!');
    },
    //------------------------
    // Private properties
    //------------------------


    /**
     * Constructor class.
     * @function
     * @private
     */
    _constructor: Engine,
    /**
     * Set a property.
     * @param {string} key - Key for property.
     * @param {*} val - Value to set.
     * @returns {Engine} - Returns self for chaining.
     * @private
     */
    _setProperty: function (key, val) {
        var s = this;
        s[key] = val;
        return s;
    },
    /**
     * Set multiple properties.
     * @param {object} values - Properties to set.
     * @returns {Engine} - Returns self for chaining.
     * @private
     */
    _setProperties: function (values) {
        var s = this,
            keys = Object.keys(values || {});
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            s._setProperty(key, values[key]);
        }
        return s;
    }
};



module.exports = Engine;


/**
 * Callback for engine precompile function.
 * @memberof module:coz-engine/lib
 * @inner
 * @callback precompileCallback
 * @param {?Error} err - precompile error.
 * @param {string} tmplFunctionString - Precompiled template function.
 */

/**
 * Callback for engine compile function.
 * @memberof module:coz-engine/lib
 * @inner
 * @callback compileCallback
 * @param {?Error} err - Compile err
 * @param {function} tmpl - Compiled template function.
 */