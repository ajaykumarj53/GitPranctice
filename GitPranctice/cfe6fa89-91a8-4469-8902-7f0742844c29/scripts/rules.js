var loc_contXml;
var nextDisabled = false;
var backDisabled = false;
var tocDisabled = false;
var curPgNum;
var currentShownObject = "";
function getTrackPagenum(seqId, currPage) {

    if (isTrack == "yes") {
        var totalElements = tocObjects.length;
    } else {
        var totalElements = trackObjects.length;
    }
    var indexNum = 0;
    for (var i = 1; i <= totalElements; i++) {
        if (isTrack == "yes") {
            var trObj = tocObjects[i - 1];
            indexNum++;
        } else {
            var trObj = trackObjects[i - 1];
        }
        if (trObj.type == 'block') {
            indexNum++;
        }
        var obj = this["obj" + i + "Pages"];
        var objLen = obj.length;
        if (seqId == (i - 1)) {
            for (j = 1; j <= objLen; j++) {
                var innerObj = obj[j - 1];
                if (innerObj.type == "topic") {
                    indexNum++;
                    var arr = innerObj.pages;
                    var len = arr.length;
                    for (var t = 0; t < len; t++) {
                        var innerObj1 = arr[t];
                        if (innerObj1.type == "topic") {
                            indexNum++;
                            var arr1 = innerObj1.pages;
                            var len1 = arr1.length;
                            for (var l = 0; l < len; l++) {
                                if (((j + t + l) - 1) == currPage) {
                                    return indexNum;
                                    break;
                                } else {
                                    indexNum++;
                                }
                            }
                        } else {
                            if (((j + t) - 1) == currPage) {
                                return indexNum;
                                break;
                            } else {
                                indexNum++;
                            }
                        }
                    }
                } else {
                    if ((j - 1) == currPage) {
                        return indexNum;
                        break;
                    } else {
                        indexNum++;
                    }
                }
            }
        } else {
            for (var k = 0; k < objLen; k++) {
                var innerObj = obj[k];
                if (innerObj.type == "topic") {
                    indexNum++;
                    var arr = innerObj.pages;
                    var topicLen = arr.length;
                    for (var y = 0; y < topicLen; y++) {
                        var innerObj1 = arr[y];
                        if (innerObj1.type == "topic") {
                            indexNum++;
                            var arr1 = innerObj1.pages;
                            indexNum += arr1.length;
                        } else {
                            indexNum++;
                        }
                    }
                } else {
                    indexNum++;
                }
            }
        }
    }
}

function disableTOCClick(currPage, dir) {
    var obj;
    var currIndex = getTrackPagenum(SeqID, currPage);
     if (isTrack == "yes") {
        $('#folderTree').find('span').each(function (index) {
            var val = index; //$(this).attr("pageNum");
            if (dir == "next" && val > currIndex) {
                $(this).removeClass("steps");
                $(this).addClass("TOC_Links_Disable");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 0.5);
                $(this).removeClass('TOC_Links_Visited');
                $(this).removeClass('on');
            } else if (dir == "back" && val < currIndex) {
                $(this).removeClass("steps");
                $(this).addClass("TOC_Links_Disable");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 0.5);
                $(this).removeClass('TOC_Links_Visited');
                $(this).removeClass('on');
            } else if (dir == "all" && val != currIndex) {
                $(this).removeClass("steps");
                $(this).addClass("TOC_Links_Disable");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 0.5);
                $(this).removeClass('TOC_Links_Visited');
                $(this).removeClass('on');
            }
        });
    } else {
         obj = $('#folderTree div div table tbody tr td span');
            $(obj).each(function (index) {
            var val = index; //$(this).attr("pageNum");
            if (dir == "next" && val > currIndex) {
                $(this).removeClass("steps");
                $(this).addClass("TOC_Links_Disable");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 0.5);
                $(this).removeClass('TOC_Links_Visited');
                $(this).removeClass('on');
            } else if (dir == "back" && val < currIndex) {
                $(this).removeClass("steps");
                $(this).addClass("TOC_Links_Disable");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 0.5);
                $(this).removeClass('TOC_Links_Visited');
                $(this).removeClass('on');
            } else if (dir == "all" && val != currIndex) {
                $(this).removeClass("steps");
                $(this).addClass("TOC_Links_Disable");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 0.5);
                $(this).removeClass('TOC_Links_Visited');
                $(this).removeClass('on');
            }
        });
    }
}

