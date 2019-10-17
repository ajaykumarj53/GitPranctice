//content object
var totNumOfPages = 0;
var numOfPagesToDisplay = 0;
var autoPoolGeneration;
var numOfEasyQuestions = 0;
var numOfMediumQuestions = 0;
var numOfHardQuestions = 0;
var pooledQuestionsString = "";
var pooledQuestionsStringArray = [];
var previousTotalpages = 0;
var pgNum = 0;
function initVariables(pgArr, itemNum) {
    totNumOfPages = getTotalNumberOfPages(pgArr);
    //console.log(totNumOfPages+"<0--------------------");
    numOfPagesToDisplay = parseInt((trackObjects[itemNum]).itemstodisplay);
    autoPoolGeneration = (trackObjects[itemNum]).autopoolgeneration;
    numOfEasyQuestions = parseInt((trackObjects[itemNum]).easyquestions);
    numOfMediumQuestions = parseInt((trackObjects[itemNum]).mediumquestions);
    numOfHardQuestions = parseInt((trackObjects[itemNum]).hardquestions);
    //pooledQuestionsString = "0,1,2,3,4";
    try {
        if (fnGetQueryString("cid") != "") {
            pooledQuestionsString = MobileJSInterface.LMSGetPooledQuestionNos();
        }
        else {
            pooledQuestionsString = LMSGetPooledQuestionNos();
        }
    } catch (e) {
        pooledQuestionsString = "";
    }
	if(pooledQuestionsString == "false" || pooledQuestionsString == "true"){
	    pooledQuestionsString = "";
	}
}

function setPooledQuestions(pagesArray, num) {
    initVariables(pagesArray, num);

    for (var k = 0; k < num; k++) {
        previousTotalpages += getTotalPageInObject(k);
    }

    if (numOfPagesToDisplay != totNumOfPages || trackObjects[SeqID].topicLevelPool == 'yes' || trackObjects[SeqID].topicLevelPoolWithDiff == 'yes') {
        if ((pooledQuestionsString == "" || pooledQuestionsString == null) || retakeClicked) {
            pagesArray = getPoolOfPages(pagesArray);
            try {
                if (fnGetQueryString("cid") != "") {
                    MobileJSInterface.LMSSetPooledQuestionNosWithStr(pooledQuestionsString);
                }
                else {
                    LMSSetPooledQuestionNos(pooledQuestionsString);
                }
            } catch (e) { }
        } else {
            pagesArray = getPagesAsPooledString(pooledQuestionsString, pagesArray);
        }
        pooledQuestionsStringArray[num] = pooledQuestionsString;
        pooledQuestionsString = "";
    }
	else{
		if(trackObjects[SeqID].topicLevelPool=='yes'){
			pagesArray = getPoolOfPages(pagesArray);
		}
	}

    //pages[num] = pagesArray;
    return pagesArray;
}


function checkForPoolGeneration() {
    //if (isTrack == "yes") {
        for (var i = 0; i < pages.length; i++) {
            var objType = trackObjects[i].type.toLowerCase();
            var singQtnPerPage = trackObjects[i].singleqtnperpage;
            if (singQtnPerPage == "yes") {
                if (objType == "assessment" || objType == "content object" || objType == "contentobject") {
                    var pagesArray = pages[i];
                    pagesArray = setPooledQuestions(pagesArray, i);
                    pages[i] = pagesArray;
                }
            }
			previousTotalpages = 0;
        }
        pgNum = 0;
    //}
    //return pagesArray;
}

