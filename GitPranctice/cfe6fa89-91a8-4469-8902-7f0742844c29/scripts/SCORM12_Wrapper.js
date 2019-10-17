
/*******************************************************************************
**
** SCORM 1.2 communication Wrapper functions
** 
******************************************************************************************/


var objAPI			= null;				// Handle to the LMS SCORM API object
var strCMITrue 		= "true"
var strCMIFalse 	= "false"
var strEmptyString 	= ""
var bDisableAPINotFoundError = false;	// Enable or Disable the SCORM API not found error message.

var strSuspendData = "";

function GetUrl()
{
	if (objAPI != null){
		
		if(objAPI.GetUrl)
		{		
			return objAPI.GetUrl();
		}
		else
		{
			return "";
		}
	}
	else
	{
		return "";
	}
}
/******************************************************************************************
**
** Function LMSGetLastError() 
** Inputs:	None
** Return:	The error code (integer format) that was set by the last LMS function call
**
** Description:
** Call the LMSGetLastError function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSGetLastError()
{
	var nResult = 0
	if (objAPI != null){
		nResult = objAPI.LMSGetLastError()
		return nResult;
	}
	else{
		handleSCORMError();
		return null;
	}
}


/******************************************************************************************
**
** Function LMSGetErrorString(errorCode)
** Inputs:	errorCode - Error Code(integer format)
** Return:	The textual description that corresponds to the input error code 
**
** Description:
** Call the LMSGetErrorString function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSGetErrorString(nErrorCode)
{
	var strResult = ""
	if (objAPI != null){
		strResult = objAPI.LMSGetErrorString(nErrorCode)
		return strResult;
	}
	else{
		handleSCORMError();
		return false;
	}
} 

/******************************************************************************************
**
** Function LMSGetDiagnostic(errorCode) 
** Inputs:	errorCode - Error Code(integer format), or null
** Return:	The vendor specific textual description that corresponds to the input error code 
**
** Description:
** Call the LMSGetDiagnostic function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSGetDiagnostic(nErrorCode) 
{
	var strResult = ""
	if (objAPI != null){
		if(nErrorCode == null)
			strResult = objAPI.LMSGetDiagnostic("");
		else
			strResult = objAPI.LMSGetDiagnostic(nErrorCode);

		return strResult;
	}
	else{
		handleSCORMError();
		return false;
	}
} 


function handleSCORMError()
{
	if (objAPI == null){
		if(bDisableAPINotFoundError == false){
			alert("Unable to locate the LMS SCORM API Adaptor. SCORM tracking will be disabled.");
		}
		return true;
	}
	else{
		var nErrorCode = LMSGetLastError();
		if(nErrorCode == 0){
			return false; 
		}
		else{
			var strError = LMSGetDiagnostic(nErrorCode);
		    //alert("LMS returned SCORM API Error Code " + strError + ".\n" + strError);
			alert("You have lost connection, please log back in to continue with your work.");
			return true;
		}
	}
}


function findAPI(win) 
{
	if (win.API != null){
	    return win.API;
	}

	if (win.length > 0){
	    for (var i=0;i<win.length;i++){
	        var objLMSAPI = findAPI(win.frames[i]);
	        if (objLMSAPI != null){
				return objLMSAPI;
	        }
	    }
	}

	return null;
}


function getAPI()
{
	var objLMSAPI;
	try
	{
		objLMSAPI = findAPI(this.parent);
		if (objLMSAPI == null){
			if (typeof(this.opener) != "undefined"){
				if (this.opener != null){
					objLMSAPI = findAPI(this.opener.parent);
				}
			}
		}
	}
	catch (e) { }

	return objLMSAPI;
}



/******************************************************************************************
**
** Function	: LMSInitialize()
** Parameter: None
** Return	: true indicating that the LMSInitialize("") was successful, false otherwise.
**
** Description:
** This function indicates to the LMS API Adapter that the SCO is going to communicate with the LMS.  
** It is a requirement of the SCO that it call this function before calling any other API functions.
**
******************************************************************************************/