function chkIfDisabledByRules(currPage,topage, dir){
    var canGo = false;
    
    if((topage != "undefined" ) && (topage != undefined)){
        if (nextDisabled == false && topage > currPage ) {
            canGo = true;
        }
        if (backDisabled == false && topage < currPage) {
            canGo = true;
        }
        if (tocDisabled == false) {
            canGo = true;
        }
    }else{
        if (dir == "next" && nextDisabled == false) {
            canGo = true;
        }
        if (dir == "back" && backDisabled == false) {
            canGo = true;
        }
    }
   

  return canGo;
}


function resetAllRuleBooleans(pgNum) {
    
    curPgNum = pgNum;
    if (nextDisabled == true || backDisabled == true || tocDisabled == true) {
        nextDisabled = false;
        backDisabled = false;
        tocDisabled = false;
        updateTOC();
    }
}

function generateOnClickMethod(objId, trigger, action, firedObjectId, pageType) {
    $('#' + objId).click(function (e) {
        e.stopPropagation();
        buildAction(objId, trigger, action, firedObjectId, pageType);
   });
}

function generateOnOverMethod(objId, trigger, action, firedObjectId, pageType) {
    $('#' + objId).mouseover(function () {
        buildAction(objId, trigger, action, firedObjectId, pageType);
    });
}
function generateDblClickMethod(objId, trigger, action, firedObjectId, pageType) {
    $('#' + objId).dblclick(function () {
        buildAction(objId, trigger, action, firedObjectId, pageType);
    });
}

function generateOutsideClickMethod(objId, trigger, action, firedObjectId, pageType) {
    $('#content').click(function (e) {
        var str = $(e.target)[0].outerHTML;
		if(str.indexOf('<td') == 0){
		   str = $(e.target).parent().parent().parent()[0].outerHTML;
		}else if(str.indexOf('<tr') == 0){
		   str = $(e.target).parent().parent()[0].outerHTML;
		}else if(str.indexOf('<tbody') == 0){
		   str = $(e.target).parent()[0].outerHTML;
		}
        if ($(e.target).attr('id') != firedObjectId && $(e.target).children().length > 0 && str.indexOf('instmaintable') != -1) {
            $('#' + firedObjectId).fadeOut('fast', 'linear');
            if (pageType == "timelinepage") onPlayClick();
		var isJplayer = false;
         $("#"+firedObjectId).find(".jp-jplayer").each(function () { //Find Jplayer video
		 isJplayer = true;
		 $(this).jPlayer( "destroy" );
		 var jpObjId = $(this).attr("id");
		 jpObjId = jpObjId.split("_")[2];
		 loadjPlayerVideo(jpObjId);
		 });
		 try{
			 $('#'+firedObjectId).find("#embedvideo iframe").each(function () {
				var video = $(this).attr("src");
				$(this).attr("src","");
				$(this).attr("src",video);
			});
		 }catch(e){}
            $('#' + firedObjectId + ' audio').each(function () {
                $(this)[0].pause();
            });
			if(isJplayer == false){
				$('#' + firedObjectId + ' video').each(function () {
				    try {
				        $(this)[0].pause();
				        $(this)[0].currentTime = 0;
				    } catch (e) { }
				});
			}
        }
    });
}

function loadContentXml() {
    var path = "";
    if (isTrack == "yes") {
        path = trackObjects[SeqID].contentid + "/content.xml";
    } else {
        path = "content.xml";
    }
    $.ajax({
        type: "GET",
        url: path,
        dataType: "xml",
        success: function (xml) {
            loc_contXml = xml;
        }
    });
}