function getPagesAsPooledString(pooledStr, pgsArray) {
    var pooledPgsArr = new Array();
    if (autoPoolGeneration != "true") {
        if (trackObjects[SeqID].topicLevelPoolWithDiff == 'yes') {
            // pooledPgsArr = getTotalPagesWithTopicPoolFilter(pgsArray);
            pooledPgsArr = regeneratePoolWithPoolstring(pgsArray, pooledStr);
        }
    else {
        var onlyPgsArray = getTotalPages(pgsArray);
        var pooledArr = pooledStr.split(",");
        var len = pooledArr.length;
        for (var i = 0; i < len; i++) {
            var pgNum = pooledArr[i];
            var matchedObj = getSpecificObjects(onlyPgsArray, "pageNumber", pgNum);
            pooledPgsArr.push(matchedObj[0]);
        }
    }
    } else {
        var origPageArr = new Array();
        var summaryPage = "";
        origPageArr = pgsArray;
        if ((origPageArr[origPageArr.length - 1]).type == "summary" || (origPageArr[origPageArr.length - 1]).type == "Summary") {
            summaryPage = origPageArr.splice((origPageArr.length - 1), 1)[0];
        }
        if (trackObjects[SeqID].topicLevelPool == 'yes')
        {
            // origPageArr = getAutoPooledArrayWithTopicLevelFilter(origPageArr, numOfPagesToDisplay);
            origPageArr = regeneratePoolWithPoolstring(pgsArray, pooledStr);

        }
        else
            origPageArr = getAutoPooledArray(origPageArr, numOfPagesToDisplay);
        if (summaryPage != "") {
            origPageArr.push(summaryPage);
        }
        pooledPgsArr = origPageArr;
    }
    //console.log(pooledPgsArr+"________________________");
    return pooledPgsArr;
}
function getPoolOfPages(pgsArray) {
    var pooledArray = [];
    if (autoPoolGeneration != "true") {
       if(trackObjects[SeqID].topicLevelPoolWithDiff=='yes')
		   var pooledArray = generatePool(pgsArray);
	   else
	   {
	       var onlyPgsArray = getTotalPages(pgsArray);
           pooledArray = generatePool(onlyPgsArray);
		   }
    } else {
        pooledArray = generatePool(pgsArray);
    }
    pooledQuestionsString = getPooledArrayString(pooledArray);
    return pooledArray;
}

function generatePool(pgArr) {
    var arr = [];
    var summaryPage = "";
    var origPageArr = new Array();
    origPageArr = pgArr;
    if ((origPageArr[origPageArr.length - 1]).type == "summary" || (origPageArr[origPageArr.length - 1]).type == "Summary") {
        summaryPage = origPageArr.splice((origPageArr.length - 1), 1)[0];
    }
    var pagesPooled = 0;
    if (autoPoolGeneration == "true") {
        if (trackObjects[SeqID].topicLevelPool=='yes')
            arr = getAutoPooledArrayWithTopicLevelFilter(origPageArr, numOfPagesToDisplay);
        else
            arr = getAutoPooledArray(origPageArr, numOfPagesToDisplay);
    } else {
		if (trackObjects[SeqID].topicLevelPoolWithDiff=='yes')
            arr = getTotalPagesWithTopicPoolFilter(origPageArr);
        else
        arr = getSpecificPooledArray(origPageArr);
    }
    if (summaryPage != "") {
        arr.push(summaryPage);
    }
    return arr;
}

function getAutoPooledArray(pageArr, numOfQues) {
    var arr = new Array();
    var origPageArr = new Array();
    origPageArr = pageArr.slice(0);
	var cnt = 0;
	var len = pageArr.length;    
	if(previousTotalpages > 0){
	  numOfQues = numOfQues + previousTotalpages + 1;
	}
    for (var i=origPageArr.length-1; i>=0; i--) {       
		var obj = origPageArr[i];
	    if(parseInt(obj.pageNumber) > (numOfQues-1)){
		     origPageArr.splice(i, 1);
		}else if(obj.type == "topic"){		   
		   var topicPages = obj.pages;
		   var topicLen = topicPages.length;
			for(j=topicPages.length-1; j>=0; j--){
				var topicObj = topicPages[j];
				if(parseInt(topicObj.pageNumber) > (numOfQues-1)){
					 topicPages.splice(j, 1);
				}else if(topicObj.type == "topic"){	
					var subTopicPages = topicObj.pages;
					var subTopicLen = subTopicPages.length;
					for(k=subTopicPages.length-1; k>=0; k--){
						var subTopicObj = subTopicPages[k];
						if(parseInt(subTopicObj.pageNumber) > (numOfQues-1)){
						   subTopicPages.splice(k, 1);
						}
					}						  				    
				}
			}
		}
    }
    return origPageArr;
}
function getPooledArray(pageArr, numOfQues) {
    var arr = new Array();
    var origPageArr = new Array();
    origPageArr = pageArr;
    for (var i = 0; i < numOfQues; i++) {
        var pos = Math.floor((origPageArr.length - 1) * Math.random());
        var obj = origPageArr.splice(pos, 1);
        //pageArr.splice(pos,1);
        arr.push(obj[0]);
    }
    return arr;
}

