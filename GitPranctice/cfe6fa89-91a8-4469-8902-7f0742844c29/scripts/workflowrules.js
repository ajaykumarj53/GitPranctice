// Workflow Rules version details
var workflowDetails = new Object();
workflowDetails.version = "1.0.0";
workflowDetails.releasedate = "23/01/2014, 03:30 PM IST";
workflowDetails.feature = "Workflow Rules in Assessment";
workflowDetails.developer = "Satya";
// end of verion details
var webserviceURL = "/Instancyservice.asmx";
var completedactions = '';
var isMandatory = true;
var currentPage = 0;
var prevPage = 0;
var totalPages = 0;
var internalTotalPages = 0;
var innerPage = 0;
var currPageObject;
var objType = "co";
var SeqID = 0;
var currentSeqID = 0;
var nextSeqID = 0;
var nObjSeqId = 0;
var targetPath = "";
var retakeClicked = false;
var textEntry = false;
var configSettingsxml;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
}
else // for IE 5/6
{
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", "content.xml", false);
xhttp.send();
xml = xhttp.responseXML;
// Assuming xmlDoc is the XML DOM Document
var jsonText = JSON.stringify(xmlToJson($(xml).find('WorkflowRules')[0]));
var jsonWorkflowRules = JSON.parse(jsonText);
//alert(jsonWorkflowRules.WorkflowRules.Workflow[0]['@attributes'].trigger);
var key = 'onlaunch'
var selRuleObj;
//$.each(jsonWorkflowRules.Workflow, function(trigger, obj) {
//    if (obj['@attributes'].trigger == key) {
//        selRuleObj = obj;
//        return;
//    }
//});

function CheckWorkflowRuleOnTriggered(triggerName, cSeqId, nSeqid) {
    try{
        workflowruleAlertMessage = "";
        currentSeqID = cSeqId;
        nextSeqID = nSeqid;
        var selRuleObj;
        if (jsonWorkflowRules == undefined)
            return;
        $.each(jsonWorkflowRules.Workflow, function(trigger, obj) {
            if (jsonWorkflowRules.Workflow.length == undefined)
                obj = jsonWorkflowRules.Workflow;
            if (obj['@attributes'].trigger.toLowerCase() == triggerName.toLowerCase()) {
                selRuleObj = obj;
                return;
            }
        });
        var timeDelay = 0;
        if (selRuleObj['@attributes'].enabled == "true") {
            $.each(selRuleObj.Step, function(index, stepObj) {
                if (selRuleObj.Step.length == undefined)
                    stepObj = selRuleObj.Step;
                var isConditionResult = true;
                timeDelay = stepObj['@attributes'].timedelay;
                if (stepObj.Condition != undefined) {
                    $.each(stepObj.Condition, function(index, conditionObj) {
                        if (stepObj.Condition.length == undefined)
                            conditionObj = stepObj.Condition;
                        var conditionOperator = conditionObj['@attributes'].coperator;
                        if (CheckCondition(conditionObj)) {
                            if (conditionOperator != undefined && conditionOperator != "") {
                                if (conditionOperator == "or")
                                    isConditionResult = true;
                                if (conditionOperator == "and") {
                                    if (isConditionResult == true)
                                        isConditionResult = true;
                                    else
                                        isConditionResult = false;
                                }
                            }
                            else
                                isConditionResult = true;
                        }
                        else {
                            if (conditionOperator != undefined && conditionOperator != "") {
                                if (conditionOperator == "or") {
                                    if (isConditionResult == true)
                                        isConditionResult = true;
                                    else
                                        isConditionResult = false;
                                }
                                if (conditionOperator == "and") {
                                    isConditionResult = false;
                                }
                            }
                            else
                                isConditionResult = false;
                        }
                        //if (stepObj.Condition.length == undefined)
                        //    return;
                    });
                }
                if (isConditionResult == true) {
                    var tRuleId;
                    var tStepId;
                    var timeLeft = 0;
                    if (!isNaN(timeDelay) && timeDelay != undefined && timeDelay != "") {
                        if (jsonWorkflowRules.Workflow.length == undefined)
                            tRuleId = selRuleObj.ruleid;
                        else
                            tRuleId = selRuleObj['@attributes'].ruleid;

                        if (selRuleObj.Step.length == undefined) {
                            if (stepObj.id != undefined)
                                tStepId = stepObj.id;
                            else
                                tStepId = 1;
                        }
                        else
                            tStepId = stepObj['@attributes'].id;
                        timeLeft = CheckWorkflowTimeDelay(tRuleId, tStepId, timeDelay,cSeqId);
                    }

                    if (Number(timeLeft) <= 0) {
                        $.each(stepObj.Action, function(index, actionObj) {
                            var selCObj;
                            var aConId;
                            var aItemId;
                            var aType;
                            if (stepObj.Action.length == undefined)
                                actionObj = stepObj.Action;
                            ExecuteActionMethods(actionObj);
                            if (stepObj.Action == undefined)
                                return;
                        });
                    }
                    else {
                        workflowruleAlertMessage = "Please wait " + secondsToString(timeLeft * 60) + " for the next module to become available.";
                    }
                }
                //if (selRuleObj.Step.length == undefined)
                //    return true;

            });
        }
    }
    catch (ex)
    { }
}
function CheckWorkflowTimeDelay(tRuleId, tStepId, tDelay,tSeqId) {
    var timeLeft = SetWorkflowSubmittedTime(tRuleId, tStepId, tDelay, tSeqId);
    if (timeLeft == "")
        timeLeft = 0;
    return timeLeft;
}

function CheckCondition(conditionObj) {
    //conditionObj['@attributes'].type, conditionObj['@attributes'].operator, conditionObj['@attributes'].result, conditionObj['@attributes'].itemid    
    var cType = "";
    var cOperator = "";
    var cResult = "";
    var cItem = "";
    var trackCObj;
    var itemIndex;    
    if (conditionObj['@attributes'].type == undefined)
        return true;
    cType = conditionObj['@attributes'].type;
    cOperator = conditionObj['@attributes'].operator;
    cResult = conditionObj['@attributes'].result;
    cItem = conditionObj['@attributes'].itemid    
    if (cItem == "current") {
        trackCObj = pages[currentSeqID];
    }
    else {
        $.each(arrAllObjects, function(index, trackObj) {
            if (trackObj.cid == cItem) {
                trackCObj = trackObj;
                itemIndex = index;
            }
        });
    }
    switch (cType) {
        case "status":
            var strCondition = "'" + trackCObj.status + "'" + " " + cOperator + " " + "'" + cResult + "'";
            switch (cOperator) {
                case "==":
                    if (trackCObj.status == cResult)
                        return true;
                    break;
                case "!=":
                    if (trackCObj.status != cResult)
                        return true;
                    break;
                case "==":
                    break;
            }           
            if (trackCObj.type == "Assessment" && isLongAnswer == true) {
                if (trackCObj.status == "grade" || trackCObj.status == "Pending Review")
                    return true;
            }
            break;
        case "score":
            var userItemScore = pages[itemIndex].userScore;
            if (userItemScore != undefined) {
                var strCondition = userItemScore + " " + cOperator + " " + "'" + cResult + "'";
                switch (cOperator) {
                    case "==":
                        if (userItemScore == cResult)
                            return true;
                        break;
                    case ">=":
                        if (userItemScore >= cResult)
                            return true;
                        break;
                    case "<=":
                        if (userItemScore <= cResult)
                            return true;
                        break;
                }
            }
            break;
    }
    return false;

}
function ExecuteActionMethods(actionObj) {
    var type = "";
    //var item = "";
    var aStatus = "";
    try{
        type = actionObj['@attributes'].type.toLowerCase();
        //item = actionObj['@attributes'].itemid;
        aStatus = actionObj['@attributes'].status.toLowerCase();
        if (completedactions.indexOf(aStatus + ',') != -1)
            return;
    }
    catch (e)
    { }
    if (type == "customfunction") {
        switch (aStatus) {
            case "displaycustomsummary":
                completedactions += aStatus + ',';
                GetAssessmentConfigurationsandWeightings("Overview");
                setTimeout(customSummaryTable, 1000);
                //stomSummaryTable();
                break;
            case "showrecommendation":
                completedactions += aStatus + ',';
                GetAssessmentConfigurationsandWeightings("SubjectArea");
                setTimeout(SubjectAreaSummaryTable, 1000);
                break;
            case "function3":
                alert("function3 called");
                break;
            default:
                alert(aStatus + ' function not implemented');
                break;
        }
    }
    

}

function GetTimeLeft(objSubmitedTime, timeDelay) {       
    if (timeDelay != 0 && timeDelay != "")
        timeDelay = timeDelay * 60;
   var calTime ;
    if (calTime == undefined || calTime == "")
        calTime = 0;
    if (Number(timeDelay) != 0 && Number(calTime) != "") {
        var nTotalDiff = new Date().getTime() - objSubmitedTime;
        var diifMinutes = Math.floor(nTotalDiff / 1000 / 60);
        calTime = parseInt(diifMinutes);
//        if (parseInt(diifMinutes) > 0)
//            calTime = parseInt(calTime) + parseInt(diifMinutes);
//        if (calTime >= timeDelay)
//            timeDelay = 0;
    }
    if (timeDelay != 0) {
        timeDelay = timeDelay - calTime;
    }
    return timeDelay;
}



// Changes XML to JSON
function xmlToJson(xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};



function customSummaryTable() {
    setCustomSummaryData("overview");
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();

    if (trackObjects[SeqID].sf_showPrint == "yes")
        document.getElementById("printbtn").style.display = "";
    else
        document.getElementById("printbtn").style.display = "none";

    if (trackObjects[SeqID].sf_showEdit == "yes")
        document.getElementById("editbtn").style.display = "";
    else
        document.getElementById("editbtn").style.display = "none";
    

    var useragent = navigator.userAgent;
    useragent = useragent.toLowerCase();

    if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
        document.getElementById("printbtn").style.display = "none";
    }


    var showQuestionRows = true;
    if (trackObjects[SeqID].sf_questionText != "yes" && trackObjects[SeqID].sf_qNo != "yes" && trackObjects[SeqID].sf_showFeedback != "yes" && trackObjects[SeqID].sf_showResponce != "yes") {
        showQuestionRows = false;
    }

    /* comented by Raghu********if (trackObjects[SeqID].sf_passingScore == "yes") {
        $("#tblsummary").append($("<tr><td colspan='" + c1 + "'><font class='summaryheader'>Passing Score :</font></td><td colspan='" + c2 + "'><font class='summaryfields'>" + trackObjects[SeqID].passScore + "%</font></td></tr>"));
    }*/


    //////////////////////////////////**************** v A L I D A T I O N *****************//////////////////////////////
    var correctAnswers = 0;
    var counter = 0;
    var summaryQuestionNum = 0;
    var inCorrect_ans;
    var correctAnswersscore = 0;
    var testStatus = "failed";
    var reqpoints = 0;
    // if (showQuestionRows == true) {
    // column titles for question rows
    // column rows        
    if (trackObjects[SeqID].samescoreperpage == "yes") {
        for (var qno = 0; qno < pages[SeqID].length; qno++) {
            if (pages[SeqID][qno].type != "topic") {
                //if (pages[SeqID][qno].type != "page" && pages[SeqID][qno].type != "summary") {
				if (pages[SeqID][qno].iscoao != "co" && pages[SeqID][qno].type != "summary") {
                    // summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
                    counter = counter + 1;
                    if (pages[SeqID][qno].status == "correct" || pages[SeqID][qno].status == "NA") {
                        correctAnswers++;
                    }
                }
            }
            else {
                for (var qno2 = 0; qno2 < pages[SeqID][qno].pages.length; qno2++) {
                    if (pages[SeqID][qno].pages[qno2].type != "topic") {
                        //if (pages[SeqID][qno].pages[qno2].type != "page") {
                        if (pages[SeqID][qno].pages[qno2].iscoao != "co") {
                            // summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
                            counter = counter + 1;
                            if (pages[SeqID][qno].pages[qno2].status == "correct" || pages[SeqID][qno].pages[qno2].status == "NA") {
                                correctAnswers++;
                            }
                        }
                    }
                    else {
                        for (var qno3 = 0; qno3 < pages[SeqID][qno].pages[qno2].pages.length; qno3++) {
                            //if (pages[SeqID][qno].pages[qno2].pages[qno3].type != "page") {
                            if (pages[SeqID][qno].pages[qno2].pages[qno3].iscoao != "co") {
                                // summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
                                counter = counter + 1;
                                if (pages[SeqID][qno].pages[qno2].pages[qno3].status == "correct" || pages[SeqID][qno].pages[qno2].pages[qno3].status == "NA") {
                                    correctAnswers++;
                                }
                            }
                        }
                    }
                }
            }
            // }

        }
        inCorrect_ans = counter - correctAnswers
        ////////////////////////////////////// ************E N D *********************////////////////////////////////////////////////////
        //calculation for correct, incorrectfeedback and adding question and user responce to summary table




        var score = (trackObjects[SeqID].scorePerItem * correctAnswers) - ((counter - correctAnswers) * trackObjects[SeqID].negativeScore)
        if (score < 0) score = 0;
        var maxScore = parseFloat(((counter) * trackObjects[SeqID].scorePerItem));
        var userScore = parseFloat(Round((score / ((counter) * trackObjects[SeqID].scorePerItem)) * 100, 0));
        if (isNaN(userScore)) userScore = 0;

    }
    else {
        // bhushanam : added this else condition for calc scoreper page options.
        var totalscore = 0;
        var QtnPageno = 0;
        for (var qno = 0; qno < pages[SeqID].length; qno++) {
            if (pages[SeqID][qno].type != "topic") {
                //if (pages[SeqID][qno].type != "page" && pages[SeqID][qno].type != "summary") {
                if (pages[SeqID][qno].iscoao != "co" && pages[SeqID][qno].type != "summary") {
                    counter = parseInt(counter) + 1;
                    if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no") {
                        totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
                        if (pages[SeqID][qno].useranswer != undefined)
                            correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno, pages[SeqID][qno].useranswer.toString()));
                        if (pages[SeqID][qno].status == "correct" || pages[SeqID][qno].status == "NA")
                            correctAnswers++;
                    }
                    else {
                        var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
                        totalscore = parseInt(totalscore) + parseInt(qtnscore);
                        if (pages[SeqID][qno].status == "correct" || pages[SeqID][qno].status == "NA") {
                            correctAnswers++;
                            correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
                        }
                    }
                    //QtnPageno++;
                }QtnPageno++;
            }
            else {
                for (var qno2 = 0; qno2 < pages[SeqID][qno].pages.length; qno2++) {
                    if (pages[SeqID][qno].pages[qno2].type != "topic") {
                        //if (pages[SeqID][qno].pages[qno2].type != "page") {
                        if (pages[SeqID][qno].pages[qno2].iscoao != "co") {
                            counter = parseInt(counter) + 1;
                            if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no") {
                                totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
                                if (pages[SeqID][qno].pages[qno2].useranswer != undefined)
                                    correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno, pages[SeqID][qno].pages[qno2].useranswer.toString()));
                                if (pages[SeqID][qno].pages[qno2].status == "correct" || pages[SeqID][qno].pages[qno2].status == "NA")
                                    correctAnswers++;
                            } else {
                                var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
                                totalscore = parseInt(totalscore) + parseInt(qtnscore);
                                if (pages[SeqID][qno].pages[qno2].status == "correct" || pages[SeqID][qno].pages[qno2].status == "NA") {
                                    correctAnswers++;
                                    correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
                                }
                            }
                            //QtnPageno++;
                        }QtnPageno++;
                    }
                    else {
                        for (var qno3 = 0; qno3 < pages[SeqID][qno].pages[qno2].pages.length; qno3++) {
                            //if (pages[SeqID][qno].pages[qno2].pages[qno3].type != "page") {
                            if (pages[SeqID][qno].pages[qno2].pages[qno3].iscoao != "co") {
                                counter = parseInt(counter) + 1;
                                if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no") {
                                    totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
                                    if (pages[SeqID][qno].pages[qno2].pages[qno3].useranswer != undefined)
                                        correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno, pages[SeqID][qno].pages[qno2].pages[qno3].useranswer.toString()));
                                    if (pages[SeqID][qno].pages[qno2].pages[qno3].status == "correct" || pages[SeqID][qno].pages[qno2].pages[qno3].status == "NA")
                                        correctAnswers++;
                                } else {
                                    var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
                                    totalscore = parseInt(totalscore) + parseInt(qtnscore);
                                    if (pages[SeqID][qno].pages[qno2].pages[qno3].status == "correct" || pages[SeqID][qno].pages[qno2].pages[qno3].status == "NA") {
                                        correctAnswers++;
                                        correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
                                    }
                                }
                               // QtnPageno++;
                            }QtnPageno++;
                        }
                    }
                }
            }
        }
        var userScore = parseFloat(Round((correctAnswersscore / totalscore) * 100), 0);
        if (isNaN(userScore)) userScore = 0;
        inCorrect_ans = parseInt(counter) - parseInt(correctAnswers)
        reqpoints = parseInt(((totalscore * trackObjects[SeqID].passScore) / 100));
        // end else...
    }


    if (!isLongAnswer) {
        if ((userScore - trackObjects[SeqID].passScore) >= 0) {
            testStatus = "passed";
        }
    }
    else {
        testStatus = strLessonStatus == "passed" ? "passed" : (strLessonStatus == "grade") ? "grade" : "incomplete";
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
    //if (trackObjects[SeqID].sf_name == "yes") {
    //    var student_name = LMSGetStudentName();
    //    if (tincan.recordStores.length > 0) {
    //        student_name = tincan.actor.name;
    //    }
    //    try {
    //        if (student_name.indexOf(",") != -1)
    //            student_name = repeatReplace(student_name, ',', ' ');
    //    }
    //    catch (ex)
    //    { }
    //    if (student_name == "" || student_name == null) {
    //        student_name = "&nbsp;";
    //    }
    //    $("#summary_web").append($("<div>User name: <span class='summary_result'>" + student_name + "</span></div>'"));
    //}

    //$("#summary_web").append($("<div>Summary for: <span class='summary_result'>" + trackObjects[SeqID].title + "</span></div>'"));
    //$("#summary_web").append($("<div>Total questions: <span class='summary_result'>" + counter + "</span></div>'"));
    //$("#summary_web").append($("<div>Correct answers: <span class='summary_result'>" + correctAnswers + "</span</div>'"));
    //$("#summary_web").append($("<div>Incorrect answers: <span class='summary_result'>" + inCorrect_ans + "</span></div>'"));

    //if (trackObjects[SeqID].sf_userScore == "yes") {
    //    $("#summary_web").append($("<div>Your score: <span class='summary_result'>" + userScore + '%' + "<span></div>'"));
    //}

    //if (trackObjects[SeqID].sf_passingScore == "yes") {
    //    $("#summary_web").append($("<div> Passing score: <span class='summary_result'>" + trackObjects[SeqID].passScore + '%' + "</span></div>'"));
    //}


    //if (trackObjects[SeqID].sf_showResult == "yes") {
    //    var status = "";
    //    if (!isLongAnswer) {
    //        if (testStatus == "passed")
    //            status = "Passed";
    //        else if (testStatus == "failed")
    //            status = "Failed";
    //    }
    //    else {
    //        switch (testStatus) {
    //            case "grade":
    //                status = "Pending Review";
    //                break;
    //            case "passed":
    //                status = "Completed";
    //                break;
    //            case "incomplete":
    //                status = "In Progress";
    //                break;
    //            case "completed":
    //                status = "Completed";
    //                break;
    //        }
    //    }
    //    if (trackObjects[SeqID].trackScore.toLowerCase() == "no") {
    //        status = "Completed";
    //        document.getElementById("retakebtn").style.display = "none";
    //        document.getElementById("editbtn").style.display = "none";
    //    }
    //    $("#summary_web").append($("<div>Result: <span class='summary_result'>" + status + "</span></div>'"));
    //}

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
            if (reatt_Onfail < 0) reatt_Onfail = 0;
        }
        if (reatt_Onfail == "unlimited" || noa == "9999")
            reatt_Onfail = "Unlimited";
        else if (reatt_Onfail == "0") {
            reatt_Onfail = "None";
            document.getElementById("retakebtn").style.display = "none";
            document.getElementById("editbtn").style.display = "none";
        }

        //$("#summary_web").append($("<div>Attempts left: <span class='summary_result'>" + reatt_Onfail + "</span></div>'"));
    }
    else {
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
        if (reatt_Onfail == "unlimited" || noa == "9999") {
            reatt_Onfail = "Unlimited";
        }
        else if (reatt_Onfail == "0") {
            reatt_Onfail = "None";
            document.getElementById("retakebtn").style.display = "none";
            document.getElementById("editbtn").style.display = "none";
        }

    }
    //if (showQuestionRows == true) {
    //    var hidetoctopic;
    //    try {
    //        if (trackObjects[SeqID].hidetoctopic == undefined)
    //            hidetoctopic = "yes";
    //        else
    //            hidetoctopic = trackObjects[SeqID].hidetoctopic.toLowerCase();
    //    } catch (e) { hidetoctopic = "yes"; }
    //    if (screenWidth > 605) {
    //        ///////////////////////////////////////// *************WEB PAGE RENDERING*********** /////////////////////////////
    //        $("#tblsummary").html('');
    //        var $detailsTab = $("<tr></tr>");
    //        if (hidetoctopic == "no")
    //            $detailsTab.append("<td colspan ='8' align='left' class='summarydetails-header'>Details</td>");
    //        else
    //            $detailsTab.append("<td colspan ='6' align='left' class='summarydetails-header'>Details</td>");
    //        $("#tblsummary").append($detailsTab);
    //        // column titles for question rows
    //        var $header = $("<tr></tr>");
    //        if (hidetoctopic == "no") {
    //            $header.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
    //            $header.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
    //        }
    //        if (trackObjects[SeqID].sf_qNo == "yes") {
    //            $header.append("<td align='center' class='summarydetails-hlbl' style='width:1%'>#</td>");
    //        }
    //        if (trackObjects[SeqID].sf_questionText == "yes") {
    //            $header.append("<td align='left' class='summarydetails-hlbl' style='width:59%'>Question text</td>");
    //        }
    //        if (trackObjects[SeqID].sf_showResponse == "yes") {
    //            $header.append("<td align='right' class='summarydetails-hlbl' style='width:2%'></td>");
    //            $header.append("<td align='left' class='summarydetails-hlbl' style='width:20%'>Your response</td>");
    //        }
    //        if (trackObjects[SeqID].sf_showFeedback == "yes") {
    //            $header.append("<td align='left' class='summarydetails-hlbl' style='width:10%'>Correct/Incorrect</td>");
    //            $header.append("<td align='left' class='summarydetails-hlbl' style='width:10%'>Feedback</td>");
    //        }
    //        $('#tblsummary').append($header);


    //        if (hidetoctopic == "no") {
    //            var $titleheader = $("<tr></tr>");
    //            $titleheader.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
    //            $titleheader.append("<td class='summarydetails-hlbl' style='padding:0px;margin:0px;'>&nbsp</td>");
    //            $titleheader.append("<td colspan ='5' align='left' class='summarydetails-title' style='width:100%'>" + trackObjects[SeqID].title + "</td>");
    //            $('#tblsummary').append($titleheader);
    //        }

    //        // column rows

    //        ////////////////////////////////////// ********Creating rows and row content ***** ////////////////////////////////    

    //        //var $tbl = $("<tr></tr>");
    //        //var tblId = "tblId"
    //        //var tdId = "td_";
    //        //var $tdData = $("<td colspan ='5' id ='"+tdId+"'></td>")
    //        //$headerdata.append($tdData);
    //        //var $divData = $("<div class='summaryqtbl' id ='"+tblId+"'></div>");
    //        //$tdData.append($divData)
    //        //var str = "inner_tbl";
    //        //var $tbl = $("<table  width='100%' cellpadding='0' cellspacing='0' id ='"+str+"'></table>")
    //        //$divData.append($tbl);
    //        var tempQno = 0;
    //        for (var qno = 0; qno < totalPages; qno++) {
    //            try {
    //                var qPageObject = getPageByIndex(qno);

    //                if (qPageObject.type != "page" && qPageObject.type != "summary") {
    //                    if (pages[SeqID][0].type != "page")
    //                        tempQno = qno + 1;
    //                    else
    //                        tempQno = qno;
    //                    if (hidetoctopic == "no") {
    //                        var qTopicObject = getTopicByIndex(qno);
    //                        if (qTopicObject != undefined) {

    //                            var $topictbl = $("<tr id='tbl_tr'" + qno + " class='summarydetails-topic'></tr>");
    //                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
    //                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
    //                            $topictbl.append("<td colspan='6' valign='top' align='left' >" + qTopicObject.title + "</td>");
    //                            $('#tblsummary').append($topictbl);

    //                        }
    //                        var qSubTopicObject = getSubTopicByIndex(qno);
    //                        if (qSubTopicObject != undefined) {

    //                            var $topictbl = $("<tr id='tbl_tr'" + qno + " class='summarydetails-subtopic'></tr>");
    //                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp</td>");
    //                            $topictbl.append("<td class='summarydetails-subtopicline' style='padding:0px;margin:0px;'>&nbsp</td>");
    //                            $topictbl.append("<td colspan='6' valign='top' align='left' >" + qSubTopicObject.title + "</td>");
    //                            $('#tblsummary').append($topictbl);

    //                        }
    //                    }
    //                    var $tbl = $("<tr id='tbl_tr'" + qno + " class='summarydetails-listtr'></tr>");
    //                    //$tbl.append($innerTrData);
    //                    summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
    //                    counter = counter + 1;
    //                    if (hidetoctopic == "no") {
    //                        if (getTopicOfPageIndex(qno) != undefined)
    //                            $tbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'></td>");
    //                        else
    //                            $tbl.append("<td style='padding:0px;margin:0px;'>&nbsp</td>");

    //                        if (getSubTopicOfPageIndex(qno) != undefined)
    //                            $tbl.append("<td class='summarydetails-subtopicline' style='padding:0px;margin:0px;'></td>");
    //                        else
    //                            $tbl.append("<td style='padding:0px;margin:0px;'>&nbsp</td>");
    //                    }
    //                    if (trackObjects[SeqID].sf_qNo == "yes") {
    //                        $tbl.append("<td valign='top' align='center' width='1%'>" + summaryQuestionNum + "</font></td>");
    //                    }
    //                    if (trackObjects[SeqID].sf_questionText == "yes") {
    //                        $tbl.append("<td valign='top' align='left' width='59%' >" + questionsArray[tempQno - 1].question + "</td>");
    //                        //$tbl.append($innerTrData);
    //                    }
    //                    if (trackObjects[SeqID].sf_showResponse == "yes") {
    //                        var response = qPageObject.useranswer;
    //                        response = response == undefined ? "" : response;
    //                        var respText = "";
    //                        if (qPageObject.type != "longanswer" && qPageObject.type != "fillintheblank") {
    //                            if (qPageObject.type == "multipleselect" && typeof (response) != "number") {
    //                                var optionsVal = response.split(",");
    //                                respText = "";
    //                                for (var j = 0; j < optionsVal.length; j++) {
    //                                    if (questionsArray[tempQno - 1].options[optionsVal[j]] != undefined)
    //                                        respText += questionsArray[tempQno - 1].options[optionsVal[j]];
    //                                    if (j != optionsVal.length - 1)
    //                                        respText += ",</br>";
    //                                }
    //                            }
    //                            else if (qPageObject.type == "draganddrop") {
    //                                respText += qPageObject.useranswer;
    //                            }
    //                            else {
    //                                respText += questionsArray[tempQno - 1].options[response];
    //                            }
    //                            response = respText ;
    //                        }
    //                        else if (qPageObject.type == "fillintheblank") {
    //                            //response = pages[SeqID][qno].useranswer; // This is previous code
    //                            response = getFormatedText(qPageObject.useranswer);
    //                            response = response == undefined ? "" : response;
    //                        } else {
    //                            response = qPageObject.useranswer;
    //                            response = response == undefined ? "" : response;
    //                        }
    //                        response = (response == undefined || response == "undefined" || response == "") ? "Not Attempted" : response;
    //                        if (qPageObject.type == "draganddrop" && qPageObject.useranswer != undefined) {
    //                            var val = qPageObject.useranswer.toString().split("##");

    //                            var removeDropObjArr = val[2].split("^^^")[0]
    //                            if (val.length > 1)
    //                                response = "Attempted (" + val[1] + " correct, " + removeDropObjArr + " incorrect)";
    //                            else
    //                                response = "Not Attempted";
    //                        }
    //                        var $tempTd = $("<td valign='top' align='right' width='2%' </td>");
    //                        $tbl.append($tempTd);
    //                        if (qPageObject.type == "longanswer" && (qPageObject.filename != "" && qPageObject.filename != undefined)) {
    //                            $tempTd.append("<img src='images/attachment.png' title='" + qPageObject.filename + "' >");
    //                        }
    //                        //$innerTrData.append("<td align='left' style='width:20%' class='summarydetails-list'>" + response + "</td>");
    //                        $tbl.append("<td valign='top' align='left' width='18%' >" + response + "</td>");
    //                        // $tbl.append($innerTrData);
    //                    }
    //                    if (trackObjects[SeqID].sf_showFeedback == "yes") {
    //                        var quesStatus = (qPageObject.status == undefined || qPageObject.status == "undefined" || qPageObject.status == "") ? "NA" : qPageObject.status;
    //                        var feedBackTxt = "";
    //                        var feedback = qPageObject.status == "correct" ? questionsArray[tempQno - 1].correctfeedback : questionsArray[tempQno - 1].incorrectfeedback;
    //                        feedback = (qPageObject.type == "longanswer" || qPageObject.status == undefined) ? "NA" : feedback;
    //                        var logoURL = ""
    //                        if (quesStatus == "correct") {
    //                            logoURL = logoArr[0];
    //                            feedBackTxt = questionsArray[tempQno - 1].correctfeedback;
    //                        }
    //                        else if (quesStatus == "NA") {
    //                            logoURL = logoArr[2];
    //                            feedBackTxt = "NA";

    //                        }
    //                        else {
    //                            logoURL = logoArr[1];
    //                            feedBackTxt = questionsArray[tempQno - 1].incorrectfeedback;
    //                        }
    //                        // $innerTrData.append("<td style='border-spacing: 5px; border-bottom: 1px solid #CCCCCC; width:5%' align='center'><img src='"+logoURL+"' ></img></td><td  style='border-bottom: 1px solid #CCCCCC; width:5%; text-align:left;' align='left';>" + quesStatus + "</td>");
    //                        $tbl.append("<td valign='top' align='left' width='10%'><table widht='100%' cellpadding='2' cellspacing='2' border='0' class='qstatus'><tr><td><img src='" + logoURL + "' ></img></td><td align='left'>" + quesStatus.charAt(0).toUpperCase() + quesStatus.slice(1) + "</td></tr></table></td>");
    //                        //$tbl.append($innerTrData);
    //                        //$innerTrData.append("<td align='right' style='text-align:left; border-bottom: 1px solid #CCCCCC; width:10%' >" + feedBackTxt + "</td>");
    //                        $tbl.append("<td valign='top'  align='left' width='10%'>" + feedBackTxt + "</td>");
    //                        //$tbl.append($innerTrData);
    //                    }
    //                    //mainTbl.append($headerdata)
    //                    //$headerdata.append("</div>")
    //                    // $('#tblsummary').append($headerdata);
    //                    $tbl.append($innerTrData);
    //                    $('#tblsummary').append($tbl);

    //                    if (qPageObject.status == "correct" || qPageObject.status == "NA") {
    //                        correctAnswers++;
    //                    }

    //                }
    //            }
    //            catch (e) { }
    //        }

    //    }
    //    else {
    //        $("#tblsummary").html("");
    //        var $headerdata = $("<tr></tr>");
    //        var tblId = "tblId"
    //        var tdId = "td_";
    //        var $tdData = $("<td colspan ='4' id ='" + tdId + "'></td>")
    //        $headerdata.append($tdData);
    //        var $divData = $("<div id ='" + tblId + "'></div>");
    //        $tdData.append($divData)
    //        var str = "inner_tbl";
    //        var $tbl = $("<table  width='100%' cellpadding='5' cellspacing='0' id ='" + str + "'></table>")
    //        $divData.append($tbl);
    //        var $detailsTab = $("<tr></tr>");
    //        if (hidetoctopic == "no")
    //            $detailsTab.append("<td colspan ='7' align='left' class='summarydetails-header'>Details</td>");
    //        else
    //            $detailsTab.append("<td colspan ='5' align='left' class='summarydetails-header'>Details</td>");

    //        $("#tblsummary").append($detailsTab);
    //        ////////////////////////////////////*************MOBILE RENDERING **********////////////////////////////////////////

    //        var tempQno = 0;
    //        for (var qno = 0; qno < totalPages - 1; qno++) {
    //            var qPageObject = getPageByIndex(qno);
    //            try {
    //                if (qPageObject.type != "page") {
    //                    if (pages[SeqID][0].type != "page")
    //                        tempQno = qno + 1;
    //                    else
    //                        tempQno = qno;
    //                    //var $innerTrData = $("<tr id='tbl_tr"+qno+"'></tr>");
    //                    var $innerTrData = $("<table id='tbl_tr" + qno + "' width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:1px #666666 solid;'></table>");
    //                    //$tbl.append($innerTrData);

    //                    if (hidetoctopic == "no") {
    //                        var qTopicObject = getTopicByIndex(qno);
    //                        if (qTopicObject != undefined) {

    //                            var $topictbl = $("<tr id='tbl_tr'" + qno + " class='summarydetails-topic'></tr>");
    //                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp;</td>");
    //                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp;</td>");
    //                            $topictbl.append("<td valign='top' align='left' style='width:100%;'>" + qTopicObject.title + "</td>");
    //                            $innerTrData.append($topictbl);

    //                        }
    //                        var qSubTopicObject = getSubTopicByIndex(qno);
    //                        if (qSubTopicObject != undefined) {

    //                            var $topictbl = $("<tr id='tbl_tr'" + qno + " class='summarydetails-subtopic'></tr>");
    //                            $topictbl.append("<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp;</td>");
    //                            $topictbl.append("<td class='summarydetails-subtopicline' style='padding:0px;margin:0px;'>&nbsp;</td>");
    //                            $topictbl.append("<td valign='top' align='left' style='width:100%;' >" + qSubTopicObject.title + "</td>");
    //                            $innerTrData.append($topictbl);

    //                        }
    //                    }

    //                    var tdbgrd = "";
    //                    if (hidetoctopic == "no") {
    //                        if (getTopicOfPageIndex(qno) != undefined)
    //                            tdbgrd = "<td class='summarydetails-topicline' style='padding:0px;margin:0px;'>&nbsp;</td>";
    //                        else
    //                            tdbgrd = "<td style='padding:0px;margin:0px;width:5px;'>&nbsp;</td>";

    //                        if (getSubTopicOfPageIndex(qno) != undefined)
    //                            tdbgrd = tdbgrd + "<td class='summarydetails-subtopicline' style='padding:0px;margin:0px;'>&nbsp;</td>";
    //                        else
    //                            tdbgrd = tdbgrd + "<td style='padding:0px;margin:0px;width:5px;'>&nbsp;</td>";
    //                    }

    //                    if (trackObjects[SeqID].sf_questionText == "yes") {


    //                        $innerTrData.append("<tr>" + tdbgrd + "<td  style='width:100%;' align='left'>Question:</td></tr>");
    //                        $innerTrData.append("<tr>" + tdbgrd + "<td align='left' >" + questionsArray[tempQno - 1].question + "</td></tr>");
    //                        $innerTrData.append("<tr height='5px'>" + tdbgrd + "<td ></td></tr>");
    //                        //$tbl.append($innerTrData);
    //                    }

    //                    if (trackObjects[SeqID].sf_showResponse == "yes") {
    //                        var response = qPageObject.useranswer;
    //                        response = response == undefined ? "" : response;
    //                        var respText = "";
    //                        if (qPageObject.type != "longanswer" && qPageObject.type != "fillintheblank") {
    //                            if (qPageObject.type == "multipleselect" && typeof (response) != "number") {
    //                                var optionsVal = response.split(",");
    //                                respText = "";
    //                                for (var j = 0; j < optionsVal.length; j++) {
    //                                    if (questionsArray[tempQno - 1].options[optionsVal[j]] != undefined)
    //                                        respText += questionsArray[tempQno - 1].options[optionsVal[j]];
    //                                    if (j != optionsVal.length - 1)
    //                                        respText += ",</br>";
    //                                }
    //                            }
    //                            else if (qPageObject.type == "draganddrop") {
    //                                respText += qPageObject.useranswer;
    //                            }
    //                            else {
    //                                respText += questionsArray[tempQno - 1].options[response];
    //                            }
    //                            response = respText;
    //                        }
    //                        else if (qPageObject.type == "fillintheblank") {
    //                            //response = pages[SeqID][qno].useranswer; // This is previous code
    //                            response = getFormatedText(qPageObject.useranswer);
    //                            //alert(getFormatedText(pages[SeqID][qno].useranswer));
    //                            response = response == undefined ? "" : response;
    //                        } else {
    //                            response = qPageObject.useranswer;
    //                            response = response == undefined ? "" : response;
    //                        }
    //                        response = (response == undefined || response == "undefined" || response == "") ? "Not Attempted" : response;
    //                        if (qPageObject.type == "draganddrop" && qPageObject.useranswer != undefined) {
    //                            var val = qPageObject.useranswer.toString().split("##");

    //                            var removeDropObjArr = val[2].split("^^^")[0]
    //                            if (val.length > 1)
    //                                response = "Attempted (" + val[1] + " correct, " + removeDropObjArr + " incorrect)";
    //                            else
    //                                response = "Not Attempted";
    //                        }

    //                        //var $innerTrData2 = $("<tr id='tbl_tr"+qno+"'></tr>");
    //                        //$tbl.append($innerTrData2);


    //                        $innerTrData.append("<tr>" + tdbgrd + "<td align='left' style='width:100%'>Your response:</td></tr>");
    //                        $innerTrData.append("<tr>" + tdbgrd + "<td align='left' style='width:100%' class='summary_details'>" + response + "</td></tr>");
    //                        $innerTrData.append("<tr height='5px'>" + tdbgrd + "<td ></td></tr>");
    //                        if (qPageObject.type == "longanswer" && (qPageObject.filename != "" && qPageObject.filename != undefined)) {
    //                            //$innerTrData.append("<tr height='5px'><td class='summary_details'><img src='images/attachment.png' style='width:16px !important; height:16px !important'/></td><td></td></tr>");
    //                            $innerTrData.append("<tr>" + tdbgrd + "<td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='images/attachment.png' style='width:24px !important; height:24px !important'></img></td><td>" + qPageObject.filename + "</td></tr></table></td></tr>");

    //                        }

    //                        //$tbl.append($innerTrData2);
    //                    }

    //                    if (trackObjects[SeqID].sf_showFeedback == "yes") {
    //                        //alert("status :"+pages[SeqID][qno].status);
    //                        var quesStatus = (qPageObject.status == undefined || qPageObject.status == "undefined" || qPageObject.status == "") ? "NA" : qPageObject.status;
    //                        var feedbackTxt = "";
    //                        var feedback = qPageObject.status == "correct" ? questionsArray[tempQno - 1].correctfeedback : questionsArray[tempQno - 1].incorrectfeedback;
    //                        feedback = (qPageObject.type == "longanswer" || qPageObject.status == undefined) ? "NA" : quesStatus;
    //                        var logoURL = ""

    //                        if (quesStatus == "correct") {
    //                            logoURL = logoArr[0];
    //                            feedbackTxt = questionsArray[tempQno - 1].correctfeedback;
    //                        }
    //                        else if (quesStatus == "NA") {
    //                            logoURL = logoArr[2];
    //                            feedbackTxt = quesStatus;
    //                        } else {
    //                            logoURL = logoArr[1];
    //                            feedbackTxt = questionsArray[tempQno - 1].incorrectfeedback;
    //                        }
    //                        //var $innerTrData3 = $("<tr id='tbl_tr"+qno+"'></tr>");
    //                        //$tbl.append($innerTrData3);
    //                        $innerTrData.append("<tr>" + tdbgrd + "<td align='left' style='width:100%;' >Correct/Incorrect:</td></tr>");
    //                        $innerTrData.append("<tr>" + tdbgrd + "<td class='summary_details'><table width='55%'><tr><td width='24px'  align='left' ><img src='" + logoURL + "' style='width:24px !important; height:24px !important'></img></td><td>" + feedback.charAt(0).toUpperCase() + feedback.slice(1) + "</td></tr></table></td></tr>");
    //                        $innerTrData.append("<tr height='5px'>" + tdbgrd + "<td ></td></tr>");
    //                        // $innerTrData3.append("<tr><td align='left' style='width:20%'>" + feedback + "</td>");
    //                        //$tbl.append($innerTrData3);
    //                        //var $innerTrData4 = $("<tr id='tbl_tr"+qno+"'></tr>");
    //                        $innerTrData.append("<tr>" + tdbgrd + "<td align='left' >Feedback:</td></tr>");
    //                        $innerTrData.append("<tr>" + tdbgrd + "<td  align='left' class='summary_details'>" + feedbackTxt + "</td></tr>");
    //                        $tbl.append($innerTrData);
    //                    }

    //                    $('#tblsummary').append($headerdata);
    //                }
    //            }
    //            catch (e) { }
    //        }
    //    }
    //}




    
    var student_id = LMSGetStudentID();
    var overviewxml = fnLoadOverViewConfigurations()
    var userbusinessgoal = "";
    var usersubjectarea = "";
    var tempQno = 0;
    if (pages[SeqID].length > 0) {
        if (pages[SeqID][0].iscoao == "co")//if (pages[SeqID][0].type == "page")
            tempQno = 1;
    }

    for (var ind = 0; ind < pages[SeqID].length; ind++) { // total topics
        if (pages[SeqID][ind].type == "topic") {
            if (pages[SeqID][ind].title == "Demographics") {
                //var goalconfigs = fnGetUserSelectedGoals(overviewxml, pages[SeqID][ind].title);
                var subquesid = 0; //goalconfigs.subjectareaquestion - 1;
                var quesid = 7; //goalconfigs.businessgoalquestion - 1;
                //finding business goal of user.
                if (quesid < pages[SeqID][ind].pages.length) {
                    //if (pages[SeqID][ind].pages[quesid].type != "page") {
                    if (pages[SeqID][ind].pages[quesid].iscoao != "co") {
                        var qPageObject = pages[SeqID][ind].pages[quesid];
                        var questionNumber = qPageObject.pageNumber - tempQno;
                        var response;
						try{
                         response = questionsArray[questionNumber + 1].optionspoints[qPageObject.useranswer][0];
						}catch(e){
                         response = qPageObject.useranswer;
						}
                        switch (parseInt(response)) {
                            case 1:
                                userbusinessgoal = "Lifestyle";
                                break;
                            case 2:
                                userbusinessgoal = "Solo";
                                break;
                            case 3:
                                userbusinessgoal = "Growth";
                                break;
                        }
                    }
                }

                //finding subject area of user.
                if (subquesid < pages[SeqID][ind].pages.length) {
                    //if (pages[SeqID][ind].pages[subquesid].type != "page") {
                    if (pages[SeqID][ind].pages[subquesid].iscoao != "co") {
                        var qPageObject = pages[SeqID][ind].pages[subquesid];
                        var questionNumber = qPageObject.pageNumber - tempQno;
                        var response;
						  try{
						   response = questionsArray[questionNumber + 1].optionspoints[qPageObject.useranswer][0];
						  }catch(e){
                           response = qPageObject.useranswer;
                          }
                        switch (parseInt(response)) {
                            case 1:
                                usersubjectarea = "sales/marketing";
                                break;
                            default:
                                usersubjectarea = "all";
                                break;
                        }
                    }
                }
            }
        }
        if (userbusinessgoal != "" || usersubjectarea !="")
            break;
    }
    //generating summary table and creating xml file for web method to save data.
    var topicsprogresstable = $("<table cellpadding='5' cellspacing='0' class='ins-tblBackground' width='100%'></table>");
    var topicprogressxmlstring = "<?xml version='1.0' encoding='utf-8'?><Overview><userdata contentid='" + trackObjects[SeqID].contentid + "' userid='" + student_id + "' "
    topicprogressxmlstring +=" subjectarea = '" + usersubjectarea + "' businessgoal = '" + userbusinessgoal + "'>"
    for (var pid = 0; pid < pages[SeqID].length; pid++) { // total topics
        if (pages[SeqID][pid].type == "topic") {
            if (pages[SeqID][pid].title == "Demographics") {
                continue;
            }
            var QuestionsCount = 0;
            var topicfeedback = "";
            var topicScore = 0;
            var avgtopicScore = 0;
            var isLimitScore = "false";
            var topicdetails = fnGetOverViewConfigurations(overviewxml, pages[SeqID][pid].title, userbusinessgoal);
            var missedfeedback = "You rated Below Target in this subject area. This may not be one of your strongest areas. Your On Target rating is a " + topicdetails.ontarget + ". We recommend that you take the " + pages[SeqID][pid].title + " subject area assessment and follow the prescriptions you find there to improve in this area. " 
            var ontargetfeedback = "Congratulations! You have achieved a rating of On Target in this area. " +  pages[SeqID][pid].title  + " within your company appears to be at a good level, although there is some room for improvement to really get your company humming." 
            var bullseyefeedback = "Congratulations! You have achieved a rating of Bullseye! in this area. " + pages[SeqID][pid].title + " within your company appears to be spot on, although there may be some room for improvement to be an overachiever. You have a couple choices: Differentiate your business in this subject area and become outstanding for " + pages[SeqID][pid].title + "; or work on other areas that are not as strong to improve your company to acceptable levels."
            var overachieverfeedback = "You’re an over-achiever! You have achieved a rating of Overachiever in this area. " + pages[SeqID][pid].title + " within your company appears to be at the core of your thinking. Consider being a mentor to those who haven’t ranked so high in " + pages[SeqID][pid].title + "."
            for (var tid = 0; tid < pages[SeqID][pid].pages.length; tid++) { // total questions in a topic 
                //if (pages[SeqID][pid].pages[tid].type != "page") {
                if (pages[SeqID][pid].pages[tid].iscoao != "co") {
                    var qPageObject = pages[SeqID][pid].pages[tid];
                    var questionNumber = qPageObject.pageNumber - tempQno;
                    var response = qPageObject.useranswer;
                    response = response == undefined ? "" : response;
                    var QuestionScore = 0;
                    //if (qPageObject.type == "multipleselect" || qPageObject.type == "singleselect" || (qPageObject.type == "truefalse" && tid != pages[SeqID][pid].pages.length - 1)) {
                    if (qPageObject.Qtype == "multipleselect" || qPageObject.Qtype == "singleselect" || (qPageObject.Qtype == "truefalse" && tid != pages[SeqID][pid].pages.length - 1)) {
                        //if (qPageObject.type == "multipleselect" && typeof (response) != "number") {
                        if (qPageObject.Qtype == "multipleselect" && typeof (response) != "number") {
                            var optSel = response.split(",");
                            for (var j = 0; j < optSel.length; j++) {
                                if (questionsArray[questionNumber + 1].options[optSel[j]] != undefined){
								    try{
                                      QuestionScore += parseInt(questionsArray[questionNumber + 1].optionspoints[optSel[j]][0]);
									}catch(e){
									  QuestionScore +=1;
									}
								}
                            }
                        }
                        else {
						    try{
                               QuestionScore += parseInt(questionsArray[questionNumber + 1].optionspoints[response][0]);
							}catch(e){
							    QuestionScore += 1;
							}
                        }
                        topicScore += parseInt(QuestionScore);
                        QuestionsCount += 1;
                    }
                    //if (qPageObject.type == "truefalse" && tid == pages[SeqID][pid].pages.length - 1) {
                    if (qPageObject.Qtype == "truefalse" && tid == pages[SeqID][pid].pages.length - 1) {
                        if (questionsArray[questionNumber + 1].options[response].toLowerCase() == "false")
                            isLimitScore = "true";
                    }
                }
            }
            avgtopicScore = topicScore / QuestionsCount;
            if (isLimitScore == "true" && avgtopicScore > topicdetails.limitscore)
                avgtopicScore = topicdetails.limitscore;
            var topicresult = "";
            var resultstyle = "";
            var extVal = "";
            if (avgtopicScore < topicdetails.ontarget) {
                topicresult = "Missed";
                resultstyle = "ins-missedresult";
                topicfeedback = missedfeedback;
            }
            else if (avgtopicScore >= topicdetails.ontarget && avgtopicScore < topicdetails.bullseye) {
                topicresult = "On Target";
                resultstyle = "ins-ontargetresult";
                topicfeedback = ontargetfeedback;
            }
            else if (avgtopicScore == topicdetails.bullseye) {
                topicresult = "Bullseye";
                resultstyle = "ins-bullseyeresult";
                topicfeedback = bullseyefeedback;
                extVal = "!";
            }
            else {
                topicresult = "Overachiever";
                resultstyle = "ins-overachieverresult";
                topicfeedback = overachieverfeedback;
            }

            var ScoreDiff = avgtopicScore - topicdetails.ontarget;
            var WeightedScore  = topicdetails.weight * ScoreDiff;
            topicprogressxmlstring += "<topic name='" + pages[SeqID][pid].title + "' ovscore = '" + avgtopicScore + "' result = '" + topicresult + "' ";
            topicprogressxmlstring += "scorediff = '" + ScoreDiff + "' weightedscore = '" + WeightedScore + "'/>";


            var $topictitle = $("<tr></tr>");
            $topictitle.append("<td style='width:20px;'></td>");
            $topictitle.append("<td colspan ='4' align='left' class='ins-topicHeading'>" + pages[SeqID][pid].title + "</td>");
            $topictitle.append("<td style='width:20px;'></td>");
            $(topicsprogresstable).append($topictitle);
            
            var $topicprogress = $("<tr></tr>");
            $topicprogress.append("<td style='width:20px;'></td>");
            $topicprogress.append("<td>" + fnGenerateGraph(avgtopicScore, topicdetails.ontarget, topicdetails.bullseye) + " </td>");
            $topicprogress.append("<td nowrap='nowrap' style='width:70px;'>" + avgtopicScore + " of " + topicdetails.maxscore + "</td>");
            $topicprogress.append("<td nowrap='nowrap'><span class='" + resultstyle + "'>" + topicresult + extVal + "</span></td>");
            $topicprogress.append("<td style='width:99%;'></td>");
            $topicprogress.append("<td style='width:20px;'></td>");
            $(topicsprogresstable).append($topicprogress);

            var $topicfeedback = $("<tr></tr>");
            $topicfeedback.append("<td style='width:20px;'></td>");
            $topicfeedback.append("<td colspan ='4' align='left'>" + topicfeedback + "</td>");
            $topicfeedback.append("<td style='width:20px;'></td>");
            $(topicsprogresstable).append($topicfeedback);

        }
    }
    var trprogress = $("<tr></tr>");
    var tdprogress;
    //if (hidetoctopic == "no")
        tdprogress = $("<td colspan='8'></td>");
    //else
    //    tdprogress = $("<td colspan='5'></td>");

    $(tdprogress).append(topicsprogresstable);
    $(trprogress).append(tdprogress);
    $('#tblsummary').append(trprogress);
    topicprogressxmlstring += "</userdata></Overview>";
    if(student_id != null)
        SaveoverviewProgressdata(topicprogressxmlstring);
    document.getElementById("sumtbl").style.display = "none";
    document.getElementById("trPrint").style.display = "none";
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
            if (reatt_Onfail < 0) reatt_Onfail = 0;
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

    

    if (trackObjects[SeqID].trackScore.toLowerCase() == "yes") {
        //assessmentStatus = pages[SeqID].AssessmentStatus;
        userScore = pages[SeqID].userScore;
        maxScore = pages[SeqID].maxScore;

        //for NOA check scenario for the line number
        if (noa != "unlimited" && noa != "9999") {
            if (parseInt(allowedAttempts) <= parseInt(noa)) {
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
        LMSSetRawScore(userScore) // Update User score
        LMSSetLessonStatus("completed");
    }

    //document.getElementById("trPrint").style.display = "";
    document.getElementById("Completedbtn").style.display = "none";

    nosummary = Number(trackObjects[SeqID].no_summarypassfailtext);
    //// Bhushanam - added this no. attempts pass/fail text

    //if (!isLongAnswer) {
    //    if (testStatus.toLowerCase() == "passed" || testStatus.toLowerCase() == "completed")
    //        //$("#tdPass").attr("style", "display:''");
    //    {
    //        showSummaryPassFailTextcnt = Number(att) + 1
    //        if (nosummary == 3) {
    //            if (showSummaryPassFailTextcnt >= 3)
    //                $("#tdPass2").attr("style", "display:''");
    //            else if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdPass1").attr("style", "display:''");
    //            else
    //                $("#tdPass").attr("style", "display:''");
    //        }
    //        if (nosummary == 2) {
    //            if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdPass1").attr("style", "display:''");
    //            else
    //                $("#tdPass").attr("style", "display:''");
    //        }
    //        if (nosummary == 1) {
    //            $("#tdPass").attr("style", "display:''");
    //        }
    //    }
    //    else {
    //        //$("#tdFail").attr("style", "display:''");
    //        showSummaryPassFailTextcnt = Number(att) + 1
    //        if (nosummary == 3) {
    //            if (showSummaryPassFailTextcnt >= 3)
    //                $("#tdFail2").attr("style", "display:''");
    //            else if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdFail1").attr("style", "display:''");
    //            else
    //                $("#tdFail").attr("style", "display:''");
    //        }
    //        if (nosummary == 2) {
    //            if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdFail1").attr("style", "display:''");
    //            else
    //                $("#tdFail").attr("style", "display:''");
    //        }
    //        if (nosummary == 1) {
    //            $("#tdFail").attr("style", "display:''");
    //        }
    //    }
    //}
    //else {
    //    if (userScore >= parseInt(trackObjects[SeqID].passScore)) {
    //        showSummaryPassFailTextcnt = Number(att) + 1
    //        if (nosummary == 3) {
    //            if (showSummaryPassFailTextcnt >= 3)
    //                $("#tdPass2").attr("style", "display:''");
    //            else if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdPass1").attr("style", "display:''");
    //            else
    //                $("#tdPass").attr("style", "display:''");
    //        }
    //        if (nosummary == 2) {
    //            if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdPass1").attr("style", "display:''");
    //            else
    //                $("#tdPass").attr("style", "display:''");
    //        }
    //        if (nosummary == 1) {
    //            $("#tdPass").attr("style", "display:''");
    //        }

    //    }
    //    else {
    //        showSummaryPassFailTextcnt = Number(att) + 1
    //        if (nosummary == 3) {
    //            if (showSummaryPassFailTextcnt >= 3)
    //                $("#tdFail2").attr("style", "display:''");
    //            else if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdFail1").attr("style", "display:''");
    //            else
    //                $("#tdFail").attr("style", "display:''");
    //        }
    //        if (nosummary == 2) {
    //            if (showSummaryPassFailTextcnt >= 2)
    //                $("#tdFail1").attr("style", "display:''");
    //            else
    //                $("#tdFail").attr("style", "display:''");
    //        }
    //        if (nosummary == 1) {
    //            $("#tdFail").attr("style", "display:''");
    //        }

    //    }
    //}
    //// End -- Bhushanam.
    try {
        if (!isLongAnswer)
            document.getElementById("submitbtn").style.display = "none";
        else if (strLessonStatus == "grade") {
            document.getElementById("submitbtn").setAttribute("title", "Re submit");
            document.getElementById("submitbtn").setAttribute("src", "images/resubmit.gif");
            document.getElementById("submitbtn").setAttribute("onover", "images/resubmit_over.gif");
        }
        else if (strLessonStatus == "passed") {
            document.getElementById("submitbtn").style.display = "none";
        } else if (strLessonStatus == "completed") {
            document.getElementById("Completedbtn").style.display = "";
        }
    }
    catch (e)
    { }

    if (isTrack == "yes") {
        $("'.tblTOC div[id=" + SeqID + "]'")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].setAttribute('src', 'images/tick.gif')
        updateTrackStatus();
        if (isLongAnswer == false)
            fnShowHideTOCItems();
    }

    $("#loader").fadeTo("slow", 0);
    $("#page").fadeTo("slow", 1);
    if (submitted == true)
        SetCompletionTinCan();
}

