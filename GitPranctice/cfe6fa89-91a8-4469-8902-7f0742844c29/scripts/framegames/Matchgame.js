function Matchgame(pgObj) {
var gameObj = pgObj;
var objId;
var numOfRows
var numOfColoumns
var selected = false;
var matched = false;
var selectedCard;
var matchedCard;
var countDownTimer;
var hours;
var minutes;
var seconds;
var isRandamization
var maxPairs;
var answered = 0;
var showReset;
var enableSounds;
var objWidth;
var objHeight;
var objXPos;
var objYPos;
var gameLabel;
var scorePerMatch;
var isLevels;
var level1Time;
var level2Time;
var level3Time;
var gameControls;
var gameReset;
var gameSkin;
var gameAnimation
var bgImageSrc;
var bgImgPoid
var showGameTime;
var showGameScore;
var timeDiv;
var matchArray = [];
var timeTxt;
var playbtn;
var pausebtn;
var resetbtn;
var game;
var currentGameLevel;
var level1btn;
var level2btn;
var level3btn;
var gameScore;
var gametotalTime;
var scoreDiv;
var gameSound;
var soundBtn;
var emptyPairs = 0;
var passFailRetakebtn; 
var gameBgImage;
var gameContainer;
var helpTxt;
var helpBtn;
var helpClosebtn
var helpDiv;
var gameInst;
var isHelpOpen = false;
var scoreTxt;
var gameArea;
var screenWidth= $(window).width();
	initProperties();
	function initProperties(){
	numOfRows = $(gameObj).attr('gridsize').split("X")[1];
	numOfColoumns = $(gameObj).attr('gridsize').split("X")[0];
	isRandamization = $(gameObj).attr("israndom");
	enableSounds = $(gameObj).attr("bgsound");
	objWidth = $(gameObj).attr("width");
	objHeight = $(gameObj).attr("height");
	objXPos = $(gameObj).attr("hoffset");
	objYPos = $(gameObj).attr("voffset");
	objId =   $(gameObj).attr("id");
	gameLabel = $(gameObj).attr("label");
	scorePerMatch = parseInt($(gameObj).attr("score"));
	isLevels = $(gameObj).attr("showlevels");
	level1Time = $(gameObj).attr("level1");
	level2Time = $(gameObj).attr("level2");
	level3Time = $(gameObj).attr("level3");
	gameControls = $(gameObj).attr("plybkctrls");
	gameReset = $(gameObj).attr("retake");
	gameSkin = $(gameObj).attr("wgskin");
	gameAnimation = $(gameObj).attr("wganim");
	bgImageSrc = $(gameObj).attr("wgbgimagesrc");
	bgImgPoid = $(gameObj).attr("wgbgimagepoid");
	showGameTime = $(gameObj).attr("showtimer");
	showGameScore = $(gameObj).attr("showscore");
	gameContainer = "#gamecontainer_"+objId;
	timeDiv = "#displayTime_"+objId;
	timeTxt = $(timeDiv).html();
	scoreDiv = "#displayScore_"+objId;
	if(screenWidth<=500)
	$(scoreDiv).html("");
	else
	$(scoreDiv).html("Score:");
	scoreTxt = $(scoreDiv).html();
	playbtn = "#gameplay_"+objId;
	$(playbtn).prop("disabled",true);
	$(playbtn).fadeTo("fast",0.5);
	pausebtn = "#gamepause_"+objId; 
	resetbtn = "#gamereset_"+objId; 
	$(playbtn).css('cursor','default');
	$(pausebtn).css('cursor', 'pointer');
	currentGameLevel = 1;
	level1btn = "#gamelevel1_"+objId; 
	level2btn = "#gamelevel2_"+objId; 
	level3btn = "#gamelevel3_"+objId; 
	gametotalTime = level1Time;
	gameSound = "#gameAudio_"+objId;  
	soundBtn = "#gamesoundBtn_"+objId; 
	passFailRetakebtn = "#gameretake_"+objId; 
	helpDiv =  "#gamehelp_"+objId; 
	$(helpDiv).css("z-index","10");
	helpBtn = "#gameHelpbtn_"+objId;
	helpClosebtn = "#helpClose_"+objId;
	game = "#game_"+objId;
	gameArea = "#gameArea_"+objId; 
	var ismobilDevice = getMobileUserAgent() // will return true when course has been launched from mobile devices
	if(ismobilDevice == true){ 
	var gameDiv = getMatchGameTbl();
	$(gameDiv).hide();
	}
	gameScore = 0;
	if (gameReset == true || gameReset == "true") {
	    $(passFailRetakebtn).show();
	} else {
	    $(passFailRetakebtn).hide();
	  
	    }
	    if(isLevels == "false"){
	     $("#divControls2").hide();
	
	}
	
	updateUserScore();
	loadInsGameInstructions();
	checkForGameBGImage();
	getMatchArrayContent();
	unBindGameControls();
	    try {	        
	        $(passFailRetakebtn).parent().css({"position":"relative"});
	    }catch(e){}
	}
	function updateUserScore(){
	var userScore = scoreTxt+" "+gameScore;
	  $(scoreDiv).html(userScore);
	}
	function checkForGameBGImage(){
		if(bgImgPoid != ""){
		var bgImageURL = $(contentLibXML).find("pageobject[id='"+bgImgPoid+"']").attr("src");
		var newURL = replaceImageURL(bgImageURL);
		if (newURL == 404)
		   $(game).css({"background-image":"URL('"+ location.origin + bgImageURL+"')", "background-size": "100% 100%"});
		else
		  $(game).css({"background-image":"URL('"+newURL+"')", "background-size": "100% 100%"});
		}
		else{
		$(game).css({"background-color":"#f4f4f4"});
		}
		
		if(showGameScore == "false"){
		$(scoreDiv).hide();
		}
		else{
		$(scoreDiv).show();
		}
		
		if(showGameTime == "false"){
		$(timeDiv).hide();
		}
		else{
		$(timeDiv).show();
		}
	}
	function loadInsGameInstructions(){
	var instId = $(gameObj).find("instruction").attr("poid");
	var gameInstructionsTxt = $(contentLibXML).find("pageobject[id='"+instId+"']")[0].firstChild.data;
	var instTxtDiv = "#instTxt_"+objId;
	var instHead = "#instHeading_"+objId
	$(instHead).show();
	$(instTxtDiv).html(gameInstructionsTxt);
	var helpPoid = $(gameObj).find("help").attr("poid");
	helpTxt = $(contentLibXML).find("pageobject[id='"+helpPoid+"']")[0].firstChild.data;
	var gamehelpTxt = "#gamehelpTxt_"+objId;
	$(gamehelpTxt).html(helpTxt);
	}
	function getMatchArrayContent(){
	$(gameObj).find("match").each(function(index){
	var pairId = $(this).attr("id");
    var textPoid = $(this).attr("textpoid");
	var mtextpoid = $(this).attr("mtextpoid");
	var imagepoid = $(this).attr("imagepoid");
	var mimagepoid = $(this).attr("mimagepoid");
	if(textPoid != ""){
	var obj = {};
	obj.type = "text";
	obj.matchId = pairId;
	var text = $(contentLibXML).find("pageobject[id='"+textPoid+"']")[0].firstChild.data;
	obj.displayText = text;
	matchArray.push(obj)
     if(mtextpoid != ""){
	 var obj = {};
	 obj.type = "text";
	 obj.matchId = pairId;
	 var text = $(contentLibXML).find("pageobject[id='"+mtextpoid+"']")[0].firstChild.data;
	 obj.displayText = text;
	 matchArray.push(obj)
	 }
	 else if(mimagepoid != ""){
	 var obj = {};
	 obj.type = "image";
	obj.matchId = pairId;
	var imagepath = $(contentLibXML).find("pageobject[id='"+mimagepoid+"']").attr('src');
	image = replaceImageURL(imagepath);
	if (image == 404)
		{
		obj.displayText = imagepath; obj.response = image; }
	else
		obj.displayText = image;
	matchArray.push(obj)
	 }
	 else{
	 var obj = {};
	  obj.type = "text";
	  obj.matchId = pairId;
	  var text = "";
	  obj.displayText = text;
	  matchArray.push(obj)
	 }
	}
	else if(imagepoid != ""){
	var obj = {};
	obj.type = "Image";
	obj.matchId = pairId;
	var imagepath = $(contentLibXML).find("pageobject[id='"+imagepoid+"']").attr('src');
	image = replaceImageURL(imagepath);
	if (image == 404)
	{
		obj.displayText = imagepath; obj.response = image; }
	 else
		obj.displayText = image;
	 
	matchArray.push(obj)
	 if(mimagepoid != ""){
	 var obj = {};
	obj.type = "Image";
	obj.matchId = pairId;
	var imagepath = $(contentLibXML).find("pageobject[id='"+mimagepoid+"']").attr('src');
	image = replaceImageURL(imagepath);
	if (image == 404){
		obj.displayText = imagepath; obj.response = image; }
	 else
		obj.displayText = image;
	matchArray.push(obj)
	 }
	 else if(mtextpoid != ""){
	 var obj = {};
	  obj.type = "text";
	obj.matchId = pairId;
	 var text = $(contentLibXML).find("pageobject[id='"+mtextpoid+"']")[0].firstChild.data;
	 obj.displayText = text;
	matchArray.push(obj)
	 }
	 else{
	  var obj = {};
	  obj.type = "text";
	  obj.matchId = pairId;
	  var text = "";
	  obj.displayText = text;
	  matchArray.push(obj)
	 }
	}
	else{
	  var obj = {};
	  obj.type = "text";
	  obj.matchId = pairId;
	  var text = "";
	  obj.displayText = text;
	  matchArray.push(obj);
	  matchArray.push(obj);
	  emptyPairs ++;
	}
	});
	maxPairs = matchArray.length/2;
	maxPairs = maxPairs - emptyPairs;
	showGameInstructions();
	}
	function showGameInstructions(){
	//showInstructions("show");
	var playGame = '#playgame_'+objId;
	$(playGame).fadeTo("fast",1);
	$(playGame).bind("click",function(){
	var matchGame = getMatchGameTbl();
	$(matchGame).show();
     showInstructions("hide");
	 bindGameControls();
	 $(playbtn).prop("disabled",true);
	$(playbtn).fadeTo("fast",0.5);
	 setContainerDiv();
	 drawGameBoxes();
	 // JIRA ID - INST-9552
	 try{
		 if(_isBootstrapSkin != undefined && _isBootstrapSkin == true)
			$(gameArea).show();
		 else
			$(gameArea).hide();
	 }catch(e){$(gameArea).hide();}
	 
	 if(screenWidth<610){
	   var minHt = $(game).height();
	   $(gameContainer).css("min-height",minHt);
	   $(game).css("min-height",minHt);
	 }
	})
	}
	
	function showInstructions(val){
	var tblControls = "#tblControls_"+objId;
	gameInst = "#gameInstructions_"+objId;
	inst = "#instructions_"+objId;
	$(tblControls).show();
	if(val == "show"){
	$(inst).show();
	$(gameInst).show();
	}
	else{
	$(inst).hide();
	$(gameInst).hide();
	}
	}
	
	function setContainerDiv(){
	
	}
function drawGameBoxes(){
if(isRandamization == "true")
 matchArray = shuffle(matchArray);
var tdWidth = Math.round(100/numOfColoumns);
var tdHeight = Math.round(100/numOfRows);
var tbl = $("<table width='100%' height='100%' cellpadding = '0' cellspacing='0' border='0' id='matchGame_"+objId+"'></table>");
$(game).append(tbl);
var divNum = 0;
for(var i=0;i<numOfRows;i++){
var tbl_tr = $("<tr></tr>");
$(tbl).append(tbl_tr);
for(var j=0;j<numOfColoumns;j++){
var tbl_td = $("<td width='"+tdWidth+"%' height='"+tdHeight+"%'></td>");
$(tbl_tr).append(tbl_td);
var divId = 'box_'+i+'_'+j+"_"+objId;

var val = matchArray[divNum].displayText;
if (val != "") {
    var div = $("<div id='" + divId + "'style='width:100% ;height:100%;' class='boxDiv'></div>");
}
else {
    var div = $("<div id='" + divId + "' style='width:100% ;height:100%; display:none' class='boxDiv'></div>");
}
if (matchArray[divNum].type == "text") {
   var childDiv = $("<div style='margin:10px;height:auto;'></div>");
   $(childDiv).html(val);
   $(div).append(childDiv);
    //$(div).html(val);
} else {
	  if (matchArray[divNum].response == 404){
		$(div).css({ 'background-image': 'url("' + location.origin + val + '")', 'backgroundSize': '100% 100%', 'background-repeat': 'no-repeat' });
	  }else{
		$(div).css({ 'background-image': 'url(' + val + ')', 'backgroundSize': '100% 100%', 'background-repeat': 'no-repeat' });}
}
//$(div).html("<img style='height:auto; width:100%' src="+val+"></img>");
$(div).data("matchId",matchArray[divNum].matchId);
divNum++;
$(tbl_td).append(div);
//var div = $("<div id='box_"+i+"_"+j+"'' class='boxDiv'></div>");
//var xPos = (j*70)+10;
//var yPos = (i*110)+10;
//$(div).css({"left":xPos+"px", "top":yPos+"px"});

$(div).bind("click",function(e){
    getMatch($(e.currentTarget));
})
}
}
convertSecsToMins(gametotalTime);
}

function getMatch(obj){
if(selected == false){
$(obj).removeClass("boxDiv");
$(obj).addClass("onBoxClick");
selected = true;
selectedCard  = obj
}
else{
if($(obj).attr("class") != "onBoxClick"){
$(obj).removeClass("boxDiv");
$(obj).addClass("onBoxClick");
matchedCard = obj;
getCorrectMatch();
}
}
}

function getCorrectMatch(){
disableCards();
if(selectedCard != undefined && matchedCard){
var card1 = $(selectedCard).data("matchId");
var card2 = $(matchedCard).data("matchId");
if(card1 == card2){
setTimeout(function(){showCorrect()}, 500);
answered++;

}
else{
setTimeout(function(){showIncorrect()}, 500);
}
}
}

function getAllAnswered(){
if(maxPairs == answered){
clearInterval(countDownTimer);
// JIRA ID - INST-9552
setTimeout(function(){ShowPassFailText("passed");}, 600);

}
}
function showCorrect(){
// JIRA ID - INST-9552
if(maxPairs == answered){
 unBindGameControls();
}
if(enableSounds == "true")
playGameSounds("success");
$(selectedCard).removeClass("onBoxClick");
$(selectedCard).addClass("correctTrans");
$(matchedCard).removeClass("onBoxClick");
$(matchedCard).addClass("correctTrans");
setTimeout(function(){removeCards()}, 500);
setTimeout(function(){getAllAnswered()}, 500);
gameScore = gameScore+scorePerMatch;
updateUserScore();
}

function showIncorrect(){
if(enableSounds == "true")
playGameSounds("error");
$(selectedCard).removeClass("onBoxClick");
$(selectedCard).addClass("incorrectTrans");
$(matchedCard).removeClass("onBoxClick");
$(matchedCard).addClass("incorrectTrans");
setTimeout(function(){resetCards()}, 500);
}

function disableCards(){
var tbl = "matchGame_"+objId;
$("#"+tbl+" tr td div").each(function(){
$(this).unbind( "click" );
});
}

function enableCards(){
var tbl = "matchGame_"+objId;
$("#" + tbl + " tr td div").each(function () {
    if($(this).attr('id') != undefined){
$(this).bind("click",function(e){
    getMatch($(e.currentTarget));
})
    }
});
}

function removeCards() {
    ///// FADE OUT ///////////////////////////
    if (gameAnimation == "fadeout") {
        $(selectedCard).fadeTo("slow", 0, function() { $(this).remove(); });
        $(matchedCard).fadeTo("slow", 0, function() { $(this).remove(); });
    }

    ///////////////ZOOM OUT ////////////
    if (gameAnimation == "zoomout") {
        $(selectedCard).css('transition', '-webkit-transform 1s');
        $(selectedCard).css('transition', 'transform 1s');
        $(selectedCard).css('-webkit-transform', 'scale(0,0)');
        $(selectedCard).css('transform', 'scale(0,0)');
        $(selectedCard).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () { $(this).remove() });

        $(matchedCard).css('transition', '-webkit-transform 1s');
        $(matchedCard).css('transition', 'transform 1s');
        $(matchedCard).css('-webkit-transform', 'scale(0,0)');
        $(matchedCard).css('transform', 'scale(0,0)');
        $(matchedCard).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () { $(this).remove() });
    }
