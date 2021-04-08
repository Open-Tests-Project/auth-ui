"use strict";

var jwt_decode = require('jwt-decode').default;
var constants = require("src/constants");
var token = localStorage.getItem(constants.APP_NAME+"token");
if (!token) {
    var segments = location.host.split("/");
    segments.push("signin");
    location = location.protocol + "//" + segments.join("/");
    return;
}
var session = jwt_decode(token);
document.querySelector("i").innerText = session.email;