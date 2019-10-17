
var rotation1;
var rotation2;
function setPrevalues(objId, trigger, animType, animObj, pageType, animDir) {
    if (animType == "flipover") {
        $('#' + animObj).css('display', '');
        $('#' + objId).css('display', '');
        $('#' + animObj).css('-webkit-transition', '-webkit-transform 0s linear 0s');
        $('#' + animObj).css('transition', 'transform 0s linear 0s');
        $('#' + objId).css('-webkit-transition', '-webkit-transform 0s linear 0s');
        $('#' + objId).css('transition', 'transform 0s linear 0s');
        $('#' + animObj).css('-webkit-transform', 'perspective(600px) rotateY(180deg)');
        $('#' + animObj).css('transform', 'perspective(600px) rotateY(180deg)');
        $('#' + objId).css('-webkit-transform', 'perspective(600px) rotateY(0deg)');
        $('#' + objId).css('transform', 'perspective(600px) rotateY(0deg)');

        //$('#' + animObj).css('-webkit-transform-style', 'preserve-3d');
        $('#' + animObj).css('-webkit-backface-visibility', 'hidden');
        $('#' + animObj).css('backface-visibility', 'hidden');
        
        //$('#' + objId).css('-webkit-transform-style', 'preserve-3d');
        $('#' + objId).css('-webkit-backface-visibility', 'hidden');
        $('#' + objId).css('backface-visibility', 'hidden');
       
        $('#' + animObj + ' video').each(function () {
            $(this).hide();
        });
        $('#' + animObj + ' audio').each(function () {
            $(this).hide();
        });

        if ($('#' + objId).data("isMain") == true) {
            if ($('#' + objId).data("hasRule") == true) {
                $('#' + objId).hide();
            }
        }
     
    }
}

function layerHasRule(obj) {
    $('#' + obj).data("hasRule", true);
}


/*function addEventListeners(obj) {
    var elem = document.getElementById(obj);
    if (elem.hasEventListener) {
        elem.removeEventListener("transitionend", eventListener, false);
    }
    elem.addEventListener("transitionend", eventListener, false);
}*/

function buildAnimation(objId, trigger, animType, animObj, pageType, animDir) {

    if (animType == "flipover") {

           var angle1 = 180;
           var angle2 = 0;
           if (animDir == "fromright") {
               rotation1 = -180;
               rotation2 =  180;
           } else {
               rotation1 = 180;
               rotation2 = -180;
           }

           $('#' + animObj).css('-webkit-transition', '-webkit-transform 1s linear 0s');
            $('#' + animObj).css('transition', 'transform 1s linear 0s');
            $('#' + objId).css('-webkit-transition', '-webkit-transform 1s linear 0s');
            $('#' + objId).css('transition', 'transform 1s linear 0s');
            var pos1 = angle1 + rotation1;
            var pos2 = angle2 + rotation1;
            $('#' + animObj).data("postion", pos1);
            $('#' + objId).data("postion", pos2);

            $('#' + animObj).css('-webkit-transform', 'perspective(600px) rotateY(' + pos1 + 'deg)');
            $('#' + animObj).css('transform', 'perspective(600px) rotateY(' + pos1 + 'deg)');
            $('#' + objId).css('-webkit-transform', 'perspective(600px) rotateY(' + pos2 + 'deg)');
            $('#' + objId).css('transform', 'perspective(600px) rotateY(' + pos2 + 'deg)');

            //$('#' + animObj).css('-webkit-transform-style', 'preserve-3d');
            $('#' + animObj).css('-webkit-backface-visibility', 'hidden');
            $('#' + animObj).css('backface-visibility', 'hidden');

            //$('#' + objId).css('-webkit-transform-style', 'preserve-3d');
            $('#' + objId).css('-webkit-backface-visibility', 'hidden');
            $('#' + objId).css('backface-visibility', 'hidden');
            
           $('#' + objId + ' video').each(function () {
                $(this)[0].pause();
                $(this).fadeTo("5", "0");
            });

            $('#' + objId + ' audio').each(function () {
                $(this)[0].pause();
                $(this).fadeTo("5", "0");
            });

            $('#' + animObj + ' video').each(function () {
                $(this).fadeTo("5", "1");
            });

            $('#' + animObj + ' audio').each(function () {
                $(this).fadeTo("5", "1");
            });  

			$("#"+animObj).find(".jp-jplayer").each(function () { //Find Jplayer video
				 $(this).show();				
			});
			
			$("#"+objId).find(".jp-jplayer").each(function () { //Find Jplayer video
				 $(this).hide();				
			});
			$("#" + objId).find("#embedvideo").each(function () { //Find jw ploatform video
			    $(this).fadeOut(2000);
			});
            
            var action = ""
            if (trigger == "onclick") {
                action = "click";
            } else if (trigger == "onover") {
                action = "mouseout";
            } else if (trigger == "dblclick") {
                action = "dblclick";
            }

            $('#' + animObj).bind(action, function (e) {
                var str = $(e.target)[0].outerHTML;
                
				var className = $(e.target).attr("class");
				var isVideoControls = checkForVideoObject(className);
				  
				var str = $(e.target)[0].outerHTML;
				
                if ((str.indexOf("video") == "-1" && str.indexOf("audio") == "-1" && isVideoControls != true && !($(e.target).is("A"))) || className == "layers" || className == "ost layers") {
                    $('#' + animObj).css('-webkit-transition', '-webkit-transform 1s linear 0s');
                    $('#' + animObj).css('transition', 'transform 1s linear 0s');
                    $('#' + objId).css('-webkit-transition', '-webkit-transform 1s linear 0s');
                    $('#' + objId).css('transition', 'transform 1s linear 0s');
                    var pos1 = $('#' + animObj).data("postion");
                    var pos2 = $('#' + objId).data("postion");
                    pos1 = pos1 + rotation2;
                    pos2 = pos2 + rotation2;
                    $('#' + animObj).css('-webkit-transform', 'perspective(600px) rotateY(' + pos1 + 'deg)');
                    $('#' + animObj).css('transform', 'perspective(600px) rotateY(' + pos1 + 'deg)');
                    $('#' + objId).css('-webkit-transform', 'perspective(600px) rotateY(' + pos2 + 'deg)');
                    $('#' + objId).css('transform', 'perspective(600px) rotateY(' + pos2 + 'deg)');
                    $('#' + animObj).css('-webkit-backface-visibility', 'hidden');
                    $('#' + animObj).css('backface-visibility', 'hidden');
                    $('#' + objId).css('-webkit-backface-visibility', 'hidden');
                    $('#' + objId).css('backface-visibility', 'hidden');

                    $('#' + animObj + ' video').each(function () {
                        $(this)[0].pause();
                        $(this).fadeTo("5","0");
                    });
                    $('#' + animObj + ' audio').each(function () {
                        $(this)[0].pause();
                        $(this).fadeTo("5", "0");
                    });

                    $('#' + objId + ' video').each(function () {
                        $(this).fadeTo("5", "1");

                    });

                    $('#' + objId + ' audio').each(function () {
                        $(this).fadeTo("5", "1");
                    });
					$("#"+animObj).find(".jp-jplayer").each(function () { //Find Jplayer video
						 $(this).hide();						
					});
					
					$("#"+objId).find(".jp-jplayer").each(function () { //Find Jplayer video
						 $(this).show();						 
					});
					$("#" + objId).find("#embedvideo").each(function () { //Find jw ploatform video
					    $(this).fadeIn(2000);
					});
                }
            });
            $('#' + animObj).css("z-index", $('#' + objId).css("z-index"));
    }

}

