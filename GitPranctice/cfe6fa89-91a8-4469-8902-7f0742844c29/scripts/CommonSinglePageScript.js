var SpageLoaded = false;
var CurrentSpage = 0;
var fatchLoaderId="PageFethcer";
$(function () {
    //to invoke on class change function
    var originalAddClassMethod = jQuery.fn.addClass;
    jQuery.fn.addClass = function () {
        var result = originalAddClassMethod.apply(this, arguments);
        jQuery(this).trigger('cssClassChanged');
        return result;
    }


    $(".SectionDiv").unbind('scroll').bind('scroll',function(event){
        if (trackObjects[SeqID].singlePageRendering == "yes") {
        var element = event.target;
        event.stopPropagation();
        if (element.scrollHeight - element.scrollTop === element.clientHeight)
        {
            if (!SpageLoaded) {
                // SpageLoaded = SpageLoaded ? false : true;
                if($('#controls').is(':visible')){
                    try{
                        var currentDuration='0:0';
                        var totaltime='0:0';		   
                        currentDuration=$(duration).children().val();
                        var  durationSec = (Number(currentDuration.split(':')[0])*60) + Number(currentDuration.split(':')[1]);
                        totaltime= ($('#totalTime').text()).split(" ")[1];
                        var totaltimeSec = (Number(totaltime.split(':')[0]) * 60) + Number(totaltime.split(':')[1]);
                        //restricting timeline next
                        if(trackObjects[SeqID].enablenextfortimeline=='no'){
                            if (totaltimeSec == durationSec) {
                                $('#controls').hide();
                                onEndScroll();
                                SpageLoaded = true;
                            } else {
                                //alert('Wait for the timeline completion');
                            }
                        } else {
                            $('#controls').hide();
                            onEndScroll();
                            SpageLoaded = true;
                        }

                    }
                    catch(e){
                        onEndScroll();
                        SpageLoaded = true;
                    }

                }
                else {
                    var delayItemVisibility = true;
                    $('[id^="singlePageContent_"]').find('[data-delay]').each(function () {
                        if ($(this).hasClass('not-animated')) {
                            delayItemVisibility = false;
                        }
                        if ($(this).hasClass('animated') && $(this).hasClass('list')) {
                            if ($(this).attr('itemstoshow') == 'itembyitem') {
                                $(this).find('li').each(function () {
                                    if ($(this).hasClass('not-animated')) {
                                        delayItemVisibility = false;
                                    }
                                });
                            }

                        }
                    });
                    if (delayItemVisibility) {
                        onEndScroll();
                        SpageLoaded = true;
                    } else {
                        //  alert("Elements yet to load");
                    }

                }
            } else {
                SpageLoaded = SpageLoaded ? false : true;
            }
        }
    }
	});
});
function onEndScroll(){
	debugger;
	if(CurrentSpage==undefined){
		CurrentSpage=0;
	}
	if(CurrentSpage+1 <= trackObjects[SeqID].pages){
		CurrentSpage++
	    //showPageFetchloader();
		if ($("#content").hasClass('instcontentbg')) {
		    $("#content").removeClass('instcontentbg');
		    $("#instsampletable").addClass('instcontentbg');
		}
		SinglePageNext();
	}
}
function SinglePageNext(){
    currPageObject = getPageByIndex(CurrentSpage);
    if (currPageObject.type != 'summary') {
        var url = currPageObject.url;
        getContentForSinglePage(url);
    } else {
        CurrentSpage--
    }

	
}
function showPageFetchloader() {
    var loaderDiv = $('<div>');
    $(loaderDiv).attr('id', fatchLoaderId);
    $(loaderDiv).css({ 'position': 'absolute', 'z-index': '99999999999', 'width': '100%', 'height': '100%', 'background': 'rgba(0,0,0,0.3)' });
    $(loaderDiv).append('<i class="fa fa-spinner fa-spin fa-3x fa-fw" style="top: 48%;position: absolute;left: 48%;"></i>');
     $('body').prepend(loaderDiv);
}
function getContentForSinglePage(filename) {
    var filename = filename + "?" + Math.random(999999999) + "" + Math.random(999999999);
    $.ajax({
        url: filename,
        type: 'GET',
        dataType: 'html',
        beforeSend: function () {
        },
        success: function (data, textStatus, xhr) {
            try {
                setTimeout(function () {

                    if (data.indexOf("<!--instancyautoplayaudio-->") != -1)
                        data = data.replace("<!--instancyautoplayaudio-->", "try{CheckAutoplayAudio();}catch(a){}");
                    if (data.indexOf("<!--instancypagetextresponses-->") != -1)
                        data = data.replace("<!--instancypagetextresponses-->", "try{SetPageTextResponses();}catch(a){}");
                    data = data.replace("instcontentbg","instcontentbg_" + CurrentSpage);
                    data = data.replace('instsampletable', 'singlePageContent_' + CurrentSpage);
                    data = data.replace('initTimeLine()', 'initTimeLineForSinglePage(singlePageContent_' + CurrentSpage + ')');
                    if (trackObjects[SeqID].singlePageRendering == "yes") {
                        if (data.split('instcontentbg').length >= 2) {
                            var tempData = data.split('instcontentbg')[0];
                            var functionData = data.split('instcontentbg')[1];
                            var functionData = functionData.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "");
                            data = tempData + "instcontentbg" + functionData;
                        }
                    }

                   
                    //initTimeLineForSinglePage
                        //$("#PageFethcer").remove();
                    $('#page').append(data);
                    SpageLoaded = false;
                    //$('#singlePageContent_' + CurrentSpage).hide();
                    //setTimeout(function () {
                    //    $('#singlePageContent_' + CurrentSpage).addClass("blindvin").show();
                    //},300);
                   
                   // if ($("#content").hasClass('instcontentbg')) { $("#content").removeClass('instcontentbg'); }
                    $('#singlePageContent_' + CurrentSpage).addClass("instcontentbg_" + CurrentSpage);
                    addMathMLCallBack('page');
                    if ($("#searchInput").val() != "") {

                        if (currPageObject.excludefromsearch == "no") {
                            highlightSearchTextInCurrentpage(); 
                        }

                    }
                   // window.location.hash = '#singlePageContent_' + CurrentSpage;
                   // BindEventOnAppearAnimationElement();
                    if (!(objType == "assessment" && pages[SeqID][innerPage].type == "summary"))
                        $("#page").fadeTo("slow", 1);
                    if ((objType == "assessment" && currPageObject.type != "summary") || trackObjects[SeqID].singleqtnperpage == "no" || getCoValues("iscoao") != "co" || trackObjects[SeqID].singlePageRendering == 'yes')
                        storePageDataForSinglePage(CurrentSpage);
                    if (!(objType == "assessment" && (pages[SeqID][innerPage].type == "page" || pages[SeqID][innerPage].type == "summary"))) {

                        try {
                            if (hideTitle == undefined)
                                hideTitle = "no";
                        } catch (e) { hideTitle = "no"; }

                        if (hideTitle == "yes") {
                            if (document.getElementById("coursetitle") != null) {
                                document.getElementById("coursetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/;
                            } else {
                                document.getElementById("pagetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/;
                            }
                        }
                        else {

                            if (document.getElementById("coursetitle") != null) {
                                if (document.getElementById("topictitle") != null) {
                                    document.getElementById("topictitle").innerHTML = "";
                                }
                                showTitle();
                            }


                            else {
                                if (trackObjects[0].hidetoctopic.toLowerCase() == "no") {
                                    var topicpage = getTopicByPageIndex(currPageObject.pageNumber);
                                    if (topicpage != undefined) {
                                        var subtopicpage = getSubTopicByPageIndex(currPageObject.pageNumber);
                                        if (subtopicpage != undefined) {
                                            document.getElementById("pagetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/ + " >> " + getPageTitle(topicpage)/*topicpage.title*/ + " >> " + getPageTitle(subtopicpage)/*subtopicpage.title*/ + " >> " + /*currPageObject.title*/getPageTitle(currPageObject);
                                        }
                                        else {
                                            document.getElementById("pagetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/ + " >> " + getPageTitle(topicpage)/*topicpage.title*/ + " >> " + /*currPageObject.title*/getPageTitle(currPageObject);
                                        }
                                    }
                                    else {
                                        document.getElementById("pagetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/ + " >> " + /*currPageObject.title*/getPageTitle(currPageObject);
                                    }
                                } else {
                                    document.getElementById("pagetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/ + " >> " + /*currPageObject.title*/getPageTitle(currPageObject);
                                }
                            }
                        }
                    } else {
                        if (document.getElementById("coursetitle") != null) {
                            if (document.getElementById("coursetitle") != null)
                                document.getElementById("coursetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/;
                            if (document.getElementById("pagetitle") != null)
                                document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject)/*currPageObject.title*/;
                        } else {
                            document.getElementById("pagetitle").innerHTML = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/ + " >> " + getPageTitle(currPageObject)/*currPageObject.title*/;
                        }
                    }
                    if (currPageObject.iscoao == "co") { 
                        $.each($("#content").find('textarea'), function (i, obj) {
                            if ($(obj).attr("id").indexOf("instxtresp") != -1) {
                                textEntry = true;
                            }
                        });
                    }
                    if ($("#page").find("div#tablediv").length > 0) {
                        checkAndHideTableGrid();
                    };
                    showHideHintButton(CurrentSpage);
                    showHideSolutionButton(CurrentSpage);
                    animateObject('forSinglePage');
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
                }, 50);

                setTimeout(function () {
                    pageLoaded = true;
                    if (!(objType == "assessment" && pages[SeqID][innerPage].type == "summary"))
                        $("#loader").fadeTo("slow", 0, function () { $("#loader").hide(); });
                    if (currPageObject.type == "summary" || trackObjects[SeqID].userpagenotes != "yes") {
                        $("#divnoteBtn").hide();
                    } else {
                        $("#divnoteBtn").show();
                    }
                    if (currPageObject.type == "summary" || trackObjects[SeqID].allowfontincrease != "yes") {
                        $("#fontPlus").hide();
                        $("#fontMinus").hide();
                    } else {
                        $("#fontPlus").show();
                        $("#fontMinus").show();
                    }

                    if (trackObjects[SeqID].enablesearch != "yes" || currPageObject.type == "summary") {
                        $(".search-btn").hide();
                        $("#searchResultsPopup").hide();

                    }
                    else {
                        if (trackObjects[SeqID].navigation.toLowerCase() == "forward only" || trackObjects[SeqID].tocseqeuncenavigation == "yes") {
                            $(".search-btn").hide();
                        }
                        else {
                            $(".search-btn").show();
                        }
                    }
                    try {
                        if ((pages[SeqID][innerPage].Qtype).toLowerCase() == "rating") {
                            $('table[id^="container_table"]').find("div.star_container").attr('style', 'white-space: nowrap');
                        }
                    } catch (e) { }

                    preventNavigation = false;
                    checkWidth();
                    try {
                        if (checkBranching() == true) {
                            isremPage = true;
                        }
                    } catch (e) { }
                    offline();
                    try {
                        if (isTimeline() == "yes") {

                            setMuteStatusForMediaInTimeLine();
                        } else {
                            setMuteStatusForMedia("#page");
                        }
                    } catch (e) { }
                    if (($('#page').find("video")).length > 0 || ($('#page').find("audio")).length > 0 || ($("#page").find("div[id^='jquery_jplayer_']")).length > 0) {
                        $("#muteBtn").show();
                    } else {
                        $("#muteBtn").hide();
                    }
                }, 100);

            }
            catch (e) {
                $('#page').html(data);
                addMathMLCallBack('page');
                $("#loader").fadeTo("slow", 0, function () { $("#loader").hide(); });
                $("#page").fadeTo("fast", 1);
                if (objType == "assessment" && currPageObject.type != "summary")
                    storePageData();

                pageLoaded = true;
                preventNavigation = false;
            }

        },
        error: function (xhr, textStatus, errorThrown) {
            $('#page').html(textStatus);
            $("#loader").fadeTo("slow", 0);
            $("#page").fadeTo("slow", 1);
            preventNavigation = false;
        }
    });
}
function BindEventOnAppearAnimationElement() {
    debugger;
    //to do somthing on animation appearing element
    $('[id^="singlePageContent_"]:last').find('.not-animated').each(function () {
        $(this).on('cssClassChanged', function (e) {
            e.preventDefault();
            if ($(this).hasClass('animated')) {
                ScrollPageToObject($(this));
            }
        });
    });

}
function ScrollPageToObject(element) {
    debugger;
    var scrollPos = $(element).offset().top
   // window.location.hash = '#' + $(element).attr('id');

}
function getUserFIBValues(val){
    var arr = [];
    var isEmpty = false;
    $("#questionContainer"+val+" :input").each(function(){
        isEmpty = false;
        var userTxt = $(this).val();
        userTxt = userTxt.replace(/(&nbsp;)*/g, "");
        userTxt = trimWhiteSpaces(userTxt);
        if(userTxt.length>0){
            isEmpty = true;
            arr.push(userTxt);
        }
    });
    if (isEmpty == true)
        return arr.toString();
    else
        return "";
}
 
function trimWhiteSpaces (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
 
var removefileId;
$('.removeattachfilename').bind('click', function(e) { 
    removefileId = $(e.target).parent().attr('id').split("_")[2];
    removepagefileId = $(e.target).parent().attr("id").split("_")[1];
    var filename = window['fileName' + removepagefileId];
    updateAttachContentDetails(filename,'remove',removepagefileId); 
}); 
 
generateTableheaderinMob(); 
generateRatingTableheaderinMob()
$('.star').click(function () {
    var id = $(this).attr('data-id');
    $(this).parents('.star_container').find('.star').each(function () {
        var i = $(this).attr('data-id');
        if (i <= id) {
            $(this).attr('src', 'images/star yellow.png');
        }
        else {
            $(this).attr('src', 'images/star grey.png');
        }
    });
});
 
function getUserResponse() {
    var attemptedQ = 0;
    var totalAoPages = 0;
    if(pages[SeqID] != undefined) {
        try {
            var iAnswer = 0;
            for (i = 0; i <= CurrentSpage; i++ ) {
                var useranswer = "";
                iAnswer = i+1;
                if (getPageByObjectIndex(i).iscoao == 'ao') {
                    totalAoPages ++;
                    switch (getPageByObjectIndex(i).Qtype.toLowerCase()) {
                        case "longanswer":
                            var inc = parseFloat(i+1);
                            if (this['isRequriedAttachLA' + iAnswer] == true) {
                                if(this['fileName' + iAnswer] != ""){
                                    setCOValuesbyObjectIndex(i,'filename', this['fileName' + iAnswer]);
                                    setCOValuesbyObjectIndex(i,'fileid', this['fileId' + iAnswer]);
                                    var value = "";
                                    var textAreaObj = document.getElementById("txtAnswer_" + iAnswer);
                                    if(textAreaObj != null){
                                        if(validateTextArea(textAreaObj)){
                                            value = textAreaObj.value;
                                            value = textAreaObj.value.toString().fulltrim();
                                        }else{
                                            value = "";
                                        }
                                    }else{
                                        value = "NA";
                                    }
                                    setCOValuesbyObjectIndex(i,'useranswer', value);
                                    if (getPageByObjectIndex(i).useranswer != "") attemptedQ++;
                                    setCOValuesbyObjectIndex(i,'status', "NA");
                                    isNoDocAttached = true;
                                    if(document.getElementById('videocapture_'+getVideoObjectId(iAnswer)) != null){
                                        setCOValuesbyObjectIndex(i,'capturedvidfilename', this['capVidFileName'+iAnswer]);
                                        setCOValuesbyObjectIndex(i,'capturedvidid', this['capVidFileId'+iAnswer]);
                                    }
                                    if(document.getElementById('videocapImg_'+getVideoObjectId(iAnswer)) != null){
                                        setCOValuesbyObjectIndex(i,'capturedimgfilename', this['capImgFileName'+iAnswer]);
                                        setCOValuesbyObjectIndex(i,'capturedimgid', this['capImgFileId'+iAnswer]);
                                    } 
                                }
                                else{
                                    var value = "";
                                    if(document.getElementById("txtAnswer_" + iAnswer) != null){
                                        value = document.getElementById("txtAnswer_" + iAnswer).value;
                                        value =  value.toString().fulltrim();
                                    }else{
                                        value = "NA"; 
                                    }
                                    setCOValuesbyObjectIndex(i,'useranswer', value);
                                    if (getPageByObjectIndex(i).useranswer != "") attemptedQ++;
                                    setCOValuesbyObjectIndex(i,'status', "NA");
                                    setCOValuesbyObjectIndex(i,'filename', "");
                                    setCOValuesbyObjectIndex(i,'fileid', "");
                                    isNoDocAttached = true;
                                    if(document.getElementById('videocapture_'+getVideoObjectId(iAnswer)) != null){
                                        setCOValuesbyObjectIndex(i,'capturedvidfilename', this['capVidFileName'+iAnswer]);
                                        setCOValuesbyObjectIndex(i,'capturedvidid', this['capVidFileId'+iAnswer]);
                                    }
                                    if(document.getElementById('videocapImg_'+getVideoObjectId(iAnswer)) != null){
                                        setCOValuesbyObjectIndex(i,'capturedimgfilename', this['capImgFileName'+iAnswer]);
                                        setCOValuesbyObjectIndex(i,'capturedimgid', this['capImgFileId'+iAnswer]);
                                    } 
                                }
                            }
                            else{
                                if(this['fileName' + iAnswer] != undefined)
                                    setCOValuesbyObjectIndex(i,'filename', this['fileName' + iAnswer]);
                                setCOValuesbyObjectIndex(i,'fileid', this['fileId' + iAnswer]);
                                var value = "";
                                var textAreaObj = document.getElementById("txtAnswer_" + iAnswer);
                                if(textAreaObj != null){
                                    if(validateTextArea(textAreaObj)){
                                        value = textAreaObj.value;
                                        value = textAreaObj.value.toString().fulltrim();
                                    }else{
                                        value = "";
                                    }
                                }else{
                                    value = "NA";
                                }
                                setCOValuesbyObjectIndex(i,'useranswer', value);
                                if (getPageByObjectIndex(i).useranswer != "") attemptedQ++;
                                setCOValuesbyObjectIndex(i,'status', "NA");
                                if(document.getElementById('videocapture_'+getVideoObjectId(iAnswer)) != null){
                                    setCOValuesbyObjectIndex(i,'capturedvidfilename', this['capVidFileName'+iAnswer]);
                                    setCOValuesbyObjectIndex(i,'capturedvidid', this['capVidFileId'+iAnswer]);
                                }
                                if(document.getElementById('videocapImg_'+getVideoObjectId(iAnswer)) != null){
                                    setCOValuesbyObjectIndex(i,'capturedimgfilename', this['capImgFileName'+iAnswer]);
                                    setCOValuesbyObjectIndex(i,'capturedimgid', this['capImgFileId'+iAnswer]);
                                } 
                            }
                            break;
                        case "fillintheblank":
                            var isMultipleFIB;
                            var instblVal = iAnswer;
                            var mystr = "correctAnswer";
                            var abc = [];
                            var checked;
                            var finalstr = String(String(mystr) + String(iAnswer));
                            abc =  eval(finalstr);
                            isMultipleFIB = (abc instanceof Array) ? "true" : "false";
                            if(isMultipleFIB == "false"){
                                setCOValuesbyObjectIndex(i,'useranswer', document.getElementById("txtAnswer_" + iAnswer).value);
                                if (getPageByObjectIndex(i).useranswer != "") attemptedQ++;
                                checked = "incorrect";
                                var arrCorrectAnswers = this[("correctAnswer" + iAnswer)].split(",");
                                for (j = 0; j < arrCorrectAnswers.length; j++) {
                                    if (getPageByObjectIndex(i).useranswer.toLowerCase() == arrCorrectAnswers[j].toLowerCase()) {
                                        checked = "correct";
                                        break;
                                    }
                                }
                                setCOValuesbyObjectIndex(i,'status', checked);
                            }
                            else{
                                abc = formatCorrectAnswer(abc);
                                var correctAnsCount = 0;
                                setCOValuesbyObjectIndex(i,'useranswer', getUserFIBValues(instblVal));
                                if (getPageByObjectIndex(i).useranswer != "") { 
                                    attemptedQ++;
                                    checked = "incorrect";
                                    Useranswers = getPageByObjectIndex(i).useranswer.split(",");
                                    for(var p=0;p<Useranswers.length;p++){
                                        for(var k=0;k<abc[p].length;k++){
                                            if(Useranswers[p].toLowerCase().fulltrim() == abc[p][k].toLowerCase().fulltrim()){
                                                correctAnsCount++;
                                            }
                                        }
                                    }
                                }
                                if(correctAnsCount == abc.length){
                                    checked = "correct";
                                }
                                setCOValuesbyObjectIndex(i,'status', checked);
                            }
                            break;
                        case "truefalse":
                        case "multipleselect":
                        case "singleselect":
                            var optionstext ="";
                            var optionsLength = Number(this[("totalOptions" + iAnswer)]);
                            for (var ch = 0; ch < optionsLength; ch++) {
                                if (document.getElementById("inst_op_" + iAnswer + "_" + (ch + 1))!= undefined) {
                                    if (document.getElementById("inst_op_" + iAnswer + "_" + (ch + 1)).checked) {
                                        useranswer = (useranswer == "") ? useranswer = (ch + 1).toString() : useranswer = useranswer + "," + (ch + 1).toString();
                                    }
                                }
                            }
                            if (useranswer != "") attemptedQ++;
                            setCOValuesbyObjectIndex(i,'useranswer', useranswer);
                            checkPassStatus(useranswer, i);
                            useranswer = "";
                            if (this[("optionalnotes"+iAnswer)] != undefined){ // Bhushanam added for option level notes
                                if (this[("optionalnotes"+iAnswer)] == true){ 
                                    for (var optn=0; optn< optionsLength; optn++){
                                        if($('#' + 'inst_noteopt' + iAnswer +'_' +  (optn + 1)) != null){
                                            optnote = $('#' + 'inst_noteopt' + iAnswer +'_' +  (optn + 1).toString()).val(); 
                                            if (optionstext == "" && optn == 0){ optionstext = optnote;}
                                            else{ optionstext = optionstext +'###'+ optnote;} 
                                        }
                                    }
                                    setCOValuesbyObjectIndex(i,'optionnotes', optionstext);
                                }
                            } 
                            break;
                        case "draganddrop":
                            if(pages[SeqID] != undefined) {
                                var cCounter = 0;
                                var wCounter = 0;
                                var userArrStr = '';
                                var isDragged=false;
                                updateUserAnsArrinSinglepage();
                                $('div#dragdropcontainer'+iAnswer).each(function (index) {
                                    var qtnId=$(this).attr('ddid');
                                    for (var m = 0; m < (eval('answerArray'+qtnId)).length; m++) {
                                        if((userAnswerArray[qtnId][m] != "" || userAnswerArray[qtnId][m] != null) && userAnswerArray[qtnId][m].length>0){
                                            userArrStr +=userAnswerArray[qtnId][m].toString()+"^^";
                                            isDragged=true;
                                        }
                                        var splitStr = compareDnDArr(userAnswerArray[qtnId][m],(eval('answerArray'+qtnId))[m]);
                                        wCounter += parseInt(splitStr.split("~~")[0]);
                                        cCounter += parseInt(splitStr.split("~~")[1]);
                                    }
                                });
                            }
                            var fullStr= userArrStr+"##"+cCounter+"##"+wCounter+"^^^"+getDragsDroppedArr[iAnswer].toString();
                            if (isDragged) {
                                var istatus= checkPassStatusforDragDrop(iAnswer);
                                setCOValuesbyObjectIndex(i,'useranswer', fullStr);
                                if(istatus)
                                    setCOValuesbyObjectIndex(i,'status', 'correct');
                                else
                                    setCOValuesbyObjectIndex(i,'status', 'incorrect');
                                attemptedQ++;
                            }
                            break;
                        case "matrix":
                            var rows = $("#matrixContainer_" + iAnswer)[0].getElementsByTagName("table")["matrixtable"].rows.length - 2;
                            var fields = $("#matrixContainer_" + iAnswer)[0].getElementsByTagName("input");
                            var str = "";
                            var itemsperRow = fields.length / rows;
                            var Tagname = fields[0].name;
                            var prevName = fields[0].name;
                            var counter = 0;
                            var isChked = false;
                            for (var j = 0; j < fields.length; j++) {
                                Tagname = fields[j].name;
                                if (Tagname != prevName)
                                    if (counter == itemsperRow) {
                                        counter = 0;
                                        str += "&&**&&";
                                    } else
                                        str += "&**&";
                                counter++;
                                if (fields[j].checked){
                                    str += "1";
                                    isChked = true;
                                }
                                else{
                                    str += "0"; }
                                prevName = Tagname;
                          
                            }
                            if(isChked == true){
                                setCOValuesbyObjectIndex(i,'useranswer', str);
                                setCOValuesbyObjectIndex(i,'status', "NA");
                                attemptedQ++;
                            }
                            else{
                                str = "";
                            }
                            break;
                        case "rating":
                            var israted = false;
                            $("#container_table"+ iAnswer +" tr").each(function(index) {
                                if (index != 0){
                                    starCount = $(this).find(".star[src='images/star yellow.png']").length; 
                                    if (israted == false) { if (starCount != 0) israted = true; }
                                    if (useranswer == "") {
                                        useranswer =   index+'@'+starCount;
                                    }else {
                                        useranswer += '##' + index+'@'+ starCount; } 
                                }
                            });
                            if (israted == true) {
                                setCOValuesbyObjectIndex(i,'useranswer', useranswer);
                                setCOValuesbyObjectIndex(i,'status', "NA");
                                attemptedQ++; 
                            }
                            break; 
                        case "sequence":
                            var answerList = "";
                            var jcount=0;
                            var correctCount = 0;
                            var incorrectCount = 0;
                            var $listcon = $('#listqtn'+ iAnswer +' li');
                            //$('#listqtn" + iAnswer + " li').each(function (i) {
                            $listcon.each(function (i) {
                                var $liItem = $(this);
                                var sno = $liItem.attr('data-sno');
                                if(answerList == "")
                                    answerList = sno ;
                                else
                                    answerList += "^^" +  sno;
                                if ((i + 1) == sno) { correctCount++; }
                                else { incorrectCount++; }
                            });
                            //return answerList;
                            setCOValuesbyObjectIndex(i,'useranswer', answerList);
                            //setCOValuesbyObjectIndex(i,'status', "NA");
                            var $strCheckattmpstatus = $('#Checkattmpstatus'+ iAnswer);
                            if ($strCheckattmpstatus[0].innerText != "")
                            {
                                attemptedQ++;
                            }
                            var flag = true;
                            $listcon.each(function (jcount) {
                                if ((jcount + 1) != $(this).attr('data-sno')) { flag = false;  return false;  }
                            });
                            if (flag) { setCOValuesbyObjectIndex(i,'status', "correct");  }
                            else { setCOValuesbyObjectIndex(i,'status', "incorrect"); }
                            answerList ="";
                            // if correct --- attemptedQ++;
                            break;
                        case "page":
                        case "summary":
                            break;
                    }
                }
            }
            if (getTotalPageInObject(SeqID) == 1) {         
                if (totalAoPages == attemptedQ)        
                    return true;     
                else         
                    return false;       
            }        
            if (getPageByObjectIndex(0).type == 'page' && getPageByObjectIndex(getTotalPageInObject(SeqID) - 2).type == 'page') {
                if (totalAoPages == attemptedQ)
                    return true; }
            else {
                if (getPageByObjectIndex(0).type != 'page' && getPageByObjectIndex(getTotalPageInObject(SeqID) - 2).type != 'page') {
                    if (getTotalPageInObject(SeqID) - 1 == attemptedQ)
                        return true; }
                else {
                    if (getTotalPageInObject(SeqID) - 2 == attemptedQ)
                        return true; } }
            return false
        }
        catch(e){
        }
    }
}

function formatCorrectAnswer(arr){
    for(var i=0;i<arr.length;i++){
        var str = arr[i].toString();
        str = str.replace(/(&nbsp;)*/g, "");
        str = trimWhiteSpaces(str);
        str = str.toString().fulltrim();
        if(str.indexOf(",") != -1){
            arr[i] = [];
            arr[i] = str.split(",");
        }
        else{
            arr[i] = [];
            arr[i].push(str);
        }
    }
    return arr;
}

function setUserResponse(forThePage) {
    try {
        var initiator = 0;
        if (forThePage != undefined) {
            initiator = forThePage;
        }
        if(pages[SeqID] != undefined) {
            var iAnswer = 0;
            for (i = initiator; i <= CurrentSpage; i++) {
                iAnswer = i+1;
                if (getPageByObjectIndex(i).iscoao == 'ao') {
                    switch (getPageByObjectIndex(i).Qtype.toLowerCase()) {
                        case "longanswer":
                            var inc = parseFloat(i+1);
                            if (getPageByObjectIndex(i).useranswer != undefined && getPageByObjectIndex(i).useranswer != "undefined")
                                if(document.getElementById("txtAnswer_" + iAnswer) != null){
                                    document.getElementById("txtAnswer_" + iAnswer).value = getPageByObjectIndex(i).useranswer;
                                    document.getElementById("maxcnt_" + iAnswer).innerHTML = document.getElementById("txtAnswer_" + iAnswer).value.length + "/1200";
                                }
                            if (getPageByObjectIndex(i).filename != undefined &&   getPageByObjectIndex(i).filename != "undefined"){
                                this['fileName' + iAnswer] =  getPageByObjectIndex(i).filename;
                                this['fileId' + iAnswer] =  getPageByObjectIndex(i).fileid;
                            }
                            updateAttachContentDetails(this['fileName' + iAnswer],'',iAnswer)
                            if(getPageByObjectIndex(i).capturedvidfilename != undefined && document.getElementById('videocapture_'+getVideoObjectId(iAnswer)) != null && getPageByObjectIndex(i).capturedvidfilename != "undefined" && getPageByObjectIndex(i).capturedvidfilename != ""){
                                this['capVidFileName' + iAnswer] = getPageByObjectIndex(i).capturedvidfilename;
                                this['capVidFileId' + iAnswer] = getPageByObjectIndex(i).capturedvidid;
                                var type = 'videocapupload';	   
                                currCapVideoObjId = getVideoObjectId(iAnswer);
                                updateAttachContentDetails(this['capVidFileName' + iAnswer], '', '', type,this['capVidFileId' + iAnswer]);
                                $("#removeVideo_"+currCapVideoObjId).css("display","");
                            }
                            if(getPageByObjectIndex(i).capturedimgfilename != undefined && document.getElementById('videocapImg_'+getVideoObjectId(iAnswer)) != null && getPageByObjectIndex(i).capturedimgfilename != "undefined" && getPageByObjectIndex(i).capturedimgfilename != ""){
                                this['capImgFileName' + iAnswer] =getPageByObjectIndex(i).capturedimgfilename;
                                this['capImgFileId' + iAnswer] = getPageByObjectIndex(i).capturedimgid;	   
                                var type = 'imagecapupload';	 
                                currCapImageObjId = getVideoObjectId(iAnswer);
                                updateAttachContentDetails(this['capImgFileName' + iAnswer], '', '', type,this['capImgFileId' + iAnswer]);
                                $("#removeImage_"+currCapImageObjId).css("display","");
                            }
                            break;
                        case "fillintheblank":
                            var instblVal = iAnswer;
                            var mystr = "correctAnswer";
                            var abc = [];
                            var finalstr = String(String(mystr) + String(iAnswer));
                            abc =  eval(finalstr);
                            var tempArr = [];
                            var isMultipleFIB = (abc instanceof Array) ? "true" : "false";
                            var useranswer = getPageByObjectIndex(i).useranswer;
                            useranswer = useranswer == undefined ? '' : useranswer;
                            if (useranswer != ""){
                                if(getPageByObjectIndex(i).useranswer.indexOf(",") != -1){
                                    tempArr = getPageByObjectIndex(i).useranswer.split(",");
                                }
                                else{
                                    if(getPageByObjectIndex(i).useranswer instanceof Array)
                                        tempArr = getPageByObjectIndex(i).useranswer;
                                    else
                                        tempArr[0] = getPageByObjectIndex(i).useranswer;
                                }
                                if(isMultipleFIB == "false"){
                                    if (getPageByObjectIndex(i).useranswer != undefined && getPageByObjectIndex(i).useranswer != "undefined")
                                        document.getElementById("txtAnswer_" + iAnswer).value = getPageByObjectIndex(i).useranswer;
                                }
                                else{
                                    setSinglePageFIBValues(iAnswer,tempArr);
                                }
                            }
                            break;
                        case "truefalse":
                        case "multipleselect":
                        case "singleselect":
                            var useranswer = getPageByObjectIndex(i).useranswer;
                            try{ if (this[("optionalnotes"+iAnswer)] == true){ textEntry = true; }}catch(e){}
                            if (useranswer != "") {
                                var arrAnswers = useranswer.split(",");
                                for (ch = 0; ch < arrAnswers.length  ; ch++) {
                                    document.getElementById("inst_op_" + iAnswer + "_" + (parseInt(arrAnswers[ch])).toString()).checked = true;
                                    if (this[("optionalnotes"+iAnswer)] == true){ 
                                        if (($("#" + "inst_noteopt"+ iAnswer +"_" + (arrAnswers[ch]))) != undefined) {
                                            $("#" + "inst_noteopt"+ iAnswer +"_" + (arrAnswers[ch]).toString()).css('display', ''); 
                                            $("#" + "inst_noteopt"+ iAnswer +"_" + (arrAnswers[ch]).toString()).val('');  }
                                    } 
                                }
                            }
                            if (this[("optionalnotes"+iAnswer)] == true){ 
                                optionstext = getPageByObjectIndex(i).optionnotes; 
                                var optionstext = optionstext== undefined ? '' : optionstext;
                                var optionsLength = Number(this[("totalOptions" + iAnswer)]);
                                var optionstexts = optionstext.toString().split("###");
                                for (op=0; op< optionsLength; op++){
                                    $("#" + "inst_noteopt"+ iAnswer +'_' + (op+1).toString()).val((optionstexts[op]).toString());
                                }
                            }
                            break;
                        case "matrix":
                            var useranswer = "";
                            if (pages[SeqID] != undefined) {
                                useranswer = getPageByObjectIndex(i).useranswer == undefined ? '' : getPageByObjectIndex(i).useranswer;
                                if (useranswer != ""){
                                    UserChoices = useranswer.split("&&**&&").join("").split("&**&").join("");
                                    var fields = $("#matrixContainer_" + iAnswer)[0].getElementsByTagName("input");
                                    for (var j = 0; j < fields.length; j++) {
                                        var val = UserChoices.charAt(j);
                                        if (val == "1")
                                            fields[j].checked = true;
                                        else
                                            fields[j].checked = false;
                                    }
                                }
                            }
                            break;
                        case "draganddrop":
                            getDragsDroppedArr = [];
                            var useranswer = getPageByObjectIndex(i).useranswer;
                            if (useranswer != "") {
                                if(pages[SeqID] != undefined) {
                                    if(useranswer!= undefined){
                                        getDragsDroppedArr = getDropObjArrVal(useranswer);
                                        var finalarr = "";
                                        var userStr = useranswer.split("##")[0];
                                        var tempUserAnswer = userStr.split("^^");
                                        if (tempUserAnswer != null){
                                            for(var m=0;m<tempUserAnswer.length;m++) {
                                                if (tempUserAnswer[m] != "")
                                                {
                                                    if (finalarr == "") 
                                                        finalarr =  "[" + tempUserAnswer[m] +"]";
                                                    else
                                                        finalarr = finalarr + ",[" + tempUserAnswer[m] +"]";
                                                }
                                            }
                                            var tempArr = "["+ finalarr +"]";
                                            tempUserAnswer = eval(tempArr);
                                        }
                                    }
                                    else{
                                        var tempUserAnswer = useranswer;
                                    }
                                    if(mobileDND == false){
                                        for(var m=0;m<tempUserAnswer.length;m++) {
                                            var dropObj = document.getElementById(getDragsDroppedArr[m].toString());
                                            for(var j=0;j<tempUserAnswer[m].length;j++) {
                                                var dragObj = document.getElementById('drag'+iAnswer+'_'+tempUserAnswer[m][j]);
                                                if(dropObj != null && dragObj!= null) {
                                                    appendToDrop(dragObj, dropObj, "returnVal", iAnswer);
                                                }
                                            }
                                        }
                                    }
                                    else{
                                        mobileAppendToDrop(getDragsDroppedArr,tempUserAnswer);
                                    }
                                }
                            }
                            break;
                        case "sequence":
                            var useranswer = "";
                            if (pages[SeqID] != undefined) {
                                useranswer = getPageByObjectIndex(i).useranswer;
                                useranswers = useranswer == undefined ? '' : useranswer;
                                if (useranswers !=""){
                                    $('#Checkattmpstatus'+ iAnswer)[0].innerHTML=true;
                                    var answers = useranswer.split("^^");
                                    // $("#listqtn" + iAnswer).empty();
                                    $.each(answers, function(index, sort) {
                                        $("#listqtn" + iAnswer + " li[data-sno='" + sort +"']").appendTo($("#listqtn" + iAnswer)[0]);
                                    });
                                }
                            }
                            break;
                        case "rating":
                            var useranswer = getPageByObjectIndex(i).useranswer;  
                            useranswer = useranswer == undefined ? '' : useranswer; 
                            if (useranswer != "") { 
                                var arrAnswers = useranswer.toString().split('##');
                                $("#container_table"+ iAnswer +" tr").each(function(index) {
                                    if (index != 0){
                                        for  (j = 0; j < arrAnswers.length; j++) {
                                            if (index == arrAnswers[j].split('@')[0]) 
                                                $(this).find('.star').each(function () {
                                                    var i = $(this).attr('data-id');
                                                    if (i <= arrAnswers[j].split('@')[1]) {
                                                        $(this).attr('src', 'images/star yellow.png');
                                                    }else {
                                                        $(this).attr('src', 'images/star grey.png'); 
                                                    }
                                                }); // end star 
                                        } // end for j 
                                    }   //end index 
                                }); 
                            } 
                            break;
                        case "page":
                        case "summary":
                            break;
                    }
                }
            }
        }
    }
    catch(e){
    }
}
function setSinglePageFIBValues(val,arr){
    $("#questionContainer"+val+" :input").each(function(index){
        var userTxt = arr[index]
        if(userTxt != null || userTxt != ""){
            $(this).val(userTxt);
        }
    });
}
$('[id^="questionContainer"] :input').bind("keyup", function(event, ui) { 
    var str = $(this).val();
    if ((str.indexOf("/") != -1) || (str.indexOf("\\") != -1) || (str.indexOf("'") != -1) || (str.indexOf(",") != -1) || (str.indexOf('" ') != -1)) {
        ShowAlert("Please don’t include these special characters   /,\\'  in blank.");
        str = str.replace(/[\',\{\}\[\]\\\/]/gi, '');
        $(this).val(str);
    }
});
function CharCount(pageno) {
    var alertmsg = false; if(document.getElementById('txtAnswer_' + pageno).value.indexOf(">") > -1)
    { document.getElementById('txtAnswer_' + pageno).value = document.getElementById('txtAnswer_' + pageno).value.substring(0,document.getElementById('txtAnswer_' + pageno).value.indexOf(">"));  alertmsg = true; }
    if(document.getElementById('txtAnswer_' + pageno).value.indexOf("<") > -1) {
        document.getElementById('txtAnswer_' + pageno).value =  document.getElementById('txtAnswer_' + pageno).value.substring(0,document.getElementById('txtAnswer_' + pageno).value.indexOf("<"));	 alertmsg = true; } 
    if(document.getElementById('txtAnswer_' + pageno).value.indexOf("+") > -1) {
        document.getElementById('txtAnswer_' + pageno).value =  document.getElementById('txtAnswer_' + pageno).value.substring(0,document.getElementById('txtAnswer_' + pageno).value.indexOf("+"));	 alertmsg = true; } 
    if (alertmsg) ShowAlert('The \'<\' , \'>\', \'+\'  characters are not supported.'); 
    var cnt=document.getElementById('txtAnswer_' + pageno).value;
    if (cnt.length > 1200){   
        ShowAlert('You can not type more than 1200 characters.');
        document.getElementById('txtAnswer_' + pageno).value =  document.getElementById('txtAnswer_' + pageno).value.substring(0,1200);
        cnt=document.getElementById('txtAnswer_' + pageno).value; }
    document.getElementById('maxcnt_' + pageno).innerHTML=cnt.length +"/1200"
}

function checkPassStatus(useranswer,pageNo){ 
    if(pages[SeqID] != undefined){
        if (useranswer !=""){
            var tempPageNo = pageNo;
            var _pageType = "";
            if(trackObjects[SeqID].type.toLowerCase() == "content object" || trackObjects[SeqID].type.toLowerCase() == "contentobject" || trackObjects[SeqID].type.toLowerCase() == "assessment" )
                _pageType = getPageByObjectIndex(0).Qtype.toLowerCase();
            else
                _pageType = getPageByObjectIndex(0).type.toLowerCase();
            if (_pageType!="page")
                tempPageNo = pageNo + 1;
            if (sortOrder(useranswer) == this[("correctAnswer"+tempPageNo)])
                getPageByObjectIndex(pageNo).status = "correct";
            else
                getPageByObjectIndex(pageNo).status = "incorrect";
        }
    }
}

function checkSinglePageAnswers()
{
    var CheckAll = true;
    var useranswer = "";
    if(parent.window.arrQuestions != undefined) 
    {
        for (i=0;i < parent.window.arrQuestions.length;i++ ) 
        {
            if (parent.window.arrQuestions[i].Qid != "") 
            {
                if (parent.window.arrQuestions[i].PageType != "longanswer")	
                {
                    useranswer ="" 
                    //
                    var optchoices = parent.window.arrChoiceOrder[i - 1].split(",");
                    for (ch = 0; ch < optchoices.length; ch++)
                    {
                        if (document.getElementById("inst_op_"+ i +"_" +(ch+1)).checked) 	{ 
                            if (useranswer == "") useranswer = ch.toString(); else useranswer = useranswer +","+ ch.toString(); }
                    }
                    if (useranswer == "")
                    { CheckAll = false; break;	}
                    //
                }
                else
                {
                    if (document.getElementById("txtAnswer_"+ i).value == "")
                    { CheckAll = false; break; }
                }
            }
        }
    }
    return CheckAll;
}
// bhushanam added this code for take notes from options level 
$('div[id^="optionsContainer"] input[type="radio"]').on('change', function () { 
    pageid = ($(this).attr("id")).split('_')[2];
    pageid--;
    if (getoptionnotesvalue(pageid)){ 
        var $radio = $(this);
        $("#singlePageContent_" + pageid + "").find('textarea').each(function (index) {
            $(this).css('display', 'none');
            $(this).val('');
        });
        $opts =  $('#optionsContainer').find("div[id='" + pageid + "']");
        if ($radio.prop('checked') == "true" || $radio.prop('checked') == true) {
            $radio.closest('div').siblings().find('textarea').show(100);
        } 
    } 
}); 

$('div[id^="optionsContainer"] input[type="checkbox"]').on('change', function () {
    pageid = ($(this).attr("id")).split('_')[2];
    if (getoptionnotesvalue(pageid)){ 
        var $chk = $(this); 
        if ($chk.prop('checked') == "true" || $chk.prop('checked') == true) {
            $chk.closest('div').siblings().find('textarea').show(300);
        } else {
            $chk.closest('div').siblings().find('textarea').css('display', 'none');
            $chk.closest('div').siblings().find('textarea').val('');
        }
    }
});

function getoptionnotesvalue(pageid){
    if (this["optionalnotes"+pageid] == true && this["showdefault"+pageid] == false)
        return true;
    else 
        return false; 
}
$('.textArea-content textarea').keyup(function(event) {
    if ( $(this).val().length > 250) { ShowAlert("Option level notes will not allow morethan 250 characters.");
        $(this).val($(this).val().substring(0,250)); 
    } 
});
function getVideoObjectId(num) {
        num--;
    var objid = '';
    var id = 'singlePageContent_' + num;
    var tblObj = document.getElementById(id);
    $(tblObj).find('video.capturemedia').each(function(){
        var id = $(this).attr('id');		
        var objIdArr = id.split('_');
        objid = objIdArr[objIdArr.length-1];
    });
    return objid;
}
function checkForVideoCapture(){
    if(($('video[id ^= "videocapture_"]').length > 0) && !isPreviewMode())
        return true;
    else
        return false;
}
function checkForImageCapture(){
    if( ($('video[id ^= "videocapImg_"]').length > 0) && !isPreviewMode())
        return true;
    else
        return false;
}
function validateCaptureVideo(){
    var furnishedAllValues = true;
    if(($('video[id ^= "videocapture_"]').length > 0) && !isPreviewMode()){
        $('video[id ^= "videocapture_"]').each(function(){
            var tblId = $(this).closest("table").attr("id");
            var  strId = tblId.substr(13,tblId.length);
            if(getVariableValue('capVidFileName',strId) == ""){
                furnishedAllValues = false;
            }
        })
        return furnishedAllValues;
    }else{
        return furnishedAllValues;
    }
}
function validateCaptureImage(){
    var furnishedAllValues = true;
    if(($('video[id ^= "videocapImg_"]').length > 0) && !isPreviewMode()){
        $('video[id ^= "videocapImg_"]').each(function(){
            var tblId = $(this).closest("table").attr("id");
            var  strId = tblId.substr(13,tblId.length);
            if(getVariableValue('capImgFileName',strId) == ""){
                furnishedAllValues = false;
            }
        })
        return furnishedAllValues;
    }else{
        return furnishedAllValues;
    }
}
function getVariableValue(str1,num){
    return this[str1 + num];
}
function removeCapturedVideo(id,num){
    var video = document.getElementById('videocapture_'+id);
    $(video)[0].setAttribute("src", "");
    this['capVidFileName' + num] = "";
    this['capVidFileId' + num] = "";
    $("#removeVideo_"+id).css("display","none");
    $('#slideAudioVideo_+id').slider('value', 0);
    videoPlayPause(video,id);
    $("#play_"+id).css("display","none");
    $('#vidDurTxt_' + id).html("00:00");
    $('#durationVideo_' + id).html("00:00");
}
function removeCapturedImage(id,num){
    var div = document.getElementById('capturedImgDiv_'+id);
    $(div).find("img").attr("src", "");
    this['capImgFileName' + num] = "";
    this['capImgFileId' + num] = "";
    $("#removeImage_"+id).css("display","none");
    $(div).find("img").css("opacity",0);
}
function validateTextArea(obj){
    if (obj != null) {
        if (trimWhiteSpaces(obj.value) != ""){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}
$('div[id^="hintbut_"]').bind('click',function () {
    showHintLayer($(this))
});
$('div[id^="solutionbut_"]').bind('click',function () {
    showSolutionLayer($(this))
});
function storePageDataForSinglePage(currPageNum) {
    try {
        //debugger;
        setUserResponse(currPageNum);
    }
    catch (e) {
    }
}