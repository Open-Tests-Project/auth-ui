"use strict";

var envToConfig = require("env-to-config");
var config = envToConfig({
    mandatory_keys: [
        "BASE_URL"
    ]
});
module.exports = config;