var i = 0;
var res = 0;
var context;
var total_width = 300;
var total_height = 20;
var initial_x = 20;
var initial_y = 20;
var radius = total_height/2;
var agent;
var useHTML5;
var isMobileDevices = false;
var audioStatus = "notStarted"
var videoStatus = "notStarted"
var mediaIcon = "";
var mediaArray = [];
var onReplayClicked = false;
var isJplayer = false;
//Maheedhar:19/04/2016: added this code for audio mute functionality
var isMuteEnabled = false;
var intervalArray = new Array();
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function menu(e){
    alert("Right Click disabled on video");
    return false;
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//var totalTime = 125;
var secs = -1;
var mins = 0;
var hrs = 0;
var index = 0;
var currentTime = -1;
var timeArray = new Array();
var endTimeArray = new Array();
var contentArr = new Array();
var audioArray = new Array();
var videoArray = new Array();
var audioCount = 0;
var videoCount = 0;
var isAudioPlaying = false;
var isVideoPlaying = false;
var topLeftCornerX = 0;
var topLeftCornerY = 0;
var width = 0;
var height = 30;
var currentObj ="";
var isPlaying = true;
var duration;
var totTime;
var intervalId = 0;
var audioObj = false;
var videoObj = false;
var currentAudio;
var currentVideo;
var flvEmbedTag = false;
var currentjPlayer;
var jPLayerContainerDiv
var jPlayerArr = [];
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function drwaCanwas(){
    context.beginPath();
    context.rect(topLeftCornerX, topLeftCornerY, width, height);
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = 5;
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function chkVars(){
    if (secs > -1) {
        secs = -1;
    }
    if (mins > 0) {
        mins = 0;
    }
    if (currentTime > -1) {
        currentTime = -1;
    }
    if (context) {
        context.clearRect(50, 50, 200, 100);
        $('#controls').hide();
        i = 0;
        isAudioPlaying = false;
        audioStatus = "notStarted"
        videoStatus = "notStarted"
        isVideoPlaying = false;
    }

    if (res > 0 || res != "0") {
    //    clearInterval(res);
         res = "";
	}
    //clearInterval(intervalID);
    $.each(intervalArray, function (j) {
        clearInterval(intervalArray[j]);
    });
    intervalArray.length = 0
	intervalID = "";
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------


function initTimeLine() {
    $.each(intervalArray,function (j) {
        clearInterval(intervalArray[j]);
    });
    intervalArray.length = 0
 isjwVideocompleted = true;
 isJplayer = getIsJPlayer();
 enableDisablePlayPause(false);
  $('.ost').each(function(i) {
     $(this).hide();
	 })
        initNewTimeLine();
    }    

function initNewTimeLine()
{    
    isMobileDevices = getMobileUserAgent();
    chkVars();
    contentArr = [];
    audioObj = false;
    videoObj = false;
	$(mediaIcon).hide();
	mediaArray = [];
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    $('#play').hide();
    $('#pause').show();
    $('.ost').hide();
    $('#play').attr("disabled", false);
    $('#pause').attr("disabled", false);
    $('#controls').show();
    $('#myCanvas').hide();
    $('.ost').each(function(i) {
	//alert($(this).attr("strtTime"));
    contentArr.push($(this));
        /* var convertToInt = parseFloat($(this).attr('strtTime'));
        timeArray.push(convertToInt);
        var convertendTimetoInt = parseFloat($(this).attr('endTime'));
        endTimeArray.push(convertendTimetoInt);
        if ($(this).attr('contentType') == "audio") {
            audioArray.push($(this).attr('id'));
        }
        if ($(this).attr('contentType') == "video") {
            videoArray.push($(this).attr('id'));
        } */
    });
    drawProgressBar();
    //Maheedhar:19/04/2016: added this code for audio mute functionality
	setMuteStatusForMedia(".layers");
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//////////////////////////// Play, Pause & Replay Controls/////////////////////////////////
$(function() {
    $('#pause').click(function() {
	//alert("Pause"+isPlaying);
       onPauseClick();
    });

    $('#play').click(function() {
        onPlayClick();
    });

    $('#replay').click(function() {
        isPlaying = true;
        replayTimeLine();
        $('#play').hide();
        $('#pause').show();
        $("div[class^='SectionDiv']").find("img").each(function () {
            try {
                var src = $(this).attr('src');
                if (src.indexOf('.gif') != -1) {
                    $(this).removeAttr('src');
                    src = src + "?" + new Date().getTime();
                    $(this).attr('src', src);
                }
            } catch (e) { }
        });
        initNewTimeLine();
        //debugger;
    });

});
function  onPauseClick(){
if (isPlaying == true) {
            pauseMedia("pause");
            //clearInterval(intervalID);
            //clearInterval(res);
            res = "";
            intervalID = "";
            $.each(intervalArray, function (j) {
                clearInterval(intervalArray[j]);
            });
            intervalArray.length = 0
            isPlaying = false;
        }
        $('#play').show();
        $('#pause').hide();
		}
		
function onPlayClick() {
		    if (totalTime > currentTime) {
		        $('#pause').show();
		        $('#play').hide();
		        if (isPlaying == false) {
		            //intervalID = setInterval(myTimer, 1000);
		            if (intervalArray.length<2) {
		                resumeIntervalRes();
		            }
		            isPlaying = true;
		            playMedia("resume");
		        }
		    }
		}
      
   
	

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function drawProgressBar(){
    var elem = document.getElementById('myCanvas');
    if (!elem || !elem.getContext) {
        return;
    }
    context = elem.getContext('2d');
    context.font = "12px Tahoma";
    var progress_lingrad = context.createLinearGradient(0, initial_y + total_height, 0, 0);
    progress_lingrad.addColorStop(0, '#4DA4F3');
    progress_lingrad.addColorStop(0.4, '#ADD9FF');
    progress_lingrad.addColorStop(1, '#9ED1FF');
    context.fillStyle = progress_lingrad;
    res = setInterval(draw, 30);
    intervalArray.push(res);
    duration = document.getElementById('duration');
    // Added input text to overcome the scroll issue for AICC client - 20-02-2015 
    var txt_duration = createInputTxtElement();
    totTime = document.getElementById('totalTime');
    intervalID = setInterval(myTimer, 1000);
    intervalArray.push(intervalID);
    secondsToTime(totalTime);
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function draw() {
    context.clearRect(initial_x - 5, initial_y - 5, total_width + 15, total_height + 15);
    progressLayerRect(context, initial_x, initial_y, total_width, total_height, radius);
    progressBarRect(context, initial_x, initial_y, i, total_height, radius, total_width);
    progressText(context, initial_x, initial_y, i, total_height, radius, total_width);
    if (i >= total_width) {
        clearInterval(res);
    }
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function resumeIntervalRes(){
    res = setInterval(draw, 30);
    intervalArray.push(res);
    intervalID = setInterval(myTimer, 1000);
    intervalArray.push(intervalID);
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
 /**
 * Draws a rounded rectangle.
 * @param {CanvasContext} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius;
 */
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arc(x + width - radius, y + radius, radius, -Math.PI / 2, Math.PI / 2, false);
    ctx.lineTo(x + radius, y + height);
    ctx.arc(x + radius, y + radius, radius, Math.PI / 2, 3 * Math.PI / 2, false);
    ctx.closePath();
    ctx.fill();
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

/**
 * Draws a rounded rectangle.
 * @param {CanvasContext} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius;
 */
function roundInsetRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(1000, 1000);
    ctx.lineTo(1000, -1000);
    ctx.lineTo(-1000, -1000);
    ctx.lineTo(-1000, 1000);
    ctx.lineTo(1000, 1000);
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arc(x+width-radius, y+radius, radius, -Math.PI/2, Math.PI/2, false);
    ctx.lineTo(x + radius, y + height);
    ctx.arc(x+radius, y+radius, radius, Math.PI/2, 3*Math.PI/2, false);
    ctx.closePath();
    ctx.fill();
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

function progressLayerRect(ctx, x, y, width, height, radius) {
    ctx.save();
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#666';
    ctx.fillStyle = 'rgba(189,189,189,1)';
    roundRect(ctx, x, y, width, height, radius);
    ctx.shadowColor = 'rgba(0,0,0,0)';
    var lingrad = ctx.createLinearGradient(0, y + height, 0, 0);
    lingrad.addColorStop(0, 'rgba(255,255,255, 0.1)');
    lingrad.addColorStop(0.4, 'rgba(255,255,255, 0.7)');
    lingrad.addColorStop(1, 'rgba(255,255,255,0.4)');
    ctx.fillStyle = lingrad;
    roundRect(ctx, x, y, width, height, radius);
    ctx.fillStyle = 'white';
    ctx.restore();
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

/**
 * Draws a half-rounded progress bar to properly fill rounded under-layer
 * @param {CanvasContext} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the bar
 * @param {Number} height The height of the bar
 * @param {Number} radius The corner radius;
 * @param {Number} max The under-layer total width;
 */
function progressBarRect(ctx, x, y, width, height, radius, max) {
    // var to store offset for proper filling when inside rounded area
    var offset = 0;
    ctx.beginPath();
    if (width < radius) {
        offset = radius - Math.sqrt(Math.pow(radius, 2) - Math.pow((radius - width), 2));
        ctx.moveTo(x + width, y + offset);
        ctx.lineTo(x + width, y + height - offset);
        ctx.arc(x + radius, y + radius, radius, Math.PI - Math.acos((radius - width) / radius), Math.PI + Math.acos((radius - width) / radius), false);
    }
    else if (width + radius > max) {
    offset = radius - Math.sqrt(Math.pow(radius, 2) - Math.pow((radius - (max - width)), 2));
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width, y);
    ctx.arc(x + max - radius, y + radius, radius, -Math.PI / 2, -Math.acos((radius - (max - width)) / radius), false);
    ctx.lineTo(x + width, y + height - offset);
    ctx.arc(x + max - radius, y + radius, radius, Math.acos((radius - (max - width)) / radius), Math.PI / 2, false);
    ctx.lineTo(x + radius, y + height);
    ctx.arc(x + radius, y + radius, radius, Math.PI / 2, 3 * Math.PI / 2, false);
    }
    else {
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.arc(x + radius, y + radius, radius, Math.PI / 2, 3 * Math.PI / 2, false);
    }
    ctx.closePath();
    ctx.fill();

    // draw progress bar right border shadow
    if (width < max - 1) {
        ctx.save();
        ctx.shadowOffsetX = 1;
        ctx.shadowBlur = 1;
        ctx.shadowColor = '#666';
        if (width + radius > max)
            offset = offset + 1;
        ctx.fillRect(x + width, y + offset, 1, total_height - offset * 2);
        ctx.restore();
    }
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

/**
 * Draws properly-positioned progress bar percent text
 * @param {CanvasContext} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the bar
 * @param {Number} height The height of the bar
 * @param {Number} radius The corner radius;
 * @param {Number} max The under-layer total width;
 */
function progressText(ctx, x, y, width, height, radius, max) {
    ctx.save();
    ctx.fillStyle = 'Black';
    var text = Math.floor(width / max * 100) + "%";
    var text_width = ctx.measureText(text).width;
    var text_x = x + width - text_width - radius / 2;
    if (width<=radius+text_width) {
        text_x = x + radius / 2;
    }
    ctx.fillText(text, text_x, y + 14);

    ctx.restore();

}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//////////////////////////Convert seconds to Minutes/////////////////////////
function secondsToTime(secs)
{
    var hours = Math.round(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.round(divisor_for_seconds);

    hours = (hours > 9) ? hours : "0" + hours;
    minutes = (minutes > 9) ? minutes : "0" + minutes;
    seconds = (seconds > 9) ? seconds : "0" + seconds;

    totTime.innerHTML = "/ " + minutes + ":" + seconds;
	//duration.innerHTML = "0" + ':' + "00";
	$(txt_duration).val('0:00');
    $(txt_duration).width($(totTime).width());
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function myTimer(){
    if (secs == 59) {
        secs = 00;
        mins++;
    }
    else {
        secs++;
    }
    if (mins >= 60) {
        mins = 00;
    }
    else {
        hrs++;
    }
    currentTime++;

    var ss = (currentTime / totalTime) * 100;
    if (currentTime <= totalTime) {
        if (secs < 10)
            secs = "0" + secs
        //duration.innerHTML = mins + ':' + secs;
	$(txt_duration).val(mins + ':' + secs);		
        width = ss * 3;
        i = width;
        syncContent(currentTime);
    }
    else {
        if (isjwVideocompleted == true) {
        //clearInterval(intervalID);
            //clearInterval(res);
            $.each(intervalArray, function (j) {
                clearInterval(intervalArray[j]);
            });
            intervalArray.length = 0
        $('#play').attr("disabled", true);
        $('#pause').attr("disabled", true);
		/// **** Enable Next Button after completing the Timeline page*** ////////////////////////
        setCOValues('pagecompletion','inprogress');
		enableDisablePlayPause(true);
		disableNextinAOPages();
		enableNextButtonWhenCorrect();
    }
    }
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function syncContent(sec){
    $.each(contentArr, function(i, obj) {
        var strtT = parseFloat(obj.attr('strtTime'));
        var endT = parseFloat(obj.attr('endTime'));
        var ContentType = $(obj).attr('contentType');
        if (sec == Math.round(strtT)) {
            currentObj = $(obj);
            try { if ($(currentObj).attr("id") == "submitContainer") { $(currentObj).find("#solutionbut").css({ "opacity": "0.5", "cursor": "default" }); } } catch (e) { }
            var divType = $(obj).attr('contentType');
			if(divType == 'audio' || divType == 'video'  || divType == 'tabs'){
               var $media =  $(obj).find('audio')[0];
			  setMedia(obj, divType);
			  }
			
			if(divType == "layer"){
				chkVideosinLayers(obj);
			}
			 var options = [];
			 var entAnimation = $(obj).attr("enteranceeffect");
			 var timelineDelayIncrement = parseFloat((endT - strtT) / parseInt($(obj).find("li").length));
			 timelineDelayIncrement = parseFloat((endT - (strtT + timelineDelayIncrement)) / parseInt($(obj).find("li").length));
			 var timelineDelay = 0;
			 if (divType == "list" && $(obj).attr('itemstoshow') == 'itembyitem') {
			     if (entAnimation == "" || entAnimation == undefined)
			         entAnimation = "fadin";
			     $(obj).removeAttr("myClass").addClass(entAnimation + ' animated').show();

			     $(obj).find("li").each(function () {
			         var listelement = $(this);
			         listelement.addClass('not-animated');
			         setTimeout(function () {
			             listelement.removeClass('not-animated').addClass(entAnimation + ' animated');
			         }, timelineDelay);
			         timelineDelay = timelineDelay + (timelineDelayIncrement * 1000);
			     });
			 }
			 else {
			     showAnimation(obj, entAnimation);
			 }
        }

        if (ContentType != "audio") {
            if (sec == Math.round(endT) && $(obj).attr('showAlways') != "true" && Math.round(endT) <= Math.round(totalTime)) {
                var extAnimation = $(obj).attr("exiteffect");
                removeMedia($(obj).attr('contentType'));
                if ($(obj).find("iframe") != undefined) {
                    $(obj).find("iframe").attr("src", "")
                }
                exitAnimation(obj, extAnimation);
            }
        } else if (ContentType == "audio") {
            if (sec == Math.round(endT) && Math.round(endT) <= Math.round(totalTime)) {
                var extAnimation = $(obj).attr("exiteffect");
                removeMedia($(obj).attr('contentType'));
                if ($(obj).find("iframe") != undefined) {
                    $(obj).find("iframe").attr("src", "")
                }
                exitAnimation(obj, extAnimation);
            }
        }
    });
}

function showAnimation(obj, animation) {
   
 //convertPercentToPixcel(obj);
 switch(animation) {
  case "dropdownin" :
      $(obj).removeAttr("myClass").addClass("dropdownin").show();
	  
	  break;
  case "dropupin" :
      $(obj).removeAttr("myClass").addClass("dropupin").show();
	  
	  break;
	  
   case "blindhin" :
       $(obj).removeAttr("myClass").addClass("blindhin").show();
	 
	  break;
	  
   case "blindvin" :
       $(obj).removeAttr("myClass").addClass("blindvin").show();
      
	  break;
	  
   case "fadein" :
       $(obj).removeAttr("myClass").addClass("fadein").show();
	 
	  break;
	    
   case "fold" :
	
	  $(obj).show('fold', {}, 300,function(){ entranceAnimationCallBack(obj,animation)}); 
	  break;
	  

	  
   case "shakein" :
       $(obj).removeAttr("myClass").addClass("shakein").show();
	 
	  break;
	
   case "slidein" :
       $(obj).removeAttr("myClass").addClass("slidein").show();
	 
	  break;
	  
	  case "bouncein" :
	      $(obj).removeAttr("myClass").addClass("bouncein").show();
	 
	  break;
	  
     case "explode":
         $(obj).removeAttr("myClass").addClass("animateDown");
        
         break;

   case "clipin" :
       $(obj).removeAttr("myClass").addClass("clipin").show();
	 
	  break;
     case "zoomin":
         $(obj).addClass("zoomin").show();
        
         break;
     case "swivelin":
         $(obj).addClass("swivelin").show();
       
         break;
     case "rotatein":
         $(obj).addClass("rotatein").show();
        
         break;
     case "floatin":
         $(obj).removeAttr("myClass").addClass("floatin").show();
        
         break;
         
         
	  
    //case "color" :
	//$(obj).show();
	//  $(obj).animate({backgroundColor: "#aa0000",color: "#000000"}, 1000 );
	//  break;
	  
	  default:
	  $(obj).fadeIn("fast");
 }
   setTimeout(function(){
	      try {
        if ($(obj).attr('contentType') == "image") {
            $('img[usemap]').rwdImageMaps();
        }
    } catch (e) { }
	    $(obj).removeClass(animation);
  },1000);
    // to adjust image maps
    try {
        if ($(obj).attr('contentType') == "image") {
            $('img[usemap]').rwdImageMaps();
        }
    } catch (e) { }
    ScrollPageToObject($(obj));
}

function exitAnimation(obj, animation) {
   
// convertPercentToPixcel(obj);
 switch(animation) {
  case "fadeout" :
      $(obj).removeAttr("myClass").addClass("fadeout");
      //$(obj).fadeOut("fast");
      break;

  case "dropdownout" :
      $(obj).removeAttr("myClass").addClass("dropdownout");
      
      break;
  case "dropupout" :
      $(obj).removeAttr("myClass").addClass("dropupout");
     
      break;
      
   case "blindhout" :
       $(obj).removeAttr("myClass").addClass("blindhout");
     
      break;
      
   case "blindvout" :
        $(obj).removeAttr("myClass").addClass("blindvout");
       
      break;
      
         
   case "fold" :
     $(obj).removeAttr("myClass").addClass("animateDown");
    
      break;
      
   case "pulsate" :
     $(obj).removeAttr("myClass").addClass("animateDown");
      
      break; 
      
   case "shakeout" :
       $(obj).removeAttr("myClass").addClass("shakeout");
     
    
      break;
    
   case "slideout" :
       $(obj).removeAttr("myClass").addClass("slideout");
      
      break;
      
      case "bounceout" :
          $(obj).removeAttr("myClass").addClass("bounceout");
      
      break;
      
   case "clipout" :
       $(obj).removeAttr("myClass").addClass("clipout");
     
      break;
      
    case "color" :
      $(obj).show();
      $(obj).animate({backgroundColor: "#aa0000",color: "#000000"}, 1000 );
      break;

      case "explode" :
       $(obj).hide('explode', {}, 500,function(){ exitAnimationCallBack(obj,animation)}); 
       break;
     case "clipout":
         $(obj).removeAttr("myClass").addClass("clipout");
         
         break;
     case "zoomout":
         $(obj).addClass("zoomout");
         
         break;
     case "swivelout":
         $(obj).addClass("swivelout");
         
         break;
     case "rotateout":
         $(obj).addClass("rotateout");
         
         break;
     case "floatout":
         $(obj).removeAttr("myClass").addClass("floatout");
         
         break;
      
      default:
      $(obj).fadeOut(500);
 }
 if ($(obj).attr('contentType') == "tabs") {
     stopAllMediaElements(obj);
 }
}
function entranceAnimationCallBack(obj,animation){
 convertPixcelToPercent(obj);


if(($(obj).attr("contenttype") == "video" && $(obj).attr("isautoplay") == "false") || isMobileDevices == true){
    $(currentjPlayer).jPlayer("pause");
   }

    if($(obj).hasClass("animateTop") == true){
        $(obj).removeClass("animateTop").attr("myClass","instmaintable");
    }

     if($(obj).hasClass("animateDown") == true){
        $(obj).removeClass("animateDown").attr("myClass","instmaintable");
    }



	if($(obj).attr("contentType") == "video" && $(obj).attr("isautoplay") == "true" && isMobileDevices == false ){
        $(currentjPlayer).jPlayer("play");

	}

	if ($(obj).attr("contentType") == "audio" && $(obj).attr("isautoplay") == "true" && isMobileDevices == false) {
	    var audioId = $(obj).children()[0];
	    audioId.load();
	    audioId.play();

	}
}

function exitAnimationCallBack(obj,animation){
   convertPixcelToPercent(obj);
    
   if (animation == "shake") {
       $(obj).hide();
   }

    if($(obj).attr("contentType") == "video"){
       $(obj).hide();

     }
}

function convertPercentToPixcel(obj){
    var id = $(obj).attr("id");
	if (id.indexOf("sqid") < -1){  // added this condition for timeline in sequence type question..
	var div2 = document.getElementById(id)
	var percentWd = div2.style.width;
	var percentHt = div2.style.height;
	var percentTop = div2.style.top;
	percentWd = percentWd.substring(0, percentWd.length - 1);
	if (percentHt.indexOf("%") != -1)
	    percentHt = percentHt.substring(0, percentHt.length - 1);
	$(obj).attr("percentWidth",percentWd);
	$(obj).attr("percentHeight", percentHt);
	var wd = $(obj).css("width");
	$(obj).width(wd);
	} 
  }

function convertPixcelToPercent(obj){
    var percentwd = $(obj).attr("percentWidth");
	var percentht = $(obj).attr("percentHeight");
	var objCss = {"width":percentwd+"%","height":percentht+"%"}
	$(obj).css(objCss);
	
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function removeMedia(str){
    if (str == "video") {
       // currentVideo.pause();
		//currentVideo.currentTime = 0;
        videoObj = false;
        isVideoPlaying = false;
       // videoCount++;
		videoStatus = "notStarted"
    }

    if (str == "audio") {
        currentAudio.pause();
		currentAudio.currentTime = 0;
		//alert("CTIME :"+currentAudio.currentTime);
        audioObj = false;
        isAudioPlaying = false;
       // audioCount++;
		//alert("audioRemoved :"+audioCount); 
		audioStatus = "notStarted"
    }        
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function setMedia(obj,divType){
    var audioId = "";
    var videoId = "";
    var audioDiv = "";
    var audioTag = "";
    var videoDiv = "";
    if (divType == "audio") {
	audioId = $(obj).find('audio')[0];
	currentAudio = audioId;
	 audioObj = true;
	 audioStatus = "started"
	 mediaArray.push(audioId);
	 isAudioPlaying = true;
	 onAudioPlayerClick(audioId,obj);
	 //setaudioComplete();
        if (isMobileDevices == false) {
			 if($(obj).attr('isautoplay') == "true"){
					audioId.load();
					audioId.play();
					isAudioPlaying == true;
					//Maheedhar:19/04/2016: added this code for audio mute functionality
					setMuteStatus(audioId);
			}
			 else{
					$(obj).hide();
					$("#audioPoster").show();
					$('#audioPoster').css('top', $(obj).css('top'));
					$('#audioPoster').css('left', $(obj).css('left'));
					$("#audioPoster").bind("click",function(){ playAudioOnClk(obj,audioId); });
					audioStatus = "notStarted"
					onPauseClick();
				}
			//}
      }
        else {
				if ($(obj).attr("isautoplay") == "true" && $(audioId).attr("controls") == undefined) {
				   isPlaying = true;
             onPauseClick();
					enableDisablePlayPause(true);
					OpenDeviceAutoplayPopup(audioId);
        }
					else{
					isPlaying = true;
						onPauseClick();
					}
        }
		
    }
	

    if (divType == "video") {
		if(isJplayer == false){
			setBrowserPlayer(obj,divType);  
		}else{
			setJPlayer(obj,divType);
			 $(obj).unbind("click");
			$(obj).bind("click",function(e){pausePlayJplayer(e)});  
		}
	   isVideoPlaying = true;
	   videoObj = true;
	   videoStatus = "started"
//	   
    }

		/* if (divType == "tabs") {		    
		     $("#" + $(obj).attr("id")).responsiveTabs({});		     
		     setTimeout(function () {
		         updateTabHeight(obj);
		     }, 1000)
		 }*/
}

function setJPlayer(obj, divType){
	 var child = $(obj).children()[0];
     var jPlayerDiv = $(child).find(".jp-jplayer");
     var videoObjId = $(child).attr("id").split("_")[2];
	 currentVideo = returnJPlayer(videoObjId);
	 jPLayerContainerDiv = returnJpLayerContainer(videoObjId);
	 jPlayerArr.push(currentVideo);
	 if(isMobileDevices == false){ // Browser version
		   if ($(jPlayerDiv).attr('isautoplay') == "false") {
			   loadjPlayerVideo(videoObjId);
			   onPauseClick();
		   }
			else {
			  loadjPlayerVideo(videoObjId);
			  $(currentVideo).jPlayer("play");
			  //Maheedhar:19/04/2016: added this code for audio mute functionality
		          setMuteStatus(currentVideo);
			   }

           } else {
			   setTimeout(function(){loadjPlayerVideo(videoObjId)},1000);
                isVideoPlaying = false;
			   onPauseClick();
			  
			   $(currentVideo).jPlayer("pause");
           }
		   
		   
			
}
function setBrowserPlayer(obj, divtype){
	 currentVideo = $(obj).children()[0];
	 mediaArray.push(currentVideo);
		 if(isMobileDevices == false){
			 if ($(obj).attr('isautoplay') == "false") {
				   currentVideo.pause();
                   onPauseClick();
               }
			   else{
				currentVideo.play();
				//Maheedhar:19/04/2016: added this code for audio mute functionality
            			setMuteStatus(currentVideo);			
			   }
		 }
		 else{
		 isVideoPlaying = false;
			onPauseClick();
		 }
		 
		
		    $(currentVideo).off('play');
			$(currentVideo).on('play',function(){
				 onPlayClick();
			});
			$(currentVideo).off('pause');
			$(currentVideo).on('pause',function(){
				onVideoPlayerClick(currentVideo,obj)
			})
	//Maheedhar:19/04/2016: added this code for audio mute functionality
	$(currentVideo).on('volumechange',function(){   
		if(isMuteEnabled != $(currentVideo).prop("muted")){
		   isMuteEnabled = !isMuteEnabled;
		   changeMuteIcon();
		   muteOrUnmuteRemainingMedia();
		}
			})
			//Maheedhar:19/04/2016: added this code for audio mute functionality
}



function onVideoPlayerClick(vid,obj){
var vidElement = vid;
var objTotTime = parseInt($(obj).attr("endtime"));
var vidCtime = Math.round(vidElement.currentTime);
var vidTotTime = Math.round(vidElement.duration);
if(vidCtime<vidTotTime && Math.round(currentTime)<Math.round(objTotTime) && onReplayClicked == false)
       onPauseClick();
   onReplayClicked = false;
////////////// Video Player Seek Events////////////////
/*$(vidElement).on('seeking',function(){

});

$(vidElement).on('seeked',function(){

});*/
////////////// Audio Player Seek Events////////////////
}

function onAudioPlayerClick(audioId,obj){
var audElement = $(audioId)[0];
var objTotTime = parseInt($(obj).attr("endtime"));
$(audElement).on('play',function(){
       onPlayClick();
});
$(audElement).off('pause');    
$(audElement).on('pause',function(){
var audCtime = Math.round(audElement.currentTime);
var audTotTime = Math.round(audElement.duration);
	 if(audCtime<audTotTime && Math.round(currentTime)<Math.round(objTotTime) && onReplayClicked == false)
		  onPauseClick();
  
  onReplayClicked = false;
});
//Maheedhar:19/04/2016: added this code for audio mute functionality
$(audElement).on('volumechange',function(){   
    if(isMuteEnabled != $(audElement).prop("muted")){
       isMuteEnabled = !isMuteEnabled;
	   changeMuteIcon();
	   muteOrUnmuteRemainingMedia();
    }
})
//Maheedhar:19/04/2016: added this code for audio mute functionality
////////////// Audio Player Seek Events////////////////
/*$(audElement).on('seeking',function(){

});

$(audElement).on('seeked',function(){

});*/
////////////// Audio Player Seek Events////////////////
}
function playAudioOnClk(obj,audioId){
$(obj).show();
audioId.load();
            audioId.play();
			//audioId.controls = false;
			mediaArray.push(audioId);
            currentAudio = audioId;
            audioObj = true;
            audioStatus = "started"
            isAudioPlaying = true;
			//if($(obj).attr('showAlways') == "true"){
            setaudioComplete(obj,audioId);
			$("#audioPoster").unbind("click");
			$("#audioPoster").hide();
			onPlayClick();
			
}
function playVideoOnClk(obj,videoId){
$(obj).show();
try{
videoId.load();
}catch(e){}
        videoId.play();
		mediaArray.push(videoId);
        currentVideo = videoId;
        videoObj = true;
        videoStatus = "started"
        isVideoPlaying = true;
		setvideoComplete(obj,videoId);
		$("#videoPoster").unbind("click");
			$("#videoPoster").hide();
			onPlayClick();
			$(videoId).bind("click",function(evt){
				onVideoPlayerClick($(this),obj);
				});
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function stopAudio(aDiv,aId){
	$(mediaIcon).show();
		if(intervalID != null && intervalID != "" && intervalID != undefined){
			//clearInterval(intervalID);
		    //clearInterval(res);
		    $.each(intervalArray, function (j) {
		        clearInterval(intervalArray[j]);
		    });
		    intervalArray.length = 0;
			intervalID = "";
			res = "";
			}
			try{
		$(mediaIcon).unbind("click");
		}
		catch(e){
		}
			$(mediaIcon).bind("click", function(){
			mediaOnIpad("audio",aDiv,aId);
		});
	}
	
function stopVideo(vDiv,vId){
$(mediaIcon).show();
if(intervalID != null && intervalID != "" && intervalID != undefined){
		//clearInterval(intervalID);
    //clearInterval(res);
    $.each(intervalArray, function (j) {
        clearInterval(intervalArray[j]);
    });
    intervalArray.length = 0
		intervalID = "";
		res = "";
		//alert(intervalID+" "+res);
		}
		try{
		$(mediaIcon).unbind("click");
		//alert("Remove event on Media Icon");
		}
		catch(e){
		}
		$(mediaIcon).bind("click", function(){
		mediaOnIpad("video",vDiv,vId);
	    });
}

function mediaOnIpad(type,divType,divId){

if(type == "audio"){
        divId.play();
		mediaArray.push(divId);
		isAudioPlaying = true;
		audioObj = true;
		currentAudio = divId;
		audioStatus = "started"
		//if($(divType).attr("showAlways") == "true"){
        setaudioComplete(divType,divId);
		//}
		}
		
		if(type == "video"){
		alert(divId);
		divId.play();
		mediaArray.push(divId);
		isVideoPlaying = true;
		videoObj = true;
		videoStatus = "started"
		currentVideo = divId;
		//if($(divType).attr("showAlways") == "true"){
        setvideoComplete(divType,divId);
		//}
		}
		
		if(intervalID == ""){
        intervalID = setInterval(myTimer, 1000);
        intervalArray.push(intervalID);
        res = setInterval(draw, 30);
        intervalArray.push(res);
		$(mediaIcon).hide();
		}
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function setaudioComplete(obj,mediaDiv){
if(($(obj).attr("showAlways") == "true")){
//alert(mediaDiv);
    mediaDiv.addEventListener('ended', setAudioEndEvent, false);
	   
	   }
}
function setAudioEndEvent(e) {
         e.target.pause();
        //audioCount++;
		//alert("audioComplete :"+audioCount); 
        isAudioPlaying = false;
		audioStatus = "notStarted"
        audioObj = false;
		currentAudio = "";
		//alert("VIDEO ENDED");
    }
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function setvideoComplete(obj,mediaDiv){
if(($(obj).attr("showAlways") == "true")){
    mediaDiv.addEventListener('ended', setVideoEndEvent , false);
	}
}
function setVideoEndEvent(e) {
        e.target.pause();
		e.target.currentTime = 0;
       // videoCount++;
        isVideoPlaying = false;
        videoStatus = "notStarted";
		videoObj = false;
		currentVideo = "";
		
      //  $(obj).remove();
    }
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function progressHandler(e){
      if(e.total && e.loaded){
           // percentage of video loaded
          var proportion = Math.round(e.loaded / e.total);
          return proportion * 100;
      } else {
           // do nothing because we're autobuffering.
      }
  }
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
/////////////////////////////////////// Controls/////////////////////////////////


function pauseMedia(id) {
    if (isAudioPlaying == true && audioObj == true) {
		currentAudio.pause();
        isAudioPlaying = false;
		//mediaStatus = "started"
    }
     
    if (isVideoPlaying == true && videoObj == true) {
			if(isJplayer == false){
				currentVideo.pause();
			}
			else{
				$(currentVideo).jPlayer("pause");
			}
			
            isVideoPlaying = false;
    }
		 
    $('object embed').each(function () {
        var _locType = $(this).attr('TYPE');
        var _locName = $(this).attr('NAME');
        if (_locType == "application/x-shockwave-flash" && _locName != undefined && _locName != "undefined") {
            var _locFlvObject = thisMovie(_locName);
			try{
            _locFlvObject.pause();
			}catch(e){}
        }
    });
	pauseMediaInLayers();
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function playMedia(id){
    if (isAudioPlaying == false && audioObj == true) {
        if (audioStatus == "started") {
            currentAudio.play();
            isAudioPlaying = true;
		   // mediaStatus = "started"
		   //Maheedhar:19/04/2016: added this code for audio mute functionality
		   setMuteStatus(currentAudio);
        }
    }

    if (isVideoPlaying == false && videoObj == true) {
       // if (videoStatus == "started") {
			if(isJplayer == false){
				currentVideo.play();
			}
			else{
				$(currentVideo).jPlayer("play");
			}
            isVideoPlaying = true;
	                //Maheedhar:19/04/2016: added this code for audio mute functionality
			setMuteStatus(currentVideo);
       // }
    }
   $('object embed').each(function () {
        var _locType = $(this).attr('TYPE');
        var _locName = $(this).attr('NAME');
        if (_locType == "application/x-shockwave-flash" && _locName != undefined && _locName != "undefined") {
            var _locFlvObject = thisMovie(_locName);
			try{
            _locFlvObject.play();
			}catch(e){}
        }
    });
	playMediaInLayers();
}

 		 
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function setFullScreen(){
    var divType = currentObj.attr('contentType');
    if (divType == "video") {
        var vId = document.getElementById(videoArray[videoCount]);
        var videoTag = vId.getElementsByTagName('video');
        videoTag = $(videoTag).attr('id');
        vId = document.getElementById(videoTag);	                            
		//vId.mozRequestFullScreen(); //  FullScreen Video for Mozilla..
        //vId.webkitEnterFullscreen(); // FullScreen Video for Chrome..
    }		
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function muteOrUnmute() {
    video.muted = !video.muted;
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function unloadTimeLine(){
    //clearInterval(intervalID);
    //clearInterval(res);
    $.each(intervalArray, function (j) {
        clearInterval(intervalArray[j]);
    });
    intervalArray.length = 0
	unloadMedia();
    videoArray = [];
    audioArray = [];
    currentObj = "";
    isAudioPlaying = false;
    isVideoPlaying = false;
    contentArr = [];
	audioStatus = "notStarted"
	videoStatus = "notStarted"
	$(mediaIcon).hide();
	chkCanvas();
}
              
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function chkCanvas(){
    if (context) {
        context.clearRect(50, 50, 200, 100);
        $('#controls').hide();
        currentTime = -1;
        mins = 0;
        secs = 0;
        isAudioPlaying = false;
        audioStatus = "notStarted"
	    videoStatus = "notStarted"
        isVideoPlaying = false;
    }            
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------			
function replayTimeLine(){
onReplayClicked = true;
    //clearInterval(intervalID);
    //clearInterval(res);
$.each(intervalArray, function (j) {
    clearInterval(intervalArray[j]);
});
intervalArray.length = 0
	intervalID = "";
	res = "";
    if (context) {
        context.clearRect(0, 0, context.width, context.height);
        currentTime = -1;
        mins = 0;
        secs = -1;
       unloadMediaonReply();
	   enableDisablePlayPause(false);
	   
    }
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
function unloadMedia() {
	$("#audioPoster").hide();
	$("#VideoPoster").hide();
if(isJplayer == false){
	if(mediaArray.length>0){
		for(var i=0;i<mediaArray.length;i++){
		mediaArray[i].pause();
		$(mediaArray[i]).remove();
		//mediaArray[i].currentTime = 0;
		}
	}
}else{
clearDestroyJPlayer("clear");
}
   audioStatus = "notStarted"
   videoStatus = "notStarted"
   isVideoPlaying = false;
  // audioCount = 0;
 //  videoCount = 0;
   videoArray = [];
   audioArray = [];
//currentObj.currentTime = 0;
//currentObj.pause();
   currentObj = "";
   isAudioPlaying = false;
   isVideoPlaying = false;
   contentArr = [];
   mediaArray = [];
   audioObj = false;
   videoObj = false;
}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

function unloadMediaonReply() {
	$("#audioPoster").hide();
	$("#VideoPoster").hide();
if(isJplayer == false){
	if(mediaArray.length>0){
		for(var i=0;i<mediaArray.length;i++){
		mediaArray[i].pause();
		mediaArray[i].currentTime = 0;
	  }
	}
}else{
        try {
            if (mediaArray.length > 0) {
                for (var i = 0; i < mediaArray.length; i++) {
                    mediaArray[i].pause();
                    mediaArray[i].currentTime = 0;
                }
            }
        } catch (e) { }
        clearDestroyJPlayer("destroy");      
}
    audioStatus = "notStarted"
	videoStatus = "notStarted"
	isVideoPlaying = false;
	videoArray = [];
	audioArray = [];
	currentObj = "";
	isAudioPlaying = false;
	isVideoPlaying = false;
	contentArr = [];
	mediaArray = [];
	audioObj = false;
	videoObj = false;	
	jPlayerArr = [];		
    try {
		StopMediaInLayers();  
    } catch (e) { StopMediaInLayers(); }
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName]
    }
    else {
        return document[movieName]
    }
}

function returnJPlayer(objId){
    var jp = "#jquery_jplayer_"+objId;
    return jp;
}

function returnJpLayerContainer(objId){
    var jp = "#"+objId;
    return jp;
}

function pausePlayJplayer(e){
    var target = $(e.target).attr("class");
    if(target == "jp-pause"){
         onPauseClick();
   } 
    if(target == "jp-play" || target == "jp-video-play-icon"){
          onPlayClick();
   
}
    //Maheedhar:19/04/2016: added this code for audio mute functionality
	if(target == "jp-unmute" || target == "jp-mute"){
	   isMuteEnabled = !isMuteEnabled;
	   changeMuteIcon();
	   muteOrUnmuteRemainingMedia();
	}
    //Maheedhar:19/04/2016: added this code for audio mute functionality
}

function clearDestroyJPlayer(val){
    if(jPlayerArr.length>0){
    for(var i=0;i<jPlayerArr.length;i++){
        if(val == "destroy")
          $(jPlayerArr[i]).jPlayer( "destroy" );
      else
         $(jPlayerArr[i]).jPlayer( "clear" );
  }
}
}
function enableDisablePlayPause(val) {
    if (val == true) {
        $('#pause').unbind("click");
        $('#play').unbind("click");
        $("#pause").css("opacity", 0.5);
        $("#play").css("opacity", 0.5);
    }
    else {
        $("#pause").css("opacity", 1);
        $("#play").css("opacity", 1);
        $('#pause').bind("click", function () { onPauseClick(); });
        $('#play').bind("click", function () { onPlayClick(); });
    }
}
function createInputTxtElement(){
	var txt = document.getElementById("txt_duration");
	if(txt == null){
		txt = document.createElement("input");
		$(txt).attr("id","txt_duration");
		$(txt).prop("readonly","readonly");
		$(txt).css({"background":"transparent","border":"none","line-height":"inherit","color": "inherit", "width":"30px", "font-size":"inherit","text-align":"right"});
		$(duration).append(txt);
	}
    return txt;
}

function StopMediaInLayers() {
if(isJplayer == true){
    $('.layers').find(".jp-jplayer").each(function () { //Find Jplayer video
		$(this).jPlayer("destroy");
		var jpObjId = $(this).attr("id");
		jpObjId = jpObjId.split("_")[2];
		loadjPlayerVideo(jpObjId);
    });
}else{
	 $('.layers').find("video").each(function () {
		$(this)[0].pause();
		$(this).currentTime = 0;
		
	});
}
    try {
        $('.layers').find("#embedvideo iframe").each(function () {
            var video = $(this).attr("src");
            $(this).attr("src", "");
            $(this).attr("src", video);
        });
    } catch (e) { }
    $('.layers audio').each(function () {
        $(this)[0].pause();
    });
    $('.layers').hide();
}

function getIsJPlayer(){
var jplayer = true;
	  $('.ost').each(function(i) {
		  if($(this).children()[0] == "[object HTMLVideoElement]"){
		  jplayer = false;
		  }
	  })
	  
	  $('.layers').find("div").each(function () {
	   if($(this).children()[0] == "[object HTMLVideoElement]"){
		  jplayer = false;
	   }
	  })
	  
	  return jplayer;
}

function chkVideosinLayers(obj){
	if(isJplayer == true){
		$(obj).find(".jp-jplayer").each(function () { //Find Jplayer video
		var obj = $(this).parent().parent().parent();
			$(this).jPlayer("destroy");
			var jpObjId = $(this).attr("id");
			jpObjId = jpObjId.split("_")[2];
			loadjPlayerVideo(jpObjId);
			 onPauseClick();
			 $(obj).bind("click",function(e){pausePlayJplayer(e)});
		});
	}else{
		 $('.layers').find("video").each(function () {
		 var layerVideo = $(this)[0]
				layerVideo.pause();
				layerVideo.currentTime = 0;
				 onPauseClick();
				 $(layerVideo).off('play');
				 $(layerVideo).on('play',function(){
					onPlayClick();
				 });
				 
			$(layerVideo).off('pause');
				$(layerVideo).on('pause',function(){
					onVideoPlayerClick(layerVideo,obj)
				})
				//Maheedhar:19/04/2016: added this code for audio mute functionality
				$(layerVideo).off('volumechange');
				$(layerVideo).on('volumechange',function(){                       				
					if(isMuteEnabled != $(layerVideo).prop("muted")){
					   isMuteEnabled = !isMuteEnabled;
					   changeMuteIcon();
					   muteOrUnmuteRemainingMedia();
					}
				})
				setMuteStatus(layerVideo);
				//Maheedhar:19/04/2016: added this code for audio mute functionality
		});
}
}

function playMediaInLayers(){
	if(isJplayer == true){
	    $('.layers:not([type="hints"],[type="solution"])').each(function () {
	        //console.log($(this).css("display") + "<--------------------------------->" + $(this).attr("type"));
	        var displayValue = $(this).css("display");
	        if (displayValue != "none") {
	            var layerStrtTime = Number($(this).attr("strtTime"));
	            var layerEndTime = Number($(this).attr("endTime"));
	            $(this).find(".jp-jplayer").each(function () {
	                if (layerStrtTime <= currentTime && layerEndTime >= currentTime) {
	                    var isPaused = $(this).data().jPlayer.status.paused;
	                    if (isPaused == true) {
	                        $(this).jPlayer("play");
	                    }
	                }
	            })
	        }
		})
		}
	else{
	    $('.layers:not([type="hints"],[type="solution"])').each(function () {
	        //console.log($(this).css("display") + "<--------------------------------->" + $(this).attr("type"));
	        var displayValue = $(this).css("display");
	        if (displayValue != "none") {
	            $(this).find("video").each(function () {
	                if ($(this)[0].paused == true) {
	                    $(this)[0].play();
	                }
	            });
	        }
		 })
	}
}  

function pauseMediaInLayers(){
	if(isJplayer == true){
	    $('.layers:not([type="hints"],[type="solution"])').each(function () {
	        //console.log($(this).css("display") + "<--------------------------------->" + $(this).attr("type"));
	        
			    var layerStrtTime = Number($(this).attr("strtTime")); 
			    var layerEndTime = Number($(this).attr("endTime")); 
			    $(this).find(".jp-jplayer").each(function () {
			        if(layerStrtTime <=currentTime && layerEndTime>=currentTime){
                        var isPaused = $(this).data().jPlayer.status.paused;
				        if(isPaused == false){
					        $(this).jPlayer("pause");
				        }
			        }
			    })
	        

		})
	}
	else{
	    $('.layers:not([type="hints"],[type="solution"])').each(function () {
	        console.log($(this).css("display") + "<--------------------------------->" + $(this).attr("type"));
	        $(this).find("video").each(function () {	        
		         if($(this)[0].paused == false){
				    $(this)[0].pause();
		         }
	        });
		})
	}
}
//Maheedhar:19/04/2016: added this code for audio mute functionality
function setMuteStatusForMediaInTimeLine(){
	if (audioObj == true) {	   
	   currentAudio.muted = isMuteEnabled;          
       $(currentAudio).prop("muted",isMuteEnabled);
	}	 
	if (videoObj == true) {
		if(isJplayer == false){
			currentVideo.muted = isMuteEnabled; 
            $(currentVideo).prop("muted",isMuteEnabled);			
		}
		else{
			$(currentVideo).jPlayer("mute",isMuteEnabled);
		}					
	}
    try {
        objType = trackObjects[SeqID].type.toLowerCase();
        if (objType == "contentobject" || objType == "content object" || objType == "assessment") {
            var pagetype = "";
            pagetype = getCoValues("Qtype").toLowerCase();
            if (pagetype == "singleselect" || pagetype == "truefalse" || pagetype == "multipleselect") {
                var choiceObjects = $("#page").find("div[id^='choice']");
                $(choiceObjects).each(function () {
                    var vids = $(this).find("video");
                    var auds = $(this).find("audio");
                    if (vids.length > 0 || auds.length > 0) {
                        setMuteStatusForMedia($(this));
                    }
                })
            }
        }
    }catch(e){}
	try{
	   muteOrUnmuteRemainingMedia();
	}catch(e){}
}
function setMuteStatus(mediaObj){
    if (audioObj == true) {	   
	   mediaObj.muted = isMuteEnabled; 
       setMuteUnmute(mediaObj,"audio",false); 
	}else{
	try{	    
	    if (videoObj == true) {
			if(isJplayer == false){
				setMuteUnmute(mediaObj,"video",false);  
			}else{
				setMuteUnmute(mediaObj,"video",true); 
			}
	    }  
	}catch(e){}	
}
	if(isTimeline() == "yes"){	
		try{
		   muteOrUnmuteRemainingMedia();
		}catch(e){}
	}
}
function setMuteUnmute(obj,type,iscustomplayer){ 
    if(isTimeline() == "yes"){	
       type = $($(obj).parent()).attr("contentType");
        if (type == undefined && obj.nodeName != undefined) {
            type = obj.nodeName.toLowerCase();
        }
	} 
    if(type == "audio" || (type == "video" && !iscustomplayer)){
       obj.muted = isMuteEnabled; 
	   $(obj).prop("muted",isMuteEnabled);
    }else{
	   $(obj).jPlayer("mute",isMuteEnabled);	
	}
}
//initiating timeline for single dynamically with newly  rendered page
function initTimeLineForSinglePage(pageId) {
    isjwVideocompleted = true;
    isJplayer = getIsJPlayer();
    enableDisablePlayPause(false);
    $(pageId).find('.ost').each(function (i) {
        $(this).hide();
    })
    initNewTimeLineForSinglePage(pageId);
}

function initNewTimeLineForSinglePage(pageId) {
    isMobileDevices = getMobileUserAgent();
    chkVars();
    contentArr = [];
    audioObj = false;
    videoObj = false;
    $(mediaIcon).hide();
    mediaArray = [];
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    $('#play').hide();
    $('#pause').show();
    $('.ost').hide();
    $('#play').attr("disabled", false);
    $('#pause').attr("disabled", false);
    $('#controls').show();
    $('#myCanvas').hide();
    $(pageId).find('.ost').each(function (i) {
        contentArr.push($(this));
    });
    drawProgressBar();
    setMuteStatusForMedia(".layers");
}
//Maheedhar:19/04/2016: added this code for audio mute functionality
//--------------------------------------------------------------------------------------------------