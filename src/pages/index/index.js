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
document.querySelector("#scope").innerText = session.scope;
document.querySelector("#role").innerText = session.role;
document.querySelector("#issued").innerText = new Date(session.iat * 1000);
document.querySelector("#expire").innerText = new Date(session.expire * 1000);

var a = document.createElement("button");
a.innerText = "logout";
a.addEventListener("click", function () {
    localStorage.removeItem(constants.APP_NAME+"token");
    window.location.reload();
});
document.body.appendChild(a);