///////////////SLIDE UP///////////
//$(selectedCard).slideDown('slow');
//$(matchedCard).slideDown('slow');
selectedCard = undefined;
matchedCard = undefined;
selected = false;
enableCards();
}
	
	 function convertSecsToMins(secs)
{

    secs = Math.round(secs);
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
	
	if(showGameTime == "true")
      setTimer(obj);
}
   
function setTimer(obj){
hours= obj.h
minutes = obj.m
seconds = obj.s
var cTime = timeTxt+" "+minutes+" :"+seconds;
$(timeDiv).html(cTime);
countDownTimer= setInterval(strtTimer,1000); 

}

function strtTimer(){
if(minutes>=0){
if(seconds>0){
seconds = seconds-1;
}
else{
minutes = minutes-1;
seconds = 59;
}
}
if(minutes == 0 && seconds ==0){
clearInterval(countDownTimer);
callGameOver();
ShowPassFailText("falied");
}
var cTime = timeTxt+" "+minutes+" :"+seconds;
$(timeDiv).html(cTime);
}

function callGameOver(){
disableCards();
}
function ShowPassFailText(val){
if(val == "passed"){
loadPassFailTxt("passed");
}
else{
loadPassFailTxt("failed");
}
}

function loadPassFailTxt(val){
var passFailId;
//var matchGameTbl = getMatchGameTbl();
//var gameHt = $(matchGameTbl).height();
//$(matchGameTbl).hide();
//$(gameInst).height(gameHt);

if(val == "passed"){
	passFailId = $(gameObj).find("onpass").attr("poid");
	}
	else{
	passFailId = $(gameObj).find("onfail").attr("poid");
	}
	var gamePassFailText = $(contentLibXML).find("pageobject[id='"+passFailId+"']")[0].firstChild.data;
	var gamePassfailTxtDiv = "#gamePassfailTxt_"+objId;
	$(gamePassfailTxtDiv).html(gamePassFailText);
	gameInst = "#gameInstructions_"+objId;
	// JIRA ID - INST-9552
	try{
		if(_isBootstrapSkin != undefined && _isBootstrapSkin == true){
			  $(gameInst).hide(); //Bootstrap
			  $(gameArea).hide(); //Bootstrap
		}else{
		   $(gameInst).show();
		}
	}catch(e){
	    $(gameInst).show();
	}
    var gamePassfailDiv = "#gamepassfail_"+objId;
    $(gamePassfailDiv).show();
	if(screenWidth<610){
		var minHt = $(game).height();
		$(game).hide();
		$(gamePassfailDiv).css("min-height",minHt);
	}
	//var tblControls = "#tblControls_"+objId;
	//$(tblControls).hide();
	if (gameReset == true || gameReset == "true") {
	    $(passFailRetakebtn).show();
	    $(passFailRetakebtn).bind("click", function () {
	        retakeonPassFail();
	    });
	} else {
	    $(passFailRetakebtn).hide();
	}
	unBindGameControls();
}