function buildAction(objId, trigger, action, firedObjectId, pageType) {
    var isJplayer = false;
    if (action == "popup") {
        var popObj = document.getElementById("layerdialogdiv");
        if (popObj == null || popObj == "null") {
            $('.footer').append("<tr><td><div id='layerdialogdiv'></div></td></tr>");
        }
        var bgrd = $('#' + firedObjectId).css('background');
        var brdr = $('#' + firedObjectId).css('border');
        var layerheight = parseInt($('#' + firedObjectId).attr('layerheight')) + 60;
        var width = $('#' + firedObjectId)[0].style.width;
        if ($(window).width() < 480) {
            width = "80%";
        }
        $('#layerdialogdiv').html($('#' + firedObjectId).html());
        $('#layerdialogdiv').removeAttr("style");
        $('#layerdialogdiv').css('background', bgrd);
        $('#layerdialogdiv').css('border', brdr);
        $('#layerdialogdiv').dialog({
            height: layerheight,
            width: width,
            resizable: false,
            draggable: false,
            modal: true,
            open: function () { if (pageType == "timelinepage") onPauseClick();
			$('#layerdialogdiv').find("audio[autoplay]").trigger('play');
			},
            close: function () { 
			            if (pageType == "timelinepage") onPlayClick();
						$('#layerdialogdiv').find("audio").trigger('remove');
			
			}
        });

        try {
            $('#layerdialogdiv').find("div[id='closeBtn_" + firedObjectId+"']").css({ "display": "none" });
        } catch (e) { }
    }
     
    if (action == 'show') {
        var ind = Number(getHighestDepth()) + 1;
        if(currentShownObject != "" && currentShownObject != firedObjectId){
            hideCurrentLayer(currentShownObject, pageType);		    
        }
        if ($('#' + firedObjectId).hasClass("lyrfs")) {            
            var popObj = document.getElementById("layerFullscreenDiv");
            if (popObj == null || popObj == "null") {
                $("body").append("<div id='layerFullscreenDiv' style='display:none;'></div>");
            }
            var bgrd = $('#' + firedObjectId).css('background');
            var brdr = $('#' + firedObjectId).css('border');
            $('#layerFullscreenDiv').html($('#' + firedObjectId).html());
            $('#layerFullscreenDiv').removeAttr("style");
            $('#layerFullscreenDiv').css('background', bgrd);
            $('#layerFullscreenDiv').css({ 'border': brdr, "overflow": "auto", "z-index": ind, "position": "absolute", "left": "0px", "top": $("#content").offset().top + "px", "width": "100%", "height": "100%", "max-height": $("#SectionDiv").parent().parent().height() + "px" });
            $('#layerFullscreenDiv').find("img").css({"width":"100%","height":"auto"});
            $('#layerFullscreenDiv').css("display", "");
            
            try{
                var obj = $('#layerFullscreenDiv').find("div[id='closeBtn_" + firedObjectId + "']");
                $(obj).css("z-index", ind);
                $(obj).bind("click", function () { toggleLayerState($(this), pageType); });
            } catch (e) { }

        }else{
            $('#' + firedObjectId).css("z-index", ind);
            $('#' + firedObjectId).fadeIn('slow', 'linear');
            if (pageType == "timelinepage") onPauseClick();
            if (pageType == "timelinepage"){
                $("#"+firedObjectId).find(".jp-jplayer").each(function () { //Find Jplayer video
					isJplayer = true;
                    //if($(this).attr("init") == undefined || $(this).attr("init") == ""){
                       // $(this).attr("init", "done");
                        $(this).jPlayer("destroy");
                        var id = $(this).attr("id");
                        var id = id.split("_")[2];
                        loadjPlayerVideo(id);
                    //}
                })
				
				if(isJplayer == false){
					$('#' + firedObjectId + ' video').each(function () {
					    try {
					        $(this)[0].pause();
					        $(this)[0].currentTime = 0;
					    } catch (e) { }
					});
			}
			
            }
            else{
                $("#"+firedObjectId).find(".jp-jplayer").each(function () { //Find Jplayer video
					isJplayer = true;
                    //if($(this).attr("init") == undefined || $(this).attr("init") == ""){
                    //$(this).attr("init","done");
                        $(this).jPlayer("destroy");
                        var id = $(this).attr("id");
                        var id = id.split("_")[2];
                        loadjPlayerVideo(id);
                    //}
                });
				
				if(isJplayer == false){
					$('#' + firedObjectId + ' video').each(function () {
					    try {
					        $(this)[0].pause();
					        $(this)[0].currentTime = 0;
					    } catch (e) { }
					});
			}
				
            }
            try {
                $("#closeBtn_" + firedObjectId).unbind("click");
                $("#closeBtn_" + firedObjectId).css("z-index", ind);
                $("#closeBtn_" + firedObjectId).bind("click", function () { toggleLayerState($(this), pageType); });
            } catch (e) { }
        }
	    currentShownObject = firedObjectId;       
    }
    if (action == 'hide') {
        $('#' + firedObjectId).fadeOut('fast', 'linear');
        if (pageType == "timelinepage") onPlayClick();
        
		$("#"+firedObjectId).find(".jp-jplayer").each(function () { //Find Jplayer video
		isJplayer = true;
		 $(this).jPlayer( "destroy" );
		 var jpObjId = $(this).attr("id");
		 jpObjId = jpObjId.split("_")[2];
		 loadjPlayerVideo(jpObjId);
		 });
		 
		 if(isJplayer == false){
				$('#' + firedObjectId + ' video').each(function () {
				    try {
				        $(this)[0].pause();
				        $(this)[0].currentTime = 0;
				    } catch (e) { }
				});
			}
			
		try{
			$('#'+firedObjectId).find("#embedvideo iframe").each(function () {
				var video = $(this).attr("src");
				$(this).attr("src","");
				$(this).attr("src",video);
			});
		}catch(e){}
        $('#' + firedObjectId + ' audio').each(function () {
            $(this)[0].pause();
        });
    }



    if (action == "gotopage") {
        var pageNum;
        /*if (loc_contXml == undefined) {
            loadContentXml();
        }
        
        $(loc_contXml).find('page').each(function () {
            if ($(this).attr('id') == firedObjectId) {
                pageNum = $(this).attr('srno');
            }
        });
        if (pageNum != "") {
            pageNum = Number(pageNum) - 1;
            if (pageNum >= 0)
              gotoPage(pageNum);
        }*/
        var pageObj = getPageObjectsWithValue(pages[SeqID], "qPageId", firedObjectId);
        if (pageObj.length > 0) {
            pageNum = (pageObj[0]).pageNumber;
            if (pageNum != undefined && pageNum >= 0) {               
                 gotoPage(pageNum);
            }
        }
    }

    if (action == "enablenavigation") {
        disableEnableNavigation(firedObjectId, false);
        var trig = ""
        if (trigger == "onclick") {
            trig = 'click';
        } else if (trigger == "onover") {
            trig = 'mouseover';
        } else if (trigger == "dblclick") {
            trig = 'dblclick';
        }
        $('#' + objId).unbind(trig);
    }

    if (action == "openurl") {
        gotoUrl(firedObjectId);
    }
}

