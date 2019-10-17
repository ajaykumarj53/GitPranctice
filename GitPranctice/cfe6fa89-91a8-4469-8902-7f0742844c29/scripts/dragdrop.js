/*/////////////////*/
/*/////////////////*/
//contentobject
// Author : Raghava.K
// Created : 05-Sep-2011
// MOdified :20-Sep-2011
// Version : Version-1.4

/*/////////////////*/
var multipleDND = false;
var answerArray = new Array();
var userAnswerArray = new Array();
var flagArray = new Array();
var $currentDragObj;
var $currentDropObj;
var $currentDragId;
var $currentDropId;
var correctCounter = 0;
var maxDrops = 0;
var userDropped = 0;
var isDropped = false;
var tempId;
var isSubmit = false;
var dragLength = 0;
var dropLength = 0;
var dragArray = new Array();
var dropArray = new Array();
var getDragsDroppedArr = [];
var prsntid;
var alredyAppended=false;
// for Multi drag purpose
var clone = "";
var currentSelectedObj;
var draggedOverTarget=true;
////////////////////////
///////////////// Mobile Vars
var mobil_currentDpObj;
var mobil_tempSelectedArr = new Array();
var mobileDND = false;
var mobileDragsArray = new Array();
//--------------------------------------------------------------------------------------------------
//****** FOR TOUCH FUNCTIONS....................................
(function ($) {
    // Detect touch support
    $.support.touch = 'ontouchend' in document;
    // Ignore browsers without touch support
    if (!$.support.touch) {
        return;
    }
    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        touchHandled;

    function simulateMouseEvent(event, simulatedType) { //use this function to simulate mouse event
        // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
            return;
        }
        event.preventDefault(); //use this to prevent scrolling during ui use

        var touch = event.originalEvent.changedTouches[0],
            simulatedEvent = document.createEvent('MouseEvents');
        // Initialize the simulated mouse event using the touch event's coordinates
        simulatedEvent.initMouseEvent(
            simulatedType,    // type
            true,             // bubbles                    
            true,             // cancelable                 
            window,           // view                       
            1,                // detail                     
            touch.screenX,    // screenX                    
            touch.screenY,    // screenY                    
            touch.clientX,    // clientX                    
            touch.clientY,    // clientY                    
            false,            // ctrlKey                    
            false,            // altKey                     
            false,            // shiftKey                   
            false,            // metaKey                    
            0,                // button                     
            null              // relatedTarget              
            );

        // Dispatch the simulated event to the target element
        event.target.dispatchEvent(simulatedEvent);
    }
    mouseProto._touchStart = function (event) {
        var self = this;
        // Ignore the event if another widget is already being handled
        if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
            return;
        }
        // Set the flag to prevent other widgets from inheriting the touch event
        touchHandled = true;
        // Track movement to determine if interaction was a click
        self._touchMoved = false;
        // Simulate the mouseover event
        simulateMouseEvent(event, 'mouseover');
        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');
        // Simulate the mousedown event
        simulateMouseEvent(event, 'mousedown');
    };

    mouseProto._touchMove = function (event) {
        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }
        // Interaction was not a click
        this._touchMoved = true;
        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');
    };
    mouseProto._touchEnd = function (event) {
        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }
        // Simulate the mouseup event
        simulateMouseEvent(event, 'mouseup');
        // Simulate the mouseout event
        simulateMouseEvent(event, 'mouseout');
        // If the touch interaction did not move, it should trigger a click
        if (!this._touchMoved) {
            // Simulate the click event
            simulateMouseEvent(event, 'click');
        }
        // Unset the flag to allow other widgets to inherit the touch event
        touchHandled = false;
    };
    mouseProto._mouseInit = function () {
        var self = this;
        // Delegate the touch handlers to the widget's element
        self.element
            .on('touchstart', $.proxy(self, '_touchStart'))
            .on('touchmove', $.proxy(self, '_touchMove'))
            .on('touchend', $.proxy(self, '_touchEnd'));

        // Call the original $.ui.mouse init method
        _mouseInit.call(self);
    };
})(jQuery);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------------------------------------------------

function init(forThePage) {
userAnswerArray = new Array();
mobileDragsArray = [];
	if(screenWidth<=630){
showMobileRendering();
$("div#dragdropcontainer" + forThePage + " .drag").hide();
mobileDND = true;
var popObj = document.getElementById("mobileDragsPopup");
if(popObj == null || popObj == "null")
$('.footer').append("<tr><td><div id='mobileDragsPopup' title='Available drag objects'></div></td></tr>");
$('#mobileDragsPopup').longpress(function(e) {
if($(e.target).attr('id') == undefined)
{    if(!alredyAppended)
	 appendSelectedDrops();
}
});
}
else{
mobileDND = false;
$("div#dragdropcontainer" + forThePage + " .drag").show();
}
	
	//var prsntdividnum = Number($("[id^=dragdropcontainer]:last").attr('ddid'));
	multipleDND = chkInteractionType(forThePage);
	clone = ChkMultiDragsSinlepage(eval("correctAnswer" + forThePage));
	$('div#dragdropcontainer' + forThePage + ' .drag').each(function (index) {
        initVal($(this), 'dragId', index + 1);
		 initVal($(this), 'chkVal', index);
		 initVal($(this), 'isDropped', false);
		 initVal($(this), 'droppedIn', "");
		 initVal($(this), 'xx', $(this).css('left'));
         initVal($(this), 'yy', $(this).css('top'));
         $(this).attr("clones", 0);
         $(this).attr("isclone", clone);
         $(this).attr("ismultipleDND", multipleDND);
         initDrags($(this), forThePage);
    });

	$('div#dragdropcontainer' + forThePage + ' .drop').each(function (index) {
        initVal($(this), 'dropId', index);
		initVal($(this), 'isDropped', false);
		 initVal($(this), 'dragObjectsArr', [])
		 initDrops($(this), forThePage);

    });

}

function initDrags($element,qtnID){
        var zIndex = 2;
        $element.draggable({
		 helper: clone,
		 cursor: 'move',
            start: function () {
                if ($currentDropObj != undefined) {
                    $($currentDropObj).css({ 'overflow': 'hidden' });
                    var setTimer = setTimeout(resetOverflow, 1000);
					
                }
            },
            drag: function(event, ui) {
                $element.draggable({ revert: true });
                $element.draggable({ cursor: 'move' });
                $element.draggable({ containment: "#dragdropcontainer" + qtnID, scroll: false });
                $(this).css('z-index', zIndex++);
                currentSelectedObj = $(this);
                prsntid = qtnID;
                if ($(currentSelectedObj).attr('isclone') != undefined) {
                    clone = $(currentSelectedObj).attr('isclone');
                }
				if(clone == "")
                $currentDragObj = $(this);
				else
				    $currentDragObj = $(this).clone();
				draggedOverTarget = true;
            },
            stop: function () {
                if ($currentDropObj != undefined) {
                    $($currentDropObj).css({ 'overflow': 'hidden' });
                    var setTimer = setTimeout(resetOverflow, 1000);
                }
            }
        });
		}
		
function initDrops($element, forThePage) {

		    $('div#dragdropcontainer' + forThePage + ' .drop').droppable({

            tolerance: 'pointer',
            // Other options for tolerance - fit,touch,intersect,sortable.
            over: function() {

            },
            out: function () {
                
            },
            drop: function (event, ui) {
            prsntid = $($(this).parent()).attr("ddid");
            draggedOverTarget = false;
            $currentDropObj = $(this);
            clone = $($currentDragObj).attr("isclone");
            multipleDND = $($currentDragObj).attr("ismultipleDND");
			if(clone == "clone"){
			setDifferentIdForDragObj($currentDragObj);
			//handleDropEvent(event, ui);
			}
			//$(this).css({'height':'auto'}); - For Auto Expand
			//$(this).css({'overflow':'auto'}); - For Scrolls
			 //$(".drag").draggable({ revert: 'invalid' });
            $currentDropId = $currentDropObj.attr('id');
            $currentDragId = $currentDragObj.attr('id');
			if(dropIfCorrect($currentDragObj,$currentDropObj) == true){
			chkRevertType($($currentDragObj),$(this));
			
			}
			}
        });
		    $('div#dragdropcontainer' + forThePage).droppable({
		   drop: function(event, ui) {
		       accept: 'div#dragdropcontainer' + forThePage + ' .drag'
		       prsntid = $(this).attr("ddid");
		       if (draggedOverTarget)
		       chkDragSnapBack($currentDragObj,event,$(this));
		   
		   }
		  });
   
	}

	function initCloneDrags($element){
        var zIndex = 2;
        $element.draggable({
		 cursor: 'move',
            start: function () {
                if ($currentDropObj != undefined) {
                    $($currentDropObj).css({ 'overflow': 'hidden' });
                    var setTimer = setTimeout(resetOverflow, 1000);
					
                }
            },
            drag: function(event, ui) {
                $element.draggable({ revert: true });
                $element.draggable({ cursor: 'move' });
                $element.draggable({ containment: "#optionsContainer", scroll: false });
                $(this).css('z-index', zIndex++);
				currentSelectedObj = $(this);
                $currentDragObj = $(this);
            },
            stop: function () {
		//	$($currentDragObj).removeClass("ui-draggable-dragging");
                if ($currentDropObj != undefined) {
                    $($currentDropObj).css({ 'overflow': 'hidden' });
                    var setTimer = setTimeout(resetOverflow, 1000);
                }
            }
        });
		}