function retakeonPassFail() {
    if (gameReset == true || gameReset == "true") {
        var tblControls = "#tblControls_" + objId;
		var matchGameTbl = getMatchGameTbl();
		$(matchGameTbl).show();
		$(gameInst).css("height","100%");
        $(tblControls).show();
        gameInst = "#gameInstructions_" + objId;
        $(gameInst).hide();
        var gamePassfailDiv = "#gamepassfail_" + objId;
        $(gamePassfailDiv).hide();
		bindGameControls();
		resetGame();
		//$(playbtn).prop("disabled",true);
	   // $(playbtn).fadeTo("fast",0.5);
    }
}
function resetCards(){
$(selectedCard).removeClass("incorrectTrans");
$(selectedCard).addClass("boxDiv");
$(matchedCard).removeClass("incorrectTrans");
$(matchedCard).addClass("boxDiv");
selectedCard = undefined;
matchedCard = undefined;
selected = false;
enableCards();
}

function playGame(){
$(playbtn).fadeTo("fast",0.5);
$(playbtn).prop("disabled",true);
$(playbtn).css('cursor','default');
$(pausebtn).fadeTo("fast",1);
$(pausebtn).prop("disabled",false);
enableCards();
clearInterval(countDownTimer);
countDownTimer= setInterval(strtTimer,1000);
$(pausebtn).css('cursor','pointer');
}