function gotoUrl(url) {
 if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "")
 {
  if (url.indexOf("?") >= 0) 
    url += "&ioshref=true";     
  else
   url += "?ioshref=true";
 }
    window.open(url,"_blank");
}

function disableEnableNavigation(mode, bool) {

    if (mode == "next" || mode == "all") {

        if (bool == true) {
            $("#nextBtn").css("opacity", 0.5);
            $("#nextBtn").unbind("click");
	    //JIRA ID: INST-14619
            $("#nextBtn").css("cursor", "default");
            $("#nextBtn img").unbind("hover");
            try {
                $('#nextBtn img')[0].setAttribute('src', $('#nextBtn img')[0].getAttribute('onout'));
            } catch (e) {

            }
            nextDisabled = true;

            if (mode == "next") {
                setTimeout(function () {
                    disableTOCClick(curPgNum, "next");
                }, 1000);
            }
        } else {
            //JIRA ID: INST-14619
            $("#nextBtn").css("cursor", "pointer");
            $("#nextBtn").click(function () { nextPage() });
            $('#nextBtn img').hover(function () {
                $(this)[0].setAttribute('src', $(this)[0].getAttribute('onover'));
                $(this).addClass('on');
            }, function () {
                $(this)[0].setAttribute('src', $(this)[0].getAttribute('onout'));
                $(this).removeClass('on');
            });
            if (currentPage < totalPages - 1) {
                $("#nextBtn").css("opacity", 1);
            }
            if (currentPage == totalPages - 1 || (isTrack == "yes" && objType == "assessment" && currPageObject.type.toLowerCase() == "summary" && pages[SeqID].status == "incomplete")) {
                $("#nextBtn").fadeTo("fast", 0.5);
                $("#nextBtn").unbind("click");
                $("#nextBtn img").unbind("hover");
                $("#nextBtn img").removeClass('on');
		//JIRA ID: INST-14619
                $("#nextBtn").css("cursor", "default");
            }
            nextDisabled = false;
            updateTOC();
        }

    }

    if (mode == "back" || mode == "all") {

        if (bool == true) {
            //JIRA ID: INST-14619
            $("#backBtn").css("cursor", "default");
            $("#backBtn").css("opacity", 0.5);
            $("#backBtn").unbind("click");
            $("#backBtn img").unbind("hover");
            try {
                $('#backBtn img')[0].setAttribute('src', $('#backBtn img')[0].getAttribute('onout'));
            } catch (e) {

            }
            backDisabled = true;

            if (mode == "back") {
                setTimeout(function () {
                    disableTOCClick(curPgNum, "back");
                }, 1000);
            }

        } else {
            //JIRA ID: INST-14619
            $("#backBtn").css("cursor", "pointer");
            $("#backBtn").click(function () { previousPage() });
            $('#backBtn img').hover(function () {
                $(this)[0].setAttribute('src', $(this)[0].getAttribute('onover'));
                $(this).addClass('on');
            }, function () {
                $(this)[0].setAttribute('src', $(this)[0].getAttribute('onout'));
                $(this).removeClass('on');
            });
            if (currentPage > 0) {
                $("#backBtn").css("opacity", 1);
            }

            if (currentPage == 0 || (objType == "assessment" && trackObjects[SeqID].navigation.toLowerCase() == "forward only")) {
                $("#backBtn").fadeTo("fast", 0.5);
                $("#backBtn").unbind("click");
                $("#backBtn img").unbind("hover");
                $("#backBtn img").removeClass('on');
		//JIRA ID: INST-14619
                $("#backBtn").css("cursor", "default");
            }

            if (isTrack == "no" && objType == "assessment" && pages[SeqID][innerPage].type == "summary") {
                $("#backBtn").fadeTo("fast", 0.5);
                $("#backBtn").unbind("click");
                $("#backBtn img").unbind("hover");
                $("#backBtn img").removeClass("on");
		//JIRA ID: INST-14619
                $("#backBtn").css("cursor", "default");
            }
            backDisabled = false;
            updateTOC();
        }

    }

    if (mode == "toc" || mode == "all") {
        if (bool == true) {
            tocDisabled = true;
            setTimeout(function () {
                disableTOCClick(curPgNum, "all");
            }, 1000);
        }else{
            tocDisabled = false;
            updateTOC();
        }
    }
    if (mode != "toc") {
        if (backDisabled == true) {
            disableTOCClick(curPgNum, "back");
        }

        if (nextDisabled == true) {
            disableTOCClick(curPgNum, "next");
        }
    }
    /*if (mode == "all") {

        if (bool == true) {
            $("#exitBtn").unbind("click");
            $("#exitBtn img").unbind("hover");
            try {
                $('#exitBtn img')[0].setAttribute('src', $('#exitBtn img')[0].getAttribute('onout'));
            } catch (e) { }
        } else {

            $("#exitBtn").click(function () { exitCourse() });
            $('#exitBtn img').hover(function () {
                $(this)[0].setAttribute('src', $(this)[0].getAttribute('onover'));
                $(this).addClass('on');
            }, function () {
                $(this)[0].setAttribute('src', $(this)[0].getAttribute('onout'));
                $(this).removeClass('on');
            });
        }

    }*/
}



