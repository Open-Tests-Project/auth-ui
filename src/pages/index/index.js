"use strict";

var constants = require("src/constants");
var token = localStorage.getItem(constants.APP_NAME+"token");
if (!token) {
    var segments = location.host.split("/");
    segments.push("signin");
    location = location.protocol + "//" + segments.join("/");
}
