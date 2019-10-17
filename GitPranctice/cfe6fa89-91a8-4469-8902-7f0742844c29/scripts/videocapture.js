var isWebCamAvailable = false;

function getWebcam() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, handleVideo, videoError);
    }
}
function handleVideo(stream) {
    var stream = window.URL.createObjectURL(stream);
    $('video.capturemedia').each(function () {
        var obj = document.getElementById($(this).attr('id'));
        obj.src = stream;
    });
    isWebCamAvailable = true;
}
function videoError(e) {
    isWebCamAvailable = false;
}
function videoPlayPause(video, id) {
    var src = $(video)[0].getAttribute("src");
    if (src != null && src != "undefined" && src != undefined && src != "") {
        if (video.paused == true) {
            $('#play_' + id).removeClass('activeBtn');
            video.play();
            if (($('#playPauseVideo_' + id).css("background-image")).indexOf("Mplay1") != "-1") {
                var str = $('#playPauseVideo_' + id).css("background-image");
                str = str.replace("Mplay1", "Mpause");
                $('#playPauseVideo_' + id).css("background-image", str);
            } else {
                $('#playPauseVideo_' + id).removeClass('play').addClass('pause');
            }
        } else {
            $('#play_' + id).addClass('activeBtn');
            video.pause();
            if (($('#playPauseVideo_' + id).css("background-image")).indexOf("Mpause") != "-1") {
                var str = $('#playPauseVideo_' + id).css("background-image");
                str = str.replace("Mpause", "Mplay1");
                $('#playPauseVideo_' + id).css("background-image", str);
            } else {
                $('#playPauseVideo_' + id).removeClass('pause').addClass('play');
            }
        }
    } else {
        $('#play_' + id).removeClass('activeBtn');
        if (($('#playPauseVideo_' + id).css("background-image")).indexOf("Mpause") != "-1") {
            var str = $('#playPauseVideo_' + id).css("background-image");
            str = str.replace("Mpause", "Mplay1");
            $('#playPauseVideo_' + id).css("background-image", str);
        } else {
            $('#playPauseVideo_' + id).removeClass('pause').addClass('play');
        }
    }
    var str = getTimeFromSeconds(video.duration);
    if (str.indexOf("NaN") > -1) {
        $('#durationVideo_' + id).html("00:00");
    } else {
        $('#durationVideo_' + id).html(str);
    }
}
function onTrackedVideoFrame(currentTime, duration, id) {
    var str = getTimeFromSeconds(currentTime);
    if (str.indexOf("NaN") > -1) {
        $('#vidDurTxt_' + id).html("00:00");
    } else {
        $('#vidDurTxt_' + id).html(str);
    }
}
function uploadFile(id, num) {
    hidePreviousLoader();
    attachmentType = "videocapupload";
    currCapVideoObjId = id;
    attachCountLA = num;
    $("#vidCaptureLoader_" + currCapVideoObjId).css("display", "");
    var video = document.getElementById('videocapture_' + currCapVideoObjId);
    if ($(video)[0].getAttribute("src") != null && $(video)[0].getAttribute("src") != "undefined" && $(video)[0].getAttribute("src") != undefined) {
        if (video.paused == false) {
            videoPlayPause(video, currCapVideoObjId);
        }
    }
    if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
        try {
            window.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('gallery');
        } catch (ex) {
            window.parent.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('gallery');
        }
    } else {
        getLAattachPopup(num, 'videocapupload', id);
    }
}
function captureVideo(id, num) {
    hidePreviousLoader();
    attachmentType = "videocapupload";
    currCapVideoObjId = id;
    attachCountLA = num;
    var video = document.getElementById('videocapture_' + currCapVideoObjId);
    if ($(video)[0].getAttribute("src") != null && $(video)[0].getAttribute("src") != "undefined" && $(video)[0].getAttribute("src") != undefined) {
        if (video.paused == false) {
            videoPlayPause(video, currCapVideoObjId);
        }
    }
    if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
        $("#vidCaptureLoader_" + currCapVideoObjId).css("display", "");
        try {
            window.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('video');
        } catch (ex) {
            window.parent.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('video');
        }
    } else {
        if (isWebCamAvailable) {
        } else {
            alert('No active webcam found!');
        }
    }
}
//These functions are related to ipad
/*function SetSRC() {
    loadAnotherVideo();
}*/

function SetSRC(fileid, filename) {
    hidePreviousLoader();
    fnUploadfile(fileid, filename);
    //loadAnotherVideo();
}
function loadAnotherVideo() {
    var id = setInterval(function () {
        gotoPage(currentPage);
        clearInterval(id);
    }, 1000);
}
function uploadImageFile(id, num) {
    hidePreviousLoader();
    attachmentType = "imagecapupload";
    currCapImageObjId = id;
    attachCountLA = num;
    $("#imgCaptureLoader_" + currCapImageObjId).css("display", "");
    if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
        try {
            try {
                window.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('imagegallery');
            } catch (ex) {
                window.parent.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('imagegallery');
            }
        } catch (e) { }
    } else {
        getLAattachPopup(num, 'imagecapupload', id);
    }
}
function captureWebcam(id, num) {
    hidePreviousLoader();
    attachmentType = "imagecapupload";
    currCapImageObjId = id;
    attachCountLA = num;
    if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
        try {
            try {
                $("#imgCaptureLoader_" + currCapImageObjId).css("display", "");
                window.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('image');
            } catch (ex) {
                $("#imgCaptureLoader_" + currCapImageObjId).css("display", "");
                window.parent.parent.MobileJSInterface.widgetVideoRecordingWithFromSource('image');
            }
        } catch (e) { $("#imgCaptureLoader_" + currCapImageObjId).css("display", "none"); }
    } else {
        if (isWebCamAvailable) {
            snapScreenshot(id);
        } else {
            alert('No active webcam found!');
        }
    }
}
function capture(video) {
    var w = video.videoWidth;
    var h = video.videoHeight;
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    $(canvas).css({ 'left': '0px', 'top': '0px', 'position': 'absolute', 'height': 'inherit', 'width': 'inherit' });
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    return canvas.toDataURL();
}
function snapScreenshot(id) {
    var video = document.getElementById('videocapImg_' + id);
    var output = document.getElementById('capturedImgDiv_' + id);
    $(output).find('img').attr('src', capture(video));
}

function getTimeFromSeconds(secs) {
    var hours = Math.round(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.round(divisor_for_seconds);

    hours = (hours > 9) ? hours : "0" + hours;
    minutes = (minutes > 9) ? minutes : "0" + minutes;
    seconds = (seconds > 9) ? seconds : "0" + seconds;

    return minutes + ":" + seconds;
}

function hidePreviousLoader() {
    try {
        if (currCapImageObjId != "") {
            $("#imgCaptureLoader_" + currCapImageObjId).css("display", "none");
        }
    } catch (e) { }
    try {
        if (currCapVideoObjId != "") {
            $("#vidCaptureLoader_" + currCapVideoObjId).css("display", "none");
        }
    } catch (e) { }
}