function ClearSummaryData(isRetake) {
    var cleardata = true;
    if (isRetake == true && retakeClicked == false)
        cleardata = false;
    if (cleardata) {
        $('#titletable')[0].rows[0].cells[1].innerHTML = "";
        completedactions = '';
        $('#tblsummary').attr('class', 'summarydetails');
        $('#titletable').attr('class', 'title');
        $('#content').attr('class', '');
    }
}
function setCustomSummaryData(stype) {
    $('#tblsummary').attr('class', 'customsummarydetails');
    $('#titletable').attr('class', 'customtitle');
    $('#content').attr('class', 'ins-tblBackground');
    var tblButtons = "<table cellpadding='0' cellspacing='0'><tr>"
    if (stype == "subjectarea") {
        tblButtons += "<td><img src='images/custom_edit.png' onover='images/custom_edit_over.png' title='Edit' alt='Edit' name='editbtn1' id='editbtn1' border='0' onclick='ClearSummaryData(false);EditResponses();' class='ins-customActions'></td><td width=10px'></td>";
        //tblButtons += "<td><img src='images/custom_retake.png' onover='images/custom_retake_over.png' title='Retake' alt='Retake' name='retakebtn1' id='retakebtn1' border='0' onclick='retakeTest();ClearSummaryData(true);' class='ins-customActions'></td><td width=10px'></td>";
    }
    tblButtons += "<td><img src='images/custom_print.png' onover='images/custom_print_over.png' title='Print' alt='Print' name='printbtn1' id='printbtn1' border='0' onclick='printCommentsSummary();' out='images/custom_print.png' class='ins-customActions'></td>";
    tblButtons += "</tr></table>";

    $('#titletable')[0].rows[0].cells[1].innerHTML = tblButtons;

}
function SubjectAreaSummaryTable() {
    
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    setCustomSummaryData("subjectarea");
    if (trackObjects[SeqID].sf_showPrint == "yes")
        document.getElementById("printbtn").style.display = "";
    else
        document.getElementById("printbtn").style.display = "none";
    if (trackObjects[SeqID].sf_showEdit == "yes")
        document.getElementById("editbtn").style.display = "";
    else
        document.getElementById("editbtn").style.display = "none";


    var useragent = navigator.userAgent;
    useragent = useragent.toLowerCase();

    if (useragent.indexOf('iphone') != -1 || useragent.indexOf('symbianos') != -1 || useragent.indexOf('ipad') != -1 || useragent.indexOf('android') != -1) {
        document.getElementById("printbtn").style.display = "none";
    }


    var showQuestionRows = true;
    if (trackObjects[SeqID].sf_questionText != "yes" && trackObjects[SeqID].sf_qNo != "yes" && trackObjects[SeqID].sf_showFeedback != "yes" && trackObjects[SeqID].sf_showResponce != "yes") {
        showQuestionRows = false;
    }

  

    //////////////////////////////////**************** v A L I D A T I O N *****************//////////////////////////////
    var correctAnswers = 0;
    var counter = 0;
    var summaryQuestionNum = 0;
    var inCorrect_ans;
    var correctAnswersscore = 0;
    var testStatus = "failed";
    var reqpoints = 0;
    // if (showQuestionRows == true) {
    // column titles for question rows
    // column rows        
    if (trackObjects[SeqID].samescoreperpage == "yes") {
        for (var qno = 0; qno < pages[SeqID].length; qno++) {
            if (pages[SeqID][qno].type != "topic") {
                //if (pages[SeqID][qno].type != "page" && pages[SeqID][qno].type != "summary") {
                if (pages[SeqID][qno].iscoao != "co" && pages[SeqID][qno].type != "summary") {
                    // summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
                    counter = counter + 1;
                    if (pages[SeqID][qno].status == "correct" || pages[SeqID][qno].status == "NA") {
                        correctAnswers++;
                    }
                }
            }
            else {
                for (var qno2 = 0; qno2 < pages[SeqID][qno].pages.length; qno2++) {
                    if (pages[SeqID][qno].pages[qno2].type != "topic") {
                        //if (pages[SeqID][qno].pages[qno2].type != "page") {
                        if (pages[SeqID][qno].pages[qno2].iscoao != "co") {
                            // summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
                            counter = counter + 1;
                            if (pages[SeqID][qno].pages[qno2].status == "correct" || pages[SeqID][qno].pages[qno2].status == "NA") {
                                correctAnswers++;
                            }
                        }
                    }
                    else {
                        for (var qno3 = 0; qno3 < pages[SeqID][qno].pages[qno2].pages.length; qno3++) {
                            //if (pages[SeqID][qno].pages[qno2].pages[qno3].type != "page") {
                            if (pages[SeqID][qno].pages[qno2].pages[qno3].iscoao != "co") {
                                // summaryQuestionNum = parseInt(summaryQuestionNum) + 1;
                                counter = counter + 1;
                                if (pages[SeqID][qno].pages[qno2].pages[qno3].status == "correct" || pages[SeqID][qno].pages[qno2].pages[qno3].status == "NA") {
                                    correctAnswers++;
                                }
                            }
                        }
                    }
                }
            }
            // }

        }
        inCorrect_ans = counter - correctAnswers
        ////////////////////////////////////// ************E N D *********************////////////////////////////////////////////////////
        //calculation for correct, incorrectfeedback and adding question and user responce to summary table




        var score = (trackObjects[SeqID].scorePerItem * correctAnswers) - ((counter - correctAnswers) * trackObjects[SeqID].negativeScore)
        if (score < 0) score = 0;
        var maxScore = parseFloat(((counter) * trackObjects[SeqID].scorePerItem));
        var userScore = parseFloat(Round((score / ((counter) * trackObjects[SeqID].scorePerItem)) * 100, 0));
        if (isNaN(userScore)) userScore = 0;

    }
    else {
        // bhushanam : added this else condition for calc scoreper page options.
        var totalscore = 0;
        var QtnPageno = 0;
        for (var qno = 0; qno < pages[SeqID].length; qno++) {
            if (pages[SeqID][qno].type != "topic") {
                //if (pages[SeqID][qno].type != "page" && pages[SeqID][qno].type != "summary") {
                if (pages[SeqID][qno].iscoao != "co" && pages[SeqID][qno].type != "summary") {
                    counter = parseInt(counter) + 1;
                    if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no") {
                        totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
                        if (pages[SeqID][qno].useranswer != undefined)
                            correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno, pages[SeqID][qno].useranswer.toString()));
                        if (pages[SeqID][qno].status == "correct" || pages[SeqID][qno].status == "NA")
                            correctAnswers++;
                    }
                    else {
                        var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
                        totalscore = parseInt(totalscore) + parseInt(qtnscore);
                        if (pages[SeqID][qno].status == "correct" || pages[SeqID][qno].status == "NA") {
                            correctAnswers++;
                            correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
                        }
                    }
                    //QtnPageno++;
                }QtnPageno++;
            }
            else {
                for (var qno2 = 0; qno2 < pages[SeqID][qno].pages.length; qno2++) {
                    if (pages[SeqID][qno].pages[qno2].type != "topic") {
                        //if (pages[SeqID][qno].pages[qno2].type != "page") {
                        if (pages[SeqID][qno].pages[qno2].iscoao != "co") {
                            counter = parseInt(counter) + 1;
                            if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no") {
                                totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
                                if (pages[SeqID][qno].pages[qno2].useranswer != undefined)
                                    correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno, pages[SeqID][qno].pages[qno2].useranswer.toString()));
                                if (pages[SeqID][qno].pages[qno2].status == "correct" || pages[SeqID][qno].pages[qno2].status == "NA")
                                    correctAnswers++;
                            } else {
                                var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
                                totalscore = parseInt(totalscore) + parseInt(qtnscore);
                                if (pages[SeqID][qno].pages[qno2].status == "correct" || pages[SeqID][qno].pages[qno2].status == "NA") {
                                    correctAnswers++;
                                    correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
                                }
                            }
                            //QtnPageno++;
                        }QtnPageno++;
                    }
                    else {
                        for (var qno3 = 0; qno3 < pages[SeqID][qno].pages[qno2].pages.length; qno3++) {
                            //if (pages[SeqID][qno].pages[qno2].pages[qno3].type != "page") {
                            if (pages[SeqID][qno].pages[qno2].pages[qno3].iscoao != "co") {
                                counter = parseInt(counter) + 1;
                                if (questionsArray[QtnPageno].pointsscore != undefined && questionsArray[QtnPageno].pointsscore != "no") {
                                    totalscore = parseInt(totalscore) + parseInt(getCurrectOptionsPoints(QtnPageno));
                                    if (pages[SeqID][qno].pages[qno2].pages[qno3].useranswer != undefined)
                                        correctAnswersscore = parseInt(correctAnswersscore) + parseInt(getCurrectAnswersOptionsPoints(QtnPageno, pages[SeqID][qno].pages[qno2].pages[qno3].useranswer.toString()));
                                    if (pages[SeqID][qno].pages[qno2].pages[qno3].status == "correct" || pages[SeqID][qno].pages[qno2].pages[qno3].status == "NA")
                                        correctAnswers++;
                                } else {
                                    var qtnscore = questionsArray[QtnPageno].Pagescore == undefined ? 0 : questionsArray[QtnPageno].Pagescore;
                                    totalscore = parseInt(totalscore) + parseInt(qtnscore);
                                    if (pages[SeqID][qno].pages[qno2].pages[qno3].status == "correct" || pages[SeqID][qno].pages[qno2].pages[qno3].status == "NA") {
                                        correctAnswers++;
                                        correctAnswersscore = parseInt(correctAnswersscore) + parseInt(qtnscore);
                                    }
                                }
                                //QtnPageno++;
                            }QtnPageno++;
                        }
                    }
                }
            }
        }
        var userScore = parseFloat(Round((correctAnswersscore / totalscore) * 100), 0);
        if (isNaN(userScore)) userScore = 0;
        inCorrect_ans = parseInt(counter) - parseInt(correctAnswers)
        reqpoints = parseInt(((totalscore * trackObjects[SeqID].passScore) / 100));
        // end else...
    }

    if (!isLongAnswer) {
        if ((userScore - trackObjects[SeqID].passScore) >= 0) {
            testStatus = "passed";
        }
    }
    else {
        testStatus = strLessonStatus == "passed" ? "passed" : (strLessonStatus == "grade") ? "grade" : "incomplete";
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
            if (reatt_Onfail < 0) reatt_Onfail = 0;
        }
        if (reatt_Onfail == "unlimited" || noa == "9999")
            reatt_Onfail = "Unlimited";
        else if (reatt_Onfail == "0") {
            reatt_Onfail = "None";
            document.getElementById("retakebtn").style.display = "none";
            document.getElementById("editbtn").style.display = "none";
        }

        //$("#summary_web").append($("<div>Attempts left: <span class='summary_result'>" + reatt_Onfail + "</span></div>'"));
    }
    else {
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
        if (reatt_Onfail == "unlimited" || noa == "9999") {
            reatt_Onfail = "Unlimited";
        }
        else if (reatt_Onfail == "0") {
            reatt_Onfail = "None";
            document.getElementById("retakebtn").style.display = "none";
            document.getElementById("editbtn").style.display = "none";
        }

    }
    


    var student_id = LMSGetStudentID();
    var overviewxml = fnLoadOverViewConfigurations();
    var userbusinessgoal = fnGetUserSelectedGoals(overviewxml);
    var usersubjectarea = "$subjectarea$";
    
    //generating summary table and creating xml file for web method to save data.
    var topicsprogresstable = $("<table cellpadding='5' cellspacing='0' class='ins-tblBackground' width='100%'></table>");
    var topicprogressxmlstring = "<?xml version='1.0' encoding='utf-8'?><Overview><userdata contentid='" + trackObjects[SeqID].contentid + "' userid='" + student_id + "' "
    topicprogressxmlstring += " subjectarea = '" + usersubjectarea + "' businessgoal = '" + userbusinessgoal + "'>"
    var objTopicsData = new Array();
    var tcount = 0;
    var tempQno = 0;
    if (pages[SeqID].length >0 ){
        if (pages[SeqID][0].iscoao == "co")//if (pages[SeqID][0].type == "page")
            tempQno =  1;
    }
    for (var pid = 0; pid < pages[SeqID].length; pid++) { // total topics
        if (pages[SeqID][pid].type == "topic") {
            var QuestionsCount = 0;
            var topicfeedback = "";
            var topicScore = 0;
            var avgtopicScore = 0;
            var topicdetails = fnGetOverViewConfigurations(overviewxml, pages[SeqID][pid].title, userbusinessgoal);
             for (var tid = 0; tid < pages[SeqID][pid].pages.length; tid++) { // total questions in a topic 
                //if (pages[SeqID][pid].pages[tid].type != "page") {
                if (pages[SeqID][pid].pages[tid].iscoao != "co") {
                    var qPageObject = pages[SeqID][pid].pages[tid];
                    var response = qPageObject.useranswer;
                    response = response == undefined ? "" : response;
                    var questionNumber = qPageObject.pageNumber - tempQno;
                    var QuestionScore = 0;
                    var quesFeedback = "";
                    //if (qPageObject.type == "multipleselect" || qPageObject.type == "singleselect" || qPageObject.type == "truefalse") {
                    if (qPageObject.Qtype == "multipleselect" || qPageObject.Qtype == "singleselect" || qPageObject.Qtype == "truefalse") {
                        if (qPageObject.Qtype == "multipleselect" && typeof (response) != "number") {
                            var optSel = response.split(",");
                            for (var j = 0; j < optSel.length; j++) {
                                if (questionsArray[questionNumber + 1].options[optSel[j]] != undefined){
								    try{
                                      QuestionScore += parseInt(questionsArray[questionNumber + 1].optionspoints[optSel[j]][0]);
									}catch(e){
									  QuestionScore += 1;
									}
								}
                            }
                        }
                        else {
						    try{
                              QuestionScore += parseInt(questionsArray[questionNumber + 1].optionspoints[response][0]);
							}catch(e){
							  QuestionScore += 1;
							}
                            if (qPageObject.Qtype != "multipleselect") {
                                var optFb;
								try{
								 optFb = questionsArray[questionNumber + 1].optLevelFeedback[qPageObject.useranswer];
								}catch(e){
								 optFb = "";
								}
                                quesFeedback = (optFb == undefined || optFb == "undefined" || optFb == "") ? "" : optFb;
                                if(quesFeedback !="")
                                    quesFeedback += "<br/>"
                            }
                        }
                        topicScore += parseInt(QuestionScore);
                        QuestionsCount += 1;
                        topicfeedback += quesFeedback
                    }
                }
            }
            avgtopicScore = topicScore / QuestionsCount;
            var topicresult = "";
            var resultstyle = ""
            if (avgtopicScore <= 0 ) {
                topicresult = "Not Applicable";
                resultstyle = "ins-missedresult";
            }
            else if (avgtopicScore < topicdetails.ontarget) {
                topicresult = "Missed";
                resultstyle = "ins-missedresult";
            }
            else if (avgtopicScore >= topicdetails.ontarget && avgtopicScore < topicdetails.bullseye) {
                topicresult = "On Target";
                resultstyle = "ins-ontargetresult";
            }
            else if (avgtopicScore == topicdetails.bullseye) {
                topicresult = "Bullseye";
                resultstyle = "ins-bullseyeresult";
            }
            else {
                topicresult = "Overachiever";
                resultstyle = "ins-overachieverresult";
            }

            var ScoreDiff = avgtopicScore - topicdetails.ontarget;
            var WeightedScore = topicdetails.weight * ScoreDiff;
            topicprogressxmlstring += "<topic name='" + pages[SeqID][pid].title + "' ovscore = '" + avgtopicScore + "' result = '" + topicresult + "' ";
            topicprogressxmlstring += "scorediff = '" + ScoreDiff + "' weightedscore = '" + WeightedScore + "'/>";

            var topicrecommendations = fnGetTopicRecommendations(overviewxml, pages[SeqID][pid].title);

            objTopicsData[tcount] = new Object();
            objTopicsData[tcount].topictitle = pages[SeqID][pid].title;
            objTopicsData[tcount].avgtopicScore = avgtopicScore;
            objTopicsData[tcount].ontarget = topicdetails.ontarget;
            objTopicsData[tcount].bullseye = topicdetails.bullseye;
            objTopicsData[tcount].maxscore = topicdetails.maxscore;
            objTopicsData[tcount].topicresult = topicresult;
            objTopicsData[tcount].resultstyle = resultstyle;
            objTopicsData[tcount].topicfeedback = topicfeedback;
            objTopicsData[tcount].topicrecommendations = topicrecommendations;
            tcount += 1;
        }
    }
    objTopicsData.sort(function (a, b) {
        var a1 = a.avgtopicScore, b1 = b.avgtopicScore;
        if (a1 == b1) return 0;
        return a1 > b1 ? 1 : -1;
    });

    for (var tp1 = 0; tp1 < objTopicsData.length; tp1++) {
        var extVal = "";
        if (objTopicsData[tp1].topicresult == "Bullseye")
            extVal = "!";
        var $topictitle = $("<tr></tr>");
        $topictitle.append("<td style='width:20px;'></td>");
        $topictitle.append("<td colspan ='4' align='left' class='ins-topicHeading'>" + objTopicsData[tp1].topictitle + "</td>");
        $topictitle.append("<td style='width:20px;'></td>");
        $(topicsprogresstable).append($topictitle);

        var $topicprogress = $("<tr></tr>");
        $topicprogress.append("<td style='width:20px;'></td>");
        $topicprogress.append("<td>" + fnGenerateGraph(objTopicsData[tp1].avgtopicScore, objTopicsData[tp1].ontarget, objTopicsData[tp1].bullseye) + " </td>");
        $topicprogress.append("<td nowrap='nowrap' style='width:70px;'>" + objTopicsData[tp1].avgtopicScore + " of " + objTopicsData[tp1].maxscore + "</td>");
        $topicprogress.append("<td nowrap='nowrap'><span class='" + objTopicsData[tp1].resultstyle + "'>" + objTopicsData[tp1].topicresult + extVal + "</span></td>");
        $topicprogress.append("<td style='width:99%;'></td>");
        $topicprogress.append("<td style='width:20px;'></td>");
        $(topicsprogresstable).append($topicprogress);

        if (objTopicsData[tp1].topicfeedback != '') {
            var $topicfeedback = $("<tr></tr>");
            $topicfeedback.append("<td style='width:20px;'></td>");
            $topicfeedback.append("<td colspan ='4' align='left'><div class='ins-topicFeedBackHeading'>Prescription:</div>" + objTopicsData[tp1].topicfeedback + "</td>");
            $topicfeedback.append("<td style='width:20px;'></td>");
            $(topicsprogresstable).append($topicfeedback);
        }
        if (objTopicsData[tp1].topicrecommendations != '') {
            var $topicfeedback = $("<tr></tr>");
            $topicfeedback.append("<td style='width:20px;'></td>");
            $topicfeedback.append("<td colspan ='4' align='left'><div class='ins-topicFeedBackHeading'>Next Steps/Recommendations:</div>" + objTopicsData[tp1].topicrecommendations + "</td>");
            $topicfeedback.append("<td style='width:20px;'></td>");
            $(topicsprogresstable).append($topicfeedback);
        }
    }
    var trprogress = $("<tr></tr>");
    var tdprogress;
    //if (hidetoctopic == "no")
    tdprogress = $("<td colspan='8'></td>");
    //else
    //    tdprogress = $("<td colspan='5'></td>");

    $(tdprogress).append(topicsprogresstable);
    $(trprogress).append(tdprogress);
    $('#tblsummary').append(trprogress);
    topicprogressxmlstring += "</userdata></Overview>";
    if (student_id != null)
        SaveoverviewProgressdata(topicprogressxmlstring);
    document.getElementById("sumtbl").style.display = "none";
    document.getElementById("trPrint").style.display = "none";
    ////////////////////////////////////////////////***********************/////////////////////////////////////////////////////




    if (!isLongAnswer) {
        if (testStatus == "incomplete")
            textEntry = true;
    }

   

    try {
        totalAssesmentScore = pages[SeqID].userScore.toFixed(2);
        totalAssesmentMaxScore = pages[SeqID].maxScore.toFixed(2);
    } catch (e) { }



    if (trackObjects[SeqID].trackScore.toLowerCase() == "yes") {
        //assessmentStatus = pages[SeqID].AssessmentStatus;
        userScore = pages[SeqID].userScore;
        maxScore = pages[SeqID].maxScore;

        //for NOA check scenario for the line number
        if (noa != "unlimited" && noa != "9999") {
            if (parseInt(allowedAttempts) <= parseInt(noa)) {
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
        LMSSetRawScore(userScore) // Update User score
        LMSSetLessonStatus("completed");
    }

    //document.getElementById("trPrint").style.display = "";
    document.getElementById("Completedbtn").style.display = "none";

    nosummary = Number(trackObjects[SeqID].no_summarypassfailtext);
    
    try {
        if (!isLongAnswer)
            document.getElementById("submitbtn").style.display = "none";
        else if (strLessonStatus == "grade") {
            document.getElementById("submitbtn").setAttribute("title", "Re submit");
            document.getElementById("submitbtn").setAttribute("src", "images/resubmit.gif");
            document.getElementById("submitbtn").setAttribute("onover", "images/resubmit_over.gif");
        }
        else if (strLessonStatus == "passed") {
            document.getElementById("submitbtn").style.display = "none";
        } else if (strLessonStatus == "completed") {
            document.getElementById("Completedbtn").style.display = "";
        }
    }
    catch (e)
    { }

    if (isTrack == "yes") {
        $("'.tblTOC div[id=" + SeqID + "]'")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].setAttribute('src', 'images/tick.gif')
        updateTrackStatus();
        if (isLongAnswer == false)
            fnShowHideTOCItems();
    }

    $("#loader").fadeTo("slow", 0);
    $("#page").fadeTo("slow", 1);
    if (submitted == true)
        SetCompletionTinCan();
}
function fnGenerateGraph(uservalue, targetvalue, bullseyevalue) {
    var screenWidth = $(window).width();
    var maintablewidth;
    var tablewidth;
    var mulVal;
    if (screenWidth > 605) {
        tablewidth=200;
        mulVal=40;
    }
    else
    {
        tablewidth=100;
        mulVal=20;
    }
    maintablewidth = tablewidth + 5;
    var userwidth = uservalue * mulVal;
    var point1 = targetvalue * mulVal;
    var point2 = (bullseyevalue - targetvalue) * mulVal;
    var point3 = tablewidth - (point1 + point2);
    var tablescript = "";
    tablescript += "<table width='" + tablewidth + "px' class='ins-tblBackground'  cellpadding='0' cellspacing='0'>";
    tablescript += "<tr><td><div class='verticalLine' style='left:" + userwidth + "px;'></div>";
    tablescript += "<table width='" + tablewidth + "px' class='ins-ProgressTable' cellpadding='0' cellspacing='0'>";
    tablescript += "<tr><td width='" + point1 + "px' class='ins-missedarea' title='Missed'></td>";
    tablescript += "<td width='" + point2 + "px' class='ins-targetarea' title='On Target' ></td>";
    tablescript += "<td width='" + point3 +  "px' class='ins-bullseyearea' title='Bullseye' ></td></tr>";
    tablescript += "</table></td></tr></table>";
    
    return tablescript
}
function fnGetOverViewConfigurations(overviewxml,topicname,userbusinessrule) {
    var topicdetails = new Object();
    var topicnodes = $(overviewxml).find("topic[name='" + topicname +  "']");
    for (var n1 = 0; n1 < topicnodes.length; n1++) {
        var businessrule = topicnodes[n1].getAttribute("businessrule");
        if (businessrule == userbusinessrule) {
            topicdetails.maxscore = topicnodes[n1].getAttribute("maxscore");
            topicdetails.limitscore = topicnodes[n1].getAttribute("limitscore");
            topicdetails.weight = topicnodes[n1].getAttribute("weight");
            topicdetails.ontarget = topicnodes[n1].getAttribute("ontarget");
            topicdetails.bullseye = topicnodes[n1].getAttribute("bullseye");
            break;
        }
    }
    return topicdetails;
}
function fnGetUserSelectedGoals(overviewxml) {
    var userSelectedBusinessGoal = '';
    var topicnodes = $(overviewxml).find("userconfigdata");
    for (var n1 = 0; n1 < topicnodes.length; n1++) {
        userSelectedBusinessGoal = topicnodes[n1].getAttribute("businessgoal");
    }
    if (userSelectedBusinessGoal == '')
        userSelectedBusinessGoal = 'Solo';
    return userSelectedBusinessGoal;
}
function fnGetTopicRecommendations(overviewxml, topicname) {
    var topicrecommendationstable = "<table cellpadding='0' cellspacing='0' width='100%'>";
    var foundrecommendations = 'false';
    var topicnodes = $(overviewxml).find("recommendedcontent[category='" + topicname + "']");
    for (var n1 = 0; n1 < topicnodes.length; n1++) {
        var contentid = topicnodes[n1].getAttribute("contentid");
        var contentname = topicnodes[n1].getAttribute("contentname");
        var siteurl =  topicnodes[n1].getAttribute("siteurl");
        var recommendationlink = "<a class = 'ins-RecommendationLinks' title='" + contentname + "' href='#?' onClick=\"javascript:window.open('" + siteurl + "&ContentID=" + contentid + "','','width=1000,height=600');\" >" + contentname + "</a>"
        topicrecommendationstable += "<tr><td>" + recommendationlink + "</td></tr>";
        foundrecommendations = 'true';
    }
    if (foundrecommendations == 'true')
        return topicrecommendationstable + "</table>";
    else
        return '';
}