function LMSInitialize() 
{
	var strResult = strCMIFalse
	if (objAPI != null){
		strResult = objAPI.LMSInitialize(strEmptyString)
		if(strResult == strCMITrue){
			return true;
		}
		else{
			handleSCORMError();
			return false;
		}
	}
	else{
		handleSCORMError();
		return false;
	}
} 

/******************************************************************************************
**
** Function LMSFinish()
** Inputs:	None
** Return:	true indicating that the LMSFinish("") was successful, false otherwise.
**
** Description:
** The SCO must call this when it has determined that it no longer needs to communicate with the LMS
**
******************************************************************************************/
function LMSFinish()
{
	var strResult = strCMIFalse
	if (objAPI != null){
		strResult = objAPI.LMSFinish(strEmptyString)
		if(strResult == strCMITrue){
			return true;
		}
		else{
			handleSCORMError();
			return false;
		}
	}
	else{
		handleSCORMError();
		return false;
	}
}


/******************************************************************************************
**
** Function LMSCommit() 
** Inputs:	None
** Return:	None
**
** Description:
** Call the LMSCommit function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSCommit()
{
	var strResult = strCMIFalse
	if (objAPI != null){
		strResult = objAPI.LMSCommit(strEmptyString)
		if(strResult == strCMITrue){
			return true;
		}
		else{
			handleSCORMError();
			return false;
		}
	}
	else{
		handleSCORMError();
		return false;
	}
} 

function computeTime(tmStartTime)
{
   var formattedTime
   if ( tmStartTime != 0 ){
      var tmEndTime = new Date().getTime();
      var elapsedSeconds = ( (tmEndTime - tmStartTime) / 1000 );
      formattedTime = convertTotalSeconds( elapsedSeconds ); 
   }
   else
   {
      formattedTime = "00:00:00.0";
   }

   return formattedTime;
}


function convertTotalSeconds(ts)
{
   var sec = (ts % 60);

   ts -= sec;
   var tmp = (ts % 3600);  //# of seconds in the total # of minutes
   ts -= tmp;              //# of seconds in the total # of hours

   // convert seconds to conform to CMITimespan type (e.g. SS.00)
   sec = Math.round(sec*100)/100;
   
   var strSec = new String(sec);
   var strWholeSec = strSec;
   var strFractionSec = "";

   if (strSec.indexOf(".") != -1)
   {
      strWholeSec =  strSec.substring(0, strSec.indexOf("."));
      strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
   }
   
   if (strWholeSec.length < 2)
   {
      strWholeSec = "0" + strWholeSec;
   }
   strSec = strWholeSec;
   
   if (strFractionSec.length)
   {
      strSec = strSec+ "." + strFractionSec;
   }


   if ((ts % 3600) != 0 )
      var hour = 0;
   else var hour = (ts / 3600);
   if ( (tmp % 60) != 0 )
      var min = 0;
   else var min = (tmp / 60);

   if ((new String(hour)).length < 2)
      hour = "0"+hour;
   if ((new String(min)).length < 2)
      min = "0"+min;

   var rtnVal = hour+":"+min+":"+strSec;

   return rtnVal;
}


/******************************************************************************************
**
** Function LMSGetValue(name) 
** Inputs:	name - string representing the cmi data model defined category or 
**				   element (e.g. cmi.core.student_id)
** Return:	The value presently assigned by the LMS to the cmi data model 
**			element defined by the element or category identified by the name
**			input value.
**
** Description:	
** Wraps the call to the LMS LMSGetValue method
**
******************************************************************************************/
function LMSGetValue(strDataModel)
{
	var strResult = ""
	if (objAPI != null){
		strResult = objAPI.LMSGetValue(strDataModel)
		if (handleSCORMError() == false){
			return strResult;
		}
		else{
			return null;
		}
	}
	else{
		handleSCORMError();
		return null;
	}
}

