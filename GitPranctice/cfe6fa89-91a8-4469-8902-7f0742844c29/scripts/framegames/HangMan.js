function HangMan(obj){
var xmlObj = obj;
var objId;
var gameLabel;
var gameScore;
var scorePerCorrect;
var isLevels;
var level1Time;
var level2Time;
var level3Time;
var gametotalTime;
var gameSkin;
var enableGameSounds;
var isRandamization;
var showGameTimer;
var showGameScore;
var showGameAttempts;
var gameAttempts;
var gameReset;
var showGameTime;
var incorrectAttempts = 0;
var correctAttempts = 0;
var inCorrectCounter = 0;
var correctCounter = 0;
var objId;
var correctScore = 0;
var incorrectScore = 0;
var alphabetsDiv;
var gameQuestionsArr = [];                  
var gameCurrentQuestion = 0;
var gameTotalQuestions = 0;
var totalBlanksinaString = 0;
var alphabets = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var numbers = "0,1,2,3,4,5,6,7,8,9";
var gameQuestionDiv;
var gameAnswerDiv;
var speedometerDiv;
var gamepassFailDiv;
var gamePassFailTextDiv;
var gameInstructionsDiv;
var gameAreaDiv
var timeDiv;
var scoreDiv;
var scoreTxt;
var helpDiv;
var correctIncorrectDiv;
var correctCounterDiv;
var inCorrectCounterDiv;
var gameSound
var alphabetsDivArr = [];
var isNumbers = false;
var muteGameAudio = false;
/* meter vars */
  var totalpercentage = 10
  var attemptno = 0 
  var eachAttemptval = 0 
  var scaleVal = 32;
  var eachAttemptval = 6;
  /* -------------- */
  // ControlsButtons//
var helpBtn;
var helpClosebtn
var level1btn;
var level2btn;
var level3btn;
var playbtn;
var pausebtn;
var resetbtn;
var soundBtn;
var level1btn;
var level2btn;
var level3btn;
var gameRetakeBtn;
///////////////////
var isHelpOpen = false;
var currentGameLevel;
var countDownTimer;
var showInstPage = false;
// Mobil device vars
var batteryDiv;
var batteryCanvas;
var ismobilDevice = false;
var canvas;
var grd;
var screenWidth= $(window).width();
initHangManGame();


function initHangManGame(){
    objId = $(xmlObj).attr("id");
	gameLabel = $(xmlObj).attr("label");
	gameScore = 0;
  scorePerCorrect = parseInt($(xmlObj).attr("score"));
	level1Time = $(xmlObj).attr("level1");
	level2Time = $(xmlObj).attr("level2");
	level3Time = $(xmlObj).attr("level3");
	gameReset = $(xmlObj).attr("retake");
  showGameTime = $(xmlObj).attr("showtimer");
	gameSkin =  $(xmlObj).attr("wgskin");
	enableGameSounds = $(xmlObj).attr("bgsound");
	isRandamization = $(xmlObj).attr("israndom");
	showGameTimer = $(xmlObj).attr("showtimer");
	isLevels = $(xmlObj).attr("showlevels");
	showGameScore = $(xmlObj).attr("showscore");
	showGameAttempts = $(xmlObj).attr("showattempts");
	gameAttempts = parseInt($(xmlObj).attr("attempts"));
  eachAttemptval = (6 * totalpercentage)/ gameAttempts;
	gameTotalQuestions = $(xmlObj).find("questions").children().length;
	gametotalTime = level1Time;
	// JIRA ID - INST-9552
	try{
		if(_isBootstrapSkin != undefined && _isBootstrapSkin == true)
	     	ismobilDevice = false;//getMobileUserAgent() //// SpeedoMeter is replaced in mobil view....
		else
	        ismobilDevice = getMobileUserAgent();
	}catch(e){ismobilDevice = getMobileUserAgent();}
	alphabetsDiv = "#gameAlphabets_"+objId;
	gameQuestionDiv = "#gameQuestion_"+objId;
  gameAnswerDiv = "#gameAnswer_"+objId;
  speedometerDiv = "#gamespeedometer_"+objId;
  currentGameLevel = 1;
  playbtn = "#gameplay_"+objId;
  $(playbtn).prop("disabled",true);
  $(playbtn).fadeTo("fast",0.5);
  $(playbtn).off("click");
  pausebtn = "#gamepause_"+objId; 
  resetbtn = "#gamereset_"+objId; 
  helpBtn = "#gameHelpbtn_"+objId;
  soundBtn = "#gamesoundBtn_"+objId; 
  level1btn = "#gamelevel1_"+objId; 
  level2btn = "#gamelevel2_"+objId; 
  level3btn = "#gamelevel3_"+objId; 
  timeDiv = "#displayTime_"+objId;
  gameSound = "#gameAudio_"+objId;
  helpClosebtn = "#helpClose_"+objId;
  gameRetakeBtn = "#gameretake_" + objId;
  gameAreaDiv = "#gameArea_" + objId;
  gamePassFailDiv = "#gamepassfail_"+objId;
  gamePassFailTextDiv = "#gamePassfailTxt_"+objId;
  gameInstructionsDiv = "#gameInstructions_"+objId;
  correctIncorrectDiv = "#correctIncorrectDiv_"+objId;
  correctCounterDiv = "#gameCorrectCounter_"+objId;
  inCorrectCounterDiv = "#gameIncorrectCounter_"+objId;
  $(inCorrectCounterDiv).html(inCorrectCounter);
  $(correctCounterDiv).html(correctCounter);
  $(gameInstructionsDiv).find("*").css("color", "#333333");
  timeTxt = $(timeDiv).html();
  scoreDiv = "#displayScore_"+objId;
  if(screenWidth<=500)
	$(scoreDiv).html("");
	else
	$(scoreDiv).html("Score:");
  scoreTxt = $(scoreDiv).html();
  helpDiv =  "#gamehelp_"+objId; 
  $(playbtn).css('cursor','default');
  $(pausebtn).css('cursor', 'pointer');
  batteryDiv = "#gamebatterymeter_"+objId;
  batteryCanvas = "battery_"+objId;
  
  if(isLevels == "false"){
	 $("#divControls2").hide();
	
	}
	
  if (gameReset == true || gameReset == "true") {
      $(gameRetakeBtn).show();
  } else {
      $(gameRetakeBtn).hide();
  }
  
  if(showGameTime == "true"){
    $(timeDiv).show();
  }
  else{
   $(timeDiv).hide();
  }
  
  if(showGameScore == "true"){
    $(scoreDiv).show();
  }
  else{
   $(scoreDiv).hide();
  }
  
  if(showGameAttempts == "true"){
  showHideMeterControls();
  }
  else{
  $(speedometerDiv).hide();
  $(batteryDiv).hide();
  }
  
  loadHangManGameInstructions();
	getQuestionData();
	reArrangeAnswers();
  isNumbers = checkForNumbersInAnswerString();
  addGameAlphaBetsToGame();
  totalBlanksinaString = getTotalBlanksInAnswer();
  showHangManGameInstructions();
  unBindHangManGameControls();
  updateUserScore();
   
}

function showHideMeterControls(){
  if (ismobilDevice == true){
       $(speedometerDiv).hide();
	   $(batteryDiv).show();
	   }else{
		$(speedometerDiv).show();
		$(batteryDiv).hide();
	   }   
}
	
function updateUserScore(){
  var userScore = scoreTxt+" "+gameScore;
  $(scoreDiv).html(userScore);
  }

function loadHangManGameInstructions(){
  var instId = $(obj).find("instruction").attr("poid");
  var gameInstructionsTxt = $(contentLibXML).find("pageobject[id='"+instId+"']")[0].firstChild.data;
  var instTxtDiv = "#instTxt_"+objId;
  var instHead = "#instHeading_"+objId
  $(instHead).show();
  $(instTxtDiv).html(gameInstructionsTxt);
  var helpPoid = $(obj).find("help").attr("poid");
  helpTxt = $(contentLibXML).find("pageobject[id='"+helpPoid+"']")[0].firstChild.data;
  var gamehelpTxt = "#gamehelpTxt_"+objId;
  $(gamehelpTxt).html(helpTxt);
  $("#metercenter").hide();
  showInstPage = true;
  }

function showHangManGameInstructions(){
    //showInstructions("show");
    $(alphabetsDiv).hide();
	$(gameAreaDiv).addClass("hideGamearea");
    /*if ($(window).width() <= 620)
        $(gameAreaDiv).hide();
         else
        $(gameAreaDiv).show();*/
  var playGame = '#playgame_'+objId;
  $(playGame).fadeTo("fast",1);
  $(playGame).bind("click",function(){
       $(gameAreaDiv).removeClass("hideGamearea");
      showInstructions("hide");
      $(alphabetsDiv).show();
      $(gameAreaDiv).show();
  // bindGameControls();
 //  $(playbtn).prop("disabled",true);
//  $(playbtn).fadeTo("fast",0.5);
  // setContainerDiv();
  // drawGameBoxes();
  if( ismobilDevice == true)
  drawBatteryCanvas();
  else
    initSpeedometer();
    loadQuestionAnswer();
    bindHangManGameControls();
    convertGameSecsToMins(gametotalTime);
    showInstPage = false;
  })
  }

function showInstructions(val){
  var tblControls = "#tblControls_"+objId;
  gameInstructionsDiv = "#gameInstructions_"+objId;
  inst = "#instructions_"+objId;
  $(tblControls).show();
  if(val == "show"){
  $(inst).show();
  $(gameInstructionsDiv).show();
  
  }
  else{
  $(inst).hide();
  $(gameInstructionsDiv).hide();
  }
  }

function addGameAlphaBetsToGame(){
	var tempArr = alphabets.split(",");
	for(var i=0;i<tempArr.length;i++){
		var letter = tempArr[i];
		var letterId = letter+"_"+objId;
    var div = 	$("<div class='alphabet' id='"+letterId+"'> "+letter+"</div>");
  //  $(div).on("click",function(){
  //  var selectLetter = $(this).attr("id").split("_")[0];
   // validateHangman($(this),selectLetter);
   // })
    $(alphabetsDiv).append(div);
    alphabetsDivArr[i] = div;
	}
  if(isNumbers == true){
    var numberDiv = addNumbersTogame();
    $(alphabetsDiv).append(numberDiv);
  }

  $.each(alphabetsDivArr, function(i, obj) {
    $(this).on("click",function(){
       var selectLetter = $(this).attr("id").split("_")[0];
       validateHangman($(this),selectLetter);
    })
  })

 }

function addNumbersTogame(){
  var gameNumbersDiv = "gameNumbers_"+objId;
  var numbersDiv = $("<div id='"+gameNumbersDiv+"'</div>");
  var tempArr = numbers.split(",");
  for(var i=0;i<tempArr.length;i++){
    var letter = tempArr[i];
    var letterId = letter+"_"+objId;
    var div =   $("<div class='alphabet' id='"+letterId+"'> "+letter+"</div>");
   // $(div).on("click",function(){
  //  var selectLetter = $(this).attr("id").split("_")[0];
  //  validateHangman($(this),selectLetter);
   // })
    $(numbersDiv).append(div);
    alphabetsDivArr.push(div);
  }
  return $(numbersDiv);
}

function getQuestionData(){
	//contentLibXML
	$(xmlObj).find("question").each(function(){
		var questionPoid = $(this).attr("qpoid");
		var answerPoid = $(this).attr("answerpoid");
		var question = $(contentLibXML).find("pageobject[id='"+questionPoid+"']")[0].firstChild.data;
		var answer =  $(contentLibXML).find("pageobject[id='"+answerPoid+"']")[0].firstChild.data;
		var dataObject = new Object();
		dataObject.ques = question;
		dataObject.ans = answer;
		gameQuestionsArr.push(dataObject);
	})
	if(isRandamization == "true"){
		gameQuestionsArr = shuffle(gameQuestionsArr);
	}
}

function reArrangeAnswers(){
for(var i =0; i<gameQuestionsArr.length;i++){
      var displayans = gameQuestionsArr[i].ans;
      var compareans =  gameQuestionsArr[i].ans;
    displayans = displayans.replace(/[<]br[^>]*[>]/gi,""); // for removing <br> from string;
    displayans=  renderAnswerData(displayans);
    gameQuestionsArr[i].displayans = displayans;
    compareans = renderHTMLtoText(compareans);
    gameQuestionsArr[i].compareans = compareans;
    }

}

function loadQuestionAnswer(){
	var curQuestion;
	var curAnswer;
        curQuestion = gameQuestionsArr[gameCurrentQuestion].ques;
        curAnswer = gameQuestionsArr[gameCurrentQuestion].displayans;
        $(gameQuestionDiv).html(curQuestion);
        displayAnswersWithBlanks(curAnswer);
	

}
//////////////////////////// FOR MOBILE RENDERING //////////////////////////////////
function drawBatteryCanvas(){
$("#"+batteryCanvas).show();
$(batteryDiv).css({"width":"150px","height":"180px"})
canvas = document.getElementById(batteryCanvas);
var ht= 200;//$(".cdivheight").parent().height();
var wd= 100;//$(".cdivheight").parent().width();
    canvas.width  = wd;
    canvas.height = ht;
      context = canvas.getContext('2d');
	  context.beginPath();
	  context.rect(30, 10, 50, 100);
	  context.lineWidth = 3;
      context.strokeStyle = 'black';
      context.stroke();
	  context.rect(45,6,18,4);
	  context.stroke();
	 grd = context.createLinearGradient(156.000, 145.500, 0.000, 145.500);
     grd.addColorStop(0.000, 'rgba(69, 183, 7, 1.000)');
     grd.addColorStop(0.501, 'rgba(138, 247, 116, 1.000)');
     grd.addColorStop(1.000, 'rgba(69, 183, 7, 1.000)');;
	 context.fillStyle=grd;
	 updateBatteryMeter();
	// context.fillRect(33, 13, 44, 95);
}
function updateBatteryMeter(){
var initHt = 95;
var cnHt = 13;
var decreaseAmount;
if(incorrectAttempts >0){
var decPerAmount = Math.round((incorrectAttempts/gameAttempts)*initHt);
decreaseAmount = initHt - decPerAmount
cnHt = Math.round(cnHt+decPerAmount);
 }else{
 decreaseAmount = initHt;
 }
 context.clearRect(30, 10, canvas.width-50, canvas.height-100);
 canvas = document.getElementById(batteryCanvas);
    context = canvas.getContext('2d');
     context.beginPath();
     context.stroke();
     grd = context.createLinearGradient(156.000, 145.500, 0.000, 145.500);
     grd.addColorStop(0.000, 'rgba(69, 183, 7, 1.000)');
     grd.addColorStop(0.501, 'rgba(138, 247, 116, 1.000)');
     grd.addColorStop(1.000, 'rgba(69, 183, 7, 1.000)');;
	 context.fillStyle=grd;
 context.fillRect(33, cnHt, 44, decreaseAmount);
}
function initSpeedometer(){
    $(speedometerDiv).speedometer({ percentage: scaleVal || 0 });
    $(speedometerDiv).css("z-index", "0");
}

function updateSpeedometer(){
         scaleVal =  32 - (incorrectAttempts * eachAttemptval); 
         //alert("eachAttemptval :"+eachAttemptval+" scaleVal :"+scaleVal)     
        //$('#test').speedometer({ percentage: $('.speedometer').val() || 0 });
        $(speedometerDiv).speedometer({ percentage: scaleVal || 0 });
  }

function displayAnswersWithBlanks(str){
	var tempArr = [];
	tempArr = str.split("");
	for(var i=0;i<tempArr.length;i++){
		var letter = tempArr[i];
		var letterId = i+"_"+objId;
	 var div = 	$("<div class='answeralphabet' id='"+letterId+"'>"+letter+"</div>");
        if(letter == "_"){ 
		var blankValue = getBlankValue(i); // To make Answer Letter case sensitivity
	      $(div).data("letter" ,blankValue);
		  }
	    $(gameAnswerDiv).append(div);
        if (blankValue == " ") {
            $("#" + letterId).html(blankValue);
            $("#" + letterId).css('opacity', '0');
        }
		if (letter == " ") {
	        $("#" + letterId).css('opacity', '0');
     }
	    // $(gameQuestionDiv).html(curQuestion);
	}
}
 
 function getBlankValue(val){
 var curAnswer = gameQuestionsArr[gameCurrentQuestion].compareans;
 var tempArr = [];
 tempArr = curAnswer.split("");
 return tempArr[val];
 
 }
 function validateHangman(obj,str){
  var isCorrect = false;
var curAnswer = gameQuestionsArr[gameCurrentQuestion].compareans;
var tempArr = []; 
var tempArr = curAnswer.split("");
for(var i=0;i<tempArr.length;i++){
  var divId = "#"+i+"_"+objId;
if(str.toLowerCase() == tempArr[i].toLowerCase()){
  if($(divId).html() == "_"){
  var data = $(divId).data("letter");
  $(divId).html(data);
  correctAttempts = correctAttempts +1;
  isCorrect = true;
}
}
}
if(isCorrect == false){
if(showGameAttempts == "true"){
  incorrectAttempts = incorrectAttempts+1;
  if(ismobilDevice == false)
   updateSpeedometer();
   else
   updateBatteryMeter();
  }
  changeAlphabetButtonStatus(obj,false);
  if(enableGameSounds == "true")
    playHangManGameSounds("error");
}
else{
 changeAlphabetButtonStatus(obj,true);
 if(enableGameSounds == "true")
    playHangManGameSounds("passed");
}

if(correctAttempts == totalBlanksinaString){
clearInterval(countDownTimer);
    unBindHangManGameControls()
    disableAlphabets();
    gameScore = gameScore+scorePerCorrect;
    updateUserScore();
    questionComplete("passed");
    correctCounter = correctCounter+1;
    $(correctCounterDiv).html(correctCounter)
  

}
if(incorrectAttempts == gameAttempts && showGameAttempts == "true"){
clearInterval(countDownTimer);
    unBindHangManGameControls();
    disableAlphabets();
    questionComplete("failed");
    inCorrectCounter = inCorrectCounter+1;
     $(inCorrectCounterDiv).html(inCorrectCounter);
}

 }
 function renderAnswerData(str) {
    var LastCharacter = 0;
    while (str.indexOf('<span class="strikeLetter">', LastCharacter) != -1) {
        var SearchForThis = '<span class="strikeLetter">'
        var SeachForThis2 = "</span>"
        var FirstCharacter = str.indexOf(SearchForThis, LastCharacter)
        LastCharacter = str.indexOf(SeachForThis2, FirstCharacter)
        var findStr = str.substring(FirstCharacter, (LastCharacter)+7); // 7 = where SeachForThis2 length;
       str =  replaceEmptyString(FirstCharacter,findStr,str);
       LastCharacter = 0;
    }
  
    return str;
}

function replaceEmptyString(val,spanStr,str){
 var LastCharacter = 0;
 var SearchForThis = '>'
 var SeachForThis2 = '<'
  var FirstCharacter = str.indexOf(SearchForThis,LastCharacter)
   LastCharacter = str.indexOf(SeachForThis2, FirstCharacter)   //314
   var findStr = str.substring((FirstCharacter)+1, LastCharacter);
   if(findStr.length>1){
   	var tempArr = findStr.split("");
   	findStr = appendStr(tempArr);
   }
   else{
   	findStr = findStr.replace(findStr,"_");
   }
   var abc = [str.slice(0, val), findStr, str.slice(val)].join('');
   abc = abc.replace(spanStr,"");
   return abc;
    }

    function appendStr(arr){
    	var str = ""
    	for(var i=0;i<arr.length;i++){
    		var tempStr = arr[i];
    		tempStr = tempStr.replace(tempStr,"_")
    		str +=tempStr
    	}
    	return str;
  }

  function renderHTMLtoText(str){
       var div = $("<div></div>");
       $(div).html(str);
       var textStr =  $(div).text();
       return textStr;
  }

function getTotalBlanksInAnswer(){
var curAnswer = gameQuestionsArr[gameCurrentQuestion].displayans;
var tempArr = [];
var counter = 0;
var tempArr = curAnswer.split("");
for(var i=0;i<tempArr.length;i++){
    var letter = tempArr[i];
    var emptyStr =  getBlankValue(i);
    if (letter == "_" && emptyStr != " ") {
    counter = counter+1;
  } 
  }
  return counter;
}

function questionComplete(Qstatus){
  if(Qstatus == "passed"){
     correctScore = correctScore+1;
  }else{
    incorrectScore = incorrectScore+1;
  }
 $(inCorrectCounterDiv).html(inCorrectCounter);
 $(correctCounterDiv).html(correctCounter);  
  gameCurrentQuestion = gameCurrentQuestion+1;
  if(gameCurrentQuestion<gameTotalQuestions){
    setTimeout(function(){loadNextQuestion();}, 1000);
	 setTimeout(function(){enableAlphabets(); bindHangManGameControls();convertGameSecsToMins(gametotalTime)}, 2000);
	//setTimeout(function(){},2000);
  }
  else{
      disableAlphabets();
      unBindHangManGameControls();
	  clearInterval(countDownTimer);
	  if(correctScore == gameTotalQuestions){
	     setTimeout(function(){showCorrectIncorrectFeedback("pass")},1000);
	  }
	   else{
	      setTimeout(function(){showCorrectIncorrectFeedback("fail")},1000);
	   }
  }
}

function showCorrectIncorrectFeedback(stat){
   // JIRA ID - INST-9552
   try{
	   if(_isBootstrapSkin != undefined && _isBootstrapSkin == true){
		   $(gameInstructionsDiv).hide(); // added when migrating bootstrap
		   $(gameAreaDiv).hide(); // added when migrating bootstrap
	   }
   }catch(e){}
   
    $(gamePassFailDiv).show();
    clearAlphabetsCSS();
	var passFailPoid
	if(stat == "pass")
	   passFailPoid = $(xmlObj).find("onpass").attr("poid");
	else
	   passFailPoid = $(xmlObj).find("onfail").attr("poid");
	var passText = $(contentLibXML).find("pageobject[id='"+passFailPoid+"']")[0].firstChild.data;
	$(gamePassFailTextDiv).html(passText);
	$(gameAnswerDiv).html("");
	// JIRA ID - INST-9552
	try{
		if(_isBootstrapSkin != undefined && _isBootstrapSkin == true)
			$(gameInstructionsDiv).hide();
		else
			$(gameInstructionsDiv).show();
	}catch(e){$(gameInstructionsDiv).show();}
	
	 if(ismobilDevice == false)
	    $(speedometerDiv).hide();
		else
	   $(batteryDiv).hide();
	if (gameReset == true || gameReset == "true") {
	    $(gameRetakeBtn).show();
	    // $(gameRetakeBtn).fadeTo("fast", 1);
	} else {
	    $(gameRetakeBtn).hide();
	    // $(gameRetakeBtn).fadeTo("fast", 0.2);
	}
	$(alphabetsDiv).hide();
    $(gameQuestionDiv).hide();
    $(gameAnswerDiv).hide();
	 
 }

function loadNextQuestion(){
  $(gameAnswerDiv).html("");
  incorrectAttempts = 0;
  correctAttempts = 0;
   if(ismobilDevice == false)
   updateSpeedometer();
   else
   updateBatteryMeter();
  clearAlphabetsCSS();
  totalBlanksinaString = getTotalBlanksInAnswer();
  loadQuestionAnswer();
}

function clearAlphabetsCSS(){
  for(var i=0;i<alphabetsDivArr.length;i++){
    var div = alphabetsDivArr[i];
    var divClass = $(div).attr("class");
    if(divClass == "alphabets_wrong" || divClass == "alphabets_correct"){
      $(div).removeClass(divClass).addClass("alphabet");
      $(div).off("click").on("click",function(){
         var selectLetter = $(this).attr("id").split("_")[0];
         validateHangman($(this),selectLetter);
      })
    }
  }
}
function changeAlphabetButtonStatus(obj,bol){
if(bol == false)
$(obj).removeClass("alphabet").addClass("alphabets_wrong");
else
$(obj).removeClass("alphabet").addClass("alphabets_correct");

$(obj).unbind("click");
}

function  checkForNumbersInAnswerString(){
  var isNumbers = false;
  for(var i=0;i<gameQuestionsArr.length;i++){
    var answer = gameQuestionsArr[i].compareans;
     isNumbers= chkStringhasNumbers(answer);
     if(isNumbers == true)
     break;
  }

  return isNumbers;
}

/////////////////////////////// BUtton Event Methods//////////////////////////////
function showGameHelp(){
   if(isHelpOpen == false){
       $(gameInstructionsDiv).show();
       $(gameRetakeBtn).hide();
       $(helpDiv).show();
       $(alphabetsDiv).hide();
	   $(gameQuestionDiv).hide();
	   $(gameAnswerDiv).hide();
       onPauseHangManGame();
	    if(ismobilDevice == false)
	    $(speedometerDiv).hide();
		else
	   $(batteryDiv).hide();
       isHelpOpen = true;
	  
   }
   else{
       $(gameInstructionsDiv).hide();
       $(helpDiv).hide();
       $(alphabetsDiv).show();
       updateHelpVars();
     onPlayHangMan();
     isHelpOpen = false;
   }

}

$(helpClosebtn).bind("click", function () {
updateHelpVars();
onPlayHangMan();
});


function playHangManGameSounds(val){
if(muteGameAudio == false){
var audio = $(gameSound)[0];
if(val == "error")
audio.src = "Images/error.mp3";
else
audio.src = "Images/correct.mp3";
audio.load();
audio.play();
}
}

function onOffHangManGameSounds(obj){
var imgSrc = $(obj).find("img").attr("src");
var audio = $(gameSound)[0];
if(imgSrc == "Images/sound.png"){
audio.muted = true;
muteGameAudio = true;
$(obj).find("img").attr("src","Images/speaker_off.png");
}
else{
audio.muted = false;
muteGameAudio = false;
$(obj).find("img").attr("src","Images/sound.png");
}
}

function onPlayHangMan(){
$(playbtn).fadeTo("fast",0.5);
$(playbtn).prop("disabled",true);
$(playbtn).css('cursor','default');
$(pausebtn).fadeTo("fast",1);
$(pausebtn).prop("disabled",false);
enableAlphabets();
$(playbtn).unbind("click");
$(pausebtn).unbind("click").bind("click",function(){onPauseHangManGame();updateHelpVars();});
countDownTimer= setInterval(strtGameTimer,1000);
$(pausebtn).css('cursor','pointer');
}

function onPauseHangManGame(){
disableAlphabets();
clearInterval(countDownTimer);
$(pausebtn).fadeTo("fast",0.5);
$(pausebtn).prop("disabled",true);
$(playbtn).fadeTo("fast",1);
$(playbtn).prop("disabled",false);
$(pausebtn).css('cursor','default');
$(playbtn).css('cursor','pointer');
$(pausebtn).unbind("click");
$(playbtn).unbind("click").bind("click",function(){onPlayHangMan();updateHelpVars();});
}
$(gameRetakeBtn).bind("click", function () {
   
resetHangManGame();

})
/////////////////////////////////////////////////////////////////////////////
function unBindHangManGameControls(){
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
$(correctIncorrectDiv).fadeTo("fast",0.5);
if(showGameTime == "true")
  $(timeDiv).fadeTo("fast",0.5);

if(showGameScore == "true")
  $(scoreDiv).fadeTo("fast",0.5);
}
function bindHangManGameControls(){
$(".levelbox").fadeTo("fast",1);
if(showGameTime == "true")
  $(timeDiv).fadeTo("fast",1);
if(showGameScore == "true")
  $(scoreDiv).fadeTo("fast",1);
  $(correctIncorrectDiv).fadeTo("fast",1);
$(helpBtn).fadeTo("fast",1);
$(helpBtn).unbind("click").bind("click",showGameHelp);
$(soundBtn).fadeTo("fast",1)
$(soundBtn).unbind("click").bind("click",function(){onOffHangManGameSounds($(this));})
$(pausebtn).fadeTo("fast",1)
$(pausebtn).unbind("click").bind("click",function(){onPauseHangManGame();updateHelpVars();});
$(resetbtn).fadeTo("fast",1)
$(resetbtn).unbind("click").bind("click",function(){
resetHangManGame();updateHelpVars();});
$(level1btn).fadeTo("fast",1)
$(level1btn).unbind("click").bind("click",function(){gameHGLevel1Click();});
$(level2btn).fadeTo("fast",1)
$(level2btn).unbind("click").bind("click",function(){gameHGLevel2Click();});
$(level3btn).fadeTo("fast",1)
$(level3btn).unbind("click").bind("click",function(){gameHGLevel3Click();});
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

   function convertGameSecsToMins(secs)
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

if (minutes < 10)
    var min = "0" + minutes;
else
    min = minutes;

if (seconds < 10)
    var sec = '0' + seconds;
else
    sec = seconds;
var cTime = timeTxt + " " + min + " :" + sec;
$(timeDiv).html(cTime);
countDownTimer= setInterval(strtGameTimer,1000); 

}

 function strtGameTimer(){
if(minutes>=0){
if(seconds>0){
seconds = seconds-1;
}
else{
    if(minutes>0){
	minutes = minutes -1;
	seconds = 59;
	}
	else{
	}

}
}
if(minutes == 0 && seconds ==0){
clearInterval(countDownTimer);
    unBindHangManGameControls()
    disableAlphabets();
   /// gameScore = gameScore+scorePerCorrect;
   // updateUserScore();
    inCorrectCounter = inCorrectCounter + 1;
    questionComplete("failed");
   $(correctCounterDiv).html(correctCounter);
}
if (minutes < 10)
    var min = "0" + minutes;
else
    min = minutes;

if (seconds < 10)
    var sec = '0' + seconds;
else
    sec = seconds;
var cTime = timeTxt + " " + min + " :" + sec;
$(timeDiv).html(cTime);
}

function chkStringhasNumbers(str)
{
return /\d/.test(str);
}

function disableAlphabets(){
  for(var i=0;i<alphabetsDivArr.length;i++){
    var obj = alphabetsDivArr[i];
    $(obj).off("click");
    $(obj).css("cursor","default")
    $(obj).fadeTo("fast",0.5);
  }
}

function enableAlphabets(){
  for(var i=0;i<alphabetsDivArr.length;i++){
    var obj = alphabetsDivArr[i];
    $(obj).css("cursor","pointer")
     $(obj).off("click").on("click",function(){
       var selectLetter = $(this).attr("id").split("_")[0];
       validateHangman($(this),selectLetter);
     });
       $(obj).fadeTo("fast",1);
  }
}

function updateHelpVars(){
if(isHelpOpen == true){
$(gameInstructionsDiv).hide();
$(helpDiv).hide();
isHelpOpen = false;
$(alphabetsDiv).show();
$(gameQuestionDiv).show();
$(gameAnswerDiv).show();
 showHideMeterControls();
}
}
///////////////////////// Refresh Game on Page Navigation ///////////////////////////
this.clearGameTimer = function(val){
clearInterval(countDownTimer);
hours="";
minutes = "";
seconds = "";
canvas = document.getElementById(batteryCanvas);
context = canvas.getContext('2d');
context.clearRect(0, 0, 100, 200);
}

function resetHangManGame() {
 $(gameAnswerDiv).html("");
  incorrectAttempts = 0;
  correctAttempts = 0;
  inCorrectCounter = 0;
  correctCounter = 0;
  correctScore = 0;
  gameCurrentQuestion = 0;
   $(inCorrectCounterDiv).html(inCorrectCounter);
  $(correctCounterDiv).html(correctCounter);
  if(isRandamization == "true")
  gameQuestionsArr = shuffle(gameQuestionsArr);
  enableAlphabets();
  updateHelpVars();
  bindHangManGameControls()
  clearAlphabetsCSS();
  $(gameInstructionsDiv).hide();
  totalBlanksinaString = getTotalBlanksInAnswer();
  loadQuestionAnswer();
  clearInterval(countDownTimer);
  hours=0;
  minutes=0;
  seconds=0;
  $(timeDiv).html("");
  $(playbtn).prop("disabled",true);
  $(playbtn).fadeTo("fast",0.5);
  $(pausebtn).fadeTo("fast",1);
  $(pausebtn).prop("disabled",false);
  $(playbtn).css('cursor','default');
  $(pausebtn).css('cursor','pointer');
  gameScore = 0;
  updateUserScore();
  convertGameSecsToMins(gametotalTime);
  showHideMeterControls();
  $(alphabetsDiv).show();
  $(gameQuestionDiv).show();
  $(gameAnswerDiv).show();
  $(gameAreaDiv).show();
  $(playbtn).unbind("click");
$(pausebtn).unbind("click").bind("click",function(){onPauseHangManGame();updateHelpVars();});
 if(ismobilDevice == false)
   updateSpeedometer();
   else
   updateBatteryMeter();
   // JIRA ID - INST-9552
    try{
   	 if(_isBootstrapSkin != undefined && _isBootstrapSkin == true){
      var gamePassfailDiv2 = "#gamepassfail_" + objId; // added when migrating bootstrap
   //  alert("KKK");
      $(gamePassfailDiv2).hide(); // added when migrating bootstrap
	  $(gameAreaDiv).show(); // added when migrating bootstrap
	 }
	}catch(e){}
}

function gameHGLevel1Click(){
  if(currentGameLevel != 1){
  resetGameLevelClass(currentGameLevel);
  gametotalTime = level1Time;
  currentGameLevel = 1;
  $(level1btn).removeClass("gamelevels").addClass("gamelevelSelected");
  resetHangManGame()
  }
}

function gameHGLevel2Click(){
  if(currentGameLevel != 2){
  resetGameLevelClass(currentGameLevel);
  gametotalTime = level2Time;
  currentGameLevel = 2;
  $(level2btn).removeClass("gamelevels").addClass("gamelevelSelected");
  resetHangManGame()
  }
}

function gameHGLevel3Click(){
  if(currentGameLevel != 3){
  resetGameLevelClass(currentGameLevel);
  gametotalTime = level3Time;
  currentGameLevel = 3;
  $(level3btn).removeClass("gamelevels").addClass("gamelevelSelected");
  resetHangManGame();
  }
}

function resetGameLevelClass(val){
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
  
  $.fn.isBound = function(type, fn) {
    var data = this.data('events')[type];

    if (data === undefined || data.length === 0) {
        return false;
    }

    return (-1 !== $.inArray(fn, data));
  };

 // window.onorientationchange = function () {
     // showHideGameAreaDivOnInstPageInMobile();
 // }

  function showHideGameAreaDivOnInstPageInMobile(){
      if ($(window).width() <= 620 && showInstPage == true) {
          $(gameAreaDiv).hide();
      } else {
          $(gameAreaDiv).show();
      }
  }
  
  }