function handleDropEvent(event, ui) {
        //i++;
        element = ui.helper.attr('id');
        var offsetXPos = parseInt(ui.offset.left);
        var offsetYPos = parseInt(ui.offset.top);
       // alert('Drag Stopped!\n\nOffset:(' + offsetXPos + "'" + offsetYPos + ')\n' + element);
       // $("#"+element).find('#droppable').remove();
        $("#"+element).draggable({
            containment: '#droppable',
            cursor: 'move',
            snap: '.drop',
			revert: 'valid',
            stop: function (event, ui) {
               // alert(element);
            }
        });
    }

function setDifferentIdForDragObj(obj){
// If clone is available, change the Object Drag ID and update number of copies attribute for main Object
var dragId = $(obj).attr("id")
//alert("Drag Id :"+dragId)
var numOfCopies = parseFloat($(obj).attr("clones"));
numOfCopies = numOfCopies+1
//alert("Copies :"+numOfCopies);
var newDragId = "clone_"+numOfCopies+"_"+dragId;
//// New Clone Drag Id Naming Convension: Clone_ + Number of copies + Parent Drag Id
if($(obj).attr("id").indexOf("clone_") == -1){
$(obj).attr("id",newDragId);
$(obj).removeAttr("draggable")
$(obj).removeClass("ui-draggable")
if (trackObjects[SeqID].singleqtnperpage == "no") {
    initCloneDragsinSinglepage(obj);
}
else
    initCloneDrags(obj);
		
$("#"+dragId).attr("clones",numOfCopies);
}
}
function resetOverflow(forTheDrop) {
    if (forTheDrop != undefined) {
        $(forTheDrop).css({ 'overflow-x': 'hidden' });
        $(forTheDrop).css({ 'overflow-y': 'auto' });
    } else {
        if ($currentDropObj != undefined || $currentDropObj != "" || $currentDropObj != null) {
            $($currentDropObj).css({ 'overflow-x': 'hidden' });
            $($currentDropObj).css({ 'overflow-y': 'auto' });
        }
    }

}

function dropIfCorrect(dgObj,dpObj){
var dpId;
var dgId;
	if(checkforsnapBkWhenIncorrect()){
	return true;
	}
	else{
	dpId = $(dpObj).attr('id').split("_")[1];
	//if(clone != "clone")
	dgId = $(dgObj).attr('id');
	//else
	//dgId = $(dgObj).attr('id').split("_")[2];
	//alert("dgId :"+dgId+" -- dpId :"+dpId);
	//alert(answerArray[dpId]);
	var rtnValue = compareArray(eval('answerArray' + prsntid)[dpId], dgId.split('_')[Number(dgId.split('_').length)-1]);
	return rtnValue;
	}
}

function compareArray(arr,val){
var rtnVal = false;
for(var i=0;i<arr.length;i++){
if(arr[i] == val){
rtnVal = true;
break;
}
else{
rtnVal = false;
}
}
return rtnVal;
}
function updateUserAnsArr(){
userAnswerArray = [];
getDragsDroppedArr = [];
$('[id^="drop'+prsntid+'_"]').each(function(index) {
userAnswerArray[index] = [];
if($(this).children().length>0){
getDragsDroppedArr.push($(this).attr('id'));
$(this).children().each(function (intz) {
    if ($(this).attr('isclone') != undefined) {
        clone = $(this).attr('isclone');
    }

if(clone == "clone" && !mobileDND){
var splitVal = $(this).attr('id').split("_")[3];
userAnswerArray[index].push(parseFloat(splitVal));
}else{
    userAnswerArray[index].push(parseFloat($(this).attr('id').split("_")[1]));
}
});
}
userAnswerArray[index].sort(function(a,b){return a-b});
});
    if(mobileDND == true && userAnswerArray.length > 0){
	  mobileDragsArray = [];
	  mobileDragsArray = userAnswerArray;
	}
}