/******************************************************************************************
**
** Function LMSSetValue(name, value) 
** Inputs:	name - string representing the cmi data model defined category or element
**			value - the value that the named element or category will be assigned
** Return:	true/false
**
** Description:
** Wraps the call to the LMS LMSSetValue method. Returns true if call was successful else returns false
**
******************************************************************************************/
function LMSSetValue(strDataModel, strValue) 
{
	var strResult = strCMIFalse
	if (objAPI != null){
		strResult = objAPI.LMSSetValue(strDataModel, strValue)
		if(strResult == strCMITrue){
			return true;
		}
		else{
			handleSCORMError();
			return false;
		}
	}
	else{
		handleSCORMError();
		return false;
	}
}


/******************************************************************************************
**
** Function LMSGetStudentID() 
** Inputs:	none
** Return:	Unique Identifier used by the LMS to identify student OR null if the call failed
**
** Description:
** Note: The student_id is a read only field in SCORM and there is no corresponding SetValue
**
******************************************************************************************/
function LMSGetStudentID()
{
	return(LMSGetValue("cmi.core.student_id"))
}

/******************************************************************************************
**
** Function LMSGetStudentName()
** Inputs:	none
** Return:	Full name of the Stdent as stored by the LMS
**
** Description:
** Note: The student_name is a read only field in SCORM and there is no corresponding SetValue
**
******************************************************************************************/
function LMSGetStudentName()
{
	return(LMSGetValue("cmi.core.student_name"))
}

/******************************************************************************************
**
** Function LMSGetLessonLocation()
** Inputs:	none
** Return:	null if the call fails OR character data that was sent by the SCO to the LMS by calling the 
**          LMSSetLessonLocation function
**
** Description:
** 
**
******************************************************************************************/
function LMSGetLessonLocation()
{
	return(LMSGetValue("cmi.core.lesson_location"))
}

/******************************************************************************************
**
** Function LMSSetLessonLocation()
** Inputs:	String containing a maximum of 255 characters
** Return:	True if the call was successful else returns false
**
******************************************************************************************/
function LMSSetLessonLocation(strData)
{
	return(LMSSetValue("cmi.core.lesson_location", strData))
}

// passed, failed, completed, incomplete, browsed, not attempted
function LMSGetLessonStatus()
{
	return(LMSGetValue("cmi.core.lesson_status"))
}


function LMSSetLessonStatus(strData)
{
	if(strData != "not attempted"){
		return(LMSSetValue("cmi.core.lesson_status", strData))
	}
	
}


function LMSGetRawScore()
{
	return(LMSGetValue("cmi.core.score.raw"))
}

function LMSSetRawScore(strData)
{
	return(LMSSetValue("cmi.core.score.raw", strData))
}


function LMSGetMaxScore()
{
	return(LMSGetValue("cmi.core.score.max"))
}

function LMSSetMaxScore(strData)
{
	return(LMSSetValue("cmi.core.score.max", strData))
}

function LMSGetMinScore()
{
	return(LMSGetValue("cmi.core.score.min"))
}

function LMSSetMinScore(strData)
{
	return(LMSSetValue("cmi.core.score.min", strData))
}


function LMSGetSuspendData()
{
	var strTemp = ""
	strTemp = LMSGetValue("cmi.suspend_data");
	if(strTemp == null)
	{
		return(strSuspendData)
	}
	else
	{
		return(strTemp)
	}
}

// maximum of 4096 characters
function LMSSetSuspendData(strData)
{
	strSuspendData = strData;
	return(LMSSetValue("cmi.suspend_data",strData))
}

// format is hhhh:mm:ss.ss
function LMSSetSessionTime(tmStartTime)
{
	return(LMSSetValue("cmi.core.session_time",computeTime(tmStartTime)))
}

//time-out, suspend, logout, "" (empty string -- used for normal exit)
function LMSSetExit(strData)
{
	return(LMSSetValue("cmi.core.exit",strData))
}

function LMSGetCredit()
{
	return(LMSGetValue("cmi.core.credit"))
}

function LMSGetEntry()
{
	return(LMSGetValue("cmi.core.entry"))
}

