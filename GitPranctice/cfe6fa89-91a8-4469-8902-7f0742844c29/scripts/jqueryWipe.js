/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($) { 
   $.fn.touchwipe = function(settings) {
     var config = {
    		min_move_x: 20,
    		min_move_y: 20,
 			wipeLeft: function() { },
 			wipeRight: function() { },
 			wipeUp: function() { },
 			wipeDown: function() { },
			preventDefaultEvents: true
	 };
     
     if (settings) $.extend(config, settings);
 
     this.each(function() {
    	 var startX;
    	 var startY;
		 var isMoving = false;
         var diffX;
		 var diffY;
		 
    	function cancelTouch() {
    		 this.removeEventListener('touchmove', onTouchMove);
			 this.removeEventListener('touchend', onTouchMove);
		     this.removeEventListener('touchcancel', onTouchMove);
    		 startX = null;
    		 isMoving = false;
    	}	
    	 
    	function onTouchMove(e) {		     
    		 if(config.preventDefaultEvents) {
    			 e.preventDefault();
    		 }
			 //alert(e.touches.length+"touchended @@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+"::::"+isMoving);
			 isMoving = true;
    		 //if(isMoving) {
	    		 var x = e.touches[0].pageX;
	    		 var y = e.touches[0].pageY;				 
	    		 diffX = startX - x;
	    		 diffY = startY - y;	    		 
    		 //}
    	}
		 
		function onTouchEnd(e){
		    if(isMoving) {
				if(Math.abs(diffX) >= config.min_move_x) {
					cancelTouch();
					if(diffX > 0) {
						config.wipeLeft();
					}
					else {
						config.wipeRight();
					}
				}
				 else if(Math.abs(diffY) >= config.min_move_y) {
					cancelTouch();
					if(diffY > 0) {
						config.wipeDown();
					}
					else {
						config.wipeUp();
					}
				}
			}
			diffX = 0;
			diffY = 0;
			isMoving = false;
			cancelTouch();
		}
    	 
    	 function onTouchStart(e)
    	 {
		    var isSequencePage = false;
			try{
			  if(currPageObject.Qtype != undefined){
			    if((currPageObject.Qtype).toLowerCase() == "sequence"){
			       isSequencePage = true;
			    }	
              }			  
			}catch(e){}
		    if(!isSequencePage){
				if (e.touches.length == 1) {
					 startX = e.touches[0].pageX;
					 startY = e.touches[0].pageY;    			 
					 this.addEventListener('touchmove', onTouchMove, false);
					 this.addEventListener('touchend', onTouchEnd, false);
					this.addEventListener('touchcancel', onTouchEnd, false);
				}
			}
    	 }    	 
    	 if ('ontouchstart' in document.documentElement) {
    		 this.addEventListener('touchstart', onTouchStart, false);
    	 }
     });
 
     return this;
   };
 
 })(jQuery);