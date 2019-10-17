var serverURL = "Remote/SCORM.aspx";
var blnIsErrorDisplayed = false;
var nativeRetake = false;
var ctOBj = new CourseTrackingObj();
var errMsgJVM = "Client browser unable to communicate with server - missing Java Virtual Machine (JVM).\n"
errMsgJVM += "You will need either Sun or Microsoft Java Virtual Machine.\n"
errMsgJVM += "Please contact administrator."
var ltStatus = "incomplete";

NativeAPIAdapter = function() {
    var errMessage;
    var _NoError = 0;
    var errorCode = _NoError;
    var errCodeRS = 1;
    var errCodeLMS = 2;

    NativeAPIAdapter.prototype.LMSInitialize = function(value) {
        try {
            if (ctOBj != null) {
                ctOBj.cid = fnGetQueryString("cid");
                ctOBj.uid = fnGetQueryString("stid");
                ctOBj.location = fnGetQueryString("lloc");
                ctOBj.status = fnGetQueryString("lstatus");
                var strsuspenddata = fnGetQueryString("susdata");
                ctOBj.suspend_data = ReplaceAll(strsuspenddata, '%23', '#');
                ctOBj.question_data = ReplaceAll(fnGetQueryString("quesdata"), '%20', ' ');
                ctOBj.question_data = ReplaceAll(ctOBj.question_data, '%23', '#');
                ctOBj.scoreraw = fnGetQueryString("score");
                var strname = fnGetQueryString("sname");
                ctOBj.sname =  ReplaceAll(strname, '%20', ' ');
            }
            return "";
        }

        catch (e) {

            // alert(e);
        }
    }


    //-------------

    NativeAPIAdapter.prototype.LMSGetValue = function(name) {
        try {
            var tracking = 0;
            switch (name.toLowerCase()) {

                case "cmi.core.student_id":
                    return ctOBj.uid;
                    break;
                case "cmi.core.student_name":
                    return ctOBj.sname;
                    break;
                case "cmi.core.lesson_status":
                    return ctOBj.status
                    break;
                case "cmi.core.lesson_location":
                    return ctOBj.location;
                    break;
                case "cmi.core.total_time":
                    return ctOBj.totaltime;
                    break;
                case "cmi.suspend_data":
                    return ctOBj.suspend_data;
                    break;
                case "cmi.core.score.raw":
                    return ctOBj.scoreraw;
                    break;
                case "instancy.getanswer_data":
                    return ctOBj.question_data;
                    break;
                case "instancy.textresponses":
                    return MobileJSInterface.GetUserTextResponsesWithSeqIDUserID(ctOBj.cid, ctOBj.uid);
                    break;
                default:
                    break;
            }

        }
        catch (e) {
            // alert(errMsgJVM);
        }
    }
    NativeAPIAdapter.prototype.LMSSetValue = function(name, value) {
        try {
            var tracking = 0;
            switch (name.toLowerCase()) {
                case "cmi.core.lesson_status":
                    ctOBj.status = value;
                    break;
                case "cmi.core.lesson_location":
                    ctOBj.location = value;
                    MobileJSInterface.SaveLocationWithLocation(value);                    
                    break;
                case "cmi.core.session_time":
                    ctOBj.totaltime = value;
                    break;
                case "cmi.suspend_data":
                    ctOBj.suspend_data = value;
                    break;
                case "cmi.suspend_data":
                    ctOBj.suspend_data = value;
                    break;
                case "cmi.core.score.raw":
                    ctOBj.scoreraw = value;
                    break;
                case "cmi.interaction":
                    debugger;
                    MobileJSInterface.SaveQuestionDataWithQuestionData(value);                     
                    break;
                case "instancy.retake":
                    MobileJSInterface.RetakeCourseWithIsRetake(true)
//                    nativeRetake = true;
                    break;
                case "instancy.textresponses":
                    ctOBj.text_responses = value;
                    break;
                default:
                    break;
            }
            //            if (name == "cmi.core.lesson_location") {
            //                frames["cont1"].window.location.href = frames["cont1"].window.location.href.split("?LMSSetValue")[0] + "?LMSSetValue=" + name + "~" + value;
            //                //alert(frames["cont1"].window.location.href + "___Latest");            
            //            }
            return "true"
        } catch (e) {
            //  alert(errMsgJVM);
        }
    }
    /////////////////

    NativeAPIAdapter.prototype.LMSCommit = function(value) {
        try {
            var strTrackLocation = "blank.html?IOSCourseClose=true"
            strTrackLocation = strTrackLocation + "&cid=" + ctOBj.cid + "&stid=" + ctOBj.uid + "&lloc=" + ctOBj.location + "&lstatus=" + ctOBj.status + "&susdata=" + ctOBj.suspend_data + "&timespent=" + ctOBj.totaltime + "&quesdata=" + ctOBj.question_data;
            if (ctOBj.scoreraw.toString() != "")
                strTrackLocation += "&score=" + ctOBj.scoreraw;
            if(nativeRetake == true)
                strTrackLocation += "&retake=true";
            window.location.href = strTrackLocation;
            MobileJSInterface.UpdateUserTextResponsesWithSeqIDUserIDTextResponses(ctOBj.cid, ctOBj.uid, ctOBj.text_responses);
        } catch (e) {

        }
    }

    //////////

    NativeAPIAdapter.prototype.LMSFinish = function(value) {
        try {
            var tracking = 0;
            if (document.getElementById(clientID + "_hdnAllowTracking") != null) {
                if (document.getElementById(clientID + "_hdnAllowTracking").value == "yes") {
                    tracking = 1;
                }
            }
            else {
                tracking = 1;
            }
            if (document.getElementById("hdnIsAICC") != null) {
                if (aicc_sid != null) {
                    if (aicc_sid.indexOf("preview_") > -1)
                        return "";
                }
            }
            if (tracking == 1) {
                var result = ""; //RSExecute(serverURL, "LMSFinish", value);
                if (result == null || result.status == -1) {
                    return NativeAPIAdapter.prototype.showRemoteScriptingError("LMS Finish :: Remote Scripting :: \n" + result.message)
                }
                return (NativeAPIAdapter.prototype.CheckForErrors(result.return_value));
            }
            else {
                return "";
            }
        } catch (e) {
            // alert(errMsgJVM);
        }
    }


    NativeAPIAdapter.prototype.LMSGetErrorString = function(errCode) {
        try {
            var tracking = 0;
            if (document.getElementById(clientID + "_hdnAllowTracking") != null) {
                if (document.getElementById(clientID + "_hdnAllowTracking").value == "yes") {
                    tracking = 1;
                }
            }
            else {
                tracking = 1;
            }
            if (tracking == 1) {
                var result = ""; //RSExecute(serverURL, "LMSGetErrorString", errCode);
                if (result == null || result.status == -1) {
                    return NativeAPIAdapter.prototype.showRemoteScriptingError("LMS GetErrorString :: Remote Scripting :: \n" + result.message)
                }
                return result.return_value;
            }
            else {
                return "";
            }
        } catch (e) {
            //  alert(errMsgJVM);
        }
    }

    ///
    NativeAPIAdapter.prototype.LMSGetLastError = function() {

        try {
            return "";

        } catch (e) {
            // alert(errMsgJVM);
        }
    }

    NativeAPIAdapter.prototype.LMSTrackInitialize = function(value) {
        try {
            // alert(document.getElementById("hdnTrackSuspenddata").value + "__susdata");
            if (ctOBj != null) {
                ctOBj.cid = fnGetQueryString("cid");
                ctOBj.uid = fnGetQueryString("stid");
                if(ctOBj.trackbookmark == "" || ctOBj.trackbookmark == undefined)
                    ctOBj.trackbookmark = fnGetQueryString("tbookmark");
                var strLOc = fnGetQueryString("lloc");
                ctOBj.location = fnGetValueByIndex(ctOBj.trackbookmark, strLOc);
                ctOBj.status = fnGetQueryString("lstatus");
                var strsuspenddata = fnGetQueryString("susdata");
                ctOBj.suspend_data = ReplaceAll(strsuspenddata, '%23', '#');
                ctOBj.question_data = ReplaceAll(fnGetQueryString("quesdata"), '%20', ' ');
                ctOBj.scoreraw = fnGetQueryString("score");
                var strsuspenddata = fnGetQueryString("LtSusdata");
                document.getElementById("hdnTrackSuspenddata").value = ReplaceAll(strsuspenddata, '%23', '#');
                document.getElementById("hdnTrackStatus").value = fnGetQueryString("LtStatus");
                document.getElementById("hdnQuseData").value = fnGetQueryString("LtQuesData");
                ctOBj.track_suspenddata = document.getElementById("hdnTrackSuspenddata").value;
               
                ctOBj.trackstatus = document.getElementById("hdnTrackStatus").value;
                ctOBj.suspend_data = fnGetValueByIndex(SeqID, ctOBj.track_suspenddata);
                var strname = fnGetQueryString("sname");
                ctOBj.sname = ReplaceAll(strname, '%20', ' ');
            }
            return "";
        }

        catch (e) {
            alert(e.message);
        }
    }


    NativeAPIAdapter.prototype.LMSTrackGetValue = function(name, id) {
        try {
            var tracking = 0;
            switch (name.toLowerCase()) {

                case "cmi.core.student_id":
                    return ctOBj.uid;
                    break;
                case "cmi.core.student_name":
                    return ctOBj.sname;
                    break;
                case "cmi.core.lesson_status":
                    return ctOBj.status
                    break;
                case "cmi.core.lesson_location":
                    return ctOBj.location;
                    break;
                case "cmi.core.total_time":
                    return ctOBj.totaltime;
                    break;
                case "cmi.suspend_data":
                    return ctOBj.suspend_data;
                    break;
                case "cmi.core.score.raw":
                    return ctOBj.scoreraw;
                    break;
                case "instancy.trackbookmark":
                    return ctOBj.trackbookmark;
                    break;
                case "instancy.textresponses":
                    ctOBj.text_responses = value;
                    break;
                case "instancy.getanswer_data":
                    return fnGetQuesDataByIndex(id, document.getElementById("hdnQuseData").value);
                    break;
                case "instancy.lessonstatus":
                    return fnGetValueByIndex(id, ctOBj.trackstatus);
                    break;
                case "instancy.suspend_data":
                    return fnGetValueByIndex(id, ctOBj.track_suspenddata);
                    break;
                default:
                    break;
            }

        }
        catch (e) {
            // alert(errMsgJVM);
        }
    }
    NativeAPIAdapter.prototype.LMSTrackSetValue = function(name, value) {
        try {
            var tracking = 0;
            switch (name.toLowerCase()) {
                case "cmi.core.lesson_status":
                    ctOBj.status = value;
                    break;
                case "cmi.core.lesson_location":
                    ctOBj.location = value;
                    break;
                case "instancy.trackbookmark":
                    ctOBj.trackbookmark = value;
                    break;
                case "cmi.core.session_time":
                    ctOBj.totaltime = value;
                    break;
                case "cmi.suspend_data":
                    ctOBj.suspend_data = value;
                    break;
                case "cmi.core.score.raw":
                    ctOBj.scoreraw = value;
                    break;
                case "cmi.interaction":
                    if (ctOBj.question_data == "")
                        ctOBj.question_data = value;
                    else
                        ctOBj.question_data += "$" + value;
                    break;
                case "instancy.retake":
                    nativeRetake = true;
                    break;
                default:
                    break;
            }
            //            if (name == "cmi.core.lesson_location") {
            //                frames["cont1"].window.location.href = frames["cont1"].window.location.href.split("?LMSSetValue")[0] + "?LMSSetValue=" + name + "~" + value;
            //                //alert(frames["cont1"].window.location.href + "___Latest");            
            //            }
            return "true"
        } catch (e) {
            //  alert(errMsgJVM);
        }
    }

    NativeAPIAdapter.prototype.LMSTrackCommit = function(value) {
        try {
            //debugger;
            var strTrackLocation = "blank.html?IOSCourseClose=true"
            if (isTrackCommit == true)
                strTrackLocation = "blank.html?IOSCourseClose=true"
            else {
                var npTempSeqId = nObjSeqId + 1;
                strTrackLocation = "blank.html?IOSObjectClose=true&npSeqid=" + npTempSeqId;
            }
            var objSeqId = SeqID + 1;
            strTrackLocation = strTrackLocation + "&cid=" + ctOBj.cid + "&seqid=" + objSeqId + "&stid=" + ctOBj.uid + "&lloc=" + ctOBj.location + "&lstatus=" + ctOBj.status + "&susdata=" + ctOBj.suspend_data + "&timespent=" + ctOBj.totaltime + "&quesdata=" + ctOBj.question_data + "&ltstatus=" + ltStatus;
            if (ctOBj.scoreraw != "")
                strTrackLocation += "&score=" + ctOBj.scoreraw;
            if (nativeRetake == true)
                strTrackLocation += "&retake=true";
            if (isTrackCommit == true) {
                window.location.href = strTrackLocation;
                isTrackCommit = false;
            }
            else
                document.getElementById("refreshFrame").src = strTrackLocation;
            //window.location.href = strTrackLocation;
        } catch (e) {

        }
    }
    NativeAPIAdapter.prototype.LMSTrackFinish = function() {

    }
    NativeAPIAdapter.prototype.SetTrackStatus = function(value) {
       
        ltStatus = value;
    }


};