function fnLoadOverViewConfigurations() {
    //if (window.XMLHttpRequest) {
    //    xhttp = new XMLHttpRequest();
    //}
    //else // for IE 5/6
    //{
    //    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //}
    //xhttp.open("GET", "xml/OverView.xml", false);
    //xhttp.send();
    //xml2 = xhttp.responseXML;
    //return xml2;
     var xmlnodedata;
	  if($(configSettingsxml).find("GetAssessmentConfigurationsandWeightingsResult")[0].textContent!=undefined)
      	xmlnodedata = $(configSettingsxml).find("GetAssessmentConfigurationsandWeightingsResult")[0].textContent;
	   else
		xmlnodedata = $(configSettingsxml).find("GetAssessmentConfigurationsandWeightingsResult")[0].text;
    var FinalXmlString = xmlnodedata.replace(/\&lt;/g, '<').replace(/\&gt;/g, '>'); // .replace(/\&amp;amp;/g, '&')
    FinalXmlString = FinalXmlString.replace(/\&/g, '&amp;'); // .replace(/\&amp;amp;/g, '&')
    var topicNodes = $($.parseXML(FinalXmlString)).find("Table")
    var overviewxmlText = "<?xml version='1.0' encoding='utf-8'?><contentobject><Overview>"

    for (var t1 = 0; t1 < topicNodes.length; t1++) {
        var categoryText = $(topicNodes[t1]).find("Category")[0].textContent.replace(/\&amp;amp;/g, '&amp;');
        var maxscoreText = $(topicNodes[t1]).find("MaxScore")[0].textContent;
        var limitscoreText = $(topicNodes[t1]).find("LimitScore")[0].textContent;
        var weightText = $(topicNodes[t1]).find("Weight")[0].textContent;
        var ontargerText = $(topicNodes[t1]).find("OnTarget")[0].textContent;
        var bullseyeText = $(topicNodes[t1]).find("Bullseye")[0].textContent;
        var businesstypeText = $(topicNodes[t1]).find("BusinessType")[0].textContent;
        overviewxmlText += "<topic name='" + categoryText + "' businessrule='" + businesstypeText + "' weight='" + weightText + "' ";
        overviewxmlText += " ontarget='" + ontargerText + "' bullseye='" + bullseyeText + "' maxscore='" + maxscoreText + "' limitscore='" + limitscoreText + "'/>";
    }
    

    var userConfigNodes = $($.parseXML(FinalXmlString)).find("Table1");
    if (userConfigNodes.length > 0) {
        var userSubjectArea = $(userConfigNodes[0]).find("SubjectArea")[0].textContent;
        var userBusinessGoal = $(userConfigNodes[0]).find("BusinessGoal")[0].textContent;
        overviewxmlText += "<userconfigdata subjectarea='" + userSubjectArea + "' businessgoal='" + userBusinessGoal + "'/>";
    }

    var recommendedContentNodes = $($.parseXML(FinalXmlString)).find("Table2");
    for (var t1 = 0; t1 < recommendedContentNodes.length; t1++) {
        var Category = $(recommendedContentNodes[t1]).find("Category")[0].textContent.replace(/\&amp;amp;/g, '&amp;');
        var ContentID = $(recommendedContentNodes[t1]).find("ContentID")[0].textContent.replace(/\&amp;amp;/g, '&amp;');
        var ContentName = $(recommendedContentNodes[t1]).find("Name")[0].textContent.replace(/\&amp;amp;/g, '&amp;');
        var SiteURL ='';
        if ($(recommendedContentNodes[t1]).find("SiteURL").length == 0)
        {
            var detailsmenuid = 0;
            if ($(recommendedContentNodes[t1]).find("DetailsMenuID").length != 0)
                detailsmenuid = $(recommendedContentNodes[t1]).find("DetailsMenuID")[0].textContent;
            SiteURL = webserviceURL.replace("Instancyservice.asmx", "default.aspx") + "?MenuID=" + detailsmenuid;
        }
        else
            SiteURL = $(recommendedContentNodes[t1]).find("SiteURL")[0].textContent;
        overviewxmlText += "<recommendedcontent category ='" + Category + "' contentid='" + ContentID + "' contentname='" + ContentName + "' siteurl='" + SiteURL + "' />";
    }

    overviewxmlText += "</Overview></contentobject>";
    //var xmlString = GetXmlData();
    return $.parseXML(overviewxmlText);
}