function LMSGetLessonMode()
{
	return(LMSGetValue("cmi.core.lesson_mode"))
}


function LMSGetTotalTime()
{
	return(LMSGetValue("cmi.core.total_time"))
}



function LMSGetLaunchData()
{
	return(LMSGetValue("cmi.launch_data"))
}
function LMSGetAttemptsLeft() {
    return (LMSGetValue("cmi.core.attempts_left"));
}
function LMSGetBuyedAttempts() {
    
    return (LMSGetValue("instancy.buyedattempts"));
}
function LMSGetSCOID() {
   
    return (LMSGetValue("instancy.scoid"));
}

function LMSGetLogoPath()
{
	return(LMSGetValue("instancy.dynamiclogo"));
}
function LMSGetPreviewAnswers()
{
	return(LMSGetValue("instancy.getanswer_data"));
}

function LMSRetakeAssessmentData() {
    return (LMSSetValue("instancy.retake"));
}
function LMSSetMailstatus() {
    return (LMSSetValue("instancy.mailnotification"));
}

function LMSSetQuestionData(Question, qid) {
    var tmCurrentTime = new Date().getTime(); // Get Current Time
    var nativeCID = "";
    try {
        nativeCID = fnGetQueryString("cid");
    }
    catch (e) {
        nativeCID = "";
    }
    if (nativeCID != "") {
        var strCTime = computeTime(tmCurrentTime);
        //-Krishna B - (6.6 consolidate editor for native apps)Added changes for Native app File Attachement for Essay question Type
        var tempUserAnswer = Question.useranswer;
        if (Question.Qtype == "rating")
            tempUserAnswer = ReplaceAll(tempUserAnswer, '@', '#^#^');
       
        if (Question.Qtype == "matrix")
            tempUserAnswer = ReplaceAll(tempUserAnswer, '&&**&&', '##^^##^^');
        
        
        //if (Question.Qtype == "sequence")
        //    tempUserAnswer = ReplaceAll(tempUserAnswer, '##@^@^@##', '#^#^');

        var nativeQData = Question.Qid + "@" + strCTime + "@" + tempUserAnswer + "@" + Question.status
        if (Question.Qtype == "longanswer")
            // for essay question enhancement
            nativeQData = nativeQData + "@" + Question.filename + "@" + Question.fileid+ "@" + Question.capturedvidfilename+ "@" + Question.capturedvidid+ "@" + Question.capturedimgfilename+ "@" + Question.capturedimgid

        if (Question.optionnotes != undefined)
            nativeQData = nativeQData + "@^notes^" + Question.optionnotes

        LMSSetValue("cmi.interaction", nativeQData);
    }
    else {
		   
		     var strCTime = computeTime(tmCurrentTime);
        //LMSSetValue("cmi.interactions." + qid + ".id", Question.Qid)
        //LMSSetValue("cmi.interactions." + qid + ".time", computeTime(tmCurrentTime))
        //LMSSetValue("cmi.interactions." + qid + ".student_response", Question.useranswer)
        //LMSSetValue("cmi.interactions." + qid + ".result", Question.status)
	
       /* if (Question.optionnotes != undefined)
			  LMSSetValue("cmi.interactions." + qid + ".optionalnotes", Question.optionnotes)
		  
        if (Question.Qtype == "longanswer") {
            LMSSetValue("cmi.interactions." + qid + ".attachfilename", Question.filename);
            LMSSetValue("cmi.interactions." + qid + ".attachfileid", Question.fileid)
			// for essay question enhancement
			LMSSetValue("cmi.interactions." + qid + ".capturedvidfilename", Question.capturedvidfilename);
			LMSSetValue("cmi.interactions." + qid + ".capturedvidid", Question.capturedvidid);
			
			LMSSetValue("cmi.interactions." + qid + ".capturedimgfilename", Question.capturedimgfilename);
			LMSSetValue("cmi.interactions." + qid + ".capturedimgid", Question.capturedimgid);
                        // for essay question enhancement
	    }*/
		scormQval = qid + "@@@@" + Question.Qid + "@@@@"+ strCTime +"@@@@"+  Question.useranswer +"@@@@"+ Question.status;
		
		if (Question.optionnotes != undefined)
			  scormQval = scormQval +"@@@@"+ Question.optionnotes;
		  else
			  scormQval = scormQval +"@@@@" + "";
		  
		  if (Question.Qtype == "longanswer") {
			scormQval = scormQval +"@@@@"+ Question.filename;
            scormQval = scormQval +"@@@@"+ Question.fileid;
			 
			scormQval = scormQval +"@@@@"+ Question.capturedvidfilename;
		    scormQval = scormQval +"@@@@"+ Question.capturedvidid;
			
		    scormQval = scormQval +"@@@@"+ Question.capturedimgfilename;
			scormQval = scormQval +"@@@@"+ Question.capturedimgid;
        }  
		  
		LMSSetValue("cmi.interactions",scormQval);
    }
}

