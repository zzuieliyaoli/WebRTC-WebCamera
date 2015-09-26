// https://github.com/mdn/samples-server/blob/master/s/webrtc-capturestill/capture.js
// http://www.html5rocks.com/en/tutorials/getusermedia/intro/

(function() {
    "use strict";
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    var video = document.querySelector("video#video"),
        cameraContainer = document.getElementById("video"),
        canvas = document.getElementById("canvas"),
        btnSwitch = document.getElementById("switch"),
        photo = document.getElementById("photo");

    function successCallback(stream) {
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        video.src = window.URL.createObjectURL(stream);
        video.onloadedmetadata = function(e) {
            video.play();
        };
    }

    function errorCallback() {
        console.log("Your browser doesn't support WebRTC!!");
    }

    function takePhoto() {
        var context = canvas.getContext("2d"),
            width = 480 * 2,
            height = 360 * 2;

        canvas.width = width;
        canvas.height = height;
        // canvas
        context.drawImage(video, 0, 0, width, height);
        // img
        var data = canvas.toDataURL('image/png');
        photo.src = data;
    }

    function start() {
        var constraints = {
            video: true,
            audio: false
        };
        navigator.getUserMedia(constraints, successCallback, errorCallback);
    }


    btnSwitch.addEventListener("click", function() {
        takePhoto();
    }, false);
    window.addEventListener("load", start, false);
}());