function fnGetQueryString(variable) {
    try
    {
    var query = window.parent.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    }
    catch (e) {    }   
    return "";
}

function fnGetValueByIndex(index, valueString) {  
    var vars = valueString.split("@");
    try {
        if (index > 0)
            return vars[index - 1];
         else
             return vars[index];
    }
    catch (e) { 
    }
    return "";
}
function fnGetQuesDataByIndex(index, valueString) {
   
    var vars = valueString.split("~");
    try {
        for(var i=0;i<vars.length;i++)
        {
           
            if(vars[i].indexOf(index + "-") != -1)
            {
                return vars[i].replace(index + "-","");
            }
        }
        
    }
    catch (e) {
    }
    return "";
}


function CourseTrackingObj(cid, uid, sname, status, location, sestime, totaltime, suspend_data, question_data, scoreraw, trackbookmark, trackstatus, track_suspenddata, text_responses, codiscussionid) {
    this.cid = cid;
    this.uid = uid;
    this.sname = sname;
    this.status = status;
    this.location = location;
    this.sestime = sestime;    
    this.totaltime = totaltime;
    this.suspend_data = suspend_data;
    this.question_data = question_data;
    this.scoreraw = scoreraw;
    this.trackbookmark = trackbookmark;
    this.trackstatus = trackstatus;
    this.track_suspenddata = track_suspenddata;
    this.text_responses = text_responses;
    this.codiscussionid = codiscussionid;
    return this;
}

function ReplaceAll(Source, stringToFind, stringToReplace) {
    var temp = Source;
    var index = temp.indexOf(stringToFind);
    while (index != -1) {
        temp = temp.replace(stringToFind, stringToReplace);
        index = temp.indexOf(stringToFind);
    }
    return temp;
}