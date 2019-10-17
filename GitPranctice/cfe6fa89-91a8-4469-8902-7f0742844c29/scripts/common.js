Instancy_TCAPI = {};

//Instancy_TCAPI.CourseActivity = 
//{ 
//    "id":"http://instancy.com/learningmodule/cfe6fa89-91a8-4469-8902-7f0742844c29", 
//    "definition":{
//    	"type":"Course",
//    	"name":{"en-US":"9 questions"},
//    	"description":{"en-US":"9 questions"}
//    }
//};

//Instancy_TCAPI.getContext = function(parentActivityId) {
//    var ctx = {
//        "contextActivities":{
//        "grouping": { "id": Instancy_TCAPI.CourseActivity.id }
//        }
//    };
//    if(parentActivityId !== undefined && parentActivityId !== null){
//        ctx.contextActivities["parent"] = {"id":parentActivityId};
//    }
//    return ctx;
//};

Instancy_TCAPI.getContext = function (parentActivityId) {
    var queryParams = TinCan.Utils.parseURL(window.location).params;
    if (queryParams.hasOwnProperty("trackid")) {
        var ctx = {
            "contextActivities": {
                "grouping": { "id": "http://instancy.com/learningtrack/" + queryParams.trackid }
            }
        };
        if (parentActivityId !== undefined && parentActivityId !== null) {
            ctx.contextActivities["parent"] = { "id": parentActivityId };
        }
        return ctx;
    }
    else {
        var ctx = {
            "contextActivities": {
                "grouping": { "id": Instancy_TCAPI.CourseActivity.id }
            }
        };
        if (parentActivityId !== undefined && parentActivityId !== null) {
            ctx.contextActivities["parent"] = { "id": parentActivityId };
        }
        return ctx;
    }
};




function SetCourseActivity() {
    var queryParams = TinCan.Utils.parseURL(window.location).params;
    if (queryParams.hasOwnProperty("trackid") && queryParams.hasOwnProperty("seqid")) {
        Instancy_TCAPI.CourseActivity =
        {
            "id": "http://instancy.com/learningtrack/" + queryParams.trackid + "/" + queryParams.seqid,
            "definition": {
                "type": "Course",
                "name": { "en-US": "9 questions" },
                "description": { "en-US": "9 questions" }
            }
        };
    }
    else {
        Instancy_TCAPI.CourseActivity =
        {
            "id": "http://instancy.com/learningmodule/cfe6fa89-91a8-4469-8902-7f0742844c29",
            "definition": {
                "type": "Course",
                "name": { "en-US": "9 questions" },
                "description": { "en-US": "9 questions" }
            }
        };
    }
}
