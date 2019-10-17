  
   
function GetdatetoUTCString() {
    var date = new Date();
    return date.toUTCString().replace("UTC", "GMT");
}
function loadQuestions() {
    sfilename = "content/pages/content.xml";
    $.ajax({
        url: sfilename,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
            scontentXML = xml;
            if (isTrack == "no")
                sloadContentLibrary("content/pages/Contentlibrary.xml");
            else
                sloadContentLibrary(targetPath + "content/pages/Contentlibrary.xml");
        },
        error: function(xhr, textStatus, errorThrown) {

        }
    });
}
function sloadContentLibrary(sfilename) {
    $.ajax({
        url: sfilename,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
            scontentLibXML = xml;
            questionsList = new Array();
            var pagesNodes = $(scontentXML).find("page");
            for (var n = 0; n < pagesNodes.length; n++) {
                var pageid = pagesNodes[n].getAttribute("id");
                var pageurl = targetPath + "content/pages/" + pageid + ".xml";
                loadQuestionforStatements(n, pageurl, pagesNodes);

            }

        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}
function loadQuestionforStatements(n, pageurl, pagesNodes) {

    $.ajax({
        url: pageurl,
        type: 'GET',
        dataType: 'xml',
        beforeSend: function() {
        },
        success: function(xml) {
            questionsList[n] = new Object();
            questionsList[n].options = new Array();

            var pageXml = xml;
            questionsList[n].type = $(pageXml).find("page")[0].getAttribute("type").toLowerCase();
            
            var pageObjectsNodes = $(pageXml).find("pageobject");
            for (var n1 = 0; n1 < pageObjectsNodes.length; n1++) {
                var selectQuestionAttribute = pageObjectsNodes[n1].getAttribute("group");
                var selectTypeAttribute = pageObjectsNodes[n1].getAttribute("type");
                if (selectQuestionAttribute == "QUESTION" && selectTypeAttribute == "text") {
                    var poid = pageObjectsNodes[n1].getAttribute("poid");
                    var pageObjectNode = $(scontentLibXML).find("pageobject[id=" + poid + "]");
                    var data = $(pageObjectNode)[0].text;
                    if (data == undefined)
                        data = $(pageObjectNode)[0].textContent;
                            //(INST-3524 and INST-3528)--Added by Krishna B\
                            //Removed the html tags from question text for LRS statement.                            
                            var pDiv = document.createElement("div");
                            pDiv.innerHTML = data;
                    //questionsList[n].question = pDiv.innerText;
                            data = pDiv.innerText;
                            if (data == undefined)
                                data = pDiv.textContent;
                            questionsList[n].question = data;

                    if (n + 1 == pagesNodes.length) {
                        //setTimeout(drawTable, 1000);
                    }
                }
                if (selectQuestionAttribute == "INCORRECTFEEDBACK" || selectQuestionAttribute == "CORRECTFEEDBACK") {
                    var poid = pageObjectsNodes[n1].getAttribute("poid");
                    var pageObjectNode = $(scontentLibXML).find("pageobject[id=" + poid + "]");
                    var data = $(pageObjectNode)[0].text;
                    if (data == undefined)
                        data = $(pageObjectNode)[0].textContent;
                    if (selectQuestionAttribute == "INCORRECTFEEDBACK")
                        questionsList[n].incorrectfeedback = data;
                    else
                        questionsList[n].correctfeedback = data;


                }
                if (selectQuestionAttribute == "OPTIONS" && selectTypeAttribute == "text") {

                    var choice = pageObjectsNodes[n1].getAttribute("choice");
                    var displayOrderNode = $(pageXml).find("pageobject[id=" + choice + "]");
                    var poid = pageObjectsNodes[n1].getAttribute("poid");
                    var pageObjectNode = $(scontentLibXML).find("pageobject[id=" + poid + "]");
                    var data = $(pageObjectNode)[0].text;
                    if (data == undefined)
                        data = $(pageObjectNode)[0].textContent;
                    questionsList[n].options[displayOrderNode[0].getAttribute("displayorder")] = data;


                }


            }
        },
        error: function(xhr, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}
function SetCompletionTinCan() {
    //if (tc_lrs === null || tc_lrs === undefined)
    if (tincan.recordStores.length === 0)
        return;

    //if (trackObjects[SeqID].pages > innerPage + 1)
       // return;

    if (trackObjects[SeqID].trackScore.toLowerCase() == "yes" && getCoValues("type") == "summary") {
 // send score
            //var scaledScore = pages[SeqID].userScore / 100,
        //success = (scaledScore >= trackObjects[SeqID].passScore);
        var scaledScore = pages[SeqID].userScore / 100;
       success = ((pages[SeqID].userScore - trackObjects[SeqID].passScore) >= 0);
       

		var NoofAttampt = parseInt(GetTinCanNoofAttampt());
            NoofAttampt = NoofAttampt + 1;
            var extensions = {};
            extensions[Instancy_TCAPI.CourseActivity.id + "/result"] = pages[SeqID].testStatus;
            extensions[Instancy_TCAPI.CourseActivity.id + "/time"] = computeTime(tmStartTime);
            extensions[Instancy_TCAPI.CourseActivity.id + "/NoofAttampt"] = NoofAttampt;
            if (trackObjects[SeqID].testType == "28") {
                var stmt = {
                    verb: {
                        id: "http://adlnet.gov/expapi/verbs/completed",
                        display: {
                            "en-US": "completed"
                        }
                    },
                    object: Instancy_TCAPI.CourseActivity,
                    timestamp: GetdatetoUTCString(),
                    result: {
                        duration: computeTime(tmStartTime)
                    },
                    context: Instancy_TCAPI.getContext()
                };
                tincan.sendStatement(stmt);
                if (tincan2.recordStores.length > 0) {
                    tincan2.sendStatement(stmt);
                }
            }
            else {
        var stmt = {
            verb: {
                id: "http://adlnet.gov/expapi/verbs/completed",
                display: {
                    "en-US": "completed"
                }
            },
            object: Instancy_TCAPI.CourseActivity,
            timestamp: GetdatetoUTCString(),
            result: {
		     score: {
	                        scaled: scaledScore,
	                        raw: pages[SeqID].userScore,
	                        min: 0,
	                        max: 100
	                    },
                    success: success,
                    extensions: extensions,
                duration: computeTime(tmStartTime)
            },
            context: Instancy_TCAPI.getContext()
        };
        tincan.sendStatement(stmt);
        if (tincan2.recordStores.length > 0) {
            tincan2.sendStatement(stmt);
                }
        }
    }
    else {
    var stmt = {
        verb: {
            id: "http://adlnet.gov/expapi/verbs/completed",
            display: {
                "en-US": "completed"
            }
        },
        object: Instancy_TCAPI.CourseActivity,
        timestamp: GetdatetoUTCString(),
        result: {
            duration: computeTime(tmStartTime)
        },
        context: Instancy_TCAPI.getContext()
    };

    tincan.sendStatement(stmt);
    if (tincan2.recordStores.length > 0) {
        tincan2.sendStatement(stmt);
    }
    }
    //TCDriver_SendStatement(tc_lrs, stmt);
}

    function SetExitedTinCan() {
        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;

        var stmt = {       
            verb: {
                id: "http://adlnet.gov/expapi/verbs/exited",
                display: {
                    "en-US": "exited"
                }
            },
            object: Instancy_TCAPI.CourseActivity,
	    timestamp:  GetdatetoUTCString(),
            result: {
                duration: computeTime(tmStartTime)
            },
            context: Instancy_TCAPI.getContext()
        };

        tincan.sendStatement(stmt);
        if (tincan2.recordStores.length > 0) {
            tincan2.sendStatement(stmt);
        }
        //TCDriver_SendStatement(tc_lrs, stmt);
    }

    function SendTinCanStatement() {

        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;

        var pageObj = {
            id: Instancy_TCAPI.CourseActivity.id + "/" + innerPage.toString(),
            definition: {
                type: Instancy_TCAPI.CourseActivity.definition.type,
                name: { "en-US": currPageObject.title },
                description: { "en-US": currPageObject.title }
            }
        };

        var stmt = {        
            verb: {
                id: "http://adlnet.gov/expapi/verbs/experienced",
                display: {
                    "en-US": "experienced"
                }
            },
            object: pageObj,
	    timestamp:  GetdatetoUTCString(),
            context: Instancy_TCAPI.getContext(
                            Instancy_TCAPI.CourseActivity.id)
        };
        
        tincan.sendStatement(stmt);
        if (tincan2.recordStores.length > 0) {
            tincan2.sendStatement(stmt);
        }
        //TCDriver_SendStatement(tc_lrs, stmt);

    }
    function SendTinCanbuyattemptStatement() {

        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;

        var pageObj = {
            id: Instancy_TCAPI.CourseActivity.id + "/" + innerPage.toString(),
            definition: {
                type: Instancy_TCAPI.CourseActivity.definition.type,
                name: { "en-US": currPageObject.title + "buy attempts clicked" },
                description: { "en-US": currPageObject.title }
            }
        };

        var stmt = {
            verb: {
                id: "http://adlnet.gov/expapi/verbs/visited",
                display: {
                    "en-US": "visited"
                }
            },
            object: pageObj,
            timestamp: GetdatetoUTCString(),
            context: Instancy_TCAPI.getContext(
                            Instancy_TCAPI.CourseActivity.id)
        };

        tincan.sendStatement(stmt);
        if (tincan2.recordStores.length > 0) {
            tincan2.sendStatement(stmt);
        }
        //TCDriver_SendStatement(tc_lrs, stmt);

}


function SendTinCanAnswerStatement() {

    //if (tc_lrs === null || tc_lrs === undefined)
    if (tincan.recordStores.length === 0)
        return;

    try{
		if (trackObjects[0].singleqtnperpage === "yes") {	
        if (getCoValues("iscoao") != "co" && getCoValues("type") != "summary" && getCoValues("type") != "topic") {
            //var questionText = currPageObject.title;       
            if (getCoValues("useranswer") == undefined || getCoValues("useranswer") == "")
                return;

            var id = Instancy_TCAPI.CourseActivity.id + "/" + (Number(innerPage)+2).toString();

            var questionText = questionsList[innerPage].question
            var questionChoices = questionsList[innerPage].options;
            var questionType = questionsList[innerPage].type;
            //var learnerResponse = currPageObject.useranswer;
            var learnerResponse = '';

            //if (questionType == "multipleselect") {
            //    var n = getCoValues("useranswer").toString().split(",");
            //    for (var i = 0; i < n.length; i++) {
            //        learnerResponse = learnerResponse + questionChoices[n[i]] + ',';
            //    }
            //    if (learnerResponse.length > 0)
            //        learnerResponse = learnerResponse.substring(0, learnerResponse.length - 1);
            //}
            //else
            if (questionType == "fillintheblank") {
                if (getCoValues("useranswer") == undefined)
                    learnerResponse = "";
                else
                    learnerResponse = getCoValues("useranswer").toString();
            }
            else {
                //if (questionChoices.length === 0)
                    learnerResponse = getCoValues("useranswer");
                //else
                //    learnerResponse = questionChoices[getCoValues("useranswer")]
            }
            var correctAnswer = "";
            if (getCoValues("correctanswer") != undefined)
                correctAnswer = getCoValues("correctanswer").toString();
            var wasCorrect = false;
            if (getCoValues("status") == "correct")
                wasCorrect = true;
            else
                wasCorrect = false;
            var activityId = Instancy_TCAPI.CourseActivity.id;


            var stmt2 = GetQuestionAnswerStatement(id, questionText, questionChoices, questionType, learnerResponse, correctAnswer, wasCorrect, activityId)
            //TCDriver_SendStatement(tc_lrs, stmt2);
            tincan.sendStatement(stmt2);
            if (tincan2.recordStores.length > 0) {
                tincan2.sendStatement(stmt2);
				}
			}
		}
		else
		{
			//var innpage = 0;
			//if (pages[SeqID][0].type == "page")
			//	innpage = 1;
			//else
			//	innpage = 0;
			//for (i = 0; i < pages[SeqID].length; i++) {
			 for (i = 0; i < getTotalPageInObject(SeqID) ; i++) {
				//getPageByIndex(i).Qtype
				var arrQA = getPageByIndex(i);
				if (arrQA.iscoao != "co" && arrQA.type != "summary" && arrQA.type != "topic") {
						var id = Instancy_TCAPI.CourseActivity.id + "/" + (i+2).toString();
						//var questionText = currPageObject.title;
						var questionText = questionsList[i].question
						var questionChoices = questionsList[i].options;
						var questionType = arrQA.Qtype;
						var learnerResponse = '';                   
						if (questionType == "fillintheblank") {
							if (arrQA.useranswer == undefined)
								learnerResponse = "";
							else
								learnerResponse = arrQA.useranswer.toString();
						}
						else {
							learnerResponse = arrQA.useranswer;
						}						
						var correctAnswer = "";
						if (arrQA.correctanswer != undefined)
							correctAnswer = arrQA.correctanswer.toString();
						var wasCorrect = false;
						if (arrQA.status == "correct")
							wasCorrect = true;
						else
							wasCorrect = false;
						var activityId = Instancy_TCAPI.CourseActivity.id;
						var stmt2 = GetQuestionAnswerStatement(id, questionText, questionChoices, questionType, learnerResponse, correctAnswer, wasCorrect, activityId)
						//TCDriver_SendStatement(tc_lrs, stmt2);
						tincan.sendStatement(stmt2);
						if (tincan2.recordStores.length > 0) {
							tincan2.sendStatement(stmt2);
						}
				}
				else if (i > 0 && arrQA.iscoao === "co" && arrQA.type != "summary" && arrQA.type != "topic") {
				    var pageObj = {
				        id: Instancy_TCAPI.CourseActivity.id + "/" + i.toString(),
				        definition: {
				            type: Instancy_TCAPI.CourseActivity.definition.type,
				            name: { "en-US": arrQA.title },
				            description: { "en-US": arrQA.title }
				        }
				    };
				    var stmt = {
				        verb: {
				            id: "http://adlnet.gov/expapi/verbs/experienced",
				            display: {
				                "en-US": "experienced"
				            }
				        },
				        object: pageObj,
				        timestamp: GetdatetoUTCString(),
				        context: Instancy_TCAPI.getContext(
                                        Instancy_TCAPI.CourseActivity.id)
				    };
				    tincan.sendStatement(stmt);
				    if (tincan2.recordStores.length > 0) {
				        tincan2.sendStatement(stmt);
				    }
				}
            }
        }
    }
    catch (e) { }
}


function GetQuestionAnswerStatement(id, questionText, questionChoices, questionType, learnerResponse, correctAnswer, wasCorrect, activityId) {
    var ResponsesPattern = '';
    //if (typeof console !== 'undefined') {
    //    console.log("GetQuestionAnswerStatement");
    //}
    if (questionType == "truefalse") {
        questionType = 'true-false';
        if (correctAnswer == 1)
            ResponsesPattern = 'true'
        else ResponsesPattern = 'false'
        //if (learnerResponse == '1')
        //    learnerResponse = 'true'
        //else learnerResponse = 'false'

    }
    else if (questionType == "multipleselect" || questionType == "singleselect")
        questionType = 'choice'
    else if (questionType == "fillintheblank") {
        questionType = 'fill-in'
        learnerResponse = learnerResponse.toString();
    }
    else if (questionType == "longanswer")
        questionType = 'long-fill-in'
    else if (questionType == "draganddrop")
        questionType = 'matching'
    else if (questionType == "rating")
        questionType = 'other'

    //send question info
    var qObj = {
        id: id,
        definition: {
            type: "http://adlnet.gov/expapi/activities/cmi.interaction",
            description: {
                "en-US": questionText
            },
            interactionType: questionType
            //            correctResponsesPattern: [
            //                        String(ResponsesPattern)
            //                    ]
        }
    };

    if (questionType == 'choice') {
        if (questionChoices !== null && questionChoices.length > 0) {
            var choices = [];
            for (var i = 1; i < questionChoices.length; i++) {
                var choice = questionChoices[i];
                choices.push(
                            {
                                id: i,
                                description: {
                                    "en-US": choice
                                }
                            }
                        );
            }
            //if (typeof console !== 'undefined') {
            //    console.log(qObj);
            //}
            qObj.definition.choices = choices;
        }
        qObj.definition.correctResponsesPattern = [
                        String(correctAnswer)
                    ];
    }
    else if (questionType == 'fill-in' || questionType == 'long-fill-in') {
        qObj.definition.correctResponsesPattern = [correctAnswer];
    }
    else if (questionType == 'true-false') {
        qObj.definition.correctResponsesPattern = [
                        String(ResponsesPattern)
                    ];
    }

    var NoofAttampt = parseInt(GetTinCanNoofAttampt());
    var extensions = {};
    extensions[Instancy_TCAPI.CourseActivity.id + "/NoofAttampt"] = NoofAttampt;

    return {
        verb: {
            id: "http://adlnet.gov/expapi/verbs/answered",
            display: {
                "en-US": "answered"
            }
        },
        object: qObj,
        timestamp: GetdatetoUTCString(),
        result: {
            response: learnerResponse,
            success: wasCorrect,
            extensions: extensions
        },
        context: Instancy_TCAPI.getContext(Instancy_TCAPI.CourseActivity.id)
    }







}



    function setTinCanBookmark() {
        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;
        tincan.setState("location", innerPage, function() { });  
        //TCDriver_SetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "location", innerPage);

    }

    function GetTinCanBookmark() {
        //(INST-2271)--Krishna B-- Added for XAPI offline tracking in native apps.
        if (fnGetQueryString("cid") != "")
            return GetNativeStateValue("location");           
        //if (tc_lrs === null || tc_lrs === undefined)        
        if (tincan.recordStores.length === 0)
            return;
        var stateResult = tincan.getState("location");
        //var stateResult = TCDriver_GetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "location");
        if (stateResult.err === null && stateResult.state !== null && stateResult.state.contents !== "")
            if (isNaN(Number(stateResult.state.contents)))
                return 0;
            else
                return Number(stateResult.state.contents);
        else
            return 0;
    }
    function setTinCanAssessmentData(assResult) {
        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;
        assResult = '{"data":"' + assResult + '"}';
        tincan.setState("Assessmentanswers", assResult, function() { });
        //TCDriver_SetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "Assessmentanswers", assResult);

    }

    function GetTinCanAssessmentData() {
        //(INST-2271)--Krishna B-- Added for XAPI offline tracking in native apps.
    if (fnGetQueryString("cid") != "") {
        var jQuesdata = GetNativeStateValue("Assessmentanswers");
        if (jQuesdata.indexOf("##@@##") != -1)
        {
            jQuesdata = ReplaceAll(jQuesdata, "##@@##", "@");
            jQuesdata = ReplaceAll(jQuesdata, "##^^##", "$");
        }
        if (jQuesdata.indexOf("{") == 0)
            return jQuery.parseJSON(jQuesdata).data;
        else
            return jQuesdata;        
    }
        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;
            
        var stateResult = tincan.getState("Assessmentanswers");
        //var stateResult = TCDriver_GetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "Assessmentanswers");
        if (stateResult.err === null && stateResult.state !== null && stateResult.state.contents !== "")
            return jQuery.parseJSON(stateResult.state.contents).data;
        else
            return "";

    }


    function setTinCanSuspendData(assResult) {
        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;
        assResult = '{"data":"' + assResult + '"}';
        //TCDriver_SetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "Assessmentanswers", assResult);
        tincan.setState("suspendData", assResult, function () { });
    }

    function GetTinCanSuspendData() {
        //(INST-2271)--Krishna B-- Added for XAPI offline tracking in native apps.
    if (fnGetQueryString("cid") != "") {
        var nativeStateRes = GetNativeStateValue("suspendData");
        if (nativeStateRes.indexOf('{"data":"') > -1)
            return jQuery.parseJSON(nativeStateRes).data;
        return nativeStateRes;
    }
    //if (tc_lrs === null || tc_lrs === undefined)
    if (tincan.recordStores.length === 0)
        return;
    //var stateResult = TCDriver_GetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "Assessmentanswers");
    var stateResult = tincan.getState("suspendData");
    //if (stateResult === null || stateResult === "")
    if (stateResult.err === null && stateResult.state !== null && stateResult.state.contents !== "")
        //return stateResult.state.contents;
        return jQuery.parseJSON(stateResult.state.contents).data;
    else
        return "";
}

    function setTinCanNoofAttampt(assResult) {
        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;

        tincan.setState("NoofAttampt", assResult, function() { });
        //TCDriver_SetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "NoofAttampt", assResult);

    }

    function GetTinCanNoofAttampt() {
        //(INST-2271)--Krishna B-- Added for XAPI offline tracking in native apps.
        if (fnGetQueryString("cid") != "")
            return GetNativeStateValue("NoofAttampt");
        //if (tc_lrs === null || tc_lrs === undefined)
        if (tincan.recordStores.length === 0)
            return;
        var stateResult = tincan.getState("NoofAttampt");
        //var stateResult = TCDriver_GetState(tc_lrs, Instancy_TCAPI.CourseActivity.id, "NoofAttampt");
        if (stateResult.err === null && stateResult.state !== null && stateResult.state.contents !== "")
            if (isNaN(Number(stateResult.state.contents)))
                return 0;
            else
                return Number(stateResult.state.contents);
        else
            return 0;
    }
    //(INST-2271)--Krishna B-- Added for XAPI offline tracking in native apps.
    function GetNativeStateValue(nativeSateId) {
        try {
            var retNativeValue = MobileJSInterface.XHR_GetStateWithStateKey("stateId=" + nativeSateId);
            //--IOS native -- Added for handling the undefined value from native app.
            if (retNativeValue == undefined || retNativeValue == "undefined")
                retNativeValue = "";
            return retNativeValue
        }
        catch (ex) {
            return "";
        }
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