function isDnDAttempted() {
    var attempted = false;
    for (var i = 0; i < userAnswerArray.length; i++) {
        if (userAnswerArray[i].length > 0) {
            attempted = true
        }
    }
    return attempted;
}
function chkRevertType(dgObj, dpObj) {
	if(multipleDND == true || multipleDND == "true"){
	if(clone == "clone"){
	//alert($(dgObj).attr("id"));
	    var notDragMatched = checkIfSameDragObjectIsDropped(dgObj,dpObj);
		if(notDragMatched == true){
		appendToDrop(dgObj,dpObj,"");
	 $(".drag").draggable({ revert: 'invalid' });
		}
	}
	else{
	appendToDrop(dgObj,dpObj,"");
	 $(".drag").draggable({ revert: 'invalid' });
	 }
	}
	else{
	    if (checkforswapDroppedDragPos()) {
		if($(dpObj).data('isDropped') == false){
		    if (clone != "clone") {
		        if ($(dgObj).data('isDropped') == false) {
		appendToDrop(dgObj,dpObj,"");
		$(dpObj).data('isDropped',true);
		$(dgObj).data('isDropped',true);
		$(dgObj).data('droppedIn',$(dpObj).attr('id'));
		 $(".drag").draggable({ revert: 'invalid' });
		}
		else{
		chkDropLength(dgObj,dpObj);
		appendToDrop(dgObj,dpObj,"");
		$(dpObj).data('isDropped',true);
		$(dgObj).data('isDropped',true);
		$(dgObj).data('droppedIn',$(dpObj).attr('id'));
		 $(".drag").draggable({ revert: 'invalid' });
		}
		}
		else{
		var cloneId = $(dgObj).attr("id");
		var dragId = cloneId.split("_")[2];
		if($("#"+dragId).data('isDropped') == false){
		appendToDrop(dgObj,dpObj,"");
		$(dpObj).data('isDropped',true);
		$("#"+dragId).data('isDropped',true);
		$("#"+dragId).data('droppedIn',$(dpObj).attr('id'));
		 $(".drag").draggable({ revert: 'invalid' });
		}
		else{
		chkDropLength(dgObj,dpObj);
		appendToDrop(dgObj,dpObj,"");
		$(dpObj).data('isDropped',true);
		$("#"+dragId).data('isDropped',true);
		$("#"+dragId).data('droppedIn',$(dpObj).attr('id'));
		 $(".drag").draggable({ revert: 'invalid' });
		}
		}
		}
		else{
if($(dgObj).data('isDropped') == true && $(dpObj).attr('id')!= $(dgObj).data('droppedIn') && $(dpObj).data('isDropped') == false){
		appendToDrop(dgObj,dpObj,"");
		$(dpObj).data('isDropped',true);
		$(dgObj).data('isDropped',true);
		$(dgObj).data('isDropped',true);
		var prevDp = $(dgObj).data('droppedIn');
		$("#"+prevDp).data('isDropped',false);
		$(dgObj).data('droppedIn',$(dpObj).attr('id'));
		$(".drag").draggable({ revert: 'invalid' });
		}
		else{
		
		}
		var aa = false;
		if(aa){
		$(dgObj).appendTo($("#optionsContainer"));
		$(dgObj).draggable({ revert: 'valid'});
		$(dgObj).css({'position':'absolute'});
		}
		}
	}
	else{
 if(clone != "clone"){
	if($(dpObj).data('isDropped') == false){
		if($(dgObj).data('isDropped') == false){
		appendToDrop(dgObj,dpObj,"");
		$(dpObj).data('isDropped',true);
		$(dgObj).data('isDropped',true);
		$(dgObj).data('droppedIn',$(dpObj).attr('id'));
		 $(dgObj).draggable({ revert: 'invalid' });
		}
			else{
			var prev = $(dgObj).data('droppedIn');
			$("#"+prev).data('isDropped',false);
			appendToDrop(dgObj,dpObj,"");
			$(dpObj).data('isDropped',true);
			$(dgObj).data('isDropped',true);
			$(dgObj).data('droppedIn',$(dpObj).attr('id'));
			 $(dgObj).draggable({ revert: 'invalid' });
			}
			}
			else{
			
				var alreadyInn = $(dpObj).children().attr('id');
				$("#"+alreadyInn).data('isDropped',false);
				$("#"+alreadyInn).data('droppedIn',"");
				$("#"+alreadyInn).css({'position':'absolute'});
				$("#"+alreadyInn).appendTo($("#optionsContainer"));
				$("#"+alreadyInn).css({'left':$("#"+alreadyInn).data('xx')});
				$("#"+alreadyInn).css({'top':$("#"+alreadyInn).data('yy')});
				$("#"+alreadyInn).draggable({ disabled: false });
				//$("#"+alreadyInn).draggable({ revert: 'valid' });
				appendToDrop(dgObj,dpObj,"");
				$(dpObj).data('isDropped',true);
				$(dgObj).data('isDropped',true);
				$(dgObj).data('droppedIn',$(dpObj).attr('id'));
				$(dgObj).draggable({ revert: 'invalid' });
				}
				}
				else{
				if($(dpObj).data('isDropped') == false){
				var cloneId = $(dgObj).attr("id");
				var dragId = cloneId.split("_")[2];
				if($("#"+dragId).data('isDropped') == false){
				appendToDrop(dgObj,dpObj,"");
		        $(dpObj).data('isDropped',true);
		        $("#"+dragId).data('isDropped',true);
		        $("#"+dragId).data('droppedIn',$(dpObj).attr('id'));
		        $(dgObj).draggable({ revert: 'invalid' });
				}
				else{
				var prev = $("#"+dragId).data('droppedIn');
			    $("#"+prev).data('isDropped',false);
				chkDropLength(dgObj,dpObj)
			    appendToDrop(dgObj,dpObj,"");
			    $(dpObj).data('isDropped',true);
			    $(dgObj).data('isDropped',true);
			    $(dgObj).data('droppedIn',$(dpObj).attr('id'));
			    $(dgObj).draggable({ revert: 'invalid' });
				}
				}
				else{
				var alreadyInn = $(dpObj).children().attr('id');
				var dragId =   alreadyInn.split("_")[2];
				$("#"+dragId).data("droppedIn","");
				$("#"+dragId).data("isDropped ",false);
				var noOfClones = parseFloat($("#"+dragId).attr("clones"));
				if(noOfClones > 0)
				noOfClones = noOfClones-1;
				else
				noOfClones =0;
				$("#"+dragId).attr("clones",noOfClones);
				$("#"+alreadyInn).remove();
				/*alreadyInn = alreadyInn.split("_")[2];
				$("#"+alreadyInn).data('isDropped',false);
				$("#"+alreadyInn).data('droppedIn',"");
				$("#"+alreadyInn).css({'position':'absolute'});
				$("#"+alreadyInn).appendTo($("#optionsContainer"));
				$("#"+alreadyInn).css({'left':$("#"+alreadyInn).data('xx')});
				$("#"+alreadyInn).css({'top':$("#"+alreadyInn).data('yy')});
				$("#"+alreadyInn).draggable({ disabled: false });
				//$("#"+alreadyInn).draggable({ revert: 'valid' });*/
				//chkDropLength(dgObj,dpObj)
				appendToDrop(dgObj,dpObj,"");
				var curDragId = $(dgObj).attr("id");
				curDragId = curDragId.split("_")[2]
				$(dpObj).data('isDropped',true);
				$("#"+curDragId).data('isDropped',true);
				$("#"+curDragId).data('droppedIn',$(dpObj).attr('id'));
				$(dgObj).draggable({ revert: 'invalid' });
				}
				}
			}
		}
	}
	
// For Multi drag Feature
function checkIfSameDragObjectIsDropped(dgObj,dpObj){
    if (trackObjects[SeqID].singleqtnperpage == "no") {
        var dragMatched = true;
        var dpObjChildren = $(dpObj).children().length;
        //alert("dpObjChildren :"+dpObjChildren)
        if (dpObjChildren > 0) {
            //alert($(dgObj).attr("id"));
            var splitsofogObjId = $(dgObj).attr("id").split("_");
            var dgObjId = splitsofogObjId[2] + "_" + splitsofogObjId[3];
            $(dpObj).children().each(function () {
                var splitsofdropObjIds = $(this).attr("id").split("_")
                var dropObjIds = splitsofdropObjIds[2] + "_" + splitsofdropObjIds[3];
                if (dropObjIds == dgObjId) {
                    dragMatched = false;
                }
            })
        }
        else {
            dragMatched
        }
        return dragMatched;
    }
    else {
        var dragMatched = true;
        var dpObjChildren = $(dpObj).children().length;
        //alert("dpObjChildren :"+dpObjChildren)
        if (dpObjChildren > 0) {
            //alert($(dgObj).attr("id"));
            var dgObjId = $(dgObj).attr("id").split("_")[3];
            $(dpObj).children().each(function () {
                var dropObjIds = $(this).attr("id").split("_")[3];
                if (dropObjIds == dgObjId) {
                    dragMatched = false;
                }
            })
        }
        else {
            dragMatched
        }
        return dragMatched;
    }
}
function appendWhenCorrect(dgObj,dpObj){

}
function chkDropLength(dgObj,dpObj){
var dragObjInDrop;
if(clone != "clone"){
 dragObjInDrop = $(dgObj).data('droppedIn');
if($("#"+dragObjInDrop).children().length<=1){
$("#"+dragObjInDrop).data('isDropped',false);
}
}
else{
var cloneId = $(dgObj).attr("id");
var dragId = cloneId.split("_")[2];
dragObjInDrop = $("#"+dragId).data('droppedIn');
if($("#"+dragObjInDrop).children().length<=1){
$("#"+dragObjInDrop).data('isDropped',false);
$("#"+dragObjInDrop).children().find("[id='"+cloneId+"']").remove();
}
}
}
	/*else{
		if($(dpObj).data('isDropped') == false){
		appendToDrop(dgObj,dpObj);
		$(dgObj).data('isDropped',true);
		$(dpObj).data('isDropped',true);
		$(dgObj).data('droppedIn',$(dpObj).attr('id'));
		 $(".drag").draggable({ revert: 'invalid' });
		}
		else{
		if($(dpObj).data('isDropped') == false){
		//if($(dgObj).data('droppedIn') != $(dpObj).attr('id')){
		appendToDrop(dgObj,dpObj);
		$(dgObj).data('isDropped',true);
		$(dgObj).data('droppedIn',$(dpObj).attr('id'));
		 $(".drag").draggable({ revert: 'invalid' });
		
		 }
		 else{
		$(dgObj).css({'position':'absolute'});
		$(dgObj).appendTo($("#optionsContainer"));
		$(dpObj).draggable({ revert: 'valid'});
		$(dgObj).css({'left':$(dgObj).data('xx')});
		$(dgObj).css({'top':$(dgObj).data('yy')});
		 }
		}
	}
}*/
function appendToDrop($currentDragObj, $currentDropObj, val,currentPageId) {
    if (trackObjects[SeqID].singleqtnperpage == "no") {
        if ($($currentDragObj).attr("isclone") != undefined)
            clone = $($currentDragObj).attr("isclone");
        else
            clone = "";
    }
var newObj = $currentDragObj;
if(clone =="clone" && val != ""){
		var dragId = $($currentDragObj).attr("id");
		var noOfClones = parseFloat($($currentDragObj).attr("clones"));
		noOfClones = noOfClones+1;
		$($currentDragObj).attr("clones",noOfClones);
		newObj = $($currentDragObj).clone();
		var newDragId = "clone_"+noOfClones+"_"+dragId;
		$(newObj).attr("id",newDragId);	
		//$(newObj).draggable({ disabled: true });
              //$(newObj).css({opacity:0.5});
		if (trackObjects[SeqID].singleqtnperpage == "no") {
		    initCloneDragsinSinglepage(newObj);
		}
                else
		initCloneDrags(newObj);
  }
		
	$($currentDropObj).css({'overflow':'auto'});
	$(newObj).appendTo($($currentDropObj));
	$($currentDropObj).data("isDropped", true);
	$(newObj).data("isDropped", true);
		$(newObj).css({'position':'relative'});
		if(multipleDND == true){
		$(newObj).css({'top':'5px'});
		$(newObj).css({'left':'5px'});
		$(newObj).css({'bottom':'5px'});
		$(newObj).css({'right':'5px'});
		}
		else{
		$(newObj).css({'top':'0px'});
		$(newObj).css({'left':'0px'});
		}		
		if (checkfordisableOnDropped(currentPageId)) {
		        $(newObj).draggable({ disabled: true });
		    }
		    else {
		        if (clone != "clone")
		            $(newObj).draggable({ disabled: false });
		}
		var setTimer = setTimeout(resetOverflow($currentDropObj), 1000);
		
}