function LMSGetCourseAssessor() {
    return (LMSGetValue("instancy.courseassessor"));
}
/**************** 29-10-2014 - Randomization in CO ************/
function LMSGetRandomQuestionNos() {
    return (LMSGetValue("instancy.randomquestionsno"));
}
function LMSSetRandomQuestionNos(str) {
    return (LMSSetValue("instancy.randomquestionsno", str));

}
/**************** 29-10-2014 - Randomization in CO ************/
function LMSSetUserTextResponses(str) {
    debugger;
    try {
        var strTextResponses = "";        
        for (k = 0; k < pages[SeqID].length; k++) {
            if (pages[SeqID][k].type != "topic") {
                if (pages[SeqID][k].usertextresponses != undefined && pages[SeqID][k].usertextresponses != "") {
                    if (strTextResponses == "")
                        strTextResponses = pages[SeqID][k].pageNumber + "$$^^" + pages[SeqID][k].usertextresponses;
                    else
                        strTextResponses = strTextResponses + "^^$$" + pages[SeqID][k].pageNumber + "$$^^" + pages[SeqID][k].usertextresponses;
                }
            }
            else {
                for (j = 0; j < pages[SeqID][k].pages.length; j++) {
                    if (pages[SeqID][k].pages[j].type == "page") {
                        if (pages[SeqID][k].pages[j].usertextresponses != undefined && pages[SeqID][k].pages[j].usertextresponses != "") {
                            if (strTextResponses == "")
                                strTextResponses = pages[SeqID][k].pages[j].pageNumber + "$$^^" + pages[SeqID][k].pages[j].usertextresponses;
                            else
                                strTextResponses = strTextResponses + "^^$$" + pages[SeqID][k].pages[j].pageNumber + "$$^^" + pages[SeqID][k].pages[j].usertextresponses;
                        }
                    }
                    else {
                        for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
                            if (pages[SeqID][k].pages[j].pages[m].type == "page")
                            {
                                if (pages[SeqID][k].pages[j].pages[m].usertextresponses != undefined && pages[SeqID][k].pages[j].pages[m].usertextresponses != "") {
                                    if (strTextResponses == "")
                                        strTextResponses = pages[SeqID][k].pages[j].pages[m].pageNumber + "$$^^" + pages[SeqID][k].pages[j].pages[m].usertextresponses;
                                    else
                                        strTextResponses = strTextResponses + "^^$$" + pages[SeqID][k].pages[j].pages[m].pageNumber + "$$^^" + pages[SeqID][k].pages[j].pages[m].usertextresponses;
                                }
                            }

                        }
                    }

                    
                }
            }
           
        }

        //for (k = 0; k < pages[SeqID].length; k++) {
            
        //}
        LMSSetValue("instancy.textresponses", strTextResponses);
    }
    catch (e)
    {
    }
    //for (i = 0; i < pages.length; i++) {

    //    for (k = 0; k < pages[i].length; k++) {
    //        if (pages[i][k].usertextresponses != undefined && pages[i][k].usertextresponses != "")
    //        {
    //            if (strTextResponses == "")
    //                strTextResponses = i + "^^$$" + k + "$$^^" + pages[i][k].usertextresponses;
    //            else
    //                strTextResponses = strTextResponses + "" +i + "^^$$" + k + "$$^^" + pages[i][k].usertextresponses;
    //        }
    //    }
    //}
    //LMSSetValue("instancy.textresponses", i + "^^$$" + k + "$$^^" + pages[i][k].usertextresponses);
    debugger;

    //var insWebAPIURL = "http://cliwebapi.instancy.net/api/coursetracking/UpdateContenttextResponses?strContentId=123&userId=1"//window.parent.parent.webAPIurl;
    //if (insWebAPIURL != "" && insWebAPIURL != undefined) {
    //    $.ajax({
    //        url: insWebAPIURL,
    //        data: "Testqwdfwew wef few efe",
    //        type: 'POST',
    //        contentType: "application/json",
    //        success: function (result) {
    //            debugger;
    //            console.log(result);
    //        },
    //        error: function (xhr, textStatus, errorThrown) {
    //            debugger;
    //            console.log('Error in Database');
    //        }
    //    });

    //}
}