function pauseGame(){
disableCards();
clearInterval(countDownTimer);
$(pausebtn).fadeTo("fast",0.5);
$(pausebtn).prop("disabled",true);
$(playbtn).fadeTo("fast",1);
$(playbtn).prop("disabled",false);
$(pausebtn).css('cursor','default');
$(playbtn).css('cursor','pointer');
}



function resetGame(){
$(game).html('');
// JIRA ID - INST-9552
try{
	if(_isBootstrapSkin != undefined && _isBootstrapSkin == true)
		$(gameArea).show(); // for bootstrap
}catch(e){}
selectedCard = undefined;
matchedCard = undefined;
clearInterval(countDownTimer);
hours=0;
minutes=0;
seconds=0;
$(timeDiv).html("");
selected = false;
matched = false;
answered = 0;
$(playbtn).prop("disabled",true);
$(playbtn).fadeTo("fast",0.5);
$(pausebtn).fadeTo("fast",1);
$(pausebtn).prop("disabled",false);
$(playbtn).css('cursor','default');
$(pausebtn).css('cursor','pointer');
drawGameBoxes();
gameScore = 0;
updateUserScore()

}

function playGameSounds(val){
var audio = $(gameSound)[0];
if(val == "error")
audio.src = "Images/error.mp3";
else
audio.src = "Images/correct.mp3";
audio.load();
audio.play();
}