function getSpecificPooledArray(pageArr) {
    var pooledQuesArray = new Array();
    var easyQuesArr = getSpecificObjects(pageArr, "difficulty", "easy");
    var mediumQuesArr = getSpecificObjects(pageArr, "difficulty", "medium");
    var hardQuesArr = getSpecificObjects(pageArr, "difficulty", "hard");

    var pooledEasyQuesArr = new Array();
    var pooledMediumQuesArr = new Array();
    var pooledHardQuesArr = new Array();
    //var numOfEasyQuestions = 0;
    //var numOfMediumQuestions = 0;
    //var numOfHardQuestions = 0;
    //if(easyQuesArr.length){
    if (easyQuesArr.length <= numOfEasyQuestions) {
        pooledEasyQuesArr = easyQuesArr;
        easyQuesArr = [];
    } else {
        pooledEasyQuesArr = getPooledArray(easyQuesArr, numOfEasyQuestions);
    }
    //}
    if (mediumQuesArr.length <= numOfMediumQuestions) {
        pooledMediumQuesArr = mediumQuesArr;
        mediumQuesArr = [];
    } else {
        pooledMediumQuesArr = getPooledArray(mediumQuesArr, numOfMediumQuestions);
    }
    if (hardQuesArr.length <= numOfHardQuestions) {
        pooledHardQuesArr = hardQuesArr;
        hardQuesArr = [];
    } else {
        pooledHardQuesArr = getPooledArray(hardQuesArr, numOfHardQuestions);
    }
    pooledQuesArray = pooledEasyQuesArr.concat(pooledMediumQuesArr, pooledHardQuesArr);

    //console.log(pooledQuesArray);

    if (pooledQuesArray.length < numOfPagesToDisplay) {
        var remainingQuesArr = easyQuesArr.concat(mediumQuesArr, hardQuesArr);
        var remainingNumOfQues = numOfPagesToDisplay - (pooledQuesArray.length);
        var remainingPooledQuesArr = getPoolFromRemainingQuestions(remainingQuesArr, remainingNumOfQues);
        pooledQuesArray = pooledQuesArray.concat(remainingPooledQuesArr);
    }
    pooledQuesArray = pooledQuesArray.sortBy("pageNumber");
    //console.log("sorted:"+pooledQuesArray);
    //console.log(mediumQuesArr);
    //console.log(hardQuesArr);
    return pooledQuesArray;
}


function getPoolFromRemainingQuestions(arr, numOfRemainingQues) {
    var finalRemainingPoolArr = new Array();
    
    var remEasyQuesArr = new Array();
    var remMediumQuesArr = new Array();
    var remHardQuesArr = new Array();

    var remPooledEasyQuesArr = new Array();
    var remPooledMediumQuesArr = new Array();
    var remPooledHardQuesArr = new Array();

    remEasyQuesArr = getSpecificObjects(arr, "difficulty", "easy");
    if (remEasyQuesArr.length <= numOfRemainingQues) {
        remPooledEasyQuesArr = remEasyQuesArr;
        numOfRemainingQues = numOfRemainingQues - remEasyQuesArr.length;
    } else {
        remPooledEasyQuesArr = getPooledArray(remEasyQuesArr, numOfRemainingQues);
        numOfRemainingQues = numOfRemainingQues - remPooledEasyQuesArr.length;
    }
    if (numOfRemainingQues > 0) {
        remMediumQuesArr = getSpecificObjects(arr, "difficulty", "medium");
        if (remMediumQuesArr.length <= numOfRemainingQues) {
            remPooledMediumQuesArr = remMediumQuesArr;
            numOfRemainingQues = numOfRemainingQues - remMediumQuesArr.length;
        } else {
            remPooledMediumQuesArr = getPooledArray(remMediumQuesArr, numOfRemainingQues);
            numOfRemainingQues = numOfRemainingQues - remPooledMediumQuesArr.length;
        }
    }
    if (numOfRemainingQues > 0) {
        remHardQuesArr = getSpecificObjects(arr, "difficulty", "hard");
        if (remHardQuesArr.length <= numOfRemainingQues) {
            remPooledHardQuesArr = remHardQuesArr;
            numOfRemainingQues = numOfRemainingQues - remHardQuesArr.length;
        } else {
            remPooledHardQuesArr = getPooledArray(remHardQuesArr, numOfRemainingQues);
            numOfRemainingQues = numOfRemainingQues - remPooledHardQuesArr.length;
        }
    }
    if (remPooledMediumQuesArr.length > 0 && remPooledHardQuesArr.length > 0) {
        finalRemainingPoolArr = remPooledEasyQuesArr.concat(remPooledMediumQuesArr, remPooledHardQuesArr);
    } else if (remPooledMediumQuesArr.length > 0) {
        finalRemainingPoolArr = remPooledEasyQuesArr.concat(remPooledMediumQuesArr);
    } else {
        finalRemainingPoolArr = remPooledEasyQuesArr;
    }

    return finalRemainingPoolArr;
}