function LMSGetUserTextResponses() {
    var strTxtResponses = "";
    debugger;
    try {
        strTxtResponses = LMSGetValue("instancy.textresponses");
        strTxtResponses = strTxtResponses.split("^^$$");

        for (k = 0; k < pages[SeqID].length; k++) {
            if (pages[SeqID][k].type != "topic") {
                for (var i = 0; i < strTxtResponses.length; i++) {
                    var ptxtResp = strTxtResponses[i].split("$$^^");
                    if (pages[SeqID][k].pageNumber == ptxtResp[0]) {
                        pages[SeqID][k].usertextresponses = ptxtResp[1];
                    }
                }
            }
            else {
                for (j = 0; j < pages[SeqID][k].pages.length; j++) {
                    if (pages[SeqID][k].pages[j].type == "page") {
                        for (var i = 0; i < strTxtResponses.length; i++) {
                            var ptxtResp = strTxtResponses[i].split("$$^^");
                            if (pages[SeqID][k].pages[j].pageNumber == ptxtResp[0]) {
                                pages[SeqID][k].pages[j].usertextresponses = ptxtResp[1];
                            }
                        }
                    }
                    else {
                        for (m = 0; m < pages[SeqID][k].pages[j].pages.length; m++) {
                            if (pages[SeqID][k].pages[j].pages[m].type == "page") {
                                for (var i = 0; i < strTxtResponses.length; i++) {
                                    var ptxtResp = strTxtResponses[i].split("$$^^");
                                    if (pages[SeqID][k].pages[j].pages[m].pageNumber == ptxtResp[0]) {
                                        pages[SeqID][k].pages[j].pages[m].usertextresponses = ptxtResp[1];
                                    }
                                }
                            }

                        }
                    }


                }
            }

        }
        strTxtResponses = LMSGetValue("instancy.textresponses");
        strTxtResponses = strTxtResponses.split("^^$$");
        for (var i = 0; i < strTxtResponses.length; i++) {
            var ptxtResp = strTxtResponses[i].split("$$^^");
            pages[SeqID][ptxtResp[0]].usertextresponses = ptxtResp[1];
        }
    }
    catch (ex)
    { }
}

/**************** 24-12-2015 - Pooled Question Data in CO ************/
function LMSGetPooledQuestionNos() {
    return (LMSGetValue("instancy.pooledquestionnos"));
}
function LMSSetPooledQuestionNos(str) {
    return (LMSSetValue("instancy.pooledquestionnos", str));
}
/**************** 24-12-2015 - Pooled Question Data in CO ************/
//Priya - 1/7/16 for getting the content according to user selected language  
function getDefaultUserLanguage() {
    debugger;
    var strResult = "";
    if (objAPI != null) {
        strResult = objAPI.getDefaultUserSelectedLanguage();
    }
    return strResult;
}