function gameLevel1Click(){
if(currentGameLevel != 1){
resetLevelClass(currentGameLevel);
gametotalTime = level1Time;
currentGameLevel = 1;
$(level1btn).removeClass("gamelevels").addClass("gamelevelSelected");
resetGame();
}
}

function gameLevel2Click(){
if(currentGameLevel != 2){
resetLevelClass(currentGameLevel);
gametotalTime = level2Time;
currentGameLevel = 2;
$(level2btn).removeClass("gamelevels").addClass("gamelevelSelected");
resetGame();
}
}

function gameLevel3Click(){
if(currentGameLevel != 3){
resetLevelClass(currentGameLevel);
gametotalTime = level3Time;
currentGameLevel = 3;
$(level3btn).removeClass("gamelevels").addClass("gamelevelSelected");
resetGame();
}
}

function showGameHelp(){
var matchGameTbl = getMatchGameTbl();
var gameHt = $(matchGameTbl).height();
if(isHelpOpen == false){
$(gameInst).show();
$(gameInst).height(gameHt);
$(helpDiv).show();
$(matchGameTbl).hide();
pauseGame();
isHelpOpen = true;
}
else{
$(gameInst).hide();
$(gameInst).css("height","100%");
$(helpDiv).hide();
$(matchGameTbl).show();
playGame();
isHelpOpen = false;
}

}
$(helpClosebtn).bind("click",function(){
updateHelpVars();
playGame();
});