function createRuleAction(objId, trigger, action, firedObjectId, pageType) {
    debugger;
    if (objId == "contentdiv" && trigger == "onload") {
        $(document).ready(function () {
            if (action == "disablenavigation") {
                setTimeout(function () {
                    disableEnableNavigation(firedObjectId, true);
                }, 1200);
            }
        });
    } else {
        try{
            $('#' + objId).data("hasRule", true);
            $('#' + firedObjectId).data("hasRule", true);
        }
        catch(e){}
        try {
            layerHasRule(objId);
            layerHasRule(firedObjectId);
        } catch (e) { }

        if (trigger == "onclick") {
            generateOnClickMethod(objId, trigger, action, firedObjectId, pageType);
        } else if (trigger == "onover") {
            generateOnOverMethod(objId, trigger, action, firedObjectId, pageType);
        } else if (trigger == "dblclick") {
            generateDblClickMethod(objId, trigger, action, firedObjectId, pageType);
        } else if (trigger == "outsideclick") {
            generateOutsideClickMethod(objId, trigger, action, firedObjectId, pageType);
        }

    }
    try{
        $('#' + firedObjectId + ' video').each(function () {
            try {
                $(this)[0].pause();
                $(this)[0].currentTime = 0;
            } catch (e) { }
        });
    }
    catch (e) {}
}

