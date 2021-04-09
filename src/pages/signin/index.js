"use strict";

var axios = require("axios");
var constants = require("src/constants");

var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var payload = {};
    var elements = this.elements;
    for (var i = 0, element; element = elements[i++];) {
        if (element.value) {
            payload[element.name] = element.value;
        }
    }


    axios({
    url: "http://simonedev/myapi/signin",
    method: "post",
    data: payload})
            .then(function (response) {
                // handle success
            console.log(response.status);
            console.log(response.data);
            try {
                localStorage.setItem(constants.APP_NAME+"token", response.data.token);
                var segments = location.href.split("/");
                segments.pop();
                location = segments.join("/");
            } catch (e) {}
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        ;


});


var main = document.querySelector("main");

window.addEventListener("resize", resize);

function resize () {

    var mainHeight = (window.innerHeight * 80) / 100;
    var mainWidth = mainHeight / 1.61;
    main.style.height = mainHeight + "px";
    main.style.width = mainWidth + "px";
    document.body.style.paddingTop = ((window.innerHeight - mainHeight) / 3) + "px";
    console.log(window.innerHeight, mainHeight)
}
resize();



[].forEach.call(document.querySelectorAll(".input-effect input"), function (input) {
    input.addEventListener("focusout", function () {
        if (this.value) {
            this.classList.add("has-content");
        } else {
            this.classList.remove("has-content");
        }
    })
});