function updateHelpVars(){
if(isHelpOpen == true){
var matchGameTbl = getMatchGameTbl();
$(gameInst).hide();
$(gameInst).css("height","100%");
$(helpDiv).hide();
$(matchGameTbl).show();
playGame();
isHelpOpen = false;
}
}
function resetLevelClass(val){
if(val == 1){
$(level1btn).removeClass("gamelevelSelected").addClass("gamelevels");
}
else if(val == 2){
$(level2btn).removeClass("gamelevelSelected").addClass("gamelevels");
}
else{
$(level3btn).removeClass("gamelevelSelected").addClass("gamelevels");
}
updateHelpVars();
}

function onOffGameSounds(obj){
var imgSrc = $(obj).find("img").attr("src");
var audio = $(gameSound)[0];
if(imgSrc == "Images/sound.png"){
audio.muted = true;
$(obj).find("img").attr("src","Images/speaker_off.png");
}
else{
audio.muted = false;
$(obj).find("img").attr("src","Images/sound.png");
}
}
function replaceImageURL(url) {
    var newurl = "";
    if (url != undefined) {
        if (url.indexOf("Instancy V2 Folders") != -1) {
            if (isTrack == "no") {
                if (url.indexOf("/Content/") != "-1") {
                    newurl = url.replace("/Content/Instancy V2 Folders/", "mediaresource/image/");
                } else {
                    newurl = url.replace("/content/Instancy V2 Folders/", "mediaresource/image/");
                }
            } else {
                if (url.indexOf("/Content/") != "-1") {
                    newurl = url.replace("/Content/Instancy V2 Folders/", "mediaresource/image/");
                } else {
                    newurl = url.replace("/content/Instancy V2 Folders/", "mediaresource/image/");
                }
                newurl = targetPath + newurl;
            }
        }
        else {
            newurl = url;
        }
    }
		 
   if (checkimgexist(newurl) == 200){ // success
     return encodeURIComponent(newurl);
   }else{
     return 404;
   }
   
    return encodeURIComponent(newurl);
}