function hideCurrentLayer(lyrId, pageType){
var isJplayer = false;
        try{
			//$('#' + lyrId).fadeOut('fast', 'linear');
			if (pageType == "timelinepage") onPlayClick();
			$("#"+lyrId).find(".jp-jplayer").each(function () { //Find Jplayer video
			isJplayer = true;
			 $(this).jPlayer( "destroy" );
			 var jpObjId = $(this).attr("id");
			 jpObjId = jpObjId.split("_")[2];
			 loadjPlayerVideo(jpObjId);
			 });
			 
			 if(isJplayer == false){
				$('#' + lyrId + ' video').each(function () {
				    try {
				        $(this)[0].pause();
				        $(this)[0].currentTime = 0;
				    } catch (e) { }
				});
			}
			
			try{
				$('#'+lyrId).find("#embedvideo iframe").each(function () {
					var video = $(this).attr("src");
					$(this).attr("src","");
					$(this).attr("src",video);
				});
			}catch(e){}
			$('#' + lyrId + ' audio').each(function () {
				$(this)[0].pause();
			});
		}catch(e){}
}

function toggleLayerState(clsObj, pageType) {
var isJplayer = false; 
    var lyrId = ($(clsObj).attr("id")).split("_")[1];
    if ($("#" + lyrId).css("display") != "none") {
        try {
            $('#' + lyrId).fadeOut('fast', 'linear');
            if (pageType == "timelinepage") onPlayClick();
            $("#" + lyrId).find(".jp-jplayer").each(function () { //Find Jplayer video
				isJplayer = true;
                $(this).jPlayer("destroy");
                var jpObjId = $(this).attr("id");
                jpObjId = jpObjId.split("_")[2];
                loadjPlayerVideo(jpObjId);
            });
			
			if(isJplayer == false){
				$('#' + lyrId + ' video').each(function () {
				    try {
				        $(this)[0].pause();
				        $(this)[0].currentTime = 0;
				    } catch (e) { }
				});
			}
			
            try {
                $('#' + lyrId).find("#embedvideo iframe").each(function () {
                    var video = $(this).attr("src");
                    $(this).attr("src", "");
                    $(this).attr("src", video);
                });
            } catch (e) { }
            $('#' + lyrId + ' audio').each(function () {
                $(this)[0].pause();
            });
        } catch (e) { }
    } else {
        try{
            $('#layerFullscreenDiv').remove();
            $('#content').css("overflow", "auto");
        }catch(e){}
    }
}

function getHighestDepth() {
    var def = { inc: 10, group: "*" };
    var zmax = 0;
    $(def.group).each(function () {
        var cur = parseInt($(this).css('z-index'));
        zmax = cur > zmax ? cur : zmax;
    });
    return zmax;
}
function getPageObjectsWithValue(arr, attr, val) {
    var newPagesArr = new Array();
    newPagesArray = getTotalPages(arr);
    var reqPageObjArr = new Array();
    reqPageObjArr = getSpecificObjects(newPagesArray, attr, val);
    return reqPageObjArr;
}