function getSpecificObjects(fromArr, attr, value) {
    var matches = $.grep(fromArr, function (e) { return e[attr] == value });
    return matches;
}

function getTotalNumberOfPages(arr) {
    var totNum = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element.type == "topic" && element.pages.length > 0) {
            var subPageArr = element.pages;
            for (var j = 0; j < subPageArr.length; j++) {
                var subElement = subPageArr[j];
                if (subElement.type == "topic" && subElement.pages.length > 0) {
                    totNum = totNum + subElement.pages.length;
                } else {
                    totNum++;
                }
            }
        } else {
            if ((element.type).toLowerCase() != "summary") {
                totNum++;
            }
        }
    }
    return totNum;
}

function getPooledArrayString(arr) {
    var str = "";    
	var pagsArr = arr;
	if (autoPoolGeneration == "true"||trackObjects[SeqID].topicLevelPoolWithDiff == 'yes') {
	   pagsArr = getTotalPages(pagsArr);
	}
	var len = pagsArr.length;
    for (var i = 0; i < len; i++) {
        var separator = (i == 0) ? "" : ",";
        str = str + separator + pagsArr[i].pageNumber;
    }
    return str;
}
function saveBeforePoolActualPageNums(arr){
    var pgsArr = arr;
    var pgsLength = pgsArr.length;	
	for(var i=0; i<pgsLength; i++){
	    var obj = pgsArr[i];
	    if(obj.type != "topic"){
	      obj.origPageNumBeforePool = obj.pageNumber;
          obj.pageNumber = pgNum;
          pgNum ++;
	    }else{
		    var topicPgsArr =  obj.pages;
		    var topicPgsLength = topicPgsArr.length;
			for(var j=0; j<topicPgsLength; j++){
			    var topicObj = topicPgsArr[j];
			    if(topicObj.type != "topic"){
			      topicObj.origPageNumBeforePool = topicObj.pageNumber;
		          topicObj.pageNumber = pgNum;
				  pgNum ++;
			    }else{
				    var subTopicPgsArr = topicObj.pages;
				    var subTopicPagesLength = subTopicPgsArr.length;
					for(var k=0; k<subTopicPagesLength; k++){
					  var subTopicObj = subTopicPgsArr[k];
					  subTopicObj.origPageNumBeforePool = subTopicObj.pageNumber;
					  subTopicObj.pageNumber = pgNum;
				      pgNum ++;
		              subTopicPgsArr[k] = subTopicObj;					
					}				
				}
                topicPgsArr[j] = topicObj;				
			}		
		}
        pgsArr[i] = obj;	
	}
	return pgsArr;
}
Array.prototype.sortBy = function (p) {
    return this.slice(0).sort(function (a, b) {
        return (Number(a[p]) > Number(b[p])) ? 1 : (Number(a[p]) < Number(b[p])) ? -1 : 0;
    });
}
function getAutoPooledArrayWithTopicLevelFilter(pageArr, numOfQues) {
    var origPageArr = new Array();
    origPageArr = pageArr.slice(0);
    var len = pageArr.length;
    for (var i = origPageArr.length - 1; i >= 0; i--) {
        var obj = origPageArr[i];
         if (obj.type == "topic") {
             var topicPages = obj.pages;
             topicPages = getTotalPages(obj.pages);
			if(trackObjects[SeqID].questionrandomization == "yes")
			topicPages=shuffleArray(topicPages)
            var topicLen = topicPages.length;
            for (j = topicPages.length - 1; j >= 0; j--) {
                var topicObj = topicPages[j];				
                if (parseInt(topicPages.length) > (parseInt(obj.numOfPooledQuesinTopic))) {
                    topicPages.splice(j, 1);
                }
                if (topicPages.length>=1) {
                    obj.pages = topicPages
                }
                else {
                    origPageArr.splice(i,1);
                }
               // obj.pages = topicPages
                //else if (topicObj.type == "topic") {
                //    var subTopicPages = topicObj.pages;
				//		if(trackObjects[SeqID].questionrandomization == "yes")
			    //        subTopicPages=shuffleArray(subTopicPages)
                //    var subTopicLen = subTopicPages.length;
                //    for (k = subTopicPages.length - 1; k >= 0; k--) {
                //        var subTopicObj = subTopicPages[k];
                //        if (parseInt(subTopicObj.pageNumber) > (numOfQues - 1)) {
                //            subTopicPages.splice(k, 1);
                //        }
                //    }
                //}
            }
         }
         else {
             //origPageArr.splice(i, 1);
         }
    }
    return origPageArr;
}
function getTotalPagesWithTopicPoolFilter(pageArr)
{     
var temparray=new Array()
       $(pageArr).each(function (i){
		   if(this.type=='topic')
		   {
			    topicArray=this;
			    planeTopicArray=getTotalPages(topicArray.pages);
			    var easyQuesInTopic = getSpecificObjects(planeTopicArray, "difficulty", "easy")
			    var mediumQuesInTopic = getSpecificObjects(planeTopicArray, "difficulty", "medium");
			    var hardQuesInTopic = getSpecificObjects(planeTopicArray, "difficulty", "hard");
				    var pooledEasyQuesArr = new Array();
                    var pooledMediumQuesArr = new Array();
                    var pooledHardQuesArr = new Array();
    if (easyQuesInTopic.length <= 0) {
        pooledEasyQuesArr = easyQuesInTopic;
        easyQuesInTopic = [];
    } else {
        if (trackObjects[SeqID].questionrandomization == "yes") {
            easyQuesInTopic= shuffleArray(easyQuesInTopic)
        }
        pooledEasyQuesArr = getPooledArray(easyQuesInTopic, this.numOfEasyPoolQuesInTopic);
    }
    if (mediumQuesInTopic.length <= 0) {
        pooledMediumQuesArr = mediumQuesInTopic;
        mediumQuesInTopic = [];
    } else {
        if (trackObjects[SeqID].questionrandomization == "yes") {
            mediumQuesInTopic = shuffleArray(mediumQuesInTopic)
        }
        pooledMediumQuesArr = getPooledArray(mediumQuesInTopic, this.numOfMediumPoolQuesInTopic);
    }
    if (hardQuesInTopic.length <= 0) {
        pooledHardQuesArr = hardQuesInTopic;
        hardQuesInTopic = [];
    } else {
        if (trackObjects[SeqID].questionrandomization == "yes") {
           hardQuesInTopic = shuffleArray(hardQuesInTopic)
        }
        pooledHardQuesArr = getPooledArray(hardQuesInTopic, this.numOfHardPoolQuesInTopic);
    }
				var tempObj=new Array()
				$(pooledEasyQuesArr).each(function(i){
					tempObj.push(this)
				});
				$(pooledMediumQuesArr).each(function(i){
					tempObj.push(this)
				});
				$(pooledHardQuesArr).each(function(i){
					tempObj.push(this)
				});
				if (tempObj.length>=1) {
				    this.pages = tempObj;
				    temparray.push(this)
				}
			   
		   }
		   else{
			   temparray.push(this)
		   }
	   })
	   return temparray;
}
function regeneratePoolWithPoolstring(pageArr, poolstr) {
    var poolstrarray = poolstr.split(',');
    var origPageArr = new Array();
    origPageArr = pageArr.slice(0);
    var len = pageArr.length;
    for (var i = origPageArr.length - 1; i >= 0; i--) {
        var obj = origPageArr[i];
        if (obj.type == "topic") {
            var topicPages = obj.pages;
            topicPages = getTotalPages(obj.pages);
            var topicLen = topicPages.length;
            for (j = topicPages.length - 1; j >= 0; j--) {
                var topicObj = topicPages[j];
                if (($.inArray(topicObj.pageNumber, poolstrarray)) == -1 || ($.inArray(topicObj.pageNumber, poolstrarray)) == '-1') {
                    topicPages.splice(j, 1);
                }
                if (topicPages.length >= 1) {
                    obj.pages = topicPages
                }
                else {
                    origPageArr.splice(i, 1);
                }
                //else if (topicObj.type == "topic") {
                //    var subTopicPages = topicObj.pages;
                //    var subTopicLen = subTopicPages.length;
                //    for (k = subTopicPages.length - 1; k >= 0; k--) {
                //        var subTopicObj = subTopicPages[k];
                //        if (($.inArray(topicObj.pageNumber, poolstrarray)) == -1 || ($.inArray(topicObj.pageNumber, poolstrarray)) == '-1') {
                //            subTopicPages.splice(k, 1);
                //        }
                //    }
                //}
            }
        }
    }
    return origPageArr;
}
function setTopicPageNumbers() {
    debugger;
    for (var i = 0; i < pages.length; i++) {
        $(pages[i]).each(function (i) {
            if (this.type == "topic") {
                this.pageNumber = this.pages[0].pageNumber
            }
        });
    }

}