function checkimgexist(newurl){
  var imgurl = location.href.substring(0,location.href.lastIndexOf("/"))
  var response = $.ajax({
        url: imgurl + "/" + newurl,
        type: 'HEAD',
        async: false
    }).status;
    return response;
 }
	function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

this.clearGameTimer = function(val){
clearInterval(countDownTimer);
hours="";
minutes = "";
seconds = "";
}

function unBindGameControls(){
$(helpBtn).unbind("click");
$(helpBtn).fadeTo("fast",0.5);
$(soundBtn).unbind("click");
$(soundBtn).fadeTo("fast",0.5);
$(playbtn).unbind("click");
$(playbtn).fadeTo("fast",0.5);
$(pausebtn).unbind("click");
$(pausebtn).fadeTo("fast",0.5);
$(resetbtn).unbind("click");
$(resetbtn).fadeTo("fast",0.5);
$(level1btn).unbind("click");
$(level1btn).fadeTo("fast",0.5);
$(level2btn).unbind("click");
$(level2btn).fadeTo("fast",0.5);
$(level3btn).unbind("click");
$(level3btn).fadeTo("fast",0.5);
$(".levelbox").fadeTo("fast",0.5);
if(showGameTime == "true")
	$(timeDiv).fadeTo("fast",0.5);

if(showGameScore == "true")
	$(scoreDiv).fadeTo("fast",0.5);
}
function bindGameControls(){
$(".levelbox").fadeTo("fast",1);
if(showGameTime == "true")
	$(timeDiv).fadeTo("fast",1);

if(showGameScore == "true")
	$(scoreDiv).fadeTo("fast",1);
//$(".gameScore").fadeTo("fast",1);
$(helpBtn).fadeTo("fast",1);
$(helpBtn).bind("click",function(){showGameHelp();});
$(soundBtn).fadeTo("fast",1)
$(soundBtn).bind("click",function(){onOffGameSounds($(this));})
//$(playbtn).fadeTo("fast",1)
$(playbtn).bind("click",function(){playGame();updateHelpVars();});
$(pausebtn).fadeTo("fast",1)
$(pausebtn).bind("click",function(){pauseGame();updateHelpVars();});
$(resetbtn).fadeTo("fast",1)
$(resetbtn).bind("click",function(){
resetGame();updateHelpVars();})
$(level1btn).fadeTo("fast",1)
$(level1btn).bind("click",function(){gameLevel1Click();});
$(level2btn).fadeTo("fast",1)
$(level2btn).bind("click",function(){gameLevel2Click();});
$(level3btn).fadeTo("fast",1)
$(level3btn).bind("click",function(){gameLevel3Click();});
  }

function getMatchGameTbl(){
	var game = "#game_"+objId;
	return game;
 }
}