function xmlToString(xmlData) {
    var xmlString;
    //IE
    if (window.ActiveXObject) {
        xmlString = xmlData.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    if (xmlString == null) {
        xmlString = (new XMLSerializer()).serializeToString($(xmlData)[0]);
    }
    return xmlString;
}






//Web Service Methods 
//1
function SaveoverviewProgressdata(xmlstring) {
    //var wsUrl = "http://localhost/latestplatform/Instancyservice.asmx?op=SaveOverViewProgress";
    var wsUrl = webserviceURL +  "?op=SaveOverViewProgress";
    var soapRequest =
    '<?xml version="1.0" encoding="utf-8"?> \
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
    <soap:Body> \
    <SaveOverViewProgress xmlns="http://tempuri.org/InstancyService"> \
    <astrXML>' + encodeURIComponent(xmlstring) + '</astrXML> \
    </SaveOverViewProgress> \
    </soap:Body> \
    </soap:Envelope>';

    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml",
        dataType: "xml",
        data: soapRequest,
        success: processSuccess,
        error: processError
    });

}
function processSuccess(data, status, req) {
    //if (status == "success") {
    //    alert("success");
    //}
}

function processError(data, status, req) {
    //alert(req.responseText + " " + status);
} 


//2
function GetAssessmentConfigurationsandWeightings(asstype) {
    var student_id = LMSGetStudentID();
    if (student_id == null)
        student_id = 0;
    var contentid = trackObjects[SeqID].contentid;
    var businesstype = "Solo";
    var wsUrl = webserviceURL + "?op=GetAssessmentConfigurationsandWeightings";
    var soapRequest =
    '<?xml version="1.0" encoding="utf-8"?> \
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
    <soap:Body> \
    <GetAssessmentConfigurationsandWeightings xmlns="http://tempuri.org/InstancyService"> \
    <astrContentID>' + trackObjects[SeqID].contentid + '</astrContentID> \
    <astrAssType>' + asstype + '</astrAssType> \
    <astrUserID>' + student_id + '</astrUserID> \
    </GetAssessmentConfigurationsandWeightings> \
    </soap:Body> \
    </soap:Envelope>';

    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml",
        dataType: "xml",
        data: soapRequest,
        success: getoverviewxml,
        error: processError
    });
}
function getoverviewxml(data, status, req) {
    if (status == "success") {
        configSettingsxml = data;
    }
}