function chkInteractionType(pageid){
    var arrLen = eval('answerArray' + pageid).length;
var tempVar = false;
	for(var i=0;i<arrLen;i++){
	    if (eval('answerArray' + pageid)[i].length > 1) {
        tempVar = true;
		break;
		}
	}
return tempVar;
}

function ChkMultiDrags(){
var rtnVal = "";
var arr = [];
arr = correctAnswer.split(",")
var sortedArr = arr.sort();
for (var i = 0; i < arr.length - 1; i++) {
if(sortedArr[i + 1].length>0){
    if (sortedArr[i + 1] == sortedArr[i]) {
	rtnVal = "clone"
	break;
	}
	}
	}
	return rtnVal;
}
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function dragDropInit(forThePage) {
    $('div#dragdropcontainer' + forThePage + ' .drag').data('isDropped', false);
    $('div#dragdropcontainer' + forThePage + ' .drop').data('isDropped', false);
    if (trackObjects[SeqID].singleqtnperpage == "no") {
        // singlepageinit();
        userAnswerArray = new Array();
        mobileDragsArray = [];
        if (screenWidth <= 630) {
            showMobileRendering();
            $("div#dragdropcontainer" + forThePage + " .drag").hide();
            mobileDND = true;
            var popObj = document.getElementById("mobileDragsPopup");
            if (popObj == null || popObj == "null")
                $('.footer').append("<tr><td><div id='mobileDragsPopup' title='Available drag objects'></div></td></tr>");
            $('#mobileDragsPopup').longpress(function (e) {
                if ($(e.target).attr('id') == undefined)
                   {    if(!alredyAppended)
	                       appendSelectedDrops();
                    }
            });
        }
        else {
            mobileDND = false;
            $("div#dragdropcontainer" + forThePage + " .drag").show();
        }
        singlepageinit();
    }
    else
        init(forThePage);
   
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function initVal(obj,label,i){
    obj.data(label, i);
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


function enableSubmit() {
    maxDrops = answerArray.length;
    var isEnabled = true;
    for (i = 0; i < maxDrops; i++) {
        if (flagArray[i] != true) {
            isEnabled = false;
        }
    }
    if (isEnabled == true) {
        if (isSubmit == true) {
            document.getElementById("submitContainer").disabled = false;
        }
        else {
            //validateAnswer();
        }
    }
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function chkPlaced(dpId,dgId){

    if (dpId.data('isDropped') == false) {
        dpId.data('isDropped', true);
        updateValues(dpId, dgId);
        var chkVal = dgId.data('chkVal');
        flagArray[chkVal] = true;
        enableSubmit();
    }
    else {
        $(".drag").draggable({ revert: 'valid' });
    }
	
	
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function updateValues(dpId, dgId) {

    var currentDrag;
    var currTarget;
    var tempVal;

    var dropVal = Number(dpId[0].id.split('_')[1]);
    var dragVal = dgId[0].id;
    if (dgId.data('isDropped') == false) {
        dgId.data('isTarget', dpId);
        dgId.data('droppedIn', dropVal);
        userAnswerArray[dropVal] = Number(dragVal);
        dgId.data('isDropped', true);
        currentDrag = dgId;
    }
    else {
        currTarget = dgId.data('isTarget');
        currTarget.data('isDropped', false);
        dgId.data('isDropped', true);
        dgId.data('isTarget', dpId);
        tempVal = Number(dgId.data('droppedIn'));
        dgId.data('droppedIn', dropVal);
        userAnswerArray[tempVal] = 0;
        userAnswerArray[Number(dropVal)] = Number(dragVal);
        tempVal = Number(dragVal);
    }
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function validateAnswer(){
    for (var i = 0; i < userAnswerArray.length; i++) {
        if (answerArray[i] == userAnswerArray[i]) {
            correctCounter++;
        }
    }

    if (correctCounter == userAnswerArray.length) {
        document.getElementById("correctfeedback").style.display = "";
        document.getElementById("incorrectfeedback").style.display = "none";
    }
    else {
        document.getElementById("correctfeedback").style.display = "none";
        document.getElementById("incorrectfeedback").style.display = "";
    }
    disableAll();
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function SetDragPositions(dpId, dgId) {
    $currentDropObj = $(dpId);
    $currentDragObj = $(dgId);
    $currentDragObj.position({ of: $currentDropObj, x: 'left top', y: 'left top' });
    chkPlaced($currentDropObj, $currentDragObj);
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function disableAll(){
    $('.drag').each(function(index) {
        $(this).draggable('disable');
    });
}
function resetAllDnDElements(event) {
    var forThePage = $(event).attr('data-attr');
userAnswerArray = [];
getDragsDroppedArr = [];
mobileDragsArray = [];
$("div#dragdropcontainer" + forThePage + " .drag").each(function(index) {
        initVal($(this), 'isDropped', false);
		 $(this).css({'position':'absolute'});
		 $(this).appendTo($("div#dragdropcontainer" + forThePage));
		 $(this).draggable({ disabled: false });
		 clone = $(this).attr('isclone');
		 if(clone != "clone"){
		 $(this).css({'left':$(this).data('xx')});
		 $(this).css({'top':$(this).data('yy')});
		 $(this).attr("clones",0);
		 }
		 else{
		 if($(this).attr("id").indexOf("clone") != -1)
		  $(this).remove();
		 }
    });
$("div#dragdropcontainer" + forThePage + " .drop").each(function(index) {
		initVal($(this), 'isDropped', false);
		 initVal($(this), 'dragObjectsArr', [])
		 $(this).html("");

    });
   
}
function chkDragSnapBack(dgObj, evt, dpObj) {
    if (checkforSnapBack()) {

if(clone != "clone"){
 $(dgObj).appendTo($("#optionsContainer"));
 initVal($(dgObj), 'isDropped', false);
 $(dgObj).css({'position':'absolute'});
 $(dgObj).css({'left':$(dgObj).data('xx')});
 $(dgObj).css({'top':$(dgObj).data('yy')});
 $(dgObj).draggable({ revert: 'invalid' });
 evt.preventDefault();
 evt.stopPropagation();
 chkDropLength(dgObj,dpObj)
 return false;
 }
 else{
 var CloneDragId = $(dgObj).attr("id");
 var dragId = CloneDragId.split("_")[2];
  $("#"+dragId).data('isDropped',false);
  chkDropLength(dgObj,dpObj);
  var clearDrop = $("#"+dragId).data('droppedIn');
  $("#"+clearDrop).data("isDropped",false);
  $("#"+dragId).data('droppedIn',"");
 var noOfClones = parseFloat($("#"+dragId).attr("clones"));
 if(noOfClones>0)
 noOfClones = noOfClones-1;
 else
 noOfClones = 0;
 $("#"+dragId).attr("clones",noOfClones);
 initVal($(dgObj), 'isDropped', false);
 $(dgObj).css({'position':'absolute'});
 $(dgObj).remove();
 }
}
}
function getDropObjArrVal(str){
var dropObjArr = [];
var ObjStr = str.split("^^^")[1];
dropObjArr = ObjStr.split(",");
return dropObjArr;
}

function compareDnDArr(userArr, ansArr) {
    var arrlen = ansArr.length;
    var tempCount = 0;
    var cCount = 0;
    var inCount = 0;
    if (userArr.length != ansArr.length) {
        inCount = userArr.length;
        return inCount + "~~" + cCount;
    }
    else {
        for (var j = 0; j < userArr.length; j++) {
            if (userArr[j] == ansArr[j]) {
                tempCount++;
            }
        }
        if (tempCount == arrlen) {
            cCount = userArr.length;
        }
        else {
            inCount = userArr.length;
        }
        return inCount + "~~" + cCount;
    }
}

function disableDragObjects() {
    $('.drag').each(function (index) {
        $(this).draggable({ disabled: true });
    });
}

function getMaxDrags(id) {
    //if (trackObjects[SeqID].singleqtnperpage == "no") {
        var numOfDrops = $('div#dragdropcontainer'+id+' .drop').length;
        var numOfDrags = $('div#dragdropcontainer' + id + ' .drag').length;
        var count = 0;
        if (numOfDrops > numOfDrags) {

            $('div#dragdropcontainer' + id + ' .drop').each(function (index) {
                if (eval('answerArray' + id)[index] != null) {
                    count += eval('answerArray' + id)[index].length;
                }
            });

        } else {
            $('div#dragdropcontainer' + id + ' .drag').each(function (index) {
                if (eval('answerArray' + id)[index] != null) {
                    count += eval('answerArray' + id)[index].length;
                }
            });
        }
        return count;
    //}
    //else {
    //    var numOfDrops = $('.drop').length;
    //    var numOfDrags = $('.drag').length;
    //    var count = 0;
    //    if (numOfDrops > numOfDrags) {

    //        $('.drop').each(function (index) {
    //            if (answerArray[index] != null) {
    //                count += answerArray[index].length;
    //            }
    //        });

    //    } else {
    //        $('.drag').each(function (index) {
    //            if (answerArray[index] != null) {
    //                count += answerArray[index].length;
    //            }
    //        });
    //    }
    //    return count;
    //}  
}

function handleDropEvent(event, ui) {
        element = ui.helper.attr('id');
        var offsetXPos = parseInt(ui.offset.left);
        var offsetYPos = parseInt(ui.offset.top);
       // alert('Drag Stopped!\n\nOffset:(' + offsetXPos + "'" + offsetYPos + ')\n' + element);
       // $("#"+element).find('#droppable').remove();
        $("#"+element).draggable({
            containment: '#droppable',
            cursor: 'move',
            snap: '.drop',
			revert: 'valid',
            stop: function (event, ui) {
               // alert(element);
            }
        });
    }

//////////////////////////////////////////////// FOR MOBILE RENDERING /////////////////////////////////////////////////////////////
function showMobileRendering(){
  $(".drag").hide();
  userAnswerArray = new Array();
  if (trackObjects[SeqID].singleqtnperpage == "no") {
      $("[id^=dragdropcontainer]").each(function () {
          $(this).find('[id^="drop"]').each(function (index) {
              userAnswerArray[index] = [];
              var id = $(this).attr('id');
              var obj = document.getElementById(id);
              var wid = obj.style.width;
              var hei = obj.style.height;
              $(this).attr("style", "");
              $(this).attr('style', 'width:' + wid + ' !important; min-height:25px !important');
              $(this).css({ 'position': 'absolute', 'border-style': 'solid', 'border-width': '2px', 'border-color': '#FF0000', 'margin-top': '10px' });
              $(this).bind("click", function (e) {
                  if (isSubmitted == false) {
                      mobil_currentDpObj = $(this);
                      showDialogBox(e);
                  }
              }) // End of click
          }); // end of loop
          mobileDND = true;
          rearrangeinsinglePage(this.id);
      });
  }
  else {
      $('[id^="drop_"]').each(function (index) {
          userAnswerArray[index] = [];
          var id = $(this).attr('id');
          var obj = document.getElementById(id);
          var wid = obj.style.width;
          var hei = obj.style.height;
          $(this).attr("style", "");
          $(this).attr('style', 'width:' + wid + ' !important; min-height:' + hei + ' !important');
          $(this).css({ 'position': 'absolute', 'border-style': 'solid', 'border-width': '2px', 'border-color': '#FF0000', 'margin-top': '10px' });
          $(this).bind("click", function (e) {
              if (isSubmitted == false) {
                  mobil_currentDpObj = $(this);
                  showDialogBox(e);
              }
          }) // End of click
      }); // end of loop
      mobileDND = true;
      rearrangePage();
  }

       
   }
   
function rearrangePage() {
	var arr=[];
	var maxInd = $('#drop_0').index();
	var len = $('.drop').length;
	for(var ind=0; ind<maxInd; ind++){
	  arr[ind] =  $('#optionsContainer').children()[ind];
	}
	$('div:lt('+maxInd+')', 'div#optionsContainer').remove();
	for(var i=0; i<len; i++){
	  var obj = arr[i];
	  $(obj).css({ "margin-top": "10px", "margin-left": "0px" });
	  var ele = $('#drop_'+i);
	  $(obj).insertBefore(ele);
	}
	$("#feedbackContainer").css({ "margin-top": "10px", "margin-left": "0px" });
	$("#submitContainer").css({ "margin-top": "10px", "margin-left": "0px" });
	var div1 = $('#feedbackContainer');
	var div2 = $('#submitContainer');
	//swapDivs(div1, div2);
 }

function swapDivs(div1, div2) {
     var clonedDiv1 = div1.clone();
     var clonedDiv2 = div2.clone();
     div1.replaceWith(clonedDiv2);
     div2.replaceWith(clonedDiv1);
 }

 function showDialogBox(e) {
$("#mobileDragsPopup").dialog({
        draggable: false,
        height: 350,
        width: '80%',     
	    modal: true,
	  //  position: [10,100],
	    open: function ()
	    {
	        $("#mobileDragsPopup").attr('style', 'height:80% !important;min-height:80% !important;');
	        $(this).html("");
	        if (trackObjects[SeqID].singleqtnperpage == "no") {
	            var htmlval = getMobileDragsDataforsinglepage(e);
	            $(this).html(htmlval);
	            setMobilChkValuesinsinglepage();
	        }
	        else {
	            var htmlval = getMobileDragsData(e);
	            $(this).html(htmlval);
	            setMobilChkValues();
	        }
			
			
			},
	 close: function ()
            {
			}
});
}

 function getMobileDragsData(e) {
var text = "Please select the drag item(s) that you want to drop in to the box"
 var $div = $('<div>');
 $tbl = $('<table border="0" cellspacing="2" cellpadding="2">');
 $tbl.append("<tr><td colspan='2'>"+text+"</td></tr>");
 $('.drag').each(function(index) {
 var val = $(this).html();
 var dgId = $(this).attr('id');
 var obj = document.getElementById(dgId);
 var wid;
 var hei;
 var btnType = checkOptionTypes(multipleDND);
 if(val.indexOf('<svg') != '-1'){
   wid = obj.style.width;
   hei = obj.style.height;
 }else if(val.indexOf('<img') != '-1'){
     $(this).find('img').css({"height":"auto"});
	 val = $(this).html();
	 wid = obj.style.width;
     hei = "auto";
 }else{
   wid = obj.style.width;
   hei = "auto";
 }

 $tbl.append("<tr><td width='2%'><input id='dgchkbox_"+dgId+"' onClick='setMobilDnDValues("+dgId+")' type="+btnType+" name='dragoptions' value='dragoptions"+dgId+"'/></td width='98%'><td><div style='width:"+wid+"; height:"+hei+";'>"+val+"</div></td></tr>");
 });
 $tbl.append("<tr><td colspan='2'><input type='submit' onClick='appendSelectedDrops()' value='OK'  style='color:black;'></td></tr>");
// <input type="submit" value="Submit">
 $div.append($tbl);
 return $div;
//border="0" cellspacing="0" cellpadding="0"
}

function setMobilChkValues() {
var selObjId = $(mobil_currentDpObj).attr("id");
var selDropNum = selObjId.substr(Number(selObjId.indexOf('_'))+1, selObjId.length);
 $('.drop').each(function(index) {
    //alert(index);
     var id = $(this).attr('id');
     var num = id.substr( Number(id.indexOf('_'))+1, id.length);
	 if(mobileDragsArray[num] != "undefined" && mobileDragsArray[num] != undefined){
	   if(mobileDragsArray[num].length > 0){
		 var arr = new Array();
		 var str = mobileDragsArray[num].toString();
		 arr = str.split(",");	 
		 for(var i=0; i<arr.length; i++){
			var dgId = arr[i];
			 if(multipleDND == true && clone != "clone"){
			  $('#dgchkbox_'+dgId).attr("checked", true);
			   $('#dgchkbox_'+dgId).prop("checked", true);
			  }
			  if(clone != "clone"){
				  if(selObjId != id ){
					$('#dgchkbox_'+dgId).attr("disabled", true);
				  }else{
					if(!multipleDND){
					  $('#dgchkbox_'+dgId).attr("checked", true);
					   $('#dgchkbox_'+dgId).prop("checked", true);
					   }
					  
					$('#dgchkbox_'+dgId).attr("disabled", false);
				  }
			  }else{
			     if(multipleDND == true){
					  if(selObjId == id ){
						   $('#dgchkbox_'+dgId).attr("checked", true);
						   $('#dgchkbox_'+dgId).prop("checked", true);
						
					  }
				 }
			  }
		 }
	   }
    }
 });
 
 if(mobileDragsArray[selDropNum] != "undefined" && mobileDragsArray[selDropNum] != undefined){
	  if(mobileDragsArray[selDropNum].length > 0){
	      mobil_tempSelectedArr = [];
		  mobil_tempSelectedArr = mobileDragsArray[selDropNum];
	  }
  }else{
     mobil_tempSelectedArr = [];
  }
}

function setMobilDnDValues(dgId) {
 if(multipleDND == true){
  var bool = $('#dgchkbox_'+dgId).prop("checked");
  if(bool == true || bool == "true"){
    if(clone != "clone"){
		mobil_tempSelectedArr.push(dgId);
		$("#"+dgId).data('isDropped',true);
	}else{
	    if(getObjIndex(dgId,mobil_tempSelectedArr) == undefined){
			mobil_tempSelectedArr.push(dgId);
		}
		$("#"+dgId).data('isDropped',true);
	}
	
  }else{
     var ind = getObjIndex(dgId,mobil_tempSelectedArr);
     if(ind != -1){
	   mobil_tempSelectedArr.splice(ind,1);
	   $("#"+dgId).data('isDropped',false);
	 }
  }
  }else{
    mobil_tempSelectedArr = [];
    if(clone != "clone"){
		mobil_tempSelectedArr.push(dgId);
		$("#"+dgId).data('isDropped',true);
	}else{
	    if(getObjIndex(dgId,mobil_tempSelectedArr) == undefined){
			mobil_tempSelectedArr.push(dgId);
		}
		$("#"+dgId).data('isDropped',true);
	}
  }
}



function appendSelectedDrops() {
$('#mobileDragsPopup').dialog('close');
var index = $(mobil_currentDpObj).attr("id").split("_")[1];
if(mobil_tempSelectedArr.length>0){
$(mobil_currentDpObj).data('isDropped',true);
}
else{
$(mobil_currentDpObj).data('isDropped',false);
}
if(mobileDND == true){
	mobileDragsArray[index] = mobil_tempSelectedArr;
}
updateDropContainer(mobil_tempSelectedArr, $(mobil_currentDpObj));
mobil_tempSelectedArr = [];
alredyAppended=true;
//userAnswerArray[index].sort(function(a,b){return a-b});
}
function updateDropContainer(dragsArr, dropObj) {
    $(dropObj).css({ "height": "auto" });
    var dropHtml = "";
    if ($(dropObj).children().length > 0) {
        $(dropObj).html("");
    }
    for (var i = 0; i < dragsArr.length; i++) {
        if (trackObjects[SeqID].singleqtnperpage == "no" &&( dragsArr[i].length <= 2 || dragsArr[i].length == undefined)) {
            var qtid = $($(dropObj).parent()).attr("ddid");
            var divId = "drag" + qtid + "_" + dragsArr[i]
            dropHtml = $("#" + divId).html();
        }
        else {
            var divId = dragsArr[i];
            dropHtml = $("#" + dragsArr[i]).html();
        }
        var obj, wid, hei;
        obj = document.getElementById(divId);
        if (dropHtml.indexOf('<svg') != '-1') {
            wid = obj.style.width;
            hei = obj.style.height;
        } else {
            wid = obj.style.width;
            hei = "auto";
        }
        var $div = $('<div style="float:left; width:' + wid + '; height:' + hei + ';" id="' + divId + '">');
        $($div).append(dropHtml)
        $(dropObj).append($($div));
    }
}
function getObjIndex(id,arr){
var ind;
 for(var i=0; i<arr.length; i++){
   if(id == arr[i]){
      ind = i;
	  break;
   }
 }
return ind;
}
function mobileAppendToDrop(dropObjArr,dragObjArr){
for(var i=0;i<dragObjArr.length;i++){
var dpObj = $("#"+dropObjArr[i]);
if(dragObjArr[i].length>0 && dropObjArr[i] != undefined){
updateDropContainer(dragObjArr[i],$(dpObj));
  mobileDragsArray[i] = dragObjArr[i];
}
}
}

function checkOptionTypes(multiDND){
if(multiDND == true)
 return "checkbox";
 else
 return "radio"
}


//--------------------------------------------------------------------------------------------------
//----------------------------------------------LONG CLICK EVENT PLUGIN----------------------------------------------

(function ($) {
    $.fn.longpress = function(longCallback, shortCallback, duration) {
        if (typeof duration === "undefined") {
            duration = 500;
        }

        return this.each(function() {
            var $this = $(this);

            // to keep track of how long something was pressed
            var mouse_down_time;
            var timeout;

            // mousedown or touchstart callback
            function mousedown_callback(e) {
                mouse_down_time = new Date().getTime();
                var context = $(this);

                // set a timeout to call the longpress callback when time elapses
                timeout = setTimeout(function() {
                    if (typeof longCallback === "function") {
                        longCallback.call(context, e);
                    } else {
                        $.error('Callback required for long press. You provided: ' + typeof longCallback);
                    }
                }, duration);
            }

            // mouseup or touchend callback
            function mouseup_callback(e) {
                var press_time = new Date().getTime() - mouse_down_time;
                if (press_time < duration) {
                    // cancel the timeout
                    clearTimeout(timeout);

                    // call the shortCallback if provided
                    if (typeof shortCallback === "function") {
                        shortCallback.call($(this), e);
                    } else if (typeof shortCallback === "undefined") {
                        ;
                    } else {
                        $.error('Optional callback for short press should be a function.');
                    }
                }
            }

            // cancel long press event if the finger or mouse was moved
            function move_callback(e) {
                clearTimeout(timeout);
            }

            // Browser Support
            $this.on('mousedown', mousedown_callback);
            $this.on('mouseup', mouseup_callback);
            $this.on('mousemove', move_callback);

            // Mobile Support
            $this.on('touchstart', mousedown_callback);
            $this.on('touchend', mouseup_callback);
            $this.on('touchmove', move_callback);
        });
    };
}(jQuery));



//added by ajay to implement single page drag and drop functionality-----


function singlepageinit(clas) {
    $("[id^=dragdropcontainer]").each(function (i) {
        var prsntdividnum = Number(($(this).attr("id")).split('dragdropcontainer')[1]);
        prsntid = prsntdividnum;
        multipleDND = chkInteractionTypeSinglepage(eval("answerArray" + prsntdividnum));
        clone = ChkMultiDragsSinlepage(eval("correctAnswer" + prsntdividnum));
        $('div#dragdropcontainer' + prsntdividnum + ' .drag').each(function (index) {
            initVal($(this), 'dragId', index + 1);
            initVal($(this), 'chkVal', index);
            initVal($(this), 'isDropped', false);
            initVal($(this), 'droppedIn', "");
            initVal($(this), 'xx', $(this).css('left'));
            initVal($(this), 'yy', $(this).css('top'));
            $(this).attr("clones", 0);
            $(this).attr("isclone", clone);
            $(this).attr("ismultipleDND", multipleDND);
            initDragsinSinglepage($(this));
        });
        $('div#dragdropcontainer' + prsntdividnum + ' .drop').each(function (index) {
            initVal($(this), 'dropId', index);
            initVal($(this), 'isDropped', false);
            initVal($(this), 'dragObjectsArr', [])
            initDropsinSinglepage($(this));

        });

    });

}
function chkInteractionTypeSinglepage(ansarr) {
    var arrLen = ansarr.length;
    var tempVar = false;
    for (var i = 0; i < arrLen; i++) {
        if (ansarr[i].length > 1) {
            tempVar = true;
            break;
        }
    }
    return tempVar;
}
function ChkMultiDragsSinlepage(correctAnswer) {
    var rtnVal = "";
    var arr = [];
    arr = correctAnswer.split(",")
    var sortedArr = arr.sort();
    for (var i = 0; i < arr.length - 1; i++) {
        if (sortedArr[i + 1].length > 0) {
            if (sortedArr[i + 1] == sortedArr[i]) {
                rtnVal = "clone"
                break;
            }
        }
    }
    return rtnVal;
}
function dropIfCorrectinsinglepage(dgObj, dpObj) {
    var dpId;
    var dgId;
    prsntid = $(dpObj.parent()).attr("ddid");
    if (checkforsnapBkWhenIncorrect()) {
        return true;
    }
    else {
        dpId = $(dpObj).attr('id').split("_")[1];
        if (clone != "clone")
            dgId = $(dgObj).attr('id').split("_")[1];
        else
            dgId = $(dgObj).attr('id').split("_")[3];
        //alert("dgId :"+dgId+" -- dpId :"+dpId);
        //alert(answerArray[dpId]);
        var rtnValue = compareArray(eval("answerArray" + prsntid)[dpId], dgId);
        return rtnValue;
    }
}

function checkforSnapBack() {
   // if (trackObjects[SeqID].singleqtnperpage == "no") {
        if (eval("isSnapBack" + prsntid) == true)
            return true
        else
            return false
    //}
    //else {
    //    if (isSnapBack == true)
    //        return true
    //    else
    //        return false
    //}
}
function checkforsnapBkWhenIncorrect() {
    //if (trackObjects[SeqID].singleqtnperpage == "no") {
        if (eval("snapBkWhenIncorrect" + prsntid) == false)
            return true
        else
            return false
    //}
    //else {
    //    if (snapBkWhenIncorrect == false)
    //        return true
    //    else
    //        return false
    //}
}
function checkfordisableOnDropped(currentPageId) {
    if (currentPageId != undefined) {
        prsntid = currentPageId;
    }
  //  if (trackObjects[SeqID].singleqtnperpage == "no") {
        if (eval("disableOnDropped" + prsntid) == true)
            return true
        else
            return false
    //}
    //else {
    //    if (disableOnDropped == true)
    //        return true
    //    else
    //        return false
    //}

}
function checkforswapDroppedDragPos() {
   // if (trackObjects[SeqID].singleqtnperpage == "no") {
        if (eval("swapDroppedDragPos" + prsntid) == false)
            return true
        else
            return false
    //}
    //else {
    //    if (swapDroppedDragPos == false)
    //        return true
    //    else
    //        return false
    //}
}


function rearrangeinsinglePage(qtid) {
    var prsntclassid = qtid.split("dragdropcontainer")[1];
    var arr = [];
    var maxInd = $('#' + qtid + ' #drop' + prsntclassid + '_0').index();
    var len = $('#' + qtid + ' .drop').length;
    for (var ind = 0; ind < maxInd; ind++) {
        arr[ind] = $('#' + qtid + '').children()[ind];
    }
    $('div:lt(' + maxInd + ')', '#' + qtid + '').remove();
    for (var i = 0; i < len; i++) {
        var obj = arr[i];
        $(obj).css({ "margin-top": "10px", "margin-left": "0px" });
        var ele = $('#' + qtid + ' #drop' + prsntclassid + '_' + i);
        $(obj).insertBefore(ele);
    }
    $("#feedbackContainer").css({ "margin-top": "10px", "margin-left": "0px" });
    $("#submitContainer").css({ "margin-top": "10px", "margin-left": "0px" });
    var div1 = $('#feedbackContainer');
    var div2 = $('#submitContainer');
    swapDivs(div1, div2);
}
function getMobileDragsDataforsinglepage(e) {
    var selector = e.target.parentElement.id;
    if (selector.substr(0, 4) == "drop") {
        selector = e.target.parentElement.parentElement.id;
    }
    prsntid = selector.split("dragdropcontainer")[1];
    multipleDND = chkInteractionTypeSinglepage(eval("answerArray" + prsntid));
    clone = ChkMultiDragsSinlepage(eval("correctAnswer" + prsntid));
    var text = "Please select the drag item(s) that you want to drop in to the box"
    var $div = $('<div>');
    $tbl = $('<table border="0" cellspacing="2" cellpadding="2">');
    $tbl.append("<tr><td colspan='2'>" + text + "</td></tr>");
    $('#'+selector+' .drag').each(function (index) {
        var val = $(this).html();
        var dgId =String($(this).attr('id'));
        var obj = document.getElementById(dgId);
        var wid;
        var hei;
        var btnType = checkOptionTypes(multipleDND);
        if (val.indexOf('<svg') != '-1') {
            wid = obj.style.width;
            hei = obj.style.height;
        } else if (val.indexOf('<img') != '-1') {
            //$(this).find('img').css({ "height": "auto" });
            val = $(this).html();
            wid = obj.style.width;
            hei = "auto";
        } else {
            wid = obj.style.width;
            hei = "auto";
        }
        
        $tbl.append("<tr><td width='2%'><input id='dgchkbox_" + dgId + "' onClick='setMobilDnDValuesinsinglepage(" +String(dgId) + ")' type=" + btnType + " name='dragoptions' value='dragoptions" + dgId + "'/></td width='98%'><td><div style='width:" + wid + "; height:" + hei + ";'>" + val + "</div></td></tr>");
    });
    $tbl.append("<tr><td colspan='2'><input type='submit' onClick='appendSelectedDropsinsinglepage()' value='OK'></td></tr>");
    // <input type="submit" value="Submit">
    $div.append($tbl);
    return $div;
    //border="0" cellspacing="0" cellpadding="0"
}
function setMobilDnDValuesinsinglepage(dgId) {
    var dragid="";
    if ($(dgId).attr("id")!=undefined) {
         dragid = $(dgId).attr("id");
    }
    else {
         dragid = dgId;
    }
    //var selector = dgId.parentElement.className.split(" ")[0];
    //prsntid = selector.split("dragdropcontainer")[1];
    if (mobil_tempSelectedArr[prsntid]==undefined) {
        mobil_tempSelectedArr[prsntid]=[];
    } 
    if ($(dgId).attr("ismultiplednd") != undefined) {
        multipleDND = $(dgId).attr("ismultiplednd");
    }
    if ($(dgId).attr("isclone") != undefined) {
        clone = $(dgId).attr("isclone");
    }

    if (multipleDND == true || multipleDND=="true") {
        var bool = $('#dgchkbox_' + String(dragid)).prop("checked");
        if (bool == true || bool == "true") {
            if (clone != "clone") {
                mobil_tempSelectedArr[prsntid].push(dragid);
                $(dgId).data('isDropped', true);
            } else {
                if (getObjIndex(dragid, mobil_tempSelectedArr[prsntid]) == undefined) {
                    mobil_tempSelectedArr[prsntid].push(String(dragid));
                }
                $(dgId).data('isDropped', true);
            }

        } else {
            var ind = getObjIndex(dragid, mobil_tempSelectedArr[prsntid]);
            if (ind != -1) {
                mobil_tempSelectedArr[prsntid].splice(ind, 1);
                $(dgId).data('isDropped', false);
            }
        }
    } else {
        mobil_tempSelectedArr[prsntid] = [];
        if (clone != "clone") {
            mobil_tempSelectedArr[prsntid].push(String(dragid));
            $(dgId).data('isDropped', true);
        } else {
            if (getObjIndex(dragid, mobil_tempSelectedArr[prsntid]) == undefined) {
                mobil_tempSelectedArr[prsntid].push(String(dragid));
            }
            $(dgId).data('isDropped', true);
        }
    }

    //mobil_tempSelectedArr[prsntid] = tempstore;
}

function appendSelectedDropsinsinglepage() {
    //tempstore = mobil_tempSelectedArr[prsntid]
    $('#mobileDragsPopup').dialog('close');
    var index = $(mobil_currentDpObj).attr("id").split("_")[1];
    if (mobil_tempSelectedArr[prsntid].length > 0) {
        $(mobil_currentDpObj).data('isDropped', true);
    }
    else {
        $(mobil_currentDpObj).data('isDropped', false);
    }
    if (mobileDND == true) {
        mobileDragsArray[index] = [];
        mobileDragsArray[index][prsntid] = mobil_tempSelectedArr[prsntid];
    }
    updateDropContainer(mobil_tempSelectedArr[prsntid], $(mobil_currentDpObj));
   // mobil_tempSelectedArr[prsntid] = mobil_tempSelectedArr[prsntid];
    mobil_tempSelectedArr[prsntid] = [];
    //eval("mobil_tempSelectedArr" + prsntid).length = 0;
    //userAnswerArray[index].sort(function(a,b){return a-b});
}

function setMobilChkValuesinsinglepage() {
    var selObjId = $(mobil_currentDpObj).attr("id");
    var selDropNum = selObjId.substr(Number(selObjId.indexOf('_')) + 1, selObjId.length);
    $('#dragdropcontainer'+prsntid+' .drop').each(function (index) {
        //alert(index);
        var id = $(this).attr('id');
        var num = id.substr(Number(id.indexOf('_')) + 1, id.length);
        if (mobileDragsArray[num] != "undefined" && mobileDragsArray[num] != undefined) {
            if (mobileDragsArray[num].length > 0) {
                var arr = new Array();
                var str = mobileDragsArray[num].toString();
                arr = str.split(",");
                for (var i = 0; i < arr.length; i++) {
                    var dgId = arr[i];
                    if (multipleDND == true && clone != "clone") {
                        $('#dgchkbox_' + dgId).attr("checked", true);
                        $('#dgchkbox_' + dgId).prop("checked", true);
                    }
                    if (clone != "clone") {
                        if (selObjId != id) {
                            $('#dgchkbox_' + dgId).attr("disabled", true);
                        } else {
                            if (!multipleDND) {
                                $('#dgchkbox_' + dgId).attr("checked", true);
                                $('#dgchkbox_' + dgId).prop("checked", true);
                            }

                            $('#dgchkbox_' + dgId).attr("disabled", false);
                        }
                    } else {
                        if (multipleDND == true) {
                            if (selObjId == id) {
                                $('#dgchkbox_' + dgId).attr("checked", true);
                                $('#dgchkbox_' + dgId).prop("checked", true);

                            }
                        }
                    }
                }
            }
        }
    });

    if (mobileDragsArray[selDropNum] != "undefined" && mobileDragsArray[selDropNum] != undefined) {
        if (mobileDragsArray[selDropNum].length > 0) {
            mobil_tempSelectedArr = [];
            mobil_tempSelectedArr = mobileDragsArray[selDropNum];
        }
    } else {
        mobil_tempSelectedArr = [];
    }
}

function updateUserAnsArrinSinglepage() {
    userAnswerArray = [];
    getDragsDroppedArr = [];
    $("[id^=dragdropcontainer]").each(function (contindex) {
        var qtnId = $(this).attr("ddid");
        var tempAnswerArray = new Array();
        userAnswerArray[qtnId] = [];
        var temarray = new Array();
        $(this).find('[id^="drop"]').each(function (index) {                    
            tempAnswerArray[index] = [];
            if ($(this).children().length > 0) {              
                temarray.push($(this).attr('id'));
                $(this).children().each(function (intz) {
                    clone = $(this).attr("isclone");
                    if (clone == "clone" && !mobileDND) {
                        var splitVal = $(this).attr('id').split("_")[3];
                        tempAnswerArray[index].push(parseFloat(splitVal));
                    } else {
                        tempAnswerArray[index].push(parseFloat($(this).attr('id').split('_')[1]));
                    }
                });                
            }
            tempAnswerArray[index].sort(function (a, b) { return a - b });           
        });
        // userAnswerArray[qtnId].push(tempAnswerArray);
        getDragsDroppedArr[qtnId] = temarray;
        userAnswerArray[qtnId] = tempAnswerArray;
    });
    if (mobileDND == true && userAnswerArray.length > 0) {
        mobileDragsArray = [];
        mobileDragsArray = userAnswerArray;
    }
}

function getDropObjArrValinSinglepage(str) {
    var dropObjArr = [];
    var ObjStr = str.split("^^^")[1];
    $(ObjStr.split(',,,')).each(function (index) {
        $(this.split(',')).each(function () {
            if (this!="") {
                dropObjArr.push(this.split());
            }
           
        });
       
    });
    return dropObjArr;
}

function initDragsinSinglepage($element) {
    var zIndex = 2;
    $element.draggable({
        helper: clone,
        cursor: 'move',
        start: function () {
            if ($currentDropObj != undefined) {
                $($currentDropObj).css({ 'overflow': 'hidden' });
                var setTimer = setTimeout(resetOverflow, 1000);

            }
        },
        drag: function (event, ui) {
            if (trackObjects[SeqID].singleqtnperpage == "no") {
                if ($(this.parentElement).attr("ddid") != undefined) {
                    prsntid = $(this.parentElement).attr("ddid");
                    clone = $(this).attr("isclone");
                    multipleDND = $(this).attr("ismultipleDND");
                }
            }
            $element.draggable({ revert: true });
            $element.draggable({ cursor: 'move' });
            $element.draggable({ containment: "div#dragdropcontainer" + prsntid, scroll: false });
            $(this).css('z-index', zIndex++);
            currentSelectedObj = $(this);
            if (clone == "")
                $currentDragObj = $(this);
            else
                $currentDragObj = $(this).clone();
            draggedOverTarget = true;
        },
        stop: function () {
            if ($currentDropObj != undefined) {
                $($currentDropObj).css({ 'overflow': 'hidden' });
                var setTimer = setTimeout(resetOverflow, 1000);
            }
        }
    });
}

function initDropsinSinglepage($element) {
    $(".drop").droppable({
        tolerance: 'pointer',
        // Other options for tolerance - fit,touch,intersect,sortable.
        over: function () {

        },
        out: function () {

        },
        drop: function (event, ui) {
            draggedOverTarget = false;
            $currentDropObj = $(this);
            //if (trackObjects[SeqID].singleqtnperpage == "no") {
            //    if ($(this.parentElement).attr("ddid") != undefined) {
            //        prsntid = $(this.parentElement).attr("ddid")
            //        clone = $(this).attr("isclone");
            //        multipleDND = $(this).attr("ismultipleDND");
            //    }
            //}
            if (clone == "clone") {
                setDifferentIdForDragObj($currentDragObj);
                //handleDropEvent(event, ui);
            }
            if (trackObjects[SeqID].singleqtnperpage == "no") {
                if ($(this.parentElement).attr("ddid") != undefined) {
                    prsntid = $(this.parentElement).attr("ddid")
                }
            }
            //$(this).css({'height':'auto'}); - For Auto Expand
            //$(this).css({'overflow':'auto'}); - For Scrolls
            //$(".drag").draggable({ revert: 'invalid' });
            $currentDropId = $currentDropObj.attr('id');
            $currentDragId = $currentDragObj.attr('id');
            if (trackObjects[SeqID].singleqtnperpage == "no") {
                if (dropIfCorrectinsinglepage($currentDragObj, $currentDropObj) == true) {
                    chkRevertType($($currentDragObj), $(this));
                }
            }
            else {
                if (dropIfCorrect($currentDragObj, $currentDropObj) == true) {
                    chkRevertType($($currentDragObj), $(this));
                }
            }
        }
    });
    $("div#dragdropcontainer" + prsntid).droppable({
        drop: function (event, ui) {
            accept: ".drag"
            if (draggedOverTarget)
            chkDragSnapBack($currentDragObj, event, $(this));

        }
    });

}

function initCloneDragsinSinglepage($element) {
    var zIndex = 2;
    $element.draggable({
        cursor: 'move',
        start: function () {
            if ($currentDropObj != undefined) {
                $($currentDropObj).css({ 'overflow': 'hidden' });
                var setTimer = setTimeout(resetOverflow, 1000);

            }
        },
        drag: function (event, ui) {
            $element.draggable({ revert: true });
            $element.draggable({ cursor: 'move' });
            $element.draggable({ containment: "[id^=dragdropcontainer]", scroll: false });
            $(this).css('z-index', zIndex++);
            currentSelectedObj = $(this);
            $currentDragObj = $(this);
        },
        stop: function () {
            //	$($currentDragObj).removeClass("ui-draggable-dragging");
            if ($currentDropObj != undefined) {
                $($currentDropObj).css({ 'overflow': 'hidden' });
                var setTimer = setTimeout(resetOverflow, 1000);
            }
        }
    });
}
function checkPassStatusforDragDrop(qtnid) {
    if (pages[SeqID] != undefined) {
        var correct = false;
        var cCounter = 0;
        var maxDrags = getMaxDrags(qtnid);
        for (var i = 0; i < userAnswerArray[qtnid].length; i++) {
            for (var j = 0; j < userAnswerArray[qtnid][i].length; j++) {
                eval('answerArray' + qtnid)[i].sort(function (a, b) { return a - b });
                if (eval('answerArray' + qtnid)[i][j] == userAnswerArray[qtnid][i][j]) {
                    cCounter++;
                }
            }
        }
        if (cCounter == maxDrags)
            correct = true;
        return correct;
    }
}
function addstyletag() {
    var style = "div.ui-draggable:hover{cursor:all-scroll !important}"
    var tag = document.createElement("script");
    tag.innerText = style;
    $("head").append(tag);
}