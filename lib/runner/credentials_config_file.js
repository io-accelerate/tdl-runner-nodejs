'use strict';

var PropertiesReader = require('properties-reader');

function readRawValue(key) {
    var properties = readPropertiesFile();
    var value = properties.getRaw(key);
    if(value) {
        value = value.replace(/\\=/g, "=");
    }
    return value;
}

module.exports.readFromConfigFile = function (key) {
    var value = readRawValue(key);
    if (value === null) {
        throw {
            name: "ConfigNotFoundException",
            message: 'The "credentials.config" file does not contain key ' + key
        };
    }
    return value;
};

module.exports.readFromConfigFileWithDefault = function (key, defaultValue) {
    var value = readRawValue(key);
    return value !== null ? value : defaultValue;
};

module.exports.isTrue = function (value) {
    return value.toString() === 'true'
};

//~~~~
function readPropertiesFile() {
    var pathToPropertiesFile = require('path').resolve(__dirname, '..', '..', 'config', 'credentials.config');
    var reader;
    try {
        return PropertiesReader(pathToPropertiesFile);
    }
    catch(e) {
        throw {
            name: 'ConfigNotFoundException',
            message: 'The "credentials.config" has not been found. Please download from challenge page. (Reason: "' + e.message + '")'
        }
    }
}
