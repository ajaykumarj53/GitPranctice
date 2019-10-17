//content Object
// skin version details
var skinDetails = new Object();
skinDetails.version = "1.0.2";
skinDetails.releasedate = "12/04/2012, 07:45 PM IST";
skinDetails.feature = "Dynamic Skin";
skinDetails.developer = "Sandeep V";
// end of verion details

var isMandatory = true;
var currentPage = 0;
var prevPage = 0;
var totalPages = 0;
var innerPage = 0;
var currPageObject;
var objType = "co";
var SeqID = 0;
var prevSeqID = 0;
var nObjSeqId = 0;
var targetPath = "";
var retakeClicked = false;
var textEntry = false;

var pageLoaded = false;
var isAnswered = false;
var isSubmitted = false;
var contentXML;
var contentLibXML;
var questionsArray = new Array();
var summaryTable = "";
var summaryColumns = 2;
var visitedPagesArray = new Array();
var bAutoCompletePercentagePages = true;
var bkpPagesArray;
var bkptempPagesArray;
///////////////////////////////XML Vars
var pageXML;
//for NOA
var noa = "Unlimited";
var allowedAttempts = 0;
var nosummary;
var isLongAnswer = false;
var isSetQuestionData = false;
var BuyedAttempts;
var IskeybordEvent = true;

var submitted = false;
var startcourse = false; // Ananta - for starting the course from beginning

//Ananta - 9/1/17 freesample variables
var isfreesamplecourse = false; 
var samplepages;
var EnableFreeSample = "no";
var isinstancycontent = true;
var timerStarted = false;
var assessmentStatus = "failed";
var ShowWarning = "false";
var tmStartTime = new Date().getTime(); // initialize the start time. Will be used later to find the time spent in the lesson
var isTrackCommit = false;
var isTOCOpen = false;
var isFocus = null;
//// Remedation variables//////////////
var lastRemedPage;
var lastRemedActive = false;
var isReturnPageActive = false;
var isReturnPageNum;
var disableNext_ansCorrect = false;
var isrelaunchsummarydirectly = false; // using this for No. of attempts calc on relaunch in summary.
var AssessorService = "false"
var isalredyOnunloadCalled = false;
//Variables for Assessment Options

// CC TEXT Variables..///////////////
//var isTranscriptAvailable = "yes";
var ccstate = "off";
var Notestate = "off";
var Pollstate = "off";
//////////////////////////////////////
checkReatt_Onfail = "Unlimited";
reatt_Onfail = "Unlimited";
turnTimer = "off";
limitHrs = "00";
limitMin = "00";
limitSec = "00";
timerType = "Digital Clock";
timerStyle = "time expired";
FwarnHrs = "00";
FwarnMin = "00";
FwarnSec = "00";

SwarnHrs = "00";
SwarnMin = "00";
SwarnSec = "00";

warnText = "Warning Text";
isSection = "no";
isEnableSectionInst = "no";
tmId = "";
//variables for MatchGame 
var pageMatchWidgetArr = [];
//variables for Scorm

var bSCORM12Enabled = false;
var strLessonStatus = "";
var strLessonLocation = "";
var tracksuspendeddata = "";
var trStatus = "";
var tmStartTime = new Date().getTime(); // initialize the start time. Will be used later to find the time spent in the lesson
var pagelaunchedfromroot = false;
// try to get the SCORM API object. Variable objAPI has been declared inside the SCORM wrapper

bDisableAPINotFoundError = true; // Stops the error message when a SCORM API is called

var nPercentageOfPagesRequiredForCompletion = 100;
// end of scorm variables

var beforeUnloadFlag = true;
var showSummaryPassFailTextcnt = 0;
var isremPage = false;   // using this var disable TOC in Remendation page.

var isattemptscompleted = false;   // using this var navigation between the objects calculataion.
// variables for session security
var parentUrl = "";
var intervalID;
var sestime1 = 60000; // The time after which User Session needs to be checked for the first time when each page loads (in milli seconds)
var sestime2 = 60000; // The time after which User Session needs to be checked at regular interval of time (in milli seconds)
var netMsg = "";
var isAudioPop = false;
var UsernotePageID = 0;
var isSurveycommited = false;
var ratQtn;
var ratPage;
var touchObj;
//--krishna -- for IOS offline tracking 

var nativeCID = "";
try {
    nativeCID = fnGetQueryString("cid");
}
catch (e) {
    nativeCID = "";
}
//--End -- IOS offline tracking
// Summary page vars
var logoArr = ["images/green-icon.png", "images/red-icon.png", "images/yellow-icon.png"];
// Added by maheedhar for CoEditor 5.9 version
// Booleans for hidetopic for summary rendering
var isTopicHeadingAdded = false;
var isSubtopicHeadingAdded = false;

var summaryQuestionNum = 0; 
var preventNavigation = false;
var isNoDocAttached = true;
var attachCountLA = 0;
// for essay question enhancement
var attachmentType = "";
var currCapVideoObjId = ""
var currCapImageObjId = ""

/**************** 29-10-2014 - Randomization in CO ************/
// Randomized questions sequence array
//var randomQuesSeqArray = new Array("1","3","2","4","6","5","8","7","9","14","12","11","13","10","16");
var randomQuesSeqArray = new Array();
var openPageAdded = false;
var isRandomized = false;
var randomizedPageObjectsArray = new Array();
var feedbackDiv = "";
var backupPagesArray = new Array();
var VideoOfflinetext = "You Need An Internet Connection TO Play this video";
var defaultLanguage = "english";
var selectedLanguage = "english";
var currPrintPageCnt = 0;
var printAllContnet = "";
var printJsAdded = false;
var showingContextMenu = false;
var VisitedPagesNonTracing = "";
var VisitedPageCount = 0;
var currentTopicObject;
var totalPagesInTopic;
var currentTopicNumber;
var currentTopicPagesArr = [];
var availableTopicsIntheObject = [];
/**************** 29-10-2014 - Randomization in CO ************/
/**********************************************************************************************************
********************************This method is used to find object change**********************************
**********************************************************************************************************/
var _isBootstrapSkin = false;
var isConnectedToInternet = true;
var userPreferedLang = "english";
var maxFontIncrements = 3;
var minFontDecrements = -3;
var currentFontIncrement = 0;
/* Course Hints Config */
var courseHints = "no";
var maxHints = "unlimited";
var courseHintsArr = [];
var hintsCount = 0;
var SummarySuccessPagecount = 0;  // Added this var for loading all pages in summary.
var courseProgressFontColor = "#000000";
var IsAICC = false;   // Bhushanam Added this var for AICC compatible.
var Attachfilescount = 0  // Bhushanam added no. attach files Essay question.

var globalsearchKeyword = "";

var isjwVideocompleted = true;  //on 25th April 2017
function checkObjectChange(id) {   
    var tempSeqID = getSeqIDByIndex(id);
    nObjSeqId = tempSeqID;
	if(tempSeqID != prevSeqID)
	{
	    //SeqID = prevSeqID;
	    onContentUnload();
	    
        SeqID = tempSeqID;
        try {
            LMSSetTrackBookmark();
        } catch (e) { }


        LMSTrackInitialize(); //Mandatory SCORM call to initialize the SCORM communication

        objType = isTrack == "yes" ? trackObjects[SeqID].type.toLowerCase() : trackObjects[0].type.toLowerCase();
        $("#wrapper").fadeIn("fast");

        if (objType == "assessment")
            $("#saveBtn").show();

        $("#GlossaryBtn").hide();
        // --- Bhushanam : show/hide CC button..
        if (objType == "content object" || objType == "contentobject") {
            if (trackObjects[SeqID].isTranscriptAvailable == "yes") {
                $("#ccBtn").show();
            }
            else {
                $("#ccBtn").hide();
            }
            // --- Bhushanam : show Glossary button..
            if (trackObjects[SeqID].glossarylink != "") {
                if (fnGetQueryString("cid") == "")
                    $("#GlossaryBtn").show();
                else
                    $("#GlossaryBtn").hide();
                
                $("#GlossaryBtn").bind("click", function() {
                //window.open(trackObjects[SeqID].glossarylink, '_blank', 'width=580,height=440,resizable=no')               
				    openGlossary();
				});
            }

            // --- Raghu : show/hide Custom Font buttons..
            if (objType == "content object" || objType == "contentobject") {
                if (trackObjects[SeqID].allowfontincrease == "yes") {
                    $(".font-plus").show();
                }
                else {
                    $(".font-plus").hide();
                }
            }
                // --- *** END ***---
        }
	    // --- End. 
	    //added by ajay to  show hide search button 
        if (trackObjects[SeqID].enablesearch == "yes") {
            if (trackObjects[SeqID].navigation.toLowerCase() == "forward only" || trackObjects[SeqID].tocseqeuncenavigation=="yes") {
                $(".search-btn").hide();
            }
            else {
                $(".search-btn").show();
            }
        

        }
        else {
            $(".search-btn").hide();
        }
        addDiscussionLink();
        getBookmark();

        //if (objType == "assessment") findNoa();
        strLessonStatus = LMSGetLessonStatus();
        //alert(strLessonStatus);
        if (strLessonStatus == "" || strLessonStatus == "not attempted") {
            LMSSetLessonStatus("incomplete")
        }
        if (objType == "assessment") {
            noa = trackObjects[SeqID].allowedattempts;
            GetPreviousAnswers();
        }

        //updateTrackStatus();
	}
}
function openresource() {

    var res_filepath = "";
    var popupTitle = "";
    res_filepath = "ins_resources.html";
    popupTitle = resourcepopuptitle;
    $("#resourcesPopup").dialog({
        draggable: false,
        height: 350,
        width: '80%',

        modal: true,
        open: function () {
            $(this).load(res_filepath, null, function () {
                
            });
            $('.full-expand').hide();
        },
        close: function () {
            if ($(window).width() < 550) {
		    $('.full-expand').show();
            }
        },
        title: popupTitle

    });
    $("#resourcesPopup").show();
    /* To remove horizontal scroll in mobile view - Maheedhar*/
    $("#resourcesPopup").css({ "word-break": "break-word" });
}
///////////// ************** This Method is used to Open Glossary Popup Window in internal Popup Window//////////
function openGlossary(){
  
    var glossaryfilepath = "";
    glossaryfilepath = location.href.substring(0, location.href.toLowerCase().indexOf("content") - 1) + trackObjects[SeqID].glossarylink;

    $("#glossaryPopup").dialog({
      draggable: false,
        height: 350,
        width: '80%',     
	 modal: true,
	  open: function ()
            {
                //$(this).load(trackObjects[SeqID].glossarylink, null, function() {
      $(this).load(glossaryfilepath, null, function() {
      $(this).find("#tbl_glossaryTitle").hide();
     });
			$('.full-expand').hide();
		},
	  close: function(){
	  //var hash = document.URL.split('#')[0];
	  //document.URL = hash
	 // window.history.back();
            if ($(window).width() < 550) {
			$('.full-expand').show();
            }
	  },
			title: 'Glossary'

  });
  $("#glossaryPopup").show();
  //$("#glossaryPopup").load(String(trackObjects[SeqID].glossarylink));
 //$("#glossaryPopup").show();
  /* $("#glossaryPopup").load(trackObjects[SeqID].glossarylink, function() {
        $("#glossaryPopup").dialog("open");
    }); */
  }
  
/**********************************************************************************************************
********************************This method is called on next button click*********************************
**********************************************************************************************************/
//Sunny on 2nd May 2017
function TrimSuspendData(strSusData) {
    //debugger;
    var newstrSusData = "";
    var oldstrSusData = "";
    oldstrSusData = strSusData;
    if (oldstrSusData != undefined && oldstrSusData != "") {
        var ValueToBeRemoved = (Number(innerPage) + 1).toString();
        oldstrSusData = (oldstrSusData.split("#")[2]).toString();
        var pgarr = oldstrSusData.split(";");
        for (z = 0; z <= pgarr.length - 1; z++) {
            if (pgarr[z].toString() != "") {
                if (pgarr[z].toString() != ValueToBeRemoved) {
                    if (newstrSusData == "")
                        newstrSusData = pgarr[z].toString();
                    else
                        newstrSusData = newstrSusData + ";" + pgarr[z].toString();
                }
            }
        }
  }
   
    if (newstrSusData == "") {
        newstrSusData = "#pgvs_start#" + newstrSusData + "#pgvs_end#";
    } else {
        newstrSusData = "#pgvs_start#" + newstrSusData + ";#pgvs_end#";
    }

    $(".tblTOC div table tr td").find("span[pagenum='" + Number(innerPage) + "']").attr("visited", 'false');
    $(".tblTOC div table tr td").find("span[pagenum='" + Number(innerPage) + "']").parent().parent().children(0).children(0).attr("src", "images/bullet.gif")
    return newstrSusData;
 }

function UpdateSuspendDataOnAttempt() {
    //debugger;
    if (currPageObject.iscoao == "ao") {
        var UserAns = currPageObject.useranswer;
        if (currPageObject.Qtype.toLowerCase() == "matrix") {
            if (currPageObject.status == "Not Attempted") {
                UserAns = "";
            }
        } else if (currPageObject.Qtype.toLowerCase() == "rating") {
            if (UserAns != undefined) {
                var ratingAnswered = false;
                var ratingAnswer = UserAns.split("##");
                for (r = 0; r <= ratingAnswer.length - 1; r++) {
                    var ans = ratingAnswer[r].split("@")[1];
                    if (ans != 0) {
                        ratingAnswered = true;
                        break;
                    }
                }
                if (ratingAnswered == false) {
                    UserAns = "";
                }
            } else {
                UserAns = "";
            }
        } else if (currPageObject.Qtype.toLowerCase() == "draganddrop") {
            if (UserAns != undefined) {
                if (UserAns.split("##")[0] == "" || UserAns.split("##")[0] == undefined) {
                    UserAns = "";
                }
            } else {
                UserAns = "";
            }

        } else if ((currPageObject.Qtype.toLowerCase() == "singleselect" || currPageObject.Qtype.toLowerCase() == "multipleselect" || currPageObject.Qtype.toLowerCase() == "longanswer" || currPageObject.Qtype.toLowerCase() == "truefalse" || currPageObject.Qtype.toLowerCase() == "fillintheblank") && (UserAns == undefined || UserAns == "NaN" || UserAns == "NAN" || UserAns == "nan" || UserAns == "undefined")) {
            UserAns = "";
        }
        if (UserAns == "" && UserAns != undefined && UserAns != "NaN" && UserAns != "NAN" && UserAns != "nan" && UserAns != "undefined") {
            var strSusData = LMSGetValue("cmi.suspend_data");
            strSusData = TrimSuspendData(strSusData);
            LMSSetValue("cmi.suspend_data", strSusData);
        }
        else if (UserAns != "" && UserAns != undefined && UserAns != "NaN" && UserAns != "NAN" && UserAns != "nan" && UserAns != "undefined") {
            $(".tblTOC div table tr td").find("span[pagenum='" + Number(innerPage) + "']").attr("visited", 'true');
            $(".tblTOC div table tr td").find("span[pagenum='" + Number(innerPage) + "']").parent().parent().children(0).children(0).attr("src", "images/tick.gif")
        }
    }
}
// End Sunny

function nextPage() {
    debugger;
   
	if(preventNavigation == false){
	    
		try{
			var canGo = chkIfDisabledByRules(currentPage, "undefined", "next");
			touchObj.off("panleft panright panup pandown")
		}catch(e){
			var canGo = true;
		}
		if (canGo) {
		if(isfreesamplecourse == true && EnableFreeSample == "yes"){
		//currentPage =  Number(currentPage) + 1;		 
		if (samplepages!= undefined || samplepages!= ""){
		    if((Number(currentPage) + 1) >= Number(samplepages) || trackObjects[SeqID].singleqtnperpage == "no"){
			openFreeSamplePurchaseAlert();
			return;
		}
		}
		}
		if (lastRemedActive == true) {
			if(!isReturnPageActive){
		        lastRemedActive = false;
		        gotoPage(lastRemedPage);
		        lastRemedPage = "";
		        return;
		    }
			else{
				lastRemedActive = false;
				gotoPage(isReturnPageNum);
				lastRemedPage = "";
				isReturnPageActive = false;
				isReturnPageNum = "";
				return;
			}
		}
		
		if (innerPage + 1 == trackObjects[SeqID].pages) {
			if (arrAllObjects[SeqID + 1] != undefined || arrAllObjects[SeqID + 1] != null)
			if (arrAllObjects[SeqID + 1].state == "disabled" || arrAllObjects[SeqID + 1].state == "hidden") {
				$(".tblTOC div table tr td span[pageNum='" + (currentPage + 1) + "'][type='page']").click();
				return;
			}
		}
		
		try{
	//	if( submitted == false)		
	//		SendTinCanStatement();
			// Below Code is updated For Restrict user to Navigate forward and Enable Remediation Functionallity//

		  

		try{
		 if (objType == "content object" || objType == "contentobject"){
			 if( trackObjects[SeqID].chkcontraintfornavigation != "no") {
				try {
				//if(isCoAoType() == "ao")
				//{if (checkAnswers("next") == false )
				//	return;
				//}
				    //Sunny on 9th May 2017 For "User Responses are not Saving in DB"
				if (trackObjects[SeqID].singleqtnperpage == "no") {
				    if (checkAnswers("next") == false)
				        return;   //checkAnswer();						
				} else {
				    if (isCoAoType() == "ao") {
				        if (checkAnswers("next") == false)
				            return;
				    }
				}
                    //End Sunny
				if (isinstancycontent == true) {
				    SaveQuestionData();//13-07-2016 :  Bhushanam added this code for update the each question data to DB.
				}
				}catch(e){ }
			 }else{
			     if (getCoValues("Qtype").toLowerCase() == "longanswer" && (this[("isRequriedAttachLA" + Number(innerPage+1))] || checkForVideoCapture() || checkForImageCapture())) {
					if (checkAnswers("next") == false )
					    return;
					if (isinstancycontent == true) {
					    SaveQuestionData();//13-07-2016 :  Bhushanam added this code for update the each question data to DB.
					}
			   }else{
			         checkAnswer();
			         if (isinstancycontent == true) {
			             SaveQuestionData();//13-07-2016 :  Bhushanam added this code for update the each question data to DB. 
			         }
			   }
			 }
		 }
		} catch (e) { }

		//Sunny on 2nd May 2017
		//debugger;
		if (currPageObject.type != "summary") {
		    if (trackObjects[SeqID].suspenddataupdateonattempt != undefined) {
		        if (trackObjects[SeqID].suspenddataupdateonattempt == "yes") {
		            UpdateSuspendDataOnAttempt();
		        }
		    }
		}
		//End Sunny

		if (tincan.recordStores.length > 0) {
		    SendTinCanAnswerStatement();
		}
		// Added by maheedhar for singlepagerendering in co on 16-10-2014
			if (objType == "assessment" || isRemediate() == "yes" ||  trackObjects[SeqID].singleqtnperpage == "no")
			{
			   if((objType == "content object" || objType == "contentobject") && trackObjects[SeqID].singleqtnperpage == "no"){
			      if(navigateURL("next") == false){
				    return false;
				  }
			   }else{
			      navigateURL("next");
			   }
			}
			else if (innerPage < trackObjects[SeqID].pages - 1 || isTrack == "yes") {
				innerPage++;
			}
		} catch (e)
		{
			if (innerPage < trackObjects[SeqID].pages - 1 || isTrack == "yes") 
				innerPage++;
		}
		try{
			if (objType == "content object" || objType == "contentobject") {
				var coNext = "yes";
				if (innerPage < trackObjects[SeqID].pages -1)
				{		
				if (isRemediate() == "yes") {
					coNext = "no";
						}
					}
				}
		  
		}
		catch (ex)
		{ }


		try{
		    if (trackObjects[SeqID].optionlevelfeedback == "yes" && trackObjects[SeqID].singleqtnperpage == "yes") {
		           var pgType = getCoValues("Qtype").toLowerCase();
		           if (pgType == "singleselect" || pgType == "truefalse") {
		                var pgId = $('input[name=radio][id^="inst_op"]:checked').attr("branchedPageId");
		                if (pgId != "" && pgId != undefined) {
		                    if (document.getElementById("submitbut") == null) {
							     var pgObj = getPageObjectById(pgId);
								if(pgObj!= undefined){
									var optId = $('input[name=radio][id^="inst_op"]:checked').attr('id');
									var optNum = optId.substr(7, optId.length);
									var str = $("#optionfeedback" + optNum).html();
									showFeedbackPopup(str);
									return;
								}
		                    }else {
		                    //console.log($('input[name=radio][id^="inst_op"]:checked').attr("branchedPageId")+"<------------ branchedPageId");
		                        var pgObj = getPageObjectById(pgId);
								if(pgObj!= undefined){
									pgObj.branchedFrom = getCoValues("pageid");
									//gotoPage(pgObj.pageNumber);
									innerPage = pgObj.pageNumber;
									innerPage = getInnerPage(innerPage);
									preventNavigation = true;
									beforegotoPage();
									return;
								}
		                    }
		                }

		            }else{
		                clearAllBranchedPages();
		            }
		    }
		}catch(e){}

		if (isAnswered || coNext == "yes" || objType == "media resource" || objType == "document" && lastRemedActive == false) {
		   preventNavigation = true;
		   beforegotoPage();
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////
		}
	    $("#opennotePopup").hide();
	}
	//setTimeout(reAssignSwipeEvents, 1000);
	// End of nextPage

}
//13-07-2016 :  Bhushanam added this code for update the each question data to DB on next button click.
function SaveQuestionData() 
{
    debugger;
	//alert(innerPage);
	 var randomizationEnabled = trackObjects[SeqID].questionrandomization.toLowerCase();	
	  if (trackObjects[SeqID].singlePageRendering == "yes") {
			var index = 0;
			for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
				var arrQA = getPageByIndex(i);
				  if (arrQA.iscoao == "ao" && arrQA.type != "summary") { 
					var randomizationEnabled = trackObjects[SeqID].questionrandomization.toLowerCase();		
					if (arrQA.useranswer != "" && arrQA.useranswer != undefined && arrQA.useranswer != "NaN" && arrQA.useranswer != "NAN" && arrQA.useranswer != "nan" && arrQA.useranswer != "undefined" && arrQA.status != undefined && arrQA.status != "") {
					   if (trackObjects[SeqID].testType != '8' ){  
							if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){ 
								arrQA.Qid = Number(arrQA.actualPageNumber)+1; 
							}else{ 
								arrQA.Qid = Number(arrQA.pageNumber) + 1;
							} 
						}else{
							if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){ 
							  arrQA.Qid = arrQA.actualPageNumber; 
							}else{ 
							  arrQA.Qid = arrQA.pageNumber;
							} 				
						}
						LMSSetQuestionData(arrQA, index); 
					}
					index = index + 1;
				}
			}
		}
		else
		{
			var arrQA = getPageByIndex(innerPage);
			if (arrQA.iscoao == "ao" && arrQA.type != "summary") 
			{
			    if (arrQA.useranswer != "" && arrQA.useranswer != undefined && arrQA.useranswer != "NaN" && arrQA.useranswer != "NAN" && arrQA.useranswer != "nan" && arrQA.useranswer != "undefined" && arrQA.status != undefined && arrQA.status != "") { //Sunny on 2nd May 2017
			        if (trackObjects[SeqID].testType != '8') {
			            if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)) {
			                arrQA.Qid = Number(arrQA.actualPageNumber) + 1;
			            } else {
			                arrQA.Qid = Number(arrQA.pageNumber) + 1;
			            }
			        } else {
			            if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)) {
			                arrQA.Qid = Number(arrQA.actualPageNumber);
			            } else {
			                arrQA.Qid = Number(arrQA.pageNumber);
			            }
			        }
			        LMSSetQuestionData(arrQA, innerPage);
			    }
			    //if (trackObjects[SeqID].testType != '8' ){
				//	if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){ 
				//		arrQA.Qid = Number(arrQA.actualPageNumber)+1; 
				//	}else{ 
				//		arrQA.Qid = Number(arrQA.pageNumber) + 1;
				//	} 
				//}else{
				//	if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){ 
				//		arrQA.Qid = Number(arrQA.actualPageNumber); 
				//	}else{ 
				//		arrQA.Qid = Number(arrQA.pageNumber);
				//	} 
                //} 				
			    //LMSSetQuestionData(arrQA, innerPage); 
			}
		}

   }
function isCoAoType(){
var coaotype = "co";
	for (k=0;k< pages[SeqID].length;k++) 
	{
		if(pages[SeqID][k].type != "topic"){
				if (pages[SeqID][k].pageNumber == currentPage){
					if (pages[SeqID][k].iscoao != undefined) {
						return coaotype = pages[SeqID][k].iscoao;
					}else
						return coaotype;
					}
		}else{
			for (j=0;j< pages[SeqID][k].pages.length;j++) 
			{
			    if (pages[SeqID][k].pages[j].type != "topic") {
			        if (pages[SeqID][k].pages[j].pageNumber == currentPage) {
			            if (pages[SeqID][k].pages[j].iscoao != undefined) {
							return coaotype = pages[SeqID][k].pages[j].iscoao;
						}else
							return coaotype;
					}
				}
			    else {
			        for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
			            if (pages[SeqID][k].pages[j].pages[m].pageNumber == currentPage) {
			                if (pages[SeqID][k].pages[j].pages[m].iscoao != undefined) {
			                    return coaotype = pages[SeqID][k].pages[j].pages[m].iscoao;
			                } else
			                    return coaotype;
			            }
			        }
			    }
				//if (pages[SeqID][k].pages[j].type=="page")
				//{
				//	if (pages[SeqID][k].pages[j].pageNumber == currentPage)
				//	{
				//		if (pages[SeqID][k].pages[j].iscoao != undefined) 
				//		{				
				//			return coaotype = pages[SeqID][k].pages[j].iscoao;
				//		}else
				//			return coaotype;
				//	}
				//}
			}
		  
		}
	}

	//return remediate; 
}
// end..


function setCOPageValues(ind, valueName, valueType) {
    if (valueName != null && valueName != undefined)
        valueName = valueName.toLowerCase();
    for (k = 0; k < pages[SeqID].length; k++) {
		if(pages[SeqID][k].type != "topic"){
            if (pages[SeqID][k].pageNumber == ind) {
		        if (valueName == "pagecompletion") {
		            if (pages[SeqID][k].pageComplete == undefined || pages[SeqID][k].pageComplete == "" || pages[SeqID][k].pageComplete == "inprogress" || pages[SeqID][k].pageComplete == "completed") {//if (pages[SeqID][k].pageComplete == undefined || pages[SeqID][k].pageComplete == "inprogress") {
		                pages[SeqID][k].pageComplete = valueType;
		            }
		        }
		        if (valueName == "iscoao") {
		            pages[SeqID][k].iscoao = valueType;		                
		        }

		        if (valueName == "type") {
		            pages[SeqID][k].type  = valueType;		  
		        }

		        if (valueName == "useranswer") {
		            pages[SeqID][k].useranswer = valueType;		  
		        }
		        if (valueName == "usertextresponses") {
		            pages[SeqID][k].usertextresponses = valueType;
		        }
		        if (valueName == "status") {
		            pages[SeqID][k].status  = valueType;		  
		        }		
		        if (valueName == "correctAnswer") {
		            pages[SeqID][k].correctAnswer = valueType;
		        }
		        if (valueName == "filename") {
			    pages[SeqID][k].filename = valueType;
			}
			if (valueName == "fileid") {
			    pages[SeqID][k].fileid = valueType;
			}
			if (valueName == "optionnotes") {
			    pages[SeqID][k].optionnotes = valueType;
			}
			// for essay question enhancement
			if (valueName == "capturedvidfilename") {
				pages[SeqID][k].capturedvidfilename = valueType;
			} 
			if (valueName == "capturedvidid") {
				pages[SeqID][k].capturedvidid = valueType;
			} 
			if (valueName == "capturedimgfilename") {
				pages[SeqID][k].capturedimgfilename = valueType;
			} 
			if (valueName == "capturedimgid") {
				pages[SeqID][k].capturedimgid = valueType;
			} 
			// for essay question enhancement
		    }
		}else{
            for (j = 0; j < pages[SeqID][k].pages.length; j++) {
			    if (pages[SeqID][k].pages[j].type == "page") {
                    if (pages[SeqID][k].pages[j].pageNumber == ind) {
					    if (valueName == "pagecompletion") {
			                if (pages[SeqID][k].pages[j].pageComplete == undefined || pages[SeqID][k].pages[j].pageComplete == "" || pages[SeqID][k].pages[j].pageComplete == "inprogress") {//if (pages[SeqID][k].pages[j].pageComplete == undefined) {
					            pages[SeqID][k].pages[j].pageComplete = valueType;
					        } else
					            pages[SeqID][k].pages[j].pageComplete = valueType;
					    }
					    if (valueName == "iscoao") {
					        pages[SeqID][k].pages[j].iscoao = valueType;
					    }

					    if (valueName == "type") {
					        pages[SeqID][k].pages[j].type = valueType;
					    }

					    if (valueName == "useranswer") {
					        pages[SeqID][k].pages[j].useranswer = valueType;
					    }
					    if (valueName == "usertextresponses") {
			               		 pages[SeqID][k].pages[j].usertextresponses = valueType;
			          	    }
					    if (valueName == "status") {
					        pages[SeqID][k].pages[j].status = valueType;
					    }	
				            if (valueName == "correctAnswer") {
				                pages[SeqID][k].pages[j].correctAnswer = valueType;
				            }
					    if (valueName == "filename") {
						pages[SeqID][k].pages[j].filename = valueType;
					     }
					     if (valueName == "fileid") {
						pages[SeqID][k].pages[j].fileid = valueType;
					     }  
						if (valueName == "optionnotes") {
						   pages[SeqID][k].pages[j].optionnotes = valueType;
					     }  
						 
						// for essay question enhancement	 
						if (valueName == "capturedvidfilename") {
							pages[SeqID][k].pages[j].capturedvidfilename = valueType;
						} 
						if (valueName == "capturedvidid") {
							pages[SeqID][k].pages[j].capturedvidid = valueType;
						} 
						if (valueName == "capturedimgfilename") {
							pages[SeqID][k].pages[j].capturedimgfilename = valueType;
						} 
						if (valueName == "capturedimgid") {
							pages[SeqID][k].pages[j].capturedimgid = valueType;
						} 
						// for essay question enhancement
			        }
			    }
			    else {
			        for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
			            if (pages[SeqID][k].pages[j].pages[m].type == "page") {
                            if (pages[SeqID][k].pages[j].pages[m].pageNumber == ind) {
			                    if (valueName == "pagecompletion") {
			                        if (pages[SeqID][k].pages[j].pages[m].pageComplete == undefined || pages[SeqID][k].pages[j].pages[m].pageComplete == "" || pages[SeqID][k].pages[j].pages[m].pageComplete == "inprogress") {//if (pages[SeqID][k].pages[j].pageComplete == undefined) {
			                            pages[SeqID][k].pages[j].pages[m].pageComplete = valueType;
			                        } else
			                            pages[SeqID][k].pages[j].pages[m].pageComplete = valueType;
			                    }
			                    if (valueName == "iscoao") {
			                        pages[SeqID][k].pages[j].pages[m].iscoao = valueType;
			                    }
			                    if (valueName == "type") {
			                        pages[SeqID][k].pages[j].pages[m].type = valueType;
			                    }
			                    if (valueName == "useranswer") {
			                        pages[SeqID][k].pages[j].pages[m].useranswer = valueType;
			                    }
			                    if (valueName == "usertextresponses") {
			                        pages[SeqID][k].pages[j].pages[m].usertextresponses = valueType;
			                    }
			                    if (valueName == "status") {
			                        pages[SeqID][k].pages[j].pages[m].status = valueType;
			                    }
			                    if (valueName == "correctAnswer") {
			                        pages[SeqID][k].pages[j].pages[m].correctAnswer = valueType;
			                    }
						if (valueName == "filename") {
							pages[SeqID][k].pages[j].pages[m].filename = valueType;
						}
						if (valueName == "fileid") {
							pages[SeqID][k].pages[j].pages[m].fileid = valueType;
						}  
						if (valueName == "optionnotes") {
							pages[SeqID][k].pages[j].pages[m].optionnotes = valueType;
						}  
								// for essay question enhancement
								if (valueName == "capturedvidfilename") {
									pages[SeqID][k].pages[j].pages[m].capturedvidfilename = valueType;
								} 
								if (valueName == "capturedvidid") {
									pages[SeqID][k].pages[j].pages[m].capturedvidid = valueType;
								} 
								if (valueName == "capturedimgfilename") {
									pages[SeqID][k].pages[j].pages[m].capturedimgfilename = valueType;
								} 
								if (valueName == "capturedimgid") {
									pages[SeqID][k].pages[j].pages[m].capturedimgid = valueType;
								} 
								// for essay question enhancement
			                }
					    }	
					}
				}
			}
		}
	}
}
 function setCOValues(valueName,valueType){
     setCOPageValues(currentPage, valueName, valueType);
 }
function getCoValues(valueType){
     if (valueType != null && valueType != undefined)
         valueType = valueType.toLowerCase();
var rtnvalue = "";
for (k=0;k< pages[SeqID].length;k++) 
	{
		if(pages[SeqID][k].type != "topic"){
				if (pages[SeqID][k].pageNumber == currentPage){
				if (valueType =="remattempt"){
					if (pages[SeqID][k].remAttempt != undefined) {
						return rtnvalue = pages[SeqID][k].remAttempt;
					}else
						return rtnvalue;
				}
				if (valueType =="remscreen"){
					if (pages[SeqID][k].remScreen != undefined) {
						return rtnvalue = pages[SeqID][k].remScreen;
					}else
						return rtnvalue;
				}
				if (valueType =="remediation"){
					if (pages[SeqID][k].remediation != undefined) {
						return rtnvalue = pages[SeqID][k].remediation;
					}else
						return rtnvalue;
					
				}
				if (valueType =="pagecompletion"){
					if (pages[SeqID][k].pageComplete != undefined) {
						return rtnvalue = pages[SeqID][k].pageComplete;
					}else
						return undefined;
				}
				

				if (valueType == "remreturnpage") {
				    if (pages[SeqID][k].remReturnPage != undefined) {
				        return rtnvalue = pages[SeqID][k].remReturnPage;
				    } else
				        return undefined;
				}
				
				if (valueType == "disablenxtuntilcrct") {
				    if (pages[SeqID][k].disableNxtUntilCrct != undefined) {
				        return rtnvalue = pages[SeqID][k].disableNxtUntilCrct;
				    } else
				        return undefined;
				}
                //imran
				if (valueType == "iscoao") {
				    if (pages[SeqID][k].iscoao != undefined) {
				        return rtnvalue = pages[SeqID][k].iscoao;
				    } else
				        return undefined;
				}

				if (valueType == "type") {
				    if (pages[SeqID][k].type != undefined) {
				        return rtnvalue = pages[SeqID][k].type;
				    } else
				        return undefined;
				}

				if (valueType == "qtype") {
				    if (pages[SeqID][k].Qtype != undefined) {
				        return rtnvalue = pages[SeqID][k].Qtype;
				    } else
				        return undefined;
				}

				if (valueType == "useranswer") {
				    if (pages[SeqID][k].useranswer != undefined) {
				        return rtnvalue = pages[SeqID][k].useranswer;
				    } else
				        return undefined;
				}

				if (valueType == "usertextresponses") {
				    if (pages[SeqID][k].usertextresponses != undefined) {
				        return rtnvalue = pages[SeqID][k].usertextresponses;
				    } else
				        return undefined;
				}
				if (valueType == "status") {
				    if (pages[SeqID][k].status != undefined) {
				        return rtnvalue = pages[SeqID][k].status;
				    } else
				        return undefined;
				}				
				if (valueType == "correctanswer") {
				    if (pages[SeqID][k].correctAnswer != undefined) {
				        return rtnvalue = pages[SeqID][k].correctAnswer;
				    } else
				        return undefined;
				}
				if (valueType == "filename") {
				    if (pages[SeqID][k].filename != undefined) {
				        return rtnvalue = pages[SeqID][k].filename;
				    } else
				        return undefined;
				}
				if (valueType == "fileid") {
				    if (pages[SeqID][k].fileid != undefined) {
				        return rtnvalue = pages[SeqID][k].fileid;
				    } else
				        return undefined;
				}
				
				if (valueType == "pageid") {
				    if (pages[SeqID][k].qPageId != undefined) {
				        return rtnvalue = pages[SeqID][k].qPageId;
				    } else
				        return undefined;
				}
					if (valueType == "optionnotes") {
				    if (pages[SeqID][k].optionnotes != undefined) {
				        return rtnvalue = pages[SeqID][k].optionnotes;
				    } else
				        return undefined;
				}
				// for essay question enhancement
				if (valueType == "capturedvidfilename") {					
					if (pages[SeqID][k].capturedvidfilename != undefined) {
				        return rtnvalue = pages[SeqID][k].capturedvidfilename;
				    } else
				        return undefined;
				} 
				if (valueType == "capturedvidid") {					
					if (pages[SeqID][k].capturedvidid != undefined) {
				        return rtnvalue = pages[SeqID][k].capturedvidid;
				    } else
				        return undefined;
				} 
				if (valueType == "capturedimgfilename") {					
					if (pages[SeqID][k].capturedimgfilename != undefined) {
				        return rtnvalue = pages[SeqID][k].capturedimgfilename;
				    } else
				        return undefined;
				} 
				if (valueType == "capturedimgid") {					
					if (pages[SeqID][k].capturedimgid != undefined) {
				        return rtnvalue = pages[SeqID][k].capturedimgid;
				    } else
				        return undefined;
				}
				if (valueType == "printoptionpg") {
				    if (pages[SeqID][k].printoptionpg != undefined) {
				        return rtnvalue = pages[SeqID][k].printoptionpg;
				    } else
				        return undefined;
				}
				// for essay question enhancement
			}
		}else{
			for (j=0;j< pages[SeqID][k].pages.length;j++) 
			{
			    if (pages[SeqID][k].pages[j].type == "page") {
			        if (pages[SeqID][k].pages[j].pageNumber == currentPage) {
						if (valueType =="remediation"){
			                if (pages[SeqID][k].pages[j].remediation != undefined) {
							return rtnvalue = pages[SeqID][k].pages[j].remediation;
						}else
							return rtnvalue;
						}
						if (valueType =="remattempt"){
			                if (pages[SeqID][k].pages[j].remAttempt != undefined) {
							return rtnvalue = pages[SeqID][k].pages[j].remAttempt;
						}else
							return rtnvalue;
						}
						if (valueType =="remscreen"){
			                if (pages[SeqID][k].pages[j].remScreen != undefined) {
							return rtnvalue = pages[SeqID][k].pages[j].remScreen;
						}else
							return rtnvalue;
						}
						
						if (valueType == "pagecompletion") {
						    if (pages[SeqID][k].pages[j].pageComplete != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].pageComplete;
						    } else
						        return rtnvalue;
						}

						if (valueType == "remreturnpage") {
						    if (pages[SeqID][k].pages[j].remReturnPage != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].remReturnPage;
						    } else
						        return rtnvalue;
						}
						
						if (valueType == "disablenxtuntilcrct") {
						    if (pages[SeqID][k].pages[j].disableNxtUntilCrct != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].disableNxtUntilCrct;
						    } else
						        return rtnvalue;
						}

						//imran
						if (valueType == "iscoao") {
						    if (pages[SeqID][k].pages[j].iscoao != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].iscoao;
						    } else
						        return undefined;
						}

						if (valueType == "type") {
						    if (pages[SeqID][k].pages[j].type != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].type;
						    } else
						        return undefined;
						}

						if (valueType == "useranswer") {
						    if (pages[SeqID][k].pages[j].useranswer != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].useranswer;
						    } else
						        return undefined;
						}
						if (valueType == "usertextresponses") {
						    if (pages[SeqID][k].pages[j].usertextresponses != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].usertextresponses;
						    } else
						        return undefined;
						}
						if (valueType == "qtype") {
							if (pages[SeqID][k].pages[j].Qtype != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].Qtype;
							} else
								return undefined;
						}
						if (valueType == "status") {
						    if (pages[SeqID][k].pages[j].status != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].status;
						    } else
						        return undefined;
						}	
						if (valueType == "correctanswer") {
						    if (pages[SeqID][k].pages[j].correctAnswer != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].correctAnswer;
						    } else
						        return undefined;
						}
						if (valueType == "filename") {
							if (pages[SeqID][k].pages[j].filename != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].filename;
							} else
								return undefined;
						}
						if (valueType == "fileid") {
							if (pages[SeqID][k].pages[j].fileid != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].fileid;
							} else
								return undefined;
						}
						if (valueType == "pageid") {
							if (pages[SeqID][k].pages[j].qPageId != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].qPageId;
							} else
								return undefined;
						}
						if (valueType == "optionnotes") {
							if (pages[SeqID][k].pages[j].optionnotes != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].optionnotes;
							} else
								return undefined;
						}
						// for essay question enhancement
						if (valueType == "capturedvidfilename") {					
							if (pages[SeqID][k].pages[j].capturedvidfilename != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].capturedvidfilename;
							} else
								return undefined;
						} 
						if (valueType == "capturedvidid") {					
							if (pages[SeqID][k].pages[j].capturedvidid != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].capturedvidid;
							} else
								return undefined;
						} 
						if (valueType == "capturedimgfilename") {					
							if (pages[SeqID][k].pages[j].capturedimgfilename != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].capturedimgfilename;
							} else
								return undefined;
						} 
						if (valueType == "capturedimgid") {					
							if (pages[SeqID][k].pages[j].capturedimgid != undefined) {
								return rtnvalue = pages[SeqID][k].pages[j].capturedimgid;
							} else
								return undefined;
						}
						if (valueType == "printoptionpg") {
						    if (pages[SeqID][k].pages[j].printoptionpg != undefined) {
						        return rtnvalue = pages[SeqID][k].pages[j].printoptionpg;
						    } else
						        return undefined;
						}
			            // for essay question enhancement 
					}
				}
			    else {
			        for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
			            if (pages[SeqID][k].pages[j].pages[m].type == "page") {
			                if (pages[SeqID][k].pages[j].pages[m].pageNumber == currentPage) {
			                    if (valueType == "remediation") {
			                        if (pages[SeqID][k].pages[j].pages[m].remediation != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].remediation;
			                        } else
			                            return rtnvalue;
			                    }
			                    if (valueType == "remattempt") {
			                        if (pages[SeqID][k].pages[j].pages[m].remAttempt != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].remAttempt;
			                        } else
			                            return rtnvalue;
			                    }
			                    if (valueType == "remscreen") {
			                        if (pages[SeqID][k].pages[j].pages[m].remScreen != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].remScreen;
			                        } else
			                            return rtnvalue;
			                    }
			                    if (valueType == "pagecompletion") {
			                        if (pages[SeqID][k].pages[j].pages[m].pageComplete != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].pageComplete;
			                        } else
			                            return rtnvalue;
			                    }
			                    if (valueType == "remreturnpage") {
			                        if (pages[SeqID][k].pages[j].pages[m].remReturnPage != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].remReturnPage;
			                        } else
			                            return rtnvalue;
			                    }
			                    if (valueType == "disablenxtuntilcrct") {
			                        if (pages[SeqID][k].pages[j].pages[m].disableNxtUntilCrct != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].disableNxtUntilCrct;
			                        } else
			                            return rtnvalue;
			                    }
			                    //imran
			                    if (valueType == "iscoao") {
			                        if (pages[SeqID][k].pages[j].pages[m].iscoao != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].iscoao;
			                        } else
			                            return undefined;
			                    }
			                    if (valueType == "type") {
			                        if (pages[SeqID][k].pages[j].pages[m].type != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].type;
			                        } else
			                            return undefined;
			                    }
			                    if (valueType == "useranswer") {
			                        if (pages[SeqID][k].pages[j].pages[m].useranswer != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].useranswer;
			                        } else
			                            return undefined;
			                    }
					    if (valueType == "usertextresponses") {
						if (pages[SeqID][k].pages[j].pages[m].usertextresponses != undefined) {
							return rtnvalue = pages[SeqID][k].pages[j].pages[m].usertextresponses;
						} else
						return undefined;
				            }
			                    if (valueType == "status") {
			                        if (pages[SeqID][k].pages[j].pages[m].status != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].status;
			                        } else
			                            return undefined;
			                    }
								if (valueType == "qtype") {
									if (pages[SeqID][k].pages[j].pages[m].Qtype != undefined) {
										return rtnvalue = pages[SeqID][k].pages[j].pages[m].Qtype;
									} else
										return undefined;
								}
			                    if (valueType == "correctanswer") {
			                        if (pages[SeqID][k].pages[j].pages[m].correctAnswer != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].correctAnswer;
			                        } else
			                            return undefined;
			                    }
								if (valueType == "filename") {
			                        if (pages[SeqID][k].pages[j].pages[m].filename != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].filename;
			                        } else
			                            return undefined;
			                    }
								if (valueType == "fileid") {
			                        if (pages[SeqID][k].pages[j].pages[m].fileid != undefined) {
			                            return rtnvalue = pages[SeqID][k].pages[j].pages[m].fileid;
			                        } else
			                            return undefined;
			                    }
								if (valueType == "pageid") {
									if (pages[SeqID][k].pages[j].pages[m].qPageId != undefined) {
										return rtnvalue = pages[SeqID][k].pages[j].pages[m].qPageId;
									} else
										return undefined;
								}
								if (valueType == "optionnotes") {
									if (pages[SeqID][k].pages[j].pages[m].optionnotes != undefined) {
										return rtnvalue = pages[SeqID][k].pages[j].pages[m].optionnotes;
									} else
										return undefined;
								}
								// for essay question enhancement
								if (valueType == "capturedvidfilename") {					
									if (pages[SeqID][k].pages[j].pages[m].capturedvidfilename != undefined) {
										return rtnvalue = pages[SeqID][k].pages[j].pages[m].capturedvidfilename;
									} else
										return undefined;
								} 
								if (valueType == "capturedvidid") {					
									if (pages[SeqID][k].pages[j].pages[m].capturedvidid != undefined) {
										return rtnvalue = pages[SeqID][k].pages[j].pages[m].capturedvidid;
									} else
										return undefined;
								} 
								if (valueType == "capturedimgfilename") {					
									if (pages[SeqID][k].pages[j].pages[m].capturedimgfilename != undefined) {
										return rtnvalue = pages[SeqID][k].pages[j].pages[m].capturedimgfilename;
									} else
										return undefined;
								} 
								if (valueType == "capturedimgid") {					
									if (pages[SeqID][k].pages[j].pages[m].capturedimgid != undefined) {
										return rtnvalue = pages[SeqID][k].pages[j].pages[m].capturedimgid;
									} else
										return undefined;
								}
								if (valueType == "printoptionpg") {
								    if (pages[SeqID][k].pages[j].pages[m].printoptionpg != undefined) {
								        return rtnvalue = pages[SeqID][k].pages[j].pages[m].printoptionpg;
								    } else
								        return undefined;
								}
			                    // for essay question enhancement 
			                }
						}	
					}
				}
			}
		  
		}
	}
}

//Bhushanam: added this fuction for check the page is remediation or not..
function isRemediate(){
var remediate = "";
if(objType == "assessment"){
remediate = undefined;

}
else{
        for (k = 0; k < pages[SeqID].length; k++) {
		if(pages[SeqID][k].type != "topic"){
				if (pages[SeqID][k].pageNumber == currentPage){
					if (pages[SeqID][k].remediation != undefined) {
						return remediate = pages[SeqID][k].remediation;
					}else
						return remediate;
					}
		}else{
                for (j = 0; j < pages[SeqID][k].pages.length; j++) {
                    if (pages[SeqID][k].pages[j].type != "topic") {
                        if (pages[SeqID][k].pages[j].pageNumber == currentPage) {
                            if (pages[SeqID][k].pages[j].remediation != undefined) {
							return remediate = pages[SeqID][k].pages[j].remediation;
						}else
							return remediate;
					}
				}
                    else {
                        for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
                            if (pages[SeqID][k].pages[j].pages[m].pageNumber == currentPage) {
                                if (pages[SeqID][k].pages[j].pages[m].remediation != undefined) {
                                    return remediate = pages[SeqID][k].pages[j].pages[m].remediation;
                                } else
                                    return remediate;
			}
                        }
                    }
                    //if (pages[SeqID][k].pages[j].type=="page")
                    //{
                    //	if (pages[SeqID][k].pages[j].pageNumber == currentPage)
                    //	{
                    //		if (pages[SeqID][k].pages[j].remediation != undefined) 
                    //		{				
                    //			return remediate = pages[SeqID][k].pages[j].remediation;
                    //		}else
                    //			return remediate;
                    //	}
                    //}
			}
		  
		}
	}
	}
	//return remediate; 
}
// end..

////////////////////////////////// Chk TimeLine page in Topicsss///
function isTimeline(){
var timeline = "";
if(objType == "assessment"){
timeline = undefined;

}
else{
        for (k = 0; k < pages[SeqID].length; k++) {
		if(pages[SeqID][k].type != "topic"){
				if (pages[SeqID][k].pageNumber == innerPage){
					if (pages[SeqID][k].istimeline != undefined) {
						return timeline = pages[SeqID][k].istimeline;
					}else
						return timeline;
					}
		}else{
                for (j = 0; j < pages[SeqID][k].pages.length; j++) {
                    if (pages[SeqID][k].pages[j].type != "topic") {
                        if (pages[SeqID][k].pages[j].pageNumber == innerPage) {
                            if (pages[SeqID][k].pages[j].istimeline != undefined) {
							return timeline = pages[SeqID][k].pages[j].istimeline;
						}else
							return timeline;
					}
				}
                    else {
                        for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
                            if (pages[SeqID][k].pages[j].pages[m].pageNumber == innerPage) {
                                if (pages[SeqID][k].pages[j].pages[m].istimeline != undefined) {
                                    return timeline = pages[SeqID][k].pages[j].pages[m].istimeline;
                                } else
                                    return timeline;
			}
                        }
                    }
		  
                    //if (pages[SeqID][k].pages[j].type=="page")
                    //{
                    //	if (pages[SeqID][k].pages[j].pageNumber == innerPage)
                    //	{
                    //		if (pages[SeqID][k].pages[j].istimeline != undefined) 
                    //		{				
                    //			return timeline = pages[SeqID][k].pages[j].istimeline;
                    //		}else
                    //			return timeline;
                    //	}
                    //}
                }
		}
	}
	}
	//return remediate; 
}
//////////////////////////////////////////
/**********************************************************************************************************
********************************This method is called on back button click*********************************
**********************************************************************************************************/
function previousPage() {
    //debugger;
	if(preventNavigation == false){
	    
		try{
			touchObj.off("panleft panright panup pandown")
			var canGo = chkIfDisabledByRules(currentPage, "undefined", "back");
		}catch(e){
			var canGo = true;
		}
		if (canGo) {
			lastRemedPage= "";
			lastRemedActive = false;
            // Added by maheedhar for singlepagerendering in co on 16-10-2014
			if(trackObjects[SeqID].singleqtnperpage != "no")
			{  checkAnswer(); 
			  if (isinstancycontent == true)  
			     SaveQuestionData();
			}

		    //Sunny on 2nd May 2017
			
			if (currPageObject.type != "summary") {
			    if (trackObjects[SeqID].suspenddataupdateonattempt != undefined) {
			        if (trackObjects[SeqID].suspenddataupdateonattempt == "yes") {
			            UpdateSuspendDataOnAttempt();
			        }
			    }
			}
		    //End Sunny
				
			if (tincan.recordStores.length > 0) {
				SendTinCanAnswerStatement();
			}
		    
		    try{
		        if (trackObjects[SeqID].optionlevelfeedback == "yes" && trackObjects[SeqID].singleqtnperpage == "yes") {
		            var pgObj = getPageByIndex(currentPage);
		            if(pgObj.branchedFrom != "" && pgObj.branchedFrom != undefined){
		                var id = pgObj.branchedFrom;
		                pgObj.branchedFrom = "";
		                var pgObject = getPageObjectById(id);
						if(pgObject != undefined){
							innerPage = pgObject.pageNumber;
							innerPage = getInnerPage(innerPage);
							preventNavigation = true;
							beforegotoPage();
							return;
						}
		            }
		        }
		    } catch (e) { }

			if (objType == "assessment" ||  trackObjects[SeqID].singleqtnperpage == "no") {
				navigateURL('previous');
			}
			else {
				if (innerPage > 0 || isTrack == "yes") {
					innerPage--;
				}
			}
			preventNavigation = true;
			beforegotoPage();
		
		}
		$("#opennotePopup").hide();
	}
	//setTimeout(reAssignSwipeEvents, 1000);
	//end of previousPage
}

/**********************************************************************************************************
********************************This method is called before loading new page******************************
**********************************************************************************************************/
function beforegotoPage() {

try{
   $('.ui-dialog-titlebar-close').click();
    hideSharePopup();
    hideLayer();
   clearMatchWidgets();
   $("#audioPlayDiv").hide();
	}catch (e){}
    //setCOValues("usertextresponses", GetPageTextResponses());
	GetPageTextResponses();
	if (trackObjects[SeqID].enableprogressbar == "yes") {
        updatePreviousTopicProgress();
    }
    getCurrentPageByIndex();
    checkObjectChange(currentPage);
	currentFontIncrement = 0;
	$("#loader").fadeTo("fast", 1);
    $("#page").fadeTo("fast", 1, function() { gotoPage(); });
}

/**********************************************************************************************************
**************************************This method is used to load pages************************************
**********************************************************************************************************/
function gotoPage(val) {
    debugger;
    // to hide toc

    // To close feedback popup if not closed while remediation
    try {
        $('#opennotePopup').hide();
        $('#openPolledresponsePopup').hide();
        if (feedbackDiv != "")
            $(feedbackDiv).remove();
    } catch (e) { }

    try {
        disposeVideoJSVideoPlayer();
    }
    catch (e) {
    }
    try {
        if (document.getElementById("folderTreetd").style.display != "none") {
            document.getElementById("folderTreetd").style.display = "none";
            document.getElementById("toc_close").src = "images/toc.png";
        }
    } catch (e) {
    }
	// end of toc hide

    textEntry = false;
    isremPage = false;
    disableButtonsonNavigation();
	
    isSubmitted = false;
    isAnswered = false;
    pageLoaded = false;
    
    if (val != undefined && isNaN(val) != true)
        innerPage = Number(val);
    
	var pageNum = 0;
    if (isTrack == "yes") {
        targetPath = trackObjects[SeqID].contentid + "/";
        getCurrentPageByIndex();
		pageNum =  Number(currentPage) + 1;
    }
	else
	{
		pageNum =  Number(innerPage) + 1;
		currentPage = innerPage;
	}
	
    objType = isTrack == "yes" ? trackObjects[SeqID].type.toLowerCase() : trackObjects[0].type.toLowerCase();

    var txt = "Page " + String(pageNum) + " of " + totalPages;
    document.getElementById("pagecounter").innerHTML = txt;
   
    try {
        //var strUserpagenotesData;
        //strUserpagenotesData = LMSGetUserNotes(pageNum);
        //$("#Notelist").empty();
        //$("#Notelist").html(strUserpagenotesData);
       // UsernotePageID = pageNum;
        UsernotePageID = getActualPageNum(currentPage);
    }
    catch (ex) {
       
    }
    //venkat need to 
    currPageObject = getPageByIndex(currentPage);
    if (currPageObject==undefined) {
        currPageObject = getPageByIndexForReports(currentPage)
    }
    try{
	    if(currPageObject.Qtype.toLowerCase() == "longanswer" || currPageObject.Qtype.toLowerCase() == "fillintheblank")
	    {
	        textEntry = true;
	    }
    } catch (e) { }
    try {
        if (trackObjects[SeqID].singleqtnperpage == "no") {
            if (isLongAnswer == true && currPageObject.type != "summary")
                textEntry = true;
        }
    } catch (e) { }

    if (isTimeline() != "yes") {
        unloadTimeLine();
    }
    
    if (trackObjects[SeqID].restartPagenumfortopic == "yes") {
        if (currPageObject.topicLength != undefined && currPageObject.topicPages != undefined) {
            txt = "Page " + String(currPageObject.topicPages) + " of " + currPageObject.topicLength;
            document.getElementById("pagecounter").innerHTML = txt;
        }
    }

    if (trackObjects[SeqID].singleqtnperpage == "no") {
        document.getElementById("pagecounter").innerHTML = getPageCounterText(pageNum, totalPages);
    }
    

    if (currPageObject.type.toLowerCase() == "document" || currPageObject.type.toLowerCase() == "media resource") {
        document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject);//currPageObject.title;
        checkForTitle(currPageObject);
    }
    try {
        if (trackObjects[SeqID].printoptionall == "yes" && trackObjects[SeqID].printoption == "yes" && currPageObject.type.toLowerCase() != "summary") {
            $("#printpg").show();
            $("#printpg").css("opacity", 1);
            $("#printpg").css("cursor", "pointer");
            $("#printpg").unbind("click").bind("click", function (event) {
                enableprintoption(event);
            });
        }
        else {
            if (trackObjects[SeqID].printoption == "yes" && currPageObject.printoptionpg == "yes" && currPageObject.type.toLowerCase() != "summary") {
                $("#printpg").show();                
                $("#printpg").css("cursor", "pointer");
                $("#printpg").unbind("click").bind("click", function (event) {
                    enableprintoption(event);
                });
            } else {
                $("#printpg").hide();
                /*$("#printpg").css("opacity", 0.3);
                $("#printpg").unbind("click", enableprintoption);
                $("#printpg").css("cursor", "default");*/
            }
        }

    } catch (e) { }
    //Kiran added for hiding timer in summary page//
    try{
        if (currPageObject.type != undefined && currPageObject.type != "summary" && trackObjects[SeqID].enabletimer == "yes") {
            $("#lblTimer").show();
        }
        else {
            $("#lblTimer").hide();
            $("#lblTimer").timer('pause');
        }
    }catch(ex){}
    
    var url = currPageObject.url;
    if (currPageObject.Qtype != undefined) {
        //if (currPageObject.Qtype.toLowerCase() != "draganddrop" && currPageObject.Qtype.toLowerCase() != "rating" && currPageObject.Qtype.toLowerCase() != "matrix")
            url = setLocalizationURL(url);
    }
    if (currPageObject.type == "summary") {
        $("#selectLang").hide();
    } else {
        if ($('#selectLang').children('option').length > 1 && trackObjects[SeqID].changelanguage == "yes") {
            $("#selectLang").show();
        }
    }
    //to empty the current page
    $(".SectionDiv").html("");

    switch (currPageObject.type.toLowerCase())
    {
        case "document":
            $('#page').html("<h2>Loading...</h2>");
            $('#page').html("<iframe src='" + currPageObject.url + "' name='media' frameBorder='no' style='width:100%;height:100%' scrolling='auto'></iframe>");
            $("#loader").fadeTo("slow", 0);
            $("#page").fadeTo("slow", 1);
            setTimeout(function() {
                pageLoaded = true;
                preventNavigation = false;
                $("#printpg").hide();
                $("#fontPlus").hide();
                $("#fontMinus").hide();
            }, 1000);
            break;
        case "media resource":
            
            $('#page').html("<h2>Loading...</h2>");
            var subType = (getPageTitle(currPageObject)).split(".");//currPageObject.title
            var tempSrc = trackObjects[SeqID].contentid + "/" + subType[0];

            switch (subType[1]) {
                case "jpg":
                case "gif":
		case "png":
                    $('#page').html("<div><img src='" + trackObjects[SeqID].contentid + "/" + getPageTitle(currPageObject)/*currPageObject.title*/ + "'/></div>");
                    break;
                case "mp3":
                case "ogg":
                case "webm":
                case "m4a":
                    $('#page').html("<div><audio controls autoplay><source src='" + tempSrc + ".mp3' type='audio/mp3'/><source src='" + tempSrc + ".ogg' type='audio/ogg'/><source src='" + tempSrc + ".m4a' type='audio/m4a'/><source src='" + tempSrc + ".webm' type='audio/webm'/>Your Browser does not supported this audio format.</div>");
                    break;
                case "mp4":
                case "m4v":
                case "ogv":
                case "webm":
                    $('#page').html("<div><video controls autoplay><source src='" + tempSrc + ".ogv' type='video/ogg'/><source src='" + tempSrc + ".mp4' type='video/mp4'/><source src='" + tempSrc + ".m4v' type='video/mp4'/><source src='" + tempSrc + ".webm' type='video/webm'/>Your Browser does not supported this video format.</div>");
                    break;
                case "swf":
                case "flv":
                    var flvVidTag;
                    var flashSrc;
                    if (subType[1] == "flv") {
                        flashSrc = "flvplayer.swf?file=" + tempSrc + ".flv&autoStart=1&controls=1&skinPath=ClearOverPlaySeekMute.swf";
                    } else {

                        flashSrc = tempSrc + ".swf";
                    }

                    var str1 = "<object classid='cclsid:"+trackObjects[SeqID].contentid+"'  title='' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' id ='embed_" + trackObjects[SeqID].contentid + "' align='middle'>";

                    var str2 = "<param name='allowscriptaccess' value='samedomain' />";
                    var str3 = "<param name='movie' value='" + flashSrc + "' />";
                    var str4 = "<param name='quality' value='high' />";
                    var str4 = ""//"<param name='Scale' value='exactFit' />";
                    var str5 = "<param name='wmode' value='transparent' />";
                    var str6 = "<param name='devicefont' value='true' />";
                    var str7 = "<param name='bgcolor' value='#ffffff' />";
                    var str8 = "<embed src='" + flashSrc + "' quality='high' wmode='transparent' devicefont='true' bgcolor='#ffffff'   name='embed_" + trackObjects[SeqID].contentid + "' align='middle' allowscriptaccess='samedomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' swliveconnect='true'/></object>";
                    flvVidTag = str1 + str2 + str3 + str4 + str5 + str6 + str7 + str8;
                    $('#page').html(flvVidTag);
                    break;
            }
            $("#loader").fadeTo("slow", 0);
            $("#page").fadeTo("slow", 1);
            setTimeout(function() {
                pageLoaded = true;
                preventNavigation = false;
                $("#printpg").hide();
                $("#fontPlus").hide();
                $("#fontMinus").hide();
            }, 1000);
            break;
        default:
            getContent(url);
            break;
    }

    updateTOC();
    pageVisited(innerPage);
    
   // if (trackObjects[SeqID].enableprogressbar == "yes"){
    // $(".progressbarcontainer").show();
    if (trackObjects[SeqID].enableprogressbar == "yes") {
        setProgress(VisitedPageCount);
    }
  //  }
  //  else
       // $(".progressbarcontainer").hide();
    
    try {
        resetAllRuleBooleans(innerPage);
    } catch (e) {

    }

    try {
        completionLogic();
    }
    catch (e) {
    }
// added this code for Tin Can...
try {
    if (tincan.recordStores.length > 0) {
        SendTinCanStatement();
    }
	
    /*if (Number(innerPage) + 1 == totalPages) {
        if (getCoValues("type") != "summary") {
            //if (tc_lrs != null)
            if (tincan.recordStores.length > 0)
                SetCompletionTinCan();
        }
    }*/
	
}
catch (e)
{
}
// End.
    retakeClicked = false;

    if (SeqID != prevSeqID)
        updateTrackStatus();
       
    prevSeqID = SeqID;

	if (trackObjects[SeqID].ispagebookmark == "yes")
		setBookmark();
	else
		{
		try {
		var TopicBoookmarkpage;
		TopicBoookmarkpage = setTopicBookmark(innerPage);
		//alert(TopicBoookmarkpage);
		LMSSetLessonLocation(Number(Number(TopicBoookmarkpage) + Number(1)));
		}
		catch (e) { };
		}
		
    if (isTrack == "yes")
        fnShowHideTOCItems();
     
	 if (isfreesamplecourse == true){
		 setTimeout(checkfreesamplecontentinsinglepage , 1000) 
	 }
   
    setTimeout(enablesButtonsonNavigation, 1000);
	// Check Transcript Status Edited By Raghu//////////////
    setTimeout(chkTranscriptStatus,1000);
	setTimeout(disableNextinAOPages,1000);
        setTimeout(generateSearchResultsToc,1000)
	setTimeout(generatemore, 1200)
  if (trackObjects[SeqID].singleqtnperpage == "no") {
        setTimeout(ResetParallaxAnimations, 100);
    }
	////////////////////////////////////////////////////////
    try{
   /* if (objType != "assessment" && pages[SeqID][innerPage].type == "page" && pages[SeqID][innerPage].remediation != "yes") {
        isSubmitted = true;
        isAnswered = true;
    }*/
	//Bhushanam :
        
        if (objType == "contentobject" || objType == "content object") {
            if (isRemediate() != "yes") {
                isSubmitted = true;
                isAnswered = true;
            } else {
               try {
                    if (getCoValues("pagecompletion") != "completed")
                        isremPage = true;
                } catch (e) { isremPage = true; }
            }

        }
	if (objType == "contentobject" || objType == "content object" && trackObjects[SeqID].chkcontraintfornavigation != "no"){
		isSubmitted = false;
	}
	// End.
       
    } catch (e)
    { }
	
	try{
        //Modified by Sunny on 14th june 2016 for enabling TOC on Content Object
	    if (objType == "contentobject" || objType == "content object" || objType == "assessment" || objType == "assessments")
	        if (currPageObject.istimeline == "yes")
	            if (trackObjects[SeqID].enablenextfortimeline != undefined && trackObjects[SeqID].enablenextfortimeline == "no")
	            {
	                isremPage = true;
	            }
	     //End Sunny
	}
	catch(e){}

    prevPage = innerPage;
    RefreshComment(); //imran for reviwer
	//// CC TEXT OFF While Navigating  pages ///////////////
	//$('#ccPopup').hide();
	//ccstate = "off"
	//$("#ccBtn").removeClass("cc-btn")
//$("#ccBtn").addClass("ccopen-btn");
    //$("#page").fadeTo("fast", 1);
     if ($('#content').hasClass('marge-left')) {
        $('#content').removeClass('marge-left');
    }
}
function animateObject(forTheContent) {
	setTimeout(function () {
        // Hide the address bar!
	    $('.row').show();

	    if (forTheContent == 'forSinglePage') {
	        $dataAnimateEl = $('[id^="singlePageContent_"]:last').find('[data-animate]');
	    } else {
	        $dataAnimateEl = $('[data-animate]');
	    }
        if ($dataAnimateEl.length > 0) {

            $dataAnimateEl.each(function (i) {
              
                var element = $(this);
                if (!element.hasClass('animated')) {
                    element.addClass('not-animated');
                    var elementAnimation = element.attr('data-animate');
                    element.removeClass(elementAnimation);

                }
            });

        }
        $dataAnimateEl.appear();
        if (trackObjects[SeqID].singleqtnperpage == "no") {
            
           
            $(document.body).find('[data-animate]').on('appear', function (e, $affected) {
             
                $affected.each(function () {
                    
                    var element = $(this),
                   animationDelay = element.attr('data-delay'),
                           animationDelayTime = 0;
                    if (animationDelay) { animationDelayTime = Number(animationDelay) + 500; } else { animationDelayTime = 500; }

                var elementAnimation = element.attr('data-animate');
                setTimeout(function () {
                    element.removeClass('not-animated').addClass(elementAnimation + ' animated');
                }, animationDelayTime);
                if ($(element).attr('type') == 'list' && $(element).attr('itemstoshow') == 'itembyitem') {
                    $(element).find("li").each(function () {
                        var listelement = $(this);
                        listelement.addClass('not-animated');
                        setTimeout(function () {
                            listelement.removeClass('not-animated').addClass(elementAnimation + ' animated');
                        }, animationDelayTime);
                        animationDelayTime = animationDelayTime + 1000;
                    });

                }

                });
            });
$.force_appear();
        } else {
           
           $dataAnimateEl.each(function () {
                    var element = $(this),
                   animationDelay = element.attr('data-delay'),
                           animationDelayTime = 0;
                    if (animationDelay) { animationDelayTime = Number(animationDelay) + 500; } else { animationDelayTime = 500; }

                    var elementAnimation = element.attr('data-animate');
                        setTimeout(function () {
                            element.removeClass('not-animated').addClass(elementAnimation + ' animated');
                        }, animationDelayTime);
                    
                        if ($(element).attr('type') == 'list' && $(element).attr('itemstoshow') == 'itembyitem') {
                            $(element).find("li").each(function () {
                                var listelement = $(this);
                                listelement.addClass('not-animated');
                                setTimeout(function () {
                                    listelement.removeClass('not-animated').addClass(elementAnimation + ' animated');
                                }, animationDelayTime);
                                animationDelayTime = animationDelayTime + 1000;
                            });

                        }
                });

          
            $(window).scrollTop(0);
            $('#content,.SectionDiv').scroll(function () {

                $('body').trigger('scroll');

            });
        }
        audioAppearStyle();
        $('audio[autoplay]').each(function (i) {
           
            if ($(this).parent().offset().top <= $(window).height()) {

            } else {
               
                this.pause();
            }
            $(this).parent().addClass('audio-box');

        });
        $('.audio-box').appear();
        if (trackObjects[SeqID].singleqtnperpage == "no") {
            $(document.body).find('.audio-box').on('appear', function (e, $affected) {


                $affected.each(function (i) {

                    if ($affected.length == (i + 1)) {
                        var playPromise = $(this).find('audio')[0].play();


                        if (playPromise !== undefined) {
                            playPromise.then(function () {
                                // Automatic playback started!
                                $(this).find('audio')[0].play();
                            }).catch(function (error) {
                                // Automatic playback failed.
                                // Show a UI element to let the user manually start playback.
                            });
                        }
                    } else {

                        var playPromise = $(this).find('audio')[0].pause();
                        if (playPromise !== undefined) {
                            playPromise.then(function () {
                                // Automatic playback started!
                                $(this).find('audio')[0].pause();
                            }).catch(function (error) {
                                // Automatic playback failed.
                                // Show a UI element to let the user manually start playback.
                            });
                        }
                    }
                })
            });
        } else {
         $(document.body).find('.audio-box').each(function (i) {
                debugger;
                var $affected = $(document.body).find('.audio-box');
                
                if ($affected.length == (i + 1) && $(this).parents('.layers').length == 0) {
                        var playPromise = $(this).find('audio')[0].play();


                        if (playPromise !== undefined) {
                            playPromise.then(function () {
                                // Automatic playback started!
                                $(this).find('audio')[0].play();
                            }).catch(function (error) {
                                // Automatic playback failed.
                                // Show a UI element to let the user manually start playback.
                            });
                        }
                    } else {

                        var playPromise = $(this).find('audio')[0].pause();
                        if (playPromise !== undefined) {
                            playPromise.then(function () {
                                // Automatic playback started!
                                $(this).find('audio')[0].pause();
                            }).catch(function (error) {
                                // Automatic playback failed.
                                // Show a UI element to let the user manually start playback.
                            });
                        }
                    }
                })
            
        }

        $(document.body).find('.audio-box').on('disappear', function (e, $affected) {

            $affected.each(function () {  
                var playPromise = $(this).find('audio')[0].pause();
               
                if (playPromise !== undefined) {
                    playPromise.then(function () {
                        // Automatic playback started!
                        $(this).find('audio')[0].pause();
                    }).catch(function (error) {
                        // Automatic playback failed.
                        // Show a UI element to let the user manually start playback.
                    });
                }
            })
        });

        // audio styles 

        videoAutoStop();


    }, 100);
	
}
function videoAutoStop() {
    $('video[autoplay]').each(function (i) {

        if ($(this).parent().offset().top <= $(window).height()) {

        } else {

            this.pause();
        }
        $(this).parent().addClass('video-box');

    });
    $('.video-box').appear();
    if (trackObjects[SeqID].singleqtnperpage == "no") {
        $(document.body).find('.video-box').on('appear', function (e, $affected) {


            $affected.each(function (i) {

                if ($affected.length == (i + 1)) {
                    var playPromise = $(this).find('video')[0].play();


                    if (playPromise !== undefined) {
                        playPromise.then(function () {
                            // Automatic playback started!
                            $(this).find('video')[0].play();
                        }).catch(function (error) {
                            // Automatic playback failed.
                            // Show a UI element to let the user manually start playback.
                        });
                    }
                } else {

                    var playPromise = $(this).find('video')[0].pause();
                    if (playPromise !== undefined) {
                        playPromise.then(function () {
                            // Automatic playback started!
                            $(this).find('video')[0].pause();
                        }).catch(function (error) {
                            // Automatic playback failed.
                            // Show a UI element to let the user manually start playback.
                        });
                    }
                }
            })
        });
    } else {
        $(document.body).find('.video-box').each(function (i) {

            if ($affected.length == (i + 1)) {
                var playPromise = $(this).find('video')[0].play();


                if (playPromise !== undefined) {
                    playPromise.then(function () {
                        // Automatic playback started!
                        $(this).find('video')[0].play();
                    }).catch(function (error) {
                        // Automatic playback failed.
                        // Show a UI element to let the user manually start playback.
                    });
                }
            } else {

                var playPromise = $(this).find('video')[0].pause();
                if (playPromise !== undefined) {
                    playPromise.then(function () {
                        // Automatic playback started!
                        $(this).find('video')[0].pause();
                    }).catch(function (error) {
                        // Automatic playback failed.
                        // Show a UI element to let the user manually start playback.
                    });
                }
            }
        })

    }

    $(document.body).find('.video-box').on('disappear', function (e, $affected) {

        $affected.each(function () {
            var playPromise = $(this).find('video')[0].pause();

            if (playPromise !== undefined) {
                playPromise.then(function () {
                    // Automatic playback started!
                    $(this).find('video')[0].pause();
                }).catch(function (error) {
                    // Automatic playback failed.
                    // Show a UI element to let the user manually start playback.
                });
            }
        })
    });
}


function audioAppearStyle() {

    var mediaElements = document.querySelectorAll('audio[controls]'), i, total = mediaElements.length;

    for (i = 0; i < total; i++) {
        new MediaElementPlayer(mediaElements[i], {

            success: function (media) {           

                media.addEventListener('error', function (e) {
                    //renderer.querySelector('.error').innerHTML = '<strong>Error</strong>: ' + e.message;
                    console.log(e.message);
                });
            }
        });
    }
}


function ResetParallaxAnimations() {
    //alert("ResetParallaxAnimations method call");
    //var $dataAnimateEl = $('[data-animate]');
    //if ($dataAnimateEl.length > 0) {

    //    $dataAnimateEl.each(function () {
    //        var element = $(this);
    //        if (!element.hasClass('animated')) {
    //            element.addClass('not-animated');
    //            var elementAnimation = element.attr('data-animate');
    //            element.appear(function () {
    //                setTimeout(function () {
    //                    element.removeClass('not-animated').addClass(elementAnimation + ' animated');
    //                }, 300);
    //            }, 'easeInCubic');
    //        }
    //    });
    //}

} 
function SetPageTextResponses() {
     if  (currPageObject.type != "summary"){
	 var iAnswer = 0;
	if (trackObjects[SeqID].singleqtnperpage == "no") {
		 for (j=0;j < getTotalPageInObject(SeqID); j++ ) {
			  iAnswer +=1;
			pagetTxtResp = getPageByObjectIndex(j).usertextresponses;
			 mainpageobj = this['instmaintable'+iAnswer];
			if (pagetTxtResp != undefined && pagetTxtResp != "") {
				pagetTxtResp = pagetTxtResp.split("##^^##");
				$.each(pagetTxtResp, function (index, res) {
					$.each($(mainpageobj).find('textarea'), function (i, obj) {
					 if ($(obj).attr("id").split("_")[1] == res.split("##@@##")[0]){
						$("#instxtresp" +iAnswer +"_"+ res.split("##@@##")[0]).val (res.split("##@@##")[1]);
						}
					});
				});
			}
			
		 }
	}else{
		var pagetTxtResp = getCoValues("usertextresponses")
		if (pagetTxtResp != undefined && pagetTxtResp != "") {
			pagetTxtResp = pagetTxtResp.split("##^^##");
			$.each(pagetTxtResp, function (index, res) {
				 if (document.getElementById("instxtresp" + (parseInt(currentPage) + 1) + "_" + res.split("##@@##")[0]) != undefined)
				    document.getElementById("instxtresp" + (parseInt(currentPage) + 1) + "_" + res.split("##@@##")[0]).value = res.split("##@@##")[1];
			});
		}
	}
	 }
}
function GetPageTextResponses() {
    debugger;
    var userTextResponse = "";
    var arrChoices = new Array();
	 if  (currPageObject.type != "summary"){
	if (trackObjects[SeqID].singleqtnperpage == "no") {
		var iAnswer = 0;
           for (txtres=0;txtres < getTotalPageInObject(SeqID); txtres++ ) {
			   iAnswer +=1;
			   mainpageobj = this['instmaintable'+iAnswer];
			   
			   $.each($(mainpageobj).find('textarea'), function (i, obj) {	
				if ($(obj).attr("id").indexOf("instxtresp") != -1) {
					if (userTextResponse == "") {
						userTextResponse = $(obj).attr("id").split("_")[1] + "##@@##" + $(obj)[0].value;
					}
					else {
						userTextResponse = userTextResponse + "##^^##" + $(obj).attr("id").split("_")[1] + "##@@##" + $(obj)[0].value;
					}
				}
			});
			   setCOValuesbyObjectIndex(txtres,"usertextresponses", userTextResponse)
			   userTextResponse = "";
		   }
	}else{
 		$.each($("#content").find('textarea'), function (i, obj) {	    
			if ($(obj).attr("id").indexOf("instxtresp") != -1) {
				if (userTextResponse == "") {
				    userTextResponse = $(obj).attr("id").split("_")[1] + "##@@##" + $(obj)[0].value;
				}
				else {
					userTextResponse = userTextResponse + "##^^##" + $(obj).attr("id").split("_")[1] + "##@@##" + $(obj)[0].value;
				}
			}
		});
	    setCOValues("usertextresponses", userTextResponse)
   	   }
	}
}
function RefreshComment() {//imran for reviwer
    try {
        var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
        var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; //chrome
        if (isFirefox || is_chrome)
            parent.parent.frames['CommentsFrame'].contentWindow.RefreshComment(SeqID, innerPage)
        else
            parent.parent.frames['CommentsFrame'].RefreshComment(SeqID, innerPage)
    }
    catch (e)
    { }
}
function setTopicBookmark(currentPageNo){

var TopicBookmarkpage;
var isExist = false;
    for (k = 0; k < pages[SeqID].length; k++) {
		if(pages[SeqID][k].type != "topic"){
            if (pages[SeqID][k].pageNumber == currentPageNo) {
				TopicBookmarkpage = pages[SeqID][k].pageNumber;
				break;
			}
		}else{
            for (j = 0; j < pages[SeqID][k].pages.length; j++) {
                if (pages[SeqID][k].pages[j].type != "topic") {
				if (j == 0)
				   TopicBookmarkpage = pages[SeqID][k].pages[j].pageNumber;
                    if (pages[SeqID][k].pages[j].pageNumber == currentPageNo) {
                        isExist = true;
                        break;
				}
                }
                else {
                    for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
                        if (j == 0)
                            // TopicBookmarkpage = pages[SeqID][k].pages[j].pages[m].pageNumber;
                            TopicBookmarkpage = pages[SeqID][k].pages[j].pageNumber;
                        if (pages[SeqID][k].pages[j].pages[m].pageNumber == currentPageNo) {
                            isExist = true;
                            break;
                        }
                    }
                }
                //if (pages[SeqID][k].pages[j].type == "page") {
                //    if (j == 0)
                //        TopicBookmarkpage = pages[SeqID][k].pages[j].pageNumber;
                //    if (pages[SeqID][k].pages[j].pageNumber == currentPageNo) {
                //        isExist = true;
                //        break;
                //    }
                //}
			}
			if (isExist)
			 break;
		}
	}
 return TopicBookmarkpage;
}
function callAdvancetoNext() {
    if (currentPage != totalPages - 1)
        nextPage();

}

          //This method is used for close button of cc
function CloseCC() {
    $('#openccPopup').hide();
    ccstate = "off"
    $("#ccBtn").removeClass("cc-btn")
    $("#ccBtn").addClass("ccopen-btn");
    if ($(window).width() < 550) {
	$('.full-expand').show();
    }
}
function disableNextinAOPages()
{
    try{
		//if(pages[SeqID][innerPage].remediation == "yes" && pages[SeqID][innerPage].pageComplete != "completed"){
		//if(isRemediate() == "yes" && pages[SeqID][innerPage].pageComplete != "completed"){
		if(isRemediate() == "yes" && getCoValues("pagecompletion") != "completed"){
            $("#nextBtn").css("opacity", 0.1);
            $("#nextBtn").unbind("click");
            $("#nextBtn").css("cursor", "default");
            $("#backBtn").css("opacity", 0.1);
            $("#backBtn").unbind("click");
            $("#backBtn").css("cursor", "default");
        }
        else
        {
		//if(pages[SeqID][innerPage].remediation == "yes" && pages[SeqID][innerPage].pageComplete == "completed"){
		if(isRemediate() == "yes" && getCoValues("pagecompletion") == "completed"){
                if(currentPage != totalPages - 1){
                    $("#nextBtn").css("opacity", 1);
                    $("#nextBtn").unbind("click");
                    $("#nextBtn").css("cursor", "pointer");
                    $("#nextBtn").click(function () { nextPage() });
                }
                $("#backBtn").css("opacity", 1);
                $("#backBtn").unbind("click");
                $("#backBtn").css("cursor", "pointer");
                $("#backBtn").click(function () { previousPage() });
            }
        }
    }
    catch (e)
    { }

	if (currPageObject.istimeline == "yes" &&  getCoValues("pagecompletion") != "completed") {
	    //Modified by Sunny on 14th june 2016 for timeline Navigation
	    if (trackObjects[SeqID].enablenextfortimeline != undefined && trackObjects[SeqID].enablenextfortimeline == "yes") {
	        $("#nextBtn").css("opacity", 1);
	        $("#nextBtn").unbind("click");
	        $("#nextBtn").css("cursor", "pointer");
	        $("#nextBtn").click(function () { nextPage() });
	    }
	    else if (trackObjects[SeqID].enablenextfortimeline != undefined && trackObjects[SeqID].enablenextfortimeline == "no") {
	        $("#nextBtn").css("opacity", 0.1);
	        $("#nextBtn").unbind("click");
	        $("#nextBtn").css("cursor", "default");
	    }
	    else {
	        $("#nextBtn").css("opacity", 0.1);
	        $("#nextBtn").unbind("click");
	        $("#nextBtn").css("cursor", "default");
	    }
	    //End Sunny
	 }
	else {
	    try{
	 //if(pages[SeqID][innerPage].remediation != "yes" && currentPage < totalPages - 1){
	 if(isRemediate() != "yes" && currentPage < totalPages - 1 && isfreesamplecourse == false){
	            $("#nextBtn").css("opacity", 1);
	            $("#nextBtn").unbind("click");
	            $("#nextBtn").css("cursor", "pointer");
	            $("#nextBtn").click(function () { nextPage() });
	        }
	    }
	    catch (e) { }
	 }
	 
	 // Added by maheedhar on 27-10-2014 - disable next for singlepage rendering - No Summary page
	 try{
	    if(trackObjects[SeqID].singleqtnperpage == "no"){
		   if(trackObjects[SeqID].hidesummarypage != "no" || getPageByIndex(getTotalPageInObject(SeqID) - 1).type != "summary"){
			  $("#backBtn").css("opacity", 0.1);
			  $("#backBtn").css("cursor", "default");
			  $("#backBtn img").unbind("hover");
			  $("#backBtn").unbind("click");
			  $("#nextBtn").css("opacity", 0.1);
			  $("#nextBtn").css("cursor", "default");
			  $("#nextBtn img").unbind("hover");
			  $("#nextBtn").unbind("click");
		   }
		}
	 }catch(e){}
	 
    // Added by maheedhar - 11-07-2016 - Hide footer elements in survey singlepage  rendering
    try{
        if (trackObjects[SeqID].testType == "28") {
            if (trackObjects[SeqID].singleqtnperpage == "no") {
                if(trackObjects[SeqID].hidesummarypage == "yes"){
                    $("#nextBtn").hide();
                    $("#backBtn").hide();
                }           
            }
        }
    }catch(e){}
    // Added by maheedhar - 11-07-2016 - Hide footer elements in survey singlepage  rendering
    try {
        if (trackObjects[SeqID].singleqtnperpage == "no" && trackObjects[SeqID].parallaxskin == "true") {
            if (getPageByIndex(getTotalPageInObject(SeqID) - 1).type == "summary") {
                $("#nextBtn").css("opacity", 0.1);
                $("#nextBtn").css("cursor", "default");
                $("#nextBtn img").unbind("hover");
                $("#nextBtn").unbind("click");
                document.getElementById("pagecounter").innerHTML = "Page 1 of 1";
            }

        }
    } catch (e) { }
}

function enableNextButtonWhenCorrect(){
    isremPage = false;
    if(currentPage == totalPages - 1){
        $("#nextBtn").css("opacity", 0.1);
        $("#nextBtn").unbind("click");
        $("#nextBtn").css("cursor", "default");
    } else {
        //alert("yes...yes,..");
        try {
            var canGo = chkIfDisabledByRules(currentPage, "undefined", "next");
        } catch (e) {
            var canGo = true;
        }
        if (canGo == true) {
           $("#nextBtn").css("opacity", 1);
           $("#nextBtn").unbind("click");
           $("#nextBtn").css("cursor", "pointer");
            $("#nextBtn").click(function () { nextPage() });
        }
	}
if(currentPage == 0){	
	$("#backBtn").css("opacity", 0.1);
	$("#backBtn").unbind("click");
	$("#backBtn").css("cursor", "default");
   
} else {
    try {
        var canGo = chkIfDisabledByRules(currentPage, "undefined", "back");
    } catch (e) {
        var canGo = true;
    }
    if (canGo == true) {
        $("#backBtn").css("opacity", 1);
        $("#backBtn").unbind("click");
        $("#backBtn").css("cursor", "pointer");
        $("#backBtn").click(function () { previousPage() });
    }
	}
}
// Check Transcript Status Edited By Raghu//////////////
function chkTranscriptStatus(){
    var isTranscriptAvailable = "no";
    try{
        if (trackObjects[SeqID].isTranscriptAvailable == "yes") {
            isTranscriptAvailable = "yes"
        }
    } catch (e) { isTranscriptAvailable = "no" }
    if ($('#ccTextID').html() == null || $('#ccTextID').html() == "null" || isTranscriptAvailable == "no") {
$("#ccBtn").attr('disabled',true);
$("#ccBtn").addClass("ccopen-btn");
$('#openccPopup').hide();
//$("#ccBtn").css("opacity", 0.1);
$("#ccBtn").css("display", 'none'); //JIRA ID: INST - 3711
		$("#ccBtn").hide();
$("#ccBtn").css("cursor", "default");
$("#ccBtn").unbind("click");
}
else{
        $("#ccBtn").show();
if(ccstate == "on"){
$('#openccPopup').show();
$("#ccPopup").html($('#ccTextID').html());
$("#ccBtn").attr('disabled',false);
$("#ccBtn").removeClass("ccopen-btn");
$("#ccBtn").addClass("cc-btn");
$("#ccBtn").css("display", 'block');
$("#ccBtn").unbind("click");
$("#ccBtn").css("cursor", "pointer");
 $("#ccBtn").click(function() { showHideTranscript() });
}
else{
$("#ccBtn").attr('disabled',false);
$("#ccBtn").addClass("cc-btn");
$("#ccBtn").css("display", 'block');
$("#ccBtn").unbind("click");
$("#ccBtn").css("cursor", "pointer");
 $("#ccBtn").click(function() { showHideTranscript() });
}
}
}
////////////////////////////////////////////////////////////////
/**********************************************************************************************************
***************************This method is used to disable navigation buttons*******************************
**********************************************************************************************************/
function disableButtonsonNavigation() {

    if (currentPage == 0) {
        $("#backBtn").css("opacity", 0.1);
        $("#backBtn").css("cursor", "default");
    }

    if (currentPage == totalPages - 1) {
        $("#nextBtn").css("opacity", 0.1);
        $("#nextBtn").css("cursor", "default");
    }

    $("#backBtn").unbind("click");
    $("#nextBtn").unbind("click");
    $("#exitBtn").unbind("click");

    $("#backBtn").css("cursor", "default");
    $("#nextBtn").css("cursor", "default");
    $("#exitBtn").css("cursor", "default");

    $("#backBtn img").unbind("hover");
    $("#nextBtn img").unbind("hover");
    $("#exitBtn img").unbind("hover");

    /*try {
        $('#nextBtn img')[0].setAttribute('src', $('#nextBtn img')[0].getAttribute('onout'));
        $('#backBtn img')[0].setAttribute('src', $('#backBtn img')[0].getAttribute('onout'));
        $('#exitBtn img')[0].setAttribute('src', $('#exitBtn img')[0].getAttribute('onout'));
    } catch (e) { }*/
}
/**********************************************************************************************************
**************This method is used to enable/disable navigation buttons after page loads********************
**********************************************************************************************************/
function enablesButtonsonNavigation() {

    $("#backBtn").css("cursor", "cursor");
    $("#nextBtn").css("cursor", "cursor");
    $("#exitBtn").css("cursor", "cursor");
    $("#nextBtn").click(function () { nextPage() });
    $("#backBtn").click(function () { previousPage() });
    $("#exitBtn").click(function () { exitCourse() });
    $("#desktopexitBtn").click(function () { exitCourse() });
    $("#saveBtn").click(function () { saveUserData() });
    $("#closeCCBtn").click(function () { CloseCC() });

    $('#nextBtn img').hover(function () {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onover'));
        $(this).addClass('on');
    }, function () {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onout'));
        $(this).removeClass('on');
    });

    $('#backBtn img').hover(function () {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onover'));
        $(this).addClass('on');
    }, function () {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onout'));
        $(this).removeClass('on');
    });

    $('#exitBtn img').hover(function () {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onover'));
        $(this).addClass('on');
    }, function () {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onout'));
        $(this).removeClass('on');
    });

    $('#saveBtn img').hover(function() {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onover'));
        $(this).addClass('on');
    }, function() {
        $(this)[0].setAttribute('src', $(this)[0].getAttribute('onout'));
        $(this).removeClass('on');
    });

    if (currentPage > 0) {
        $("#backBtn").css("opacity", 1);
        $("#backBtn").css("cursor", "pointer");
    }
    
    if (currentPage < totalPages - 1) {
        $("#nextBtn").css("opacity", 1);
        $("#nextBtn").css("cursor", "pointer");
    }
	  // updated for forward only navigation - Raghu
    if (currentPage == 0 || (trackObjects[SeqID].navigation.toLowerCase() == "forward only")) {
        $("#backBtn").fadeTo("fast", 0.1);
        $("#backBtn").unbind("click");
        $("#backBtn").css("cursor", "default");
        $("#backBtn img").unbind("hover");
        $("#backBtn img").removeClass('on');
		disableTOConFFDOnly();
    }

    if (currentPage == totalPages - 1 || (isTrack == "yes" && objType == "assessment" && currPageObject.type.toLowerCase() == "summary" && pages[SeqID].status == "incomplete")) {
        $("#nextBtn").fadeTo("fast", 0.1);
        $("#nextBtn").unbind("click");
        $("#nextBtn").css("cursor", "default");
        $("#nextBtn img").unbind("hover");
        $("#nextBtn img").removeClass('on');
    }

    if (isTrack == "no" && (objType == "assessment" || objType == "contentobject" || objType == "content object") && currPageObject.type.toLowerCase() == "summary") {
        $("#backBtn").fadeTo("fast", 0.1);
        $("#backBtn").unbind("click");
        $("#backBtn").css("cursor", "default");
        $("#backBtn img").unbind("hover");
        $("#backBtn img").removeClass("on");

        $(".tblTOC div table tr td span").each(function (i) {
            $(this).unbind("click");
            $(this).unbind("hover");
            $(this).fadeTo("fast", 0.5);
            $(this).removeClass('TOC_Links_Visited');
            $(this).removeClass('on');
            $(this).removeClass('steps');
            $(this).addClass('TOC_Links_Disable');
        });

        textEntry = true;
    }
    
    }

function disableTOConFFDOnly(){

    $(".tblTOC div table tr td span").each(function (i) {
	var tocNum = parseInt($(this).attr("pagenum"))
	if(tocNum < parseInt(innerPage)){
            $(this).unbind("click");
            $(this).unbind("hover");
            $(this).fadeTo("fast", 0.5);
           // $(this).removeClass('TOC_Links_Visited');
          //  $(this).removeClass('on');
          //  $(this).removeClass('steps');
            $(this).addClass('TOC_Links_Disable');
			$(this).css("cursor","default");
			
			}
        });

}

/**********************************************************************************************************
********************************This method is used to load pages******************************************
**********************************************************************************************************/
function getContent(filename) {
    var filename = filename+"?"+Math.random(999999999) + "" + Math.random(999999999);
    $.ajax({
        url: filename,
        type: 'GET',
        dataType: 'html',
        beforeSend: function() {
        },
        success: function(data, textStatus, xhr) {
            try {
                setTimeout(function() {
                   
                    if (data.indexOf("<!--instancyautoplayaudio-->") != -1)
                          data = data.replace("<!--instancyautoplayaudio-->", "try{CheckAutoplayAudio();}catch(a){}");  
                    if (data.indexOf("<!--instancypagetextresponses-->") != -1)
                        data = data.replace("<!--instancypagetextresponses-->", "try{SetPageTextResponses();}catch(a){}");
                    data = data.replace("mediareources", "../mediareources");
                    if (trackObjects[SeqID].singlePageRendering == "yes") {
                        data = data.replace("instcontentbg", "instcontentbg_" + CurrentSpage);
                        data = data.replace('instsampletable', 'singlePageContent_' + CurrentSpage);
                        if (data.split('instcontentbg').length >= 2) {
                            var tempData = data.split('instcontentbg')[0];
                            var functionData = data.split('instcontentbg')[1];
                            var functionData = functionData.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "");
                            data = tempData + "instcontentbg" + functionData;
                        }
                        //$('#instsampletable').attr();
                       
                    }
                    $('#page').html(data);
                    if (trackObjects[SeqID].singlePageRendering == "yes") {
                        $('#singlePageContent_' + CurrentSpage).height("102%");
                       // $('#nextBtn,#backBtn').css({ 'cursor': 'default', 'opacity': '0.1' });
                        //$('#nextBtn').hide();
                        //$('#backBtn').hide();
                        $('#singlePageContent_' + CurrentSpage).addClass("instcontentbg_" + CurrentSpage);
                    }

                    $('.row').hide();
                    addMathMLCallBack('page');
		            //added by ajay for highlighting page if search word is available
                    if ($("#searchInput").val() != "") {

                        if (currPageObject.excludefromsearch == "no") {
                            highlightSearchTextInCurrentpage(); // highlight the search text in current page..
                        }
						
					}
                    if (!(objType == "assessment" && pages[SeqID][innerPage].type == "summary"))
                    $("#page").fadeTo("slow", 1);
                    if ((objType == "assessment" && currPageObject.type != "summary") || trackObjects[SeqID].singleqtnperpage == "no" || getCoValues("iscoao") != "co")
                        storePageData();

                    //if (getCoValues("iscoao") != "co") {
                    //    storePageData();
                    //}


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
                                //<Ananta>:14/4/16- method for breadcrumb functionality 
				              showTitle();
										  }

									 
                            else {
			        // Added hidetopic condition by maheedhar for CoEditor 5.9 version
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
                    if (currPageObject.iscoao == "co") { // 02-06-2015 : Bhushanam added disable the arrow button in input field page..
                        $.each($("#content").find('textarea'), function (i, obj) {
                            if ($(obj).attr("id").indexOf("instxtresp") != -1) {
                                textEntry = true;
                            }
                        });
                    }
					if($("#page").find("div#tablediv").length > 0){
					   checkAndHideTableGrid();
					};
		    showHideHintButton();
		    showHideSolutionButton();
			animateObject();
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
                        $("#loader").fadeTo("slow", 0, function() { $("#loader").hide(); });
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

                    //added by ajay to show/hide search button
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
                    try{
                        if ((pages[SeqID][innerPage].Qtype).toLowerCase() == "rating") {                            
                            $('table[id^="container_table"]').find("div.star_container").attr('style', 'white-space: nowrap');
                        }
                    }catch(e){}
	                
	           preventNavigation = false;
	           checkWidth();
                    try {
                        if (checkBranching() == true) {
                            isremPage = true;
                        }
                    } catch (e) { }
			offline();
		        //Maheedhar:19/04/2016: added this code for audio mute functionality
					try{
                        if(isTimeline() == "yes"){	
						 
						  setMuteStatusForMediaInTimeLine();
                        }else{						
					      setMuteStatusForMedia("#page");
						}
					}catch(e){}
					if (($('#page').find("video")).length > 0 || ($('#page').find("audio")).length > 0 || ($("#page").find("div[id^='jquery_jplayer_']")).length > 0) {
					    $("#muteBtn").show();
					} else {
					    $("#muteBtn").hide();
					}
			//Maheedhar:19/04/2016: added this code for audio mute functionality
                }, 100);

            }
            catch (e) {
                $('#page').html(data);	
                addMathMLCallBack('page');
                $("#loader").fadeTo("slow", 0, function() { $("#loader").hide(); });
                $("#page").fadeTo("fast", 1);
                if (objType == "assessment" && currPageObject.type != "summary")
                    storePageData();

                pageLoaded = true;
                preventNavigation = false;                
            }

        },
        error: function(xhr, textStatus, errorThrown) {
            $('#page').html(textStatus);
            $("#loader").fadeTo("slow", 0);
            $("#page").fadeTo("slow", 1);
			preventNavigation = false;
        }
    });
}

/**********************************************************************************************************
********************************This method is for Keyboard Events*****************************************
**********************************************************************************************************/
function onKeyPress(event) {

   
    if (IskeybordEvent == true) {
        switch (event.keyCode) {
            case 37:
                if (currentPage != 0 && pageLoaded == true && isFocus == null && textEntry == false) {
                    previousPage();
                }
                break;
            case 39:
                if (currentPage != totalPages - 1 && pageLoaded == true && isFocus == null && chkScenarios() == true && textEntry == false) {
                    nextPage();
                }
                break;
            case 27:
                chkVideoFullscreen();
                break;
            default:
                break;
        }
    }
}

function chkScenarios() {


    var rtnVal = false;

    if(isRemediate() != "yes" && isTimeline() != "yes" ){
    rtnVal = true;
    }
     else if(isRemediate() == "yes" || (isTimeline() == "yes" && getCoValues("pagecompletion") != "completed")){ 
    rtnVal = false;
    }

    else if(isTimeline() == "yes" && getCoValues("pagecompletion") == "completed"){
    rtnVal = true;

    }
    else if(isRemediate() == "yes" && getCoValues("pagecompletion") == "completed"){
    rtnVal = true;
    }

    else if(isRemediate() == "yes" && getCoValues("pagecompletion") == "" && disableNext_ansCorrect == true){
    rtnVal = true;
    }


    return rtnVal;
}
function onKeyDown(event) {
    // //debugger;
	if(event.keyCode == 86 && event.ctrlKey && event.shiftKey) {
        alert("HTML5 Skins - Scripts Version  :: "+ skinDetails.version+"\nLast Released Date                      :: "+skinDetails.releasedate+"\nLast Released Feature                 :: "+skinDetails.feature+"\nLast Released Developer            :: "+skinDetails.developer);
    }
	//event.preventDefault();
}


/**********************************************************************************************************
***********************This method is called once document is loaded***************************************
**********************************************************************************************************/
$(document).ready(function(){
    addAllExternalSupportingFiles();
	$("head").append("<script type='text/javascript' src='scripts/questionpoolgeneration.js'></script>");
    //Maheedhar:15/06/2016: added this code for fullscreen functionality in mobile
    $("head").append("<script type='text/javascript' src='scripts/jquery.finger.js'></script>");
    $("head").append("<script type='text/javascript' src='scripts/jqueryWipe.js'></script>");
    var width = $(window).width();
    if (width < 550) {
        $("head").append("<style>.fullscreenmode{ display:none; }</style>");
    }
   //ajay added for animation link
    	    $("head").append("<link rel='stylesheet' type='text/css' href='styles/animations.css' />");
	addAnimationEvents();
	
	if (trackObjects[SeqID].singlePageRendering == "yes") {
	    $("head").append("<script src='scripts/CommonSinglePageScript.js'></script>");
	}
   
    //Maheedhar:15/06/2016: added this code for fullscreen functionality in mobile
    
    if (getMobileUserAgent()) {
      // Mobile swipe event - Maheedhar
        addSwipeEvents();
    }

    var randomNumber = Math.random(999999999) + "" + Math.random(999999999);
    var actSrc = $("#imgLogo").attr("src");
    actSrc = actSrc + "?" + randomNumber;
    $("#imgLogo").attr("src", actSrc);
    try{    
        if (isIE()) {
            $("head").append("<style >table[class='tableclassview'] tbody tr td div, table[class='tableclassview'] tr td div { height:inherit !important; }</style>");
        }
    }catch(e){}
    $("head").append("<script type='text/javascript' src='scripts/AICCFunctions.js'></script>");
    $("head").append("<script type='text/javascript' src='scripts/APIConstants.js'></script>");
    $("head").append("<script type='text/javascript' src='scripts/UtilityFunctions.js'></script>");
    $("head").append("<script type='text/javascript' src='scripts/Configuration.js'></script>");
    //ajay adding for enhancement in print popup
    $('tr#trPrintContent input.printbtnpopup').removeAttr('onclick').attr('id', 'printbtnpopup');
    
})
$(window).bind("load", function() {

/*try{isConnectedToInternet = hostReachable();}catch(e){}*/ // This method returns the status of Internet connection
   try{ SetCourseActivity();}catch(e){}
    tincan = new TinCan({
        url: window.location.href,
        activity: Instancy_TCAPI.CourseActivity
    });
  
    //if (tincan.recordStores.length > 0 && Config.endpoint != "" && (TinCan.Utils.parseURL(window.location).params.endpoint != Config.endpoint || TinCan.Utils.parseURL(window.location).params.auth != Config.auth)) {
    //17-2-2015 remove auth and take condition for endpoint only for MCI bug in sub site
    if (tincan.recordStores.length > 0 && Config.endpoint != "" && (TinCan.Utils.parseURL(window.location).params.endpoint != Config.endpoint)) {
        tincan2 = new TinCan({
            url: "http:\\instncy.com?endpoint=" + Config.endpoint + "&auth=" + Config.auth + "&actor=" + TinCan.Utils.parseURL(window.location).params.actor + "",
            activity: Instancy_TCAPI.CourseActivity
        });
    }
    else {
        try {
            if (tincan.recordStores.length == 0 && TinCan.Utils.parseURL(window.location).params.actor !=null) {
                tincan = new TinCan({
                    url: "http:\\instncy.com?endpoint=" + Config.endpoint + "&auth=" + Config.auth + "&actor=" + TinCan.Utils.parseURL(window.location).params.actor + "",
                    activity: Instancy_TCAPI.CourseActivity
                });

                tincan2 = new TinCan({
                    url: "http:\\instncy.com",
                    activity: Instancy_TCAPI.CourseActivity
                });
            }
            else {
                tincan2 = new TinCan({
                    url: "http:\\instncy.com",
                    activity: Instancy_TCAPI.CourseActivity
                });
            }
        }
        catch (e) { }
    }
    //Kiran added for  hiding timer in reports from learner,admin side\\
    var singlePageRendering = true;

    try {
        if (window.parent.isfromreports != undefined && window.parent.isfromreports == "true") {
            trackObjects[SeqID].enabletimer = "no";
        }
    } catch (e) { }
    try {
        if (window.parent.IsReportfromAdmin != undefined && window.parent.IsReportfromAdmin == "true") {
            trackObjects[SeqID].enabletimer = "no";
        }
    } catch (e) { }
    try {
        if (window.parent.isfromreports != undefined && window.parent.isfromreports=="true" && singlePageRendering==true) {
            trackObjects[SeqID].enabletimer = "no";
        }
    } catch (e) { }
    try {
        if (window.parent.IsReportfromAdmin != undefined && window.parent.IsReportfromAdmin == "true" && singlePageRendering == true) {
            trackObjects[SeqID].enabletimer = "no";
        }
    } catch (e) { }
    if (tincan.recordStores.length > 0) {
        
        tincan.sendStatement(
            {
                verb: {
                    id: "http://adlnet.gov/expapi/verbs/attempted",
                    display: {
                        "en-US": "attempted"
                    }
                },
                inProgress: true,
                object: Instancy_TCAPI.CourseActivity,
                timestamp: GetdatetoUTCString(),
                context: Instancy_TCAPI.getContext()
            }
        );
        if (tincan2.recordStores.length > 0) {
            tincan2.sendStatement(
                {
                    verb: {
                        id: "http://adlnet.gov/expapi/verbs/attempted",
                        display: {
                            "en-US": "attempted"
                        }
                    },
                    inProgress: true,
                    object: Instancy_TCAPI.CourseActivity,
                    timestamp: GetdatetoUTCString(),
                    context: Instancy_TCAPI.getContext()
                }
            );
        }
        loadQuestions();
    }
    //    if (tc_lrs !== null && tc_lrs !== undefined) {
    //        var stmt = {
    //            verb: "http://adlnet.gov/expapi/verbs/attempted",
    //            inProgress: true,
    //            object: Instancy_TCAPI.CourseActivity,
    //            context: Instancy_TCAPI.getContext()
    //        };


    //        TCDriver_SendStatement(tc_lrs, stmt);
    //    }

    // For --> win XP - Chrome browser unable to show title when launch
	userPreferedLang = "english";
    try
    {
    window.resizeBy(1, 1);
    window.resizeBy(-1, -1);
    } catch (e) { }
    $(document).bind("contextmenu", function(e) {
        return false;
    });
    $("#imgLogo").hide();
    try {
        if (arrAllObjects == undefined)
            arrAllObjects = new Array();
    } catch (e) { arrAllObjects = new Array(); }

    if (isTrack == "yes") {
      
        $('head').append("<script type='text/javascript' src='scripts/APIAdapter.js'></script>");
    }
    else {
        
        $('head').append("<script type='text/javascript' src='scripts/SCORM12_Wrapper.js'></script>");
    }

	//10-06-2016 :Bhushanam - AICC Code.. Bhushanam added this code..
	// strTemp = GetQueryStringValue("AICC_URL"); 
	 var strTemp = GetQueryStringValue("AICC_URL", document.location.search);
	 if(strTemp!=null && strTemp!=""){
	      IsAICC = true;
		  AICC_Initialize();
		  
	} // end...
	 bkpPagesArray = copyarray(pages);
    bDisableAPINotFoundError = true;
    //if (tc_lrs === null || tc_lrs === undefined)
	if (!IsAICC){
		if (tincan.recordStores.length === 0) {
			//--krishna -- for IOS offline tracking.   
			if (fnGetQueryString("cid") == "")
				objAPI = getAPI();
			else
				objAPI = new NativeAPIAdapter();
		}
	}
    if (objAPI == null) {
        // SCORM API was not found
        handleSCORMError();
        bSCORM12Enabled = false;
    }
    else {
        bSCORM12Enabled = true;
        $("#discussionBtn").fadeTo("slow", 1);
        $("#discussionBtn").addClass("on");
    }
    $("#saveBtn").hide();
    if (backupPagesArray.length <= 0) {
        backupAllPageObjects();
    }

    if (isTrack == "yes") {
        LMSTrackInitialize();
        onTrackLoad();

    } else {
        onContentLoad();
        GetSessionURL();
    }
    // Priya - 1/7/16 for getting the content according to the user preferred language
  
    try{
        userPreferedLang = getDefaultUserLanguage();
    } catch (e) {
        userPreferedLang = "english";
    }    
    if (userPreferedLang == "" || userPreferedLang == undefined) {
        userPreferedLang = "english";
    }
    selectedLanguage = UserSelectedlangValues(userPreferedLang);
    var languages = [];
    if (trackObjects[SeqID].availablelanguages != undefined) {
        var languages = (trackObjects[SeqID].availablelanguages.split(",") == undefined ? trackObjects[SeqID].availablelanguages : trackObjects[SeqID].availablelanguages.split(","));
    }
    var isLangExisted = false;

    for (i = 0; i <= languages.length - 1; i++) {
        if (languages[i] == selectedLanguage) {
            isLangExisted = true;
            break;
        }
    }
    if (!isLangExisted) {
        selectedLanguage = "english";
    }
	//// ON Click on Audio Transcript Button/////////////////////////
	 $("#ccBtn").click(function() { showHideTranscript() });
	 $(document).mousedown(function(event) {  
	  if($(event.target).attr('id') == "tocMenuId"){
	return false;
	}
	  $(".tblTOC div table tr td span").each(function (i) {
	      
	      if (event.target.nodeName != "SPAN") {
	 hideToc(event); 
	 return false;
	 }
	 });
	 });
	/* -------SWIPE EVENT--------*/
    /*$('#SectionDiv').live('swipeleft swiperight', function (event) {
        if (event.type == "swiperight"){
            swipeLeft("swipeRight")
            event.stopImmediatePropagation();
        }
        else{
            swipeLeft("swipeLeft")
            event.stopImmediatePropagation();
        }
    })*/
    if (isattemptscompleted == false) {  // added this condition once No. of attempts completed, no need to call this function.
        if (trackObjects[0].enableautoretake == "yes" && (strLessonStatus == 'failed' || strLessonStatus == 'passed'))
            AutoRetakeTest();
    }
    /*-----added for hidetoc functionality by ananta--------*/ 
    if (trackObjects[0].hidetoc == "yes") {
       // debugger;
        $("#tocMenuId").hide();
    }
    else {
        $("#tocMenuId").show();
    }
    /*-------<6/5/2016>:Added for show/hide page number by Ananta--------*/
    if (trackObjects[0].showpagenumber == "yes") {
        $("#pagecounter").show();
    }
    else {
        $("#pagecounter").hide();
    }
///// Check CC Functionality is availablity or not///////////////////////////////////////
/*if(isTranscriptAvailable == "yes"){
 $("#ccBtn").show();
}
else{
 $("#ccBtn").hide();
}*/

    ////////////// Swipe Events //////////////////////
    /*
var touchEventDiv = document.getElementById('SectionDiv');
touchObj = new Hammer(touchEventDiv);
touchObj.get('pan').set({ direction: Hammer.DIRECTION_ALL });
touchObj.get('pan').set({ threshold: 70 });
// listen to events...
    // panleft panright tap press
touchObj.on("panleft panright panup pandown", function (ev) {
    enableSwipeEvents(ev);
    //alert(ev.type);
});

//////////////////////////////////////////////////
*/
    // Priya - 1/7/16 commented for getting the active language which user selected.  
    if (isPreviewMode() || selectedLanguage == "" || selectedLanguage == undefined) {
        selectedLanguage = trackObjects[SeqID].activelanguage
    }
loadlocalization();
$('#selectLang').on("change", function () {
    debugger;
		var optionSelected = $("option:selected", this);
		var valueSelected = this.value;
		enablelanguage = valueSelected; 
		selectedLanguage = enablelanguage;
		currentFontIncrement = 0;
		updateTocTextWithLang(selectedLanguage);   
		    gotoPage(currentPage);		
	});
    $("#txtslidefrom").on("change", function (e) {
        validatePageNumbersRange("txtslidefrom", parseInt($(this).val()));
    });
    $("#txtslideto").on("change", function (e) {
        validatePageNumbersRange("txtslideto", parseInt($(this).val()));
    });
    $("#txtspecific").on("change", function (e) {
        validate($(this).val());
    });
	if(!printJsAdded){	    
		$.getScript("scripts/jQuery.print.js");		
		printJsAdded = true;
	}
	$("#fontPlus").bind("click",function(){
		increaseFontSize();
	});

	$("#fontMinus").bind("click",function(){
		decreaseFontSize();
	});
	$("#searchBtn").bind("click", function () {
	    $("#searchResultsPopup").toggle();
	    $("#searchInput").focus();
	    $('#content').toggleClass('marge-left');
	    searchItem = true;
	});

	$("ul.option-content li.inlineBlock,body,body").on("click", "div,div#printpg,h3.h3print", function () {
	    if ($(this).attr("data-popup") != undefined) {
	        $(".popup").not("#" + $(this).attr("data-popup")).hide()
	        if (this.id != "ccBtn") {
	            if (ccstate = "on") {
	                ccstate = "off"
	                $("#ccBtn").removeClass("cc-btn");
	                $("#ccBtn").addClass("ccopen-btn");
	            }            
	        }
	        if (this.id != "divnoteBtn") {
	            if (Notestate == "on") {
	                Notestate = "off";
	            }
	        }
			 if (this.id != "searchBtn" && this.id != "tocMenuId" ) {
	             $('#content').removeClass('marge-left');
	        }
			if (this.id == "searchBtn") {
	            if (document.getElementById("searchResultsPopup").style.display == "block"||document.getElementById("searchResultsPopup").style.display == "") {
	                $('#content').addClass('marge-left');
	            }
				else{
					 $('#content').removeClass('marge-left');
				}
				
	        }
	    }
	    $('.dropdown-menu').hide();
	});
		$('#closeSearchPopup').click(function () { hidesearchResultsPopup() });
		$('#minimize-popup').click(function () {
		    if ($('#content').hasClass('marge-left')) {
		        $('#content').removeClass('marge-left');
		    }		
	    $('#searchResultsPopup').hide();
	});
	$("#Searchresult").on("click",'li div.resultlink', function () {
	    $("#Searchresult").find('.resultlink.visited').removeClass('visited');
	    $(this).addClass('visited');
		if(trackObjects[SeqID].singleqtnperpage=="yes"){
	   tocGotoPage(this.parentElement.attributes["pagenumber"].value);
		}
		else{
			var pageid=$(this).attr("pageid");
			window.location.hash = '#'+pageid;
			highlightSearchTextInCurrentpage();
		}
	});
	
	$("#searchBtnGet").click(function () {
	  
	    var word = $("#searchInput").val();
	    if (word!="") {
	    if (word != "$" || word != "^") {
	        $("span").removeClass("sarechresult")
	        $(".resultlink").parent().remove();
	        $(".noresultlink").parent().remove();
	        highlightSearchTextInCurrentpage();
	        filterTopicsAndSearch();
	        if ($("ul.searchresults").children().length == 0) {
	            $(".noresultlink").parent().remove();
	            $("ul.noresults").append("<li><div class='noresultlink'>No results found</div></li>");
	        }
	        else {
	            $(".noresultlink").parent().remove();
	        }
	        if ($("#searchInput").val() == "") {
	            $(".noresultlink").parent().remove();
	        }
	    }
	    }
	    else {
	        alert("Please enter atleast one word to search");
	    }
	});
	$("#searchInput").keypress(function (e) {
	    if (e.which == 13) {
	      
	        var word = $("#searchInput").val();
	        if (word!="") {
	            if (word!="$"||word!="^") {  
	        	    $("span").removeClass("sarechresult")
	        	    $(".resultlink").parent().remove();
	        	    $(".noresultlink").parent().remove(); 
	        	    highlightSearchTextInCurrentpage();
	        	    filterTopicsAndSearch();
	        	    if ($("ul.searchresults").children().length == 0) {
	        	        $(".noresultlink").parent().remove();
	        	        $("ul.noresults").append("<li><div class='noresultlink'>No results found</div></li>");
	        	    }
	        	    else {
	        	        $(".noresultlink").parent().remove();
	        	    }
	        	    if ($("#searchInput").val() == "") {
	        	        $(".noresultlink").parent().remove();
	        	    }
	            }
	        }
	        else {
	            alert("Please enter atleast one word to search");
	        }
	    }
	});
    //ajay for save course as PDF 
	$("#PrintMode").bind("click", function () {
	    $("#trPrintContent").show();
	    $("#trSavePDF").hide();
	});
	$("#PDFMode").bind("click", function () {
	    $("#trPrintContent").hide();
	    $("#trSavePDF").show();
	});
	$('tr#trPrintContent input.printbtnpopup').bind('click', function (e) {
	    outputMode = 'print';
	    if (trackObjects[SeqID].singleqtnperpage == "no") {
	       var data= filteredDataToPDF($('.content').html());
	        var TEmpDiv = $('<div>');
	        $(TEmpDiv).appear(data);
	        printThisHTML($(TEmpDiv).html());
	    }
	    else {
	        var html = getAllContentAsPDF();
	    }

	});
$("#savePDF").click(function (e){
    outputMode = 'pdf';
	if (trackObjects[SeqID].singleqtnperpage == "no") {
	    SaveAsPdf($('.content').html())
	}
	else {
	    var html = getAllContentAsPDF();
	}

});
	
	if (trackObjects[SeqID].allowcopynotes == "yes")
	    loadContextMenuSettings();	
		
	if (trackObjects[SeqID].coursehints == "yes"){
	    courseHints = "yes";
		maxHints = trackObjects[SeqID].maxhints;
	}

	courseProgressFontColor = getHexColor($("div.tblTOC").find("span[visited='false']").css("color"));
	$("#courseProgress").css({"border":"none","padding":"0px"});
	$("div[id^='topicProgress']").css({ "border": "none", "padding": "0px" });
	$("div.topicDiv").css({ "border": "none", "padding-top": "5px", "padding-bottom": "5px" });
	addCCCloseStyles();
	//Maheedhar:19/04/2016: added this code for audio mute functionality
	$("#muteBtn").click(function(){
	    muteUnmutePlayers();
	})
    // Hide mute button as there is no support for mute for html5 media elements in ios
	if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) {	   
	    $("#muteBtn").hide();
	}
	$("#muteBtn").addClass("courseunmute");
	$("#muteBtn").attr("title", "Mute");
    //Maheedhar:19/04/2016: added this code for audio mute functionality
    //Maheedhar:15/06/2016: added this code for fullscreen functionality in mobile	
    try {
        if (fnGetQueryString("nativeappURL") == "") {
            $('#page').on('doubletap', toggleFullScreenMode);
        }
    } catch (e) { }
    //Maheedhar:15/06/2016: added this code for fullscreen functionality in mobile
    // Maheedhar: for content background
	$("#content").addClass("instcontentbg");
});
function hideToc(event){
if(isTOCOpen == true && $(event.target).attr("id") != "apDiv2" && $(event.target).parent().parent().attr("id") !="folderTree" && $(event.target).attr('id') != "coursetoc" && $(event.target).attr("id") != "folderTreetd"){
//alert($(event.target).parent().parent().attr("id"))
    document.getElementById("folderTreetd").style.display = "none";
   if ($('#content').hasClass('marge-left')) {
    $('#content').removeClass('marge-left');
   }
isTOCOpen = false;
}
if ($('#content').hasClass('marge-left')) {
    if (searchItem==false  ){
    $('#content').removeClass('marge-left');
    $('#searchResultsPopup').css('display', 'none');
  
    }
}

}
function disableTOC(){
//debugger;
$(".tblTOC div table tr td span").each(function(i) {
$(this).unbind("click");

});
}
//////////////////////// SwiPe Event Method////////////////////
function swipeLeft(Direction){
switch(Direction){
case "swipeLeft":
if(currentPage>0){
previousPage();
}
else{
alert("You are on the first page");
}
break;
case "swipeRight":
if(currentPage<(totalPages-1)){
nextPage();
}
else{
alert("You are on the last page");
}
break;
default:
}
}
/////////////////////////////////////////////
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
function addDiscussionLink() {
    if (showDiscussion == "yes") {
        $("#discussionBtn").fadeTo("slow", 1);
        $("#discussionBtn").unbind("click");
        $("#discussionBtn").bind("click", function () {
            var frmPreview = "";
            try {
                frmPreview = window.parent.document.getElementById("insCourseView").src.toLowerCase();
            }
            catch (e)
            { }

            if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > -1 || frmPreview.indexOf("publicmodules/preview.aspx") > -1) {
                var strBegin = "";
                if (frmPreview != "" && frmPreview.indexOf("publicmodules/preview.aspx") != "") {
                    strBegin = frmPreview.split("publicmodules")[0];
                }
                else {
                    strBegin = window.parent.location.href.toLowerCase().split("remote")[0];
                }
            if (objType == "content object" || objType == "contentobject") {
                if (trackObjects[SeqID].ShowDiscussions == "yes")
                    var contentIDforForum = trackObjects[SeqID].contentid;
                else
                    var contentIDforForum = isTrack == "yes" ? trackID : trackObjects[SeqID].contentid;
            } else {
                var contentIDforForum = isTrack == "yes" ? trackID : trackObjects[SeqID].contentid;
            }
            strBegin += "CourseDiscussionsPage.aspx?ContentID=" + contentIDforForum + "&Width=" + 800 + "&Height=" + 500 + "";
            if (ShowAsModel == "yes")
                window.showModalDialog(strBegin, "", "dialogHeight:" + window.parent.outerHeight + "px; dialogWidth:" + window.parent.outerWidth + "px;");
            else
                window.open(strBegin, "DiscussionPage", "height=575,width=830,status=no,toolbar=no,menubar=no,location=no");
            } else { alert("Discussion forum is not available in preview mode."); }
        });
    }
    else {
        $("#discussionBtn").hide();
    }
}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
// Kiran added for Buy Attempts in assessment feature //
function gotoBuyAttempts() {
 var isadminpreview = false;

    try {
        if (window.parent.parent.IsAdminview != undefined) // admin content preview..
            isadminpreview = window.parent.parent.IsAdminview;
    } catch (e) {
        isadminpreview = false;
    }
    if (trackObjects[SeqID].buyattempts == "yes") {

        $("#BuyattemptsBtn").bind("click", function () {
            if (isadminpreview == true || isadminpreview == "true") // admin content preview..
            {
                alert("Admin can not purchase attempts");
                return false;
            }
            if (tincan.recordStores.length > 0) {
                alert("You can not purchase attempts when LRS enabled. Please contact your administrator"); //Alert when LRS enabled
                return false;
            }
         
            var frmPreview = "";
            try {
                frmPreview = window.parent.document.getElementById("insCourseView").src.toLowerCase();
            }
            catch (e)
            { }
            if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > -1 || frmPreview.indexOf("publicmodules/preview.aspx") > -1) {
                var strBegin = "";
                if (frmPreview != "" && frmPreview.indexOf("publicmodules/preview.aspx") != "") {
                    strBegin = frmPreview.split("publicmodules")[0];
                }
                else {
                    strBegin = window.parent.location.href.toLowerCase().split("remote")[0];
                }
                if (confirm("You are about to leave this page and redirect to another page to process the payment. Are you sure to continue?")) {
                    var scoid = LMSGetSCOID();
                    strBegin += "BuyAttempt.aspx?scoid="+scoid+"&ContentID=" + trackObjects[SeqID].contentid + "&noofattempts=" + trackObjects[SeqID].attemptstobuy + "&price=" + trackObjects[SeqID].buyattemptsprice + "";
                  
                window.parent.redirecttoPurchasepage(strBegin);
                }
            }
            else {
                alert("Buy attempts not available in preview mode");
            }
            if (trackObjects[SeqID].enabletimer == "yes") {
                if (window.parent.GetCourseLaunchWindow() != undefined && window.parent.GetCourseLaunchWindow() == "1") {
                    SetTimeWhenCourseClose();                      //saving timer value in suspend data when course closed
                }
            }
              });

    }
   

}
//Kiran added for starting Timer  //
function ShowTimer() {
        if (trackObjects[SeqID].settimelimithrs != null) {
            if (trackObjects[SeqID].settimelimitmins != null) {
                if (trackObjects[SeqID].settimelimitsecs != null) {
                    if (document.getElementById("lblTimer") != null)
                        document.getElementById("lblTimer").innerHTML = trackObjects[SeqID].settimelimithrs + ":" + trackObjects[SeqID].settimelimitmins + ":" + trackObjects[SeqID].settimelimitsecs;
                }
            }
        }
        if (trackObjects[SeqID].timeleft != undefined && trackObjects[SeqID].timeleft == "yes") {
            $("#lblTimer").timer({
                countdown: true,
                duration: Math.abs(Totaltime(totalTime)),
                format: '%H:%M:%S',
                callback: function () {
                    if ($("a.ui-dialog-titlebar-close") != undefined) {
                        $("a.ui-dialog-titlebar-close").trigger("click")
                    }
                    $('#lblTimer').timer('remove');
                    timeisUp();
                    IskeybordEvent = false; //Added by kiran to stop navigation on keypress when time over
                }
            });
            ShowFirtWarningWhenCourseLaunch();
            ShowSecondWarningWhenCourseLaunch();

        }
        else {
            if (trackObjects[SeqID].settimelimithrs != "00" || trackObjects[SeqID].settimelimitmins != "00" || trackObjects[SeqID].settimelimitsecs != "00") {
                $('#lblTimer').timer({
                    format: '%H:%M:%S',
                    duration: Math.abs(Totaltime(totalTime)),
                    callback: function () {
                        if ($("a.ui-dialog-titlebar-close") != undefined) {
                            $("a.ui-dialog-titlebar-close").trigger("click")
                        }
                        $('#lblTimer').timer('remove');
                        timeisUp();
                        IskeybordEvent = false;
                    }
                });
            }
            ShowFirtWarningWhenCourseLaunch();
            ShowSecondWarningWhenCourseLaunch();
        }
    }   
//kiran added for updating time  when course relaunched\\
function ResumeTimerWhenCourseRelaunch(strData) {
    try {
        if (strData == null || strData == "" || strData == undefined) {
            if (retakeClicked == false) {
                ShowTimer();
            }
        }
        else {
            if (trackObjects[SeqID].timeleft !=undefined && trackObjects[SeqID].timeleft == "yes") {
                var showtimeWhenRelaunch;
                strData = strData.split(",");
                showtimeWhenRelaunch = strData[1];
                var Time = showtimeWhenRelaunch.split(";")[1];
                document.getElementById("lblTimer").innerHTML = Time;
              var tt = Time.split(":");
                 var timeinsecs = tt[0] * 3600 + tt[1] * 60 + tt[2] * 1;
                if (timeinsecs == 0 && trackObjects[SeqID].type.toLowerCase() == "contentobject") {
                    gotoPage(0);
                    ShowTimer();
                }
                else {
                    $('#lblTimer').timer({
                        countdown: true,
                        format: '%H:%M:%S',
                        duration: timeinsecs,
                        callback: function () {
                            if ($("a.ui-dialog-titlebar-close") != undefined) {
                                $("a.ui-dialog-titlebar-close").trigger("click")
                            }
                            $('#lblTimer').timer('remove');
                            timeisUp();
                            IskeybordEvent = false;
                        }
                    });
                    var TimeSpentinSecs = Math.abs(Totaltime(totalTime) - Timeleft(Time));
                    TotalTimeSpent = TimeSpentinSecs * 1000;

                    ShowFirtWarningWhenCourseReLaunch(TotalTimeSpent);
                    ShowSecondWarningWhenCourseReLaunch(TotalTimeSpent);
                }
            }
            else {
                var showtimeWhenRelaunch;
                strData = strData.split(",");
                showtimeWhenRelaunch = strData[1];
                document.getElementById("lblTimer").innerHTML = showtimeWhenRelaunch;
                var Time = showtimeWhenRelaunch.split(";")[1];
                tt = Time.split(":");
                timeinsecs = tt[0] * 3600 + tt[1] * 60 + tt[2] * 1;
                if (timeinsecs == Math.abs(Totaltime(totalTime)) && trackObjects[SeqID].type.toLowerCase() == "contentobject") {
                    gotoPage(0);
                    ShowTimer();

                }
                else {
                    $('#lblTimer').timer({
                        seconds: timeinsecs,
                        format: '%H:%M:%S',
                        duration: Math.abs(Totaltime(totalTime)),
                        callback: function () {
                            if ($("a.ui-dialog-titlebar-close") != undefined) {
                                $("a.ui-dialog-titlebar-close").trigger("click")
                            }
                            $('#lblTimer').timer('remove');
                            timeisUp();
                            IskeybordEvent = false;
                        }
                    });
                    var TimeSpentinSecs = Math.abs(Timeleft(Time));
                    TotalTimeSpent = TimeSpentinSecs * 1000;

                    ShowFirtWarningWhenCourseReLaunch(TotalTimeSpent);
                    ShowSecondWarningWhenCourseReLaunch(TotalTimeSpent);

                }
            }
        }
    
    } catch (e) { }
}

//kiran added for showing warning alert in timer feature\\
function WarningAlert(msg, duration) {
    var alert = document.createElement("div");
    $(alert).attr("class","Warningmsg")
    alert.innerHTML = msg;
    setTimeout(function () {
        alert.parentNode.removeChild(alert);
    }, duration);
    document.body.appendChild(alert);
}
//Kiran added for calculating total time spent in timer feature \\
function Timeleft(Time) {
    // Extract hours, minutes and seconds
    var parts = Time.split(':');
    // compute  and return total seconds
    return parts[0] * 3600 + // an hour has 3600 seconds
    parts[1] * 60 + // a minute has 60 seconds
    +
    parts[2]; // seconds
}
function Totaltime(totalTime) {
    var totalTime;
    totalTime = trackObjects[SeqID].settimelimithrs + ":" + trackObjects[SeqID].settimelimitmins + ":" + trackObjects[SeqID].settimelimitsecs;
    var parts2 = totalTime.split(':');
    return Number(trackObjects[SeqID].settimelimithrs * 3600) + // an hour has 3600 seconds
       Number(trackObjects[SeqID].settimelimitmins * 60) + // a minute has 60 seconds
       Number(trackObjects[SeqID].settimelimitsecs);
}
//kiran added for showing Warning message for author given duration when course launch //
function ShowFirtWarningWhenCourseLaunch() {
    if (trackObjects[SeqID].firstwarninghrs != null || trackObjects[SeqID].firstwarningmins != null || trackObjects[SeqID].firstwarningsecs != null) {
        var firstwarnHoursInSeconds = parseInt(trackObjects[SeqID].firstwarninghrs * 3600);
        var firstwarnMinutesInSeconds = parseInt(trackObjects[SeqID].firstwarningmins * 60);
        var firstwarnSeconds = parseInt(trackObjects[SeqID].firstwarningsecs);
        var FirstwarningTime = (firstwarnHoursInSeconds + firstwarnMinutesInSeconds + firstwarnSeconds) * 1000;
        if (FirstwarningTime != undefined && FirstwarningTime != 0) {
            setTimeout(function () {
                if (currPageObject.type != undefined && currPageObject.type != "summary") {
                    WarningAlert(trackObjects[SeqID].warningmessage, 5000);
                }
            }, FirstwarningTime);
        }
    }
}
function ShowSecondWarningWhenCourseLaunch() {
    if (trackObjects[SeqID].secondwarninghrs != null || trackObjects[SeqID].secondwarningmins != null || trackObjects[SeqID].secondwarningsecs != null) {

        var secondwarnHoursInSeconds = parseInt(trackObjects[SeqID].secondwarninghrs * 3600);
        var secondwarnMinutesInSeconds = parseInt(trackObjects[SeqID].secondwarningmins * 60);
        var secondwarnseconds = parseInt(trackObjects[SeqID].secondwarningsecs);
        var SecondWarningTime = (secondwarnHoursInSeconds + secondwarnMinutesInSeconds + secondwarnseconds) * 1000;
        if (SecondWarningTime != undefined && SecondWarningTime != 0) {
            setTimeout(function () {
                if (currPageObject.type != undefined && currPageObject.type != "summary") {
                    WarningAlert(trackObjects[SeqID].warningmessage, 5000);
                }
            }, SecondWarningTime);
        }
    }
}

//kiran added for showing Warning message for author given duration when course Relaunch //
function ShowFirtWarningWhenCourseReLaunch(TotalTimeSpent) {
    if (trackObjects[SeqID].firstwarninghrs !=null || trackObjects[SeqID].firstwarningmins != null || trackObjects[SeqID].firstwarningsecs != null) {
        var firstwarnHoursInSeconds = parseInt(trackObjects[SeqID].firstwarninghrs * 3600);
        var firstwarnMinutesInSeconds = parseInt(trackObjects[SeqID].firstwarningmins * 60);
        var firstwarnSeconds = parseInt(trackObjects[SeqID].firstwarningsecs);
        var FirstwarningTime = (firstwarnHoursInSeconds + firstwarnMinutesInSeconds + firstwarnSeconds) * 1000;
        if (FirstwarningTime != undefined && FirstwarningTime != 0) {
            if (FirstwarningTime > TotalTimeSpent) {
                setTimeout(function () {
                    if (currPageObject.type != undefined && currPageObject.type != "summary") {
                        WarningAlert(trackObjects[SeqID].warningmessage, 5000);
                    }
                }, (FirstwarningTime - TotalTimeSpent));
            }
        }
    }
}
function ShowSecondWarningWhenCourseReLaunch(TotalTimeSpent) {
    if (trackObjects[SeqID].secondwarninghrs != null || trackObjects[SeqID].secondwarningmins != null || trackObjects[SeqID].secondwarningsecs != null) {

        var secondwarnHoursInSeconds = parseInt(trackObjects[SeqID].secondwarninghrs * 3600);
        var secondwarnMinutesInSeconds = parseInt(trackObjects[SeqID].secondwarningmins * 60);
        var secondwarnseconds = parseInt(trackObjects[SeqID].secondwarningsecs);
        var SecondWarningTime = (secondwarnHoursInSeconds + secondwarnMinutesInSeconds + secondwarnseconds) * 1000;
        if (SecondWarningTime != undefined && SecondWarningTime != 0) {
            if (SecondWarningTime > TotalTimeSpent) {
                setTimeout(function () {
                    if (currPageObject.type != undefined && currPageObject.type != "summary") {
                        WarningAlert(trackObjects[SeqID].warningmessage, 5000);
                    }
                }, (SecondWarningTime - TotalTimeSpent));
            }
        }
    }
}
//kiran added for alert popup when time over\\
function timeisUp() {
    $("#TimerPopup").html(trackObjects[SeqID].timeexpirymessage);
    $("#TimerPopup").dialog({
        resizable: false,
        draggable: false,
        modal: true,
        dialogClass: "noclose",
        title: "Time Limit Exceeded",
        height: 250,
        width: 450,
        buttons: {
            "Close": function () {
                $(this).dialog('close');
                if (isCoAoType().toLowerCase() == "ao"|| trackObjects[SeqID].type.toLowerCase() == "contentobject") {
                    checkAnswer();
                    if (isinstancycontent == true) {
                        SaveQuestionData();
                        }
                }
                if (getPageByIndex(getTotalPageInObject(SeqID) - 1).type == "summary") {
                    gotoPage(getTotalPageInObject(SeqID) - 1);
                  
                }
                else {
                    exitCourse();
                  
                }
            }
        }
    });
}
function onTrackLoad()
{
	//debugger;

	for(var j=0; j<pages.length; j++)
	{
		SeqID = j;
		var statusVal = LMSGetContentStatus();
		if(statusVal == undefined || statusVal == null)
			statusVal = "incomplete";

        pages[j].status = statusVal;

        var strData = LMSGetInstancySuspendData();		
		if(strData == null || strData == "" || strData == undefined)
		{ 
			strData = "";
		}

		var strPageTrackingSectionStart = "#pgvs_start#";
		var strPageTrackingSectionEnd = "#pgvs_end#";
		var nPos1, npos2;
		var strPre, strPost, strMid;

		strPre = "";
		strPost = "";
		strMid = "";
		nPos1 = strData.indexOf(strPageTrackingSectionStart);

		if (nPos1 != -1) {
			nPos2 = strData.indexOf(strPageTrackingSectionEnd);

			if (nPos2 != -1) {
				strPre = strData.substring(0, nPos1);

				strPost = strData.substring(nPos2 + strPageTrackingSectionEnd.length, strData.length);

				strMid = strData.substring(nPos1 + strPageTrackingSectionStart.length, nPos2);


				suspendPageIDs = strMid;

				var arrData = strMid.split(";")
				trackObjects[SeqID].prevData = arrData;
			}
		}

        var objSubmitTime = LMSGetObjectSubmittedTime();
        if (objSubmitTime != 0 && objSubmitTime != -1 && objSubmitTime != undefined) {
            objSubmitTime = objSubmitTime;
            arrAllObjects[j].timegetsubmitted = new Date().getTime();
        }
        else
            objSubmitTime = 0;

        arrAllObjects[j].submitedtime = objSubmitTime;

	}	

	SeqID = LMSGetTrackBookmark();
	if (SeqID == "false" || SeqID == false) {
		SeqID = 0;
	}
	else
		SeqID--;

	onContentLoad();
	GetSessionURL();

}

/**********************************************************************************************************
********************This method is used to create AO-CO TOC and initialize on skin load********************
**********************************************************************************************************/
function generateTOC() {
  
    var pageIcon = TocPageIcon;
    var tocListIcon;
    if (pageIcon != "" && pageIcon != undefined) {
         tocListIcon="<i class='" + pageIcon + "'></i>";
    }
    else {
         tocListIcon = "<img src='images/bullet.gif' />";
    }
    //$(function() {
        var $div = $('<div class="tblTOC">');
		var courseTitle = trackObjects[SeqID].title;
        var courseTblWidth = (trackObjects[SeqID].enableprogressbar == "yes") ? 84 : 100;
       // var $title = $('<div style="padding-left:5px;position:relative;" id="courseTitle">').append('<table width="' + courseTblWidth + '%"><tr><td valign="center"><img src="images/arrow.gif" /></td><td><span type="course" class="steps coursetitle" startPage="0" totalPages="0" lastPage="0" visited="false">' + courseTitle + '</span></td><td align="right"><div id="courseProgress" style="position:absolute;right:0;top:-5px;"><strong></strong></div></td></tr></table>');
        var $title = $('<div style="padding-left:5px;position:relative;" id="courseTitle">').append('<table width="' + courseTblWidth + '%"><tr><td valign="center"><i class="fa fa-caret-right"></i></td><td><span type="course" class="steps coursetitle" startPage="0" totalPages="0" lastPage="0" visited="false">' + courseTitle + '</span></td><td align="right"><div id="courseProgress" style="position:absolute;right:0;top:-5px;"><strong></strong></div></td></tr></table>');
        $div.append($title);
        for (var i = 0; i < pages.length; i++) {
            var id = Number(Number(i) + 1);
            var $row;
            var tempVal = "false";
			var topicCount = 0;
            for (var j = 0; j < pages[i].length; j++) {
                //debugger;
                tempVal = updateVisitedPage(trackObjects[i].prevData, totalPages + 1);
                if (objType == "assessment" && pages[i][j].type != "page" && pages[i][j].type != "summary") {
                    var tempStatus = "";
                    try {
                        tempStatus = pages[i][j].status.toLowerCase();
                    } catch (e) {
                        tempStatus = "";
                    }
                    if (tempStatus == "correct" || tempStatus == "incorrect" || tempStatus == "na")
                        tempVal = true;
                    else
                        tempVal = false;
                }

                if (pages[i][j].type != "topic") {
                    var pageTitle = getPageTitle(pages[i][j]);
					var pageType = pages[i][j].type;
					var pageId = i + '_' + j;
                    if (pages[i][j].type == "page" || pages[i][j].type == "summary"){
                        if (_isBootstrapSkin == true) {
                            //if (pageIcon == "") {
                            //    $row = $('<div style="padding-left:5px; padding-top:5px" id="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="' + pageType + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + pageTitle + '</span></td></tr></table>');
                            //}
                          
                                $row = $('<div style="padding-left:5px; padding-top:5px" id="' + i + '_' + j + '">').append('<table><tr><td valign="top">'+tocListIcon+'</td><td><span type="' + pageType + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + pageTitle + '</span></td></tr></table>');

                            
						}
                        else {
                            //if (pageIcon == "") {
                            //    $row = $('<div style="padding-left:5px;" id=' + pageId + '>').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type=' + pageType + ' class="steps" visited=' + tempVal + ' pageNum=' + totalPages + '>' + pageTitle + '</span></td></tr></table>');
                            //}
                         
                                $row = $('<div style="padding-left:5px;" id=' + pageId + '>').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type=' + pageType + ' class="steps" visited=' + tempVal + ' pageNum=' + totalPages + '>' + pageTitle + '</span></td></tr></table>');

                            
						}
						
                   } else{
                        $row = $('<div style="padding-left:10px" id=' + pageId + '>').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type=' + pageType + ' class="steps" visited=' + tempVal + ' pageNum=' + totalPages + '>' + pageTitle + '</span></td></tr></table>');
						}
                    /**************** 29-10-2014 - Randomization in CO ************/
		    try{
					   if(pages[i][j].actualPageNumber == undefined){
					       pages[i][j].actualPageNumber = pages[i][j].pageNumber;
					   }
					}catch(e){
					}
		    /**************** 29-10-2014 - Randomization in CO ************/	
					pages[i][j].pageNumber = totalPages;
                    totalPages++;
                    $div.append($row);
                    if (trackObjects[i].type.toLowerCase() == "contentobject") {
                        if (trackObjects[i].showitems == "topics") {
                            $row.hide();
                        }
                    }
                    if (pages[i][j].visible == "false") {
                        $row.hide();
                    }
					try{
                    if (trackObjects[i].singleqtnperpage == "no") {
                        if (pages[i][j].type == "page" && pages[i][j].type != "summary") {
                            if (j > 0)
                                $row.hide();
                        }
                    }
                    }catch(e){}
                     $row = "";
                } else {
                    topicCount++;
                    var tblWidth = (trackObjects[SeqID].enableprogressbar == "yes") ? "84%" : "100%";
		    // Added hidetopic by maheedhar for CoEditor 5.9 version
                    if (trackObjects[i].hidetoctopic.toLowerCase() == "no") {
					 if( _isBootstrapSkin == true){
					     $row = $('<div style="padding-left:0px; padding-top:5px" id="' + i + '_' + j + '" class="topictitle">').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type="topic" class="steps" startPage="' + totalPages + '" totalPages="' + pages[i][j].pages.length + '" topicNumber="' + topicCount + '" lastPage="' + Number(Number(pages[i][j].pages.length) + Number(totalPages) - 1) + ' visited="false">' + pages[i][j].title + '</span></td></tr></table>');
                        $div.append($row);
						}
						else{
					     //$row = $('<div style="padding-left:5px;" id="' + i + '_' + j + '">').append('<table width="' + tblWidth + '"><tr><td valign="center"><img src="images/arrow.gif" /></td><td><span type="topic" class="steps" startPage="' + totalPages + '" totalPages="' + pages[i][j].pages.length + '" topicNumber="' + topicCount + '" lastPage="' + Number(Number(pages[i][j].pages.length) + Number(totalPages) - 1) + ' visited="false">' + pages[i][j].title + '</span></td><td align="right"><div id="topicProgress_' + topicCount + '" style="position:absolute;right:0;margin-bottom:2px;"><strong class="progress-text"></strong></div></td></tr></table>');
					     //$row = $('<div style="padding-left:5px;" id="' + i + '_' + j + '" class="topictitle">').append('<table width="' + tblWidth + '"><tr><td valign="center" style="width:17px;"><img src="images/arrow.gif" /></td><td><div style="display:inline-block;float:left;" class="topicDiv"><span type="topic" class="steps" startPage="' + totalPages + '" totalPages="' + pages[i][j].pages.length + '" topicNumber="' + topicCount + '" lastPage="' + Number(Number(pages[i][j].pages.length) + Number(totalPages) - 1) + ' visited="false">' + pages[i][j].title + '</span></div><div id="topicProgress_' + topicCount + '" style="position:absolute;display:inline-block;right:5px;margin-top:-4px;"><strong class="progress-text"></strong></div></td></tr></table>');
					     $row = $('<div style="padding-left:5px;" id="' + i + '_' + j + '" class="topictitle">').append('<table width="' + tblWidth + '"><tr><td valign="center" style="width:17px;"><i class="fa fa-caret-right"></td><td><div style="display:inline-block;float:left;" class="topicDiv"><span type="topic" class="steps" startPage="' + totalPages + '" totalPages="' + pages[i][j].pages.length + '" topicNumber="' + topicCount + '" lastPage="' + Number(Number(pages[i][j].pages.length) + Number(totalPages) - 1) + ' visited="false">' + pages[i][j].title + '</span></div><div id="topicProgress_' + topicCount + '" style="position:absolute;display:inline-block;right:5px;margin-top:-4px;"><strong class="progress-text"></strong></div></td></tr></table>');

					     $div.append($row);
						
						}
                    }
                    if (trackObjects[i].type.toLowerCase() == "contentobject") {
                        if (trackObjects[i].showitems == "pages") {
                            $row.hide();
                        }
                    }
					try{
						if (trackObjects[i].singleqtnperpage == "no") {
								$row.hide();
						}
					}catch(e){}
					
                    for (var k = 0; k < pages[i][j].pages.length; k++) {
                        tempVal = updateVisitedPage(trackObjects[SeqID].prevData, totalPages + 1);
                        if (objType == "assessment" && pages[i][j].pages[k].type != "page" && pages[i][j].pages[k].type != "summary") {
                            var tempStatus = "";
                            try {
                                tempStatus = pages[i][j].pages[k].status.toLowerCase();
                            } catch (e) {
                                tempStatus = "";
                            }
                            //var tempStatus = pages[i][j].pages[k].status.toLowerCase();
                            if (tempStatus == "correct" || tempStatus == "incorrect" || tempStatus == "na")
                                tempVal = true;
                            else
                                tempVal = false;
                        }
                        if (pages[i][j].pages[k].type != "topic") {
		            // Added hidetopic condition by maheedhar for CoEditor 5.9 version 
                            if (trackObjects[i].hidetoctopic.toLowerCase() == "no") {
                                if (trackObjects[i].type.toLowerCase() == "contentobject" && trackObjects[i].showitems == "pages")
                                    $row = $('<div style="padding-left:0px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type="' + pages[i][j].pages[k].type + '" topicLength="' + pages[i][j].pages.length + '" topicPage="' + k + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k]) + '</span></td></tr></table>');
                                else
                                    $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type="' + pages[i][j].pages[k].type + '" topicLength="' + pages[i][j].pages.length + '" topicPage="' + k + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k]) + '</span></td></tr></table>');
                            } else {
                                //if (trackObjects[i].type.toLowerCase() == "contentobject" && trackObjects[i].showitems == "pages")
                                $row = $('<div style="padding-left:0px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type="' + pages[i][j].pages[k].type + '" topicLength="' + pages[i][j].pages.length + '" topicPage="' + k + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k]) + '</span></td></tr></table>');
                               // else
                                   // $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="' + pages[i][j].pages[k].type + '" topicLength="' + pages[i][j].pages.length + '" topicPage="' + k + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + pages[i][j].pages[k].title + '</span></td></tr></table>');
                            }
			    /**************** 29-10-2014 - Randomization in CO ************/
						try{
						   if(pages[i][j].pages[k].actualPageNumber == undefined){
							   pages[i][j].pages[k].actualPageNumber = pages[i][j].pages[k].pageNumber;
						   }
						}catch(e){
						}
			    /**************** 29-10-2014 - Randomization in CO ************/
                        pages[i][j].pages[k].pageNumber = totalPages;
                        pages[i][j].pages[k].topicLength = pages[i][j].pages.length;
                        pages[i][j].pages[k].topicPages = (k + 1);
                        totalPages++;
                        $div.append($row);
                        if (trackObjects[i].type.toLowerCase() == "contentobject") {
                            if (trackObjects[i].showitems == "topics") {
                                $row.hide();
                            }
                        }
                        if (pages[i][j].pages[k].visible == "false") {
                            $row.hide();
                            }
							try{
								if (trackObjects[i].singleqtnperpage == "no") {
									if (pages[i][j].pages[k].type == "page" && pages[i][j].pages[k].type != "summary") {
										if (pages[i][0].type == "page") {
											if (j > 0 || k > 0)
												$row.hide();
										}
										else {
											if (j > 0 || k > 0)
												$row.hide();
										}
									}
								}
							}catch(e){}
							$row = "";
                        }
                        else {
		            // Added hidetopic condition by maheedhar for CoEditor 5.9 version
                            if (trackObjects[i].hidetoctopic.toLowerCase() == "no") {
                               // $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '" class="subtopictitle">').append('<table><tr><td valign="top"><img src="images/arrow.gif" /></td><td><span type="topic" class="steps" startPage="' + totalPages + '" totalPages="' + pages[i][j].pages[k].pages.length + '" lastPage="' + Number(Number(pages[i][j].pages[k].pages.length) + Number(totalPages) - 1) + '" visited="false">' + getPageTitle(pages[i][j].pages[k]) + '</span></td></tr></table>');
                                $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '" class="subtopictitle">').append('<table><tr><td valign="center"><i class="fa fa-caret-right"></td><td><span type="topic" class="steps" startPage="' + totalPages + '" totalPages="' + pages[i][j].pages[k].pages.length + '" lastPage="' + Number(Number(pages[i][j].pages[k].pages.length) + Number(totalPages) - 1) + '" visited="false">' + getPageTitle(pages[i][j].pages[k]) + '</span></td></tr></table>');

                                $div.append($row);
                            }
                            if (trackObjects[i].type.toLowerCase() == "contentobject") {
                                if (trackObjects[i].showitems == "pages") {
                                    $row.hide();
                                }
                            }
							try{
								if (trackObjects[i].singleqtnperpage == "no") {
										$row.hide();
								}
							}catch(e){}
                            for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
                                tempVal = updateVisitedPage(trackObjects[SeqID].prevData, totalPages + 1);
                                if (objType == "assessment" && pages[i][j].pages[k].pages[m].type != "page" && pages[i][j].pages[k].pages[m].type != "summary") {
                                    var tempStatus = "";
                                    try {
                                        tempStatus = pages[i][j].pages[k].pages[m].status.toLowerCase();
                                    } catch (e) {
                                        tempStatus = "";
                                    }
                                    //var tempStatus = pages[i][j].pages[k].status.toLowerCase();
                                    if (tempStatus == "correct" || tempStatus == "incorrect" || tempStatus == "na")
                                        tempVal = true;
                                    else
                                        tempVal = false;
                                }
				// Added hidetopic condition by maheedhar for CoEditor 5.9 version
                                if (trackObjects[i].hidetoctopic.toLowerCase() == "no") {
                                    if (trackObjects[i].type.toLowerCase() == "contentobject" && trackObjects[i].showitems == "pages")
                                       // $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '_' + m + '" topicId="' + i + '_' + j + '_' + k + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="' + pages[i][j].pages[k].pages[m].type + '" topicLength="' + pages[i][j].pages[k].pages.length + '" topicPage="' + m + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k].pages[m]) + '</span></td></tr></table>');
                                        $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '_' + m + '" topicId="' + i + '_' + j + '_' + k + '">').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type="' + pages[i][j].pages[k].pages[m].type + '" topicLength="' + pages[i][j].pages[k].pages.length + '" topicPage="' + m + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k].pages[m]) + '</span></td></tr></table>');

                                    else
                                        $row = $('<div style="padding-left:20px" id="' + i + '_' + j + '_' + k + '_' + m + '" topicId="' + i + '_' + j + '_' + k + '">').append('<table><tr><td valign="top">' + tocListIcon + '</td><td><span type="' + pages[i][j].pages[k].pages[m].type + '" topicLength="' + pages[i][j].pages[k].pages.length + '" topicPage="' + m + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k].pages[m]) + '</span></td></tr></table>');
                                } else {
                                    //if (trackObjects[i].type.toLowerCase() == "contentobject" && trackObjects[i].showitems == "pages")
                                        $row = $('<div style="padding-left:0px" id="' + i + '_' + j + '_' + k + '_' + m + '" topicId="' + i + '_' + j + '_' + k + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="' + pages[i][j].pages[k].pages[m].type + '" topicLength="' + pages[i][j].pages[k].pages.length + '" topicPage="' + m + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k].pages[m]) + '</span></td></tr></table>');
                                    //else
                                       // $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '_' + m + '" topicId="' + i + '_' + j + '_' + k + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="' + pages[i][j].pages[k].pages[m].type + '" topicLength="' + pages[i][j].pages[k].pages.length + '" topicPage="' + m + '" class="steps" visited="' + tempVal + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k].pages[m]) + '</span></td></tr></table>');
                                }
				/**************** 29-10-2014 - Randomization in CO ************/
								try{
								   if(pages[i][j].pages[k].pages[m].actualPageNumber == undefined){
								       pages[i][j].pages[k].pages[m].actualPageNumber = pages[i][j].pages[k].pages[m].pageNumber;
								   }
								}catch(e){
								}
				/**************** 29-10-2014 - Randomization in CO ************/
                                pages[i][j].pages[k].pages[m].pageNumber = totalPages;
                                pages[i][j].pages[k].pages[m].topicLength = pages[i][j].pages[k].pages.length;
                                pages[i][j].pages[k].pages[m].topicPages = (k + 1);
                                totalPages++;
                                $div.append($row);
                                if (trackObjects[i].type.toLowerCase() == "contentobject") {
                                    if (trackObjects[i].showitems == "topics") {
                                        $row.hide();
                                    }
                                }
                                if (pages[i][j].pages[k].pages[m].visible == "false") {
                                    $row.hide();
                                }
							    try{
									if (trackObjects[i].singleqtnperpage == "no") {
										if (pages[i][j].pages[k].pages[m].type == "page" && pages[i][j].pages[k].pages[m].type != "summary") {
											if (pages[i][0].type == "page") {
												if (j > 0 || k > 0 || m > 0)
													$row.hide();
											}
											else {
												if (j > 0 || k > 0 || m > 0)
													$row.hide();
											}
										}
									}
								}catch(e){}
								$row = "";
                            }
                        }
                    }
                };
            }
            trackObjects[i].pages = totalPages;
            if (trackObjects[i].singleqtnperpage == "no") {
                //$("#folderTree").hide();                
                $("#toc_close").fadeTo("fast", 0);
            }
        }


        $("#folderTree").append($div);
        if (objType == "assessment") {
            $("#folderTree").animate({ paddingLeft: 0 }, 1000, function() { gotoPage(innerPage) });
        } else
            $("#folderTree").animate({ paddingLeft: 0 }, 1000, function() { gotoPage(innerPage) });
   // });

   $(document).keyup(function(event) {
	
        onKeyPress(event);
		
		

    });
	
    $(document).keydown(function(event) {
        onKeyDown(event);

    });
    if (trackObjects[SeqID].enableprogressbar == "yes") {
        createCourseProgressBar();
        if (trackObjects[SeqID].hidetoctopic == "no") {
            createTopicProgressBar();
        }
    }
}

/**********************************************************************************************************
*******************This method is used to create TRACK TOC and initialize on skin load*********************
**********************************************************************************************************/
function generateTrackTOC() {
    $(function() {
        var $div = $('<div class="tblTOC">');
        var tempNum = 0;
        var objNumber = 0;

        var singlePageRendering = false;

        for (var i = 0; i < pages.length; i++) {

            if (trackObjects[i].singleqtnperpage != undefined)
                if (trackObjects[i].singleqtnperpage == "no")
                singlePageRendering = true;


            var id = Number(Number(i) + 1);
            objNumber = 0;
			var objStatus = "false";
			if(pages[i].status == "completed" || pages[i].status == "passed" || pages[i].status == "grade" || pages[i].status == "failed" )
			{
				objStatus = "true";
			}
			else
				objStatus = "false";

            var $row = $('<div style="padding-left:0px" id="' + i + '">').append('<table><tr><td valign="top"><img src="images/arrow.gif" /></td><td><span type="' + trackObjects[i].type + '" class="steps" visited="'+objStatus+'" SeqID="' + i + '" pageNum="' + totalPages + '">' + getPageTitle(trackObjects[i])/*trackObjects[i].title*/ + '</span></td></tr></table>');
            $div.append($row);
            for (var j = 0; j < pages[i].length; j++) {
                var tempVal = "false";
                tempVal = updateVisitedPage(trackObjects[i].prevData, objNumber + 1);
                //debugger;
                if (objType == "assessment" && pages[i][j].type != "page" && pages[i][j].type != "summary") {
                    var tempStatus = "";
                    try {
                        tempStatus = pages[i][j].status.toLowerCase();
                    } catch (e) {
                        tempStatus = "";
                    }
                    if (tempStatus == "correct" || tempStatus == "incorrect" || tempStatus == "na")
                        tempVal = true;
                    else
                        tempVal = false;
                }

                if (pages[i][j].type != "topic") {
                    $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="' + pages[i][j].type + '" class="steps" visited="' + tempVal + '" SeqID="' + i + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j])/*pages[i][j].title*/ + '</span></td></tr></table>');
		    /**************** 29-10-2014 - Randomization in CO ************/			
					try{
					   if(pages[i][j].actualPageNumber == undefined){
					       pages[i][j].actualPageNumber = pages[i][j].pageNumber;
					   }
					}catch(e){
					}
		    /**************** 29-10-2014 - Randomization in CO ************/
                    pages[i][j].pageNumber = totalPages;
                    totalPages++;
                    objNumber++;
                    $div.append($row);
                    if (trackObjects[i].type.toLowerCase() == "contentobject" || trackObjects[i].type.toLowerCase() == "content object") {
                        if (trackObjects[i].showitems == "topics") {
                            $row.hide();
                        }
                    }
                    if (pages[i][j].visible == "false") {
                        $row.hide();
                    }
					try{
						if (trackObjects[i].singleqtnperpage == "no") {
						        if(j>0)
								 $row.hide();
						}
					}catch(e){}
                    if (trackObjects[i].type.toLowerCase() != "content object" && trackObjects[i].type.toLowerCase() != "contentobject") {
                        $row.hide();
                    }
                } else {
		    // Added by maheedhar for CoEditor 5.9 version
                    if (((trackObjects[i].type.toLowerCase() == "contentobject" || trackObjects[i].type.toLowerCase() == "content object") && trackObjects[i].hidetoctopic.toLowerCase() == "no") || (trackObjects[i].type.toLowerCase() != "content object" && trackObjects[i].type.toLowerCase() != "contentobject")) {
                        $row = $('<div style="padding-left:10px;" id="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/arrow.gif" /></td><td><span type="topic" class="steps" SeqID="' + i + '" totalPages="' + pages[i][j].pages.length + '" startPage="' + totalPages + '" lastPage="' + Number(Number(pages[i][j].pages.length) + Number(totalPages) - 1) + '">' + getPageTitle(pages[i][j])/*pages[i][j].title*/ + '</span></td></tr></table>');
                        $div.append($row);
                    }
                    for (var k = 0; k < pages[i][j].pages.length; k++) {

                        tempVal = updateVisitedPage(trackObjects[i].prevData, objNumber + 1);
                        if (objType == "assessment" && pages[i][j].pages[k].type != "page" && pages[i][j].pages[k].type != "summary") {
                            var tempStatus = pages[i][j].pages[k].status.toLowerCase();
                            if (tempStatus == "correct" || tempStatus == "incorrect" || tempStatus == "na")
                                tempVal = true;
                            else
                                tempVal = false;
                        }
                       // Added by maheedhar for CoEditor 5.9 version
                        if ((trackObjects[i].type.toLowerCase() == "contentobject" || trackObjects[i].type.toLowerCase() == "content object")) {
                            if (trackObjects[i].hidetoctopic.toLowerCase() == "no") {
                                if (trackObjects[i].type.toLowerCase() == "contentobject" && trackObjects[i].showitems == "pages")
                                    $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="page" class="steps" visited="' + tempVal + '" SeqID="' + i + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k])/*pages[i][j].pages[k].title*/ + '</span></td></tr></table>');
                                else
                                    $row = $('<div style="padding-left:20px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="page" class="steps" visited="' + tempVal + '" SeqID="' + i + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k])/*pages[i][j].pages[k].title*/ + '</span></td></tr></table>');
                            } else {
                                $row = $('<div style="padding-left:0px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="page" class="steps" visited="' + tempVal + '" SeqID="' + i + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k])/*pages[i][j].pages[k].title*/ + '</span></td></tr></table>');
                            }
                        } else {
                            if (trackObjects[i].type.toLowerCase() == "contentobject" && trackObjects[i].showitems == "pages")
                                $row = $('<div style="padding-left:10px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="page" class="steps" visited="' + tempVal + '" SeqID="' + i + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k])/*pages[i][j].pages[k].title*/ + '</span></td></tr></table>');
                            else
                                $row = $('<div style="padding-left:20px" id="' + i + '_' + j + '_' + k + '" topicId="' + i + '_' + j + '">').append('<table><tr><td valign="top"><img src="images/bullet.gif" /></td><td><span type="page" class="steps" visited="' + tempVal + '" SeqID="' + i + '" pageNum="' + totalPages + '">' + getPageTitle(pages[i][j].pages[k])/*pages[i][j].pages[k].title*/ + '</span></td></tr></table>');
                        }
			/**************** 29-10-2014 - Randomization in CO ************/
						try{
						   if(pages[i][j].pages[k].actualPageNumber == undefined){
							   pages[i][j].pages[k].actualPageNumber = pages[i][j].pages[k].pageNumber;
						   }
						}catch(e){
						}
			/**************** 29-10-2014 - Randomization in CO ************/
                        pages[i][j].pages[k].pageNumber = totalPages;
                        pages[i][j].pages[k].topicLength = pages[i][j].pages.length;
                        pages[i][j].pages[k].topicPages = (k + 1);
                        totalPages++;
                        objNumber++;
                        $div.append($row);
                        if (trackObjects[i].type.toLowerCase() == "contentobject") {
                            if (trackObjects[i].showitems == "topics") {
                                $row.hide();
                            }
                        }
                        if (pages[i][j].pages[k].visible == "false") {
                            $row.hide();
                        }
                        if (trackObjects[i].type.toLowerCase() != "content object" && trackObjects[i].type.toLowerCase() != "contentobject") {
                            $row.hide();
                        }
						try{
							if (trackObjects[i].singleqtnperpage == "no") {
									$row.hide();
							}
						}catch(e){}
                    }
                };
            }
            trackObjects[i].pages = i != 0 ? totalPages - tempNum : totalPages;
            tempNum = totalPages;
        }

        if (singlePageRendering == true)
            totalPages = updateTotalPages();


        $("#folderTree").append($div);
        if (objType == "assessment") {
            $("#folderTree").animate({ paddingLeft: 0 }, 1000, function() { gotoPage(innerPage) });
        } else
            $("#folderTree").animate({ paddingLeft: 0 }, 1000, function() { gotoPage(innerPage) });
    });
	
	$(document).keyup(function(event) {
	
        onKeyPress(event);
    });

    $(document).keydown(function(event) {
        onKeyDown(event);

    });
}


/**********************************************************************************************************
***********************This method is used to update TOC on page change************************************
**********************************************************************************************************/
function updateTOC() {
 
    var pageVisitedIcon = TocVisitedPageIcon;
   
    $(".tblTOC div table tr td span").each(function(i) {

        $(this).removeClass('TOC_Links_Disable');
        $(this).removeClass('TOC_Links_Visited');
        $(this).addClass('steps');
        $(this).removeClass('on');
        //if (currentPage != $(this).attr("pageNum"))
        // $(this).animate({ paddingLeft: 0 }, 100);

        $(this).unbind("click");
        $(this).unbind("hover");
        $(this).fadeTo("fast", 1);              
		
             //Added by Ananta - for updating the toc pages which are not included in freesample pages		
		var toctype = $(this)[0].parentNode.childNodes[0].getAttribute("type").toLowerCase();
		
        var checkTrack = false;
        if (isTrack == "yes") {
            if ($(this).attr("SeqID") == SeqID && ($(this).attr("type").toLowerCase() == "contentobject" || $(this).attr("type").toLowerCase() == "content object" || $(this).attr("type").toLowerCase() == "assessment"))
                checkTrack = true;
        }

        if (currentPage != $(this).attr("pageNum") && checkTrack == false) {
            $(this).click(function() {
                $(this).animate({ paddingLeft: 0 }, 500);
                if ($(this).attr("pageNum") == undefined)
                    tocGotoPage($(this).attr("startPage"));
                else
                    tocGotoPage($(this).attr("pageNum"));
            });

			    if (isfreesamplecourse == false && EnableFreeSample == "no") { // Added by Ananta for freesample feature
                $(this).hover(function() {
                $(this).addClass('on');
                $(this).removeClass('steps');
                if (!$(this).hasClass("TOC_Links_Disable")) 
                $(this).addClass('TOC_Links_Visited');
                //$(this).animate({ paddingLeft: 2 }, 100);


            }, function() {
                $(this).removeClass('on');
                $(this).removeClass('TOC_Links_Visited');
                $(this).addClass('steps');
                if ($(this).hasClass("TOC_Links_Disable")) {
                    $(this).removeClass('steps');
                }
                //$(this).animate({ paddingLeft: 0 }, 100);

            });
                }
            var tempType = $(this)[0].parentNode.childNodes[0].getAttribute("type").toLowerCase();
			
            if ($(this)[0].parentNode.childNodes[0].getAttribute("visited") == "true") {
                if (tempType == "assessment" || tempType == "contentobject" || tempType == "content object") {
                    if (pages[$(this).attr("SeqID")].status == "completed" || pages[$(this).attr("SeqID")].status == "failed" || pages[$(this).attr("SeqID")].status == "passed" || pages[$(this).attr("SeqID")].status == "grade")
                        if (pageVisitedIcon == "") {
                           // $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/tick.gif");
                            $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/tick.gif");
                        }
                        else {
                            $($(this)[0].parentNode.parentNode.childNodes[0].childNodes[0]).attr('class', pageVisitedIcon).removeAttr('src');
                        }
                } else
                    if (pageVisitedIcon == "") {
                        $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/tick.gif");
                    }
                    else {
                        $($(this)[0].parentNode.parentNode.childNodes[0].childNodes[0]).attr('class', pageVisitedIcon).removeAttr('src');
                    }

                  

            }
/*
            if (prevPage == $(this).attr("pageNum") && $(this).attr("type") != "page" && retakeClicked == false) {
                $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/tick.gif");
            }*/

        } else {
            var type = $(this)[0].parentNode.childNodes[0].getAttribute("type").toLowerCase();
            if (type == "page" || type == "summary") {
                if (pageVisitedIcon == "") {
                    $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/tick.gif");
                }
                else {
                    $($(this)[0].parentNode.parentNode.childNodes[0].childNodes[0]).attr('class', pageVisitedIcon).removeAttr('src');
                }
            }
            var topicNode = $(this)[0].parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('topicId');
            if (topicNode != null && topicNode != undefined && topicNode != "") {
                var items = $(".tblTOC div[id='" + topicNode + "']");
                $(items).find("table tr td span").attr("class", 'TOC_Links_Visited');
            }

            $(this).fadeTo("fast", 0.8);
            //$(this).animate({ paddingLeft: 0 }, 100);
			
            $(this)[0].parentNode.childNodes[0].setAttribute("visited", "true");
            $(this)[0].setAttribute("class", "TOC_Links_Visited");
            $('.currentSelectedPage').removeClass('currentSelectedPage');
            $(this).addClass("currentSelectedPage");

                }

                 //Added by Ananta - for updating the toc pages which are not included in freesample pages	
                  if (isfreesamplecourse == true && EnableFreeSample == "yes"){				 	                 			  
					if(toctype == "page" || toctype == "summary"){
						var tocpagenumber = $(this)[0].parentNode.childNodes[0].getAttribute("pageNum");
					}else if(toctype == "topic"){
					    tocpagenumber = $(this)[0].parentNode.childNodes[0].getAttribute("startpage");
					    $('.topicDiv').css('width', '80%');
					}
						if((Number(tocpagenumber) + 1) > Number(samplepages)){
						  $(this)[0].setAttribute("class", "TOC_Links_Disable");
						  $(this).removeClass('TOC_Links_Visited');
						  $(this).removeClass('on');				  
						  var tempdiv=document.createElement("Div");						
						  $(tempdiv).attr("class" , "lockPage");                       
						  $(tempdiv).attr("style","float:right;");
                          var img=document.createElement("img");
                          $(img).attr("src","images/toc_lock.png");
                          $(tempdiv).append(img);
						 if ($($(this)[0].parentNode.children[1]).length == 0)						 
                         $(this)[0].parentNode.append(tempdiv);
			             
					 $($(this)[0].parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0]).attr("style", "opacity:0.5;")
					 }
					 $('.lockPage').parents('table').first().css('width','100%');
					 
			}

    });
    updateTopics();
}


/**********************************************************************************************************
***********************This method is used to get page object based on page Number*************************
**********************************************************************************************************/
function getPageByIndex(ind) {
    var obj = new Object();
    var pageNum = 0;
    for (var i = 0; i < pages.length; i++) {
        for (var j = 0; j < pages[i].length; j++) {

            if (pages[i][j].type == "topic") {
                for (var k = 0; k < pages[i][j].pages.length; k++) {
                    if (pages[i][j].pages[k].type == "topic") {
                        for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
                            if (ind == pages[i][j].pages[k].pages[m].pageNumber) {
                                return pages[i][j].pages[k].pages[m];
                                break;
                            }
                            pageNum++;
                        }
                    }
                    else {
                    if (ind == pages[i][j].pages[k].pageNumber) {
                        return pages[i][j].pages[k];
                        break;
                    }
                    pageNum++;
                    }

                }
            }
            else {
                if (ind == pages[i][j].pageNumber) {
                    return pages[i][j];
                    break;
                }
                pageNum++;
            }

        }
    }
}

function getTopicByPageIndex(ind) {
    var obj = new Object();
    var pageNum = 0;
    for (var i = 0; i < pages.length; i++) {
        for (var j = 0; j < pages[i].length; j++) {
            if (pages[i][j].type == "topic") {
                for (var k = 0; k < pages[i][j].pages.length; k++) {
                    if (pages[i][j].pages[k].type == "topic") {
                        for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
                            if (ind == pages[i][j].pages[k].pages[m].pageNumber) {
                                return pages[i][j];
                                break;
                            }
                            pageNum++;
                        }
                    }
                    else {
                        if (ind == pages[i][j].pages[k].pageNumber) {
                            return pages[i][j];
                            break;
                        }
                        pageNum++;
                    }
                }
            }
        }
    }
}
function getSubTopicByPageIndex(ind) {   
    for (var i = 0; i < pages.length; i++) {
        for (var j = 0; j < pages[i].length; j++) {
            if (pages[i][j].type == "topic") {
                for (var k = 0; k < pages[i][j].pages.length; k++) {
                    if (pages[i][j].pages[k].type == "topic") {
                        for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
                            if (ind == pages[i][j].pages[k].pages[m].pageNumber) {
                                return pages[i][j].pages[k];
                                break;
                            }                            
                        }
                    }                    
                }
            }
        }
    }
}

function getCurrentPageByIndex() {
    var pageNum = 0;
    for(var k=0; k<SeqID; k++) {
        pageNum += trackObjects[k].pages;
    }
    pageNum += innerPage;

    currentPage = pageNum;
}

function getTotalPageInObject(ind) {
    var pageNum = 0;
    for (var j = 0; j < pages[ind].length; j++) {
        if (pages[ind][j].type == "topic") {
            for (var k = 0; k < pages[ind][j].pages.length; k++) {
                if (pages[ind][j].pages[k].type == "topic") {
                    for (var m = 0; m < pages[ind][j].pages[k].pages.length; m++) {
                        pageNum++;
                    }
                }
                else {
                    pageNum++;
                }
            }
        }
        else {
            pageNum++;
        }
    }
    return pageNum;
}
/**********************************************************************************************************
***********************This method is used to get page number based on Object******************************
**********************************************************************************************************/
function getInnerPageNumber() {
    var obj = new Object();
    var pageNum = 0;
    for (var i = 0; i < SeqID; i++) {
        if (trackObjects[i].pages) {
            pageNum += trackObjects[i].pages;
        }
    }

    innerPage = currentPage - pageNum;
    return innerPage;
}

function getSeqIDByIndex(ind) {
    var value = 0;
    var seq = 0;
    for (var j = 0; j < trackObjects.length; j++) {
        value += Number(trackObjects[j].pages);
        if (ind < value) {
            seq = j;
            return seq;
        }

    }

}


/**********************************************************************************************************
**************This method is used to update topics icon when all pages are visited in topic****************
**********************************************************************************************************/

var finished = false;

function updateTopics() {
    var topicPages = new Array();
    var topicsLength = new Array();
    var completedTopics = new Array();
    $(".tblTOC div").each(function(i) {
        //debugger;        
        var id = $(this).attr("id");
        var type = $(this).find("span").attr("type");
        if (type == "topic") {
            topicPages.push(id);
            topicsLength.push($(this).find("span").attr("totalPages"));
        }

    });
    //debugger;
    //for (var k = 0; k < topicPages.length; k++) {
    //    //debugger;
    //    var items = $("'.tblTOC div[topicId=" + topicPages[k] + "]'");
    //    for (var j = 0; j < items.length; j++) {
    //        if(items[j].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].getAttribute('visited') == "true")
    //            completedTopics[k] = completedTopics[k] == undefined ? 1 : completedTopics[k] + 1;
    //    }
    //}
    for (var k = topicPages.length - 1; k >= 0; k--) {
        //debugger;
        var items = $(".tblTOC div[topicId='" + topicPages[k] + "']");
        for (var j = 0; j < items.length; j++) {
            if(items[j].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].getAttribute('visited') == "true")
                completedTopics[k] = completedTopics[k] == undefined ? 1 : completedTopics[k] + 1;

        }
        if (topicsLength[k] == completedTopics[k]) {
            $(".tblTOC div[id='" + topicPages[k] + "']")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].setAttribute('visited', 'true')
    }
    }

    for (k = 0; k < topicPages.length; k++) {
        if (topicsLength[k] == completedTopics[k]) {
			if(isTrack == "yes")
                $(".tblTOC div[id='" + topicPages[k] + "']")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].setAttribute('src', 'images/tick.gif')
			else
			    $(".tblTOC div[id='" + topicPages[k] + "']")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].setAttribute('src', 'images/tick.gif')
            //$("'.tblTOC div[id=" + topicPages[k] + "]'")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].setAttribute('src', 'Images/tick.gif')
        }
    }


}


/**********************************************************************************************************
****************This method is used to find all the pages inside topic are loaded are not******************
**********************************************************************************************************/

function checkPagesVisitedinTopics(start, end) {

    var pagesInTopic = (Number(end) - Number(start)) + 1;
    var counter = 0;
    $(".tblTOC div table tr td span").each(function(i) {
        //debugger;
        if ($(this)[0].parentNode.childNodes[0].getAttribute("type") == "page") {
            var currPage = Number($(this)[0].parentNode.childNodes[0].getAttribute("pageNum"));
            if (currPage >= start && currPage <= end) {
                if ($(this)[0].parentNode.childNodes[0].getAttribute("visited") == "true") {
                    counter++;
                }
                if (counter == pagesInTopic) {
                    finished = true;
                    $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/tick.gif");
                }

            }
        }
    });

}

/*********************************************************************************************************
******************************* RAD WINDOW METHODS *******************************************************
*********************************************************************************************************/
function GetRadWindow() {
	var oWindow = null;
	try {
		if (window.parent.radWindow) oWindow = window.parent.radWindow;
		else if (window.parent.frameElement.radWindow) oWindow = window.parent.frameElement.radWindow;
		else if (window.parent.parent.frameElement.radWindow) oWindow = window.parent.parent.frameElement.radWindow;
	}
	catch (ex)
	{ }
	return oWindow;
}
//-Krishna- Added for handling the Bootstrap Modal window
function GetBootstrapModalPopup() {    
    try {
       // if (window.parent.frameElement != undefined)
            return window.parent.parent.isBootStrapPopup;
    }
    catch (ex)
    { }
    return false;
}
function ISAJLoadData() {
    try {
        // if (window.parent.frameElement != undefined)
        return window.parent.parent.isAJParent;
    }
    catch (ex)
    { }
    return false;
}
function closeWindow() {
	if (GetRadWindow() != null)
		GetRadWindow().Close();
	else
		window.close()
}
function submitSurvey() {
 
    try {
        var validateAllqtnwhenclose;
        if (trackObjects[SeqID].singleqtnperpage == "no") {
            if (currPageObject.type != "summary")
                validateAllqtnwhenclose = getUserResponse();
            if ((validateAllqtnwhenclose == "true" || validateAllqtnwhenclose == true) && (trackObjects[SeqID].testType == "28")) {
				 ShowLoader();  
				 setTimeout(function(){ 
                 $("#submitsurveybtn").unbind("click");
				 $("#submitsurveybtn").fadeTo("fast", 0.5);
                if (IsAICC) {	
					AICC_Status = "completed"; AICC_Score ="100"; }
				else 
					{LMSSetLessonStatus("completed");

					LMSSetRawScore(100);
					if (isinstancycontent == true) {
					    SaveQuestionData();
					    setAssessmentData();
					}
		        LMSSetSessionTime(tmStartTime);
                tmStartTime = new Date().getTime();
		        LMSCommit();		}        
		        isSurveycommited = true;		        
                try{
                    // (Fix for INST-2291) -- Added by krishna.B
                    if (arrAllObjects[SeqID].status == "")
                        arrAllObjects[SeqID].status = "completed";
                    if (isGoToNavigation == false)
                        CheckWorkflowRuleOnTriggered("onitemchange", SeqID, "");
                    fnShowHideTOCItems();
                }catch(e){}
                                HideLoader();
				$("#Surveysummarymsg").show();
				},200);
            } else { alert("Please provide all response(s) and click on the submit button."); }
        }
    } catch (e) { }

}
/**********************************************************************************************************
*******************************This method is called when user clicks exit button**************************
**********************************************************************************************************/
function exitCourse() {   
   // setTimeout(ShowLoader(), 50);
    ShowLoader(); // for IE 10 course close issue..
	 clearContent();  // bhushan : added this method from oncontentunload to exitcourse, because blank page shown in mobile from LRS tracking..
    exitNewCourse();
}
function HideLoader() {
    $.loader("close");
}
function ShowLoader() {
    var useragent = navigator.userAgent;
    useragent = useragent.toLowerCase();
	if(_isBootstrapSkin == true){
		if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
		    $.loader({ content: "<div style='background-color:#FAFAFA;' class='alert'><div style='float:left;display:block;margin-right:5px;'><img align='absmiddle' style='width:30px; height:30px;' src='images/loading_boot.gif' /></div><div style='font-size: 12px; color: #000; text-align: left;'><b>Saving your progress data. Please do not click close button on the course window or browser window.<b/></div></div>", width: 300, height: 90 });
		}
		else {
		    $.loader({ content: "<div style='background-color:#FAFAFA;' class='alert'><div style='float:left;display:block;margin-right:5px;'><img align='absmiddle' style='width:30px; height:30px;' src='images/loading_boot.gif' /></div><div style='font-size: 12px; color: #000; text-align: left;'><b>Saving your progress data. Please do not click close button on the course window or browser window.<b/></div></div>", width: 400, height: 75 });
		}
	}else{
		if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
		    $.loader({ content: "<div class='alert'><table  align='center' border='0' cellspacing='0' cellpadding='6'> <tr>    <td><img align='absmiddle' src='images/loading.gif' /></td>    <td style='font-size: 12px; color: #000; text-align: left;'><b>Saving your progress data. Please do not click close button on the course window or browser window.<b/></td>  </tr></table> </div>", width: 300, height: 90 });
		}
		else {
		    $.loader({ content: "<div class='alert'><table  align='center' border='0' cellspacing='0' cellpadding='6'> <tr>    <td><img align='absmiddle' src='images/loading.gif' /></td>    <td style='font-size: 12px; color: #000; text-align: left;'><b>Saving your progress data. Please do not click close button on the course window or browser window.<b/></td>  </tr></table> </div>", width: 400, height: 75 });
		}    
	}
}
function exitNewCourse() {
	if (IsAICC)
	{
		AICC_CommitData();
		top.window.close();
		return true;
	}
    if (isTrack == "yes") {
        updateTrackStatus();
        isTrackCommit = true;
    }
    var useragent = navigator.userAgent;
    useragent = useragent.toLowerCase();

    if (useragent.match(/opera/i) || useragent.match(/firefox/i)) {
        if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > -1) {
            onContentUnload();
            window.top.close();
        }
    }  

    if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
        try {
            onContentUnload();
            window.parent.fnClear();
            window.parent.fnGetStatus();
        }
        catch (e) {
        }
        if (window.location.href.indexOf("nativeappURL") != -1) {
            if (fnGetQueryString("cid") == "")
                window.location.href = "blank.html?IOSCourseClose=true";
        }
        /*changed by satya for overview assessment workflow - INST-1240 */
        CheckWorkflowRuleOnTriggered("onexit", SeqID, "");
        if (tincan.recordStores.length > 0) {
            setTinCanBookmark();
            SetExitedTinCan();
        }
            // for closing the course exclusively through javascript method
        MobileJSInterface.OnLineCourseClose();
        return;
    }

    if (tincan.recordStores.length > 0) {
        setTinCanBookmark();
        SetExitedTinCan();
    }
    //confirm("Are you sure you want to close the window");
    /*changed by satya for overview assessment workflow - INST-1240 */
    CheckWorkflowRuleOnTriggered("onexit", SeqID, "");
    try {
        setTimeout(function () {
            //top.window.open('', '_self', '');	
            if (!ISAJLoadData()) {
            if (GetRadWindow() != null) {
                onContentUnload();
                GetRadWindow().Close();
                try {
                    if (TinCan.Utils.parseURL(window.location).params.mode != "preview")
                        top.location.href = top.location.href;
                }
                catch (e) { top.location.href = top.location.href; }
            }
            else if (GetBootstrapModalPopup() == true) {
                //top.location.href = top.location.href;
                onContentUnload();
                window.parent.parent.CloseBootstrapModal();
            }
            else {
                try {
                    exitcalled = true;
                    window.parent.postMessage('close', sendorigin);
                }
                catch (e) {
                    top.window.close();
                    }
                }
            }
            else {
                onContentUnload();
                if (GetRadWindow() != null)
                    GetRadWindow().Close();
                window.parent.parent.UpdateAJMetaData();
            }
        }, 50);
    }
    catch (e) {

    }

}
var sendorigin;
var exitcalled =false;
window.addEventListener('message', receiver, false);
		    function receiver(e) {	
                try{
		        if (e.data.indexOf("http") >= 0) {
						sendorigin = e.data;
		                //e.source.postMessage('Hello', e.origin);
		            } else if (e.data == "close") {						
					if(exitcalled == false)
						exitCourse();
		            }		  
                }catch(e){}
		    }


/**********************************************************************************************************
************************************This method is used to load XML files**********************************
**********************************************************************************************************/

function loadXML(filename) {
    $.ajax({
        url: filename,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
            return xml;
        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}

/**********************************************************************************************************
************************************Assessment Functions from here onwards*********************************
**********************************************************************************************************/

/**********************************************************************************************************
***********************Validating Page and storing data before going to next page**************************
**********************************************************************************************************/
function validatePage() {
    ////debugger;
    if (pages[SeqID][innerPage]["type"] == "page" || pages[SeqID][innerPage]["type"] == "summary") {
        isAnswered = true;
    }
    else {
        isAnswered = true;
        checkAnswer();
    }
}
/**********************************************************************************************************
***********************Getting previous data and re-storing when page loads********************************
**********************************************************************************************************/
function storePageData() {
    try {
        //debugger;
        setUserResponse();
    }
    catch (e) {
    }
}

/**********************************************************************************************************
***********************************to remove spaces from start and end*************************************
**********************************************************************************************************/

String.prototype.fulltrim = function() {
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
}


/**********************************************************************************************************
************************************Navigate to page from toc click****************************************
**********************************************************************************************************/
function tocGotoPage(num) {
    //  debugger;
    try { 
    if (trackObjects[SeqID].tocseqeuncenavigation == "yes") { 
      if ((!IsPageVisited(num))) {  	 
            alert("Please navigate sequence order not visited pages");
         return false;
         }  }
    } catch (e) { }
  try{
    var canGo = chkIfDisabledByRules(currentPage,num,"");
  }catch(e){
    var canGo = true;
  }

  if(canGo){

      try{
          resetAllRuleBooleans(num);
      } catch (e) {

      }
	  //Added by Ananta - 6/1/17 for freesample 
	  if(isfreesamplecourse == true && EnableFreeSample == "yes"){	    
	      if (Number(num) + 1 > Number(samplepages)) {
			   openFreeSamplePurchaseAlert();
			     return;
		  }
	  }
	try{
	//alert(userAttempt);
	userAttempt = 0;
	setCOValues("pagecompletion", "");
	}catch(e){}
	try{
	  clearAllBranchedPages();
	}catch(e){}
    lastRemedPage = "";
    lastRemedActive = false;

    checkAnswer();

   

    if (tincan.recordStores.length > 0) {
        SendTinCanAnswerStatement();
    }
      //Modified By Sunny on 23rd june 2016 trackObjects[SeqID].chkcontraintfornavigation  == "yes" previously it is "forward"
    if (trackObjects[SeqID].chkcontraintfornavigation == "yes" && currPageObject.iscoao == "ao" && currPageObject.type != "summary") {
       isAnswered = checkAnswers("toc");
       if (isAnswered == false) {
        return false;
       }
    }
    else if (objType == "content object" || objType == "contentobject" )
	{
        if (getCoValues("remediation") == "yes" || (getCoValues("Qtype").toLowerCase() == "longanswer" && isRequriedAttachLA) || trackObjects[SeqID].singleqtnperpage == "no") {
		isAnswered = checkAnswers("toc");
		if(isAnswered == false){
 			 return false;
			}
		}
	}else
        isAnswered = true;
    
    if (trackObjects[SeqID].singleqtnperpage != undefined) {
        if (trackObjects[SeqID].singleqtnperpage != "no") {
            if (currPageObject.iscoao == "ao") {
                checkAnswer();
            }
        }
    }

    if (isinstancycontent == true) {
        SaveQuestionData();
    }

    if (currPageObject.type != "summary") {
        if (trackObjects[SeqID].suspenddataupdateonattempt != undefined) {
            if (trackObjects[SeqID].suspenddataupdateonattempt == "yes") {
                UpdateSuspendDataOnAttempt();
            }
        }
    }
      //End Sunny
    if (isAnswered && (objType == "content object" || objType == "contentobject" || objType == "document" || objType == "media resource")) {
        innerPage = num;
        if (isTrack == "yes") {
            currentPage = innerPage;
            //SeqID = getSeqIDByIndex(currentPage);
            innerPage = getInnerPageNumber();
        }
		
		
          beforegotoPage();
	}
  } else {
      $("#loader").fadeTo("fast", 0);
  }
  $("#opennotePopup").hide();
}

function IsPageVisited(tocpage) {

    var strPageTrackingSectionStart = "#pgvs_start#";
    var strPageTrackingSectionEnd = "#pgvs_end#";
    var nPos1, npos2;
    var strPre, strPost, strMid;
    var allpageIDs = ""
    strPre = "";
    strPost = "";
    strMid = "";

    try {
        var strData;
        if (IsAICC) {
            strData = AICC_Data_Chunk;
        } else {
            strData = LMSGetValue("cmi.suspend_data");
        }
    }
    catch (ex) {
        return;
    }

    if (tincan.recordStores.length > 0)
        strData = GetTinCanSuspendData();

    if (strData == "") {
        return false;
    }

    try {
        nPos1 = strData.indexOf(strPageTrackingSectionStart);
        if (nPos1 != -1) {
            nPos2 = strData.indexOf(strPageTrackingSectionEnd);
            if (nPos2 != -1) {
                strPre = strData.substring(0, nPos1);
                strPost = strData.substring(nPos2 + strPageTrackingSectionEnd.length, strData.length);
                strMid = strData.substring(nPos1 + strPageTrackingSectionStart.length, nPos2);

                suspendPageIDs = strMid;
                var arrData = strMid.split(";")

                for (k = 0; k < arrData.length; k++) {
                  //  if (arrData[k] != "") {
                        if (Number(tocpage) == arrData[k]) {
                            return true;
                            break;
                        }
                    //}
                }

            }

        }
    } catch (e) { return true; }
    return false;
}
function onContentLoad() {
 if (fnGetQueryString("eid") != "")
    {
        GeneratePagesArray();
    }
	if (!IsAICC) { 
		if (isTrack == "yes")
			LMSTrackInitialize();
		else
			LMSInitialize();  //Mandatory SCORM call to initialize the SCORM communication
	}

    if (SeqID == undefined || SeqID == "" || SeqID == null) {
        SeqID = 0;
    }
    objType = isTrack == "yes" ? trackObjects[SeqID].type.toLowerCase() : trackObjects[0].type.toLowerCase();
    addDiscussionLink();

    try {
        isinstancycontent = chkIsInstancyContent();
    } catch (e) { isinstancycontent = false; }
	//Added by Ananta - 9/1/17 for freesample
    isfreesamplecourse = isFreeSample();
  
    samplepages = trackObjects[SeqID].freesampleitemscount;
    EnableFreeSample = trackObjects[SeqID].enablefreesample;
    if (isfreesamplecourse == true && EnableFreeSample == "yes") {       
                trackObjects[SeqID].buyattempts = "no";
                trackObjects[SeqID].enabletimer = "no";
                trackObjects[SeqID].enablesearch = "no";
                trackObjects[SeqID].printoption = "no";               
                trackObjects[SeqID].userpagenotes = "no";              
    }
    try {
        if (window.parent.GetCourseLaunchWindow() != undefined && window.parent.GetCourseLaunchWindow() == "3") {
            $("#exitBtn").hide();
        }
    } catch (e) { }
	//end 
	
    $("#divnoteBtn").bind("click", function () {
        showHideuserpageNote();
        //$("#opennotePopup").show();
    });

    try{
        if (trackObjects[SeqID].singleqtnperpage == "yes"){
            if ($("#sectioncontent").length > 0) {
                $("#sectioncontent").addClass("csssectioncontent");
            }
        }
    } catch (e) { }

    if (objType == "assessment")
        $("#saveBtn").show();
    if (isinstancycontent == true)
        var logoPath = LMSGetLogoPath();
    else
        var logoPath = "";
    var randomNumber = Math.random(999999999) + "" + Math.random(999999999);
    if (logoPath != undefined && logoPath != null && logoPath != "")
	{
        logoPath = logoPath.toString() + "?" + randomNumber;
        $("#imgLogo").attr("src", logoPath);
    } else {
        if (courselogo != undefined && courselogo != null && courselogo != "")
            $("#imgLogo").attr("src", courselogo + "?" + randomNumber);
    }
    $("#imgLogo").show();
	$("#GlossaryBtn").hide();
    $("#wrapper").fadeIn("fast");
	getBookmark();
	if (!IsAICC) {
	    if (isinstancycontent == true) {
	        LMSGetUserTextResponses();
	    }
	}
	if (isTrack == "yes")
	LMSSetTrackBookmark();
    //question pool - 31-12-2015
    //if (trackObjects[SeqID].singleqtnperpage == "yes")
	debugger;
	if (isinstancycontent == true) {
	    checkForPoolGeneration();
	    randomizeAssessmentPages(); // added on  29-10-2014 - Randomization in CO
	}
    //if (objType == "assessment") {
    noa = trackObjects[SeqID].allowedattempts;
    //kiran added for buy attempts feature //
    
        if (trackObjects[SeqID].buyattempts == "yes") {
            findBuyedAttempts();
            noa = parseInt(noa) + parseInt(BuyedAttempts);
        }

        if (isinstancycontent == true) {
            findAllowedAttempts()
        }
    
    if (parseInt(noa) <= parseInt(allowedAttempts)) { isattemptscompleted = true;  setTimeout(function() { alert("All the attempts are over. You cannot continue browsing the course"); }, 2500); }
    //question pool - 31-12-2015
    if (trackObjects[SeqID].questionrandomization != "yes" && pooledQuestionsString == "" && isinstancycontent == true) {   // added on  29-10-2014 - Randomization in CO
        GetPreviousAnswers();
    }
    //krishna -- For offline tracking in ios	    
    //if (nativeCID == "")
    //    GetPreviousAnswers();
    //else
    //    GetOfflinePreviousAnswers();
    //End - offline tracking in ios
		
	//}
	if (trackObjects[SeqID].isresourcefile == "yes") {
	    $("#resourseBtn").show();
	    $("#resourseBtn").bind("click", function (e) {
	       // e.stopPropagation();
	        openresource();
	    });
	}
	else
	    $("#resourseBtn").hide();
    //Kiran Added for Buy attempts in assessment feature //
    if (trackObjects[SeqID].buyattempts == "yes") {
         if (getPageByIndex(getTotalPageInObject(SeqID) - 1).type != undefined && getPageByIndex(getTotalPageInObject(SeqID) - 1).type == "summary") {
            $("#BuyattemptsBtn").show();
            if (trackObjects[SeqID].type.toLowerCase() == "contentobject" || trackObjects[SeqID].type.toLowerCase() == "content object") {
                if (trackObjects[SeqID].buyattemptsprice != null) {
                    if (trackObjects[SeqID].buyattemptscurrency != null) {
                       // if (document.getElementById("lblPrice") != null)
                            var buyattemptsprice = "(" + trackObjects[SeqID].buyattemptscurrency + " " + trackObjects[SeqID].buyattemptsprice + ")"
                        if (document.getElementById("lblPrice") != null && document.getElementById("lblPrice") != undefined){
                            document.getElementById("lblPrice").innerHTML = buyattemptsprice;
                        }
                        $("#BuyattemptsBtn").attr("title", "Buy Attempt" + buyattemptsprice);
                        
                    }
                }
            }
            gotoBuyAttempts();
        }

    }
    else{
        $("#BuyattemptsBtn").hide();
    }
    // Added New by Sunny : Disabling Element Selection on 5th july 2016...
    if (trackObjects[SeqID].disableelementselection == "yes") {
	       $('#content').css({
	           "-webkit-touch-callout": "none",
	           "-webkit-user-select": "none",
	            "-khtml-user-select":"none",
	            "-moz-user-select":"none",
	            "-ms-user-select": "none",
	            "-o-user-select": "none",
	            "user-select": "none"});
	    }
    //End Sunny
	// --- Bhushanam : show/hide CC button..
	if (objType == "content object" || objType == "contentobject") {
	    //if (trackObjects[SeqID].isTranscriptAvailable == "yes") {
	    //    $("#ccBtn").show();
	    //}
	    //else {
	    //    $("#ccBtn").hide();
	    //}
	    // --- Bhushanam : show Glossary button..
	    if (trackObjects[SeqID].glossarylink != "") {
	        if (fnGetQueryString("cid") == "")
	            $("#GlossaryBtn").show();
	        else
	            $("#GlossaryBtn").hide();

	        $("#GlossaryBtn").bind("click", function() {
	            //window.open(trackObjects[SeqID].glossarylink, '_blank', 'width=580,height=440,resizable=no')	      
	            openGlossary();
	        });
	    }

	    if (objType == "content object" || objType == "contentobject") {
	        if (trackObjects[SeqID].allowfontincrease == "yes") {
	            $(".font-plus").show();
	        }
	        else {
	            $(".font-plus").hide();
	        }
	    }
	}
    // --- End. 

    //added by ajay to show/hide search button
	if (trackObjects[SeqID].enablesearch == "yes") {
	    if (trackObjects[SeqID].navigation.toLowerCase() == "forward only" || trackObjects[SeqID].tocseqeuncenavigation == "yes") {
                $(".search-btn").hide();
            }
            else {
                $(".search-btn").show();
            }

	}
	else {
	    $(".search-btn").hide();
	}
	
	if (trackObjects[SeqID].userpagenotes == "yes" && trackObjects[SeqID].singleqtnperpage == "yes") {
	    $("#divnoteBtn").show();
	}
	else {
	    $("#divnoteBtn").hide();
	}
	var strData;
	if (isTrack == "yes")
	    strData = LMSTrackGetValue("cmi.suspend_data");
	else
	    strData = LMSGetValue("cmi.suspend_data");

	if (tincan.recordStores.length > 0)
	    strData = GetTinCanSuspendData();

	if(strData == null || strData == "" || strData == undefined)
	{ 
	    strData = "";
	}

	var strPageTrackingSectionStart = "#pgvs_start#";
	var strPageTrackingSectionEnd = "#pgvs_end#";
	var nPos1, npos2;
	var strPre, strPost, strMid;

	strPre = "";
	strPost = "";
	strMid = "";
	nPos1 = strData.indexOf(strPageTrackingSectionStart);

	if (nPos1 != -1) {
	    nPos2 = strData.indexOf(strPageTrackingSectionEnd);

	    if (nPos2 != -1) {
	        strPre = strData.substring(0, nPos1);

	        strPost = strData.substring(nPos2 + strPageTrackingSectionEnd.length, strData.length);

	        strMid = strData.substring(nPos1 + strPageTrackingSectionStart.length, nPos2);


	        suspendPageIDs = strMid;
	        var arrData = strMid.split(";");
			//debugger;
			VisitedPagesNonTracing = getVisitedpageValues(arrData);
	        trackObjects[SeqID].prevData = arrData;
	    }
	}
	if (IsAICC) {
		strLessonStatus = AICC_GetStatus();
	}else{
		strLessonStatus = LMSGetLessonStatus();
	}

    //Ananta - 29/8/16 for starting the course from beginning
	if (trackObjects[SeqID].startcourse == "yes") {  // Modified for solving issue - INST-27925
	    if (strData != "" && isattemptscompleted == false) {
	        opencourseresumepopup();
	    }
	}
	else {
	    $("#courseresumePopupup").hide();
	}
    if (strLessonStatus == "" || strLessonStatus == "not attempted") {
        LMSSetLessonStatus("incomplete")
    }
    if (isTrack == "yes")
        generateTrackTOC();
    else
        generateTOC();
    setHintsArrayValues(strData);
    if (trackObjects[SeqID].topicLevelPool == 'yes' || trackObjects[SeqID].topicLevelPoolWithDiff == 'yes') {

        setTopicPageNumbers();
    }
	/**************** 29-10-2014 - Randomization in CO ************/
	//question pool - 31-12-2015
	if ((trackObjects[SeqID].questionrandomization == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)) && isinstancycontent == true) {
        GetPreviousAnswers();
	}
	if (trackObjects[SeqID].questionrandomization == "yes") {
        //GetPreviousAnswers();
		if(isRandomized == false){
			getQueSeqArray();
			try{
                if (fnGetQueryString("cid") != "")
                {
                   MobileJSInterface.LMSSetRandomQuestionNosWithRandomqusseq(randomQuesSeqArray.join());
                }
                else{
				LMSSetRandomQuestionNos(randomQuesSeqArray.join());
			}
            } catch (e) {}
		}
		pages[SeqID] = assignRandomizedPageNums(pages[SeqID]);
		 try {
		    getTotalPages(pages[SeqID]);
	        updateVisitedPagesInTOC();
	    } catch (e) { }
    }
    /**************** 29-10-2014 - Randomization in CO ************/	
	try{
		if(trackObjects[SeqID].singleqtnperpage != undefined){
			var testType = trackObjects[SeqID].singleqtnperpage;
			if(testType == "no" && trackObjects[SeqID].hidesummarypage == "yes"){
			  disableButtonsonNavigation();
			}
		}
	}catch(e){}	
	try{	 
		for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
            var sumpage = getPageByIndex(i);
            if (sumpage.pageNumber == innerPage) {
                if (sumpage.type == "summary") {
                     isrelaunchsummarydirectly = true;
                    break;
                }
            }
        }
	} catch (e) { }

    // Added by maheedhar for singlepage rendering in CO - 18-10-2014
	for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
	    var lpage = getPageByIndex(i);
	    if (lpage != null && lpage != undefined) {
            var pgType = "";
            if ((objType == "content object" || objType == "contentobject") && getPageByIndex(i).type == "page") {
                pgType = getPageByIndex(i).Qtype.toLowerCase();
            } else {
                pgType = getPageByIndex(i).type.toLowerCase();
            }
            if (pgType == "longanswer") {
	            isLongAnswer = true;
	            break;
	        }
	    }
	}
	/*if (isLongAnswer == true) {	   
        getWebcam();
	}*/		//debugger;
	 		if (trackObjects[SeqID].enableprogressbar == "yes" && trackObjects[SeqID].hidetoctopic == "no") {
				 var availableTopicsIntheObject = getTotalTopicsIntheObject();
				 getTopicProgressStatus(availableTopicsIntheObject);
	 		}
    try {
        var globalsearchKeyword = window.parent.GetSearchText();
    } catch (e) {
        globalsearchKeyword=null
    }
	
    if (trackObjects[SeqID].singleqtnperpage == "yes"){
      if (globalsearchKeyword != null && globalsearchKeyword != "") {
          if (trackObjects[SeqID].enablesearch == "yes")
		 chkglobalsearchKeywordStatus(globalsearchKeyword);
      } 
    }
     //kiran added for resumimg time  when course relaunched\\
	 		 		if (trackObjects[SeqID].enabletimer == "yes" && isrelaunchsummarydirectly==false) {	 		    
					$("#coundownTimer").show();
	 		    ResumeTimerWhenCourseRelaunch(strData);
	 		}
	 		else {
	 		    $("#coundownTimer").hide();
	 		}
}
function findAllowedAttempts(){
		allowedAttempts=LMSGetAttemptsLeft();
		if(allowedAttempts=="" || allowedAttempts==null) allowedAttempts=0;
}
//Kiran added for Buy Attempts in assessment feature//
function findBuyedAttempts()
{
    try { 
	if (isinstancycontent == true)
		BuyedAttempts = LMSGetBuyedAttempts(); 
	else
		 BuyedAttempts = 0;
	}
    catch (e) { BuyedAttempts = 0; }
    if (BuyedAttempts == "" || BuyedAttempts == null)
        BuyedAttempts = 0;
}


function setAssessmentData() {
 //--krishna -- for IOS offline tracking
    try {
        if (nativeCID != "")
            ctOBj.question_data = "";
    }
    catch (e) {
            }
 //--End of IOS offline tracking
    //debugger;
    if (isTrack == "yes") {
        var oldPages = 0;
        for (var j = 0; j < SeqID; j++) {
            oldPages += trackObjects[j].pages;
        }
    }
    
    var index = 0;
	var assResult="";
    //for (i = 0; i < pages[SeqID].length; i++) {
    //    var arrQA = pages[SeqID][i];
    for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
        var arrQA = getPageByIndex(i);
        //if (arrQA.type != "topic") {
        if (arrQA.iscoao == "ao" && arrQA.type != "summary") {//if (arrQA.type != "page" && arrQA.type != "summary") {
		    var randomizationEnabled = trackObjects[SeqID].questionrandomization.toLowerCase();		
            if (arrQA.useranswer != "" && arrQA.useranswer != undefined && arrQA.status != undefined && arrQA.status != "") {
                if (isTrack == "yes") {
                    if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){// added on  29-10-2014 - Randomization in CO
					   var id = Number(arrQA.actualPageNumber) - Number(oldPages);// added on  29-10-2014 - Randomization in CO
					}else{// added on  29-10-2014 - Randomization in CO
					   var id = Number(arrQA.pageNumber) - Number(oldPages);
					}// added on  29-10-2014 - Randomization in CO
                    arrQA.Qid = id;
                } else if (trackObjects[SeqID].testType != '8' ){ //&& tincan.recordStores.length > 0
                    if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){// added on  29-10-2014 - Randomization in CO
                        arrQA.Qid = Number(arrQA.actualPageNumber)+1;// added on  29-10-2014 - Randomization in CO
				    }else{// added on  29-10-2014 - Randomization in CO
                        arrQA.Qid = Number(arrQA.pageNumber) + 1;
				    }// added on  29-10-2014 - Randomization in CO
				
                }else{
                    if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){// added on  29-10-2014 - Randomization in CO
                      arrQA.Qid = arrQA.actualPageNumber;// added on  29-10-2014 - Randomization in CO
				    }else{// added on  29-10-2014 - Randomization in CO
				      arrQA.Qid = arrQA.pageNumber;
				    }// added on  29-10-2014 - Randomization in CO
				
		        }
               // LMSSetQuestionData(arrQA, index);
		    /**************** 29-10-2014 - Randomization in CO ************/
					var lrsuseranswer  = arrQA.useranswer;
					if (arrQA.Qtype == "longanswer" || arrQA.Qtype == "fillintheblank"){
						lrsuseranswer = lrsuseranswer.toString();
						lrsuseranswer = lrsuseranswer.replace(/'/g, "''");
						lrsuseranswer = lrsuseranswer.replace(/\"/g, '\\"');
					 }
				    if(randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
					  try{
						if(assResult =="")
						assResult = arrQA.actualPageNumber + "##@@##" + lrsuseranswer + "##@@##" + arrQA.status;
						else assResult = assResult + "##^^##" + arrQA.actualPageNumber + "##@@##" + lrsuseranswer + "##@@##" + arrQA.status;
					  }catch(e){
						if(assResult =="")
						assResult = arrQA.pageNumber + "##@@##" + lrsuseranswer + "##@@##" + arrQA.status;
						else assResult = assResult + "##^^##" + arrQA.pageNumber + "##@@##" + lrsuseranswer + "##@@##" + arrQA.status;
					  }
					}else{
		    /**************** 29-10-2014 - Randomization in CO ************/
						if(assResult =="")
						assResult = arrQA.pageNumber + "##@@##" + lrsuseranswer + "##@@##" + arrQA.status;
						else assResult = assResult + "##^^##" + arrQA.pageNumber + "##@@##" + lrsuseranswer + "##@@##" + arrQA.status;
					}// added on  29-10-2014 - Randomization in CO
                }
                index = index + 1;
        }
        //}
        //else {
        //    for (j = 0; j < arrQA.pages.length; j++) {
        //        if (arrQA.pages[j].iscoao == "ao" && arrQA.pages[j].type != "summary") {//if (arrQA.type != "page" && arrQA.type != "summary") {
        //            if (arrQA.pages[j].useranswer != "" && arrQA.pages[j].useranswer != undefined && arrQA.pages[j].status != undefined && arrQA.pages[j].status != "") {
        //                if (isTrack == "yes") {
        //                    var id = Number(arrQA.pages[j].pageNumber) - Number(oldPages);
        //                    arrQA.pages[j].Qid = id;
        //                } else
        //                    arrQA.pages[j].Qid = arrQA.pages[j].pageNumber;
        //                //LMSSetQuestionData(arrQA, index);
        //                if (assResult == "")
        //                    assResult = arrQA.pages[j].pageNumber + "##@@##" + arrQA.pages[j].useranswer + "##@@##" + arrQA.pages[j].status;
        //                else assResult = assResult + "##^^##" + arrQA.pages[j].pageNumber + "##@@##" + arrQA.pages[j].useranswer + "##@@##" + arrQA.pages[j].status;
        //            }
        //            index = index + 1;
        //        }
        //    }
        //}
    }
    //if (tc_lrs != null)
    if (tincan.recordStores.length > 0) {
		   if (assResult != null && assResult != "" && assResult != undefined) {
			setTinCanAssessmentData(assResult);
		   }
	  }
    isClosed = "true";
    submitted = true;
}

function onContentUnload() {
    
	try{
	    var validateAllqtnwhenclose;
	if (trackObjects[SeqID].singleqtnperpage == "no") { //Bhushanam:23/05/15. track the user data when close the course all questions in single page render..
		if (currPageObject.type != "summary"){
		    validateAllqtnwhenclose = getUserResponse();
		    if (isinstancycontent == true) {
		        SaveQuestionData();
		    }
			}
			updateCourseHintsInSinglePage();
		//if ((validateAllqtnwhenclose == "true" || validateAllqtnwhenclose == true) && (trackObjects[SeqID].testType == "28")) {
		   // LMSSetLessonStatus("completed");
		   // LMSSetRawScore(100);
		//}  
	    } else {
	        try {
	            if (isCoAoType().toLowerCase() == "ao") {
	                checkAnswer();
			if (isinstancycontent == true) {
			  SaveQuestionData();
			}
	            }
	        } catch (e) { }
	    }
	}catch(e){}
    //if (objType == "assessment")
	if (isinstancycontent == true) {
	    setAssessmentData();
	    LMSSetUserTextResponses();
	}

    //Sunny on 2nd May 2017
    //debugger;
	if (currPageObject != undefined) {
	    if (currPageObject.type != "summary") {
	        if (trackObjects[SeqID].suspenddataupdateonattempt != undefined) {
	            if (trackObjects[SeqID].suspenddataupdateonattempt == "yes") {
	                UpdateSuspendDataOnAttempt();
	            }
	        }
	}

}
    //End Sunny

    ////debugger;
    LMSSetSessionTime(tmStartTime);  //Compute the time spent so far and save
        if (trackObjects[SeqID].enabletimer == "yes") {
            SetTimeWhenCourseClose();                      //saving timer value in suspend data when course closed
        }
    if (isTrack == "yes") {
        updateTrackStatus();
        LMSTrackCommit()			// This tells the LMS to save all data sent earlier
        LMSSetExit("")		// Normal exit from content
        LMSTrackFinish()			// Mandatory SCORM call to inform the LMS the content tracking is done
    }
    else {
        LMSCommit()			// This tells the LMS to save all data sent earlier
        LMSSetExit("")		// Normal exit from content
        LMSFinish()			// Mandatory SCORM call to inform the LMS the content tracking is done
    }
   
	isalredyOnunloadCalled  = true;
}

if (GetRadWindow() == null)
	$(window).bind('beforeunload', function() { 
		if (isalredyOnunloadCalled == false)
		onContentUnload();
	});


// services

function getBookmark() {
    //debugger;
    if (isTrack == "yes") {
        var strData = LMSTrackGetValue("cmi.core.lesson_location");
        if (trackObjects[SeqID].singleqtnperpage == "no") {
            if (strData != null) {
                if (strData.toString() == "3")
                    strData = trackObjects[SeqID].pages - 1;
                else if (strData.toString() == "4")
                    strData = trackObjects[SeqID].pages;
            }
        }
    }
    else {
		if (IsAICC)
			var strData = AICC_GetBookmark();
		else
			var strData = LMSGetLessonLocation();
        if (trackObjects[SeqID].singleqtnperpage == "no") {
            if (strData != null) {
                if (trackObjects[SeqID].pages != undefined) {
                    if (strData.toString() == "3")
                        strData = trackObjects[SeqID].pages - 1;
                    else if (strData.toString() == "4")
                        strData = trackObjects[SeqID].pages;
                }
            }
        }

    }
     if(startcourse == true){
	  strData = 1;
      }
  try{
		if (strData == null || strData == "" || strData == undefined || strData == false || strData == "NaN" || strData =="NAN" || strData =="nan") {
			strData = 0;
			innerPage = 0;
		}
		else {
			innerPage = Number(strData - 1);
		}
	}catch(e){ 
		strData = 0;
        	innerPage = 0;
	}
    innerPage = (innerPage < 0) ? 0 : innerPage;
try
    {
        //if (tc_lrs != null)
        if (tincan.recordStores.length > 0)
		        innerPage = GetTinCanBookmark();
		

        if (innerPage == "" || innerPage==null || innerPage ==undefined) 
            innerPage = 0;
    }
    catch (e)
    {
    innerPage =0;
    }
}

// page level bookmarking on each page load
function setBookmark() {
    try {

        if (tincan.recordStores.length > 0) {
            setTinCanBookmark();        
        }
		if (IsAICC)
		{	AICC_SetBookmark(Number(Number(innerPage) + Number(1))); return;}
		 
        LMSSetLessonLocation(Number(Number(innerPage) + Number(1)));
    }
    catch (e) { };
}

function pageVisited(strPageID) {
    //debugger;
    
    /*if (objType == "assessment") {
        return;
    }
    else {*/
	var strPageTrackingSectionStart = "#pgvs_start#";
        var strPageTrackingSectionEnd = "#pgvs_end#";
        var nPos1, npos2;
        var strPre, strPost, strMid;
	    var allpageIDs =""
        strPre = "";
        strPost = "";
        strMid = "";
	
        try {
            var strData;
			if (IsAICC){
				strData = AICC_Data_Chunk;
			}else{
            if (isTrack == "yes")
                strData = LMSTrackGetValue("cmi.suspend_data");
            else
                strData = LMSGetValue("cmi.suspend_data");
			}
		}
		catch (ex) {
			return;
		}

        if (tincan.recordStores.length > 0)
            strData = GetTinCanSuspendData();

		if(strData == null)
		{
            // This code is to track visited pages in authoring view - (course Progressbar) - Raghu.K
		    if (trackObjects[SeqID].enableprogressbar == "yes") {
		        if (VisitedPagesNonTracing.toString() == "") {
		            VisitedPagesNonTracing = strPageID;
		            VisitedPageCount++;
		        } else {
		            var arrData = VisitedPagesNonTracing.toString().split(",");
		            VisitedPageCount = arrData.length;
		            for (i = 0; i < arrData.length; i++) {
		                if (Number(strPageID) == arrData[i]) {
		                    //bFoundPageData = true;
		                    return;
		                }
		            }
		            VisitedPagesNonTracing = VisitedPagesNonTracing + ',' + strPageID;
		            //VisitedPageCount ++;
		        }
		    }
			return;
		}//else {// progress pages calculation
		//  if (visitedPagesArray.length > 0)
			  
		 //  suspendPageIDs = strMid;
		 //VisitedPageCount++;
		   //return;
		//} 

		if (strData == "") {

		    strData = trackObjects[SeqID].suspendData;
		    if (strData == undefined) {
		        strData = "";
		    }
		    
		}

		if (trackObjects[SeqID].enableprogressbar == "yes") {
		    var visitedpagesexisted = true; //Sunny for Must attempt
		if (VisitedPagesNonTracing.toString() == "") {
				VisitedPagesNonTracing =  strPageID;
				VisitedPageCount++;
			}else{ 
			var arrData = VisitedPagesNonTracing.toString().split(",");
			VisitedPageCount = arrData.length;
				for (i = 0; i < arrData.length; i++) {
					if (Number(strPageID) == arrData[i]) {
						//bFoundPageData = true;
					    visitedpagesexisted = false; //return; //Sunny for Must attempt
							}
				}
				if (visitedpagesexisted) //Sunny for Must attempt
					VisitedPagesNonTracing = VisitedPagesNonTracing + ',' + strPageID;
					//VisitedPageCount ++;
			}
		}
        //extract the page tracking section #pg_scm_trk_start#
        
        nPos1 = strData.indexOf(strPageTrackingSectionStart);

        if (nPos1 != -1) {
            nPos2 = strData.indexOf(strPageTrackingSectionEnd);

            if (nPos2 != -1) {
                strPre = strData.substring(0, nPos1);

                strPost = strData.substring(nPos2 + strPageTrackingSectionEnd.length, strData.length);

                strMid = strData.substring(nPos1 + strPageTrackingSectionStart.length, nPos2);


                suspendPageIDs = strMid;

                var arrData = strMid.split(";")
                var i = 0;
                var bFoundPageData = false;
				
				if(trackObjects[SeqID].singleqtnperpage == "no" && currPageObject.type != "summary"){
					for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
							var Vpage = getPageByIndex(i);
							bFoundPageData =false; 
							if (Vpage.type != "summary") {
								for (k = 0; k < arrData.length; k++) {
									if (Number(Number(Vpage.pageNumber) + Number(1)) == arrData[k]) {
										bFoundPageData = true; 
										break;
									}
							    }
								if (bFoundPageData == false){
								   allpageIDs = allpageIDs + Number(Number(Vpage.pageNumber) + Number(1)) + ";";
								}
							}
						}
						if (allpageIDs != "")
							strMid = strMid + allpageIDs ;
				}else{
						for (i = 0; i < arrData.length; i++) {

							if (Number(Number(strPageID) + Number(1)) == arrData[i]) {
								bFoundPageData = true;
								strData = appendHintsArraytoStrData(strData);
							    try {
							        var newArray = suspendPageIDs.split(";").filter(function (v) { return v !== '' });
							        VisitedPageCount = newArray.length;
							    } catch (e) { VisitedPageCount = 1; }
								return;
							}
						}

						//page id is not present in the suspend data
						strMid = strMid + Number(Number(strPageID) + Number(1)) + ";"
						}
				suspendPageIDs = strMid;
                try {
                    var newArray = suspendPageIDs.split(";").filter(function (v) { return v !== '' });
                    VisitedPageCount = newArray.length;
                } catch (e) { VisitedPageCount = 1; }
						strData = strPre + strPageTrackingSectionStart + suspendPageIDs + strPageTrackingSectionEnd + strPost;
						strData = appendHintsArraytoStrData(strData);
						trackObjects[SeqID].suspendData = strData;
						if (IsAICC)
							AICC_Data_Chunk = strData;
						else{						if (isTrack == "yes")
							LMSTrackSetValue("cmi.suspend_data", strData);
						else
							LMSSetValue("cmi.suspend_data", strData);
						}

						if (tincan.recordStores.length > 0)
							setTinCanSuspendData(strData);
						//completionLogic();
				
            }
            else {
                // error condition
            }
        }
        else {
			if(trackObjects[SeqID].singleqtnperpage == "no" && currPageObject.type != "summary"){
			for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
					var Vpage = getPageByIndex(i);
						if (Vpage.type != "summary") {
						 allpageIDs = allpageIDs + Number(Number(Vpage.pageNumber) + Number(1)) + ";";
						}
				}
				strData += strPageTrackingSectionStart + allpageIDs + strPageTrackingSectionEnd;
			}else{
				strData += strPageTrackingSectionStart + Number(Number(strPageID) + Number(1)) + ";" + strPageTrackingSectionEnd;
			}
			strData = appendHintsArraytoStrData(strData);
            trackObjects[SeqID].suspendData = strData;
			if (IsAICC)
				AICC_Data_Chunk = strData;
			else {       
			if (isTrack == "yes")
                LMSTrackSetValue("cmi.suspend_data", strData);
            else
                LMSSetValue("cmi.suspend_data", strData);
			}

            if (tincan.recordStores.length > 0)
                setTinCanSuspendData(strData);
            //completionLogic();
        }
    //}

}
 //kiran added for setting time when course closed \
function SetTimeWhenCourseClose() {
    var strData;
    var timeleft=",timeleft;"
    var getTimeWhenClose;
    var suspendTime;
   
    try {
            if (IsAICC) {
                strData = AICC_Data_Chunk;
            } else {
                if (isTrack == "yes")
                    strData = LMSTrackGetValue("cmi.suspend_data");
                else
                    strData = LMSGetValue("cmi.suspend_data");
            }
            strData = strData.split(",");
            suspendTime = strData[0];
            getTimeWhenClose = $("#lblTimer").text();
            if (getTimeWhenClose != undefined && getTimeWhenClose != "") {
                strData = suspendTime + timeleft + getTimeWhenClose;
            }
        trackObjects[SeqID].suspendData = strData;
        if (IsAICC)
            AICC_Data_Chunk = strData;
        else {
            if (isTrack == "yes")
                LMSTrackSetValue("cmi.suspend_data", strData);
            else
                LMSSetValue("cmi.suspend_data", strData);
        }
    
    } catch (e) { }
}

function completionLogic() {
nPercentageOfPagesRequiredForCompletion = trackObjects[SeqID].passPercentage;
// Edited By Raghu.K For Setting Page Completion for CO pages
/* if(pages[SeqID][innerPage].type == "page"){
if(pages[SeqID][innerPage].pageComplete == undefined){
pages[SeqID][innerPage].pageComplete = "completed";
//alert(pages[SeqID][innerPage].pageComplete);
} 
}*/
////////////////////////////////////////////////////////////////
    if (bAutoCompletePercentagePages == true) {

        if (trackObjects[SeqID].pages == 0) {
            return;
        }

        if (nPercentageOfPagesRequiredForCompletion == 0) {
			 //SetCompletionTinCan();
            if (IsAICC) 
				AICC_Status = "completed";
			else 
				LMSSetLessonStatus("completed");
            pages[SeqID].status = "completed";
            updateParentArray();
        }
        else {
            //debugger;
            var strPageTrackingSectionStart = "#pgvs_start#";
            var strPageTrackingSectionEnd = "#pgvs_end#";
            var nPos1, npos2;
            var strMid = "";
            var strData;
			if  (IsAICC)
			{
				strData = AICC_Data_Chunk;
			}
			else if(bSCORM12Enabled == true)
			{
				if (isTrack == "yes")
					strData = LMSTrackGetValue("cmi.suspend_data");
				else
					strData = LMSGetValue("cmi.suspend_data");
			}
			else if (tincan.recordStores.length > 0) {
			    strData = GetTinCanSuspendData();
			}
			else
			{
				strData = trackObjects[SeqID].suspendData;
				if (strData == undefined) {
					strData = "";
				}
			}
            try {
                nPos1 = strData.indexOf(strPageTrackingSectionStart);
            }
            catch (ee)
				{ }
            if (nPos1 != -1) {
                nPos2 = strData.indexOf(strPageTrackingSectionEnd);

                if (nPos2 != -1) {
                    strMid = strData.substring(nPos1 + strPageTrackingSectionStart.length, nPos2);
                    var arrData = strMid.split(";");
                    var nPagesVisited = arrData.length - 1;

                    if (nPercentageOfPagesRequiredForCompletion == 100) {

                        if (nPagesVisited >= trackObjects[SeqID].pages) {
                            SetCompletionTinCan();
                            if (trackObjects[SeqID].testType == "8") { //if (objType != "assessment") {
                               if(getPageByIndex(getTotalPageInObject(SeqID) - 1).type != "summary"){
                                    if (IsAICC) 
										AICC_Status = "completed"; 
									else 
										LMSSetLessonStatus("completed");
                                    pages[SeqID].status = "completed";
                                }
                            }
                            updateCOIcons();
                        }
                    }
                    else {
                        nPagesVisited = (nPagesVisited / trackObjects[SeqID].pages) * 100;

                        if (nPagesVisited >= nPercentageOfPagesRequiredForCompletion) {
                            SetCompletionTinCan();
                            if (trackObjects[SeqID].testType == "8") { //if (objType != "assessment") {
                                if (getPageByIndex(getTotalPageInObject(SeqID) - 1).type != "summary") {
                                  	if (IsAICC) 
						AICC_Status = "completed"; 
					else 
						LMSSetLessonStatus("completed");
                                    pages[SeqID].status = "completed";
                                }
                            }
                            updateCOIcons();
                        }
                    }
                }
            }
        }
    }

}

function updateCOIcons() {
    $('.tblTOC div table tr td span[SeqID="' + SeqID + '"]').each(function () {
        $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/tick.gif");
    });
}

function findSummaryTableColumns() {

    var arr = ["sf_qNo", "sf_questionText", "sf_showResponse", "sf_showFeedback"];
    var counter = 0;
    for (var k = 0; k < arr.length; k++) {
        if (trackObjects[SeqID][arr[k]] == "yes")
            counter++;
    }
    return counter;
    
    
}

function showsummary() {
    //debugger;
    isLongAnswer = false;
    if (trackObjects[SeqID].testType == "28") {
        $("#tdPass").attr("style", "display:''");
        $("#loader").fadeTo("slow", 0);
        $("#page").fadeTo("slow", 1);
        $('#tblsummary').hide();
        document.getElementById("printbtn").style.display = "none";
        document.getElementById("editbtn").style.display = "none";
        document.getElementById("submitbtn").style.display = "none";
        document.getElementById("retakebtn").style.display = "none";
        document.getElementById("Completedbtn").style.display = "none";
        $('.summarytbl').hide();
		if (isSurveycommited == false)
            LMSSetRawScore(100) // Update User score
		isSurveycommited = false;
        SetCompletionTinCan();
        LMSSetLessonStatus("completed");
		if (IsAICC) AICC_Status = "completed"; 
        pages[SeqID].status = "completed";
        if (document.getElementById("tblshowprogress") != null)
            document.getElementById("tblshowprogress").style.display = "none";
        return;
    } else {
       //MCI Issue fix - all buttons hide while summarypage loads
        $("tr[id='trPrint']").hide();
        if (trackObjects[0].enableautoretake == "yes")
            document.getElementById("retakebtn").style.display = "none";
    }
    
   if (objType == "content object" || objType == "contentobject"){
        for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
            if (getPageByIndex(i).Qtype == "longanswer") {
                isLongAnswer = true;
                break;
            }
        }
       try{
           if (trackObjects[SeqID].sf_showPrint == "no") {
               document.getElementById("printbtn").style.display = "none";
           }
       } catch (e) { }
       try{
           document.getElementById("Completedbtn").style.display = "none";
       } catch (e) { }
       try {
           if (trackObjects[SeqID].sf_showRetake == "no") {
               document.getElementById("retakebtn").style.display = "none";
           }
       } catch (e) { }
       try {
           if (trackObjects[SeqID].sf_showEdit == "no") {
               document.getElementById("editbtn").style.display = "none";
           }
       } catch (e) { }
       try {
           if (trackObjects[SeqID].userpagenotes == "no" || trackObjects[SeqID].singleqtnperpage == "no") {
               document.getElementById("divnoteBtn").style.display = "none";
           }
       } catch (e) { }
       
	}
    $('#tblsummary').html("");
    summaryColumns = findSummaryTableColumns();
    //debugger;
	$('#tblsummary').attr('class', 'summarydetails');

	if (trackObjects[SeqID].sf_name == "yes") {
	    var student_name = LMSGetStudentName();
	    //if (tc_lrs != null)
	    if (tincan.recordStores.length > 0)
		  {	      
		      student_name = tincan.actor.name;
		  }
	    try {
	        if (student_name.indexOf(",") != -1)
	            student_name = repeatReplace(student_name, ',', ' ');
	    }
	    catch (ex)
	    { }
	    if (student_name == "" || student_name == null) {
	        student_name = "&nbsp;";
	    }
	   /* Commented by Raghu **** $('#tblsummary').append("<tr><td align='left' colspan='" + summaryColumns + "'><font class='summaryheader'>User's Name: </font><font class='summaryfields'>" + student_name + "</font></td></tr>");
	    $('#tblsummary').append("<tr><td align='left' colspan='" + summaryColumns + "'>&nbsp;&nbsp;&nbsp;</td></tr>");*/
	    
	}

	var strSuspendData = "";
	if (isLongAnswer) {
	    if (strLessonStatus == "")
	        assessmentStatus = "incomplete";
	    else
	        assessmentStatus = strLessonStatus;
	}
	var sectionTitle = getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/;
	 /*Commented by Raghu **** $('#tblsummary').append("<tr><td align='left' colspan='" + summaryColumns + "'><font class='summaryheader'>Assessment Summary For : </font><font class='summaryfields'>" + sectionTitle + "</font></td></tr>");*/
	generateSummary();

	//debugger;
	
    
    if (document.getElementById("tblshowprogress") != null)
        document.getElementById("tblshowprogress").style.display = "none";

	hasAttemptedAll = true;

	//$("#loader").fadeTo("slow", 0);

}

function loadContentXML(filename) {
    $.ajax({
        url: filename,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
            contentXML = xml;
            if (isTrack == "no")
            loadContentLibrary("content/pages/Contentlibrary.xml");
            else
            loadContentLibrary(targetPath + "content/pages/Contentlibrary.xml");
        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}
function loadContentLibrary(filename) {
    $.ajax({
        url: filename,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
            contentLibXML = xml;
            loadPageXmls();

        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}
function loadPageXmls() {
    questionsArray = new Array();
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else // for IE 5/6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", TreeURL(), false);
    xhttp.send();
    xml1 = xhttp.responseXML;

    //var pagesNodes = $(contentXML).find("page");
    var pagesNodes = $(xml1).find("node");
    
    for (var n = 0; n < pagesNodes.length; n++) {
        var pageid = pagesNodes[n].getAttribute("id");
		var pageType = pagesNodes[n].getAttribute("type").toUpperCase();
		// Added matrix by maheedhar for CoEditor 5.9 version
		if (pageType == "TRUEFALSE" || pageType == "MULTIPLESELECT" || pageType == "SINGLESELECT" || pageType == "FILLINTHEBLANK" || pageType == "DRAGANDDROP" || pageType == "MATRIX" || pageType == "LONGANSWER" || pageType == "RATING" || pageType.toLowerCase() == "sequence") {
        var pageurl = targetPath + "content/pages/" + pageid + ".xml";
        loadQuestionforSummary(n, pageurl, pagesNodes);
        }else{
		    SummarySuccessPagecount++;
		questionsArray[n] = new Object();
        questionsArray[n].options = new Array();
		questionsArray[n].questionPageId = pageid; // added on  29-10-2014 - Randomization in CO
		  if (SummarySuccessPagecount == pagesNodes.length) {
		    SummarySuccessPagecount = 0;
		    CalldrawTable()
		}
		}
    }
}
function CalldrawTable()
{
    //question pool - 31-12-2015
    // added on  29-10-2014 - Randomization in CO
	if(trackObjects[SeqID].questionrandomization.toLowerCase() == "yes" || pooledQuestionsStringArray[SeqID] != ""){
	    setTimeout(function () {
	        if (pooledQuestionsStringArray.length > 0 && pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined) {
	            questionsArray = matchWithPooledPageArray(questionsArray);
	        }
	        if (trackObjects[SeqID].questionrandomization.toLowerCase() == "yes" && (pooledQuestionsStringArray[SeqID] == "" || pooledQuestionsStringArray[SeqID] == undefined))
	            questionsArray = matchWithRandomizedPageArray(questionsArray);

		setTimeout(drawTable, 1000);
	   },1000);
	}else{
	     try{
		    /*changed by satya for overview assessment workflow - INST-1240 */
		    CheckWorkflowRuleOnTriggered("ongeneratesummary", "", "");
             if(completedactions =='')
                setTimeout(drawTable, 1000);
	     } catch (e) { setTimeout(drawTable, 1000); }
	}
	          
}

function loadQuestionforSummary(n, pageurl, pagesNodes) {

    $.ajax({
        url: pageurl,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
            questionsArray[n] = new Object();
            questionsArray[n].options = new Array();
	    questionsArray[n].optionspoints = new Array();
	    questionsArray[n].optLevelFeedback = new Array();
            var pageXml = xml;
	    // added on  29-10-2014 - Randomization in CO
			// added for randomization JIRA Id:INST-6583
		try{
		  questionsArray[n].questionPageId = $(pageXml).find('page').attr('id');
		}catch(e){
		  questionsArray[n].questionPageId = "";
		}
		//var pageType = $(pageXml).find('page').attr('type');

		var pageObjectsNodes = $(pageXml).find("pageobject[language='"+selectedLanguage+"']");//later we've to specify the language. At present english is default.
		if (pageObjectsNodes.length == 0 || $(pageObjectsNodes).find("pageobject[type='question'][language='" + selectedLanguage + "']").length == 0) {
		    pageObjectsNodes = $(pageXml).find("pageobject");
		}

            for (var n1 = 0; n1 < pageObjectsNodes.length; n1++) {
                var selectQuestionAttribute = pageObjectsNodes[n1].getAttribute("group");
                var selectTypeAttribute = pageObjectsNodes[n1].getAttribute("type");
                if (selectQuestionAttribute == "QUESTION" && selectTypeAttribute == "text") {
                    var poid = pageObjectsNodes[n1].getAttribute("poid");
                    var pageObjectNode = $(contentLibXML).find("pageobject[id=" + poid + "]");
                    var data = $(pageObjectNode)[0].text;
                    if (data == undefined)
                        data = $(pageObjectNode)[0].textContent;
                    if (data.indexOf("ttp://www.w3.org/1998/Math/MathML") != -1)
                        data = renderQuestionMathML(data);
                        questionsArray[n].question = data;
			if (trackObjects[SeqID].samescoreperpage != "yes"){ // Bhushanam Added this code for same/different scores...
				if(pageObjectsNodes[n1].getAttribute("questionscoreval") != undefined)
					questionsArray[n].Pagescore = pageObjectsNodes[n1].getAttribute("questionscoreval")
				if(pageObjectsNodes[n1].getAttribute("assignpoints") != undefined)	
					if(pageObjectsNodes[n1].getAttribute("assignpoints") == "yes" )
						questionsArray[n].pointsscore = "yes";
					else
						questionsArray[n].pointsscore = "no";
			}
                }
                if (selectQuestionAttribute == "INCORRECTFEEDBACK" || selectQuestionAttribute == "CORRECTFEEDBACK") {
                    var poid = pageObjectsNodes[n1].getAttribute("poid");
                    var pageObjectNode = $(contentLibXML).find("pageobject[id=" + poid + "]");
                    var data = $(pageObjectNode)[0].text;
                    if (data == undefined)
                        data = $(pageObjectNode)[0].textContent;
                    if (data.indexOf("ttp://www.w3.org/1998/Math/MathML") != -1)
                        data = renderQuestionMathML(data);
                    if (selectQuestionAttribute == "INCORRECTFEEDBACK")
                        questionsArray[n].incorrectfeedback = data;
                    else
                        questionsArray[n].correctfeedback = data;


                }
                if (selectQuestionAttribute == "OPTIONS" && selectTypeAttribute == "text") {
                    
                    var choice = pageObjectsNodes[n1].getAttribute("choice");
                    var displayOrderNode = $(pageXml).find("pageobject[id=" + choice + "]");
                    var poid = pageObjectsNodes[n1].getAttribute("poid");
                    var pageObjectNode = $(contentLibXML).find("pageobject[id=" + poid + "]");
                    var data = $(pageObjectNode)[0].text;
                    if (data == undefined)
                        data = $(pageObjectNode)[0].textContent;
                    if (data.indexOf("ttp://www.w3.org/1998/Math/MathML") != -1)
                        data = renderQuestionMathML(data);
                    questionsArray[n].options[displayOrderNode[0].getAttribute("displayorder")] = data;
		    if (trackObjects[SeqID].samescoreperpage != "yes"){
				if (questionsArray[n].pointsscore == "yes"){
					questionsArray[n].optionspoints[displayOrderNode[0].getAttribute("displayorder")] = [displayOrderNode[0].getAttribute("optionscore"),displayOrderNode[0].getAttribute("correct")];
				}
				else {
				    questionsArray[n].optionspoints[displayOrderNode[0].getAttribute("displayorder")] = [displayOrderNode[0].getAttribute("optionscore"), displayOrderNode[0].getAttribute("correct")];

				}
				}
                    try{
                        if (trackObjects[SeqID].optionlevelfeedback.toLowerCase() == "yes") {
                            //debugger;
                            var choice = pageObjectsNodes[n1].getAttribute("choice");
                            var displayOrderNode = $(pageXml).find("pageobject[id=" + choice + "]");
                            var PgType = $(pageXml).find('page').attr('type');
                            if (PgType == "TRUEFALSE" || PgType == "SINGLESELECT") {
                                var optFbId = pageObjectsNodes[n1].getAttribute("orcid");
                                if (optFbId == undefined || optFbId == "undefined" || optFbId == "" || optFbId == "null" || optFbId == null) {
                                    var data = "Option feedback";
                                }
                                else {
                                    var feedBackNode = $(contentLibXML).find("pageobject[id=" + optFbId + "]")
                                    var data = $(feedBackNode).text();
                                }
                            }
                            questionsArray[n].optLevelFeedback[displayOrderNode[0].getAttribute("displayorder")] = data;
                        }
                    }catch(e){}
                }

                if (selectQuestionAttribute == "OPTIONS" && selectTypeAttribute == "optiontext") {
                    try {
                        if (trackObjects[SeqID].optionlevelfeedback.toLowerCase() == "yes") {
                            //debugger;
                            var displayOrderNode = pageObjectsNodes[n1].getAttribute("id");
                            var PgType = $(pageXml).find('page').attr('type');
                            if (PgType == "TRUEFALSE" || PgType == "SINGLESELECT") {
                                var optFbId = pageObjectsNodes[n1].getAttribute("orcid");
                                if (optFbId == undefined || optFbId == "undefined" || optFbId == "" || optFbId == "null" || optFbId == null) {
                                    var data = "Option feedback";
                                }
                                else {
                                    //mediaOptionsEnabled = true;
                                    var feedBackNode = $(contentLibXML).find("pageobject[id=" + optFbId + "]")
                                    var data = $(feedBackNode).text();
                                    questionsArray[n].optLevelFeedback[pageObjectsNodes[n1].getAttribute("displayorder")] = data;
                                }
                            }                            
                        }
                    }catch(e){}
                }
            }
                SummarySuccessPagecount++;
                if (SummarySuccessPagecount == pagesNodes.length) {
                    SummarySuccessPagecount = 0;
                    CalldrawTable()
                }
        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}

function generateSummary() {

    //if (trackObjects[SeqID].sf_questionText == "yes" || trackObjects[SeqID].sf_showFeedback == "yes") {

        if (isTrack == "no")
            loadContentXML("content/pages/content.xml", "content");
        else
            loadContentXML(targetPath + "content/pages/content.xml", "content");
    //}
    //else {
      //  drawTable();
    //}
}

function getFormatedText(str){
var arr = [];
var setTetx = "";
if (str != "" && str != undefined){
	arr = str.toString().split(",");
		for(var i=0;i<arr.length;i++){
		var val = i+1;
		if(i<arr.length-1){
			setTetx +="("+val+") "+arr[i]+", ";
		}
		else{
		setTetx +="("+val+") "+arr[i];
		}

	}
}
return setTetx;
}
function getCurrectOptionsPoints(pageNo){
	var optpointscount = 0
	try{
		if(questionsArray[pageNo].optionspoints != undefined){
			for (var ops = 1;ops < questionsArray[pageNo].optionspoints.length; ops++){
				if(questionsArray[pageNo].optionspoints[ops][1] == "true")
					optpointscount = parseInt(optpointscount) + parseInt(questionsArray[pageNo].optionspoints[ops][0]);
			}
		}
	}catch(e){}
	return optpointscount;
}
function getCurrectAnswersOptionsPoints(pageNo,userans)
{
	var correctoptionspoints = 0;
	try{
		var useranswers = userans.split(",")
		for (var ans=0;ans < useranswers.length; ans++){
		 if (questionsArray[pageNo].optionspoints[useranswers[ans]][0] != undefined)
				correctoptionspoints = parseInt(correctoptionspoints) + parseInt(questionsArray[pageNo].optionspoints[useranswers[ans]][0]);
		}
	}catch(e){}
	return correctoptionspoints;
}

function drawTable() {
var screenWidth = $( window ).width();
var screenHeight = $( window ).height();

    var showQuestionRows = true;
    if (trackObjects[SeqID].sf_questionText != "yes" && trackObjects[SeqID].sf_qNo != "yes" && trackObjects[SeqID].sf_showFeedback != "yes" && trackObjects[SeqID].sf_showResponce != "yes") {
        showQuestionRows = false;
    }

   try{
        if (isinstancycontent == true) {
            AssessorService = LMSGetCourseAssessor();
      	      AssessorService =ReplaceAll(AssessorService, '"', '');
           }
	}catch(e){
     	   AssessorService = "false"
    	}
      
    
    //////////////////////////////////**************** v A L I D A T I O N *****************//////////////////////////////
    summaryQuestionNum = 0;
    var correctAnswers = 0;
    var counter = 0;
	var inCorrect_ans;
	var correctAnswersscore = 0;
	var reqpoints = 0;
	showQuestionRows = true;
	var testStatus = "failed";
   // if (showQuestionRows == true) {
        
 if (trackObjects[SeqID].samescoreperpage == "yes") {
	for (var qno = 0; qno < pages[SeqID].length - 1; qno++) {
	    var SummaryPage = pages[SeqID][qno];
	    if (SummaryPage.type != "topic") {
	        if (SummaryPage.iscoao != "co") {
	            // Added by maheedhar for CoEditor 5.9 version
		    // Hide summary row for matrix page
	            if (SummaryPage.Qtype != "matrix") {
	                counter = counter + 1;
	                if (SummaryPage.status == "correct" || SummaryPage.status == "NA") {
	                    correctAnswers++;
	                }
	            }
	        }
	    } else {
	        for (j = 0; j < SummaryPage.pages.length; j++) {
	            if (SummaryPage.pages[j].type != "topic") {
	                if (SummaryPage.pages[j].iscoao != "co") {
		            // Added matrix condition by maheedhar for CoEditor 5.9 version
	                    if (SummaryPage.pages[j].Qtype != "matrix") {
	                        counter = counter + 1;
	                        if (SummaryPage.pages[j].status == "correct" || SummaryPage.pages[j].status == "NA") {
	                            correctAnswers++;
	                        }
	                    }
	                }
	            } else {
	                for (k = 0; k < SummaryPage.pages[j].pages.length; k++) {
	                    if (SummaryPage.pages[j].pages[k].iscoao != "co") {
			        // Added matrix condition by maheedhar for CoEditor 5.9 version
	                        if (SummaryPage.pages[j].pages[k].Qtype != "matrix") {
	                            counter = counter + 1;
	                            if (SummaryPage.pages[j].pages[k].status == "correct" || SummaryPage.pages[j].pages[k].status == "NA") {
	                                correctAnswers++;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	}
    
    inCorrect_ans = counter - correctAnswers
////////////////////////////////////// ************E N D *********************////////////////////////////////////////////////////
    //calculation for correct, incorrectfeedback and adding question and user responce to summary table

  /*  $("#tblsummary").append($("<tr><td colspan='" + summaryColumns + "' align='left'><font class='summaryheader'>Results for : </font><font class='summaryfields'>" + trackObjects[SeqID].title + "</font></td></tr>'"));*/

    //var score = (trackObjects[SeqID].scorePerItem * correctAnswers) - ((counter - correctAnswers) * trackObjects[SeqID].negativeScore)
	var score = (trackObjects[SeqID].scorePerItem * correctAnswers) 
    if (score < 0) score = 0;
    var maxScore = parseFloat(((counter) * trackObjects[SeqID].scorePerItem));
    var userScore = parseFloat(Round((score / ((counter) * trackObjects[SeqID].scorePerItem)) * 100, 0));
	if (isNaN(userScore)) userScore = 0;
   
    }else
	{
		// bhushanam : added this else condition for calc scoreper page options.
        var totalscore = 0;
		var QtnPageno = 0;
        for (var i = 0; i < pages[SeqID].length; i++) {
		  var SummaryPage = pages[SeqID][i];
		  if (SummaryPage.type != "topic") {
		  if (SummaryPage.iscoao != "co") {
		   if (SummaryPage.Qtype != "matrix") {
				//if (pages[SeqID][qno].type != "page" && pages[SeqID][qno].type != "summary") {
                    counter = parseInt(counter) + 1;
					if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no"){
						totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
						if(pages[SeqID][i].useranswer != undefined)
						correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno,pages[SeqID][i].useranswer.toString()));
					if (pages[SeqID][i].status == "correct" || pages[SeqID][i].status == "NA") 
						 correctAnswers++;
					}
					else
					{
						var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
					   totalscore = parseInt(totalscore) + parseInt(qtnscore); 
                    if (pages[SeqID][i].status == "correct" || pages[SeqID][i].status == "NA") {
						correctAnswers++;
                        correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
						}
                    }
					
                //}
				}
			} QtnPageno ++;
			}else {
				  for (j = 0; j < SummaryPage.pages.length; j++) {
                //for (var qno2 = 0; qno2 < pages[SeqID][qno].pages.length; qno2++) {
                    if (SummaryPage.pages[j].type != "topic") {
                         if (SummaryPage.pages[j].iscoao != "co") {
						 if (SummaryPage.Qtype != "matrix") {
							   counter = parseInt(counter) + 1;
							   if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no")
							   {
									totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
									if(pages[SeqID][i].pages[j].useranswer != undefined)
									correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno,pages[SeqID][i].pages[j].useranswer.toString()));
									if (pages[SeqID][i].pages[j].status == "correct" || pages[SeqID][i].pages[j].status == "NA") 
										correctAnswers++;
							   }else{
							   var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
								totalscore = parseInt(totalscore) + parseInt(qtnscore);
								if (pages[SeqID][i].pages[j].status == "correct" || pages[SeqID][i].pages[j].status == "NA") {
									correctAnswers++;
									correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
								}
								}
						    }
                        }QtnPageno ++;
                    }
                    else {
					       for (k = 0; k < SummaryPage.pages[j].pages.length; k++) {
                                if (SummaryPage.pages[j].pages[k].iscoao != "co") {
								if (SummaryPage.Qtype != "matrix") {
                                   counter = parseInt(counter) + 1;
						        if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no")
								{
									totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
									if(pages[SeqID][i].pages[j].pages[k].useranswer != undefined)
									correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno,pages[SeqID][i].pages[j].pages[k].useranswer.toString()));
									if (pages[SeqID][i].pages[j].pages[k].status == "correct" || pages[SeqID][i].pages[j].pages[k].status == "NA") 
										correctAnswers++;
								}else{
									var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
									totalscore = parseInt(totalscore) + parseInt(qtnscore);
									if (pages[SeqID][i].pages[j].pages[k].status == "correct" || pages[SeqID][i].pages[j].pages[k].status == "NA") {
										correctAnswers++;
										correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
                                    }
                                }
							 }
                            }QtnPageno ++;
                        }
                    }
                }
            }
       }
	 var userScore = parseFloat(Round((correctAnswersscore / totalscore) *100),0);
     if (isNaN(userScore)) userScore = 0;
	 inCorrect_ans = parseInt(counter) - parseInt(correctAnswers)
	 reqpoints = parseInt(((totalscore * trackObjects[SeqID].passScore)/100));
	// end else...
	
	}
	if (objType == "content object" || objType == "contentobject"){
	    if (trackObjects[SeqID].progresscompletion == "yes" && (AssessorService =="false" || AssessorService == null)) {  // LM having long answers
			if (!isLongAnswer)  {
				if ((userScore - trackObjects[SeqID].passScore) >= 0) 
					testStatus = "passed"; }
			else  
					{testStatus = "completed";  }
			 
	    }else{
		 if (!isLongAnswer) {
				if ((userScore - trackObjects[SeqID].passScore) >= 0) 
					testStatus = "passed";
			}
			else{  if (strLessonStatus == "passed" || strLessonStatus =="completed" )
			          testStatus = "passed"; 
				   else if (strLessonStatus == "grade")
					  testStatus = "grade";
					else
					  testStatus = "incomplete";
				}
		 }
	}else{
		if (!isLongAnswer) {
			if ((userScore - trackObjects[SeqID].passScore) >= 0)  
				testStatus = "passed";
		   }
		else {
			testStatus = strLessonStatus == "passed" ? "passed" : (strLessonStatus == "grade") ? "grade" : "incomplete";
		}
	}
	   
	   pages[SeqID].userScore = userScore;
	   pages[SeqID].maxScore = trackObjects[SeqID].passScore;
	   pages[SeqID].testStatus = testStatus;
	   pages[SeqID].status = testStatus;
		
    var c1 = 1;
    var c2 = 1;
    switch (summaryColumns) {
        case 4:
            c1 = 2;
            c2 = 2;
            break;
        case 3:
            c1 = 2;
            c2 = 1;
            break;
        case 2:
        case 1:
        default:
            c1 = 1;
            c2 = 1;
            break;
    }
//////////////////////// ********************NEW Summary Format*****************//////////////////////////////////////////////////
    $("#summary_web").html("");
    if (trackObjects[SeqID].sf_name == "yes") {
		if (IsAICC)
			 var student_name = AICC_Student_Name;
		else
        var student_name = LMSGetStudentName();
        if (tincan.recordStores.length > 0) {
            student_name = tincan.actor.name;
        }
            try {
                if (student_name.indexOf(",") != -1)
                    student_name = repeatReplace(student_name, ',', ' ');
            }
            catch (ex)
            { }
        if (student_name == "" || student_name == null) {
            student_name = "&nbsp;";
        }
        $("#summary_web").append($("<div>User name: <span class='summary_result'>" + student_name + "</span></div>'"));
    }
    $("#summary_web").append($("<div>Summary for: <span class='summary_result'>" + getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/ + "</span></div>'"));
    if (trackObjects[SeqID].sf_showtotalqtn == "yes")
	  $("#summary_web").append($("<div>Total questions: <span class='summary_result'>" +counter+"</span></div>'"));
    if (trackObjects[SeqID].sf_showcorrectans == "yes")
	  $("#summary_web").append($("<div>Correct answers: <span class='summary_result'>" +correctAnswers+ "</span</div>'"));
    if (trackObjects[SeqID].sf_showincorrectans == "yes")
	  $("#summary_web").append($("<div>Incorrect answers: <span class='summary_result'>" +inCorrect_ans+ "</span></div>'"));

    if (trackObjects[SeqID].sf_userScore == "yes") {
	if (trackObjects[SeqID].scoredisplayoption == "percentage")
	    $("#summary_web").append($("<div>Your score: <span class='summary_result'>" + userScore +'%'+ "<span></div>'"));
		else
		$("#summary_web").append($("<div>Your score: <span class='summary_result'>" + userScore +'%'+ "&nbsp;&nbsp; (" + correctAnswersscore + " &nbsp;Points)<span></div>'"));
	}
    if (trackObjects[SeqID].sf_passingScore == "yes") {
	if (trackObjects[SeqID].scoredisplayoption == "percentage")
	  $("#summary_web").append($("<div> Passing score: <span class='summary_result'>" + trackObjects[SeqID].passScore +'%'+ "</span></div>'"));
	 else
	  $("#summary_web").append($("<div> Passing score: <span class='summary_result'>" + trackObjects[SeqID].passScore +'%'+ "&nbsp;&nbsp; ("+ reqpoints +" &nbsp;Points)</span></div>'"));
	  }
        
    if (trackObjects[SeqID].sf_result == "yes") {
        var status = "";
        if (!isLongAnswer) {
            if (testStatus == "passed")
                status = "Passed";
            else if (testStatus == "failed")
                status = "Failed";
			else if (testStatus == "completed")
                status = "completed";
        }
        else {
            switch (testStatus) {
                case "grade":
                    status = "Pending Review";
                    break;
                case "passed":
                    status = "Passed";
                    break;
                case "incomplete":
                    status = "In Progress";
                    break;
                case "completed":
                    status = "Completed";
                    break;
            }
        }
        if (trackObjects[SeqID].trackScore.toLowerCase() == "no") {
            status = "Completed";
        }
         $("#summary_web").append($("<div>Result: <span class='summary_result'>" + status + "</span></div>'"));
    }
   /* try{
        if (trackObjects[SeqID].sf_attemptsLeft == "yes") {
            if (reatt_Onfail == "" || reatt_Onfail == null) {
                reatt_Onfail = "&nbsp;"
            }
            if (noa != "unlimited" && noa != "9999") {
               var att = LMSGetAttemptsLeft();
               
                if (att != "" && att != undefined && att != null)
                    reatt_Onfail = parseInt(noa) - parseInt(att);
                else
                    reatt_Onfail = parseInt(noa) - parseInt(allowedAttempts);
                if (reatt_Onfail <= 0) reatt_Onfail = 0;
            }
            if (reatt_Onfail == "unlimited" || noa == "9999")
                reatt_Onfail = "Unlimited";
            else if (reatt_Onfail == "0") {
                reatt_Onfail = "None";
                document.getElementById("retakebtn").style.display = "none";
                document.getElementById("editbtn").style.display = "none";
            }
            $("#summary_web").append($("<div>Attempts left: <span class='summary_result'>" + reatt_Onfail + "</span></div>'"));
        }
        else{
            if (reatt_Onfail == "" || reatt_Onfail == null) {
                reatt_Onfail = "&nbsp;"
            }
            if (noa != "unlimited" && noa != "9999") {
                var att = LMSGetAttemptsLeft();
                 
                if (att != "" && att != undefined && att != null)
                    reatt_Onfail = parseInt(noa) - parseInt(att);
                else
                    reatt_Onfail = parseInt(noa) - parseInt(allowedAttempts);
                if (reatt_Onfail <= 0) reatt_Onfail = 0;
            }
            if (reatt_Onfail == "unlimited" || noa == "9999"){
                reatt_Onfail = "Unlimited";
            }
            else if (reatt_Onfail == "0") {
                reatt_Onfail = "None";
                document.getElementById("retakebtn").style.display = "none";
                document.getElementById("editbtn").style.display = "none";
            }
        }
    } catch (e) { }*/

    if (showQuestionRows == true) {
    // Added hidetopic condition by maheedhar for CoEditor 5.9 version
        var hidetoctopic;
        try {
            if (trackObjects[SeqID].hidetoctopic == undefined)
                hidetoctopic = "no";
            else
                hidetoctopic = trackObjects[SeqID].hidetoctopic.toLowerCase();
        } catch (e) { hidetoctopic = "no"; }
	if(screenWidth>605){
///////////////////////////////////////// *************WEB PAGE RENDERING*********** /////////////////////////////
	    $("#tblsummary").html('');
	    var $detailsTab = $("<tr></tr>");
	    // Changed colspan to 8 by maheedhar for CoEditor 5.9 version
	    $detailsTab.append("<td colspan ='8' align='left' class='summarydetails-header'>Details</td>");
	    
		 $("#tblsummary").append($detailsTab);
        // column titles for question rows
        var $header = $("<tr></tr>");
	// Added hidetopic condition by maheedhar for CoEditor 5.9 version
		if (hidetoctopic == "no") {
		     $header.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
		     $header.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
		 }
		try{
			if (trackObjects[SeqID].sf_qNo == "yes") {
			   $header.append("<td align='left' class='summarydetails-hlbl' style='width:1%'>#</td>");
			}
		}catch(e){}
        if (trackObjects[SeqID].sf_questionText == "yes") {
            $header.append("<td align='left' class='summarydetails-hlbl' style='width:39%'>Question text</td>");
        }
        if (trackObjects[SeqID].sf_showResponse == "yes") {
            $header.append("<td align='left' class='summarydetails-hlbl' style='width:1%'></td><td align='left' class='summarydetails-hlbl' style='width:20%'>Your response</td>");
        }
        if (trackObjects[SeqID].sf_showcorrect_in == "yes") {
		$header.append("<td align='left' class='summarydetails-hlbl' style='width:10%'>Correct/Incorrect</td>");
        }
        if (trackObjects[SeqID].sf_showFeedback == "yes") {
            $header.append("<td align='left' class='summarydetails-hlbl' style='width:30%'>Feedback</td>");
        }
        $('#tblsummary').append($header);
        // Added hidetopic condition by maheedhar for CoEditor 5.9 version
        if (hidetoctopic == "no") {
            var $titleheader = $("<tr></tr>");
			$titleheader.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
			$titleheader.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
            $titleheader.append("<td colspan ='8' align='left' class='summarydetails-title' style='width:100%'>" + getPageTitle(trackObjects[SeqID])/*trackObjects[SeqID].title*/ + "</td>");
            $('#tblsummary').append($titleheader);
        }
        // column rows
    ////////////////////////////////////// ********Creating rows and row content ***** ////////////////////////////////    
        //var $tbl = $("<tr></tr>");
			//var tblId = "tblId"
			//var tdId = "td_";
			//var $tdData = $("<td colspan ='5' id ='"+tdId+"'></td>")
			//$headerdata.append($tdData);
			//var $divData = $("<div class='summaryqtbl' id ='"+tblId+"'></div>");
			//$tdData.append($divData)
			//var str = "inner_tbl";
			//var $tbl = $("<table  width='100%' cellpadding='0' cellspacing='0' id ='"+str+"'></table>")
			//$divData.append($tbl);
			var tempQno = 0; 
			var toptempQno = 0;
		for (var qno = 0; qno < pages[SeqID].length - 1; qno++) {
			var SummaryPage = pages[SeqID][qno];
			if (SummaryPage.type != "topic") {
				    if (SummaryPage.iscoao != "co") {
				        if (SummaryPage.type != "page") {
				            tempQno = qno + 1;
				        } else {
					    // Added matrix condition by maheedhar for CoEditor 5.9 version
				            if (SummaryPage.Qtype != "matrix") {
				              tempQno = SummaryPage.pageNumber;
				            } else {
				              tempQno = qno + 1;
				            }
				        }
				        try{
					    // Added matrix condition by maheedhar for CoEditor 5.9 version
				            if (SummaryPage.Qtype != "matrix") {
				                $('#tblsummary > tr:last').after(returnWebSummaryRow(qno, tempQno, SummaryPage, ""));
				                if (SummaryPage.status == "correct" || SummaryPage.status == "NA") {
				                    correctAnswers++;
				                }
				            }
				        }catch(e){}
				    }
				} else {
			        //debugger;
				// Added booleans for hidetopic by maheedhar for CoEditor 5.9 version
			        isTopicHeadingAdded = false;
			        isSubtopicHeadingAdded = false;
					
					for (topqno = 0; topqno < SummaryPage.pages.length; topqno++) {
					    if (SummaryPage.pages[topqno].type != "topic") {

					        if (SummaryPage.pages[topqno].iscoao != "co") {

					            // Added hidetopic condition by maheedhar for CoEditor 5.9 version
					            if (hidetoctopic == "no" && isTopicHeadingAdded == false) {
					                isTopicHeadingAdded = true;
					                var $topictbl = $("<tr class='summarydetails-topic'></tr>");
					                $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
					                $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
					                $topictbl.append("<td colspan='6' valign='top' align='left' >" + getPageTitle(SummaryPage)/*SummaryPage.title*/ + "</td>");
					                $('#tblsummary > tr:last').after($topictbl);
					            }
							  
							    if (SummaryPage.pages[topqno].type != "page"){
								    toptempQno = SummaryPage.pages[topqno].pageNumber + 1;
							    } else {
							        // Added matrix condition by maheedhar for CoEditor 5.9 version
							        if (SummaryPage.pages[topqno].Qtype != "matrix") {
							            toptempQno = SummaryPage.pages[topqno].pageNumber;
							        } else {
							            toptempQno = SummaryPage.pages[topqno].pageNumber + 1;
							        }
							    }
						        try{
							         // Added matrix condition by maheedhar for CoEditor 5.9 version
						            if (SummaryPage.pages[topqno].Qtype != "matrix") {
						                if (hidetoctopic == "no") {
						                    $('#tblsummary > tr:last').after(returnWebSummaryRow(qno, toptempQno, SummaryPage.pages[topqno], "topic"));
						                } else {
						                    $('#tblsummary > tr:last').after(returnWebSummaryRow(qno, toptempQno, SummaryPage.pages[topqno], ""));
						                }

						                if (SummaryPage.pages[topqno].status == "correct" || SummaryPage.pages[topqno].status == "NA") {
						                    correctAnswers++;
						                }
						            }
						        }catch(e){}
			                }
			            }
			            else {
				                    // Added booleans for hidetopic by maheedhar for CoEditor 5.9 version
						    isSubtopicHeadingAdded = false;
			                for (subtopqno = 0; subtopqno < SummaryPage.pages[topqno].pages.length; subtopqno++) {
			                    if (SummaryPage.pages[topqno].pages[subtopqno].type != "topic") {
			                        if (SummaryPage.pages[topqno].pages[subtopqno].iscoao != "co") {
			                        // Added hidetopic condition by maheedhar for CoEditor 5.9 version
			                        if (hidetoctopic == "no" && isTopicHeadingAdded == false) {
			                            isTopicHeadingAdded = true;
			                            var $topictbl = $("<tr class='summarydetails-topic'></tr>");
			                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
			                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
			                            $topictbl.append("<td colspan='6' valign='top' align='left' >" + getPageTitle(SummaryPage)/*SummaryPage.title*/ + "</td>");
			                            $('#tblsummary> tr:last').after($topictbl);
			                        }

			                        // Added hidetopic condition by maheedhar for CoEditor 5.9 version
			                        if (hidetoctopic == "no" && isSubtopicHeadingAdded == false) {
			                            isSubtopicHeadingAdded = true;
			                            var $topictbl = $("<tr  class='summarydetails-subtopic'></tr>");
			                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
			                            $topictbl.append("<td class='summarydetails-subtopicline' style='padding:0px;margin:0px;'>&nbsp</td>");
			                            $topictbl.append("<td colspan='6' valign='top' align='left' >" + getPageTitle(SummaryPage.pages[topqno])/*SummaryPage.pages[topqno].title*/ + "</td>");
			                            $('#tblsummary> tr:last').after($topictbl);
			                        }
			                        
			                            if (SummaryPage.pages[topqno].pages[subtopqno].type != "page") {
			                                toptempQno = SummaryPage.pages[topqno].pages[subtopqno].pageNumber + 1;
			                            } else {
						                    // Added matrix condition by maheedhar for CoEditor 5.9 version
			                                if (SummaryPage.pages[topqno].pages[subtopqno].Qtype != "matrix") {
			                                    toptempQno = SummaryPage.pages[topqno].pages[subtopqno].pageNumber;
			                                } else {
			                                    toptempQno = SummaryPage.pages[topqno].pages[subtopqno].pageNumber + 1;
			                                }
			                            }
			                            try{
						                   // Added matrix condition by maheedhar for CoEditor 5.9 version
			                                
			                               if (SummaryPage.pages[topqno].pages[subtopqno].Qtype != "matrix") {
			                                    if (hidetoctopic == "no") {
			                                        $('#tblsummary > tr:last').after(returnWebSummaryRow(qno, toptempQno, SummaryPage.pages[topqno].pages[subtopqno], "subtopic"));
			                                    } else {
			                                        $('#tblsummary > tr:last').after(returnWebSummaryRow(qno, toptempQno, SummaryPage.pages[topqno].pages[subtopqno], ""));
			                                    }
			                                    if (SummaryPage.pages[topqno].pages[subtopqno].status == "correct" || SummaryPage.pages[topqno].pages[subtopqno].status == "NA") {
			                                        correctAnswers++;
			                                    }
			                                }
			                            }catch(e){}
			                       }
						      }
						 }
						}
					}
				}
			}
		/*for (var qno = 0; qno < pages[SeqID].length - 1; qno++) {
            if (pages[SeqID][qno].iscoao != "co") {
			 if (pages[SeqID][0].type != "page")
                    tempQno = qno + 1;
                else
                    tempQno = qno;
			var $tbl = $("<tr id='tbl_tr'"+qno+" class='summarydetails-listtr'></tr>");
			//$tbl.append($innerTrData);
                summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
                counter = counter + 1;
              //  if (trackObjects[SeqID].sf_qNo == "yes") {
                //    $tbl.append("<td valign='top' align='center' width='1%'>" + summaryQuestionNum + "</font></td>");
               // }
                if (trackObjects[SeqID].sf_questionText == "yes") {
                    $tbl.append("<td valign='top' align='left' width='59%' >" + questionsArray[tempQno].question + "</td>");
                }
                if (trackObjects[SeqID].sf_showResponse == "yes") {
                    var response = pages[SeqID][qno].useranswer;
                    response = response == undefined ? "" : response;
                    var respText = "";
                    if (pages[SeqID][qno].Qtype != "longanswer" && pages[SeqID][qno].Qtype != "fillintheblank") {
                       if (pages[SeqID][qno].type == "multipleselect" && typeof(response) != "number") {
                            var optionsVal = response.split(",");
                            respText = "";
                            for (var j = 0; j < optionsVal.length; j++) {
                                if (questionsArray[tempQno].options[optionsVal[j]] != undefined)
                                    respText += questionsArray[tempQno].options[optionsVal[j]];
                                if (j != optionsVal.length - 1)
                                    respText += ",</br>";
                            }
                        }
                        else if (pages[SeqID][qno].Qtype == "draganddrop") {
                            respText += pages[SeqID][qno].useranswer;
                        }
                        else
                        {
                            respText += questionsArray[tempQno].options[response];
                        }
                        response = respText;
                    }
                    else if(pages[SeqID][qno].Qtype == "fillintheblank"){
					//response = pages[SeqID][qno].useranswer; // This is previous code
						response = getFormatedText(pages[SeqID][qno].useranswer);
					    response = response == undefined ? "abc" : response;
					}else{
                        response = pages[SeqID][qno].useranswer;
                        response = response == undefined ? "" : response;
                    }
                    response = (response == undefined || response == "undefined" || response == "") ? "Not Attempted" : response;
                    if (pages[SeqID][qno].Qtype == "draganddrop" && pages[SeqID][qno].useranswer != undefined) {
                        var val = pages[SeqID][qno].useranswer.toString().split("##");
						var removeDropObjArr = val[2].split("^^^")[0]
                        if (val.length > 1)
                            response = "Attempted (" + val[1] + " correct, " + removeDropObjArr + " incorrect)";
                        else
                            response = "Not Attempted";
                    }
                    //$innerTrData.append("<td align='left' style='width:20%' class='summarydetails-list'>" + response + "</td>");
                   // $tbl.append("<td valign='top' align='left' width='20%' >" + response + "</td>");
				  // $tbl.append($innerTrData);
                }
                if (trackObjects[SeqID].sf_showResponse == "yes") {
                 $tbl.append("<td valign='top' align='left' width='20%' >" + response + "</td>");
                }
				var quesStatus = pages[SeqID][qno].status;
				var feedBackTxt = "";
                    var feedback = pages[SeqID][qno].status == "correct" ? questionsArray[tempQno].correctfeedback : questionsArray[tempQno].incorrectfeedback;
                    feedback = (pages[SeqID][qno].Qtype == "longanswer" || pages[SeqID][qno].status == undefined) ? "NA" : feedback;
					var logoURL = ""
					if(quesStatus == "correct"){
					logoURL = logoArr[0];
					feedBackTxt = questionsArray[tempQno].correctfeedback;
					}
					else if (quesStatus == "NA"){
					logoURL = logoArr[2];
					feedBackTxt = "NA";
					}
					else{
					logoURL = logoArr[1];
					feedBackTxt = questionsArray[tempQno].incorrectfeedback;
					}

                if (trackObjects[SeqID].sf_showcorrect_in == "yes") {
					$tbl.append("<td valign='top' align='left' width='10%'><table widht='100%' cellpadding='2' cellspacing='2' border='0' class='qstatus'><tr><td><img src='" + logoURL + "' ></img></td><td align='left'>" + quesStatus.charAt(0).toUpperCase() + quesStatus.slice(1) + "</td></tr></table></td>");
                }
                if (trackObjects[SeqID].sf_showFeedback == "yes") {
					$tbl.append("<td valign='top'  align='left' width='10%'>" + feedBackTxt + "</td>");
                }
				//mainTbl.append($headerdata)
				//$headerdata.append("</div>")
                // $('#tblsummary').append($headerdata);
                $tbl.append($innerTrData);
                $('#tblsummary').append($tbl);
                if (pages[SeqID][qno].status == "correct" || pages[SeqID][qno].status == "NA") {
                    correctAnswers++;
                }
			}
        }
      */  
    }
	else {
	    $("#tblsummary").html("");
	var $headerdata = $("<tr></tr>");
			var tblId = "tblId"
			var tdId = "td_";
			var $tdData = $("<td colspan ='4' id ='"+tdId+"'></td>")
			$headerdata.append($tdData);
			var $divData = $("<div id ='"+tblId+"'></div>");
			$tdData.append($divData)
			var str = "inner_tbl";
			var $tbl = $("<table  width='100%' cellpadding='5' cellspacing='0' id ='"+str+"'></table>")
			$divData.append($tbl);
			var $detailsTab = $("<tr></tr>");
		 $detailsTab.append("<td colspan ='5' align='left' class='summarydetails-header'>Details</td>");
		 $("#tblsummary").append($detailsTab);
	////////////////////////////////////*************MOBILE RENDERING **********////////////////////////////////////////
		
	var tempQno = 0; 
		var toptempQno = 0;
		for (var qno = 0; qno < pages[SeqID].length - 1; qno++) {
			var SummaryPage = pages[SeqID][qno];
				if (SummaryPage.type != "topic") {
				  if (SummaryPage.iscoao != "co") {
				      if (SummaryPage.type != "page") {
				          tempQno = qno + 1;
				      } else {
				          // Added matrix condition by maheedhar for CoEditor 5.9 version
				          if (SummaryPage.Qtype != "matrix") {
				              tempQno = SummaryPage.pageNumber; //qno;
				          } else {
				              tempQno = qno + 1;
				          }
				      }
				      try{
				          // Added matrix condition by maheedhar for CoEditor 5.9 version
				          if (SummaryPage.Qtype != "matrix") {
				              $('#tblsummary').append(returnMobSummaryRow(qno, tempQno, SummaryPage, ""));
				          }
				      }catch(e){}
		            //if (SummaryPage.status == "correct" || SummaryPage.status == "NA") {
		            //    correctAnswers++;
		            //}
				}
				} else {
                                    // Added booleans for hidetopic by maheedhar for CoEditor 5.9 version
				    isTopicHeadingAdded = false;
				    isSubtopicHeadingAdded = false;
				
					for (topqno = 0; topqno < SummaryPage.pages.length; topqno++) {
						if (SummaryPage.pages[topqno].type != "topic") {
						 if (SummaryPage.pages[topqno].iscoao != "co") {
						     if (SummaryPage.pages[topqno].type != "page") {
						         toptempQno = SummaryPage.pages[topqno].pageNumber + 1;
						     } else {
						         // Added matrix condition by maheedhar for CoEditor 5.9 version
						         if (SummaryPage.pages[topqno].Qtype != "matrix") {
						             toptempQno = SummaryPage.pages[topqno].pageNumber;
						         } else {
						             toptempQno = SummaryPage.pages[topqno].pageNumber + 1;
						         }
						     }
						     try {
						     // Added matrix condition by maheedhar for CoEditor 5.9 version
						         if (SummaryPage.pages[topqno].Qtype != "matrix") {
						             if (hidetoctopic == "no") {
						                 $('#tblsummary').append(returnMobSummaryRow(qno, toptempQno, SummaryPage.pages[topqno], "topic"));
						             } else {
						                 $('#tblsummary').append(returnMobSummaryRow(qno, toptempQno, SummaryPage.pages[topqno], ""));
						             }
						         }
						     } catch (e) {

						     }
		                    //if (SummaryPage.status == "correct" || SummaryPage.status == "NA") {
		                    //    correctAnswers++;
		                    //}
		                }
					} else {
					            // Added boolean for hidetopic by maheedhar for CoEditor 5.9 version
						    isSubtopicHeadingAdded = false;
		                for (subtopqno = 0; subtopqno < SummaryPage.pages[topqno].pages.length; subtopqno++) {
		                    if (SummaryPage.pages[topqno].pages[subtopqno].type != "topic") {
		                        if (SummaryPage.pages[topqno].pages[subtopqno].iscoao != "co") {
		                            if (SummaryPage.pages[topqno].pages[subtopqno].type != "page") {
		                                toptempQno = SummaryPage.pages[topqno].pages[subtopqno].pageNumber + 1;
		                            } else {
					        // Added matrix condition by maheedhar for CoEditor 5.9 version
		                                if (SummaryPage.pages[topqno].pages[subtopqno].Qtype != "matrix") {
		                                    toptempQno = SummaryPage.pages[topqno].pages[subtopqno].pageNumber;
		                                } else {
		                                    toptempQno = SummaryPage.pages[topqno].pages[subtopqno].pageNumber + 1;
		                                }
		                            }
		                            try{
					        // Added matrix condition by maheedhar for CoEditor 5.9 version
		                                if (SummaryPage.pages[topqno].pages[subtopqno].Qtype != "matrix") {
		                                    if (hidetoctopic == "no") {
		                                        $('#tblsummary').append(returnMobSummaryRow(qno, toptempQno, SummaryPage.pages[topqno].pages[subtopqno], "subtopic"));
		                                    } else {
		                                        $('#tblsummary').append(returnMobSummaryRow(qno, toptempQno, SummaryPage.pages[topqno].pages[subtopqno], ""));
		                                    }
		                                    //if (SummaryPage.status == "correct" || SummaryPage.status == "NA") {
		                                    //    correctAnswers++;
		                                    //}
		                                }
		                            }catch(e){}
		                        }
						}
						 }
						}
					}
				}
			}
	/*
	for (var qno = 0; qno < pages[SeqID].length - 1; qno++) {
	    if (pages[SeqID][qno].iscoao != "co") {
	  if (pages[SeqID][0].type != "page")
                    tempQno = qno + 1;
                else
                    tempQno = qno;
			//var $innerTrData = $("<tr id='tbl_tr"+qno+"'></tr>");
			var $innerTrData = $("<table id='tbl_tr"+qno+"' width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:1px #666666 solid;'></table>");
			//$tbl.append($innerTrData);
                 if (trackObjects[SeqID].sf_questionText == "yes") {
				 $innerTrData.append("<tr><td align='left'>Question:</td></tr>");
				 $innerTrData.append("<tr><td align='left' >" + questionsArray[tempQno].question + "</td></tr>");
				 $innerTrData.append("<tr height='5px'><td ></td></tr>");
					//$tbl.append($innerTrData);
                }
				 if (trackObjects[SeqID].sf_showResponse == "yes") {
                    var response = pages[SeqID][qno].useranswer;
                    response = response == undefined ? "" : response;
                    var respText = "";
                    if (pages[SeqID][qno].type != "longanswer" && pages[SeqID][qno].type != "fillintheblank") {
                       if (pages[SeqID][qno].type == "multipleselect" && typeof(response) != "number") {
                            var optionsVal = response.split(",");
                            respText = "";
                            for (var j = 0; j < optionsVal.length; j++) {
                                if (questionsArray[tempQno].options[optionsVal[j]] != undefined)
                                    respText += questionsArray[tempQno].options[optionsVal[j]];
                                if (j != optionsVal.length - 1)
                                    respText += ",</br>";
                            }
                        }
                        else if (pages[SeqID][qno].type == "draganddrop") {
                            respText += pages[SeqID][qno].useranswer;
                        }
                        else
                        {
                            respText += questionsArray[tempQno].options[response];
                        }
                        response = respText;
                    }
                    else if(pages[SeqID][qno].type == "fillintheblank"){
					//response = pages[SeqID][qno].useranswer; // This is previous code
						response = getFormatedText(pages[SeqID][qno].useranswer);
						//alert(getFormatedText(pages[SeqID][qno].useranswer));
                        response = response == undefined ? "" : response;
					}else{
                        response = pages[SeqID][qno].useranswer;
                        response = response == undefined ? "" : response;
                    }
                    response = (response == undefined || response == "undefined" || response == "") ? "Not Attempted" : response;
                    if (pages[SeqID][qno].type == "draganddrop" && pages[SeqID][qno].useranswer != undefined) {
                        var val = pages[SeqID][qno].useranswer.toString().split("##");
						var removeDropObjArr = val[2].split("^^^")[0]
                        if (val.length > 1)
                            response = "Attempted (" + val[1] + " correct, " + removeDropObjArr + " incorrect)";
                        else
                            response = "Not Attempted";
                    }
					
				    $innerTrData.append("<tr><td align='left' style='width:20%'>Your response:</td></tr>");
				    $innerTrData.append("<tr><td align='left' style='width:20%' class='summary_details'>" + response + "</td></tr>");
				    $innerTrData.append("<tr height='5px'><td ></td></tr>");
                }

				var quesStatus = pages[SeqID][qno].status;
				var feedbackTxt = "";
				 var feedback = pages[SeqID][qno].status == "correct" ? questionsArray[tempQno].correctfeedback : questionsArray[tempQno].incorrectfeedback;
                    feedback = (pages[SeqID][qno].type == "longanswer" || pages[SeqID][qno].status == undefined) ? "NA" : quesStatus;
					var logoURL = ""
					if(quesStatus == "correct"){
					logoURL = logoArr[0];
				     feedbackTxt = questionsArray[tempQno].correctfeedback;
					}
					else if (quesStatus == "NA"){
					logoURL = logoArr[2];
					feedbackTxt = quesStatus;
					}else{
					logoURL = logoArr[1];
				     feedbackTxt = questionsArray[tempQno].incorrectfeedback;
					}

				 if (trackObjects[SeqID].sf_showcorrect_in == "yes") {
					  $innerTrData.append("<tr><td align='left' >Correct/Incorrect:</td></tr>");
					  $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='" + logoURL + "' style='width:24px !important; height:24px !important'></img></td><td>" + feedback.charAt(0).toUpperCase()+feedback.slice(1) + "</td></tr></table></td></tr>");
					  $innerTrData.append("<tr height='5px'><td ></td></tr>");
				 }
				if (trackObjects[SeqID].sf_showFeedback == "yes") {
					 $innerTrData.append("<tr><td align='left' >Feedback:</td></tr>");
					 $innerTrData.append("<tr><td  align='left' class='summary_details'>" + feedbackTxt + "</td></tr>");
			         $tbl.append($innerTrData);
                }
				 $('#tblsummary').append($headerdata);
	}
	}*/
	}
	}
	////////////////////////////////////////////////***********************/////////////////////////////////////////////////////
    /*if (trackObjects[SeqID].sf_userScore == "yes") {
        $("#tblsummary").append($("<tr><td colspan='" + c1 + "'><font class='summaryheader'>User's Score :</font></td><td colspan='" + c2 + "'><font class='summaryfields'>" + userScore + "%</font></td></tr>"));
    }
    if (trackObjects[SeqID].sf_passingScore == "yes") {
        $("#tblsummary").append($("<tr><td colspan='" + c1 + "'><font class='summaryheader'>Passing Score :</font></td><td colspan='" + c2 + "'><font class='summaryfields'>" + trackObjects[SeqID].passScore + "%</font></td></tr>"));
    }*/
    /* commented by raghu ------- if (trackObjects[SeqID].sf_showResult == "yes") {
        var status = "";
        if (!isLongAnswer) {
            if (testStatus == "passed")
                status = "Passed";
            else if (testStatus == "failed")
                status = "Failed";
        }
        else {
            switch (testStatus) {
                case "grade":
                    status = "Pending Review";
                    break;
                case "passed":
                    status = "Completed";
                    break;
                case "incomplete":
                    status = "In Progress";
                    break;
                case "completed":
                    status = "Completed";
                    break;
            }
        }
       // if (status.toLowerCase() == "completed" || status.toLowerCase() == "passed") {
          //  document.getElementById("retakebtn").style.display = "none";
          // document.getElementById("editbtn").style.display = "none";
       // }
        if (trackObjects[SeqID].trackScore.toLowerCase() == "no") {
            status = "Completed";
            document.getElementById("retakebtn").style.display = "none";
            document.getElementById("editbtn").style.display = "none";
        }
        
        $("#tblsummary").append($("<tr><td colspan='" + c1 + "'><font class='summaryheader'>Result :</font></td><td colspan='" + c2 + "'><font class='summaryfields'>" + status + "</font></td></tr>"));
    }*/

    if (!isLongAnswer) {
        if (testStatus == "incomplete")
            textEntry = true;
    }
    
    /* Comened by Raghu ****** if (trackObjects[SeqID].sf_attemptsLeft == "yes") {

        if (reatt_Onfail == "" || reatt_Onfail == null) {
            reatt_Onfail = "&nbsp;"
        }

        if (noa != "unlimited" && noa != "9999") {
            var att = LMSGetAttemptsLeft();
            if (att != "" && att != undefined && att != null)
                reatt_Onfail = parseInt(noa) - parseInt(att);
            else
                reatt_Onfail = parseInt(noa) - parseInt(allowedAttempts);
            if (reatt_Onfail <= 0) reatt_Onfail = 0;
        }
		if (reatt_Onfail == "unlimited" || noa == "9999")
            reatt_Onfail = "Unlimited";
        else if (reatt_Onfail == "0") {
            reatt_Onfail = "None";
            document.getElementById("retakebtn").style.display = "none";
            document.getElementById("editbtn").style.display = "none";
        }

        $("#tblsummary").append($("<tr><td colspan='" + c1 + "'><font class='summaryheader'>Attempts left :</font></td><td colspan='" + c2 + "'><font class='summaryfields'>" + reatt_Onfail + "</font></td></tr>"));
    }
	else{
	if (reatt_Onfail == "" || reatt_Onfail == null) {
            reatt_Onfail = "&nbsp;"
        }

        if (noa != "unlimited" && noa != "9999") {
            var att = LMSGetAttemptsLeft();
            if (att != "" && att != undefined && att != null)
                reatt_Onfail = parseInt(noa) - parseInt(att);
            else
                reatt_Onfail = parseInt(noa) - parseInt(allowedAttempts);
            if (reatt_Onfail < 0) reatt_Onfail = 0;
        }
		if (reatt_Onfail == "unlimited" || noa == "9999"){
            reatt_Onfail = "Unlimited";
			}
        else if (reatt_Onfail == "0") {
            reatt_Onfail = "None";
            document.getElementById("retakebtn").style.display = "none";
            document.getElementById("editbtn").style.display = "none";
        }
	
	}*/

    try {
        totalAssesmentScore = pages[SeqID].userScore.toFixed(2);
        totalAssesmentMaxScore = pages[SeqID].maxScore.toFixed(2);
    } catch (e) { }

        //debugger;
		if (IsAICC) {
				AICC_Status = testStatus; 
				AICC_Score =userScore;
			}
        if (trackObjects[SeqID].trackScore.toLowerCase() == "yes") {
            //assessmentStatus = pages[SeqID].AssessmentStatus;
            userScore = pages[SeqID].userScore;
            maxScore = pages[SeqID].maxScore;
			LMSSetLessonStatus(testStatus);
        //for NOA check scenario for the line number
        if (noa != "unlimited" && noa != "9999") {
            if (parseInt(allowedAttempts) <= parseInt(noa)) {
				if (isrelaunchsummarydirectly == false){
					LMSSetRawScore(userScore) // Update User score
					LMSSetMaxScore(maxScore) // Update Max Score for this assessment
					if (!isLongAnswer)
						LMSSetLessonStatus(testStatus.toLowerCase()) //update lesson status
					else {
						strLessonStatus = testStatus;
						LMSSetLessonStatus(testStatus);
					} //update lesson status
				}
            }
        }
        else {
            if (userScore != undefined)
                LMSSetRawScore(userScore) // Update User score
            if (maxScore != undefined)
                LMSSetMaxScore(maxScore) // Update Max Score for this assessment

            testStatus = testStatus != undefined ? testStatus.toLowerCase() : "incomplete";

            if (!isLongAnswer)
                LMSSetLessonStatus(testStatus) //update lesson status
            else {
                //alert(assessmentStatus);
                strLessonStatus = testStatus;
                LMSSetLessonStatus(testStatus);
            } //update lesson status
        }
    }
    else {
        userScore = "0";
            //LMSSetLessonStatus("completed");
			if (IsAICC) {
				AICC_Status = "completed"; 
				AICC_Score =userScore;
			}
			else {
				 LMSSetRawScore(userScore) // Update User score
				LMSSetLessonStatus("completed");
				}
        }

	
	try{
	//debugger;
        if (trackObjects[SeqID].sf_attemptsLeft == "yes") {
            if (reatt_Onfail == "" || reatt_Onfail == null) {
                reatt_Onfail = "&nbsp;"
            }
            if (noa != "unlimited" && noa != "9999") {
               var att = LMSGetAttemptsLeft();
               
                if (att != "" && att != undefined && att != null)
                    reatt_Onfail = parseInt(noa) - parseInt(att);
                else
                    reatt_Onfail = parseInt(noa) - parseInt(allowedAttempts);
                if (reatt_Onfail <= 0) reatt_Onfail = 0;
            }
            if (reatt_Onfail == "unlimited" || noa == "9999")
                reatt_Onfail = "Unlimited";
            else if (reatt_Onfail == "0") {
                reatt_Onfail = "None";
                document.getElementById("retakebtn").style.display = "none";
                document.getElementById("editbtn").style.display = "none";
            }
            $("#summary_web").append($("<div>Attempts left: <span class='summary_result'>" + reatt_Onfail + "</span></div>'"));
        }
        else{
            if (reatt_Onfail == "" || reatt_Onfail == null) {
                reatt_Onfail = "&nbsp;"
            }
            if (noa != "unlimited" && noa != "9999") {
                var att = LMSGetAttemptsLeft();
                 
                if (att != "" && att != undefined && att != null)
                    reatt_Onfail = parseInt(noa) - parseInt(att);
                else
                    reatt_Onfail = parseInt(noa) - parseInt(allowedAttempts);
                if (reatt_Onfail <= 0) reatt_Onfail = 0;
            }
            if (reatt_Onfail == "unlimited" || noa == "9999"){
                reatt_Onfail = "Unlimited";
            }
            else if (reatt_Onfail == "0") {
                reatt_Onfail = "None";
                document.getElementById("retakebtn").style.display = "none";
                document.getElementById("editbtn").style.display = "none";
            }
        }
    } catch (e) { }

	
	
	
    //document.getElementById("trPrint").style.display = "";
    //document.getElementById("Completedbtn").style.display = "none";

	nosummary = Number(trackObjects[SeqID].no_summarypassfailtext);
	// Bhushanam - added this no. attempts pass/fail text
	//// ****** Added Pass/fail text for Sales excellence ///////////////////////////////////
	/*try{
		if (testStatus.toLowerCase() == "completed"){
			$("#tdPass").attr("style", "display:''");
		
		}else if (testStatus.toLowerCase() == "passed"){	
			$("#tdPass").attr("style", "display:''");
		
		}else if(testStatus.toLowerCase() == "failed") {
			$("#tdFail").attr("style", "display:''");
		
		}
	}
	catch(e){
	
	}*/
 
    /////////////////////////////// **************************** ////////////////////////////////////
	if (!isLongAnswer) {
	    if (testStatus.toLowerCase() == "passed" || testStatus.toLowerCase() == "completed") {
	        $("#tdPass").attr("style", "display:none");
	        showSummaryPassFailTextcnt = Number(att)
	        if (nosummary == 3) {
	            if (showSummaryPassFailTextcnt >= 3)
	                $("#tdPass2").attr("style", "display:''");
	            else if (showSummaryPassFailTextcnt >= 2)
	                $("#tdPass1").attr("style", "display:''");
	            else
	                $("#tdPass").attr("style", "display:''");
	        }
	        if (nosummary == 2) {
	            if (showSummaryPassFailTextcnt >= 2)
	                $("#tdPass1").attr("style", "display:''");
	            else
	                $("#tdPass").attr("style", "display:''");
	        }
	        if (nosummary == 1) {
	            $("#tdPass").attr("style", "display:''");
	        }
	    }
	    else {
	        $("#tdFail").attr("style", "display:none");
	        showSummaryPassFailTextcnt = Number(att)
	        if (nosummary == 3) {
	            if (showSummaryPassFailTextcnt >= 3)
	                $("#tdFail2").attr("style", "display:''");
	            else if (showSummaryPassFailTextcnt >= 2)
	                $("#tdFail1").attr("style", "display:''");
	            else
	                $("#tdFail").attr("style", "display:''");
	        }
	        if (nosummary == 2) {
	            if (showSummaryPassFailTextcnt >= 2)
	                $("#tdFail1").attr("style", "display:''");
	            else
	                $("#tdFail").attr("style", "display:''");
	        }
	        if (nosummary == 1) {
	            $("#tdFail").attr("style", "display:''");
	        }
	    }
	} else {
	    if (userScore >= parseInt(trackObjects[SeqID].passScore)) {
	        showSummaryPassFailTextcnt = Number(att)
	        if (nosummary == 3) {
	            if (showSummaryPassFailTextcnt >= 3) $("#tdPass2").attr("style", "display:''");
	            else if (showSummaryPassFailTextcnt >= 2) $("#tdPass1").attr("style", "display:''");
	            else $("#tdPass").attr("style", "display:''");
	        }
	        if (nosummary == 2) {
	            if (showSummaryPassFailTextcnt >= 2) $("#tdPass1").attr("style", "display:''");
	            else $("#tdPass").attr("style", "display:''");
	        }
	        if (nosummary == 1) {
	            $("#tdPass").attr("style", "display:''");
	        }

	    }
	    else {
	        showSummaryPassFailTextcnt = Number(att) + 1
	        if (nosummary == 3) {
	            if (showSummaryPassFailTextcnt >= 3) $("#tdFail2").attr("style", "display:''");
	            else if (showSummaryPassFailTextcnt >= 2) $("#tdFail1").attr("style", "display:''");
	            else $("#tdFail").attr("style", "display:''");
	        }
	        if (nosummary == 2) {
	            if (showSummaryPassFailTextcnt >= 2) $("#tdFail1").attr("style", "display:''");
	            else $("#tdFail").attr("style", "display:''");
	        }
	        if (nosummary == 1) {
	            $("#tdFail").attr("style", "display:''");
	        }
	    }
	}
   // End -- Bhushanam.
        try {
            if (!isLongAnswer)
                document.getElementById("submitbtn").style.display = "none";
            if (testStatus == "grade" || pages[SeqID].status == "grade") {
                document.getElementById("submitbtn").setAttribute("title", "Re submit");
                document.getElementById("submitbtn").setAttribute("src", "images/resubmit.gif");
                document.getElementById("submitbtn").setAttribute("onover", "images/resubmit_over.gif");
			   document.getElementById("Completedbtn").style.display = "none";
            }
            else if (testStatus == "passed") {
                document.getElementById("submitbtn").style.display = "none";
            } else if (testStatus == "completed") {
                document.getElementById("Completedbtn").style.display = "";
                document.getElementById("submitbtn").style.display = "none";
            } else if(testStatus == "incomplete"){
				document.getElementById("Completedbtn").style.display = "none";
			}
        }
        catch (e)
        { }
        if (trackObjects[SeqID].progresscompletion == "yes") {
            document.getElementById("Completedbtn").style.display = "none";
        }
        if (isTrack == "yes") {
            $(".tblTOC div[id='" + SeqID + "']")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].setAttribute('src', 'images/tick.gif')
            updateTrackStatus();
            if (isLongAnswer == false)
                fnShowHideTOCItems();
        }
        
        $("#loader").fadeTo("slow", 0);
        $("#page").fadeTo("slow", 1);
    //if( submitted == true)		
        if (Number(innerPage) + 1 == totalPages) {
            SetCompletionTinCan();
        }

        addMathMLCallBack('tblsummary')
       $('#tblsummary').on("click",'tr span.ratingDetails',function () {
		  ratQtn = $(this).attr('qid');
		   ratPage = $(this).attr('pageid');
		   rating_filepath = "ins_ratingdetails.html";
		    popupTitle = "Your Response";
			$("#ratingDetailsPopup").dialog({
			    draggable: false,
                            resizable:false,
				height: 300,
				width: '90%',
				modal: true,
				open: function () {
					$(this).load(rating_filepath, null, function () {
					
					});

				},
				close: function () {
				},
				title: popupTitle

			});
			$("#ratingDetailsPopup").show();
	
       });

       $("#tblsummary").trigger("onSummaryPageLoad")
       //MCI Issue fix - all buttons hide while summarypage loads
       $("tr[id='trPrint']").show();
}
// Added a type parameter for hidetopic by maheedhar for CoEditor 5.9 version
function returnMobSummaryRow(qno,tempQno,SummaryPage, type){
    
    var $innerTrData = $("<table id='tbl_tr" + qno + "'  width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:1px #666666 solid;padding-left: 9px;padding-top: 9px;padding-bottom: 9px;padding-right: 9px;'></table>");
	        // Added hidetopic condition by maheedhar for CoEditor 5.9 version
                if ((type == "topic" || type == "subtopic") && isTopicHeadingAdded == false) {
                    isTopicHeadingAdded = true;
                    var topicObj = getTopicByPageIndex(tempQno);
                    //console.log(obj.title+" <--------------------------------------------------------------------");
				    var $topictbl = $("<tr class='summarydetails-topic'></tr>");
					$topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td>");
					$topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td>");
					$topictbl.append("<td valign='top' align='left' style='padding:0px;margin:0px;width:100%;'>" + getPageTitle(topicObj)/*topicObj.title*/ + "</td>");
					$innerTrData.append($topictbl);
                }
                //console.log(type + " <--------------------------------------------------------------------");
                if (type == "subtopic" && isSubtopicHeadingAdded == false) {
                    isSubtopicHeadingAdded = true;
                    var subTopicObj = getSubTopicByPageIndex(tempQno);
                    //console.log(subTopicObj.title+" <--------------------------------------------------------------------");
                    var $subtopictbl = $("<tr class='summarydetails-subtopic'></tr>");
                    $subtopictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td>");
                    $subtopictbl.append("<td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td>");
                    $subtopictbl.append("<td valign='top' align='left' style='padding:0px;margin:0px;width:100%;'>" + getPageTitle(subTopicObj)/*subTopicObj.title*/ + "</td>");
                    $innerTrData.append($subtopictbl);
                }
				
                 if (trackObjects[SeqID].sf_questionText == "yes") {
		                 // Added hidetopic condition by maheedhar for CoEditor 5.9 version
                     if (trackObjects[SeqID].hidetoctopic.toLowerCase() == "no") {
                         var solutionStr = "";
                         if (trackObjects[SeqID].showsolutions == "yes" && trackObjects[SeqID].singleqtnperpage == "yes") {
                             solutionStr = "<img id='solutionSummary_" + summaryQuestionNum + "' name='page_" + summaryQuestionNum + "' style='height:16px; width:16px; margin-left:10px; cursor:pointer;' src='images/summaryhint.png'/>";
                         }

                         //Added by Sunny on 8th september 2016 For Showing Images as Link
                         var qneHtml = questionsArray[tempQno].question;
                         if (qneHtml != "") {
                           
                             var tempElement = document.createElement("div");
                             $(tempElement).html(qneHtml);
                             $(tempElement).find("img").each(function () {
                                 var src = $(this).attr("src");
                                 var newWindow = 'openInNewWindow("' + src + '");';
                                 $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                             })
                             qneHtml = $(tempElement).html();
                             questionsArray[tempQno].question = qneHtml;
                             $(tempElement).remove();
                         }
                         //End Sunny

				     if(type == "topic"){
				         $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='padding:0px;margin:0px;width:100%;'>Question:</td></tr>");
				         $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' >" + questionsArray[tempQno].question + " " + solutionStr + "</td></tr>");
				         $innerTrData.append("<tr height='5px'><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
				     }
					 if(type == "subtopic"){
					     $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='padding:0px;margin:0px;width:100%;'>Question:</td></tr>");
					     $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' >" + questionsArray[tempQno].question + " " + solutionStr + "</td></tr>");
					     $innerTrData.append("<tr height='5px'><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
				     }
					 if(type == ""){
					     $innerTrData.append("<tr><td style='padding:0px;margin:0px; width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='padding:0px;margin:0px; width:100%;' >Question:</td></tr>");
					     $innerTrData.append("<tr><td style='padding:0px;margin:0px; width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' >" + questionsArray[tempQno].question + " " + solutionStr + "</td></tr>");
					     $innerTrData.append("<tr height='5px'><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
					 }
				 }else{
					 $innerTrData.append("<tr><td align='left'>Question:</td></tr>");
					 $innerTrData.append("<tr><td align='left' >" + questionsArray[tempQno].question + "</td></tr>");
					 $innerTrData.append("<tr height='5px'><td ></td></tr>");
				 }
					//$tbl.append($innerTrData);
                }
                 if (trackObjects[SeqID].sf_showResponse == "yes") {
                     var response = SummaryPage.useranswer;
                     response = response == undefined ? "" : response;
                     var respText = "";
                     if (SummaryPage.Qtype == "rating") {
                         response = "<span class='ratingDetails' qid='" + tempQno + "' pageid='" + SummaryPage.qPageId + "'>Details</span>";
                     }
                     else if (SummaryPage.Qtype == "sequence") {

                         response = fnSequenceSummary(SummaryPage.useranswer);
                     }

                     else {
                     if (SummaryPage.Qtype != "longanswer" && SummaryPage.Qtype != "fillintheblank") {
                         if (SummaryPage.Qtype == "multipleselect" && typeof (response) != "number") {
                             var optionsVal = response.split(",");
                             respText = "";
                             for (var j = 0; j < optionsVal.length; j++) {
                                 if (questionsArray[tempQno].options[optionsVal[j]] != undefined)
                                 {
                                     //Added by Sunny on 8th September 2016 For Showing Images as Link
                                     var MultipleOptionHtml = questionsArray[tempQno].options[optionsVal[j]];
                                     if (MultipleOptionHtml != "") {
                                      
                                         var tempElement = document.createElement("div");
                                         $(tempElement).html(MultipleOptionHtml);
                                         $(tempElement).find("img").each(function () {
                                             var src = $(this).attr("src");
                                             var newWindow = 'openInNewWindow("' + src + '");';
                                             $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                                         })
                                         MultipleOptionHtml = $(tempElement).html();
                                         questionsArray[tempQno].options[optionsVal[j]] = MultipleOptionHtml;
                                         $(tempElement).remove();
                                     }
                                     //End Sunny
                                 }
                                     respText += questionsArray[tempQno].options[optionsVal[j]];
                                 if (j != optionsVal.length - 1)
                                     respText += ",</br>";
                             }
                         }
                         else if (SummaryPage.Qtype == "draganddrop") {
                             respText += SummaryPage.useranswer;
                         }
                         else
                         {
                             //Added by Sunny on 8th September 2016 For Showing Images as Link
                             var optionHtml = questionsArray[tempQno].options[response];
                             if (optionHtml != "") {
                          
                                 var tempElement = document.createElement("div");
                                 $(tempElement).html(optionHtml);
                                 $(tempElement).find("img").each(function () {
                                     var src = $(this).attr("src");
                                     var newWindow = 'openInNewWindow("' + src + '");';
                                     $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                                 })
                                 optionHtml = $(tempElement).html();
                                 questionsArray[tempQno].options[response] = optionHtml;
                                 $(tempElement).remove();
                             }
                             //End Sunny
                             respText += questionsArray[tempQno].options[response];
                         }
                         response = respText;
                     }
                     else if (SummaryPage.Qtype == "fillintheblank") {
                         //response = pages[SeqID][qno].useranswer; // This is previous code
                         response = SummaryPage.useranswer == undefined ? "Not Attempted": getFormatedText(SummaryPage.useranswer);
                         response = response == undefined ? "" : response;
                     }else{
                         response = SummaryPage.useranswer;
                         response = response == undefined ? "" : response;
                     }
                     response = (response == undefined || response == "undefined" || response == "") ? "Not Attempted" : response;
                     if (SummaryPage.Qtype == "draganddrop" && SummaryPage.useranswer != undefined && SummaryPage.useranswer != "") {
                         var val = SummaryPage.useranswer.toString().split("##");
                         var removeDropObjArr = val[2].split("^^^")[0]
                         if (val.length > 1)
                             response = "Attempted (" + val[1] + " correct, " + removeDropObjArr + " incorrect)";
                         else
                             response = "Not Attempted";
                     }
                 }
		    // For matrix page added by maheedhar on 02-09-2014
                    /*if (SummaryPage.Qtype == "matrix") {
                        if (SummaryPage.useranswer != undefined && SummaryPage.useranswer != "") {
                            if ((SummaryPage.useranswer).indexOf("1") != "-1") {
                                response = "Attempted";
                            } else {
                                response = "Not Attempted";
                            }
                        }
                    }*/
				     // For matrix page added by maheedhar on 02-09-2014
				     // Added hidetopic condition by maheedhar for CoEditor 5.9 version
					if(trackObjects[SeqID].hidetoctopic.toLowerCase() == "no"){
					        if(type == "topic"){
					        $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='width:20%'>Your response:</td></tr>");
					        $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='width:20%' class='summary_details'>" + response + "</td></tr>");
						if (SummaryPage.Qtype == "longanswer" && (SummaryPage.filename != "" && SummaryPage.filename != undefined)) {
						    $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='images/attachment.png' style='width:24px !important; height:24px !important'></img></td><td>" + SummaryPage.filename.replace("$$$", ",") + "</td></tr></table></td></tr>");
						}
							if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedvidfilename != "" && SummaryPage.capturedvidfilename != undefined && SummaryPage.capturedvidfilename != "undefined")) {	
								 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedvidid.toString()+'");' ;  
								 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/videoicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedvidfilename + "</td></tr></table></td></tr>");						
							}
							
							if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedimgfilename != "" && SummaryPage.capturedimgfilename != undefined && SummaryPage.capturedimgfilename != "undefined")) {	
								 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedimgid.toString()+'");' ;  
								 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/imageicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedimgfilename + "</td></tr></table></td></tr>");						
							}
					        $innerTrData.append("<tr height='5px'><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
						}
						
						if(type == "subtopic"){
						    $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='width:20%'>Your response:</td></tr>");
						    $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='width:20%' class='summary_details'>" + response + "</td></tr>");
						    if (SummaryPage.Qtype == "longanswer" && (SummaryPage.filename != "" && SummaryPage.filename != undefined)) {
					              $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='images/attachment.png' style='width:24px !important; height:24px !important'></img></td><td>" + SummaryPage.filename + "</td></tr></table></td></tr>");
						    }
							
							if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedvidfilename != "" && SummaryPage.capturedvidfilename != undefined && SummaryPage.capturedvidfilename != "undefined")) {	
								 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedvidid.toString()+'");' ;  
								 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/videoicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedvidfilename + "</td></tr></table></td></tr>");						
							}
							
							if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedimgfilename != "" && SummaryPage.capturedimgfilename != undefined && SummaryPage.capturedimgfilename != "undefined")) {	
								 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedimgid.toString()+'");' ;  
								 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/imageicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedimgfilename + "</td></tr></table></td></tr>");						
							}
							
						    $innerTrData.append("<tr height='5px'><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
						}
					        if(type == ""){
					        $innerTrData.append("<tr><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='width:20%'>Your response:</td></tr>");
					        $innerTrData.append("<tr><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' style='width:20%' class='summary_details'>" + response + "</td></tr>");
							if (SummaryPage.Qtype == "longanswer" && (SummaryPage.filename != "" && SummaryPage.filename != undefined)) {
									$innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='images/attachment.png' style='width:24px !important; height:24px !important'></img></td><td>" + SummaryPage.filename + "</td></tr></table></td></tr>");
							}
							if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedvidfilename != "" && SummaryPage.capturedvidfilename != undefined && SummaryPage.capturedvidfilename != "undefined")) {	
								 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedvidid.toString()+'");' ;  
								 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/videoicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedvidfilename + "</td></tr></table></td></tr>");						
							}
							
							if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedimgfilename != "" && SummaryPage.capturedimgfilename != undefined && SummaryPage.capturedimgfilename != "undefined")) {	
								 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedimgid.toString()+'");' ;  
								 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/imageicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedimgfilename + "</td></tr></table></td></tr>");						
							}
					        $innerTrData.append("<tr height='5px'><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
						}
					}else{
						$innerTrData.append("<tr><td align='left' style='width:20%'>Your response:</td></tr>");
						$innerTrData.append("<tr><td align='left' style='width:20%' class='summary_details'>" + response + "</td></tr>");
						if (SummaryPage.Qtype == "longanswer" && (SummaryPage.filename != "" && SummaryPage.filename != undefined)) {
					            $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='images/attachment.png' style='width:24px !important; height:24px !important'></img></td><td>" + SummaryPage.filename + "</td></tr></table></td></tr>");
						}
						if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedvidfilename != "" && SummaryPage.capturedvidfilename != undefined && SummaryPage.capturedvidfilename != "undefined")) {	
							 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedvidid.toString()+'");' ;  
							 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/videoicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedvidfilename + "</td></tr></table></td></tr>");						
						}
						
						if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedimgfilename != "" && SummaryPage.capturedimgfilename != undefined && SummaryPage.capturedimgfilename != "undefined")) {	
							 var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedimgid.toString()+'");' ;  
							 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><a href='#' onClick = '"+methodStr+"'><img src='images/imageicon.png' style='width:24px !important; height:24px !important'></img></a></td><td>" + SummaryPage.capturedimgfilename + "</td></tr></table></td></tr>");						
						}
						$innerTrData.append("<tr height='5px'><td ></td></tr>");
					}
				 }
         	   	 var quesStatus = (SummaryPage.status == undefined || SummaryPage.status == "undefined" || SummaryPage.status == "") ? "NA" : SummaryPage.status;
				 var feedbackTxt = "";
				 var feedback = SummaryPage.status == "correct" ? questionsArray[tempQno].correctfeedback : questionsArray[tempQno].incorrectfeedback;
				 feedback = (SummaryPage.Qtype == "longanswer" || SummaryPage.status == undefined || SummaryPage.status == "undefined" || SummaryPage.status == "") ? "NA" : quesStatus;
				 var logoURL = ""
				 if (quesStatus == "correct") {
				     logoURL = logoArr[0];
				     //Added by Sunny on 8th September 2016 For Showing Images as Link in Correct FeedBack
				     var CorrectFeedbackHtml = questionsArray[tempQno].correctfeedback;
				     if (CorrectFeedbackHtml != "") {
				         
				         var tempElement = document.createElement("div");
				         $(tempElement).html(CorrectFeedbackHtml);
				         $(tempElement).find("img").each(function () {
				             var src = $(this).attr("src");
				             var newWindow = 'openInNewWindow("' + src + '");';
				             $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
				         })
				         CorrectFeedbackHtml = $(tempElement).html();
				         questionsArray[tempQno].correctfeedback = CorrectFeedbackHtml;
				         $(tempElement).remove();
				     }
				     //End Sunny
				     feedbackTxt = questionsArray[tempQno].correctfeedback;
				 }
				 else if (quesStatus == "NA") {
				     logoURL = logoArr[2];
				     feedbackTxt = quesStatus;
				 } else {
				     logoURL = logoArr[1];
				     //Added by Sunny on 8th September 2016 For Showing Images as Link in InCorrect Feedback 
				     var IncorrectFeedbackHtml = questionsArray[tempQno].incorrectfeedback;
				     if (IncorrectFeedbackHtml != "") {
				      
				         var tempElement = document.createElement("div");
				         $(tempElement).html(IncorrectFeedbackHtml);
				         $(tempElement).find("img").each(function () {
				             var src = $(this).attr("src");
				             var newWindow = 'openInNewWindow("' + src + '");';
				             $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
				         })
				         IncorrectFeedbackHtml = $(tempElement).html();
				         questionsArray[tempQno].incorrectfeedback = IncorrectFeedbackHtml;
				         $(tempElement).remove();
				     }
				     //End Sunny
				     feedbackTxt = questionsArray[tempQno].incorrectfeedback;
				 }
                  // Added matrix condition by maheedhar for CoEditor 5.9 version
                 // For matrix page added by maheedhar on 02-09-2014
				/* if (SummaryPage.Qtype == "matrix") {
				     if (response == "Attempted") {
				         feedback = "Correct";
				         quesStatus = "Correct";
				         logoURL = logoArr[0];
				         feedBackTxt = "Correct";
				     } else {
				         feedback = "Incorrect";
				         quesStatus = "Incorrect";
				         logoURL = logoArr[1];
				         feedBackTxt = "Incorrect";
				     }
				 }*/
    // For matrix page added by maheedhar on 02-09-2014

				 if (trackObjects[SeqID].optionlevelfeedback.toLowerCase() == "yes") {
				     //debugger;
				     var PgType = getPageByIndex(tempQno).Qtype;
				     if (PgType == "truefalse" || PgType == "singleselect") {
				         var response = getPageByIndex(tempQno).useranswer;
				         //Added by Sunny on 8th September 2016 For Showing Images as Link in Option Level Feedback 
				         var OptionFeedbackHtml = questionsArray[tempQno].optLevelFeedback[response];
				         if (OptionFeedbackHtml != "") {
				              
				             var tempElement = document.createElement("div");
				             $(tempElement).html(OptionFeedbackHtml);
				             $(tempElement).find("img").each(function () {
				                 var src = $(this).attr("src");
				                 var newWindow = 'openInNewWindow("' + src + '");';
				                 $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
				             })
				             OptionFeedbackHtml = $(tempElement).html();
				             questionsArray[tempQno].optLevelFeedback[response] = OptionFeedbackHtml;
				             $(tempElement).remove();
				         }
				         //End Sunny
				         var optFb = questionsArray[tempQno].optLevelFeedback[response];
				         var optFbTxt = (optFb == undefined || optFb == "undefined" || optFb == "") ? "NA" : optFb;
				         //$tbl.append("<td valign='top'  align='left' width='30%'>" + optFbTxt + "</td>");
				         feedBackTxt = optFbTxt;
				     }
				 }

				 if (trackObjects[SeqID].sf_showcorrect_in == "yes") {
				    // Added matrix condition by maheedhar for CoEditor 5.9 version
				    if(trackObjects[SeqID].hidetoctopic.toLowerCase() == "no"){
					     if(type == "topic"){
					         $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' >Correct/Incorrect:</td></tr>");
					         $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='" + logoURL + "' style='width:24px !important; height:24px !important'></img></td><td>" + feedback.charAt(0).toUpperCase() + feedback.slice(1) + "</td></tr></table></td></tr>");
					         $innerTrData.append("<tr height='5px'><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
						 }
						 if(type == "subtopic"){
						     $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' >Correct/Incorrect:</td></tr>");
						     $innerTrData.append("<tr><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='" + logoURL + "' style='width:24px !important; height:24px !important'></img></td><td>" + feedback.charAt(0).toUpperCase() + feedback.slice(1) + "</td></tr></table></td></tr>");
						     $innerTrData.append("<tr height='5px'><td class='summarydetails-topicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summarydetails-subtopicline' style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
						 }
						 if(type == ""){
						     $innerTrData.append("<tr><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td align='left' >Correct/Incorrect:</td></tr>");
						     $innerTrData.append("<tr><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='" + logoURL + "' style='width:24px !important; height:24px !important'></img></td><td>" + feedback.charAt(0).toUpperCase() + feedback.slice(1) + "</td></tr></table></td></tr>");
						     $innerTrData.append("<tr height='5px'><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td style='padding:0px;margin:0px;width:5px;'>&nbsp</td><td ></td></tr>");
						 }
						 
					}else{
					     $innerTrData.append("<tr><td align='left' >Correct/Incorrect:</td></tr>");
						 $innerTrData.append("<tr><td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='" + logoURL + "' style='width:24px !important; height:24px !important'></img></td><td>" + feedback.charAt(0).toUpperCase() + feedback.slice(1) + "</td></tr></table></td></tr>");
						 $innerTrData.append("<tr height='5px'><td ></td></tr>");
					}
				 }
				if (trackObjects[SeqID].sf_showFeedback == "yes") {
				    // Added matrix condition by maheedhar for CoEditor 5.9 version
				    if(trackObjects[SeqID].hidetoctopic.toLowerCase() == "no"){
					    if(type == "topic"){
					        $innerTrData.append("<tr class='summarydetails-topicline'><td align='left' colspan='2'>Feedback:</td></tr>");
					        $innerTrData.append("<tr class='summarydetails-topicline'><td  align='left' colspan='2' class='summary_details'>" + feedbackTxt + "</td></tr>");
						}
						if(type == "subtopic"){
						    $innerTrData.append("<tr class='summarydetails-topicline'><td align='left' colspan='2' >Feedback:</td></tr>");
						    $innerTrData.append("<tr class='summarydetails-topicline'><td  align='left' colspan='2' class='summary_details'>" + feedbackTxt + "</td></tr>");
						}
						if(type == ""){
						    $innerTrData.append("<tr><td align='left' colspan='2'>Feedback:</td></tr>");
						    $innerTrData.append("<tr><td  align='left' colspan='2' class='summary_details'>" + feedbackTxt + "</td></tr>");
						}
					}else{
					     $innerTrData.append("<tr><td align='left' >Feedback:</td></tr>");
						 $innerTrData.append("<tr><td  align='left' class='summary_details'>" + feedbackTxt + "</td></tr>");
						 //$tbl.append($innerTrData);
					}
                }
	    		// $('#tblsummary').append($headerdata);
				return $innerTrData;
}
// Added 'type' parameter by maheedhar for CoEditor 5.9 version
function returnWebSummaryRow(qno, tempQno, SummaryPage, type) {
  //  debugger;
var $tbl = $("<tr id='tbl_tr"+qno+"' class='summarydetails-listtr'></tr>");
			//$tbl.append($innerTrData);
                summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
               // counter = counter + 1;
	       // Added hidetopic condition by maheedhar for CoEditor 5.9 version
			    if(type == "topic"){
				  $tbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
                  //$tbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
				  $tbl.append("<td style='padding:0px;margin:0px;'>&nbsp</td>");
				}
				if(type == "subtopic"){
				  $tbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
                  $tbl.append("<td class='summarydetails-subtopicline' style='padding:0px;margin:0px;'>&nbsp</td>");
				}
				if(type == "" && trackObjects[SeqID].hidetoctopic.toLowerCase() == "no"){
				  $tbl.append("<td style='padding:0px;margin:0px;width:1%;'>&nbsp</td>");
				  $tbl.append("<td style='padding:0px;margin:0px;width:1%;'>&nbsp</td>");
				}
				try{
					if (trackObjects[SeqID].sf_qNo == "yes") {
						$tbl.append("<td valign='top' align='left' width='1%'>" + summaryQuestionNum + "</td>");
					}
				}catch(e){}
                if (trackObjects[SeqID].sf_questionText == "yes") {
					var solutionStr = "";
					if (trackObjects[SeqID].showsolutions == "yes" && trackObjects[SeqID].singleqtnperpage == "yes") {
						solutionStr = "<img id='solutionSummary_"+summaryQuestionNum+"' name='page_"+summaryQuestionNum+"' style='height:16px; width:16px; margin-left:10px; cursor:pointer;' src='images/summaryhint.png'/>";
					}

                    //Added by Sunny on 31st August 2016 For Showing Images as Link
					var qneHtml = questionsArray[tempQno].question;
					if (qneHtml != "") {
					   
                        var tempElement = document.createElement("div");
                        $(tempElement).html(qneHtml);
					    $(tempElement).find("img").each(function () {
					        var src = $(this).attr("src");
					        var newWindow = 'openInNewWindow("' + src + '");';
					        $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
					       })
					    qneHtml = $(tempElement).html();
					    questionsArray[tempQno].question = qneHtml;
					    $(tempElement).remove();
					   }
                    //End Sunny

					$tbl.append("<td valign='top' align='left' width='39%' >"+questionsArray[tempQno].question + " "+solutionStr + "</td>");
                   }
                if (trackObjects[SeqID].sf_showResponse == "yes") {
                   // var response = pages[SeqID][qno].useranswer;
				   if (SummaryPage.Qtype == "rating"){
					   response = "<span class='ratingDetails' qid='"+ tempQno +"' pageid='"+ SummaryPage.qPageId +"'>Details</span>";
				   }

				   else if (SummaryPage.Qtype == "sequence") {

				       response = fnSequenceSummary(SummaryPage.useranswer);
				   }
				   else {
				    var response = SummaryPage.useranswer;
                    response = response == undefined ? "" : response;
                    var respText = "";
                    if (SummaryPage.Qtype != "longanswer" && SummaryPage.Qtype != "fillintheblank") {
                        if (SummaryPage.Qtype == "multipleselect" && typeof (response) != "number") {
                            var optionsVal = response.split(",");
                            respText = "";
                            for (var j = 0; j < optionsVal.length; j++) {
                                if (questionsArray[tempQno].options[optionsVal[j]] != undefined) {
                                    //Added by Sunny on 1st September 2016 For Showing Images as Link
                                    var MultipleOptionHtml = questionsArray[tempQno].options[optionsVal[j]];
                                    if (MultipleOptionHtml != "") {
                                        
                                        var tempElement = document.createElement("div");
                                        $(tempElement).html(MultipleOptionHtml);
                                        $(tempElement).find("img").each(function () {
                                            var src = $(this).attr("src");
                                            var newWindow = 'openInNewWindow("' + src + '");';
                                            $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                                        })
                                        MultipleOptionHtml = $(tempElement).html();
                                        questionsArray[tempQno].options[optionsVal[j]] = MultipleOptionHtml;
                                        $(tempElement).remove();
                                    }
                                    //End Sunny
                                    respText += questionsArray[tempQno].options[optionsVal[j]];
                                }
                                    if (j != optionsVal.length - 1)
                                    respText += ",</br>";
                            }
                        }
                        else if (SummaryPage.Qtype == "draganddrop") {
                            respText += SummaryPage.useranswer;
                        }
                        else
                        {
                            //Added by Sunny on 1st September 2016 For Showing Images as Link
                            var optionHtml = questionsArray[tempQno].options[response];
                            if (optionHtml != "") {
                              
                                var tempElement = document.createElement("div");
                                $(tempElement).html(optionHtml);
                                $(tempElement).find("img").each(function () {
                                    var src = $(this).attr("src");
                                    var newWindow = 'openInNewWindow("' + src + '");';
                                    $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                                })
                                optionHtml = $(tempElement).html();
                                questionsArray[tempQno].options[response] = optionHtml;
                                $(tempElement).remove();
                            }
                            //End Sunny
                            respText += questionsArray[tempQno].options[response];
                        }
                        response = respText;
                    }
                    else if(SummaryPage.Qtype == "fillintheblank"){
					//response = pages[SeqID][qno].useranswer; // This is previous code
						response = SummaryPage.useranswer == undefined ? "Not Attempted": getFormatedText(SummaryPage.useranswer);
					    response = response == undefined ? "abc" : response;
					}else{
                        response = SummaryPage.useranswer;
                        response = response == undefined ? "" : response;
                    }
                    response = (response == undefined || response == "undefined" || response == "") ? "Not Attempted" : response;
                    if (SummaryPage.Qtype == "draganddrop" && SummaryPage.useranswer != undefined && SummaryPage.useranswer != "") {
                        var val = SummaryPage.useranswer.toString().split("##");
						var removeDropObjArr = val[2].split("^^^")[0]
                        if (val.length > 1)
                            response = "Attempted (" + val[1] + " correct, " + removeDropObjArr + " incorrect)";
                        else
                            response = "Not Attempted";
                    }
					}
                    // For matrix page added by maheedhar on 02-09-2014
                   /* if (SummaryPage.Qtype == "matrix") {
                        if (SummaryPage.useranswer != undefined && SummaryPage.useranswer != "") {
                            if ((SummaryPage.useranswer).indexOf("1") != "-1") {
                                response = "Attempted";
                            } else {
                                response = "Not Attempted";
                            }
                        }
                    }*/
                    // For matrix page added by maheedhar on 02-09-2014

                    //$innerTrData.append("<td align='left' style='width:20%' class='summarydetails-list'>" + response + "</td>");
                   // $tbl.append("<td valign='top' align='left' width='20%' >" + response + "</td>");
				  // $tbl.append($innerTrData);
                }
                if (trackObjects[SeqID].sf_showResponse == "yes") {
				  var $tempTd = $("<td valign='top' align='right' width='1%'> </td>");
                    $tbl.append($tempTd);
                    if (SummaryPage.Qtype == "longanswer" && (SummaryPage.filename != "" && SummaryPage.filename != undefined)) {
                        $tempTd.append("<img src='images/attachment.png' title='" + SummaryPage.filename.replace("$$$", ",") + "' >");   
                    }
					if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedvidfilename != "" && SummaryPage.capturedvidfilename != undefined && SummaryPage.capturedvidfilename != "undefined")) {	
                          var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedvidid.toString()+'");' ;  
                        $tempTd.append("<a href='#' onClick = '"+methodStr+"'><img src='images/videoicon.png' style='width:20px; height: 20px;' title='" + SummaryPage.capturedvidfilename + "' ></a>");						
                    }					
                    if (SummaryPage.Qtype == "longanswer" && (SummaryPage.capturedimgfilename != "" && SummaryPage.capturedimgfilename != undefined && SummaryPage.capturedimgfilename != "undefined")) {
                          var methodStr = 'openLinkInNewWindow("'+SummaryPage.capturedimgid.toString()+'");' ;  					
                        $tempTd.append("<a href='#' onClick = '"+methodStr+"'><img src='images/imageicon.png' style='width:20px; height: 20px;' title='" + SummaryPage.capturedimgfilename + "' ></a>");
                    }				
					
				$tbl.append("<td valign='top' align='left' width='20%' >" + response + "</td>");
                }
                //var quesStatus = SummaryPage.status;
				var quesStatus = (SummaryPage.status == undefined || SummaryPage.status == "undefined" || SummaryPage.status == "") ? "NA" : SummaryPage.status;
                var feedBackTxt = "";
                var feedback = SummaryPage.status == "correct" ? questionsArray[tempQno].correctfeedback : questionsArray[tempQno].incorrectfeedback;
                feedback = (SummaryPage.Qtype == "longanswer" || SummaryPage.status == undefined || SummaryPage.status == "undefined" || SummaryPage.status == "") ? "NA" : feedback;
                var logoURL = ""
                if (quesStatus == "correct") {
                    logoURL = logoArr[0];
                    //Added by Sunny on 1st September 2016 For Showing Images as Link in Correct FeedBack
                    var CorrectFeedbackHtml = questionsArray[tempQno].correctfeedback;
                    if (CorrectFeedbackHtml != "") {
                        
                        var tempElement = document.createElement("div");
                        $(tempElement).html(CorrectFeedbackHtml);
                        $(tempElement).find("img").each(function () {
                            var src = $(this).attr("src");
                            var newWindow = 'openInNewWindow("' + src + '");';
                            $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                        })
                        CorrectFeedbackHtml = $(tempElement).html();
                        questionsArray[tempQno].correctfeedback = CorrectFeedbackHtml;
                        $(tempElement).remove();
                    }
                    //End Sunny
                    feedBackTxt = questionsArray[tempQno].correctfeedback;
                }
                else if (quesStatus == "NA") {
                    logoURL = logoArr[2];
                    feedBackTxt = "NA";
                }
                else {
                    logoURL = logoArr[1];
                    //Added by Sunny on 1st September 2016 For Showing Images as Link in InCorrect Feedback 
                    var IncorrectFeedbackHtml = questionsArray[tempQno].incorrectfeedback;
                    if (IncorrectFeedbackHtml != "") {
                      
                        var tempElement = document.createElement("div");
                        $(tempElement).html(IncorrectFeedbackHtml);
                        $(tempElement).find("img").each(function () {
                            var src = $(this).attr("src");
                            var newWindow = 'openInNewWindow("' + src + '");';
                            $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                        })
                        IncorrectFeedbackHtml = $(tempElement).html();
                        questionsArray[tempQno].incorrectfeedback = IncorrectFeedbackHtml;
                        $(tempElement).remove();
                    }
                    //End Sunny
                    feedBackTxt = questionsArray[tempQno].incorrectfeedback;
                }

                // For matrix page added by maheedhar on 02-09-2014
                /*if (SummaryPage.Qtype == "matrix") {
                    if (response == "Attempted") {
                        feedback = "Correct";
                        quesStatus = "Correct";
                        logoURL = logoArr[0];
                        feedBackTxt = "Correct";
                    } else {
                        feedback = "Incorrect";
                        quesStatus = "Incorrect";
                        logoURL = logoArr[1];
                        feedBackTxt = "Incorrect";
                    }
                }*/
    // For matrix page added by maheedhar on 02-09-2014
                //debugger;
                if (trackObjects[SeqID].optionlevelfeedback.toLowerCase() == "yes") {
                    
                    var PgType = getPageByIndex(tempQno).Qtype;
                    if (PgType == "truefalse" || PgType == "singleselect") {
                        //debugger;
                        var response = getPageByIndex(tempQno).useranswer;
                       //Added by Sunny on 8th September 2016 For Showing Images as Link in Option Level Feedback 
                        var OptionFeedbackHtml = questionsArray[tempQno].optLevelFeedback[response];
                        if (OptionFeedbackHtml != "") {
                         
                            var tempElement = document.createElement("div");
                            $(tempElement).html(OptionFeedbackHtml);
                            $(tempElement).find("img").each(function () {
                                var src = $(this).attr("src");
                                var newWindow = 'openInNewWindow("' + src + '");';
                                $(this).replaceWith("<a href='#" + src + "' onClick = '" + newWindow + "'>Image</a>");
                            })
                            OptionFeedbackHtml = $(tempElement).html();
                            questionsArray[tempQno].optLevelFeedback[response] = OptionFeedbackHtml;
                            $(tempElement).remove();
                        }
                        //End Sunny
                        var optFb = questionsArray[tempQno].optLevelFeedback[response];
                        var optFbTxt = (optFb == undefined || optFb == "undefined" || optFb == "") ? "NA" : optFb;
                        //$tbl.append("<td valign='top'  align='left' width='30%'>" + optFbTxt + "</td>");
                        feedBackTxt = optFbTxt;
                    } 
                } 
                if (trackObjects[SeqID].sf_showcorrect_in == "yes") {
					$tbl.append("<td valign='top' align='left' width='10%'><table widht='100%' cellpadding='2' cellspacing='2' border='0' class='qstatus'><tbody><tr><td><img src='" + logoURL + "' ></img></td><td align='left'>" + quesStatus.charAt(0).toUpperCase() + quesStatus.slice(1) + "</td></tr></tbody></table></td>");
                }
                if (trackObjects[SeqID].sf_showFeedback == "yes") {
                    $tbl.append("<td valign='top'  align='left' width='30%'>" + feedBackTxt + "</td>");
                }
                //$tbl.append($innerTrData);
              //  $('#tblsummary').append($tbl);
				return $tbl;
}

function replacSpecialChar(specialChar) {
    specialChar = repeatReplace(specialChar, "Ã¢â‚¬Â¢", 'â€¢');
    specialChar = repeatReplace(specialChar, "Ã‚", '');
    specialChar = repeatReplace(specialChar, "width:", '');

    return specialChar;
}

function checkAnswer() {
    debugger;
    var useranswer = "";
	try{
	    useranswer = getUserResponse().toString().fulltrim();
	} catch (e) {
	    //useranswer = getUserResponse() == undefined ? "" : getUserResponse();
	    useranswer = "";
	}
	try{
	if(getCoValues("Qtype").toLowerCase() == "draganddrop")  //if (pages[SeqID][innerPage].Qtype.toLowerCase() == "draganddrop")
	{
		 if(useranswer.split("##")[0] == "" || useranswer.split("##")[0] == undefined){
			useranswer = "";
		 }
	}
	}catch(e){}
	try{
	    if (getCoValues("Qtype").toLowerCase() == "longanswer" && ( (isRequriedAttachLA && fileName1 == "") || !(validateCaptureVideo()) || !(validateCaptureImage()) ) ) {
		 return false; 
	 }
	 }catch(e){}
	if (useranswer == "" || useranswer == "false") return false;
    try {

        // Added by maheedhar for singlepagerendering in co on 16-10-2014
        if (trackObjects[SeqID].singlePageRendering == "yes" && isLongAnswer) {
            isNoDocAttached = chkContentAttached();
        }
        if (trackObjects[SeqID].singlePageRendering == "yes" && ((!isNoDocAttached) || !(validateCaptureVideo()) || !(validateCaptureImage()))) {
            if ((isRequriedAttachLA != undefined) || checkForVideoCapture() || checkForImageCapture()) {
                return false;
            }
        }

        if (trackObjects[SeqID].singlePageRendering == "yes")
			return useranswer;
        //if (tincan.recordStores.length > 0) {
        setCOValues("useranswer", useranswer);
	// Added matrix condition by maheedhar for CoEditor 5.9 version
        if (getCoValues("Qtype").toLowerCase() == "matrix") {
            try {
                if (useranswer.indexOf("1") != "-1") {
                    setCOValues("status", "Attempted");
                } else {
                    setCOValues("status", "Not Attempted");
                }
            } catch (e) {}
        } else {
            try {
                if (getCoValues("Qtype").toLowerCase() != "longanswer" && getCoValues("Qtype").toLowerCase() != "rating") {
                if (checkPassStatus(useranswer))
                    setCOValues("status", "correct");
                else
                    setCOValues("status", "incorrect");
                }
                else if (getCoValues("Qtype").toLowerCase() != "draganddrop") {
                   
                    if (checkPassStatusforDragDrop(useranswer))
                        setCOValues("status", "correct");
                    else
                        setCOValues("status", "incorrect");
                }               
                else { setCOValues("status", "NA"); } //return true;
            } catch (e) {
                setCOValues("status", "NA");
				//return true;  
            }
        }
            
        //        }
        //else 
    //if (objType == "content object" || objType == "contentobject") {
	//	if (isSubmitted == false)
	//		return false;
	//}
			 
			
	//else{
        if (document.getElementById("submitbut") != null) {  //Sunny on 2nd May 2017
          
            	if (isSubmitted == false) 
            		return false;
            return true;  
        } else { //Sunny on 4th May 2017
            if (currPageObject.Qtype.toLowerCase() == "matrix") {
                if (currPageObject.status == "Not Attempted") {
                    return false;
                } else {
                    return true;
                }
            }
        }
		return true;
    }catch(e){
	   return true;
	}
	
}

// Added by maheedhar for Attach content in LA single page render in CO 16-10-2014
function chkContentAttached() {
    var temp = true;
    var pgType = "";
    if (isRequriedAttachLA == true) {
        for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {

            if ((objType == "content object" || objType == "contentobject") && getPageByIndex(i).type == "page") {
			    
                pgType = getPageByIndex(i).Qtype.toLowerCase();
            } else {
                pgType = getPageByIndex(i).type.toLowerCase();
            }
            if (pgType == "longanswer") {
                if (getPageByIndex(i).filename == undefined || getPageByIndex(i).filename == "undefined" || getPageByIndex(i).filename == "")
                    temp = false;
            }
        }
    }
    return temp;
}


function GetNumber(Question) {
    for (var q = 0; q < arrQuestions.length; q++) {
        if (arrQuestions[q].Qid == Question)
            return q;
    }
}

function repeatReplace(oldStr, findStr, repStr) {
    var srchNdx = 0;  // srchNdx will keep track of where in the whole line
    // of oldStr are we searching.
    var newStr = "";  // newStr will hold the altered version of oldStr.
    while (oldStr.indexOf(findStr, srchNdx) != -1)
    // As long as there are strings to replace, this loop
    // will run. 
    {
        newStr += oldStr.substring(srchNdx, oldStr.indexOf(findStr, srchNdx));
        // Put it all the unaltered text from one findStr to
        // the next findStr into newStr.
        newStr += repStr;
        // Instead of putting the old string, put in the
        // new string instead. 
        srchNdx = (oldStr.indexOf(findStr, srchNdx) + findStr.length);
        // Now jump to the next chunk of text till the next findStr.           
    }
    newStr += oldStr.substring(srchNdx, oldStr.length);
    // Put whatever's left into newStr.             
    return newStr;
}

function Round(number, X) {
    X = (!X ? 2 : X);
    return Math.round(number * Math.pow(10, X)) / Math.pow(10, X);
}

function updateParentArray(param) {
    try {
        if (param != null) {

            if (noa != "unlimited" && noa != "9999") {
                if (parseInt(allowedAttempts) <= parseInt(noa)) {

                    if (globalStatus == 'passed') {
                        pages[SeqID].status = 'passed';
                    }
                    else {
                        pages[SeqID].status = 'failed';
                    }
                }
                else {
                    if (globalStatus == 'passed') {
                        pages[SeqID].status = 'passed';
                    }
                    else {
                        pages[SeqID].status = 'failed';
                    }
                }
            }
            else {
                pages[SeqID].status = param;
            }
        }
        else {
            if (noa != "unlimited" && noa != "9999") {
                if (parseInt(allowedAttempts) <= parseInt(noa)) {
                    if (globalStatus == 'passed') {
                        pages[SeqID].status = 'passed';
                    }
                    else {
                        pages[SeqID].status = assessmentStatus;
                    }
                }
                else {
                    if (globalStatus == 'passed') {
                        pages[SeqID].status = 'passed';
                    }
                    else {
                        pages[SeqID].status = globalStatus;
                    }
                }
            }
            else {
                if (AssessmentType == "28")
                    pages[SeqID].status = "completed";
                else
                    pages[SeqID].status = assessmentStatus;
            }
        }
    }
    catch (e) {
    }
}

function saveUserData() {
    $("#loader").fadeTo("slow", 1);
    saveCurrentData();
    if (isinstancycontent == true) {
        updateUserAnswer();
        setAssessmentData();
    }
    LMSSetSessionTime(tmStartTime);
    tmStartTime = new Date().getTime();   
    if (nativeCID == "")
        LMSCommit();
    if (isinstancycontent == true) {
        GetPreviousAnswers();

    }
    //krishna -- For offline tracking in ios
    //if (nativeCID == "") {
    //    LMSCommit();
    //    //GetPreviousAnswers();
    //}
    //else
    //    GetOfflinePreviousAnswers();
    //End - offline tracking in ios
    setTimeout("CloseSaveLoader()", 300);
}
function CloseSaveLoader() {
    $("#loader").fadeTo("slow", 0);
}

function updateUserAnswer() {
    //debugger;
    //for (var i = 0; i < pages[SeqID].length; i++) {
    //    var arrQA = pages[SeqID][i];
    for (var i = 0; i < getTotalPageInObject(SeqID); i++) {
        var arrQA = getPageByIndex(i);
        if (arrQA.Qid != "") {
            if ((arrQA.type == "truefalse") || (arrQA.type == "singleselect") || (arrQA.type == "multipleselect")) {
                UserAnswerChoices = "";
                UserChoices = arrQA.useranswer.split(',');
                for (j = 0; j < UserChoices.length; j++) {
                    if (UserAnswerChoices == "")
                        UserAnswerChoices = (parseInt(UserChoices[j])).toString();
                    else
                        UserAnswerChoices = UserAnswerChoices + ',' + (parseInt(UserChoices[j])).toString();
                }
                arrQA.useranswer = UserAnswerChoices.toString();
            }
        }
    }
}
function saveCurrentData() {
    //below if statement is to get all the user responses
    //if (innerPage > 0 && innerPage < pages[SeqID].length && submitted == false) {
    //    if (pages[SeqID][innerPage].type != "page" && pages[SeqID][innerPage].type != "summary") {
    if (innerPage > 0 && innerPage < getTotalPageInObject(SeqID) && submitted == false) {
        if (getPageByIndex(innerPage).type != "page" && getPageByIndex(innerPage).type != "summary") {
            checkAnswer();
        }
    }
}

function GetPreviousAnswers() {
    var preanswer="";
	var previourpagenum ="";
    var qSeperator = "";
    var aSeperator = ""
    if (nativeCID == "") {
        qSeperator = "##^^##";
        aSeperator = "##@@##";
    }
    else {
        qSeperator = "$";
        aSeperator = "@";
    }
	//if (tc_lrs != null)
    if (tincan.recordStores.length > 0)
	  {
		preanswer=GetTinCanAssessmentData();
	  }
	  else {
		  preanswer = LMSGetPreviewAnswers();
	  }
    if (preanswer != null && preanswer != "") {
        prearr = preanswer.split(qSeperator);
		var randomizationEnabled = trackObjects[SeqID].questionrandomization.toLowerCase();
	// added on  29-10-2014 - Randomization in CO
        if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
		  var tempPageNum = pages[SeqID][0].actualPageNumber;
		}else{
          var tempPageNum = pages[SeqID][0].pageNumber;
		}
        for (i = 0; i < pages[SeqID].length; i++) {
            if (pages[SeqID][i].type != "topic") {
                if (pages[SeqID][i].pageNumber != "" || (pages[SeqID][i].pageNumber == 0 && pages[SeqID][i].iscoao == "ao")) {
                var testPageNum = 0;
                if (isTrack == "yes") {
		// added on  29-10-2014 - Randomization in CO
					if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
					    testPageNum = pages[SeqID][i].actualPageNumber - tempPageNum;
					}else{
					    testPageNum = pages[SeqID][i].pageNumber - tempPageNum;
					}
				}
				else {
				   if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
				       testPageNum = pages[SeqID][i].actualPageNumber;
				   }else{
				       testPageNum = pages[SeqID][i].pageNumber;
				   }
					//testPageNum = pages[SeqID][i].pages[m].pages[n].pageNumber;
				}
                for (k = 0; k <= prearr.length - 1; k++) {
			if (tincan.recordStores.length > 0)
			    previourpagenum = prearr[k].split(aSeperator)[0]
			else
			    previourpagenum = prearr[k].split(aSeperator)[0] - 1;
                    if ( previourpagenum == testPageNum) {
                        if (pages[SeqID][i].Qtype == "longanswer" || pages[SeqID][i].Qtype == "matrix" || pages[SeqID][i].Qtype == "rating") {
                            pages[SeqID][i].status = "NA";
                            pages[SeqID][i].useranswer = prearr[k].split(aSeperator)[1];
                                // Added for Mobile Native..By Satish
                                if (nativeCID != "" && pages[SeqID][i].Qtype == "rating") {
                                    //pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '%23%5E%23%5E', '@');
                                    pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '%5E', '^');
                                    pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '#^#^', '@');
                                }//
                            
                                if (nativeCID != "" && pages[SeqID][i].Qtype == "matrix") {
                                pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '%25', '%');
                                pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '%5E', '^');
                                pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '%23', '#');
                                
                                pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '##^^##^^', '&&**&&');
                            }
                            
			    getAttachedContentData(pages[SeqID][i], prearr[k], i);

                            } else if ((pages[SeqID][i].Qtype == "truefalse") || (pages[SeqID][i].Qtype == "multipleselect") || (pages[SeqID][i].Qtype == "singleselect")) {
                            if (prearr[k].split(aSeperator)[2] == "correct")
                                pages[SeqID][i].status = "correct";
                            else
                                pages[SeqID][i].status = "incorrect";
			    try {
                             if (prearr[k].split(aSeperator)[5] != "") 
                                        pages[SeqID][i].optionnotes = prearr[k].split(aSeperator)[5];
                                } catch (e) {}
                            UserAnswerChoices = "";
                            UserChoices = prearr[k].split(aSeperator)[1].split(',');
                            for (j = 0; j < UserChoices.length; j++) {
                                if (UserAnswerChoices == "")
                                    UserAnswerChoices = (parseInt(UserChoices[j])).toString();
                                else
                                    UserAnswerChoices = UserAnswerChoices + ',' + (parseInt(UserChoices[j])).toString();
                            }

                            pages[SeqID][i].useranswer = UserAnswerChoices.toString();
                        }
                        if (pages[SeqID][i].Qtype == "fillintheblank") {
                            if (prearr[k].split(aSeperator)[2] == "correct")
                                pages[SeqID][i].status = "correct";
                            else
                                pages[SeqID][i].status = "incorrect";
                            pages[SeqID][i].useranswer = prearr[k].split(aSeperator)[1].split(",");
                        }

                        if (pages[SeqID][i].Qtype == "draganddrop" || pages[SeqID][i].Qtype == "sequence") {
                            if (prearr[k].split(aSeperator)[2] == "correct") {
                                pages[SeqID][i].status = "correct";
                           } else{
                            pages[SeqID][i].status = "incorrect";
							}
                            pages[SeqID][i].useranswer = prearr[k].split(aSeperator)[1];
                                // Added for Mobile Native..By Satish
                                if (nativeCID != "") {
                                    pages[SeqID][i].useranswer = ReplaceAll(pages[SeqID][i].useranswer, '%5E', '^');
                                }//
							
                            }
                            break;
                        }
                    }
                }
            }
            else {
                for (m = 0; m < pages[SeqID][i].pages.length; m++) {
                    if (pages[SeqID][i].pages[m].type != "topic") {
                        if (pages[SeqID][i].pages[m].pageNumber != "" || (pages[SeqID][i].pages[m].pageNumber == 0 && pages[SeqID][i].pages[m].iscoao == "ao")) {
                        var testPageNum = 0;
                        if (isTrack == "yes") {
			// added on  29-10-2014 - Randomization in CO
							   if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
                                testPageNum = pages[SeqID][i].pages[m].actualPageNumber - tempPageNum;
							   }else{
							    testPageNum = pages[SeqID][i].pages[m].pageNumber - tempPageNum;
							   }
						}
						else {
						  if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
							 testPageNum = pages[SeqID][i].pages[m].actualPageNumber;
						  }else{
							 testPageNum = pages[SeqID][i].pages[m].pageNumber;
						  }
						}
                        for (k = 0; k <= prearr.length - 1; k++) {
				if (tincan.recordStores.length > 0)
				    previourpagenum = prearr[k].split(aSeperator)[0]
				else
				    previourpagenum = prearr[k].split(aSeperator)[0] - 1;
                            if (previourpagenum == testPageNum) {
                                if (pages[SeqID][i].pages[m].Qtype == "longanswer" || pages[SeqID][i].pages[m].Qtype == "matrix" || pages[SeqID][i].pages[m].Qtype == "rating") {
                                    pages[SeqID][i].pages[m].status = "NA";
                                    pages[SeqID][i].pages[m].useranswer = prearr[k].split(aSeperator)[1];
                                    
                                    // Added for Mobile Native..By Satish
                                    if (nativeCID != "" && pages[SeqID][i].pages[m].Qtype == "rating") {
                                        // pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '%23%5E%23%5E', '@');
                                        pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '%5E', '^');
                                        pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '#^#^', '@');
                                    }//
                                    
                                   
                                    if (nativeCID != "" && pages[SeqID][i].pages[m].Qtype == "matrix") {
                                        
                                        pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '%25', '%');
                                        pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '%5E', '^');
                                        pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '%23', '#');
                                        
                                        pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '##^^##^^', '&&**&&');
                                   }
                                    
				    getAttachedContentData(pages[SeqID][i].pages[m], prearr[k], i);
                                    } else if ((pages[SeqID][i].pages[m].Qtype == "truefalse") || (pages[SeqID][i].pages[m].Qtype == "multipleselect") || (pages[SeqID][i].pages[m].Qtype == "singleselect")) {
                                    if (prearr[k].split(aSeperator)[2] == "correct")
                                        pages[SeqID][i].pages[m].status = "correct";
                                    else
                                        pages[SeqID][i].pages[m].status = "incorrect";
                                        try {
                                            if (prearr[k].split(aSeperator)[5] != "")
                                                pages[SeqID][i].pages[m].optionnotes = prearr[k].split(aSeperator)[5];
                                        } catch (e) { }
                                    UserAnswerChoices = "";
                                    UserChoices = prearr[k].split(aSeperator)[1].split(',');
                                    for (j = 0; j < UserChoices.length; j++) {
                                        if (UserAnswerChoices == "")
                                            UserAnswerChoices = (parseInt(UserChoices[j])).toString();
                                        else
                                            UserAnswerChoices = UserAnswerChoices + ',' + (parseInt(UserChoices[j])).toString();
                                    }
                                    pages[SeqID][i].pages[m].useranswer = UserAnswerChoices.toString();
                                }
                                if (pages[SeqID][i].pages[m].Qtype == "fillintheblank") {
                                    if (prearr[k].split(aSeperator)[2] == "correct")
                                        pages[SeqID][i].pages[m].status = "correct";
                                    else
                                        pages[SeqID][i].pages[m].status = "incorrect";
                                    pages[SeqID][i].pages[m].useranswer = prearr[k].split(aSeperator)[1].split(",");
                                }
                                if (pages[SeqID][i].pages[m].Qtype == "draganddrop" || pages[SeqID][i].pages[m].Qtype == "sequence") {
                                    if (prearr[k].split(aSeperator)[2] == "correct") {
                                        pages[SeqID][i].pages[m].status = "correct";
                                    } else {
                                        pages[SeqID][i].pages[m].status = "incorrect";
                                    }
                                    pages[SeqID][i].pages[m].useranswer = prearr[k].split(aSeperator)[1];
                                    // Added for Mobile Native..By Satish
                                    if (nativeCID != "") {
                                        pages[SeqID][i].pages[m].useranswer = ReplaceAll(pages[SeqID][i].pages[m].useranswer, '%5E', '^');
                                    }//
                                }
                        break;
                            }
                        }
                    }
                    } else {
                        for (n = 0; n < pages[SeqID][i].pages[m].pages.length; n++) {
                            if (pages[SeqID][i].pages[m].pages[n].pageNumber != "" || (pages[SeqID][i].pages[m].pages[n].pageNumber == 0 && pages[SeqID][i].pages[m].pages[n].iscoao == "ao")) {
                                var testPageNum = 0;
                                if (isTrack == "yes") {
				// added on  29-10-2014 - Randomization in CO
								  if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
								      testPageNum = pages[SeqID][i].pages[m].pages[n].actualPageNumber - tempPageNum;
								  }else{
									testPageNum = pages[SeqID][i].pages[m].pages[n].pageNumber - tempPageNum;
								  }
                                } else {
								  if (randomizationEnabled == "yes" || (pooledQuestionsStringArray[SeqID] != "" && pooledQuestionsStringArray[SeqID] != undefined)){
								      testPageNum = pages[SeqID][i].pages[m].pages[n].actualPageNumber;
								  }else{
									testPageNum = pages[SeqID][i].pages[m].pages[n].pageNumber;
								  }
								}
                                for (k = 0; k <= prearr.length - 1; k++) {
					if (tincan.recordStores.length > 0)
					    previourpagenum = prearr[k].split(aSeperator)[0]
					else
					    previourpagenum = prearr[k].split(aSeperator)[0] - 1;
						
                                    if (previourpagenum == testPageNum) {
                                        if (pages[SeqID][i].pages[m].pages[n].Qtype == "longanswer" || pages[SeqID][i].pages[m].pages[n].Qtype == "matrix" || pages[SeqID][i].pages[m].pages[n].Qtype == "rating") {
                                            pages[SeqID][i].pages[m].pages[n].status = "NA";
                                            pages[SeqID][i].pages[m].pages[n].useranswer = prearr[k].split(aSeperator)[1];
                                            // Added for Mobile Native..By Satish
                                            if (nativeCID != "" && pages[SeqID][i].pages[m].pages[n].Qtype == "rating") {
                                                //pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '%23%5E%23%5E', '@');
                                                pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '%5E', '^');
                                                pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '#^#^', '@');
                                            }//
                                            
                                         if (nativeCID != "" && pages[SeqID][i].pages[m].pages[n].Qtype == "matrix") {
                                             
                                             pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '%25', '%');

                                             pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '%5E', '^');
                                             
                                             pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '%23', '#');
                                             
                                             pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '##^^##^^', '&&**&&');
                                             
                                            }
                                           
					    getAttachedContentData(pages[SeqID][i].pages[m].pages[n], prearr[k], i);
                                        } else if ((pages[SeqID][i].pages[m].pages[n].Qtype == "truefalse") || (pages[SeqID][i].pages[m].pages[n].Qtype == "multipleselect") || (pages[SeqID][i].pages[m].pages[n].Qtype == "singleselect")) {
                                            if (prearr[k].split(aSeperator)[2] == "correct")
                                                pages[SeqID][i].pages[m].pages[n].status = "correct";
                                            else
                                                pages[SeqID][i].pages[m].pages[n].status = "incorrect";
                                            try {
                                                if (prearr[k].split(aSeperator)[5] != "")
                                                    pages[SeqID][i].pages[m].pages[n].optionnotes = prearr[k].split(aSeperator)[5];
                                            } catch (e) { }
                                            UserAnswerChoices = "";
                                            UserChoices = prearr[k].split(aSeperator)[1].split(',');
                                            for (j = 0; j < UserChoices.length; j++) {
                                                if (UserAnswerChoices == "")
                                                    UserAnswerChoices = (parseInt(UserChoices[j])).toString();
                                                else
                                                    UserAnswerChoices = UserAnswerChoices + ',' + (parseInt(UserChoices[j])).toString();
                                            }
                                            pages[SeqID][i].pages[m].pages[n].useranswer = UserAnswerChoices.toString();
                                        }
                                        if (pages[SeqID][i].pages[m].pages[n].Qtype == "fillintheblank") {
                                            if (prearr[k].split(aSeperator)[2] == "correct")
                                                pages[SeqID][i].pages[m].pages[n].status = "correct";
                                            else
                                                pages[SeqID][i].pages[m].pages[n].status = "incorrect";
                                            pages[SeqID][i].pages[m].pages[n].useranswer = prearr[k].split(aSeperator)[1].split(",");
                                        }
                                        if (pages[SeqID][i].pages[m].pages[n].Qtype == "draganddrop" || pages[SeqID][i].pages[m].pages[n].Qtype == "sequence") {
                                            if (prearr[k].split(aSeperator)[2] == "correct") {
                                                pages[SeqID][i].pages[m].pages[n].status = "correct";
                                            } else {
                                                pages[SeqID][i].pages[m].pages[n].status = "incorrect";
                                            }
                                            pages[SeqID][i].pages[m].pages[n].useranswer = prearr[k].split(aSeperator)[1];
                                            
                                            // Added for Mobile Native..By Satish
                                            if (nativeCID != "") {
                                                pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '#%5E#%5E', '##@^@^@##');
                                                pages[SeqID][i].pages[m].pages[n].useranswer = ReplaceAll(pages[SeqID][i].pages[m].pages[n].useranswer, '%5E', '^');
                                            }//
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function navigateURL(mode) {
    //debugger;
    var checkVal = false;
    if (mode != 'previous') {
        if(trackObjects[SeqID].singleqtnperpage != undefined)
        var testType = trackObjects[SeqID].singleqtnperpage;
		if(testType != "no"){
			if (innerPage > 0 && innerPage < (getTotalPageInObject(SeqID) - 1)) {
				if (getPageByIndex(innerPage).type != "page" && getPageByIndex(innerPage).type != "summary")
				{
				  checkVal = checkAnswers(mode);
					if (checkVal == false || checkVal == "false") {
						return;
					}
                } else {
					try{
						if (getPageByIndex(innerPage).remediation == "yes" && getCoValues("pagecompletion") != "completed")
						{  
							checkVal = checkAnswers(mode);   
							if (checkVal == false || checkVal == "false") {
								return; 
							}
						}
					} catch (e)
					{ }
				
				}
			}
		}else{
		    //if (currPageObject.type != "page" && currPageObject.type != "summary") {            
                checkVal = checkAnswers(mode);
                if (checkVal == false || checkVal == "false") {
                    return false;
                }
            //}
		}
		
    }
    //debugger;
    if (mode != 'previous' && checkVal == true && trackObjects[SeqID].singleqtnperpage == "no" && trackObjects[SeqID].hidesummarypage == "no") {
        //if (getPageByIndex(innerPage).type != "page" && getPageByIndex(innerPage).type != "summary") {
            innerPage = getTotalPageInObject(SeqID) - 1;
            isAnswered = true;
           return;
       // }
    }
    if (mode == 'previous' && trackObjects[SeqID].singleqtnperpage == "no") {
        if (getPageByIndex(innerPage).type == "summary") {
            //innerPage = getTotalPageInObject(SeqID) - 2;
			innerPage = 0;
            isAnswered = true;
            return true;
        } else if (getPageByIndex(innerPage).type == "page" && (innerPage + 1 == (getTotalPageInObject(SeqID) - 1))) {
            innerPage = 1;
            isAnswered = true;
            return true;
        }
    }

    //below if statement is to get all the user responses
    if (innerPage > 0 && innerPage < (getTotalPageInObject(SeqID)) && submitted == false) {
        if (getPageByIndex(innerPage).type != "page" && getPageByIndex(innerPage).type != "summary") {
            var aa = getUserResponse();
            if(trackObjects[SeqID].singleqtnperpage == "yes")
                getPageByIndex(innerPage).useranswer = aa;
        }
    }

       
    if (mode == 'next') { 
		if (objType == "assessment")
		{
		    if (innerPage + 1 == (getTotalPageInObject(SeqID) - 1) && submitted == false) {

										if (trackObjects[SeqID].testType == "28") {
											if (confirm('This will end your Survey. Do you wish to submit?') == true) {
												//clearInterval(tmID);
												submitted = true;
												Timeup = true;
												innerPage++;
											}
											else
												return;
										}
										else {
											if (confirm('This will end your Assessment. Do you wish to submit?') == true) {
												//clearInterval(tmID);
												submitted = true;
												Timeup = true;
												innerPage++;
											}
											else
												return;
										}
				}else {innerPage++;}
		 }
        else {
            innerPage++;
        }
    }
   
    else {
        if ((innerPage != 0) || (innerPage == 0 && isTrack == "yes"))
            innerPage--;
    }
    isAnswered = true;
}

function checkAnswers(mode) {
    //debugger;
    var check = checkAnswer();
    if (mode == "toc" && check == true)
        return true;

    if (trackObjects[SeqID].singleqtnperpage == "no") {
        if (check == true || check == "true")
            return true;
        else {
            if (isNoDocAttached == false) {
                alert("Your response is missing the attachment.");
                return false;
            } else if (!(validateCaptureVideo())) {
                alert("Your response is missing the captured video attachment.");
                return false;
            } else if (!(validateCaptureImage())) {
                alert("Your response is missing the captured image attachment.");
                return false;
            }
            else {
                alert("Please provide all response(s) and click on the Next button to continue.");
                return false;
            }

            alert("Please provide all response(s) and click on the Next button to continue.");
            return false;
        }
     }
    //// Edited By Raghu For Navigating FFD after completed the AO page/////////////////////////////
	try{
	if(getCoValues("pagecompletion") == "completed" && check == false){
		return true;	}
	}catch(e) {}
	////////////////////////////////////////////////////////////////////////////////////////////////
    //debugger;
    if (check == false) {
	var pagetype = "";
	try{
	 pagetype = getCoValues("Qtype").toLowerCase();
	 }catch(e){ pagetype = "";}
	
	switch(pagetype) {
        //switch (pages[SeqID][innerPage].type.toLowerCase()) {
            case "longanswer":
                if(isNoDocAttached == false){
                    alert("Your response is missing the attachment.");
                    return false;
                } else if (!(validateCaptureVideo())) {
                    alert("Your response is missing the captured video attachment.");
                    return false;
                } else if (!(validateCaptureImage())) {
                    alert("Your response is missing the captured image attachment.");
                    return false;
			    }else{
					alert("Please provide a response and click on the Next button to continue.");
                    return false;
				}
            case "fillintheblank":
                if (document.getElementById("submitbut") != null && isSubmitted == false) {
                    alert("Please provide all the response(s) and click on Next button to continue.")
                    return false;
                }
                else {
                    alert("Please provide all the response(s) and click on Next button to continue.")
                    return false;
                }
                break;
            default:
                if (document.getElementById("submitbut") != null && isSubmitted == false) {
                    alert("Please select an answer and click on the Submit button to continue.")
                    return false;
                }
                else {
                    alert("Please select an answer and click on the Next button to continue.");
                    return false;
                }
                break;
        }
    }
}

function printCommentsSummary() {
    win = window.open('print.html', 'title', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=620,height=700');
}

function EditResponses() {
    //innerPage = innerPage - (getTotalPageInObject(SeqID) - 2);
	innerPage = 0;
    submitted = false;
	
	strLessonStatus = "incomplete";
    LMSSetLessonStatus("incomplete");
    pages[SeqID].status = "incomplete";
	
	if ($('#lblTimer') != undefined) {
	    $('#lblTimer').timer('remove');
	}
	try{
	if ($("#summaryPopup") != null || $("#summaryPopup") != undefined)
		//$("#summaryPopup").parent().css({ "display": "none" });
		$("#summaryPopup").dialog('close');
	}catch(e){ }
    isrelaunchsummarydirectly = false;
	if (isrelaunchsummarydirectly == false) {
	    $("#coundownTimer").show();
	}
	try{
        //Modified by Sunny on 23rd june 2016 trackObjects[SeqID].chkcontraintfornavigation  == "yes" previously it is "forward"
		if(trackObjects[SeqID].chkcontraintfornavigation == "yes"){ 
		    if (objType == "content object" || objType == "contentobject") {
				var QuestionType ="";
				var pgObj;
				var num;
				for (i = 0; i < getTotalPageInObject(SeqID); i++) {
					pgObj = getPageByIndex(i);
					QuestionType = pgObj.Qtype;
					num = pgObj.pageNumber;
					if (QuestionType != undefined){
						if (QuestionType == "singleselect" || QuestionType == "truefalse" || QuestionType == "multipleselect" || QuestionType == "longanswer" || QuestionType == "fillintheblank" || QuestionType == "draganddrop" || QuestionType == "matrix") {
							setCOPageValues(num, "pagecompletion", "");
						}
					}
				}
			}
		}
	    try {
	        if (trackObjects[SeqID].enabletimer == "yes") {
	            IskeybordEvent = true;
	            $("#coundownTimer").show();
	                ShowTimer();                          //Kiran added for starting timer on retake
	        }
	        else {
	            $("#coundownTimer").hide();
	        }
	    } catch (e) { }
	}catch(e){}
    beforegotoPage();
}

function retakeTest() {   
    if (confirm("Are you sure want to retake this assessment ? All of your previously entered responses will be erased.")) {
        //debugger;
        retakeClicked = true;
	isrelaunchsummarydirectly = false;
       /* if (strLessonStatus != "passed") {
            strLessonStatus = "incomplete";
            LMSSetLessonStatus("incomplete");
            
            if (pages[SeqID].status != "passed")
                    pages[SeqID].status = "incomplete";
        }*/
		 if (isinstancycontent == true) 
				LMSRetakeAssessmentData();
		if (objType == "content object" || objType == "contentobject") {
		var QuestionType ="";
		var pgObj;
		var num;
			for (i = 0; i < getTotalPageInObject(SeqID); i++) {
			    pgObj = getPageByIndex(i);
				QuestionType = pgObj.Qtype;
				num = pgObj.pageNumber;
				if (QuestionType != undefined){
				    if (QuestionType == "singleselect" || QuestionType == "truefalse" || QuestionType == "multipleselect" || QuestionType == "longanswer" || QuestionType == "fillintheblank" || QuestionType == "draganddrop" || QuestionType == "matrix" || QuestionType == "rating" || QuestionType == "sequence") {
						setCOPageValues(num, "useranswer", "");
						setCOPageValues(num, "status", "");
						setCOPageValues(num, "pagecompletion", "");
						if (QuestionType == "longanswer"){
							setCOPageValues(num, "filename", "");
							setCOPageValues(num, "fileid", "");
							setCOPageValues(num, "capturedvidfilename", "");
							setCOPageValues(num, "capturedvidid", "");
							setCOPageValues(num, "capturedimgfilename", "");
							setCOPageValues(num, "capturedimgid", "");
                        }
                    }
                }
            }
        }


        /**************** 29-10-2014 - Randomization in CO ************/
		if ((objType == "content object" || objType == "contentobject") && trackObjects[SeqID].questionrandomization == "yes") {

		   /* try{
		        resetPagesBeforeRandomization();
		    }catch(e){}*/
		    // randomize all pages for the first time for a perticular user;

			bkptempPagesArray=new Array();
			$(bkpPagesArray).each(function (i) {
				 bkptempPagesArray.push(this);
			 });
			pages = copyarray(bkpPagesArray);
			checkForPoolGeneration();
		    pages[SeqID] = randomizePages(pages[SeqID]);
		    // get all randomized pages array for the first time for a perticular user, stringify and save it on LMS;
		    /*randomQuesSeqArray = [];
            getQueSeqArray();
            LMSSetRandomQuestionNos(randomQuesSeqArray.join());*/
		    totalPages = 0;
			
		    if (isTrack == "yes"){
		        generateTrackTOC();
		    }else{
		        $("#folderTree").html("");
		        generateTOC();
		    }
				
		    if (trackObjects[SeqID].questionrandomization == "yes") {
		        getQueSeqArray();
		        pages[SeqID] = assignRandomizedPageNums(pages[SeqID]);
		        try{
		            if (fnGetQueryString("cid") != "")
		            {
		                MobileJSInterface.LMSSetRandomQuestionNosWithRandomqusseq(randomQuesSeqArray.join());
		            }
		            else{
		                LMSSetRandomQuestionNos(randomQuesSeqArray.join());
		            }
		        } catch (e) {}
		    }
		}
        /**************** 29-10-2014 - Randomization in CO ************/
        EditResponses();
        resetTOConRetake();
        VisitedPagesNonTracing = ""
		if (trackObjects[SeqID].enableprogressbar == "yes" && trackObjects[SeqID].hidetoctopic == "no") {
				 var availableTopicsIntheObject = getTotalTopicsIntheObject();
				 getTopicProgressStatus(availableTopicsIntheObject);
		}
    }
	backupPagesArray=bkpPagesArray;
}

function submitTest() {
    $("#loader").fadeTo("slow", 0);
    $("#loader").fadeTo("fast", 1);
    if (strLessonStatus == "" || strLessonStatus == "not attempted" || strLessonStatus == "incomplete") {
        if (isinstancycontent == true) 
		LMSSetLessonStatus("grade");
        pages[SeqID].status = "grade";
    }
	 if (isinstancycontent == true) 
		LMSSetMailstatus();
    var useragent = navigator.userAgent;
    useragent = useragent.toLowerCase();

    if ((isTrack == "yes" && (SeqID == pages.length - 1)) || (isTrack == "no" && objType == "contentobject")) {
        if (useragent.indexOf('opera') != -1) {
            onContentUnload();
            window.top.close();
        }
        if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
            try {
                onContentUnload();
            }
            catch (e) {
            }
            if (window.location.href.indexOf("nativeappURL") != -1) {
                window.location.href = "blank.html?IOSCourseClose=true";
                return;
            }
            top.window.close();
            window.parent.fnClear();
            window.parent.fnGetStatus();   
        }
        //top.window.close();
		 if (GetRadWindow() != null)
            {
                onContentUnload();
				top.location.href = top.location.href;
                GetRadWindow().Close();
		    }else if(GetBootstrapModalPopup() == true){
		         onContentUnload();
		        // top.location.href = top.location.href;
		         window.parent.parent.CloseBootstrapModal();
		    }else 
              window.top.close();
    }
    else if (isTrack == "yes" && objType == "assessment") {
        nextPage();
    }
}

function sortOrder(arrAns)
{
	var sortedAnswer="";	
	if (arrAns != undefined)
	{
		var arrUserResponses = new Array();
		arrUserResponses = arrAns.toString().split(',');
		if (arrUserResponses != undefined) 
		{
			arrUserResponses.sort(function (a, b) { return a - b });
			for (k=0; k<arrUserResponses.length; k++ )
			{
				if (k==0)
				{ sortedAnswer = (parseInt(arrUserResponses[k])).toString(); }
				else
				{ sortedAnswer += "," + (parseInt(arrUserResponses[k])).toString(); }
			}
		}
		else
			sortedAnswer = (parseInt(arrAns)).toString();
		sortedAnswer = (sortedAnswer.substr(0, 3) == "NaN") ? arrAns : sortedAnswer;
	}
    return sortedAnswer;
}

///added by krishna.b for sequence rules in single skin feature.
function TrackObj(cid, seqid, status, ruleid, launchpage, state, isobjectivebased, suspend_data, istrackable, prepost, bookmark, firstpage, lastpage, noa, allowedAttempts, timeleft, submitedtime, timelefttoaccess, timegetsubmitted) {
    this.cid = cid;
    this.seqid = seqid;
    this.status = status;
    this.ruleid = ruleid;
    this.launchpage = launchpage;
    this.state = state;
    this.isobjectivebased = isobjectivebased;
    this.suspend_data = suspend_data;
    this.istrackable = istrackable;
    this.prepost = prepost;
    this.bookmark = bookmark;
    this.firstpage = firstpage;
    this.lastpage = lastpage;
    this.noa = noa;
    this.allowedAttempts = allowedAttempts;
    this.timeleft = timeleft;
    this.submitedtime = submitedtime;
    this.timelefttoaccess = timelefttoaccess;
    this.timegetsubmitted = timegetsubmitted;
    return this;
}

function CheckAllRules() {
    for (var j = 0; j < arrAllObjects.length; j++) {
        arrAllObjects[j].state = "visible";
    }
    if (arrAllObjects[0].prepost == "preassessment" && arrAllObjects[0].status != "") {
        arrAllObjects[0].state = "hidden";
    }
    for (var j = 0; j < arrAllObjects.length; j++) {
    
        CheckRulesOfItem(j);
    }
}

function fnShowHideTOCItems(table, param) {
    //debugger;
    for (var j = 0; j < arrAllObjects.length; j++) {
        if (j == 0)
            arrAllObjects[j].state = "visible";
        else { 
            if(arrAllObjects[j-1].state == "visible")
                arrAllObjects[j].state = "visible";
        }
        if (pages[j].status != undefined)
            arrAllObjects[j].status = pages[j].status;
        CheckRulesOfItem(j);

        if (arrAllObjects[j].state == 'hidden') {

        }
        else if (arrAllObjects[j].state == 'disabled') {

            $('.tblTOC div table tr td span[SeqID="' + j + '"]').each(function () {
                $(this).removeClass("steps");
                $(this).addClass("TOC_Links_Disable");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 0.5);
                $(this).removeClass('TOC_Links_Visited');
                $(this).removeClass('on');
                $(this).click(function () {
                    alert("You must complete this module to view next item.");
                });
            });
        }
        else {
            //debugger;
            if (j != 0) {
                fnCheckTimeDelay(j);
            }
        }
    }

    function fnCheckTimeDelay(objIndex) {
        //debugger;
        //--krishnab - objec access eith  time delay.    
        var timeleft = CheckObjectTimeDelay(arrAllObjects[objIndex - 1].launchpage.split('/')[0], objIndex - 1);
        if (timeleft != 0 && (arrAllObjects[objIndex].status == "" || arrAllObjects[objIndex].status == "not attempted")) {
            if (arrAllObjects[objIndex].state == 'visible' && arrAllObjects[objIndex - 1].status != 'incomplete' && arrAllObjects[objIndex - 1].status != '') {
                arrAllObjects[objIndex].timelefttoaccess = timeleft;
            }
            arrAllObjects[objIndex].state = 'disabled';
            arrAllObjects[objIndex].status = '';
            for (var tempIndex = objIndex + 1; tempIndex < arrAllObjects.length; tempIndex++) {
                arrAllObjects[tempIndex].state = 'disabled';
            }            

        }
        if (arrAllObjects[objIndex].state == 'hidden') {

        }
        else if (arrAllObjects[objIndex].state == 'disabled') {
        $('.tblTOC div table tr td span[SeqID="' + objIndex + '"]').each(function() {
            $(this).removeClass("steps");
            $(this).addClass("TOC_Links_Disable");
            $(this).unbind("click");
            $(this).unbind("hover");
            $(this).fadeTo("fast", 0.5);
            $(this).removeClass('TOC_Links_Visited');
            $(this).removeClass('on');
            $(this).click(function() {
                alert("Please wait " + secondsToString(arrAllObjects[objIndex].timelefttoaccess * 60) + " for the next module to become available.");
                // alert("Thank you for your efforts, this course is designed so that you will execute your field exercise, then return and provide feedback.  Thank you.");
            });
        });
        }
        else if (arrAllObjects[objIndex].state == 'visible') {
            //debugger;
            $('.tblTOC div table tr td span[SeqID="' + objIndex + '"]').each(function () {
                //$(this).removeClass("TOC_Links_Disable");
                //$(this).addClass("steps");
                $(this).unbind("click");
                $(this).unbind("hover");
                $(this).fadeTo("fast", 1);
                $(this).click(function () {
                    $(this).animate({ paddingLeft: 0 }, 500);
                    if ($(this).attr("pageNum") == undefined)
                        tocGotoPage($(this).attr("startPage"));
                    else
                        tocGotoPage($(this).attr("pageNum"));

                });

                $(this).hover(function () {
                    $(this).addClass('on');
                    $(this).removeClass('steps');
                    if (!$(this).hasClass("TOC_Links_Disable"))
                    $(this).addClass('TOC_Links_Visited');
                    //$(this).animate({ paddingLeft: 5 }, 100);


                }, function () {
                    $(this).removeClass('on');
                    $(this).removeClass('TOC_Links_Visited');
                    $(this).addClass('steps');
                    if ($(this).hasClass("TOC_Links_Disable")) {
                        $(this).removeClass('steps');
                    }
                    //$(this).animate({ paddingLeft: 0 }, 100);

                });
            });
        }
    }
    //--End objec access with  time delay.
}
    ///--End --added by krishna.b for sequence rules in single skin feature

    // Added by Sandeep to check track status
function updateTrackStatus() {
    
        var trackStatus = "incomplete";
        var obj = true;
        for (var j = 0; j < pages.length; j++) {
            if (pages[j].status.toLowerCase() == "" || pages[j].status.toLowerCase() == "incomplete" || pages[j].status.toLowerCase() == "grade" || pages[j].status.toLowerCase() == "inprogress" || pages[j].status.toLowerCase() == undefined) {
                obj = false;
                return;
            }

        }

        if (obj == true) {
            SetTrackStatus("completed");
            //Added by Sunny on 17th june 2016 for Certification depending on Score
            updateContentMaxScore(certificatescore);
            updateContentUserScore(TotalContentScore);
            //End Sunny
        }
        else
            SetTrackStatus("incomplete");

    }
    // End by Sandeep


    function GetSessionURL() {
        document.getElementById("refreshFrame").src = GetUrl();
        setInterval("startTimer()", sestime1);
    }
    function startTimer() {
        try {
            if (netMsg == "" || netMsg == undefined) {
                document.getElementById("refreshFrame").contentWindow.SetMessage();
                netMsg = document.getElementById("refreshFrame").contentWindow.sesMSG;
            }
            if (netMsg != "" && netMsg != undefined)
                document.getElementById("refreshFrame").contentWindow.CheckSession();
        }
        catch (e) {
			if(bSCORM12Enabled == true)
			{
				netMsg = netMsg.replace("</br></br>", " ");
				if(netMsg != ""){
				alert(netMsg);}
			}
        }
    }
    //--krishnab - objec access with  time delay.
    function CheckAllObjectsTimeDelay() {
        if (objAPI == null)
            return;
        for (var j = 0; j < arrAllObjects.length; j++) {
            var timeleft = CheckObjectTimeDelay(arrAllObjects[j].launchpage.split('/')[0], j);
            if (j != arrAllObjects.length - 1) {
                if (timeleft != 0 && (arrAllObjects[j + 1].status == "" || arrAllObjects[j + 1].status == "not attempted")) {
                    for (var i = j + 1; i < arrAllObjects.length; i++) {
                        if (arrAllObjects[i].state == 'visible' && arrAllObjects[j].status != 'incomplete' && arrAllObjects[j].status != '') {
                            arrAllObjects[i].timelefttoaccess = timeleft;
                        }
                        arrAllObjects[i].state = 'disabled';
                        arrAllObjects[i].status = '';
                    }
                }
            }

        }

    }
    function CheckObjectTimeDelay(objId, aid) {
        //        if (objAPI == null)
        //            return 0;
        var timeDelay = arrAllObjects[aid].timeleft;
        if (timeDelay == undefined || timeDelay == "")
            timeDelay = 0;
        if (timeDelay != 0 && timeDelay != "")
            timeDelay = timeDelay * 60;
        var calTime = arrAllObjects[aid].submitedtime;
        if (calTime == undefined || calTime == "")
            calTime = 0;
        if (timeDelay != 0 && calTime != "") {
            var nTotalDiff = new Date().getTime() - arrAllObjects[aid].timegetsubmitted;
            var diifMinutes = Math.floor(nTotalDiff / 1000 / 60);
            if (parseInt(diifMinutes) > 0)
                calTime = parseInt(calTime) + parseInt(diifMinutes);
            if (calTime >= timeDelay)
                timeDelay = 0;
        }
        if (timeDelay != 0) {
            timeDelay = timeDelay - calTime;
        }
        return timeDelay;
    }
    function roundNumber(num, dec) {
        var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
        return result;
    }
//--End- objec access with  time delay.

    function updateVisitedPage(str, val) {        
        /*var temp = "," + str;
        var value = temp.indexOf(val);
        if (value != -1) {
            return true;
        }
        else
            return false;*/
        var visited = false;
        if (str != undefined) {
            for (var i = 0; i < str.length; i++) {
                if (str[i] == val) {
                    visited = true;
                    break;
                }
            }
        }
        return visited;
    }

    function resetTOConRetake() {
        $(".tblTOC div table tr td span").each(function(i) {
            if (isTrack == "yes") {
                if (i > 0 && $(this).attr("SeqID") == SeqID) {
                    $(this).attr("visited", "false");
                    if ($(this).attr("type") == "topic") //Sunny on 12th May 2017
                    $(this).parent().parent().parent().find("img").attr("src", "images/bullet.gif");
                    $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/bullet.gif");
                }
            }
            else {
                if (i > 0) {
                    $(this).attr("visited", "false");
                    if($(this).attr("type") == "topic") //Sunny on 12th May 2017
                    $(this).parent().parent().parent().find("img").attr("src", "images/bullet.gif");
                    $(this)[0].parentNode.parentNode.childNodes[0].childNodes[0].setAttribute("src", "images/bullet.gif");
                }
            }
        });
        trackObjects[SeqID].prevData = "#pgvs_start#1;#pgvs_end#";
        trackObjects[SeqID].suspendData = trackObjects[SeqID].prevData;
		if (IsAICC)
			AICC_Data_Chunk = trackObjects[SeqID].prevData;
		else{
        if (isTrack == "yes")
            LMSTrackSetValue("cmi.suspend_data", trackObjects[SeqID].prevData);
        else
            LMSSetValue("cmi.suspend_data", trackObjects[SeqID].prevData);
		}
        if (tincan.recordStores.length > 0)
            setTinCanSuspendData(trackObjects[SeqID].prevData);
    }

    function gotoPageLink(link) {
        //debugger;
        var counter = 0;
        innerPage = findPagesinTopic(pages[SeqID], counter, link);        
        beforegotoPage();
    }

    function findPagesinTopic(obj, num, link) {
        var linkNum = 0;
        var count = num;
        for (var j = 0; j < obj.length; j++) {
            if (obj[j].type == "topic") {
                linkNum = findPagesinTopic(obj[j].pages, count, link);
            }
            else {
                if (obj[j].url == targetPath+link) {
                    linkNum = count;
                    break;
                }
                count++;
            }

        }
        
        return linkNum
    }

    function ShowHotspot(id) {
        $("#" + id + "").show();
    }
    function HideHotspot(id) {
        $("#" + id + "").hide();
    }
    
    function displayglossary() {
        document.getElementById("glossary").style.display = (document.getElementById("glossary").style.display == "none") ? "" : "none";
    }
    function displayReference() {
        document.getElementById("Reference").style.display = (document.getElementById("Reference").style.display == "none") ? "" : "none";
    }
    function displayhelp() {
        document.getElementById("help").style.display = (document.getElementById("help").style.display == "none") ? "" : "none";
    }
    function openPopup(url, title, props) {
        var src = isTrack == "yes" ? targetPath : "";
        window.open(src + url, title, props);
    }
/**********************************************************************************************************
************This method is used to convert total seconds string format days/minutes/seconds****************
**********************************************************************************************************/
function secondsToString(seconds) {
    var retAlert = "";
    var numdays = Math.floor(seconds / 86400);
    var numhours = Math.floor((seconds % 86400) / 3600);
    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    if (numdays > 0)
        retAlert += numdays + " Day(s) ";
    if (numhours > 0)
        retAlert += numhours + " Hour(s) ";
    if (numminutes > 0)
        retAlert += numminutes + " Minute(s) ";

    return retAlert;

}
/**********************************************************************************************************
************This method is used to get pagecounter text when Singlepage rendering test is there************
**********************************************************************************************************/
function getPageCounterText(current, total) {
    if (isTrack == "no") {
        /*if (current > 2) {
            current = (4 - (trackObjects[SeqID].pages - current));
        }
        */
		var currPage;
		var totPages;
		
		if(current == 1){
		   currPage = 1;
		   if(trackObjects[SeqID].hidesummarypage == "no" && getPageByIndex(getTotalPageInObject(SeqID) - 1).type == "summary"){
		    totPages = 2;
		   }else{
		    totPages = 1;
			disableButtonsonNavigation();
		   }
		}else{
		   
		   if(trackObjects[SeqID].hidesummarypage == "no" && getPageByIndex(getTotalPageInObject(SeqID) - 1).type == "summary"){
		    currPage = 2;
		    totPages = 2;
		   }else{
		    currPage = 1;
		    totPages = 1;
			disableButtonsonNavigation();
		   }
		}
		return "Page " + currPage + " of "+totPages;
    }
    else {

        var tempCount = 0;
        for (var j = 0; j < pages.length; j++) {
            if (j < SeqID) {
                if (trackObjects[j].singleqtnperpage != undefined) {
                    if (trackObjects[j].singleqtnperpage == "no")
                        tempCount += 4;
                    else
                        tempCount += trackObjects[j].pages;
                }
                else
                    tempCount += trackObjects[j].pages;
            }
        }
        var tempInner = 0;
        if (trackObjects[SeqID].singleqtnperpage != undefined) {
            if (trackObjects[SeqID].singleqtnperpage == "no") {

                if (innerPage > 2)
                    tempInner = (4 - (trackObjects[SeqID].pages - (innerPage+1)));
                else
                    tempInner = innerPage+1;
            }
            else
                tempInner = innerPage+1;
        }
        else
            tempInner = innerPage+1;

        currentPage = Number(tempCount + Number(tempInner)) - Number(1);

        return "Page " + Number(Number(currentPage)+Number(1)) + " of " + totalPages;
    }
}
/**********************************************************************************************************
*********This method is used to find total pages in track when Singlepage rendering test is there**********
**********************************************************************************************************/
function updateTotalPages() {
    var _totalPages = 0;
    var _tempPages = 0;
    for (var j = 0; j < pages.length; j++) {
        if (trackObjects[j].singleqtnperpage != undefined) {
            if (trackObjects[j].singleqtnperpage == "no")
                _tempPages = 4;
            else
                _tempPages = trackObjects[j].pages;
        }
        else
            _tempPages = trackObjects[j].pages;


        _totalPages += _tempPages;
            
    }

    return _totalPages;

}
/**********************************************************************************************************/
//krishna -- For IOS offline tracking
function GetOfflinePreviousAnswers() {
//(INST-2271)--Krishna B-- Added for XAPI offline tracking in native apps.
   var preanswer="";
	//if (tc_lrs != null)
    if (tincan.recordStores.length > 0)
	  {
		  
			preanswer=GetTinCanAssessmentData();
		   
	  }
	  else {
		  //preanswer = LMSGetPreviewAnswers();
		  }  
    if (preanswer != null && preanswer != "") {
        prearr = preanswer.split("$");
        var tempPageNum = pages[SeqID][0].pageNumber;
        for (i = 0; i < pages[SeqID].length; i++) {
            if (pages[SeqID][i].type != "topic") {
                if (pages[SeqID][i].pageNumber != "") {
                    var testPageNum = 0;
                    if (isTrack == "yes") {
                        testPageNum = pages[SeqID][i].pageNumber - tempPageNum;
                    }
                    else {
                        testPageNum = pages[SeqID][i].pageNumber;
                    }
                    for (k = 0; k <= prearr.length - 1; k++) {
                        if (prearr[k].split("@")[0] == testPageNum) {
                            if (pages[SeqID][i].Qtype == "longanswer" || pages[SeqID][i].Qtype == "matrix") {
                                pages[SeqID][i].status = "NA";
                                pages[SeqID][i].useranswer = prearr[k].split("@")[1];

                            }
                            else if ((pages[SeqID][i].Qtype == "truefalse") || (pages[SeqID][i].Qtype == "multipleselect") || (pages[SeqID][i].Qtype == "singleselect")) {
                                if (prearr[k].split("@")[2] == "correct")
                                    pages[SeqID][i].status = "correct";
                                else
                                    pages[SeqID][i].status = "incorrect";

                                UserAnswerChoices = "";
                                UserChoices = prearr[k].split("@")[1].split(',');
                                for (j = 0; j < UserChoices.length; j++) {
                                    if (UserAnswerChoices == "")
                                        UserAnswerChoices = (parseInt(UserChoices[j])).toString();
                                    else
                                        UserAnswerChoices = UserAnswerChoices + ',' + (parseInt(UserChoices[j])).toString();
                                }

                                pages[SeqID][i].useranswer = UserAnswerChoices.toString();
                            }
                            if (pages[SeqID][i].Qtype == "fillintheblank") {
                                if (prearr[k].split("@")[2] == "correct")
                                    pages[SeqID][i].status = "correct";
                                else
                                    pages[SeqID][i].status = "incorrect";
                                pages[SeqID][i].useranswer = prearr[k].split("@")[1].split(",");
                            }

                            if (pages[SeqID][i].Qtype == "draganddrop") {
                                if (prearr[k].split("@")[2] == "correct") {
                                    pages[SeqID][i].status = "correct";
                                } else {
                                    pages[SeqID][i].status = "incorrect";
                                }
                                pages[SeqID][i].useranswer = prearr[k].split("@")[1];

                            }
                            break;
                        }
                    }
                }
            }
            else {
                for (m = 0; m < pages[SeqID][i].pages.length; m++) {
                    if (pages[SeqID][i].pages[m].type != "topic") {
                        if (pages[SeqID][i].pages[m].pageNumber != "") {
                            var testPageNum = 0;
                            if (isTrack == "yes") {
                                testPageNum = pages[SeqID][i].pages[m].pageNumber - tempPageNum;
                            }
                            else {
                                testPageNum = pages[SeqID][i].pages[m].pageNumber;
                            }
                            for (k = 0; k <= prearr.length - 1; k++) {

                                if (prearr[k].split("@")[0] == testPageNum) {
                                    if (pages[SeqID][i].pages[m].Qtype == "longanswer" || pages[SeqID][i].pages[m].Qtype == "matrix") {
                                        pages[SeqID][i].pages[m].status = "NA";
                                        pages[SeqID][i].pages[m].useranswer = prearr[k].split("@")[1];

                                    }
                                    else if ((pages[SeqID][i].pages[m].Qtype == "truefalse") || (pages[SeqID][i].pages[m].Qtype == "multipleselect") || (pages[SeqID][i].pages[m].Qtype == "singleselect")) {
                                        if (prearr[k].split("@")[2] == "correct")
                                            pages[SeqID][i].pages[m].status = "correct";
                                        else
                                            pages[SeqID][i].pages[m].status = "incorrect";

                                        UserAnswerChoices = "";
                                        UserChoices = prearr[k].split("@")[1].split(',');
                                        for (j = 0; j < UserChoices.length; j++) {
                                            if (UserAnswerChoices == "")
                                                UserAnswerChoices = (parseInt(UserChoices[j])).toString();
                                            else
                                                UserAnswerChoices = UserAnswerChoices + ',' + (parseInt(UserChoices[j])).toString();
                                        }
                                        pages[SeqID][i].pages[m].useranswer = UserAnswerChoices.toString();
                                    }
                                    if (pages[SeqID][i].pages[m].Qtype == "fillintheblank") {
                                        if (prearr[k].split("@")[2] == "correct")
                                            pages[SeqID][i].pages[m].status = "correct";
                                        else
                                            pages[SeqID][i].pages[m].status = "incorrect";
                                        pages[SeqID][i].pages[m].useranswer = prearr[k].split("@")[1].split(",");
                                    }
                                    if (pages[SeqID][i].pages[m].Qtype == "draganddrop") {
                                        if (prearr[k].split("@")[2] == "correct") {
                                            pages[SeqID][i].pages[m].status = "correct";
                                        } else {
                                            pages[SeqID][i].pages[m].status = "incorrect";
                                        }
                                        pages[SeqID][i].pages[m].useranswer = prearr[k].split("@")[1];
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        for (n = 0; n < pages[SeqID][i].pages[m].pages.length; n++) {
                            if (pages[SeqID][i].pages[m].pages[n].pageNumber != "") {
                                var testPageNum = 0;
                                if (isTrack == "yes") {
                                    testPageNum = pages[SeqID][i].pages[m].pages[n].pageNumber - tempPageNum;
                                }
                                else {
                                    testPageNum = pages[SeqID][i].pages[m].pages[n].pageNumber;
                                }
                                for (k = 0; k <= prearr.length - 1; k++) {
                                    if (prearr[k].split("@")[0] == testPageNum) {
                                        if (pages[SeqID][i].pages[m].pages[n].Qtype == "longanswer" || pages[SeqID][i].pages[m].pages[n].Qtype == "matrix") {
                                            pages[SeqID][i].pages[m].pages[n].status = "NA";
                                            pages[SeqID][i].pages[m].pages[n].useranswer = prearr[k].split("@")[1];
                                        }
                                        else if ((pages[SeqID][i].pages[m].pages[n].Qtype == "truefalse") || (pages[SeqID][i].pages[m].pages[n].Qtype == "multipleselect") || (pages[SeqID][i].pages[m].pages[n].Qtype == "singleselect")) {
                                            if (prearr[k].split("@")[2] == "correct")
                                                pages[SeqID][i].pages[m].pages[n].status = "correct";
                                            else
                                                pages[SeqID][i].pages[m].pages[n].status = "incorrect";
                                            UserAnswerChoices = "";
                                            UserChoices = prearr[k].split("@")[1].split(',');
                                            for (j = 0; j < UserChoices.length; j++) {
                                                if (UserAnswerChoices == "")
                                                    UserAnswerChoices = (parseInt(UserChoices[j])).toString();
                                                else
                                                    UserAnswerChoices = UserAnswerChoices + ',' + (parseInt(UserChoices[j])).toString();
                                            }
                                            pages[SeqID][i].pages[m].pages[n].useranswer = UserAnswerChoices.toString();
                                        }
                                        if (pages[SeqID][i].pages[m].pages[n].Qtype == "fillintheblank") {
                                            if (prearr[k].split("@")[2] == "correct")
                                                pages[SeqID][i].pages[m].pages[n].status = "correct";
                                            else
                                                pages[SeqID][i].pages[m].pages[n].status = "incorrect";
                                            pages[SeqID][i].pages[m].pages[n].useranswer = prearr[k].split("@")[1].split(",");
                                        }
                                        if (pages[SeqID][i].pages[m].pages[n].Qtype == "draganddrop") {
                                            if (prearr[k].split("@")[2] == "correct") {
                                                pages[SeqID][i].pages[m].pages[n].status = "correct";
                                            } else {
                                                pages[SeqID][i].pages[m].pages[n].status = "incorrect";
                                            }
                                            pages[SeqID][i].pages[m].pages[n].useranswer = prearr[k].split("@")[1];
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// --End -- IOS offline tracking.

////////////////////////////////////// SHOW HIDE CC TEXT/////////////////////////////////////////////
function showHideTranscript() {
if(ccstate == "off"){
if($('#ccTextID').html() != undefined || $('#ccTextID').html() != null || $('#ccTextID').html() != "null"){
$('#ccPopup').html($('#ccTextID').html());
$('#openccPopup').show();
$("#ccBtn").removeClass("ccopen-btn")
$("#ccBtn").addClass("cc-btn");
ccstate = "on"
			$('.full-expand').hide();
}
}
else{
$('#openccPopup').hide();
ccstate = "off"
$("#ccBtn").removeClass("cc-btn")
$("#ccBtn").addClass("ccopen-btn");
if ($(window).width() < 550) {
		$('.full-expand').show();
}
}
/* $("#ccPopup").fadeIn()
.css({top:700,position:'absolute'})
.animate({top:600}, 400, function() {
    //callback
}); */
//$('#ccPopup').animate({height:divHt, top:700, marginTop:40},200);
//$('#ccPopup').animate({bottom: '+=10'}, 1000, 'linear')
    //alert($('#ccTextID').html());
	//alert($('#ccPopup').html());
}

function remPageCount() {
    var prevPageNums = 0;
    for (var i = 0; i < SeqID; i++) {
        if (trackObjects[i].pages) {
            prevPageNums += trackObjects[i].pages;
            if (trackObjects[i].type == "Assessment") {
                prevPageNums -= Number(3);
            }
        }
    }
    return prevPageNums;
}

function disableKeyFocusOnRadio() {
    $('[id^="inst_op"]').keydown(function (e) {
        if (e.which > 36 && e.which < 41) {
            e.preventDefault();
        }
    });

}

function addMathMLCallBack(divId){
    if (trackObjects[SeqID].enableMathML == "yes") {
        var pg = document.getElementById(divId);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, pg]);
    }
			
}

function checkForMAthML2() {
    if (trackObjects[SeqID].enableMathML == "yes") {
       /* var s2 = document.createElement("script");
        s2.type = "text/javascript";
        s2.src = "scripts/mathJaxSupport.js";
        $("head").append(s2);
        */
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML";
        $("head").append(s);
    }
}

function renderQuestionMathML(str) {
    var LastCharacter = 0;
    while (str.indexOf("Â«math xmlns", LastCharacter) != -1) {
        var SearchForThis = "<img align="
        var SeachForThis2 = ">"
        var FirstCharacter = str.indexOf(SearchForThis, LastCharacter)   //24
        LastCharacter = str.indexOf(SeachForThis2, FirstCharacter)   //314
        //var findStr = str.substring(FirstCharacter, (LastCharacter - FirstCharacter))
        var findStr = str.substring(FirstCharacter, (LastCharacter + 1))
        var mathStr = getMathString(findStr)
        if (mathStr != "") {
            str = str.replace(findStr, mathStr)
            LastCharacter = str.indexOf(mathStr)
            LastCharacter = LastCharacter + mathStr.length - 1   //120
        }
    }
    str = str.replace(/Â«/g, "<");
    str = str.replace(/Â»/g, ">");
    str = str.replace(/Â¨/g, '"');
    str = str.replace(/Â§#160;/g, '&nbsp;');
    str = str.replace(/Â§/g, '&');
    return str
}

function getMathString(str) {
    var LastCharacterLength = 7
    var SearchForThis = "Â«math xmlns="
    var SeachForThis2 = "Â«/mathÂ»"
    var FirstCharacter = str.indexOf(SearchForThis)
    var LastCharacter = str.indexOf(SeachForThis2)
    LastCharacter = LastCharacter + LastCharacterLength
    var findStr = str.substring(FirstCharacter, (LastCharacter))
    return findStr
}

function loadWidgetXML(filename) {
    $.ajax({
        url: filename,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
           setTimeout(function(){parsePageXML(xml)},1000);
		   if (isTrack == "no")
            loadContentLibrary2("content/pages/Contentlibrary.xml");
            else
            loadContentLibrary2(targetPath + "content/pages/Contentlibrary.xml");
        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}
function parsePageXML(pgxml) {
    pageXML = pgxml;
    $(pgxml).find("pageobject").each(function () {
        var pgObjType = $(this).attr("type");
        if (pgObjType == "matchgame") {
            var game = new Matchgame($(this));
            pageMatchWidgetArr.push(game);
        }
        if (pgObjType == "hangman") {
            var game = new HangMan($(this));
            pageMatchWidgetArr.push(game);
        }
    });
}

function loadContentLibrary2(filename) {
    $.ajax({
        url: filename,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
		
            contentLibXML = xml;

        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}

function clearMatchWidgets(){
	for(var i=0;i<pageMatchWidgetArr.length;i++){
     var game = pageMatchWidgetArr[i];
	 game.clearGameTimer();
	}
pageMatchWidgetArr = [];
}





function isiPad(){
    return (navigator.platform.indexOf("iPad") != -1);
}
function loadjPlayerVideo(objId){
	var jp = "#jquery_jplayer_"+objId;
	var jpContainer = "#jp_container_"+objId;
	var instDiv = $(jpContainer).parent();
    var videoHt = $(instDiv).height();
	var isMobileDevices = getMobileUserAgent();
	var layerId = $(jp).attr("layerId");
	var tabcontentid = $(jp).attr("tabcontentid");
	var cntrlsHt = 70;	   
	videoHt = Math.round(videoHt-cntrlsHt)
	var autoplay = $(jp).attr("isautoplay");
	var isplaypause = $(jp).attr("isplaypause");
	var isAutoPlay = false;
	var jplayerHt = "100%";
  $(jp).jPlayer({
		ready: function () {
			var m4vFormat = $(this).attr("m4v");
			var ogvFormat = $(this).attr("ogv");
			var webMFormat = $(this).attr("webmv");
			$(this).jPlayer("setMedia", {
				title: "Big Buck Bunny",
				m4v: m4vFormat,
				ogv: ogvFormat,
				webmv: webMFormat
				//poster: "images/poster.png"
				
			});
		    $(jpContainer).find(".jp-controls-holder").find(".jp-toggles").width("auto");
			//console.log(isMobileDevices)
			if (autoplay == "true" && isMobileDevices == false && layerId == "") {// && tabcontentid == ""
			     $(this).jPlayer("play");
			     isAutoPlay = true;
			}
			else {
			    $(this).jPlayer("load");
			}
			
			if(isplaypause == "false"){
			$(".jp-controls").removeClass("enable-jp-controls-border").addClass("disablejp-controls-border");
			  }
			  else{
				$(".jp-controls").removeClass("disablejp-controls-border").addClass("enable-jp-controls-border");
			  }
		   var screenWidth = $( window ).width();
		   //alert($( window ).height())
		   if(screenWidth >=971){
		       
		       updateWebPlayer(jpContainer, videoHt, isAutoPlay, instDiv);
		   }
		   else if(screenWidth >= 890){
			   
			   updateWebPlayer(jpContainer, videoHt, isAutoPlay, instDiv);
		      }
		      else{
		       
		       updateWebPlayer(jpContainer, videoHt, isAutoPlay, instDiv);
		    }
			
			/*$("a.jp-full-screen").click(function(){
			  if($(this).attr("title")=="full screen"){
			  }
		    })*/
  
			  $("a.jp-restore-screen").click(function(){
				 if($(this).attr("title")=="restore screen"){
				 var jpVideoHt = $(jpContainer).find(".jp-jplayer").attr("videoheight");
				 $(jpContainer).find(".jp-jplayer").height(jpVideoHt);
				 }
			 })
			 
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},

		ended: function() { 
		// The $.jPlayer.event.ended event
    },
        
		swfPath: "js",
		supplied: "m4v,ogv,webmv",
        cssSelectorAncestor: "#jp_container_"+objId,
		size: {
		    width: "100%",
		    height: jplayerHt,
		    cssClass: "jp-video-360p"
		},
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: false,
		toggleDuration: false
	});
  return;
}

function updateWebPlayer(jp, videoHt, isAutoPlay, instDiv) {
    var vidWd = $(instDiv).width();
    var vidOrgWd = $(jp).find(".jp-jplayer").attr("videowidth");
    var vidOrgHt = $(jp).find(".jp-jplayer").attr("videoheight");
    var aspect = Number(vidOrgHt) / Number(vidOrgWd);
    var vidHt = (vidWd * aspect);
	var tabcontentid = $(jp).attr("tabcontentid");

    /*try {
        if (tabcontentid != "") {
            vidHt = videoHt;
        }
    } catch (e) { }*/

    if(isAutoPlay == false){
        $(jp).find("#jp_video_0").height("auto");
        $(jp).find(".jp-jplayer").height(vidHt);
        $(jp).find(".jp-video-play").css({ "display": "block", "height": vidHt + "px", "margin-top": -vidHt + "px" })
		//var objVidHt = $(jp).find("#jp_video_0").height();

	}
    else {
        $(jp).find("#jp_video_0").height("auto");
        $(jp).find(".jp-video-play").css({ "display": "none" })
        $(jp).find(".jp-jplayer").height(vidHt);
        /* Video Height Auto Version
		setTimeout(function () {
		    var objVidHt = $(jp).find("#jp_video_0").height();
		    $(jp).find(".jp-jplayer").height(objVidHt);
		   // alert(objVidHt);
		    $(jp).height(objVidHt);
		}, 1000);
        */
	}
	$(jp).find(".jp-jplayer").attr("videoheight",vidHt);
}

//window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
	//alert(window.orientation);
//	$("#instmaintable > div").find(".jp-video jp-video-360p").each(function(){
		//alert($(this).attr("id"))
	//})

//}, false);

//window.addEventListener("resize", function() {
	//consloe.log(inner/outerWidth, inner/outerHeight)
	
//}, false);

//function updateOrientation(e){
 // $("#videoPlayer").jPlayer("size", {width: "1024px", height: "576px"}) ;
//}

function getMobileUserAgent() {
    var isMobil = false;
    if (navigator.userAgent.match(/iPad/i)) {
        isMobil = true;
    }

    if (navigator.userAgent.match(/iPhone/i)) {
        isMobil = true;
    }


    if (navigator.userAgent.match(/Android/i)) {
        isMobil = true;
    }



    if (navigator.userAgent.match(/BlackBerry/i)) {
        isMobil = true;
    }


    if (navigator.userAgent.match(/webOS/i)) {
        isMobil = true;
    }
    return isMobil;
}

function addinstClass() {
    var isMobile = true; //getMobileUserAgent();
    var isTimelinePage = isTimeline();
    var parentDiv;
	var isSinglePageRendering = trackObjects[SeqID].singleqtnperpage;
    if (isMobile == true) {
        /*$("#instmaintable div").each(function () {
            if (isTimelinePage == "yes")
                parentDiv = $(this).parent().parent().parent().parent().parent().attr("id");
            else
                parentDiv = $(this).parent().parent().parent().parent().attr("id");
            var isLayers = $(this).hasClass("layers");
            if (parentDiv == "instmaintable" && isLayers == false) {
                $(this).attr("myclass","instmaintable");
            }

        })*/

        $("table[id^='instmaintable'] div").each(function () {
		if(isSinglePageRendering == "no"){
			 parentDiv = $(this).parent().parent().parent().parent().attr("id");
		}
            else if (isTimelinePage == "yes"){
                parentDiv = $(this).parent().parent().parent().parent().parent().attr("id");
           } else{
                parentDiv = $(this).parent().parent().parent().parent().attr("id");
				}
            var isLayers = $(this).hasClass("layers");

            if (parentDiv != undefined) {
                if (parentDiv.indexOf("instmaintable") != -1 && isLayers == false) {
                    $(this).attr("myclass", "instmaintable");
                }
            }

        })
        ////////////////////////////////// mobile rendering of media elements in option /////////////////////////// 
        var pgType = getCoValues("Qtype").toLowerCase();
        if (pgType == "singleselect" || pgType == "truefalse" || pgType == "multipleselect") {
            $("table[id^='instmaintable']").find("div[class='textArea-content'] div").attr("myclass", "instmaintable");
        }
        var width = $(window).width();
        if (width <= 550) {
            $("table[id^='instmaintable']").find("div[class='textArea-content'] div").css("display", "inherit");
        }
        ////////////////////////////////// mobile rendering of media elements in option /////////////////////////// 
    }
}

function getLAattachPopup(val,type,id) {    
    // for essay question enhancement
    if (type == "videocapupload") {
	    attachmentType  = type;
        currCapVideoObjId = id;
    } else if (type == "imagecapupload") {
	    attachmentType  = type;
        currCapImageObjId = id;
    } else {
        type = "file";
    }
    attachCountLA = val;
    //-Krishna B - (6.6)Added changes for Native app File Attachement for Essay question Type
    if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
        var resfileDetails;
        if (fnGetQueryString("cid") != "")
            resfileDetails = MobileJSInterface.AddOfflineAttachementWithQuesid(innerPage);
        else
            resfileDetails = window.parent.MobileJSInterface.AddOfflineAttachementWithQuesid(innerPage);
    } else
        window.parent.UploadLongAnswer(type);

    if (isTimeline().toLowerCase() == "yes") {
        onPauseClick();
    }
}

function UpdateAttachFiles(idVal,fileNames)
{
	for (var k=0; k < trackObjects[SeqID].attachfilesno;k++ )  // hide all attach files...    
			{
			   $('#attachContentDetails_'+ idVal +"_" + (parseInt(k)+1)).hide();
			   $('#fileNameDiv_' + idVal + "_" + (parseInt(k)+1)).html("");
			}
			fileIds =  this['fileId' + idVal];
		if (fileNames != undefined){
			if (fileNames.length > 0)
			{
				var attachfilesset = fileNames.split("$$$");
				var attachidsset = fileIds.split("$$$");
				if (attachfilesset.length > 0)
				{
					for (var z=0; z < attachfilesset.length;z++ )
					{
						$('#attachContentDetails_'+ idVal + "_" + (parseInt(z)+1)).show();
						$('#fileNameDiv_'+ idVal + "_" + (parseInt(z)+1)).html(attachfilesset[z]);
						$('#fileIdDiv_'+ idVal + "_" + (parseInt(z)+1)).html(attachidsset[z]);
					}
				}
			}
		}	

}
function RemoveAttachfile(removeItem,removeId,attachfiles,idVal)
{
	//var attachfiles =  fileName1;
	if (attachfiles.length > 0)
	{
		var attachfilesset = attachfiles.split("$$$");
		var attachidsset = this['fileId' + idVal].split("$$$");
		if (attachidsset.length > 0){
			 attachidsset.splice($.inArray(removeId,attachidsset) ,1 );
			 this['fileId' + idVal] = attachidsset.join("$$$");			 
		}
		if (attachfilesset.length > 0){
			 attachfilesset.splice($.inArray(removeItem,attachfilesset) ,1 );
			     
			 UpdateAttachFiles(idVal,attachfilesset.join("$$$"));
			  this['fileName' + idVal] = attachfilesset.join("$$$");
			}
	}
	
}
function updateAttachContentDetails(fName, str, idVal, type,fid) {
//debugger;
var fileslist = "fileName" & idVal
fileslist = fName;

    if(type != "videocapupload" && type != "imagecapupload" ){
		if (fName != '' && str == '') {
			if (fileslist == "")
				Attachfilescount = 0;
			else
				Attachfilescount = fileslist.split("$$$").length;
			if ( parseInt(trackObjects[SeqID].attachfilesno) > Attachfilescount)
			{	
			UpdateAttachFiles(idVal,fName);
			//$("#attachContent_1").find("a").html("attach files(" + (parseInt(trackObjects[SeqID].attachfilesno) - parseInt(Attachfilescount)) +")"); 
			$("#attachContent_"+ idVal).find("a").html("attach files(" + (parseInt(trackObjects[SeqID].attachfilesno) - parseInt(Attachfilescount)) +")"); 
			//$('#attachContentDetails_' + idVal).show();
			//$('#fileNameDiv_' + idVal).html(fName);
			}
		 else{
			UpdateAttachFiles(idVal,fName);
			$('#attachContent_' + idVal).hide();
			//$('#attachContentDetails_' + idVal).show();
			//$('#fileNameDiv_' + idVal).html(fName); $("#attachContent_1").find("a").html("")
			 }
			
		}
		else if (fName != '' && str == 'remove') {
			 
			RemoveAttachfile($('#fileNameDiv_'+ idVal+"_" + removefileId).text(),$('#fileIdDiv_'+ idVal + "_" + removefileId).text(),fName,idVal);
			fileslist = this['fileName' + idVal];
			if (fileslist == "")
				Attachfilescount = 0;
			else
				Attachfilescount = fileslist.split("$$$").length;
			if ( parseInt(trackObjects[SeqID].attachfilesno) > Attachfilescount){
				$("#attachContent_" + idVal).find("a").html("attach files(" + (parseInt(trackObjects[SeqID].attachfilesno) - parseInt(Attachfilescount)) +")"); 
				$('#attachContent_' + idVal).show();
				}else{
				$('#attachContent_' + idVal).hide();	
				}
				this['fileName' + idVal] = fileslist;
			 
		}
		else {

		    if (fileslist == "")
		        Attachfilescount = 0;
		    else
		        Attachfilescount = fileslist.split("$$$").length;
		    $("#attachContent_" + idVal).find("a").html("attach files(" + (parseInt(trackObjects[SeqID].attachfilesno) - parseInt(Attachfilescount)) + ")");
		    $('#attachContent_' + idVal).show();
		    $('#attachContentDetails_' + idVal).hide();
		    $('#fileNameDiv_' + idVal).html("");
		    this['fileName' + idVal] = "";

		}
    } else if (type == "videocapupload") {
        var path;
        if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
            
            if (fnGetQueryString("cid") != "")
                path = "mediaresource/mediacapture/" + fid;
            else
                path = window.location.origin + "/content/SiteFiles/UserDocuments/" + fid;

        } else {
            path = window.location.origin + "/content/SiteFiles/UserDocuments/" + fid;
        }
        if (fid != undefined && fid != "" && fid != "undefined") {
            $("#vidCaptureLoader_" + currCapVideoObjId).css("display", "none");
            $("#videocapture_" + currCapVideoObjId)[0].setAttribute("src", path);
            $("#removeVideo_" + currCapVideoObjId).css("display", "");
			$("#play_" + currCapVideoObjId).css("display", "");	
            $("#videocapture_" + currCapVideoObjId)[0].addEventListener("loadedmetadata", function (event) {			    
				var duration = $(event.target)[0].duration;
				$('#durationVideo_'+currCapVideoObjId).html(getTimeFromSeconds(duration));
            });			
        }	
    } else if (type == "imagecapupload") {
        var path;
        if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
            
            if (fnGetQueryString("cid") != "")
                path = "mediaresource/mediacapture/" + fid;
            else
                path = window.location.origin + "/content/SiteFiles/UserDocuments/" + fid;

        } else {
            path = window.location.origin + "/content/SiteFiles/UserDocuments/" + fid;
        }
        if (fid != undefined && fid != "" && fid != "undefined") {
            $("#imgCaptureLoader_" + currCapImageObjId).css("display", "none");
            $("#capturedImgDiv_" + currCapImageObjId).find("img").css("opacity",1);
            $("#capturedImgDiv_" + currCapImageObjId).find("img").attr("src", path);
            $("#capturedImgDiv_" + currCapImageObjId).find("img").css("height", "auto");
            $("#capturedImgDiv_" + currCapImageObjId).find("img").css("width", "auto");
            $("#capturedImgDiv_" + currCapImageObjId).find("img").addClass("img-responsive");
            $("#removeImage_" + currCapImageObjId).css("display", "");
        }
	}
    attachmentType = "";
    if (isTimeline().toLowerCase() == "yes") {
        onPlayClick();
    }
}

function chkIsLearnerMode(bol) {
    var val = false;
    if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || fnGetQueryString("cid") != "")
        val = bol;
    else
        val = false;

    return val
}

function fnUploadfile(fid, fname) {
 if (isTimeline().toLowerCase() == "yes") {
		onPlayClick();
 }
    //debugger;
     // for essay question enhancement
	 if(attachmentType == "videocapupload"){
	   this['capVidFileName' + attachCountLA] = fname;
       this['capVidFileId' + attachCountLA] = fid;
	 }else if(attachmentType == "imagecapupload"){
	   this['capImgFileName' + attachCountLA] = fname;
       this['capImgFileId' + attachCountLA] = fid;
	 }else{
	 // for essay question enhancement
	  if (this['fileName' + attachCountLA] == "" || this['fileName' + attachCountLA] == undefined)
	  {  this['fileName' + attachCountLA] = fname;
		fname = this['fileName' + attachCountLA];
	} 
   else{	 
		this['fileName' + attachCountLA] = this['fileName' + attachCountLA] + "$$$" + fname;
		fname = this['fileName' + attachCountLA];
   }

   if (this['fileId' + attachCountLA] == "" || this['fileId' + attachCountLA] == undefined)   
       this['fileId' + attachCountLA] = fid;
   else
	   this['fileId' + attachCountLA] = this['fileId' + attachCountLA] + "$$$" + fid;
	 }// for essay question enhancement
	 
	 updateAttachContentDetails(fname, '', attachCountLA, attachmentType,fid);
}
function getAttachedContentData(qType, qData, i) {
//debugger;
    if (qType.Qtype == "longanswer") {
    //-Krishna B - (INST-6454)Added changes for Native app File Attachement for Essay question Type
        if (nativeCID == "") {
            var fName = qData.split("##@@##")[3];
            if (fName != undefined || fName != "" || fName != null)
                qType.filename = fName;

            var fId = qData.split("##@@##")[4];
            if (fId != undefined || fId != "" || fId != null)
                qType.fileid = fId;
	    // for essay question enhancement		
			var capVidFile = qData.split("##@@##")[6];
            if (capVidFile != undefined || capVidFile != "" || capVidFile != null)
                qType.capturedvidfilename = capVidFile;	
				
			var capVidId = qData.split("##@@##")[7];
            if (capVidId != undefined || capVidId != "" || capVidId != null)
                qType.capturedvidid = capVidId;	
				
			var capImgFile = qData.split("##@@##")[8];
            if (capImgFile != undefined || capImgFile != "" || capImgFile != null)
                qType.capturedimgfilename = capImgFile;

            var capImgId = qData.split("##@@##")[9];
            if (capImgId != undefined || capImgId != "" || capImgId != null)
                qType.capturedimgid = capImgId;				
	    // for essay question enhancement	
        }
        else {
            var fName = qData.split("@")[3];
            if (fName != undefined || fName != "" || fName != null)
                qType.filename = fName;

            var fId = qData.split("@")[4];
            if (fId != undefined || fId != "" || fId != null)
                qType.fileid = fId;
	    // for essay question enhancement	
			var capVidFile = qData.split("@")[6];
            if (capVidFile != undefined || capVidFile != "" || capVidFile != null)
                qType.capturedvidfilename = capVidFile;	
				
			var capVidId = qData.split("@")[7];
            if (capVidId != undefined || capVidId != "" || capVidId != null)
                qType.capturedvidid = capVidId;	
				
			var capImgFile = qData.split("@")[8];
            if (capImgFile != undefined || capImgFile != "" || capImgFile != null)
                qType.capturedimgfilename = capImgFile;

            var capImgId = qData.split("@")[9];
            if (capImgId != undefined || capImgId != "" || capImgId != null)
                qType.capturedimgid = capImgId;	
	    // for essay question enhancement		
        }
    }
    else {
        return
    }
}
function SwipePage(getsture) {
    if (isAudioPop == false) {
    if (getsture == "right") {
        $("#backBtn").click();
    }
    else {
        $("#nextBtn").click();
        }
    }
}

function getPageByObjectIndex(ind) {
    var pageNum = 0;
    for (var k = 0; k < SeqID; k++) {
        pageNum += getTotalPageInObject(k);
    }
    pageNum += ind;
    return getPageByIndex(pageNum);
}

function setCOValuesbyObjectIndex(ind, valueName, value) {
    var pageNum = 0;
    for (var k = 0; k < SeqID; k++) {
        pageNum += getTotalPageInObject(k);
    }
    pageNum += ind;
    setCOPageValues(pageNum, valueName, value);
}

function AutoRetakeTest() {
	if (isrelaunchsummarydirectly == false)
		LMSSetRawScore(0);
    retakeClicked = true;
    strLessonStatus = "incomplete";
    LMSSetLessonStatus("incomplete");
    pages[SeqID].status = "incomplete";
    LMSRetakeAssessmentData();
    isrelaunchsummarydirectly = false;
    for (i = 0; i < totalPages; i++) {
        var objPage = getPageByIndex(i);
        // if (objPage.type != "page" && objPage.type != "summary") {
        if (objPage.Qtype == "singleselect" || objPage.Qtype == "truefalse" || objPage.Qtype == "multipleselect" || objPage.Qtype == "longanswer" || objPage.Qtype == "fillintheblank" || objPage.Qtype == "draganddrop" || objPage.Qtype == "matrix") {
            objPage.useranswer = "";
            objPage.status = "";
            if (objPage.filename != undefined) {
                objPage.filename = "";
            }
            if (objPage.fileid != undefined) {
                objPage.fileid = "";
            }
            if (objPage.capturedvidfilename != undefined) {
                objPage.capturedvidfilename =  "";
            }
            if (objPage.capturedvidid != undefined) {
                objPage.capturedvidid = "";
            }
            if (objPage.capturedimgfilename != undefined) {
                objPage.capturedimgfilename = "";
            }
            if (objPage.capturedimgid != undefined) {
                objPage.capturedimgid = "";
            }
        }
    }

    
    innerPage = 0;
    //if (pages[SeqID][0].type == "page")
      //  innerPage = 1;
    submitted = false;
    resetTOConRetake();
}

//***************************** RANDOMIZATION **********************************************//
function shuffleArray(arr) {
    var i = arr.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        // swap randomly chosen element with current element
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function randomizePages(arr) {
    //debugger;
    var pagesArr = arr;
    var backupSummaryPage = ""
    var openingPage = "";
    var closingPage = "";

    if (pagesArr[pagesArr.length - 1].type == "summary") {
        backupSummaryPage = pagesArr.pop();
    }
    if (getPageTitle(pagesArr[0])/*pagesArr[0].title*/ == "Instructions" && pagesArr[0].qPageId == "" && pagesArr[0].type == "page") {
	    openPageAdded = true;
        openingPage = pagesArr.shift();
    }
    if (getPageTitle(pagesArr[pagesArr.length - 1])/*pagesArr[pagesArr.length - 1].title*/ == "Close" && pagesArr[pagesArr.length - 1].qPageId == "" && pagesArr[pagesArr.length - 1].type == "page") {
        closingPage = pagesArr.pop();
    }
    var onlyPagesArray = new Array();
    var topicsObjectArray = new Array();
    for (var i = 0; i < pagesArr.length; i++) {
        var element = pagesArr[i];
        if (element.type == "topic" && element.pages.length > 0) {
            var object = new Object();
            object.index = i;
            element.pages = randomizeTopics(element.pages);
            object.element = element;
            topicsObjectArray.push(object);
        } else {
            onlyPagesArray.push(element);
        }
    }
    if (trackObjects[SeqID].topicLevelPool == 'yes' || trackObjects[SeqID].topicLevelPoolWithDiff == 'yes') {
       
    }
    else {
        onlyPagesArray = shuffleArray(onlyPagesArray);
    }
    if (topicsObjectArray.length > 0) {
        var len = topicsObjectArray.length;
        for (var j = 0; j < len; j++) {
            var ind = topicsObjectArray[j].index;
            var ele = topicsObjectArray[j].element;
            onlyPagesArray.splice(ind, 0, ele);
        }
    }
	if(openingPage != ""){
	  onlyPagesArray.unshift(openingPage);
	}
	if(closingPage != ""){
	  onlyPagesArray.push(closingPage);
	}
	if(backupSummaryPage != ""){
      onlyPagesArray.push(backupSummaryPage);
	}
    return onlyPagesArray;
}

function randomizeTopics(arr) {
    var topicsArray = new Array();
    var subTopicsObjectArray = new Array();
    for (var i = 0; i < arr.length; i++) {
        var topicElement = arr[i];
        if (topicElement.type == "topic" && topicElement.pages.length > 0) {
            var object = new Object();
            object.index = i;
            topicElement.pages = shuffleArray(topicElement.pages);
            object.topicElement = topicElement;
            subTopicsObjectArray.push(object);
        } else {
            topicsArray.push(topicElement);
        }
    }
    topicsArray = shuffleArray(topicsArray);

    if (subTopicsObjectArray.length > 0) {
        var len = subTopicsObjectArray.length;
        for (var j = 0; j < len; j++) {
            var ind = subTopicsObjectArray[j].index;
            var ele = subTopicsObjectArray[j].topicElement;
            topicsArray.splice(ind, 0, ele);
        }
    }
    return topicsArray;
}

function getNumberOfPrevPages() {
    var obj = new Object();
    var pageNum = 0;
    for (var i = 0; i < SeqID; i++) {
        if (trackObjects[i].pages) {
            pageNum += trackObjects[i].pages;
        }
    }
    return pageNum;
}

function matchWithRandomizedPageArray(arr) {
    //debugger;
    var randomizedArray = new Array();
    var pgsArray = pages[SeqID];
    var compArray = getTotalPages(pgsArray);
    for (var i = 0; i < compArray.length; i++) {
        var objId = compArray[i].qPageId;
        var randObj = getElementWithId(objId, arr);
		if(randObj != "")
           randomizedArray.push(randObj);
    }
    return randomizedArray;
}

function getElementWithId(id, arr) {
    var obj = "";
    for (var j = 0; j < arr.length; j++) {
        var objec = arr[j];
		if(objec != undefined){
			if (id == objec.questionPageId) {
				obj = objec;
				break;
			}
		}
    }
    return obj;
}

function getTotalPages(arr) {
    var pagesArr = arr;
    var newArray = new Array();
    for (var i = 0; i<pagesArr.length; i++) {
        var element = pagesArr[i];
        if (element.type == "topic" && element.pages.length > 0) {
            var subPageArr = element.pages;
            for (var j = 0; j < subPageArr.length; j++) {
                var subElement = subPageArr[j];
                if (subElement.type == "topic" && subElement.pages.length > 0) {
                    var subTpcArray = subElement.pages;
                    for (var k = 0; k < subTpcArray.length; k++) {
                        newArray.push(subTpcArray[k]);
						randomizedPageObjectsArray.push(subTpcArray[k]);
                    }
                } else {
                    newArray.push(subElement);
					randomizedPageObjectsArray.push(subElement);
                }
            }
        } else {
            newArray.push(element);
			randomizedPageObjectsArray.push(element);
        }
    }
    return newArray;
}
function getQueSeqArray() {
    //debugger;
    randomQuesSeqArray = new Array();
    var pgsArray = pages[SeqID];
    var compArray = getTotalPages(pgsArray);
    for (var i = 0; i < compArray.length; i++) {
        var obj = compArray[i];
        try {
            if (obj.actualPageNumber != undefined) {
                randomQuesSeqArray.push(obj.actualPageNumber);
            } else {
                randomQuesSeqArray.push(obj.pageNumber);
            }
          
		}catch(e){
		  randomQuesSeqArray.push(obj.pageNumber);
		}
    }
    console.log(randomQuesSeqArray.join());
}

function rearrangePagesAsPerSeq(arr, seqArr) {
    //debugger;
    var tempArray = arr;
    var str = seqArr.join();
    var seqArray = str.split(",");
    var summaryPgBakup = ""; 
    var openingPage = "";
    var closingPage = "";
    if (tempArray[tempArray.length - 1].type == "summary") {
        summaryPgBakup = tempArray.pop();
        seqArray.pop();
    }
    if (getPageTitle(tempArray[0])/*tempArray[0].title*/ == "Instructions" && tempArray[0].qPageId == "" && tempArray[0].type == "page") {
	    openPageAdded = true;
        openingPage = tempArray.shift();
		seqArray.shift();
    }
    if (getPageTitle(tempArray[tempArray.length - 1])/*tempArray[tempArray.length - 1].title*/ == "Close" && tempArray[tempArray.length - 1].qPageId == "" && tempArray[tempArray.length - 1].type == "page") {
        closingPage = tempArray.pop();
		seqArray.pop();
    }
    var noOfMainNodes = tempArray.length;
    var topicSeqArray = new Array();
    var totalSeqPagesArray = new Array();
    
    var fromInd = 0;
	var toInd = 0;
    for (var i = 0; i <noOfMainNodes; i++) {
        var tpcObj = tempArray[i];
        if (tpcObj.type == "topic") {
			var topicLength = getTopicLength(tpcObj);
			if(fromInd  == 0){
		      fromInd = i;
			  toIndex = fromInd + topicLength;
			}else{
			  fromInd = fromInd;
			  toIndex = fromInd + topicLength;
			  if(toIndex>seqArray.length){
			    fromInd = fromInd - 1;
				toIndex = toIndex - 1;
			  }
			}
			var obj = {};
			obj.index = i;
			obj.topicElements = tpcObj;
			obj.topicSeqArr = getTopicSeqArr(fromInd,toIndex,seqArray.join());
			topicSeqArray.push(obj);
			fromInd = toIndex;
			toIndex = 0;
        }
        else {
            if (trackObjects[SeqID].topicLevelPool == 'yes' || trackObjects[SeqID].topicLevelPoolWithDiff == 'yes') {
                if (fromInd != 0) {
                    fromInd++
                }
            }

        }
    }
    for (var i = 0; i < seqArray.length; i++) {
        var obj = getObjectOfNum(seqArray[i], tempArray);
        if (obj != "") {
            totalSeqPagesArray.push(obj);
        }
    }
    if (topicSeqArray.length > 0) {
        var tpSqLen = topicSeqArray.length;
        for (var k = 0; k < tpSqLen; k++) {
            var objInd = topicSeqArray[k].index;
            var tpObj = topicSeqArray[k].topicElements;
            var tpSeqArr = topicSeqArray[k].topicSeqArr;
            tpObj.pages = rearrangeTopic(objInd, tpObj.pages, tpSeqArr);
            topicSeqArray[k].topicElements = tpObj;
            totalSeqPagesArray.splice(objInd, 0, tpObj);
        }
    }
    if (openingPage != "") {
        totalSeqPagesArray.unshift(openingPage);
    }
    if (closingPage != "") {
        totalSeqPagesArray.push(closingPage);
    }
    if (summaryPgBakup != "") {
        totalSeqPagesArray.push(summaryPgBakup);
    }
   
    return totalSeqPagesArray;
}

function rearrangeTopic(index, obj, arr) {
    //debugger;
    var topicArr = obj;
    var len = topicArr.length;
    var seqArray = arr;
	
    var pgsArr = new Array();
    var tpcArr = new Array();
	
    var fromInd = 0;
    var toIndex = 0;
    for (var j = 0; j < len; j++) {
        var tpcObj = topicArr[j];
        if (tpcObj.type == "topic") {
		    var topicLength = getTopicLength(tpcObj);
			if(fromInd  == 0){
		      fromInd = j;
			  toIndex = fromInd + topicLength;
			}else{
			    fromInd = fromInd;
			  toIndex = fromInd + topicLength;
			  if (toIndex > seqArray.length) {
			    fromInd = fromInd - 1;
				toIndex = toIndex - 1;
			  }
			}
			var objec = {};
			objec.index = j;
			objec.topicElements = tpcObj;
			objec.topicSeqArr = getTopicSeqArr(fromInd,toIndex,seqArray.join());
			tpcArr.push(objec);
			fromInd = toIndex;
			toIndex = 0;
        } 
    }
   	
    for (var i = 0; i < seqArray.length; i++) {
        var objct = getObjectOfNum(seqArray[i], topicArr);
        if (objct != "") {
            pgsArr.push(objct);
        }
    }
    if(tpcArr.length > 0){
	    var tpSqLen = tpcArr.length;
		for(var k=0; k<tpSqLen; k++){
		   var ind = tpcArr[k].index;
		   var sbTpcObj = tpcArr[k].topicElements;
		   var arr = tpcArr[k].topicSeqArr;
		   sbTpcObj.pages = rearrangeSubTopics(sbTpcObj.pages,arr);
		   tpcArr[k].topicElements = sbTpcObj;
		   pgsArr.splice(ind,0,sbTpcObj);
		}
    }
	return pgsArr;
}

function rearrangeSubTopics(obj,arr) {
    var subTpcArr = obj;
    //var len = subTpcArr.length;
    var rearrangedArray = new Array();
    for (var i = 0; i < arr.length; i++){
        var pgNum = arr[i];
        rearrangedArray.push(getObjectOfNum(pgNum, subTpcArr));
    }
    return rearrangedArray;
}

function getObjectOfNum(num,arr) {
    var obj = "";
    for (var j = 0; j < arr.length; j++) {
        if (arr[j].pageNumber == num && arr[j].type != "topic" ) {
            obj = arr[j];
        } 
    }
    return obj;
}

function getTopicLength(obj){
	var len = 0;
	var arr = obj.pages;
	var arrLen = arr.length;
	for(var i=0; i<arrLen; i++){
		if(arr[i].type == "topic"){
		  len += arr[i].pages.length;
		}else{
		  len ++;
		}
	}
  return len;
}
function getTopicSeqArr(strtInd,endInd,arrStr){
  var arr = new Array();
  arr = arrStr.split(",");
  return arr.slice(strtInd,endInd);
}

function assignRandomizedPageNums(arr) {
    var length = randomQuesSeqArray.length;
    revisedPageNum = Number(Number(randomQuesSeqArray[length - 1]) - (length - 1));
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element.type == "topic" && element.pages.length > 0) {
            var subPageArr = element.pages;
            for (var j = 0; j < subPageArr.length; j++) {
                var subElement = subPageArr[j];
                if (subElement.type == "topic" && subElement.pages.length > 0) {
                    var subTpcArray = subElement.pages;
                    for (var k = 0; k < subTpcArray.length; k++) {
                        subTpcArray[k].randomizedPageNum = revisedPageNum;
                        revisedPageNum++;
                    }
                    subElement.pages = subTpcArray;
                    subPageArr[j] = subElement;
                } else {
                    subElement.randomizedPageNum = revisedPageNum;
                    subPageArr[j] = subElement;
                    revisedPageNum++;
                }
            }
            element.pages = subPageArr;
            arr[i] = element;

        } else {
            element.randomizedPageNum = revisedPageNum;
            arr[i] = element;
            revisedPageNum++;
        }
    }
    return arr;
}

function randomizeAssessmentPages() {
    debugger;
    try {
       // debugger;
        if (trackObjects[SeqID].questionrandomization == "yes")
        {
            var RandomQnos;
            try {
                  if (fnGetQueryString("cid") != "")
                   {
                      RandomQnos = MobileJSInterface.LMSGetRandomQuestionNos();
                   }
                   else
                   {
                      RandomQnos = LMSGetRandomQuestionNos();
                   }
            } catch (e) {
                RandomQnos = "";
            }
            if (RandomQnos != "" && RandomQnos != undefined) {
			    isRandomized = true;
                // Get the randomized questions string if exists, convert as array;
                randomQuesSeqArray = RandomQnos.split(",");
                pages[SeqID] = rearrangePagesAsPerSeq(pages[SeqID], randomQuesSeqArray);
                pages[SeqID] = assignRandomizedPageNums(pages[SeqID]);
				//console.log(randomQuesSeqArray+" <---------");
            } else {
			    isRandomized = false;
                // randomize all pages for the first time for a perticular user;
                pages[SeqID] = randomizePages(pages[SeqID]);
                // get all randomized pages array for the first time for a perticular user, stringify and save it on LMS;
				/*getQueSeqArray();
				pages[SeqID] = assignRandomizedPageNums(pages[SeqID]);
				try{
					LMSSetRandomQuestionNos(randomQuesSeqArray.join());
				}catch(e){
				}*/
            }

        }
    } catch (e) { }

}
function getPageObjectById(id){
    var obj = new Object();
    var pageNum = 0;
    for (var i = 0; i < pages.length; i++) {
        for (var j = 0; j < pages[i].length; j++) {

            if (pages[i][j].type == "topic") {
                for (var k = 0; k < pages[i][j].pages.length; k++) {
                    if (pages[i][j].pages[k].type == "topic") {
                        for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
                            if (id == pages[i][j].pages[k].pages[m].qPageId) {
                                return pages[i][j].pages[k].pages[m];
                                break;
                            }
                            pageNum++;
                        }
                    }
                    else {
                    if (id == pages[i][j].pages[k].qPageId) {
                        return pages[i][j].pages[k];
                        break;
                    }
                    pageNum++;
                    }

                }
            }
            else {
                if (id == pages[i][j].qPageId) {
                    return pages[i][j];
                    break;
                }
                pageNum++;
            }

        }
    }

}

function clearAllBranchedPages(){
    for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
	    var lpage = getPageByIndex(i);
	    if (lpage != null && lpage != undefined && lpage.type != "summary") {
		   try{
		      if(lpage.branchedFrom != undefined){
			    lpage.branchedFrom = "";
			  }
		   }catch(e){}
		}
	}
}

function showFeedbackPopup(str) {
    var isRemediationFdBk = false;
    try {
        if (feedbackDiv != "")
            $(feedbackDiv).remove();
    } catch (e) { }
    feedbackDiv = document.createElement('div');
    $(feedbackDiv).html(str);
    if (str.indexOf('<a href="javascript:gotoRemedPage()">here</a>') != "-1") {
        isRemediationFdBk = true;
    }
    $(feedbackDiv).dialog({
        draggable: true,
        height: 220,
        width: 250,
        modal: true,
        buttons: {
            OK: function () {
                if (isRemediationFdBk) {
                    gotoRemedPage();
                }
                if (document.getElementById("submitbut") == null) {
                    var pgType = getCoValues("Qtype").toLowerCase();
                    if (pgType == "singleselect" || pgType == "truefalse") {
                        var pgId = $('input[name=radio][id^="inst_op"]:checked').attr("branchedPageId");
                        var pgObj = getPageObjectById(pgId);
						if(pgObj != undefined){
							pgObj.branchedFrom = getCoValues("pageid");
							//gotoPage(pgObj.pageNumber);
							innerPage = pgObj.pageNumber;
							innerPage = getInnerPage(innerPage);
							preventNavigation = true;
							beforegotoPage();
						}
                    }
                }
                //$(this).dialog("close");
                $(feedbackDiv).remove();
            }
        },
        close: function () {
            if (isRemediationFdBk) {
                gotoRemedPage();
            }
            if (document.getElementById("submitbut") == null) {
                var pgType = getCoValues("Qtype").toLowerCase();
                if (pgType == "singleselect" || pgType == "truefalse") {
                    var pgId = $('input[name=radio][id^="inst_op"]:checked').attr("branchedPageId");
                    var pgObj = getPageObjectById(pgId);
					if(pgObj != undefined){
						pgObj.branchedFrom = getCoValues("pageid");
						//gotoPage(pgObj.pageNumber);
						innerPage = pgObj.pageNumber;
						innerPage = getInnerPage(innerPage);
						preventNavigation = true;
						beforegotoPage();
					}
                }
            }
            $(feedbackDiv).remove();
        },
        title: "Feedback"
    });
}
function getInnerPage(num) {
    var tempPageNum = 0;
    if (SeqID != 0) {
        for (var k = 0; k < SeqID; k++) {
            tempPageNum += getTotalPageInObject(k);
        }
    }
    num = num - tempPageNum;
    return num;
}
/*function resetPagesBeforeRandomization() {
    for (var qno = 0; qno < getTotalPageInObject(SeqID) - 1; qno++) {
        if (objType == "content object" || objType == "contentobject") {
            if (getPageByObjectIndex(qno).iscoao == "ao") {
                getPageByObjectIndex(qno).useranswer = "";
                getPageByObjectIndex(qno).status = "";
                try {
                    getPageByObjectIndex(qno).pageNumber = getPageByObjectIndex(qno).actualPageNumber;
                    getPageByObjectIndex(qno).actualPageNumber = "";
                    getPageByObjectIndex(qno).randomizedPageNum = "";
                } catch (e) { }
            }

        } else {
            if (getPageByObjectIndex(qno).type != "page") {
                getPageByObjectIndex(qno).useranswer = "";
                getPageByObjectIndex(qno).status = "";
                try {
                    getPageByObjectIndex(qno).pageNumber = getPageByObjectIndex(qno).actualPageNumber;
                    getPageByObjectIndex(qno).actualPageNumber = "";
                    getPageByObjectIndex(qno).randomizedPageNum = "";
                } catch (e) { }
            }
        }
    }
}*/
//***************************** RANDOMIZATION **********************************************//
//--Exam Games Start--
function PageTrackingObj(title, visible, type, url, pageNumber) {
    this.title = title;
    this.visible = visible;
    this.type = type;
    this.url = url;
    this.pageNumber = pageNumber;   
    return this;
}
function fnGetQueryString(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) 
{
    var pair = vars[i].split("=");
    if (pair[0] == variable)
    { return pair[1]; }
}
return "";
   }

function TreeURL() {
    
	var exId = ""
	exId = fnGetQueryString("eid");
	if (exId != "") {
	    var uid = fnGetQueryString('UID');
	    var ExamType = fnGetQueryString('etype');
	    isExamPackage = true;
	    if (ExamType == "author")
	        return "../" + uid + "/" + exId + "/treeXML.xml";
	    else
	        return "../" + uid + "/" + exId + "/treeXML.xml";
	}
	else
	    return "xml/treeXML.xml";

}
function ConvertStringToXMLObject(sXML) {
    if (DOMParser) {
        var dpDOMParser = new DOMParser();
        return dpDOMParser.parseFromString(sXML, "text/xml");
    } else { // IE 8 and previous or IE 9 when *not* in Standards mode...
        var xdDoc = new ActiveXObject("Microsoft.XMLDOM");
        xdDoc.loadXML(sXML);
        return xdDoc;
    }
}

function GeneratePagesArray() {
    //debugger;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else // for IE 5/6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", TreeURL(), false);
    xhttp.send();
    //xml = xhttp.responseXML;
    xml = ConvertStringToXMLObject(xhttp.responseText)
    if (isExamPackage == true) {
        if ($(xml).find("toc").length > 0) {
            trackObjects[SeqID].title = $(xml).find("toc")[0].getAttribute('title');
        }
    }
	var Qtype ="";
       obj1Pages = [];
        for (var i = 0; i < xml.childNodes[0].childNodes[1].childNodes.length; i++) {
            if (xml.childNodes[0].childNodes[1].childNodes[i].nodeName == "node" || xml.childNodes[0].childNodes[1].childNodes[i].nodeName == "topic") {
                if (xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type') == "topic") {
                    var ptTopicOBj = new PageTrackingObj();
                    ptTopicOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('title');
                    ptTopicOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type');
                    ptTopicOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('pageNumber');
					
					// added for randomization JIRA Id:INST-6583 by maheedhar 
					try{
					   ptTopicOBj.qPageId = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('id');
					}catch(e){
					   ptTopicOBj.qPageId = "";
					}
					// added for randomization JIRA Id:INST-6583
					
                    ptTopicOBj.pages = new Array();
                    for (var j = 0; j < xml.childNodes[0].childNodes[1].childNodes[i].childNodes.length; j++) {
                        if (xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].nodeName == "node") {
                           var ptOBj = new PageTrackingObj();
                            ptOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('title');
			                if (xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('type') == "summary") {
			               ptOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('type');
			               ptOBj.iscoao ='co'; }
			               else
			               ptOBj.type = 'page';
                           // ptOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('type');
                            ptOBj.visible = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('visible');
                            ptOBj.url = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('url');
                            ptOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('pageNumber');
				            Qtype = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('type');
				            if (Qtype =="truefalse" || Qtype =="multipleselect" || Qtype =="singleselect" || Qtype =="matrix" || Qtype =="fillintheblank" || Qtype =="longanswer" || Qtype =="draganddrop")
				            ptOBj.iscoao ='ao';
				            else
				            ptOBj.iscoao ='co';
							
				            ptOBj.Qtype = Qtype;
				            ptOBj.remediation ='no';
				            ptOBj.remScreen ='';
				            ptOBj.remAttempt ='';
				            ptOBj.remReturnPage ='';
				            ptOBj.disableNxtUntilCrct ='false';
				            ptOBj.istimeline='no';
														
							// added for randomization JIRA Id:INST-6583
							try{
					           ptOBj.qPageId = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('id');
							}catch(e){
							   ptOBj.qPageId = "";
							}
							// added for randomization JIRA Id:INST-6583
							
                            ptTopicOBj.pages[ptTopicOBj.pages.length] = ptOBj;
                        }
                        else if (xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].nodeName == "topic") {
                            var ptSubTopicOBj = new PageTrackingObj();
                            ptSubTopicOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('title');
                            ptSubTopicOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('type');
                            ptSubTopicOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('pageNumber');
							
							// added for randomization JIRA Id:INST-6583
							try{
					           ptSubTopicOBj.qPageId = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('id');
							}catch(e){
							   ptSubTopicOBj.qPageId = "";
							}
							// added for randomization JIRA Id:INST-6583
							
                            ptSubTopicOBj.pages = new Array();
                            for (var k = 0; k < xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes.length; k++) {
                                if (xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].nodeName == "node") {
                                    var ptOBj = new PageTrackingObj();
                                    ptOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('title');
									
									if (xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('type') == "summary") {
									ptOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('type');
									ptOBj.iscoao ='co'; }
									else
									ptOBj.type = 'page';
                                    //ptOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('type');
                                    ptOBj.visible = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('visible');
                                    ptOBj.url = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('url');
                                    ptOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('pageNumber');
									Qtype = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('type');
									if (Qtype =="truefalse" || Qtype =="multipleselect" || Qtype =="singleselect" || Qtype =="matrix" || Qtype =="fillintheblank" || Qtype =="longanswer" || Qtype =="draganddrop")
									ptOBj.iscoao ='ao';
									else
									ptOBj.iscoao ='co';
									ptOBj.Qtype = Qtype;
									ptOBj.remediation ='no';
									ptOBj.remScreen ='';
									ptOBj.remAttempt ='';
									ptOBj.remReturnPage ='';
									ptOBj.disableNxtUntilCrct ='false';
									ptOBj.istimeline='no';
									 									
									// added for randomization JIRA Id:INST-6583
									try{
					                   ptOBj.qPageId = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].childNodes[k].getAttribute('id');
									}catch(e){
									   ptOBj.qPageId = "";
									}
									// added for randomization JIRA Id:INST-6583									
                                    ptSubTopicOBj.pages[ptSubTopicOBj.pages.length] = ptOBj;
                                }
                            }
                            ptTopicOBj.pages[ptTopicOBj.pages.length] = ptSubTopicOBj;
                        }
                    }
                    obj1Pages[obj1Pages.length] = ptTopicOBj;
                }
                else {
				    var ptOBj = new PageTrackingObj();
                    ptOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('title');
					if (xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type') == "summary") {
						ptOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type');
						ptOBj.iscoao ='co'; }
					else
						ptOBj.type = 'page';
                    ptOBj.visible = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('visible');
                    ptOBj.url = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('url');
                    ptOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('pageNumber');
					Qtype = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type');
					if (Qtype =="truefalse" || Qtype =="multipleselect" || Qtype =="singleselect" || Qtype =="matrix" || Qtype =="fillintheblank" || Qtype =="longanswer" || Qtype =="draganddrop")
					ptOBj.iscoao ='ao';
					else
					ptOBj.iscoao ='co';
					ptOBj.Qtype = Qtype;
					ptOBj.remediation ='no';
					ptOBj.remScreen ='';
					ptOBj.remAttempt ='';
					ptOBj.remReturnPage ='';
					ptOBj.disableNxtUntilCrct ='false';
					ptOBj.istimeline='no';
				
					// added for randomization JIRA Id:INST-6583
					try{
					  ptOBj.qPageId = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('id');
					}catch(e){
					  ptOBj.qPageId = "";
					}
					// added for randomization JIRA Id:INST-6583
					
        obj1Pages[obj1Pages.length] = ptOBj;
                }
            }
        }
    pages = [obj1Pages];
    //$(xml).find('node').each(function() {      
    //    var ptOBj = new PageTrackingObj();
    //    ptOBj.title = $(this).attr('title');
    //    ptOBj.type = $(this).attr('type');
    //    ptOBj.visible = $(this).attr('visible');
    //    ptOBj.url = $(this).attr('url');
    //    ptOBj.pageNumber = $(this).attr('pageNumber');
    //    obj1Pages[obj1Pages.length] = ptOBj;
    //});   
    //pages = [obj1Pages];
    //    $.ajax({
    //        type: "GET",
    //    url: TreeURL(),
    //        dataType: "xml",
    //        success: function(xml) {
    //        for (var i = 0; i < xml.childNodes[0].childNodes[1].childNodes.length; i++) {
    //            if (xml.childNodes[0].childNodes[1].childNodes[i].nodeName == "node" || xml.childNodes[0].childNodes[1].childNodes[i].nodeName == "topic") {
    //                if (xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type') == "topic") {
    //                    var ptTopicOBj = new PageTrackingObj();
    //                    ptTopicOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('title');
    //                    ptTopicOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type');
    //                    ptTopicOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('pageNumber');
    //                    for (var j = 0; j < xml.childNodes[0].childNodes[1].childNodes[i].childNodes.length; j++) {
    //                        if (xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].nodeName == "node") {
    //                            ptTopicOBj.pages = new Array();
    //                            var ptOBj = new PageTrackingObj();
    //                            ptOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('title');
    //                            ptOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('type');
    //                            ptOBj.visible = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('visible');
    //                            ptOBj.url = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('url');
    //                            ptOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].childNodes[j].getAttribute('pageNumber');
    //                            ptTopicOBj.pages[ptTopicOBj.pages.length] = ptOBj;
    //                        }
    //                    }
    //                    obj1Pages[obj1Pages.length] = ptTopicOBj;
    //                }
    //                else {
    //                    var ptOBj = new PageTrackingObj();
    //                    ptOBj.title = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('title');
    //                    ptOBj.type = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('type');
    //                    ptOBj.visible = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('visible');
    //                    ptOBj.url = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('url');
    //                    ptOBj.pageNumber = xml.childNodes[0].childNodes[1].childNodes[i].getAttribute('pageNumber');
    //                    obj1Pages[obj1Pages.length] = ptOBj;
    //                }                    
    //            }             
    //        }
    //        pages = [obj1Pages];
    //        }
    //    });
}
//--Exam Games End--

 function ReplaceAll(Source, stringToFind, stringToReplace) {
        var temp = Source;
        var index = temp.indexOf(stringToFind);
        while (index != -1) {
            temp = temp.replace(stringToFind, stringToReplace);
            index = temp.indexOf(stringToFind);
        }
        return temp;
    }
    /*Handle the background audio for mobile devices */
// Added by krishna B

function CheckAutoplayAudio() {
    var autoTimline = isTimeline();
    var useragent = navigator.userAgent;
    useragent = useragent.toLowerCase();

    if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
        if (isTimeline().toLowerCase() == "yes") {
            StopBackgroundAudio();
        } else {
            if ($('audio').length > 0) {
                var i = 0;
                if ($($('audio')[i]).attr("autoplay") == "autoplay" && $($('audio')[i]).attr("controls") == undefined) {
                    if (window.location.href.indexOf("nativeappURL") != -1) {
                        if (fnGetQueryString("cid") == "")
                            window.parent.MobileJSInterface.PlayAudioWithSrcStatus($($('audio').find("embed")).attr("src"), "1");
                        else
                            MobileJSInterface.PlayAudioWithSrcStatus($($('audio').find("embed")).attr("src"), "0");
                    } else
                        OpenDeviceAutoplayPopup($('audio')[0]);

                } else
                    StopBackgroundAudio();
            } else
                StopBackgroundAudio();
        }
    }
}
function StopBackgroundAudio() {
    try {
        if (window.location.href.indexOf("nativeappURL") != -1) {
            if (fnGetQueryString("cid") == "")
                window.parent.MobileJSInterface.PlayAudioWithSrcStatus("", "1")
            else
                MobileJSInterface.PlayAudioWithSrcStatus("", "0");
        }
    } catch (e) {}
}

function OpenDeviceAutoplayPopup(divId) {    
  //  $("#autoPosterBG").addClass("autoPosterBGDisable");
	$("#page").fadeTo( "slow" , 0.5);
	$("#audioPlayDiv").show();
	HandlePageControls(true);
	//$.each($("#content").find('textarea')[0], function (i, obj) {	    
	//    $(obj).attr("disabled", "true");
	//});	
    $("#autoPoster").bind("click", function () {
	$("#page").fadeTo("slow" , 1);
	$("#audioPlayDiv").hide();
	//$("#autoPosterBG").fadeTo("slow", 1);
	HandlePageControls(false);
        $("#content").css({
            'opactity': "1"
        })
        if (isTimeline().toLowerCase() == "yes") {
            onPlayClick();
        } else {
            divId = $('audio')[0];
            playAudioOnClk(divId.parentElement, divId);
        }
		try{
		enableDisablePlayPause(false);
        $($.find('span.ui-icon.ui-icon-closethick')[0].parentElement).click();
		}catch(e){}
        isAudioPop = false;
    });
    $('#audioPlayDiv').show();
    isAudioPop = true;
}
function HandlePageControls(val) {
    try {
        $("#instmaintable :input").each(function () {
            $(this).prop("disabled", val);
        })
        if (val == true) {
            $('#submitbut').unbind('click');
            $("#submitbut").fadeTo("slow", 0.5);
        } else {
            $('#submitbut').unbind('click');
            $('#submitbut').bind('click', showFeedback);
            $("#submitbut").fadeTo("slow", 1);
        }
    } catch (e)
    { }


}
/*End - Handle the background audio for mobile devices*/

function checkBranching() {
    var isBranchingEnabled = false;
    if (trackObjects[SeqID].optionlevelfeedback == "yes" && trackObjects[SeqID].singleqtnperpage == "yes") {
        var pgType = getCoValues("Qtype").toLowerCase();
        if (pgType == "singleselect" || pgType == "truefalse") {
            $('input[name=radio][id^="inst_op"]').each(function () {
                //debugger;
                if ($(this).attr("branchedPageId") != "") {
                    isBranchingEnabled = true;
                }
            });
        }
    }
    return isBranchingEnabled;
}

function updateTabHeight(tabObj) {
    try {
        var tabId = $(tabObj).attr("id").split("_")[1];
        var actualTabWidth = $(tabObj).attr("actualTabWidth");
        var actualTabHeight = $(tabObj).attr("actualTabHeight");
        var tabsDivHt = $(tabObj).find("ul[id='ul_" + tabId + "']").height();
        var skinHeight = $("div.contentarea").height();
        var tabHeightPercent = (Number(actualTabHeight) / Number(skinHeight)) * 100;
        $(tabObj).css("height", tabHeightPercent + "%");
        var tabContHt = Number($(tabObj).height()) - Number(tabsDivHt) - 8;
        var tabContHtPercent = (Number(tabContHt) / Number($(tabObj).height())) * 100;
        $(tabObj).find("div[id='tabContDiv_" + tabId + "']").css("height", tabContHtPercent + "%");
    } catch (e) { }
}

function stopAllMediaElements(obj) {
    try{
        $(obj).find("audio").each(function () {            
            $(this)[0].pause();
        })
        $(obj).find(".jp-jplayer").each(function () { //Find Jplayer video
            $(this).jPlayer("destroy");            
        });      
    }catch(e){}
}

function showHideuserpageNote() {

    if (window.parent.location.href.toLowerCase().indexOf("remote") > - 1 || (window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > - 1 && window.parent.location.href.toLowerCase().indexOf("cid=") == - 1)) {
        var strBegin = window.parent.location.href.toLowerCase().split("remote")[0];
        if (Notestate == "off") {

            var totalurl = "";
            if (window.parent.parent.location.href.toLowerCase().indexOf("/trackid/") > - 1) {
                var strtrackslipt = window.parent.parent.location.href.toLowerCase().split("/trackid/")[1];
                strtrackslipt.split('/scoid/')[0]
                var strsqeid = SeqID + 1;
                totalurl = strBegin + 'UserPageNotes.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + strtrackslipt.split('/scoid/')[0] + '&SeqID=' + strsqeid + '&ALL=false';
            } else {
                totalurl = strBegin + 'UserPageNotes.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + '&SeqID=' + 0 + '&ALL=false';
            }

            $('#opennotePopup').show();
  	 $('#openPolledresponsePopup').hide();
            $('#iframeusernotes').attr('src', totalurl);
            $('#iframeusernotes').on('load', function () {
                setTimeout(function () {                    
                    $($($('#iframeusernotes')[0].contentWindow.document).find("#BtnNoteSubmit")).css("background-color", $(".ins-notestitle").css("background-color"));
                }, 100);
            });
            
            $('#openccPopup').hide();
            Notestate = "on"
            $('.full-expand').hide();
        } else {
            $('#opennotePopup').hide();
            Notestate = "off"
            if ($(window).width() < 550) {
            $('.full-expand').show();
            }
        }
    } else {
        if (Notestate == "off") {
            
            try {
                $('#BtnNoteSubmit').unbind('click');
                $('#Notelist').undelegate();
            } catch (e) {}
            
            
            $('#opennotePopup').show();
            $('#iframeusernotes').attr('style', 'display:none');
            $('#divusernotes').attr('style', 'display:block');
            BindUserPageNotes();

            $('#BtnNoteSubmit').bind('click', function () {

                if ($('#inputnote').val() == '') {
                    alert('Please enter text');
                } else {
                    var text = $('#inputnote').val();
                    var noteID = $('#Notelist').find("li").length + 1;
                    var item = "<li id='" + noteID + "'><div style='float:left;width:90%'><p style='margin:0px;'>" + text + "</p><img id='doneedit' style='display:none' src='images/done_icon.png' title='Done'></div><div style='float:right;width:10%;'><img id='edit' src='images/edit_icon.png' title='Edit'><img id='closeimg' src='Images/delete_ico.png' title='Remove'></div><span style='clear:both;'></span></li>";
                    $('#Notelist').append(item);
                    $('#inputnote').val('');
                    $('#inputnote').focus();
                    var strsqeid = SeqID + 1;
                    //alert(trackObjects[SeqID].contentid + "----" + UsernotePageID + "----" + strsqeid + "----" + text + "----" + noteID);
                    try{
                        MobileJSInterface.saveUserPageNotesWithContentIDPageIDSequenceIDUserNotesTextNoteCountIsType(trackObjects[SeqID].contentid, UsernotePageID, strsqeid, text, noteID,"ADD");
                        // MobileJSInterface.saveUserPageNotesWithContentIDPageIDSequenceIDUserNotesTextNoteCountIsType(trackObjects[SeqID].contentid, UsernotePageID, strsqeid,text);
                    }catch(e){}

                }
            });

            $('#Notelist').delegate('#closeimg', 'click', (function () {
                //debugger;
                //alert('text');

                //if (confirm("This note will be removed permanently!") == true) {
                //$(this).parents('li').find('#doneedit').css('display', 'none');
                //$(this).parents('li').find('#closeimg').css('display', 'inline-block');
                //$(this).parents('li').find('#edit').css('display', 'inline-block');
                //$(this).parents('li').find('p').removeClass('editable').prop('contenteditable', false);
                $(this).parent().parent().remove();
                noteID = $(this).parents('li').attr('id');
                //                 alert(trackObjects[SeqID].contentid + "----" + UsernotePageID + "----" + strsqeid + "----" + text + "----" + noteID);
                MobileJSInterface.DeletePageNoteWithContentIDPageIDNoteCount(trackObjects[SeqID].contentid, UsernotePageID, noteID);

            })
            );

            $('#Notelist').delegate('#edit', 'click', (function () {

                $(this).parents('li').find('#doneedit').css('display', 'inline-block');
                $(this).parents('li').find('#closeimg').css('display', 'none');
                $(this).parents('li').find('#notedate').css('display', 'none');
                $(this).parents('li').find('#edit').css('display', 'none');
                $(this).parents('li').find('p').addClass('editable').prop('contenteditable', true);
                $(this).parents('li').parent('li').find('p').removeClass('editable').prop('contenteditable', false);


            })
            );


            $('#Notelist').delegate('#doneedit', 'click', (function () {

                if ($(this).parent().parent().find('p').text() == '') {
                    alert('Please enter text');
                    return false;

                } else {
                    // if (confirm("Are you sure to update this note!") == true) {
                    $(this).parents('li').find('#notedate').css('display', 'inline-block');
                    $(this).parent().parent('li').find('#doneedit').css('display', 'none');
                    $(this).parent().parent('li').find('#closeimg').css('display', 'inline-block');
                    $(this).parent().parent('li').find('#edit').css('display', 'inline-block');
                    $(this).parent().parent('li').find('p').removeClass('editable').prop('contenteditable', false);
                    noteID = $(this).parent().parent('li').attr('id');
                    var strsqeid = SeqID + 1;
                    //alert(trackObjects[SeqID].contentid + "----" + UsernotePageID + "----" + strsqeid + "----" + $(this).parent().parent().find('p').text() + "----" + noteID);
                    MobileJSInterface.saveUserPageNotesWithContentIDPageIDSequenceIDUserNotesTextNoteCountIsType(trackObjects[SeqID].contentid, UsernotePageID, strsqeid, $(this).parent().parent().find('p').text(), noteID, "EDIT");
                }

            })
            );

            Notestate = "on";
            $('.full-expand').hide();
        } else {
            $('#opennotePopup').hide();
            Notestate = "off"
            if ($(window).width() < 550) {
                $('.full-expand').show();
            }
        }
        //   alert("Notes is not available in preview mode.");
    }

}

function showPolledResponses() {

    if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > -1) {
        var strBegin = window.parent.location.href.toLowerCase().split("remote")[0];
        if (Pollstate == "off") {
            var fontsize = "12";           
            if ($(window).width() <= 550)
                fontsize = "19";
            var totalurl = "";
            if (window.parent.parent.location.href.toLowerCase().indexOf("/trackid/") > -1) {
                var strtrackslipt = window.parent.parent.location.href.toLowerCase().split("/trackid/")[1];
                strtrackslipt.split('/scoid/')[0]
                var strsqeid = SeqID + 1;
                totalurl = strBegin + 'Userpolledresponce.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + strtrackslipt.split('/scoid/')[0] + '&SeqID=' + strsqeid + '&Fontsize=' + fontsize;
            }
            else {
                var strsqeid = SeqID + 1;
                totalurl = strBegin + 'Userpolledresponce.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + '&SeqID=' + strsqeid + '&Fontsize=' + fontsize ;
            }
            // window.parent.fnUserPolledpopup(totalurl);            
            $('#span_pollPopup').html("Polled responses");
            $('#iframePolled').css('height', "100%");
            $('#openPolledresponsePopup').show();
            $('#iframePolled').attr('src', totalurl);
            $('#opennotePopup').hide();
            $('#openccPopup').hide();
            Pollstate = "on"
			if (isTimeline().toLowerCase() == "yes") {
			onPauseClick();
	}
            $('.full-expand').hide();
        }
        else {
            $('#openPolledresponsePopup').hide();
            Pollstate = "off"
            if ($(window).width() < 550) {
            $('.full-expand').show();
            }
        }
    } else {
		if (window.parent.location.href.toLowerCase().indexOf("sitefiles") > -1 || window.parent.location.href.toLowerCase().indexOf("catalog") > -1)
			alert("In order to share, you need to launch content from your 'My Learning'."); 
		else
			alert("Share is not available in preview mode."); 
	}

}
function showUsercapturedfiles(mediaId, objId) {

    if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > -1) {
        var strBegin = window.parent.location.href.toLowerCase().split("remote")[0];
        if (Pollstate == "off") {
            var totalurl = "";
            var pgNum = "";
            var strsqeid = SeqID + 1;
            if (window.parent.parent.location.href.toLowerCase().indexOf("/trackid/") > -1) {
                var strtrackslipt = window.parent.parent.location.href.toLowerCase().split("/trackid/")[1];
                strtrackslipt.split('/scoid/')[0]
                if (trackObjects[SeqID].singleqtnperpage == "yes") {
                    totalurl = strBegin + 'Usercapturedfiles.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + strtrackslipt.split('/scoid/')[0] + '&SeqID=' + strsqeid + '&filetype=' + mediaId;
                } else {
                    if (mediaId == 1) {
                        pgNum = $("#shareImg_" + objId).attr("pagenumber");
                    } else {
                        pgNum = $("#shareVideo_" + objId).attr("pagenumber");
                    }                    
                    totalurl = strBegin + 'Usercapturedfiles.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + pgNum + '&TrackID=' + strtrackslipt.split('/scoid/')[0] + '&SeqID=' + strsqeid + '&filetype=' + mediaId;
                }
            }
            else {
                if (trackObjects[SeqID].singleqtnperpage == "yes") {
                    totalurl = strBegin + 'Usercapturedfiles.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + '&SeqID=' + strsqeid + '&filetype=' + mediaId;
                } else {
                    if (mediaId == 1) {
                        pgNum = $("#shareImg_" + objId).attr("pagenumber");
                    } else {
                        pgNum = $("#shareVideo_" + objId).attr("pagenumber");
                    }                   
                    totalurl = strBegin + 'Usercapturedfiles.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + pgNum + '&TrackID=' + '&SeqID=' + strsqeid + '&filetype=' + mediaId;
                }
            }
            // window.parent.fnUserPolledpopup(totalurl);
            $('#span_pollPopup').html("Shared files");
            $('#openPolledresponsePopup').show();
            $('#iframePolled').attr('src', totalurl);
	    //Maheedhar:19/04/2016: added this code for audio mute functionality
		$('#iframePolled').attr('onload', function(){	
			interval = setInterval(checkreadyState, 200);
	                iterations = 0;				
			function checkreadyState(){				  
			   if($('#iframePolled')[0].contentWindow.document.readyState == "complete"){
				 clearInterval(interval);
				  var ifrDoc = $('#iframePolled')[0].contentWindow.document;
				  var vids = $(ifrDoc).find("video");
				  var auds = $(ifrDoc).find("audio");
				  if(vids.length  > 0 || auds.length > 0){
					setMuteStatusForMedia(ifrDoc);
				  }
			   }else{
			        iterations ++;
				    if(iterations > 10){				  
				      clearInterval(interval);
					  iterations = 0;
				    }
			   }
			}				
		});
	    //Maheedhar:19/04/2016: added this code for audio mute functionality			
            $('#iframePolled').css('height', "90%");
            $('#opennotePopup').hide();
            $('#openccPopup').hide();
            Pollstate = "on"
        }
        else {
            $('#openPolledresponsePopup').hide();
            Pollstate = "off"
			 if (isTimeline().toLowerCase() == "yes") {
				onPlayClick();
			}
        }
    } else { alert("Share is not available in preview mode."); }

}
function BindUserPageNotes() {
    $("#Notelist").empty();
    var pageNotes = ""
    try {
        pageNotes = MobileJSInterface.GetUserPageNotesWithContentIDPageID(trackObjects[SeqID].contentid, UsernotePageID);
    } catch (e)
    {}
    var arr = new Array();
    arr = pageNotes.split("@^@");

    for (var i = 0; i < arr.length ; i++) {

        if (arr[i].indexOf("@#@") > - 1) {

            var item = "<li id='" + arr[i].split("@#@")[0] + "'><div style='float:left;width:90%'><p style='margin:0px;'>" + arr[i].split("@#@")[1] + "</p><img id='doneedit' style='display:none' src='images/done_icon.png' title='Done'></div><div style='float:right;width:10%;'><img id='edit' src='images/edit_icon.png' title='Edit'><img id='closeimg' src='Images/delete_ico.png' title='Remove'></div><span style='clear:both;'></span></li>";
            $('#Notelist').append(item);
        }

    }
}
/*************************************************/
function backupAllPageObjects() {
 
    var len = trackObjects.length;
    for (var i = 1; i <= len; i++) {
        //backupPagesArray
        var arr = new Array();
        var newArr = new Array();
        arr = eval("obj" + i + "Pages");
        //console.log(arr.length + "<-----------------------------------------------backupAllPageObjects");
        for (var j = 0; j < arr.length; j++) {
            var obj = {};
            obj = arr[j];
            var newObj = $.extend({}, obj);
            newArr[j] = newObj;
        }
        backupPagesArray[i - 1] = newArr;

    }
}

function getActualPageNum(num) {
    
    var actualPageNum = 0;
    var refPgObj = getPageByIndex(num);
    var qid = refPgObj.qPageId;
    var currentContPageArr = backupPagesArray[SeqID];
    var len = currentContPageArr.length;
    try {
        for (var i = 0; i < len; i++) {
            var obj = currentContPageArr[i];
            if (obj.type != "topic") {
                if (obj.qPageId == qid) {
                    actualPageNum = Number(obj.pageNumber) + 1;
                    break;
                }
            } else {
                var topicObjArr = obj.pages;
                var topicLen = topicObjArr.length;
                for (var j = 0; j < topicLen; j++) {
                    var tpObj = topicObjArr[j];
                    if (tpObj.type != "topic") {
                        if (tpObj.qPageId == qid) {
                            actualPageNum = Number(tpObj.pageNumber) + 1;
                            break;
                        }
                    } else {
                        var subTopicObjArr = tpObj.pages;
                        var subTopicLen = subTopicObjArr.length;
                        for (var k = 0; k < subTopicLen; k++) {
                            var subTpObj = subTopicObjArr[k];
                            if (subTpObj.qPageId == qid) {
                                actualPageNum = Number(subTpObj.pageNumber) + 1;
                                break;
                            }
                        }
                    }
                }
            }
        }
    } catch (e) { }
    //console.log(actualPageNum + "<--------------- actualpagenumber");
    return actualPageNum;
}
function openLinkInNewWindow(fileId){
    var link;
    if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
	    if (fnGetQueryString("cid") != "")
	        link = "mediaresource/mediacapture/" + fileId;
	    else
	        link = window.location.origin + "/content/SiteFiles/UserDocuments/" + fileId;
    } else {
        link = window.location.origin + "/content/SiteFiles/UserDocuments/" + fileId;
    }
   window.open(link, "popupWindow", "width=600,height=600,scrollbars=yes");
}
function isPreviewMode() {
    try{
        if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > -1) {
            return false;
        } else {
            return true;
        }
    } catch (e) { return true; }
}

/**************************************************/

function fnSequenceSummary(useranswe) {
    var strtext = "";
    var correctcount = 0;
    var incorrectcount = 0;
    if (useranswe != undefined && useranswe != "") {
    var userans = useranswe.split("^^");    
    $.each(userans, function (index, value) {
        if ((index + 1) != value.split("##@^@^@##")[0]) {

            incorrectcount = incorrectcount + 1;
        }
        else {
            correctcount = correctcount + 1;
        }
        // $('#listqtn').append($('<li></li>').attr('data-sno', (value.split("##@^@^@##")[0])).text(value.split("##@^@^@##")[1]));
    });
    strtext = "Correct:" + correctcount + " & Incorrect:" + incorrectcount;
    correctcount = 0;
    incorrectcount = 0;
    return strtext;
    }

    else
    {
        return "Not Attempted";
    }
}
function generateTableheaderinMob() {
    $('.tableclassview').each(function () {
        var tab = $(this);
        var width = $(window).width();
        var height = $(window).height();
        var list = new Array();      
        var numOfColumns = $(tab.find('tr')[0]).children().length;
        if (numOfColumns > 1) {
            if (width <= 550) {
                tab.find('tr th').each(function () {
                    list.push($(this).text());
                });
                var j = 0;
                if (list.length > 0) {
                    tab.find('tr td').each(function (i) {
                        $(this).css('padding-bottom', '30px');
                        if (j < list.length) {
                            $(this).prepend("<strong style='padding:5px;background:#eaebec;display:block;'>" + list[j] + "</strong>");
                        } else {
                            j = 0;
                            $(this).prepend("<strong style='padding:5px;background:#eaebec;display:block;'>" + list[j] + "</strong>");
                        }
                        j++;
                    });
                }
            }
        } else {
            if ($(this).hasClass("tableclassview")) {
                $(this).removeClass("tableclassview");
            }
        }
    });
}

function generateRatingTableheaderinMob() {
    $('table[id^="container_table"]').each(function () {
        var tab = $(this);
        var width = $(window).width();
        var height = $(window).height();
        var list = new Array();
        var numOfColumns = $(tab.find('tr')[0]).children().length;
        if (width <= 550) {
            tab.find('tr th').each(function () {
                list.push($(this).html());
            });
            var j = 0;
            if (list.length > 0) {
                tab.find('tr td').each(function (i) {
                    $(this).css('padding-bottom', '30px');
                    if (j < list.length) {
                        $(this).prepend("<strong style='padding:5px;background:#eaebec;display:block;'>" + list[j] + "</strong>");
                    } else {
                        j = 0;
                        $(this).prepend("<strong style='padding:5px;background:#eaebec;display:block;'>" + list[j] + "</strong>");
                    }
                    j++;
                });
            }
        }
    });
}

//$(document).ready(function () {      
    function checkWidth() {        
        $('.video-contentMain').each(function () {
            var $player = $(this);
            var playersize = $player.width();
            if (playersize < 400) {
                $('.record').css({ 'background': 'url(images/Mrecord.png)', 'width': '25px', 'height': '21px' });
                $('.play').css({ 'background': 'url(images/Mplay1.jpg)', 'width': '25px', 'height': '21px', 'margin-right': '0' });
                $('.pause').css({ 'background': 'url(images/pause.png)', 'width': '25px', 'height': '21px', 'margin-right': '0' });
                $('.duration-text, span [id^="durationVideo"]').css({ 'font-size': '11px', 'padding-left': '0' });
            }
        });
        try {
            if (getMobileUserAgent()) {
                $("div[id^='video-container_']").each(function () {
                    if ($(this).hasClass("video-contentMain imgcapture")) {
                        var imgHeight = $(this).find("div[id^='capturedImgDiv_']").height();
                        var controlsHeight = $(this).find("div.controlbutton-content").height();
                        var parentMinHeight = parseInt($(this).find("div:nth-child(1)").css("min-height"));
                        if ((imgHeight + controlsHeight) < parentMinHeight) {
                            $(this).find("div:nth-child(1)").css("min-height", (imgHeight + controlsHeight));
                        }
                    }
                });
            }
        } catch (e) { }
    }
    // Execute on load
    
//});
    function onCancelUpload() {
        //debugger;
        if (attachmentType == "videocapupload") {
            $("#vidCaptureLoader_" + currCapVideoObjId).css("display", "none");
        } else if (attachmentType == "imagecapupload") {
            $("#imgCaptureLoader_" + currCapImageObjId).css("display", "none");
        }
		
		if (isTimeline().toLowerCase() == "yes") {
		    onPlayClick();
         }
    }
    function hideSharePopup() {
        try {
            $("#iframePolled").contents().empty();
            $("#openPolledresponsePopup").hide();
        } catch (e) { }
		
	
  }

    function hideLayer() {
        try{
            $('#layerFullscreenDiv').remove();
        }catch(e){}
    }

    function getCapturedFiles(objId,type) {
        //if (trackObjects[SeqID].singleqtnperpage != "no") {
            var mediaId = (type == "image") ? 1 : 2;
            try {
                showUsercapturedfiles(mediaId, objId);
            } catch (e) { }
        /*} else {
            alert("This feature not implemented in singlepage rendering");
        }   */     
    }
 function offline() {
   
    if (fnGetQueryString("cid") != "" ) { // Offline..
        $("div#embedvideo").hide();
        $("div#embedvideoffline").append('<p class="VideoOfflineTextCss1">Oops!</br>' + VideoOfflinetext + '</p>');
        $("div#embedvideoffline").show();
    }
   }
function hostReachable() {
  var xhr = new XMLHttpRequest();
    var file = "https://code.jquery.com/jquery-migrate-1.2.1.min.js";
    var randomNum = Math.round(Math.random() * 10000);
     
    xhr.open('HEAD', file + "?rand=" + randomNum, false);
     
    try {
        xhr.send();
         
        if (xhr.status >= 200 && xhr.status < 304) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }

}
function hideShareButtonInOffline(){
// Share button is disabled when internet connection is not available
	/*if(isConnectedToInternet == false){
		if(document.getElementById("sharebut") != null){
			document.getElementById("sharebut").style.display = "none";
		}
	}*/
	
	// share button is disabled when the course is downloaded
	 if (fnGetQueryString("cid") != "" || fnGetQueryString("nativeappURL") != "") {
        if (fnGetQueryString("cid") != ""){
				if(document.getElementById("sharebut") != null){
				document.getElementById("sharebut").style.display = "none";
			}
		}
		
		}
}

 function checkForTitle(obj) {
        var actualTitle = document.getElementById("pagetitle").innerHTML;
        var url = obj.url;
        var len = trackObjects.length;
        try {
            for (i = 0; i < len; i++) {
                var pgObj = trackObjects[i];
                if (pgObj.type.toLowerCase() == "document" || pgObj.type.toLowerCase() == "media resource") {
                    if (url.indexOf(pgObj.contentid) != -1) {
					    var objTitle = getPageTitle(obj);
						var pgOBjTitle = getPageTitle(pgObj);
                        if (objTitle != pgOBjTitle) {
                            var str = document.getElementById("pagetitle").innerHTML;
                            str = str.replace(objTitle, pgOBjTitle);
                            document.getElementById("pagetitle").innerHTML = str;
                        }
                    }
                }
            }
        } catch (e) { document.getElementById("pagetitle").innerHTML = actualTitle; }
    }

// JIRA ID: INST-4903
function getRemedFeedbackHtmlText(id, val) {
    var str = $("#" + id).text();
    var htmlTxt = $("#" + id).html();
    str = str.trim();    
    htmlTxt = htmlTxt.replace(/&nbsp;/g, "");
    //var val = 1;
    val = (val != 0) ? 0 : 1;
    var str1 = (str.split("###")[val]).toString();
    str1 = str1.trim();
    var finalHtmlText = htmlTxt;
    finalHtmlText = finalHtmlText.replace(str1, "");
    finalHtmlText = finalHtmlText.replace("###", "");
    return finalHtmlText;
}
// This method is to resolve the audio problem after closing the course in iPad n iOs - 03-09-2015 - Native app
function clearContent(){
	   try{
           var useragent = navigator.userAgent;
           useragent = useragent.toLowerCase();
           if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
               $("#page").html("");
           }
       }catch(e){}
}
// This method is to resolve the audio problem after closing the course in iPad n iOs - 03-09-2015 - Native app

function loadlocalization(){
var languages = [];
	if(trackObjects[SeqID].availablelanguages != undefined){
		var languages = (trackObjects[SeqID].availablelanguages.split(",") == undefined ? trackObjects[SeqID].availablelanguages : trackObjects[SeqID].availablelanguages.split(","));
	}
	$("#selectLang").find('option').remove();
	             for (i = 0; i < languages.length; i++) {
	                 var str = languages[i];
	                 str = (str.substr(0, 1)).toUpperCase() + "" + (str.substr(1, str.length));
	                 $("#selectLang").append('<option value="' + languages[i] + '">' + str + '</option>');
                 }
	            // selectedLanguage = languages[0];
                if (languages.length > 1 && trackObjects[SeqID].changelanguage == "yes") {
                    $("#selectLang").show();
                } else {
                    $("#selectLang").hide();
                }
				$("#selectLang").val(selectedLanguage);
}


function setLocalizationURL(url){
    var langRef = getLangRef(selectedLanguage);	
	if(langRef == ""){
		return url;
	}else{
		return langRef+"/"+url;
	}
}

function chkVideoFullscreen(){
$("#instsampletable").find(".jp-type-single").each(function () {
	var restoreControl = $(this).find("a.jp-restore-screen");
		if($(restoreControl).attr("title") == "restore screen"){
		var jPlayer = $(this).find(".jp-jplayer");
		var jpVideoHt = $(jPlayer).attr("videoheight");
		$(jPlayer).height(jpVideoHt);
		}
});

}
function printPage() {
     var printContents = $('.title').html();
     var printContnet = $('#page').html();
	 if(isCoAoType() == "ao")
	     $("#page").print({globalStyles: false,mediaPrint: false,iframe: false});
	 else 	  
             printPreviewWindow(printContents + "</br>" + printContnet, "single");
 }

 function printPreviewWindow(data, type) {
     //debugger;
     var mywindow = window.open('', 'Print content', 'width=100%,height=auto,top=0,left=0,toolbars=no,scrollbars=yes,status=no,resizable=yes');
     $(mywindow).find("document").empty();
     mywindow.document.write('<html><head><title></title>');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/jquery.treeview.css" /> ');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/style.css" >');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/jquery.loader.min.css" >');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/skin_style.css" />');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/Popup/jquery-ui-1.12.1.custom.min.css" />');
     mywindow.document.write('<link href="styles/matchgame.css" rel="stylesheet" type="text/css"/>');
     mywindow.document.write('<script src="scripts/jquery-1.7.2.js" ></script>');
     mywindow.document.write('<script src="scripts/CommonSkin.js" ></script>');
     mywindow.document.write('<link href="styles/pink.flag/jplayer.pink.flag.css" rel="stylesheet" type="text/css" />');
     mywindow.document.write('<script type="text/javascript" src="scripts/jquery.jplayer.min.js"></script>');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/tabs/tab-style.css" />');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/tabs/responsive-tabs.css" />');
     mywindow.document.write('<script src="scripts/tabs/jquery.responsiveTabs.js" type="text/javascript"></script>');
     mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/videostyle.css" />');
     mywindow.document.write('<style type="text/css">');
     mywindow.document.write('@media print{');
     mywindow.document.write('html, body {');
     mywindow.document.write('width: 100%;');
     mywindow.document.write('height: 90%;');
     mywindow.document.write('}');
     mywindow.document.write('}');
     mywindow.document.write('.print {');
     mywindow.document.write('page-break-after: always;');
     mywindow.document.write('}');
     mywindow.document.write('</style>');
     mywindow.document.write('</head>');
     mywindow.document.write('<body>');
     //mywindow.document.write('<div align="left"><a href="javascript:printPage();"><img src="images/print.gif" alt="Print" name="Image1" width="77" height="26" border="0" id="Image1" style="margin-right:5px;"></a> </div><br>');
     mywindow.document.write(data);   
     mywindow.document.write('<script>');
     /*if (trackObjects[SeqID].singleqtnperpage == "yes") {
         mywindow.document.write('$(document).find("table#instsampletable").find("table#instmaintable").css("position", "relative");');
     }*/
     mywindow.document.write('$("img").css("height", "auto");');
     mywindow.document.write('$("svg").parent().css("height", "auto");');
     //mywindow.document.write('function printPage(){');
     //mywindow.document.write('window.print();}');
     mywindow.document.write('window.document.close();');
     mywindow.document.write('window.print();');     
     mywindow.document.write('window.close();');
     mywindow.document.write('</script>');     
     mywindow.document.write('</body></html>');

     //mywindow.document.close(); // necessary for IE >= 10
     //mywindow.focus(); // necessary for IE >= 10

     //mywindow.print();
     //mywindow.close();
     printAllContnet = "";
     currPrintPageCnt = 0;
     return true;

 }

 function printAllPages(printAllContnet) {
     //debugger;
     var printContnet = printAllContnet;
     printPreviewWindow(printContnet, "all");
 }
 function getAllContent() {
    var pagecnt =0;
	 currPrintPageCnt =0;
     if ($('input[name="rdpagerange"]:checked').val() == 1) {
         pagecnt = getTotalPageInObject(SeqID);
         getAllPrintpage();
     }
     /*for (pgno = 0; pgno <  pagecnt; pgno++)
     {
         printAllContnet += getPrintpage(pages[SeqID][pgno].url,pages[SeqID][pgno].title);
     }*/

     //document.body.innerHTML = printAllContnet ; 

     if ($('input[name="rdpagerange"]:checked').val() == 2) {
         //Added by Sunny 0n 24th june 2016 for the alert without selecting the Page Numbers
         if ($('#txtslidefrom').val() == "") {
             alert("Please select the starting page for print.");
             return false;
         }
         if (($('#txtslideto').val() == "")) {
             alert("Please select the end page for print.");
             return false;
         }
         //End Sunny
         currPrintPageCnt = $('#txtslidefrom').val() - 1;
         getAllPrintpage();
         //alert(pagecnt);
     }
     if ($('input[name="rdpagerange"]:checked').val() == 3) {
         var str = $('#txtspecific').val();
         //Added by Sunny 0n 24th june 2016 for the alert without selecting the Page Numbers
         if(str == ""){
             alert("Please select the page number for print.");
             return false;
         }
         //End Sunny
         var strArray = str.split(',');
         var pagesStr = [];
         for (var i = 0; i < strArray.length; i++) {
             var strsp = strArray[i];
             if (strsp.indexOf("-") != -1) {
                 //pagesStr.push(getNumbers(strsp));
                 var stplit = strsp.split('-');
                // alert(stplit[0] + stplit[1]);
                 if (parseInt(stplit[0]) > parseInt(stplit[1])) {
                     alert('invalid input ex: 1-5');
                     return false;
                 } else {
                     for (j = stplit[0]; j <= stplit[1]; j++) {
                         pagesStr.push(parseInt(j));
                     }
                 }
             } else {
                 pagesStr.push(parseInt(strsp));
             }            
         }         
         pagesStr.sort(function (a, b) { return a - b });
         unique(pagesStr);
		 if(parseInt(pagesStr[0])<=0 || parseInt(pagesStr[pagesStr.length - 1]) > totalPages){
		    alert("Specified page range should be between 1 and "+totalPages);
			return false;
		 }
         getPrintpage();
     }

 }
 function unique(list) {
     var result = [];
     $.each(list, function (i, e) {
         if ($.inArray(e, result) == -1) result.push(e);
     });
     pagesStr = result;
     return result;
     //alert(pagesStr);

 }
 function popupprint() {
     // $("#printPopup").show();
     if (trackObjects[SeqID].printoptionall.toLowerCase() == "yes") {
         $("#txtslidefrom").val("");
         $("#txtslideto").val("");
         $("#txtSpecific").val("");
         $("#txtslidefrom").prop("disabled", true);
         $("#txtslideto").prop("disabled", true);
         $("#txtspecific").prop("disabled", true);       
         $("#printPopup input:radio:first").attr('checked', true);
     }
     $("#printPopup").dialog({
         draggable: false,
         height: 'auto',
         width: '60%',
         modal: true,
         open: function ()
         { },
         close: function () { },
         title: 'Print Content'
     });
     $("#printPopup").show();
 }
 function printpopenable(r) {

     if (r.value == 1) { $("#txtslidefrom").val(""); $("#txtslideto").val(""); $("#txtSpecific").val(""); $("#txtslidefrom").prop("disabled", true); $("#txtslideto").prop("disabled", true); $("#txtspecific").prop("disabled", true); }
     if (r.value == 2) {
         $("#txtSpecific").val(""); $("#txtslidefrom").prop("disabled", false);
         $("#txtspecific").prop("disabled", true); $("#txtslideto").prop("disabled", false);
     }
     if (r.value == 3) { $("#txtslidefrom").val(""); $("#txtslideto").val(""); $("#txtslidefrom").prop("disabled", true); $("#txtslideto").prop("disabled", true); $("#txtspecific").prop("disabled", false); }
 }

 function printPopupclose() {
     $('#printPopup').dialog('close');
 }
 function getAllPrintpage() {
     /*$("#b").load( 'ins_ratingdetails.html');
     alert($("#b").innerHTML);
     */
     var pagecnt = 0;
     pagecnt = getTotalPageInObject(SeqID);
     if ($('input[name="rdpagerange"]:checked').val() == 1) {
         pagecnt = getTotalPageInObject(SeqID);
     }
     if ($('input[name="rdpagerange"]:checked').val() == 2) {
         pagecnt = $('#txtslideto').val();
     }
     if (currPrintPageCnt < pagecnt) {
         if (getPageByIndex(currPrintPageCnt).type.toLowerCase() == 'summary') {
             currPrintPageCnt++;
             getAllPrintpage();
         }
         else {
			$.ajax({
				url: (getLangRef(selectedLanguage) == "")? getPageByIndex(currPrintPageCnt).url:getLangRef(selectedLanguage)+"/"+getPageByIndex(currPrintPageCnt).url,
				url: getPageByIndex(currPrintPageCnt).url,
                 type: 'GET',
                 dataType: 'html',
                 beforeSend: function () {

                 },
                 success: function (data, textStatus, xhr) {
                     try {
                         var tempdata = $(data);
                         $(tempdata).find("audio,video").each(function (i) {
                             $(this).trigger("pause");
                             $(this).removeAttr("autoplay");
                         });
						if (trackObjects[SeqID].singleqtnperpage == "yes"){
						if(getPageByIndex(currPrintPageCnt).iscoao == "co"){
						   var data = GetUpdatedData(tempdata);
							printAllContnet += "<div class='print' ><b>" + getPageTitle(getPageByIndex(currPrintPageCnt)) + " :</b>" + data + "</div></br>";
                         currPrintPageCnt++;
                         getAllPrintpage();
							} else{
								 printAllContnet += "<div class='print' ><b>" + getPageTitle(getPageByIndex(currPrintPageCnt)) + " :</b>" + data + "</div></br>";
                         currPrintPageCnt++;
                         getAllPrintpage();
							}                         	 
					 }
					else{
						    printAllContnet += "<div class='print' ><b>" + getPageTitle(getPageByIndex(currPrintPageCnt)) + " :</b>" + data + "</div></br>";
                         currPrintPageCnt++;
                         getAllPrintpage();
						 }
                     }
                     catch (e) { }
                 }
             });
         }
     } else {
         //alert(printAllContnet);
         printAllPages(printAllContnet);
     }
 }
 
 function GetUpdatedData(data){  // Bhushanam- added this code. 
	var data1 = data;
	  var sampleDiv = document.createElement("div");
		$(sampleDiv).html(data1);
		$(sampleDiv).find("table#instmaintable div:not(.pdfOP)").each(function (i) {
			$(this).css("position", "relative");
		}); 
		 data1 = $(sampleDiv).html(); 
	
   return data1;
	 
 }
 function getPrintpage() {
     var pagecnt;
     var pagenumber;
     pagecnt = pagesStr.length;
     if (currPrintPageCnt < pagecnt) {
         pagenumber = pagesStr[currPrintPageCnt] - 1;		 
         if (getPageByIndex(currPrintPageCnt).type.toLowerCase() == 'summary') {
             currPrintPageCnt++;
             getPrintpage();
         }
         else {
             $.ajax({
                url: (getLangRef(selectedLanguage) == "")? pages[SeqID][pagenumber].url:getLangRef(selectedLanguage)+"/"+pages[SeqID][pagenumber].url,
                 type: 'GET',
                 dataType: 'html',
                 beforeSend: function () {

                 },
                 success: function (data, textStatus, xhr) {
                     try {
                         var tempdata = $(data);
                         $(tempdata).find("audio,video").each(function (i) {
                             $(this).trigger("pause");
                             $(this).removeAttr("autoplay");
                         });
                         var data = $(tempdata).html();
                         //alert(data);
                         printAllContnet += "<div class='print' ><b>" + getPageTitle(getPageByIndex(currPrintPageCnt))/*getPageByIndex(currPrintPageCnt).title*/ + " :</b>" + data + "</div></br>";
                         currPrintPageCnt++;
                         getPrintpage();
                     }
                     catch (e) { }
                 }
             });
         }

     } else {
         //alert(printAllContnet);
         printAllPages(printAllContnet);
     }
 }

 function isNumber(e) {
     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             (e.keyCode == 65 && (e.ctrlKey === true)) ||
         // Allow: home, end, left, right, down, up
             (e.keyCode >= 35 && e.keyCode <= 39)) {
         // let it happen, don't do anything
         return;
     }
     // Ensure that it is a number and stop the keypress
     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
         e.preventDefault();
     }
 }
 function validate(val) {
     var patt1 = new RegExp("^(\\s*\\d+\\s*\\-\\s*\\d+\\s*,?|\\s*\\d+\\s*,?)+$");
     //console.log(patt1.test(val));
     if (patt1.test(val) == false) {
         alert("Only numbers Ex:2-3,4,5-15");
         $("#txtSpecific").val("");
         return false;
     }
     else if (val <= 0) {
         alert("please select value greaterthan  0");
         $("#txtSpecific").val("");
         return false;
     }
     else if (val > totalPages) {
         alert("please select value lessthan  " + (totalPages+1));
         $("#txtSpecific").val("");
         return false;
     }
 }
 function validatePageNumbersRange(id, val) {
     var pagecount = 0;
     if (trackObjects[SeqID].printoption == "yes" && trackObjects[SeqID].printoptionall == "yes") {
         pagecount = getTotalPageInObject(SeqID);
     }
     //var pagecount = totalPages;
	 
	 if($("#txtslidefrom").val() != "" && $("#txtslideto").val() != ""){
	     if(parseInt($("#txtslidefrom").val()) > parseInt($("#txtslideto").val())){
		    alert("Invalid page range. From page should be less than to page number.");
            $("#txtslidefrom").val(""); $("#txtslideto").val("");
             return false;			
		 }         		 
	 }

	 if (id == "txtslidefrom") {
         if (val <= 0) {
             alert("please select value greaterthan  0");
             $("#txtslidefrom").val("");
			 $("#txtslidefrom").focus();
             return false;
         } else if (val > totalPages) {
             alert("please select value lessthan  " + (totalPages+1));
             $("#txtslidefrom").val(""); 
			 $("#txtslidefrom").focus();
             return false;
         } 
     }
	 if (id == "txtslideto") {
         if (val <= 0) {
             alert("please select value greaterthan  0");
              $("#txtslideto").val("");
			  $("#txtslideto").focus();
             return false;
         } else if (val > totalPages) {
             alert("please select value lessthan  " + (totalPages+1));
              $("#txtslideto").val(""); 
			  $("#txtslideto").focus();
             return false;
         } 
     }
 }
 function enableprintoption(e) {
     e.stopPropagation();
    // $('.full-expand').hide();
     if (trackObjects[SeqID].singleqtnperpage == "no") {
         {
             //printPage();
             //$('.dropdown-menu').dropdown("toggle");
             $('.dropdown-menu').toggle();
             $('.dropdown-menu').find("a#printIt").unbind('click').bind('click', function (e) {
                 // printPage();
                 outputMode = 'print';
                 GenerateSinglePagePDF('print');
                 $('.dropdown-menu').hide();
                 //$('.full-expand').show();
             });
             $('.dropdown-menu').find("a#saveIt").unbind('click').bind('click', function (e) {
                 outputMode = 'pdf';
                 GenerateSinglePagePDF('pdf');
                 $('.dropdown-menu').hide();
                // $('.full-expand').show();
             });
         }
     } else {
         var toprintallpages = trackObjects[SeqID].printoptionall.toLowerCase();
         var toprintpagelevel = trackObjects[SeqID].printoption.toLowerCase();
         var printpg = getCoValues("printoptionpg").toLowerCase();
         if (toprintallpages == "yes" && toprintpagelevel == "yes") {
             popupprint();
         }
         else if (toprintallpages == "no" && toprintpagelevel == "yes" && printpg == "yes") {
             // alert(getCoValues("printoptionpg").toLowerCase());
             //printPage();
             //$('.dropdown-menu').dropdown("toggle");
             $('.dropdown-menu').toggle();
             $('.dropdown-menu').find("a#printIt").unbind('click').bind('click', function (e) {
                 //printPage();
                 outputMode = 'print';
                 GenerateSinglePagePDF('print');
                 $('.dropdown-menu').hide();
                // $('.full-expand').show();
             });
             $('.dropdown-menu').find("a#saveIt").unbind('click').bind('click', function (e) {
                 outputMode = 'pdf';
                 GenerateSinglePagePDF('pdf');
                 $('.dropdown-menu').hide();
                // $('.full-expand').show();
             });
         }
         //alert('test '+	trackObjects[SeqID].printoption.toLowerCase());
     }
 }
 /**********************************Font increase******************************************/
 function increaseFontSize(){
    if(currentFontIncrement < maxFontIncrements){
	     currentFontIncrement ++;
	     $('table[id^="instmaintable"] div:not([id^="tabContDiv_"],[id^="tab_"],[id^="removeImage_"],[id^="removeVideo_"],[id^="gamecontrols_"],[id^="tblControls_"])').each(function (ind) {
	        
	         var objfontSize = parseInt($('table[id^="instmaintable"]').css("font-size"));
		if($(this).attr("id") != "" || $(this).attr("id") != undefined){
		    var divId = $(this).attr("id");
		    if (divId != undefined && divId != "" && isMatchGameControls($(this)) == false) {
		            if (divId.indexOf("horizontalTab_") > -1) {		            
		                if ($(this).find("a.r-tabs-anchor") != "" && $(this).find("a.r-tabs-anchor").length > 0) {
		                    if ($(this).find("a.r-tabs-anchor").css("font-size") != undefined) {
		                        objfontSize = $(this).find("a.r-tabs-anchor").css("font-size");
		                        objfontSize = parseInt(objfontSize);		                    
		                        objfontSize = parseInt(objfontSize) + 1;
		                        $(this).find("a.r-tabs-anchor").css("font-size", objfontSize + 'px');		                    
		                    } else {		                    
		                        objfontSize = objfontSize + 1;
		                        $(this).find("a.r-tabs-anchor").css("font-size", objfontSize + 'px');		                   
		                    }
		                }
		            }
		            if ($(this).find("th").length > 0 && ($(this).attr("id")).indexOf("ratingcontainer") != -1) {
		                if ($(this).find("th").css("font-size") != undefined) {
		                    objfontSize = $(this).find("th").css("font-size");
		                    objfontSize = parseInt(objfontSize);
		                    //if (objfontSize < 28) {
		                    objfontSize = parseInt(objfontSize) + 1;
		                    $(this).find("th").css("font-size", objfontSize + 'px');
		                    //}
		                } else {
		                    //if (objfontSize < 28) {
		                    objfontSize = objfontSize + 1;
		                    $(this).find("th").css("font-size", objfontSize + 'px');
		                    //}

		                }
		            }
		            if (divId.indexOf("horizontalTab_") > -1 || divId.indexOf("tabContDiv_") > -1 || divId.indexOf("tab_") > -1 || divId.indexOf("removeImage_") > -1 || divId.indexOf("removeVideo_") > -1 || divId.indexOf("gamecontrols_") > -1 || divId.indexOf("tblControls_") > -1 || divId.indexOf("ratingcontainer") > -1 || divId.indexOf("ratingmainContainer") > -1 || divId.indexOf("questionContainer") > -1) {
			           return true;
			        }
		        }
		        if ($(this).hasClass("star_container")) {
		            return true;
		        }
		  
			if($(this).find("font") != undefined && $(this).find("font") != "" && $(this).find("font").length >0 && isMatchGameControls($(this)) == false){
				objfontSize = $(this).find("font").css("font-size");
				objfontSize = parseInt(objfontSize);
				objfontSize = parseInt(objfontSize) + 1;
				//if (objfontSize <28)
				    $(this).find("font").css("font-size",objfontSize+'px');
			}else if($(this).css("font-size") != undefined && isMatchGameControls($(this)) == false){
					objfontSize = $(this).css("font-size");
					objfontSize = parseInt(objfontSize);
					objfontSize = parseInt(objfontSize) + 1;
					//if (objfontSize < 28)
					    $(this).css("font-size",objfontSize+'px');
			}
			else{
			if(isMatchGameControls($(this)) == false){
				objfontSize = objfontSize+1;
				$(this).css("font-size",objfontSize+'px');
				}
			
			}

		    // /* For Text Entry Objects
			if ($(this).find("textarea") != "" && $(this).find("textarea").length > 0) {
			    if ($(this).find("textarea").css("font-size") != undefined) {
			        objfontSize = $(this).find("textarea").css("font-size");
			        objfontSize = parseInt(objfontSize);
			        //if (parseInt(objfontSize) < 28) {
			            objfontSize = parseInt(objfontSize) +1;
			            $(this).find("textarea").css("font-size", objfontSize + 'px');
			        //}
			    } else {
			        //if (parseInt(objfontSize) < 28) {
			            objfontSize = objfontSize + 1;
			            $(this).find("textarea").css("font-size", objfontSize + 'px');
			       // }

			    }
			}
		    // /* For Text Entry Objects
			if ($(this).find("input:text") != "" && $(this).find("input:text").length > 0) {
			    if ($(this).find("input:text").css("font-size") != undefined) {
			        objfontSize = $(this).find("input:text").css("font-size");
			        objfontSize = parseInt(objfontSize);
			        //if (parseInt(objfontSize) < 28) {
			            objfontSize = parseInt(objfontSize) + 1;
			            $(this).find("input:text").css("font-size", objfontSize + 'px');
			        //}
			    } else {
			        //if (parseInt(objfontSize) < 28) {
			            objfontSize = objfontSize + 1;
			            $(this).find("input:text").css("font-size", objfontSize + 'px');
			       // }

			    }
			}
			if($(this).attr("id") != undefined){
				if($(this).find("td[id^='choice']").length > 0 && ($(this).attr("id")).indexOf("optionsContainer") != -1){
					if ($(this).find("td[id^='choice']").css("font-size") != undefined) {
						objfontSize = $(this).find("td[id^='choice']").css("font-size");
						objfontSize = parseInt(objfontSize);
						//if (objfontSize < 28) {
							objfontSize = parseInt(objfontSize) + 1;
							$(this).find("td[id^='choice']").css("font-size", objfontSize + 'px');
						//}
					} else {
						//if (objfontSize < 28) {
							objfontSize = objfontSize + 1;
							$(this).find("td[id^='choice']").css("font-size", objfontSize + 'px');
						//}

					}
				
				}
				
				if($(this).find("td").length > 0 && ($(this).attr("id")).indexOf("matrixContainer") != -1){
					if ($(this).find("td").css("font-size") != undefined) {
						objfontSize = $(this).find("td").css("font-size");
						objfontSize = parseInt(objfontSize);
						//if (objfontSize < 28) {
							objfontSize = parseInt(objfontSize) + 1;
							$(this).find("td").css("font-size", objfontSize + 'px');
						//}
					} else {
						//if (objfontSize < 28) {
							objfontSize = objfontSize + 1;
							$(this).find("td").css("font-size", objfontSize + 'px');
						//}

					}
				
				}
			}
		}
	})
	}
}

function decreaseFontSize() {
  //  $('table[id^="instmaintable"] div')
  if(currentFontIncrement > minFontDecrements){
      currentFontIncrement--;
      //$('table[id^="instmaintable"] div:not([[id^="tabContDiv_"],div[id^="tab_"],div[id^="removeImage_"],div[id^="removeVideo_"],div[id^="gamecontrols_"],div[id^="tblControls_"])')
      $('table[id^="instmaintable"] div:not([id^="tabContDiv_"],[id^="tab_"],[id^="removeImage_"],[id^="removeVideo_"],[id^="gamecontrols_"],[id^="tblControls_"])').each(function (ind) {
        var objfontSize = parseInt($('table[id^="instmaintable"]').css("font-size"));
		if($(this).attr("id") != "" || $(this).attr("id") != undefined){
		   var divId = $(this).attr("id");
		   if (divId != undefined && divId != "" && isMatchGameControls($(this)) == false) {

		       if (divId.indexOf("horizontalTab_") > -1) {
		           if ($(this).find("a.r-tabs-anchor") != "" && $(this).find("a.r-tabs-anchor").length > 0) {
		               if ($(this).find("a.r-tabs-anchor").css("font-size") != undefined) {
		                   objfontSize = $(this).find("a.r-tabs-anchor").css("font-size");
		                   objfontSize = parseInt(objfontSize);		                  
		                   objfontSize = parseInt(objfontSize) - 1;
		                   $(this).find("a.r-tabs-anchor").css("font-size", objfontSize + 'px');		                   
		               } else {		                   
		                   objfontSize = objfontSize - 1;
		                   $(this).find("a.r-tabs-anchor").css("font-size", objfontSize + 'px');		                   
		               }
		           }
		       }
		       if ($(this).find("th").length > 0 && ($(this).attr("id")).indexOf("ratingcontainer") != -1) {
		           if ($(this).find("th").css("font-size") != undefined) {
		               objfontSize = $(this).find("th").css("font-size");
		               objfontSize = parseInt(objfontSize);
		               //if (objfontSize > 6) {
		               objfontSize = parseInt(objfontSize) - 1;
		               $(this).find("th").css("font-size", objfontSize + 'px');
		               //}
		           } else {
		               //if (objfontSize > 6) {
		               objfontSize = objfontSize - 1;
		               $(this).find("th").css("font-size", objfontSize + 'px');
		               //}
		           }
		       }
		       if (divId.indexOf("horizontalTab_") > -1 || divId.indexOf("tabContDiv_") > -1 || divId.indexOf("tab_") > -1 || divId.indexOf("removeImage_") > -1 || divId.indexOf("removeVideo_") > -1 || divId.indexOf("gamecontrols_") > -1 || divId.indexOf("tblControls_") > -1 || divId.indexOf("ratingcontainer") > -1 || divId.indexOf("ratingmainContainer") > -1 || divId.indexOf("questionContainer") > -1) {
			       return true;
			   }
		   }
		   if ($(this).hasClass("star_container")) {
		       return true;
		   }

			if($(this).find("font") != undefined && $(this).find("font") != "" && $(this).find("font").length >0 && isMatchGameControls($(this)) == false){
				objfontSize = $(this).find("font").css("font-size");
				objfontSize = parseInt(objfontSize);
				//if(objfontSize>6){
					objfontSize = parseInt(objfontSize)-1;
					$(this).find("font").css("font-size",objfontSize+'px');
				//}
			}else if($(this).css("font-size") != undefined && isMatchGameControls($(this)) == false){
				objfontSize = $(this).css("font-size");
				objfontSize = parseInt(objfontSize);
				//if(objfontSize>6){
					objfontSize = parseInt(objfontSize)-1;
					$(this).css("font-size",objfontSize+'px');
				//}
			}
			else{
				if(isMatchGameControls($(this)) == false){
				  objfontSize = objfontSize-1;
				  $(this).css("font-size",objfontSize+'px');
				}
			}
			
			// /* For Text Entry Objects
			if ($(this).find("textarea") != "" && $(this).find("textarea").length > 0) {
				if ($(this).find("textarea").css("font-size") != undefined) {
					objfontSize = $(this).find("textarea").css("font-size");
					objfontSize = parseInt(objfontSize);
					//if (objfontSize > 6) {
						objfontSize = parseInt(objfontSize) - 1;
						$(this).find("textarea").css("font-size", objfontSize + 'px');
					//}
				} else {
					//if (objfontSize > 6) {
						objfontSize = objfontSize - 1;
						$(this).find("textarea").css("font-size", objfontSize + 'px');
					//}

				}
			}
		    // /* For Text Entry Objects
			if ($(this).find("input:text") != "" && $(this).find("input:text").length > 0) {
			    if ($(this).find("input:text").css("font-size") != undefined) {
			        objfontSize = $(this).find("input:text").css("font-size");
			        objfontSize = parseInt(objfontSize);
			        //if (objfontSize > 6) {
			            objfontSize = parseInt(objfontSize) - 1;
			            $(this).find("input:text").css("font-size", objfontSize + 'px');
			        //}
			    } else {
			        //if (objfontSize > 6) {
			            objfontSize = objfontSize - 1;
			            $(this).find("input:text").css("font-size", objfontSize + 'px');
			        //}

			    }
			}
			if($(this).attr("id") != undefined){
				if($(this).find("td[id^='choice']").length > 0 && ($(this).attr("id")).indexOf("optionsContainer") != -1){
					if ($(this).find("td[id^='choice']").css("font-size") != undefined) {
						objfontSize = $(this).find("td[id^='choice']").css("font-size");
						objfontSize = parseInt(objfontSize);
						//if (objfontSize > 6) {
							objfontSize = parseInt(objfontSize) - 1;
							$(this).find("td[id^='choice']").css("font-size", objfontSize + 'px');
						//}
					} else {
						//if (objfontSize > 6) {
							objfontSize = objfontSize - 1;
							$(this).find("td[id^='choice']").css("font-size", objfontSize + 'px');
						//}

					}
				
				}
				
				if($(this).find("td").length > 0 && ($(this).attr("id")).indexOf("matrixContainer") != -1){
					if ($(this).find("td").css("font-size") != undefined) {
						objfontSize = $(this).find("td").css("font-size");
						objfontSize = parseInt(objfontSize);
						//if (objfontSize > 6) {
							objfontSize = parseInt(objfontSize) - 1;
							$(this).find("td").css("font-size", objfontSize + 'px');
						//}
					} else {
						//if (objfontSize > 6) {
							objfontSize = objfontSize - 1;
							$(this).find("td").css("font-size", objfontSize + 'px');
						//}

					}
				
				}
			}
			
			// ********************** END ***************************
		}
	})
  }
}

function isMatchGameControls(obj){
var isControls = false;
//var objClass = $(obj).attr("class");
//if(objClass.indexOf("game") != -1){
//isControls = true;
//}
if ($(obj).hasClass("gameHelp_btn") || $(obj).hasClass("gameSound_btn") || $(obj).hasClass("gameplay_btn") || $(obj).hasClass("gamepause_btn") || $(obj).hasClass("gamereset_btn") || $(obj).hasClass("levelbox") || $(obj).hasClass("gamelevelSelected") || $(obj).hasClass("gametimer") || $(obj).hasClass("gameScore") || $(obj).hasClass("gamelevels") || $(obj).hasClass("gameretake") || $(obj).attr("id") == "divControls3" || $(obj).attr("id") == "divControls2" || $(obj).attr("id") == "divControls1" || $(obj).hasClass("gamecontainer") || $(obj).hasClass("replayWrapper") || $(obj).hasClass("instDiv") || $(obj).hasClass("strtInstructions")) {
			isControls = true
	}
 return isControls;

}
 /**********************************Font increase******************************************/
 /**********************************COPY TO NOTES**************************************************/
 
 function loadContextMenuSettings(){
     document.oncontextmenu = function () { return false; };

     /******************************************General method***************************************************/

     $("body").append('<div id="copyToNotes">Copy to Notes</div>');
    $("#copyToNotes").css({ 'display': 'none', 'width': 'auto', 'height': 'auto', 'background': '#CDE6F7', 'color': '#ffffff', 'position': 'absolute', 'text-align': 'center', 'font-weight': 'bold', 'padding': '2px', 'color': '#4C4848'})
	
	
	if(getMobileUserAgent()){	    
	    if(!window.CurrentSelection){
			CurrentSelection = {}
		}		
		CurrentSelection.Selector = {}
		CurrentSelection.Selector.mouseup = function(e){            
			showingContextMenu = false;
			showButton(e);
		}
		CurrentSelection.Selector.touchend = function(e){
            var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
			if(isIOS){		
				showingContextMenu = false;
				$(document).unbind("touchstart",CurrentSelection.Selector.touchstart);
				var evt = e.originalEvent;
				//evt.preventDefault();
				showButton(evt);
			}
		}
		CurrentSelection.Selector.touchstart = function(e){
            var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
			if(isIOS){		
			  $(document).bind("touchend",CurrentSelection.Selector.touchend);
			}
		}
		$(function(){
		    document.oncontextmenu = function () { return false; };
			$(document).on('mouseup touchend', function(){});
			var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
			if(isIOS){	     
			     $(document).bind("touchstart",CurrentSelection.Selector.touchstart);			    
			}else{
			  $(document).bind('mouseup', CurrentSelection.Selector.mouseup);
            }			
		}) 
        $("#copyToNotes").on("touchend", onCopyNotesClicked);		
	}else{
		$(document).bind("contextmenu", function (e) {	    
		  showButton(e);
	    });	
		$("#copyToNotes").on("click", onCopyNotesClicked);
	}
	
	function onCopyNotesClicked(e){
		copyTextToUserNotes($("#copyToNotes").data("selectedTxt")); 							
		$("#copyToNotes").hide(500); 
		//$(document).unbind("touchend");
		//$(document).unbind('mouseup');
		showingContextMenu = false; 
		try{
		  $(document).bind("touchstart",CurrentSelection.Selector.touchstart);
		  $(document).unbind("touchend",CurrentSelection.Selector.touchend);
		}catch(e){}
    }	

     /******************************************General method***************************************************/

     /******************************************Using third party plugin***************************************************/
     /*var cssLink = $("<link rel='stylesheet' type='text/css' href='styles/jquery.contextmenu.css'>");
      $("body").append(cssLink);
     $.ajax({
	  url: "scripts/jquery.contextmenu.js",
	  dataType: "script",
	  success: function(){
	    // console.log("successfully loaded!");
		contextMenuPopup = $(document).contextPopup({		  
			items: [{
			    label:'Copy text to notes',     
				//icon:'icons/book-open-list.png',  
				action:function() { 				  
				    //copyTextToUserNotes(getSelectionText());
				    //return false;
				}, 
				isEnabled:function() { 
				    //debugger;
				   if((getSelectionText()).length > 0){				     
				     return true; 
				   }
				   else {				       
				      return false;
				   }
				}, 	
                isHidden:function() { 
				    //debugger;
                   if ((getSelectionText()).length > 0 && trackObjects[SeqID].allowcopynotes == "yes") {
				     return false; 
				   }
				   else {				       
				      return true;
				   }
				} 				
			},
		]});	
	  }
	});*/
     /******************************************Using third party plugin***************************************************/
 }
function startFocusOut() {
	$(document).on("click", function (e) {
	    //alert($(e.target).attr('id')+"<------------?"+$("#copyToNotes").css("opacity"));
	    if(showingContextMenu == true && $("#copyToNotes").css("opacity") == 1){
			$("#copyToNotes").hide(500);
			//alert("document click document click");
			$(document).off("click");
			showingContextMenu = false;
			$('#iframeusernotes').off('load',onUserNotesLoaded);
		}
	});
}    
function showButton(e) {
    var selectedText = getSelectionText();
    if (selectedText.length > 0 && !showingContextMenu && trackObjects[SeqID].allowcopynotes == "yes" && currPageObject.type != "summary") {
		e.preventDefault();		
		$("#copyToNotes").css("left", e.pageX);
		$("#copyToNotes").css("top", e.pageY);
		$("#copyToNotes").data("selectedTxt", selectedText);
		$("#copyToNotes").fadeIn(500, startFocusOut());
		showingContextMenu = true;
	} else {
		$("#copyToNotes").hide(500);
		//alert("showButton else showButton else");
		$(document).off("click");
		showingContextMenu = false;
	} 
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    try {
        if (text == "" && (document.activeElement.type == "textarea" || document.activeElement.type == "text")) {
            var obj = document.activeElement;
            text = obj.value.substring(obj.selectionStart, obj.selectionEnd);
        }
    } catch (e) { }
    var str = text;
    str = str.replace(/\s\s+/g, '');
    if (str == "") {
        text = str;
    }
    return text;
}
function copyTextToUserNotes(txt) {
    if (window.parent.location.href.toLowerCase().indexOf("remote") > -1 || (window.parent.location.href.toLowerCase().indexOf("nativeappurl=true") > -1 && window.parent.location.href.toLowerCase().indexOf("cid=") == -1)) {
        if (Notestate == "off") {
        var strBegin = window.parent.location.href.toLowerCase().split("remote")[0];       
            var totalurl = "";
            if (window.parent.parent.location.href.toLowerCase().indexOf("/trackid/") > -1) {
                var strtrackslipt = window.parent.parent.location.href.toLowerCase().split("/trackid/")[1];
                strtrackslipt.split('/scoid/')[0]
                var strsqeid = SeqID + 1;
                totalurl = strBegin + 'UserPageNotes.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + strtrackslipt.split('/scoid/')[0] + '&SeqID=' + strsqeid + '&ALL=false';
            } else {
                totalurl = strBegin + 'UserPageNotes.aspx?ContentID=' + trackObjects[SeqID].contentid + '&PageID=' + UsernotePageID + '&TrackID=' + '&SeqID=' + 0 + '&ALL=false';
            }
            $('#opennotePopup').show();
            $("#opennotePopup").css("opacity", 0);
            $('#openPolledresponsePopup').hide();
            $('#iframeusernotes').on('load', onUserNotesLoaded);
            $('#iframeusernotes').attr('src', totalurl);            
            $('#openccPopup').hide();
        } else {
            sendNotes();
        }
        //Notestate = "on"
    } else {
           
            if (Notestate == "off"){
                try {
                    $('#BtnNoteSubmit').unbind('click');
                    $('#Notelist').undelegate();
                } catch (e) { }
			
                $('#opennotePopup').show();
                $("#opennotePopup").css("opacity", 0);
                $('#iframeusernotes').attr('style', 'display:none');
                $('#divusernotes').attr('style', 'display:block');
            }
            if (!isPreviewMode())
                BindUserPageNotes();
            $('#inputnote').val(txt);
            var text = $('#inputnote').val();
            var noteID = $('#Notelist').find("li").length + 1;
            var item = "<li id='" + noteID + "'><div style='float:left;width:90%'><p style='margin:0px;'>" + text + "</p><img id='doneedit' style='display:none' src='images/done_icon.png' title='Done'></div><div style='float:right;width:10%;'><img id='edit' src='images/edit_icon.png' title='Edit'><img id='closeimg' src='Images/delete_ico.png' title='Remove'></div><span style='clear:both;'></span></li>";
            $('#Notelist').append(item);
            $('#inputnote').val('');
            var strsqeid = SeqID + 1;
            try {
                MobileJSInterface.saveUserPageNotesWithContentIDPageIDSequenceIDUserNotesTextNoteCountIsType(trackObjects[SeqID].contentid, UsernotePageID, strsqeid, text, noteID, "ADD");
            } catch(e) { }
            if (Notestate == "off"){
                $("#opennotePopup").css("opacity", 1);
                $('#iframeusernotes').attr('style', 'display:block');
                $('#opennotePopup').hide();
            }
			//Notestate = "off";       
    }

}

function onUserNotesLoaded(){ 
 setTimeout(sendNotes,300);
}
function sendNotes(){
    var txt = $("#copyToNotes").data("selectedTxt");
	$("#copyToNotes").data("selectedTxt","");
	var userNotesDoc = (window.document.getElementById("iframeusernotes").contentWindow).document;	
	 var ipTxt = $(userNotesDoc).find("#inputnote");
	 var submitBtn = $(userNotesDoc).find("#BtnNoteSubmit");
	 $(ipTxt).val(txt);
	 $(submitBtn).trigger("click");
	 $("#opennotePopup").css("opacity", 1);
	 if (Notestate == "off") {
	     $('#opennotePopup').hide();	    
	     $('#iframeusernotes').off('load', onUserNotesLoaded);
	 }
	 $(document).off("click");
	 showingContextMenu = false;
}
 /**********************************COPY TO NOTES**************************************************/
 
function getLangRef(lang) {
  
    var langRef = ""
    //added by ananta for getting the langref dynamically - 20/2/17
     var languagesid = [];
     languagesid = (trackObjects[SeqID].availableLanguagesid.split(",") == undefined ? trackObjects[SeqID].availableLanguagesid : trackObjects[SeqID].availableLanguagesid.split(","));     
     for (i = 0; i <= languagesid.length - 1; i++) {
         var langid = "";
         if (lang != "english") {
             if (languagesid[i].indexOf(lang) != -1) {
                 langRef = languagesid[i].split("_")[2];
                 if (langRef.indexOf("-") != -1) {
                     langRef = langRef.replace("-", "");
                 }
             }
         }
     }
    //switch(lang) {
	//    case ("english"):
	//		langRef = ""
	//		break;
	//    case ("french"):
	//        langRef = "fr-FR"
	//		break;
	//    case ("spanish"):
	//		langRef = "esp"
	//		break;
	//    case ("arabic"):
	//        langRef = "ara"
	//        break;
	//	default:
	//		 langRef = ""

	//}
    return langRef;
}
 function getPageTitle(obj, lang) {
    //debugger;
	var title = "";
	var prop = "title"
	if (lang == "" || lang == undefined) {
	    lang = userPreferedLang.toLowerCase();
	}
	if(obj.type  == "page"){
	    try{
	        var langRef = getLangRef(lang);
			if(langRef != ""){
			   prop = langRef +"_"+ prop ;
			}
		}catch(e){prop = "title";}
	}
	title = obj[prop];
	if (title == undefined || title == "" || title == null) {
	    title = obj["title"];
	}
    return title;
}
function resumeTimelineOnPopupClose(){
 if (isTimeline().toLowerCase() == "yes") {
		onPlayClick();
	}
}
function updateTocTextWithLang(lang) {
    var obj;
    if (isTrack == "yes") {
        obj = $('#folderTree').find('span[type="page"]');
    } else {
        obj = $('#folderTree div div table tbody tr td span[type="page"]');
    }
    $(obj).each(function (index) {
        var val = $(this).attr("pageNum");
        var title = getPageTitle(getPageByIndex(val), lang);
        $(this).text(title);
    });
}

function checkAndHideTableGrid(){
    var width = $(window).width();    
	//if(width <= 550){
		$("div[id^='tablediv'] table").each(function(){
			var tab = $(this);
			if(tab.attr("border") == "0"){
			    $(tab.find('tr')).css("border", "0px solid #ffffff");
			    $(tab).css("border", "0px solid #ffffff");
			}
		})
	//}
}

function showHintLayer(obj) {
    var forThepage = $(obj).attr("data-attr");
    forThepage = Number(forThepage) - 1;
    var hasContent = chkSoultionHintLayerHasContent(obj, "hints", forThepage);
    if (hasContent == false) { return false }

 if(maxHints != "unlimited"){
	makeHintCount(obj);
	if (trackObjects[SeqID].singlePageRendering == "no") {
		if(hintsCount <= parseInt(maxHints) && courseHintsArr[innerPage] == 1){
			generateHintPopup(obj);
		}else{
			alert("You have exceeded the maximum number of hints");
		}
	}else{
		var objId = $(obj).attr("id");
		var objval = objId.split("_")[1];
		objval =  parseInt(objval)-1;
		if(hintsCount <= parseInt(maxHints) && courseHintsArr[objval] == 1){
			generateHintPopup(obj);
		}else{
			alert("You have exceeded the maximum number of hints");
		}
	}
	
 }else{
	generateHintPopup(obj);
 }
}

function createCourseHintsArr() {
 var totPages =  getTotalPageInObject(SeqID);
 	for (var i=0;i<totPages;i++){
			courseHintsArr[i] = 0;
	}
}

function makeHintCount(obj){
	if (trackObjects[SeqID].singleqtnperpage == "yes"){
		if(hintsCount < parseInt(maxHints) && courseHintsArr[innerPage] == 0){
			hintsCount = hintsCount+1;
			courseHintsArr[innerPage] = 1;
		}
	}else{
		var objId = $(obj).attr("id");
		var objval = objId.split("_")[1];
		objval =  parseInt(objval)-1;
		if(hintsCount < parseInt(maxHints) && courseHintsArr[objval] == 0){
			hintsCount = hintsCount+1;
			courseHintsArr[objval] = 1;
		}

	}
	
}

function generateHintPopup(obj) {
    var forThepage = $(obj).attr("data-attr");
    forThepage = Number(forThepage) - 1;
 var hintLayerDiv;
 if (trackObjects[SeqID].singlePageRendering == "yes") {
        var hintPageId = $(obj).attr("id").split("_")[1];
        var instTblId = "#singlePageContent_" + forThepage
        hintLayerDiv = $(instTblId).find("div[type='hints']");
    } else {
        hintLayerDiv = $("#instmaintable").find("div[type='hints']");
    }


    $(hintLayerDiv).css("z-index", 99889900);
    $(hintLayerDiv).show();
    showJplayerVideoInHintsAndSolution($(hintLayerDiv));
    var isTimeLine = isTimeline();
    if (isTimeLine == "yes") {
        onPauseClick();
    }
    var closeBtn = $(hintLayerDiv).find("div[type='hints']")
    var pageeType = (isTimeLine != "yes") ? "page" : "timelinepage";
    $(closeBtn).unbind("click");
    $(closeBtn).bind("click", function () {
        toggleLayerState($(this), pageeType);
    });
}
function appendHintsArraytoStrData(strData){
	var hinstsStr = "";
	if(courseHints == "yes" && maxHints != "unlimited"){
		if(strData.indexOf("^^") == -1){
			//alert("ARR :"+courseHintsArr.toString());
			hinstsStr = "^^"+courseHintsArr.toString();
			strData = strData+hinstsStr;
		}else{
			strData = strData.split("^^")[0];
			hinstsStr = "^^"+courseHintsArr.toString();
			strData = strData+hinstsStr;
		}
	}else{
		strData = strData
	}
	//alert("strData :"+strData);
	return strData;
}

function setHintsArrayValues(strData){
	courseHints  = trackObjects[SeqID].coursehints;
	maxHints  = trackObjects[SeqID].maxhints;
	if(courseHints == "yes" && maxHints != "unlimited"){
		if(strData.indexOf("^^") != -1){
			var hintsStr = strData.split("^^")[1];
			courseHintsArr = hintsStr.split(",");
			hintsCount = getHintsCount(courseHintsArr);
		}else{
			hintsCount = 0;
			createCourseHintsArr();
		}
	}
}

function getHintsCount(arr){
	countArr = jQuery.grep(arr, function( a ) {
		return a == 1;
	});
	return countArr.length;
}

function updateCourseHintsInSinglePage(){
	if(courseHints == "yes" && maxHints != "unlimited"){
		var strData = LMSGetValue("cmi.suspend_data");
		strData = appendHintsArraytoStrData(strData);
		LMSSetValue("cmi.suspend_data", strData);
	}
}

function showSolutionLayer(obj) {
    var forThepage = $(obj).attr("data-attr");
    forThepage = Number(forThepage) - 1;
    var hasContent = chkSoultionHintLayerHasContent(obj, "solution", forThepage);
    if (hasContent == false) { return false };

    var solLayerDiv;
    if (trackObjects[SeqID].singlePageRendering == "yes") {
        var hintPageId = $(obj).attr("id").split("_")[1];
        var instTblId = "#singlePageContent_" + forThepage
        solLayerDiv = $(instTblId).find("div[type='solution']");
    } else {
        solLayerDiv = $("#instmaintable").find("div[type='solution']");
    }


    $(solLayerDiv).css("z-index", 9988999);
    $(solLayerDiv).show();
    showJplayerVideoInHintsAndSolution($(solLayerDiv));
    var isTimeLine = isTimeline();
    if (isTimeLine == "yes") {
        onPauseClick();
    }
    var closeBtn = $(solLayerDiv).find("div[type='solution']")
    var pageeType = (isTimeLine != "yes") ? "page" : "timelinepage";
    $(closeBtn).unbind("click");
    $(closeBtn).bind("click", function () {
        toggleLayerState($(this), pageeType);
    });
}

function showJplayerVideoInHintsAndSolution(obj) {
    $(obj).find(".jp-jplayer").each(function () { //Find Jplayer video
        $(this).jPlayer("destroy");
        var jpObjId = $(this).attr("id");
        jpObjId = jpObjId.split("_")[2];
        loadjPlayerVideo(jpObjId);
    });

}


function chkSoultionHintLayerHasContent(obj, type, forThepage) {
    var hasContent = false;
    var sourceObj;

    if (trackObjects[SeqID].singlePageRendering == "no") {
        sourceObj = $("#page").find("div[type='" + type + "'][class*='layers']");
    } else {
        var objId = $(obj).attr("id").split("_")[1];
        var instTbl = "#singlePageContent_" + forThepage;
        sourceObj = $(instTbl).find("div[type='" + type + "'][class*='layers']");
    }	
    if($(sourceObj).find("div:not([class*='layer-close'])").length > 0){	    
	    hasContent = true;
    }
   
    return hasContent;
}
function matchWithPooledPageArray(arr){    
    var actPagesObj = pages[SeqID];
	var pagesObj = actPagesObj.slice(0);
	if((trackObjects[SeqID]).autopoolgeneration == "true"||trackObjects[SeqID].topicLevelPoolWithDiff == 'yes'){
	   pagesObj = getTotalPages(pagesObj);
	}
    var pooledArray = new Array();
	var str = pooledQuestionsStringArray[SeqID];
    var compArray = str.split(",");		
	var obj = pagesObj[pagesObj.length-1];
	if(obj.type != undefined){
		if((obj.type).toLowerCase() == "summary"){
		   compArray.pop();
		}
	}	
	var len = compArray.length;
	var totPrevPages = getNumberOfPrevPages();
    for (var i = 0; i <len; i++) {
        var currPgNum = Number(compArray[i]);// This is the pagenumber in randomized array.
		//var num = currPgNum - totPrevPages; // This is the actual inner page number.
		var obj;
		/*if(trackObjects[SeqID].questionrandomization == "yes"){
		   obj = getSpecificObjects(pagesObj,"actualPageNumber",currPgNum)[0];
		}else{*/
		   obj = pagesObj[i];
		//}		
		var qpageId = obj.qPageId;
		var quesObj = getSpecificObjects(arr,"questionPageId",qpageId)[0];	      		
		pooledArray.push(quesObj); 
		
    }
    return pooledArray;
}
function disableSolutionButton(forThepage) {
    if (trackObjects[SeqID].singleqtnperpage == "yes") {
        if (document.getElementById("solutionbut" + forThepage) != null || document.getElementById("solutionbut" + forThepage) != undefined) {
            if (document.getElementById("submitbut" + forThepage) != null || document.getElementById("submitbut" + forThepage) != undefined) {
                $('#solutionbut' + forThepage).unbind('click');
                $('#solutionbut' + forThepage).css({ "opacity": "0.5", "cursor": "default" });

            } else {
                $('#solutionbut' + forThepage).hide();
            }
        }
    }
}

function enableSolutionButton(forThepage) {
    if (trackObjects[SeqID].singlePageRendering == "no") {
        if (document.getElementById("solutionbut" + forThepage) != null || document.getElementById("solutionbut" + forThepage) != undefined) {
            $('#solutionbut' + forThepage).unbind('click');
            $('#solutionbut' + forThepage).bind('click', function () { showSolutionLayer($(this)) });
            $('#solutionbut' + forThepage).css({ "opacity": "1", "cursor": "pointer" });
        }
    } else {
        if (forThepage != undefined) {
            if (document.getElementById("solutionbut" + forThepage) != null || document.getElementById("solutionbut" + forThepage) != undefined) {
                $('#solutionbut' + forThepage).unbind('click');
                $('#solutionbut' + forThepage).bind('click', function () { showSolutionLayer($(this)) });
                $('#solutionbut' + forThepage).css({ "opacity": "1", "cursor": "pointer" });
            }
        }
    }

}
function showHideHintButton(forThepage) {
    try {
        if (trackObjects[SeqID].singlePageRendering == "yes") {
            $("#singlePageContent_" + forThepage).find("[id^='hintbut']").each(function (e) {
                var hasContent = chkSoultionHintLayerHasContent($(this), "hints", forThepage);
                if (hasContent == false) { $(this).hide(); }
                else { $(this).show(); }
            })
        }
        else {
            $("#page").find("[id^='hintbut']").each(function (e) {
                var forThepage = $(this).attr('data-attr');
                var hasContent = chkSoultionHintLayerHasContent($(this), "hints", forThepage);
                if (hasContent == false) { $(this).hide(); }
                else { $(this).show(); }
            })
        }

	}catch(e){}
}
function showHideSolutionButton(forThepage) {
    try {
        if (trackObjects[SeqID].singlePageRendering == "yes") {
            $("#singlePageContent_" + forThepage).find("[id^='solutionbut']").each(function (e) {
                var hasContent = chkSoultionHintLayerHasContent($(this), "solution", forThepage);
                if (hasContent == false) { $(this).hide(); }
                //else {$(this).show();}
            });

            if (document.getElementById("submitbut" + forThepage) == null) {
                $("#solutionbut" + forThepage).hide();
            }
        }
        else {
            $("#page").find("[id^='solutionbut']").each(function (e) {
                var forThepage = $(this).attr('data-attr');
                var hasContent = chkSoultionHintLayerHasContent($(this), "solution", forThepage);
                if (hasContent == false) { $(this).hide(); }
                //else {$(this).show();}

                if (document.getElementById("submitbut" + forThepage) == null) {
                    $("#solutionbut" + forThepage).hide();
                }
            });

        }

	}catch(e){}
}


function openSolutionsOnSummarypage(obj){
var objName = $(obj).attr("name")
var mYdialog = $( "#solution_popup" ).dialog({
      autoOpen: true,
      width: '80%',
      height: 320,
	  draggable: false,
	  resizeable: false,
      modal: false,
	  open: function(){
	  $( "#solution_popup" ).load('solution.html', function(){
	      removeSytlesInLayerDiv();
		var divId = "#"+objName;
		var popupdivId = $(this).find(divId);
		var divOffset = $(popupdivId).offset().top;
		var popupOffset = $('#solution_popup').offset().top;
		var divScroll = divOffset-popupOffset;
		$('#solution_popup').animate({scrollTop:divScroll}, '500', 'swing');
	  });
	  $( "#solution_popup" ).show()
		//$( "#solution_popup" ).load('solution.html');
		//var divId = "#"+objName;
		//var popupdivId = $(this).find(divId)
		//$(this).find(divId).offset().top;
		//$( "#solution_popup").animate({$(this).scrollTop:$(divId).offset().top;},'slow')
		//$('#solution_popup').animate({scrollTop:$(popupdivId).offset().top}, '500', 'swing');
		//$( "#solution_popup" ).trigger("gotoPageId",[objName]);
	  },
      close: function() {
       $('#solution_popup').html("");
      }
    });
}

function removeSytlesInLayerDiv() {
    $('#solutiontable').find('.layers').removeAttr("style");
    $('#solutiontable').find("div[id^='closeBtn_']").hide();
    $('#solutiontable').find("div[type='hints']").remove();
    $('#solutiontable').find(".layers[type!='solution']").remove();
    $('#solutiontable').find('.layers div').addClass("solution-popup")
    $('#solutiontable').find('.lyrfs').removeClass("lyrfs");
    
}


function disableHintButtonsOnSummary(str) {
    var arr = [];
    var btnIdStr = "#solutionSummary_"
    arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        var btnId = btnIdStr + arr[i];
        $(btnId).hide();
    }
}
function setProgress()
{	

    var arrData = VisitedPagesNonTracing.toString().split(",");
    arrData = arrData.filter(Boolean);
    if (trackObjects[SeqID].hidetoctopic == "no") {
    istopicpage = checkisTopic();
    if (istopicpage == true) {
        if(currentTopicNumber == undefined){
            currentTopicPagesArr = [];
            currentTopicNumber = getCurrentTopicNumber(currentPage);
            currentTopicObject = getTopicObjectArray(currentPage);
            currentTopicPagesArr = getPageNumbersInTopic(currentTopicObject)
            //totalPagesInTopic = getTotalPagesInTopic(currentTopicObject);
        }else{
            var topicNum = getCurrentTopicNumber(currentPage);
            if(currentTopicNumber != topicNum){
                currentTopicPagesArr = [];
                currentTopicNumber = topicNum;
                currentTopicObject = getTopicObjectArray(currentPage);
                currentTopicPagesArr = getPageNumbersInTopic(currentTopicObject)
                //totalPagesInTopic = getTotalPagesInTopic(currentTopicObject);
            }
        }
        updateTopicProgress(currentTopicNumber,currentTopicPagesArr,arrData);
    }
}
			progress = 0;	
			for (i = 0; i < arrData.length; i++) {
				currProPageObject = getPageByIndex(arrData[i]);
					 if (currProPageObject.iscoao == "ao")
					 {
						 if(currProPageObject.Qtype == "matrix"){
							   if(currProPageObject.useranswer != undefined && currProPageObject.useranswer.indexOf("1") != -1){
										progress ++;
							   }
						 }
						  /*else if(currProPageObject.Qtype == "sequence"){
							try{ var seqInitAns = strintiallist}catch(e){seqInitAns = "0"}
								  if(seqInitAns != "0" && currProPageObject.useranswer != seqInitAns){
										progress ++;
							   }
						  }*/
						 else {
							 if (currProPageObject.useranswer != undefined && currProPageObject.useranswer != ""){
									progress ++;
							  } 
					     }
					 }else{
							//if(currProPageObject.type != "summary"){
									progress ++;
							//}
						 }
			}
					 

		var CalProgress = Math.round((progress / getTotalPageInObject(SeqID))*100);
    if (CalProgress > 100) {
        CalProgress = 100;
    }
    var progressVal = CalProgress / 100;
   
    $('#courseProgress').circleProgress({ 'value': progressVal, fill: { color: '#00ff00' } }).on('circle-animation-progress', function (event, progress, stepValue) {
      
			var ctx= $(this).find("canvas")[0].getContext("2d");
			var canvas = $(this).find("canvas")[0];
			ctx.font = "9px Arial";
			ctx.fillStyle = "#0000ff";
			$(this).find('strong').html(parseInt(stepValue * 100) + '%').css({'position':'absolute','top':'8px','left':'6px','font-size':'9px'});
			ctx.textAlign = "center";
			//var txt = parseInt(stepValue * 100) + '%'
			//ctx.clearRect(8, 8, 19, 20);
			//ctx.fillText(txt, 19, 20); 
		//$(this).find('strong').text();
});

		//$('#circle').circleProgress({value: progressVal});
	 //	var progressBarWidth =CalProgress*$(".progressbarcontainer").width()/ 100;  
		//alert(progressBarWidth)
	 //	$(".progressbar").width(progressBarWidth).html(CalProgress + "%&nbsp;");
}

function checkisTopic() {
    for (var i = 0; i < pages.length; i++) {
        for (var j = 0; j < pages[i].length; j++) {

            if (pages[i][j].type == "topic") {
                for (var k = 0; k < pages[i][j].pages.length; k++) {
                    if (pages[i][j].pages[k].type == "topic") {
                        for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
                            if (currentPage == pages[i][j].pages[k].pages[m].pageNumber)  
                                return true; 
                        }
                    }
                    else {
						if (currentPage == pages[i][j].pages[k].pageNumber)
							return true; 
                    }
                }
            }
            else {
                if (currentPage == pages[i][j].pageNumber) 
                   return false;
			}

        }
    }

}

function createCourseProgressBar(){
	$('#courseProgress').circleProgress({
        value: 0.4,
        size: 35,
		thickness:3,
        fill: {
            gradient: ["green", "green"]
        }
    });
	
}

function createTopicProgressBar(){
	$('#folderTreetd').find("div[id^='topicProgress']").circleProgress({
        value: 0,
        size: 35,
		thickness:3,
        fill: {
            gradient: ["green", "green"]
        }
	})
	
	// to add text in the progress bar using progress.js
	//.on('circle-animation-progress', function(event, progress, stepValue) {
	   // $(this).find('strong').text('0%');
	//});
}

function getTopicObjectArray(currPage){
	 for (var i = 0; i < pages.length; i++) {
			for (var j = 0; j < pages[i].length; j++) {
				  if (pages[i][j].type == "topic") {
						 if (currPage == pages[i][j].pageNumber) {
								return pages[i][j];
						 }
				  for (var k = 0; k < pages[i][j].pages.length; k++) {
					 if (currPage == pages[i][j].pages[k].pageNumber) {
								return pages[i][j];
						 }
						if (pages[i][j].pages[k].type == "topic") { 
								 for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
										 if (currPage == pages[i][j].pages[k].pages[m].pageNumber) {
												return pages[i][j];
						 }
								 }
						}
				  
				  }
				  }
		 }
	 }
 
}

/*function getTotalPagesInTopic(currTopicObj){
var topicPagesArr = currTopicObj.pages;
var totalTopicPages = 0;
	for (var i = 0; i < topicPagesArr.length; i++) {
			totalTopicPages++;
			if(topicPagesArr[i].type == "topic"){
				for (var j = 0; j < topicPagesArr[i].pages.length; j++) {
					totalTopicPages++;
				}
		  }
	}
	
	return totalTopicPages;
}*/

function getCurrentTopicNumber(num){
var topic = 0;
	 for (var i = 0; i < pages.length; i++) {
			for (var j = 0; j < pages[i].length; j++) {
			if (Number(pages[i][j].pageNumber) <= num) {
				if (pages[i][j].type == "topic") {
					topic++;	
			  }
			}else{
					break;
				 }
			  
			}
	}
	
	return topic;
}

function getPageNumbersInTopic(currTopicObj) {
	var topicPagesArr = currTopicObj.pages;
	var arr = [];
	var pageNum;
	for (var i = 0; i < topicPagesArr.length; i++) {
			pageNum = topicPagesArr[i].pageNumber;
			if(topicPagesArr[i].type != "topic")
				arr.push(String(pageNum));
			if (topicPagesArr[i].type == "topic") {
					for (var j = 0; j < topicPagesArr[i].pages.length; j++) {
					    pageNum = topicPagesArr[i].pages[j].pageNumber
						if(topicPagesArr[i].pages[j].type != "topic")
							arr.push(String(pageNum));
					}
				}
	     }
		 
		 return arr;
}

function filterArray(list, filter) {
    return $.grep(list, function(obj) {
        return $.inArray(obj, filter) != -1;
    });
}

function updateTopicProgress(topicNum,topicPagesArr,arrData){
var totalTopicPages = topicPagesArr.length;
var topicProgress = 0;
	var tPagesArr =  filterArray(topicPagesArr, arrData);
	for(var i=0;i<tPagesArr.length;i++){
		 var currProPageObject = getPageByIndex(tPagesArr[i]);
		 if (currProPageObject.iscoao == "ao")
		 {
			 if(currProPageObject.Qtype == "matrix"){
				   if(currProPageObject.useranswer != undefined && currProPageObject.useranswer.indexOf("1") != -1){
							topicProgress ++;
				   }
			 }
			  /*else if(currProPageObject.Qtype == "sequence"){
				try{ var seqInitAns = strintiallist}catch(e){seqInitAns = "0"}
					  if(seqInitAns != "0" && currProPageObject.useranswer != seqInitAns){
							topicProgress ++;
				   }
			  }*/
			 else {
				 if (currProPageObject.useranswer != undefined && currProPageObject.useranswer != ""){
						topicProgress ++;
				  } 
			 }
		 }else{
						topicProgress ++;
			 }
		}
					 
       
		var CalProgress = Math.round((topicProgress / totalTopicPages)*100);
    if (CalProgress > 100) {
        CalProgress = 100;
    }
		var progressVal = CalProgress/100;
		topicProgressId = "#topicProgress_"+topicNum;
		$(topicProgressId).circleProgress({ 'value': progressVal, fill: { color: '#00ff00' } }).on('circle-animation-progress', function (event, progress, stepValue) {
			var ctx= $(this).find("canvas")[0].getContext("2d");
			var canvas = $(this).find("canvas")[0];
			ctx.font = "9px Arial";
			ctx.fillStyle = '#0000ff';
			ctx.textAlign = "center";
			$(this).find('strong').html(parseInt(stepValue * 100) + '%').css({ 'position': 'absolute', 'top': '8px', 'left': '6px','font-size':'9px' });
			//var txt = parseInt(stepValue * 100) + '%'
			//ctx.clearRect(8, 8, 19, 20);
			//ctx.fillText(txt, 19, 20); 
			//$(this).find('strong').text(parseInt(stepValue * 100) + '%');
		});
}

function getTotalTopicsIntheObject(){
var objArr = [];
	for(var i=0;i<pages.length;i++){
		for(var j=0;j<pages[i].length;j++){
			if (pages[i][j].type == "topic") {
				objArr.push(pages[i][j]);
			}
		}
	}
return objArr;
}


function getTopicProgressStatus(topicsArr){
	if(topicsArr.length<0){
		return false;
	}
	for(var i=0;i<topicsArr.length;i++){
		var topicPages = getPageNumbersInTopic(topicsArr[i]);
		var currTopic = i+1;
		updateTopicProgress(currTopic,topicPages,VisitedPagesNonTracing);
	}
}

function getVisitedpageValues(arr){
    arr = arr.filter(Boolean);
	var myArr = [];
	for(var i=0;i<arr.length;i++){
	var val = parseInt(arr[i]) - 1;
	myArr[i] = val.toString();
	}
	return myArr
}

function updatePreviousTopicProgress() {
    try{
        var arrData = VisitedPagesNonTracing.toString().split(",");
        arrData = arrData.filter(Boolean);
        if (trackObjects[SeqID].hidetoctopic == "no") {
		    istopicpage = checkisTopic();
		    if (istopicpage == true) {
			    if(currentTopicNumber == undefined){
				    currentTopicPagesArr = [];
				    currentTopicNumber = getCurrentTopicNumber(currentPage);
				    currentTopicObject = getTopicObjectArray(currentPage);
				    currentTopicPagesArr = getPageNumbersInTopic(currentTopicObject)
				    //totalPagesInTopic = getTotalPagesInTopic(currentTopicObject);
			    }else{
				    var topicNum = getCurrentTopicNumber(currentPage);
				    if(currentTopicNumber != topicNum){
					    currentTopicPagesArr = [];
					    currentTopicNumber = topicNum;
					    currentTopicObject = getTopicObjectArray(currentPage);
					    currentTopicPagesArr = getPageNumbersInTopic(currentTopicObject)
					    //totalPagesInTopic = getTotalPagesInTopic(currentTopicObject);
				    }
			    }
			    updateTopicProgress(currentTopicNumber,currentTopicPagesArr,arrData);			
		    }
        }
    }catch(e){}
}
function getHexColor(color) {
    
    if(color != undefined){
    var rgb = color;
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) { return ("0" + parseInt(x).toString(16)).slice(-2); }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}
function addCCCloseStyles() {    
    $(".ccClose").css({ "position": "absolute", "float": "right", "padding": "8px", "background-color": "#dff5fc", "font-family": "Arial, Helvetica, sans-serif", "font-size": "11px", "color": "#133153", "font-weight": "bold", "font-weight": "bold", "line-height": "10px", "cursor": "pointer", "border-radius": "3px", "top": "5px", "right": "10px", "text-align": "center" });
}

//<Ananta>:14/4/16-Added code for breadcrumb functionality for contentobject and assessment for desktop and mobile
function showTitle() {
    //debugger;
    var screenWidth = $(window).width();
    if (screenWidth > 605) {
        // For desktop
        if (trackObjects[0].showcoursetitle == "yes") {
            document.getElementById("coursetitle").innerHTML = getPageTitle(trackObjects[SeqID]);
        }
        else {
            document.getElementById("coursetitle").innerHTML = "";
        }
        if (trackObjects[0].showtopictitle == "yes") {
            var topicpage = getTopicByPageIndex(currPageObject.pageNumber);
            if (topicpage != undefined) {
                var subtopicpage = getSubTopicByPageIndex(currPageObject.pageNumber);
                if (subtopicpage != undefined) {
                    if (trackObjects[0].showcoursetitle == "yes") {
						 if (document.getElementById("topictitle") != null)
							 try{
								if (isSeperatorNotRequired)
									document.getElementById("topictitle").innerHTML =  getPageTitle(topicpage) + " >> " + getPageTitle(subtopicpage);
							 }catch(e){ document.getElementById("topictitle").innerHTML =  " >> " + getPageTitle(topicpage) + " >> " + getPageTitle(subtopicpage);}
                        
                    } else {
						 if (document.getElementById("topictitle") != null)
                        document.getElementById("topictitle").innerHTML = getPageTitle(topicpage) + " >> " + getPageTitle(subtopicpage);
                    }
                }
                else {
                    if (trackObjects[0].showcoursetitle == "yes") {
						 if (document.getElementById("topictitle") != null)
							  try{
								if (isSeperatorNotRequired)
									document.getElementById("topictitle").innerHTML =   getPageTitle(topicpage)/*topicpage.title*/;
							  }catch(e){document.getElementById("topictitle").innerHTML =  " >> " + getPageTitle(topicpage)/*topicpage.title*/;}
							
                    } else {
						 if (document.getElementById("topictitle") != null)
							document.getElementById("topictitle").innerHTML = getPageTitle(topicpage)/*topicpage.title*/;
                    }
                }
            }
            else {
				 if (document.getElementById("topictitle") != null)
					document.getElementById("topictitle").innerHTML = "";
            }
        }
        if (trackObjects[0].showpagetitle == "yes") {
            if ((trackObjects[0].showcoursetitle == "yes" || (trackObjects[0].showtopictitle == "yes" && getTopicByPageIndex(currPageObject.pageNumber) != undefined)) && currPageObject.type != "summary") {
			 if (document.getElementById("topictitle") != null){
				 try{
				  if (isSeperatorNotRequired)
				      document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject, selectedLanguage);
				 } catch (e) { document.getElementById("pagetitle").innerHTML = " >> " + getPageTitle(currPageObject, selectedLanguage); }
                
			}
			else
			     document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject, selectedLanguage);
            }
            else {
                if (trackObjects[0].showcoursetitle == "yes" && currPageObject.type == "summary") {
					 try{
				  if (isSeperatorNotRequired)
				      document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject, selectedLanguage);
					 }catch(e){
						  if (document.getElementById("topictitle") != null){
						      document.getElementById("pagetitle").innerHTML = " >> " + getPageTitle(currPageObject, selectedLanguage);
						  }
						  else
						      document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject, selectedLanguage);
						  }
                } else {
                    document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject, selectedLanguage);
                } 
            }
                  }
        else {
            document.getElementById("pagetitle").innerHTML = "";
        }
    }
        //For mobile
    else {
        if (trackObjects[0].mshowcoursetitle == "yes") {
            document.getElementById("coursetitle").innerHTML = getPageTitle(trackObjects[SeqID]);
        }
        else
            document.getElementById("coursetitle").innerHTML = "";
        if (trackObjects[0].mshowtopictitle == "yes") {
            var topicpage = getTopicByPageIndex(currPageObject.pageNumber);
            if (topicpage != undefined) {
                var subtopicpage = getSubTopicByPageIndex(currPageObject.pageNumber);
                if (subtopicpage != undefined) {
                    if (trackObjects[0].mshowcoursetitle == "yes") {
						 if (document.getElementById("topictitle") != null)
							 try{
								if (isSeperatorNotRequired)
									document.getElementById("topictitle").innerHTML =  getPageTitle(topicpage) + " >> " + getPageTitle(subtopicpage);
							 }catch(e){
								 document.getElementById("topictitle").innerHTML =  " >> " + getPageTitle(topicpage) + " >> " + getPageTitle(subtopicpage);
							 }
                        
                    } else {
						 if (document.getElementById("topictitle") != null)
                        document.getElementById("topictitle").innerHTML = getPageTitle(topicpage) + " >> " + getPageTitle(subtopicpage);
                    }
                }
                else {
                    if (trackObjects[0].mshowcoursetitle == "yes") {
						 if (document.getElementById("topictitle") != null)
							  try{
								if (isSeperatorNotRequired)
									document.getElementById("topictitle").innerHTML =   getPageTitle(topicpage)/*topicpage.title*/;
							  }catch(e){ document.getElementById("topictitle").innerHTML =  " >> " + getPageTitle(topicpage)/*topicpage.title*/;}
                        
                    } else {
						 if (document.getElementById("topictitle") != null)
                        document.getElementById("topictitle").innerHTML = getPageTitle(topicpage)/*topicpage.title*/;
                    }
                }
            }
            else {
				 if (document.getElementById("topictitle") != null)
                document.getElementById("topictitle").innerHTML = "";
            }
        }
        if (trackObjects[0].mshowpagetitle == "yes") {
            if ((trackObjects[0].mshowcoursetitle == "yes" || (trackObjects[0].mshowtopictitle == "yes" && getTopicByPageIndex(currPageObject.pageNumber) != undefined)) && currPageObject.type != "summary") {
				try{
					if (isSeperatorNotRequired)
						document.getElementById("pagetitle").innerHTML =  getPageTitle(currPageObject);
				}catch(e){  
					document.getElementById("pagetitle").innerHTML =  " >> " + getPageTitle(currPageObject);
				}

			}
            else {
                if (trackObjects[0].mshowcoursetitle == "yes" && currPageObject.type == "summary") {
					try{
					if (isSeperatorNotRequired)
						document.getElementById("pagetitle").innerHTML =  getPageTitle(currPageObject);
					}catch(e){
                    document.getElementById("pagetitle").innerHTML =  " >> " + getPageTitle(currPageObject);}
                } else {
                    document.getElementById("pagetitle").innerHTML = getPageTitle(currPageObject);
                }
            }
        }
        else {
            document.getElementById("pagetitle").innerHTML = "";
        }
    }
}
//Maheedhar:19/04/2016: added this code for audio mute functionality
function muteUnmutePlayers(){
    isMuteEnabled = !isMuteEnabled;	
	if(isTimeline() == "yes"){
	   setMuteStatusForMediaInTimeLine();
	}else{
	   setMuteStatusForMedia("#page");	
	}
	changeMuteIcon();
}
function changeMuteIcon(){
    if (isMuteEnabled) {
        $("#muteBtn").removeClass("courseunmute").addClass("coursemute");
        $("#muteBtn").attr("title", "Unmute");
    } else {
        $("#muteBtn").removeClass("coursemute").addClass("courseunmute");
        $("#muteBtn").attr("title", "Mute");
    }
}
function setMuteStatusForMedia(container){
    var videoObjects = $(container).find("div[id^='jquery_jplayer_']");
	var isCustomPlayer = true;
	if(videoObjects.length == 0){
	   isCustomPlayer = false;
	   videoObjects = $(container).find("video");
	}
	var audioObjects = $(container).find("audio");
	$(videoObjects).each(function(){
	    if(!isCustomPlayer){
		  var videoObj = $(this)[0];
		  setMuteUnmute(videoObj,"video",isCustomPlayer);
		  $(videoObj).on('volumechange',function(){   
			if(isMuteEnabled != $(this).prop("muted")){
			   isMuteEnabled = !isMuteEnabled;
			   changeMuteIcon();
			   muteOrUnmuteRemainingMedia();
			}
		  })
		}else{
	      setMuteUnmute($(this),"video",isCustomPlayer);
		  var parentObj = $(this).parent();
		  $(parentObj).bind("click",function(e){
                var target = $(e.target).attr("class");
			    if(target == "jp-unmute" || target == "jp-mute"){
				   isMuteEnabled = !isMuteEnabled;
				   changeMuteIcon();
				   muteOrUnmuteRemainingMedia();
				}
		  });  
	    }
	})
	$(audioObjects).each(function(){
	   var audioObj = $(this)[0];
	   setMuteUnmute(audioObj,"audio",false);
	    $(audioObj).on('volumechange',function(){ 
		      var audOb = $(this)[0];
              //console.log(audOb.volume+"<__>"+$(this).prop("muted"));		
			if(isMuteEnabled != $(this).prop("muted")){
			   isMuteEnabled = !isMuteEnabled;
			   changeMuteIcon();
			   muteOrUnmuteRemainingMedia();
			}
		})
	})

    try{
        var iframeObjsList = $(container).find("iframe");
        if (iframeObjsList.length > 0) {
            $(iframeObjsList).each(function () {
                var videoObjects = $(($(this)[0]).contentWindow.document).find("video");
                $(videoObjects).each(function () {
                    var videoObj = $(this)[0];
                    setMuteUnmute(videoObj, "video", isCustomPlayer);
                    $(videoObj).on('volumechange', function () {
                        if (isMuteEnabled != $(this).prop("muted")) {
                            isMuteEnabled = !isMuteEnabled;
                            changeMuteIcon();
                            muteOrUnmuteRemainingMedia();
                        }
                    })
                })
                var audioObjects = $(($(this)[0]).contentWindow.document).find("audio");
                $(audioObjects).each(function () {
                    var audioObject = $(this)[0];
                    setMuteUnmute(audioObject, "audio", false);
                    $(audioObject).on('volumechange', function () {
                        if (isMuteEnabled != $(this).prop("muted")) {
                            isMuteEnabled = !isMuteEnabled;
                            changeMuteIcon();
                            muteOrUnmuteRemainingMedia();
                        }
                    })
                })
                if (audioObjects.length > 0 || videoObjects.length > 0) {
                    $("#muteBtn").show();
                }
            })
        }
    }catch(e){}
	try{
	  var polledResPopupWindow = $($(document).find("div#openPolledresponsePopup")).find("iframe")[0];
	    if(polledResPopupWindow != undefined){
	       var videoObjects = $(($(polledResPopupWindow)[0]).contentWindow.document).find("video");
		    $(videoObjects).each(function(){				
				  var videoObj = $(this)[0];
				  setMuteUnmute(videoObj,"video",isCustomPlayer);
				  $(videoObj).on('volumechange',function(){   
					if(isMuteEnabled != $(this).prop("muted")){
					   isMuteEnabled = !isMuteEnabled;
					   changeMuteIcon();
					   muteOrUnmuteRemainingMedia();
					}
				  }) 				
			})
	    }
	}catch(e){}	
}
function muteOrUnmuteRemainingMedia(){
    var videoObjects = $("#page").find("div[id^='jquery_jplayer_']");
	var isCustomPlayer = true;
	if(videoObjects.length == 0){
	   isCustomPlayer = false;
	   videoObjects = $("#page").find("video");
	}
	var audioObjects = $("#page").find("audio");
	$(videoObjects).each(function(){
	    if(!isCustomPlayer){		    	    
		    var videoObj = $(this)[0];
		    setMuteUnmute(videoObj,"video",isCustomPlayer);
		}else{
	      setMuteUnmute($(this),"video",isCustomPlayer);		  
	    }
	})
	$(audioObjects).each(function(){
	   var audioObj = $(this)[0];
	   setMuteUnmute(audioObj,"audio",false);	    
	})
	try{
	  var polledResPopupWindow = $($(document).find("div#openPolledresponsePopup")).find("iframe")[0];
	    if(polledResPopupWindow != undefined){
	       var videoObjects = $(($(polledResPopupWindow)[0]).contentWindow.document).find("video");
		    $(videoObjects).each(function(){				
				  var videoObj = $(this)[0];
				  setMuteUnmute(videoObj,"video",isCustomPlayer);
				  $(videoObj).on('volumechange',function(){   
					if(isMuteEnabled != $(this).prop("muted")){
					   isMuteEnabled = !isMuteEnabled;
					   changeMuteIcon();
					   muteOrUnmuteRemainingMedia();
					}
				  }) 				
			})
	    }
	}catch(e){}
}
//Maheedhar:19/04/2016: added this code for audio mute functionality
//Maheedhar:15/06/2016: added this code for fullscreen functionality in mobile
function toggleFullScreenMode() {
    if (!($('td.header').hasClass("fullscreenmode"))) {
        $('td.header').addClass("fullscreenmode");
        $('td.header').closest("tr").addClass("fullscreenmode");
        $('td#pagetitle').addClass("fullscreenmode");
        $('table.title').parent().closest("tr").addClass("fullscreenmode");
        $('td.title').closest("tr").addClass("fullscreenmode");
        $('td.pagetitle').closest("tr").addClass("fullscreenmode");
        $('div#exitBtn').closest("td").addClass("fullscreenmode");
        $(".selectLang").addClass("fullscreenmode");
        $(".printpg").addClass("fullscreenmode");
    } else {
        $('td.header').removeClass("fullscreenmode");
        $('td.header').closest("tr").removeClass("fullscreenmode");
        $('td#pagetitle').removeClass("fullscreenmode");
        $('td.title').closest("tr").removeClass("fullscreenmode");
        $('td.pagetitle').closest("tr").removeClass("fullscreenmode");
        $('table.title').parent().closest("tr").removeClass("fullscreenmode");
        $('div#exitBtn').closest("td").removeClass("fullscreenmode");
        $(".selectLang").removeClass("fullscreenmode");
        $(".printpg").removeClass("fullscreenmode");
    }
}
//Maheedhar:15/06/2016: added this code for fullscreen functionality in mobile

// Priya - 4/7/16 - for converting the user preferred language 

function UserSelectedlangValues(userPreferedLang) {
     if (userPreferedLang == "en-us") {
         userPreferedLang = "english";
     } else if (userPreferedLang == "fr-fr") {
         userPreferedLang = "french";
     }
     else if (userPreferedLang == "es") {
         userPreferedLang = "spanish";
     }
     else if (userPreferedLang == "ar") {
         userPreferedLang = "arabic"
     }
     return userPreferedLang;
    
 }
 // Mobile swipe event - Maheedhar
function addSwipeEvents(){
	$("#page").touchwipe({
		 wipeLeft: function() { 
		    var isSequencePage = false;
			try{
				if(currPageObject.Qtype != undefined){
					if((currPageObject.Qtype).toLowerCase() == "sequence"){
					  isSequencePage = true;
					}
				}	
            }catch(e){}	
			
			if(($("#nextBtn").css("opacity") == "1" || $("#nextBtn").css("opacity") == 1) && !(isSequencePage)){
				nextPage();
			}	
		 },
		 wipeRight: function() {
		    var isSequencePage = false;
			try{
				if(currPageObject.Qtype != undefined){
					if((currPageObject.Qtype).toLowerCase() == "sequence"){
					  isSequencePage = true;
					}
				}
		    }catch(e){}	
			if(($("#backBtn").css("opacity") == "1" || $("#backBtn").css("opacity") == 1)&& !(isSequencePage)){
				previousPage();
			}
			
		 },
		 /*wipeUp: function() { alert("up"); },
		 wipeDown: function() { alert("down"); },*/
		 min_move_x: 100,
		 min_move_y: 40,
		 preventDefaultEvents: false
	});
}
//ajay adding this code for auto play/pause media in timeline
function addAnimationEvents() {
    $("#page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", "div[entranceanimation='true']", function (e) {
        
        var timelineobj = $(e.target).attr("isautoplay");
        var normalobj = $(e.target).find("video").attr("autoplay");
        var customvideostatus = $(e.target).find(".jp-jplayer").attr("isautoplay");

        if (timelineobj == "true" || normalobj == "autoplay" || customvideostatus == "true") {
            $(e.target).find("video").trigger("play");
        }
        else { $(e.target).find("video").trigger("pause"); }


        
    });
    $("#page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", "div[exitanimation='true']", function (e) { });
    $("#page").on("animationstart webkitAnimationStart oAnimationStart MSAnimationStart transitionStart webkitTransitionStart oTransitionStart MSTransitionStart", "div[entranceanimation='true']", function (e) {
       
        $(e.target).find("video").trigger("pause");
    });
    $("#page").on("animationstart webkitAnimationStart oAnimationStart MSAnimationStart transitionStart webkitTransitionStart oTransitionStart MSTransitionStart", "div[exitanimation='true']", function (e) { });
}

// Mobile swipe event - Maheedhar
function addAllExternalSupportingFiles() {
    var randomNumber = Math.random(999999999) + "" + Math.random(999999999);
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/jquery.treeview.css?' + randomNumber + '"/>');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/style.css?' + randomNumber + '" />');

    $("head").append('<link href="styles/mobile.css?' + randomNumber + '" rel="stylesheet" type="text/css" media="only screen and (max-width:620px)"/>');
    $("head").append('<link href="styles/mobile-view.css?' + randomNumber + '" rel="stylesheet" type="text/css" media="only screen and (min-width:604px) and (max-width:620px)"/>');

    $("head").append('<link href="styles/tablet.css?' + randomNumber + '" rel="stylesheet" type="text/css" media="only screen and (min-width:621px) and (max-width:768px)"/>');
    $("head").append('<link href="styles/tablet.css?' + randomNumber + '" rel="stylesheet" type="text/css" media="only screen and (min-device-width: 1536px) and (max-device-width: 2048px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio: 2)"/>');

    $("head").append('<link href="styles/web.css?' + randomNumber + '" rel="stylesheet" type="text/css" media="only screen and (min-width:769px)"/>');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/animations.css?' + randomNumber + '"/>');
     
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/jquery.loader.min.css?' + randomNumber + '"/>');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/skin_style.css?' + randomNumber + '"/>');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/Popup/jquery-ui-1.12.1.custom.min.css?' + randomNumber + '"/>');
    $("head").append('<link href="styles/matchgame.css?' + randomNumber + '" rel="stylesheet" type="text/css"/>');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/tabs/tab-style.css?' + randomNumber + '" />');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/tabs/responsive-tabs.css?' + randomNumber + '" />');
    $("head").append('<link href="styles/pink.flag/jplayer.pink.flag.css?' + randomNumber + '" rel="stylesheet" type="text/css" />');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/videostyle.css?' + randomNumber + '" />');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/dynamiccss.css?' + randomNumber + '" />');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/theme.css?' + randomNumber + '" />');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/font-awesome.min.css?' + randomNumber + '" />');
    $("head").append('<link rel="stylesheet" type="text/css" href="styles/bootstrap.min.css?' + randomNumber + '" />');

}

//Added by Sunny on 1st September 2016 For Showing the Images in a New Window on the click of the link in Summary Page
function openInNewWindow(source)
{
  window.open(source, 'Image', 'width = 500px, height = 350px');
}

//Added by Ananta for opening the course resume popup - 5/10/16
function opencourseresumepopup() {
   
    $("#courseresumePopupup").html("Would you like to resume where you left off?");
    $("#courseresumePopupup").dialog({
        resizable: false,
        modal: true,
        title: "Resume",
        height: 250,
        width: 300,
        buttons: {
            "Yes": function () {
                $(this).dialog('close');
                callback(true);
            },
            "No": function () {
                $(this).dialog('close');
                callback(false);
            }
        }
    });
    $("#courseresumePopupup").show();
}

function callback(value) {
    if (value) {       
        $("#courseresumePopupup").hide();
    } else {        
        startcourse = true;
        getBookmark();
        gotoPage();
    }
}
//added by ajay to close popup and clear Previous results
function hidesearchResultsPopup() {
    //debugger;
    if($('#content').hasClass('marge-left')){
	$('#content').removeClass('marge-left');
	}
    $('#searchInput').val("");  
    $(".resultlink").parent().remove();
    $(".noresultlink").parent().remove();
    $("#searchResultsPopup").hide()
    $("table#instsampletable div.canbesearch").unhighlight();
    $("table#instmaintable div.canbesearch").unhighlight();
}
//added by ajay to search word and find results by position 
			function searchForWord(str, word) {
            
			  
                if (word == "") {
                    word = null;
                }
                var spclword = word;
                var specialChar = /[-\\!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
                for (var i = 0; i < spclword.length; i++) {
                    if (specialChar.test(spclword[i])) {
                        spclword = spclword.substr(0, i) + "\\" + spclword.substr(i);
                        i++
                    }
                }                             
                var re = new RegExp(spclword, "gim");
                var searchresults = [];              
                while ((match = re.exec(str)) != null) {
                    var position = match.index;                    
                    try {
                        var matchresult = "";					
                        if (position >= 20) {
                            matchresult = "...";
                            for (var j = (position - 25) ; j <= position; j++) {                              
                                if (str[j] == " ") {                                 
                                    for (var i = j + 1; i <= (position+word.length+ 20) ; i++) {
                                          if(i==(position))
										  {
											  matchresult=matchresult+'<span class='+'sarechresult'+'>';
										  }
										  if(i==(position+word.length)){
											  matchresult=matchresult+'</span>'
										  }
                                        matchresult = matchresult + str[i];
												if(i>=(position+word.length+10))
												{
													if(str[i+1]==" ")
													{
													    matchresult = matchresult+"..."
														{break}
													}
												}
										     if(str[i+1]==undefined)
											 {break}
                                    }
                                    j = position;
                                }
                            }
                        }
                        else {
                       
                            for (var i = 0; i < (position + word.length + 20) ; i++) {
                                if (i == (position)) {
                                    matchresult = matchresult + '<span class=' + 'sarechresult' + '>';
                                }
                                 if(i==(position+word.length)){
											  matchresult=matchresult+'</span>'
										  }
                                  matchresult = matchresult + str[i];
								   if(str[i+1]==undefined)
								   { break }
								   if (i>=(position+word.length+ 10)) {
								       if (str[i+1]==" ") {
								           {
								               matchresult = matchresult + "..."
								               break
								           }
								       }
								   }
                            }
                        }

                    } catch (e) {
                        alert("No results found");

                    }
                    searchresults.push(matchresult);
                    //alert(matchresult);
                    matchresult = "";
                    //breaking while loop on forst match
                    { break}
                }
               
                return searchresults;
            }
//function for filtering topics acording to exclude topic or pages are yes/no 
	function filterTopicsAndSearch(){

		//loop for content root level pages
		 for (var pgnum=0;pgnum<obj1Pages.length;pgnum++){
		     //checking if current object is page/topic pages array
		     if (obj1Pages[pgnum].type == "topic") {
                 //checking if topic is excluded from search or not
			      if (obj1Pages[pgnum].excludetopicsearch == "no") {
				      //loop for topic array of pages
			          for (var toppgindex = 0; toppgindex < obj1Pages[pgnum].pages.length; toppgindex++) {
                          //checking if current object is page/subtopic pages array
			              if (obj1Pages[pgnum].pages[toppgindex].type == "topic") {
			                  //checking if sub topic is excluded from search or not
						     if (obj1Pages[pgnum].pages[toppgindex].excludetopicsearch == "no") {
                                 //loop for sub topic array of pages
							 for(var subtoppagenum=0;subtoppagenum<obj1Pages[pgnum].pages[toppgindex].pages.length;subtoppagenum++){
								 var pagenumber=obj1Pages[pgnum].pages[toppgindex].pages[subtoppagenum].pageNumber;
								   if(trackObjects[SeqID].singleqtnperpage=="yes" ||trackObjects[SeqID].singleqtnperpage!="no"){
				                     searchinTotalContent(pagenumber);
								   }
								   else{
									   searchinTotalContentForSinglepageRendering(pagenumber+1);	
								   }
							 }
						 }
						 }
						 else{
					           var pagenumber=obj1Pages[pgnum].pages[toppgindex].pageNumber;
							    if(trackObjects[SeqID].singleqtnperpage=="yes" ||trackObjects[SeqID].singleqtnperpage!="no"){
				               searchinTotalContent(pagenumber);
								}
								else{
									searchinTotalContentForSinglepageRendering(pagenumber+1);	
								}
					      }
				  }
			  }
			  }
			  else{  var pagenumber=obj1Pages[pgnum].pageNumber;
				  if(trackObjects[SeqID].singleqtnperpage=="yes" ||trackObjects[SeqID].singleqtnperpage!="no"){
				  searchinTotalContent(pagenumber);
				  }
				  else{
	              	searchinTotalContentForSinglepageRendering(pagenumber+1);	
	              }  
			  }			
		} 
	}
//added by ajay	search the word table by table in single page rendering 	
function searchinTotalContentForSinglepageRendering(pgnum){
	     var word=$("#searchInput").val();
			    var fullresults = [];
	      $("#instmaintable"+pgnum+" div.canbesearch").each(function (i) {
								    //var pagobj = new Object();
								    var str = $(this).text();			 
	                               results = searchForWord(str, word);	                          
	                               for (var m = 0; m < results.length; m++) {
	                                   fullresults.push("<div pageid='instmaintable"+pgnum+"' class='resultlink'>" + results[m] + "</div>");
	                               }
	                           });
	                           for (var k = 0; k < fullresults.length; k++) {
	                               $("ul.searchresults").append("<li>" + fullresults[k] + "</li>");
								   //breaking loop for showing 1 result for page
	                               { break }
	                           }
}
//ajay added this function for search page by pagenumber and append search result in PopUp
  function searchinTotalContent(pagenumber) {	     	       
	           var pgobj = getPageByIndex(pagenumber);
	           if (pgobj.excludefromsearch == "no")
			   {
	           var currentpagenum = pagenumber;
	           $.ajax({
	               url: (getLangRef(selectedLanguage) == "") ? pgobj.url : getLangRef(selectedLanguage) + "/" + pgobj.url,
	               type: 'GET',
	               dataType: 'html',
	               beforeSend: function () {

	               },
	               success: function (data, textStatus, xhr) {
					   var Tempdata=$(data);
	                   try {
						   $(Tempdata).find("audio,video").each(function(i){
							   $(this).trigger("pause");						   
						   });
	                       //for saving  all results from a page                      
	                           var word = $("#searchInput").val();
	                           var fullresults = [];	                        
	                           //loop for each div in page
	                           $(Tempdata).find("table#instmaintable div.canbesearch").each(function (i) {								 
	                               var str = $(this).text();
	                               results = searchForWord(str, word);	                              							  
	                               for (var m = 0; m < results.length; m++) {
	                                   fullresults.push(results[m]);
	                               }

	                           });

	                           for (var k = 0; k < fullresults.length; k++) {
	                               $("ul.searchresults").append("<li  pagenumber='" + currentpagenum + "'>" + "<div class='resultlink'>" + fullresults[k] + "</div>" + "</li>");
	                               //breaking loop for showing 1 result for page
	                               { break }
	                           }
	                   }
	                   catch (e) { }
	               },async:false
	           });

	       }
         }
//added by ajay for highlighting the current with search word
  function highlightSearchTextInCurrentpage() {
      var word = $("#searchInput").val();

      if (trackObjects[SeqID].singleqtnperpage == "no") {
          for (var i = 0; i < totalPages; i++) {
              var arr = checkFortopicLevelSearch(i);
              if (arr != undefined) {
                  if (arr == "no") {
                      if (currPageObject.excludefromsearch == "no") {
                          $("table#instmaintable" + (i + 1) + " div.canbesearch").unhighlight();
                          $("table#instmaintable" + (i + 1) + " div.canbesearch").highlight(word);
                      }
                  }
              }
              else {
                  $("table#instmaintable" + (i + 1) + " div.canbesearch").unhighlight();
                  $("table#instmaintable" + (i + 1) + " div.canbesearch").highlight(word);
              }
          }
          //$("table#instsampletable div.canbesearch").unhighlight();
         // $("table#instsampletable div.canbesearch").highlight(word);
      }
      else {
          var arr = checkFortopicLevelSearch(currentPage);        
          if (arr != undefined) {
              if (arr == "no") {
                  if (currPageObject.excludefromsearch == "no") {
                      $("table#instmaintable div.canbesearch").unhighlight();
                      $("table#instmaintable div.canbesearch").highlight(word);
                  }
              }
          }
          else {
              if (currPageObject.excludefromsearch == "no") {
                  $("table#instmaintable div.canbesearch").unhighlight();
                  $("table#instmaintable div.canbesearch").highlight(word);
              }
          }
          }
  }
//ajay added this function to check if page excluded in topic/sub topic level
  function checkFortopicLevelSearch(currentPageNo) {

      var TopicBookmarkpage;
      var isExist = false;
      for (k = 0; k < pages[SeqID].length; k++) {
          //root level pages
          if (pages[SeqID][k].type != "topic") {
              if (pages[SeqID][k].pageNumber == currentPageNo) {
                  TopicBookmarkpage = pages[SeqID].excludetopicsearch;           
                  return TopicBookmarkpage; //break;
              }
          } else {
              // for Topic pages
              for (j = 0; j < pages[SeqID][k].pages.length; j++) {
                  if (pages[SeqID][k].pages[j].type != "topic") {
                      if (j == 0)
                          TopicBookmarkpage = pages[SeqID][k].excludetopicsearch;
                      if (pages[SeqID][k].pages[j].pageNumber == currentPageNo) {
                          isExist = true;                       
                          return TopicBookmarkpage; // break;
                      }
                  }
                  else {
                      //for subtopic pages
                      for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
                          if (m == 0)
                              TopicBookmarkpage = pages[SeqID][k].pages[j].excludetopicsearch;
                          if (pages[SeqID][k].pages[j].pages[m].pageNumber == currentPageNo) {
                              isExist = true;
                              //checking if topic level Exluded or subtopic level excluded
                              if (pages[SeqID][k].excludetopicsearch == "yes" || TopicBookmarkpage == "yes")                            
                              TopicBookmarkpage = "yes"
                              else
                                  TopicBookmarkpage = "no"
                              return TopicBookmarkpage;
                            
                          }
                      }
                  }
                  if (isExist)
                      break;
              }
            
          }
      }
      return TopicBookmarkpage;
  }
  function chkglobalsearchKeywordStatus(globalsearchKeyword){	     
	  if (trackObjects[SeqID].navigation.toLowerCase() == "forward only" || trackObjects[SeqID].tocseqeuncenavigation == "yes") {
       $("#searchResultsPopup").hide();
	  }
	  else {
		   $("#searchInput").val(globalsearchKeyword);
	      $("#searchResultsPopup").show();
	      $("#searchInput").focus();
	      filterTopicsAndSearch();
	      if ($("ul.searchresults").children().length == 0) {
	          $(".noresultlink").parent().remove();
	          $("ul.noresults").append("<li><div class='noresultlink'>No results found</div></li>");
	      }
	      else {
	          $(".noresultlink").parent().remove();
	      }
	      if ($("#searchInput").val() == "") {
	          $(".noresultlink").parent().remove();

	      }
	  }
  }
  function generateSearchResultsToc() {
      if (trackObjects[SeqID].singleqtnperpage == "no") {
          try {
              var globalsearchKeyword = window.parent.GetSearchText();
          } catch (e) {
              globalsearchKeyword = null
          }
          if (globalsearchKeyword != null && globalsearchKeyword != "") {
              if (trackObjects[SeqID].enablesearch == "yes")
                  chkglobalsearchKeywordStatus(globalsearchKeyword);
          }
      }
  }
    function generatemore() {
     
      $('.option-content li > div').each(function () {

          if ($(this).css('display') != 'none') {
            
              $('.more-btn').addClass('show-class');           
              return false;
          } else {
              $('.more-btn').removeClass('show-class');
          }
        
      });
     
  }
  
function showsummaryDiv(){
	
	 try {
        var validateAllqtnwhenclose;
        if (trackObjects[SeqID].singleqtnperpage == "no") {
            if (currPageObject.type != "summary")
                validateAllqtnwhenclose = getUserResponse();
            if ((validateAllqtnwhenclose == "true" || validateAllqtnwhenclose == true) ) {
				 ShowLoader();  
				 setTimeout(function(){ 
                // $("#submitsurveybtn").unbind("click");
				// $("#submitsurveybtn").fadeTo("fast", 0.5);
                if (IsAICC) {	
					AICC_Status = "completed"; AICC_Score ="100"; }
				else 
					{ 
				//LMSSetLessonStatus("completed");
                    if (isinstancycontent == true) {
                        SaveQuestionData();
                    }
				showpopupsummary();
		        //setAssessmentData();
    		  }        
		      //  isSurveycommited = true;		        
                try{
                   
                    if (arrAllObjects[SeqID].status == "")
                        arrAllObjects[SeqID].status = "completed";
                    if (isGoToNavigation == false)
                        CheckWorkflowRuleOnTriggered("onitemchange", SeqID, "");
                    fnShowHideTOCItems();
                }catch(e){}
                  HideLoader();
				//$("#Surveysummarymsg").show();
				},200);
            } else { alert("Please provide all response(s) and click on the submit button."); }
        }
    } catch (e) { }

	}
	function showpopupsummary(){
	
	var res_filepath = "";
    var popupTitle = "";
    res_filepath = "summary.html";
    popupTitle = "Summary details";
	
	$("#summaryPopup").dialog({
        draggable: false,
        height: 450,
        width: '95%',

        modal: true,
        open: function () {
            $(this).load(res_filepath, null, function () {
                
            });
            $('.full-expand').hide();
        },
        close: function () {
            if ($(window).width() < 550) {
		    $('.full-expand').show();
            }
        },
        title: popupTitle

    });
    $("#summaryPopup").show();
	 
    
    $("#summaryPopup").css({ "word-break": "break-word" });
	}

//Added by Ananta - 5/1/17 to check whether course is freesample or not 
function isFreeSample() {
    try {
      if (window.location.href.indexOf("isSampleCourse=true") > -1) {
            return true;
        } else {
            return false;
        }
    } catch (e) { }
}

//Added by Ananta - 6/1/17 for freesample purchase alert
function openFreeSamplePurchaseAlert(){
	  $("#freesamplepurchasePopup").html(trackObjects[SeqID].freesamplemessage);
	   $("#freesamplepurchasePopup").dialog({
        resizable: false,
        draggable: false,
        modal: true,        
        height: 250,
        width: 300,
        buttons: {
            "Purchase": function () {
                $(this).dialog('close');
                PurchaseContent(true);
            },
            "Cancel": function () {
                $(this).dialog('close');
                PurchaseContent(false);
            }
        }
    });
    $("#freesamplepurchasePopup").show();
}

//Added by Ananta - 6/1/17 for freesample purchase alert

function PurchaseContent(value) {
    if (value) {
        var strpurchasepage;
        if (window.parent != undefined) {

            if (window.parent.location.href.indexOf("PublicModules") > -1) {
                strpurchasepage = window.parent.location.href.split("PublicModules")[0];
            }
            else {
                strpurchasepage = window.parent.location.href.split("remote")[0];
            }
            strpurchasepage += "BuyAttempt.aspx?&ContentID=" + trackObjects[SeqID].contentid + "&SampleContent=" + isfreesamplecourse + ""
            window.parent.PurchaseSampleContent(strpurchasepage);            
        }
    }

    else {
        $("#freesamplepurchasePopup").hide();
    }
}

//Added by Ananta for single page rendering freesample feature
function checkfreesamplecontentinsinglepage() {
 
     if (EnableFreeSample == "yes" && trackObjects[SeqID].singleqtnperpage == "no") {      
            $("table#instsampletable").find("tr td table.content").each(function (i) {
            var currpagenumber = Number((this.id).split("instmaintable")[1]);           
			if(currpagenumber > Number(samplepages)){			 
			    $(this).css("opacity", 0.1)
			    $(this).find("input").attr("disabled", "disabled");
                $(this).click(function(){				
                 openFreeSamplePurchaseAlert();				 
			  });
			}             
			if (currpagenumber == Number(samplepages)) {
			    pageheight = ($(this).offset().top);
			}
			$("#content").scroll(function () {
			    var height = $("#content").scrollTop();
			    if (height > pageheight) {			       
			        openFreeSamplePurchaseAlert();
			    }
			});
        });      
    }
}
function getPageByIndexForReports(ind) {
    var obj = new Object();
    var pageNum = 0;
    for (var i = 0; i < pages.length; i++) {
        for (var j = 0; j < pages[i].length; j++) {

            if (pages[i][j].type == "topic") {
                for (var k = 0; k < pages[i][j].pages.length; k++) {
                    if (pages[i][j].pages[k].type == "topic") {
                        for (var m = 0; m < pages[i][j].pages[k].pages.length; m++) {
                            if (pages[i][j].pages[k].pages[m].actualPageNumber!=undefined) {
                                if (ind == pages[i][j].pages[k].pages[m].actualPageNumber) {
                                    return pages[i][j].pages[k].pages[m];
                                    break;
                                }
                                pageNum++;
                            }                       
                        }
                    }
                    else {
                        if (pages[i][j].pages[k].actualPageNumber!=undefined) {
                            if (ind == pages[i][j].pages[k].actualPageNumber) {
                                return pages[i][j].pages[k];
                                break;
                            }
                            pageNum++;
                        }
                    }

                }
            }
            else {
                if (pages[i][j].actualPageNumber!=undefined) {
                    if (ind == pages[i][j].actualPageNumber) {
                        return pages[i][j];
                        break;
                    }
                    pageNum++;
                }
            }

        }
    }
}

function chkIsInstancyContent() {
    try{
        if (window.location.href.indexOf("IsInstancyContent=true") > -1 || window.location.href.indexOf('mode=preview') > -1 || window.location.href.indexOf('localhost')>-1) {
            return true;
        }
        else {
            return false;
        }
    }
    catch(e){}
}
function copyarray(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? copyarray(v) : v;
   }
   return output;
}
//Sunny on 31st August 2017 For Alerts.
function ShowAlert(alertMessage) {
    var alertdiv = $("<div>");
    $(alertdiv).attr('id','AlertPopup');
    $("#resourcesPopup").after(alertdiv);
    $("#AlertPopup").html(alertMessage);
    $("#AlertPopup").dialog({
        resizable: false,
        draggable: false,
        modal: true,
        title: "Alert",
        height: 180,
        width: 420,
        buttons: {
            "Close": function () {
                $(this).dialog('close');
            }
        }
    });
}

function learnerNotes(msg,selected,from) {
    var confirmdiv = $("<div>");
    $(confirmdiv).attr('id', 'ConfirmPopup');
    $("#resourcesPopup").after(confirmdiv);
    $("#ConfirmPopup").html(msg); 
    $("#ConfirmPopup").dialog({
        resizable: false,
        draggable: false,
        modal: true,
        height: 200,
        width: 450,
        title: "Confirm",
        buttons: {
            "Ok": function () {
                debugger;
                $(this).dialog('close');
                if (window.frames["iframeusernotes"].contentWindow != undefined) {
                    if (from == "delete") {
                        window.frames["iframeusernotes"].contentWindow.deletenotes(true, selected);
                    } else if (from == "edit") {
                        window.frames["iframeusernotes"].contentWindow.editnotes(true, selected);
                    }
                 }
            },
            "Cancel": function () {
                $(this).dialog('close');
                return false;
            }
        }
    });
}
//End Sunny