function generateOnClickAnimationMethod(objId, trigger, animType, animObj, pageType, animDir) {

    if (animType == "flipover") {
        setPrevalues(objId, trigger, animType, animObj, pageType, animDir);
    }
    $('#' + objId).click(function (e) {
	   var className = $(e.target).attr("class");
	   var isVideoControls = checkForVideoObject(className);
	  
       var str = $(e.target)[0].outerHTML;
     
        if ((str.indexOf("video") == "-1" && str.indexOf("audio") == "-1" && isVideoControls != true && !($(e.target).is("A"))) || className == "layers" || className == "ost layers") {
           buildAnimation(objId, trigger, animType, animObj, pageType, animDir);
        }

    });
    
}
function checkForVideoObject(className) {
    if (className == undefined){
        return false;
    }else {
        if (className.indexOf("jp-") == -1){
            return false;
			}
        else{
            return true;
			}
    }
}
function generateOnOverAnimationMethod(objId, trigger, animType, animObj, pageType, animDir) {
    if (animType == "flipover") {
        setPrevalues(objId, trigger, animType, animObj, pageType, animDir);
    } 

    $('#' + objId).mouseover(function (e) {
        var className = $(e.target).attr("class");
		var isVideoControls = checkForVideoObject(className);	  
        var str = $(e.target)[0].outerHTML;
        if ((str.indexOf("video") == "-1" && str.indexOf("audio") == "-1" && isVideoControls != true && !($(e.target).is("A"))) || className == "layers" || className == "ost layers") {
            buildAnimation(objId, trigger, animType, animObj, pageType, animDir);
        }
    });
    
}
function generateDblClickAnimationMethod(objId, trigger, animType, animObj, pageType, animDir) {
    if (animType == "flipover") {
        setPrevalues(objId, trigger, animType, animObj, pageType, animDir);
    } 
    $('#' + objId).dblclick(function (e) {
        var str = $(e.target)[0].outerHTML;
        var className = $(e.target).attr("class");
		var isVideoControls = checkForVideoObject(className);	  
        var str = $(e.target)[0].outerHTML;
        if ((str.indexOf("video") == "-1" && str.indexOf("audio") == "-1" && isVideoControls != true && !($(e.target).is("A"))) || className == "layers" || className == "ost layers") {
            buildAnimation(objId, trigger, animType, animObj, pageType, animDir);
        }
    });
    
}


function createAnimation(objId, trigger, animType, animObj, pageType, animDir) {
    $('#' + objId).data("hasAnim", true);
    $('#' + animObj).data("hasAnim", true);
    $('#' + objId).data("isMain", true);
    $('#' + animObj).data("isMain", false);
	
    $("#"+animObj).find(".jp-jplayer").each(function () { //Find Jplayer video
		 $(this).jPlayer( "destroy" );
		 var jpObjId = $(this).attr("id");
		 jpObjId = jpObjId.split("_")[2];
		 loadjPlayerVideo(jpObjId);
    });
	
	$("#"+objId).find(".jp-jplayer").each(function () { //Find Jplayer video
		 $(this).jPlayer( "destroy" );
		 var jpObjId = $(this).attr("id");
		 jpObjId = jpObjId.split("_")[2];
		 loadjPlayerVideo(jpObjId);
    });
		 
    if (trigger == "onclick") {
        generateOnClickAnimationMethod(objId, trigger, animType, animObj, pageType, animDir);
    } else if (trigger == "onover") {
        generateOnOverAnimationMethod(objId, trigger, animType, animObj, pageType, animDir);
    } else if (trigger == "dblclick") {
        generateDblClickAnimationMethod(objId, trigger, animType, animObj, pageType, animDir);
    }
}