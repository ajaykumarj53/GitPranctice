//Content Object
var outputMode = 'print';
var FullCourseHTML = $('<table width="100%" id="savePDF"><tr class="Prow"><td></tr></td></table>');
var loaderId = 'savePDFLoader';
var styleData = "";
var PagesIndexList;
var oldContentFixedStyles = "<style>*{font-size:16px;font-family: sans-serif;background: transparent !important;border: none !important;height: auto !important;}img{width: 500px!important;padding: 20px;margin-left: 20px;}div#submitContainer img{width:88px !important;margin-left: 0px;padding:0px}.star_container img{height: 24px!important;width: 24px!important;}.star_container span {margin: -10px;}.drag img{width:130px;height:80px}</style>";
function SaveAsPdf(html) {
    var api_endpoint = "https://selectpdf.com/api2/convert/";
    var api_key = "2026347e-e5a8-4448-bf1f-5dbf0ee2e269";
 
    var url = window.location.href; // current page
    var params = {
        key: api_key, 
       // url: url
	   html	:html,
	   margin_top:20,
	   margin_right:20,
	   margin_bottom :20,
	   margin_left: 20,
	   keep_images_together: true,
	   keep_texts_together: true//,
       // draw_background :true
    }
 
    var xhr = new XMLHttpRequest();
    xhr.open('POST', api_endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/json");
 
    xhr.responseType = 'arraybuffer';
 
    xhr.onload = function (e) {
        if (this.status == 200) {
            //console.log('Conversion to PDF completed ok.');
 
            var blob = new Blob([this.response], { type: 'application/pdf' });
            var url = window.URL || window.webkitURL;
            var fileURL = url.createObjectURL(blob);
            //window.location.href = fileURL;
 
            //console.log('File url: ' + fileURL);
 
            var fileName = "";
            fileName = trackObjects[SeqID].title+".pdf"
            if (fileName=="") {
                fileName = "InstancyCourse.pdf";
            }
 
            if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                // This is for IE browsers, as the alternative does not work
                window.navigator.msSaveBlob(blob, fileName);
            }
            else {
                // This is for Chrome, Firefox, etc.
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                a.href = fileURL;
                a.download = fileName;
                a.click();
            }
            $("#" + loaderId).remove();
        }
        else {
            //console.log("An error occurred during conversion to PDF: " + this.status);
            $("#" + loaderId).remove();
            alert("An error occurred during conversion to PDF.\nStatus code: " + this.status + ", Error: " + String.fromCharCode.apply(null, new Uint8Array(this.response)));
        }
    };
 
    xhr.send(JSON.stringify(params));
}
function getAllPagesAsHTML() {
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
             getAllPagesAsHTML();
         }
         else {
             if ($('#savePDFLoader').length <= 0) {
                 showPDFDownloader();
             }
			$.ajax({
				url: (getLangRef(selectedLanguage) == "")? getPageByIndex(currPrintPageCnt).url:getLangRef(selectedLanguage)+"/"+getPageByIndex(currPrintPageCnt).url,
				//url: getPageByIndex(currPrintPageCnt).url,
                 type: 'GET',
                 dataType: 'html',
                 beforeSend: function () {

                 },
                 success: function (data, textStatus, xhr) {
                     try {
                         var tempdata = $(data.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, ""));

                         $(tempdata).find("audio,video").each(function (i) {
                             $(this).trigger("pause");
                             $(this).removeAttr("autoplay");
                         });
                         var tempdata = filteredDataToPDF(tempdata);
						if (trackObjects[SeqID].singleqtnperpage == "yes"){
						if(getPageByIndex(currPrintPageCnt).iscoao == "co"){
						   var data = GetUpdatedData(tempdata);
						   var htmlTr=$("<tr class='Prow'>");
						   var htmlTd = $("<td>");
						   var htmlTr = GetPageBGForPdfRow(htmlTr, data);
						   $(htmlTd).append(data);
						   $(htmlTr).append(htmlTd);
                            // to write Course Title at top
						   if ($(FullCourseHTML).find('tr.Prow').length <= 1) {
						      // $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><h2 style='text-align:center'>" + trackObjects[SeqID].title + "</h2></td></tr></br>");
						       $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:30px;width:100%'></div></td></tr>");
						   }
						   else {
						       if ($(tempdata).find('.resize-div').length > 0)
						       $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:50px;width:100%'></div></td></tr>");
						   }
						   var pageObject = getPageByIndex(currPrintPageCnt);
						   //if ($(tempdata).find('.resize-div').length > 0)
						   $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow titlerow'><td><div id='" + pageObject.qPageId + "' style='font-size:16px;font-weight:bold'><span >Page " + (pageObject.pageNumber + 1) + "</span>: " + pageObject.title + "</div><div style='height:20px;width:100%'></div></td></tr>");
						   $(FullCourseHTML).find("tr.Prow:last").after(htmlTr);
                         currPrintPageCnt++;
                         getAllPagesAsHTML();
						} else {
						    var data = GetUpdatedData(tempdata);
						    var htmlTr = $("<tr class='Prow'>");
						    var htmlTd = $("<td>");
						    var htmlTr = GetPageBGForPdfRow(htmlTr, data);
						    $(htmlTd).append(data);
						    $(htmlTr).append(htmlTd);
						    // to write Course Title at top
						    if ($(FullCourseHTML).find('tr.Prow').length <= 1) {
						       // $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><h2 style='text-align:center'>" + trackObjects[SeqID].title + "</h2></td></tr></br>");
						        $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:30px;width:100%'></div></td></tr>");
                            }
						    else {
						        if ($(tempdata).find('.resize-div').length > 0)
						        $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:50px;width:100%'></div></td></tr>");
                            }
						    var pageObject = getPageByIndex(currPrintPageCnt);
						    //if ($(tempdata).find('.resize-div').length > 0)
						    $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow titlerow'><td><div id='" + pageObject.qPageId + "' style='font-size:16px;font-weight:bold'><span >Page " + (pageObject.pageNumber + 1) + "</span>: " + pageObject.title + "</div><div style='height:20px;width:100%'></div></td></tr>");
						    $(FullCourseHTML).find("tr.Prow:last").after(htmlTr);
                         currPrintPageCnt++;
                         getAllPagesAsHTML();
							}                         	 
					 }
						else {
						    var data = GetUpdatedData(tempdata);
						    var htmlTr = $("<tr class='Prow'>");
						    var htmlTd = $("<td>");
						    var htmlTr = GetPageBGForPdfRow(htmlTr, data);
						    $(htmlTd).append(data);
						    $(htmlTr).append(htmlTd);
						    // to write Course Title at top
						    if ($(FullCourseHTML).find('tr.Prow').length <= 1) {
						        //$(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><h2 style='text-align:center'>" + trackObjects[SeqID].title + "</h2></td></tr></br>");
						        $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:30px;width:100%'></div></td></tr>");
                            }
						    else {
						        if ($(tempdata).find('.resize-div').length > 0)
						        $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:50px;width:100%'></div></td></tr>");
                            }
						    var pageObject = getPageByIndex(currPrintPageCnt);
						   // if ($(tempdata).find('.resize-div').length > 0)
						    $(tmphtmlTd).append("<tr class='Prow titlerow'><td><div id='" + pageObject.qPageId + "' style='font-size:16px;font-weight:bold'><span >Page " + (pageObject.pageNumber + 1) + "</span>: " + pageObject.title + "</div><div style='height:20px;width:100%'></div></td></tr>");
						    $(FullCourseHTML).find("tr.Prow:last").after(htmlTr);
                         currPrintPageCnt++;
                         getAllPagesAsHTML();
						 }
                     }
                     catch (e) { $("#" + loaderId).remove(); }
                 },
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
			    $("#" + loaderId).remove();
			    alert("Status: " + textStatus); alert("Error: " + errorThrown);
			}
             });
         }
     } else {
		 var tempdiv=$("<div>");
		 $(tempdiv).append(FullCourseHTML);
		 var FinalHTML;
         //handling old content
         try {
             if ($(tempdiv).find('.resize-div').length > 0)
                 FinalHTML = $(tempdiv).html() + styleData;
             else
                 FinalHTML = oldContentFixedStyles+ $(tempdiv).html();
             if ($(FinalHTML).find('.resize-div').length <= 0) {
                 FinalHTML = FinalHTML.replace(/absolute/g, 'static');
                 FinalHTML = FinalHTML.replace(/relative/gi, 'static');
                 $(FinalHTML).find('div[contenttype="text"]').css({ 'height': '100%' });
                 $(FinalHTML).find('.titlerow').attr('style','display:none');
             }
         } catch (e) {

         }
         if (outputMode == 'print') {
             printThisHTML(PagesIndexList + FinalHTML);
             $("#" + loaderId).remove();
         } else
             SaveAsPdf(PagesIndexList + FinalHTML);
         FinalHTML = "";
         FullCourseHTML = "";
		 currPrintPageCnt = 0;
		 FullCourseHTML = $('<table width="100%" id="savePDF"><tr class="Prow"><td></tr></td></table>');
         return $(tempdiv).html();
     }
 }
function getAllContentAsPDF() {
    var pagecnt = 0;
    currPrintPageCnt = 0;
    if (PagesIndexList == undefined)
    PagesIndexList = GetPagesIndexForPrint();
    if ($('input[name="rdpagerange"]:checked').val() == 1) {
        pagecnt = getTotalPageInObject(SeqID);
        getAllPagesAsHTML();
    }
    if ($('input[name="rdpagerange"]:checked').val() == 2) {
        if ($('#txtslidefrom').val() == "") {
            alert("Please select the starting page for print.");
            return false;
        }
        if (($('#txtslideto').val() == "")) {
            alert("Please select the end page for print.");
            return false;
        }
        currPrintPageCnt = $('#txtslidefrom').val() - 1;
        getAllPagesAsHTML();
    }
    if ($('input[name="rdpagerange"]:checked').val() == 3) {
        var str = $('#txtspecific').val();
        if (str == "") {
            alert("Please select the page number for print.");
            return false;
        }
        var strArray = str.split(',');
        var pagesStr = [];
        for (var i = 0; i < strArray.length; i++) {
            var strsp = strArray[i];
            if (strsp.indexOf("-") != -1) {
                var stplit = strsp.split('-');
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
        if (parseInt(pagesStr[0]) <= 0 || parseInt(pagesStr[pagesStr.length - 1]) > totalPages) {
            alert("Specified page range should be between 1 and " + totalPages);
            return false;
        }
        getpageAsPDF();
    }
}
function getpageAsPDF() {
    var pagecnt;
    var pagenumber;
    pagecnt = pagesStr.length;
    if (currPrintPageCnt < pagecnt) {
        pagenumber = pagesStr[currPrintPageCnt] - 1;
        if (getPageByIndex(currPrintPageCnt).type.toLowerCase() == 'summary') {
            currPrintPageCnt++;
            getpageAsPDF();
        }
        else {
            if ($('#savePDFLoader').length <= 0) {
                showPDFDownloader();
            }
            $.ajax({
                url: (getLangRef(selectedLanguage) == "") ? getPageByIndex(pagenumber).url : getLangRef(selectedLanguage) + "/" + getPageByIndex(pagenumber).url,
                type: 'GET',
                dataType: 'html',
                beforeSend: function () {

                },
                success: function (data, textStatus, xhr) {
                    try {
                        var tempdata = $(data.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, ""));
                        $(tempdata).find("audio,video").each(function (i) {
                            $(this).trigger("pause");
                            $(this).removeAttr("autoplay");
                        });
                        var tempdata = filteredDataToPDF(tempdata);
                                var data = GetUpdatedData(tempdata);
                                var htmlTr=$("<tr class='Prow'>");
                                var htmlTd = $("<td>");
                                var htmlTr = GetPageBGForPdfRow(htmlTr, data);
                                $(htmlTd).append(data);
                                $(htmlTr).append(htmlTd);
                                // to write Course Title at top
                                if ($(FullCourseHTML).find('tr.Prow').length <= 1) {
                                   // $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><h2 style='text-align:center'>" + trackObjects[SeqID].title + "</h2></td></tr></br>");
                                    $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:30px;width:100%'></div></td></tr>");
                                }
                                else {
                                    if ($(tempdata).find('.resize-div').length > 0)
                                    $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:50px;width:100%'></div></td></tr>");
                                }
                                var pageObject = getPageByIndex(pagenumber);
                                //if ($(tempdata).find('.resize-div').length > 0)
                                $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow titlerow'><td><div id='" + pageObject.qPageId + "' style='font-size:16px;font-weight:bold'><span >Page " + (pageObject.pageNumber + 1) + "</span>: " + pageObject.title + "</div><div style='height:20px;width:100%'></div></td></tr>");
                                $(FullCourseHTML).find("tr.Prow:last").after(htmlTr);
                        currPrintPageCnt++;
                        getpageAsPDF();
                    }
                    catch (e) { $("#" + loaderId).remove(); }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $("#" + loaderId).remove();
                    alert("Status: " + textStatus); alert("Error: " + errorThrown);
                }
            });
        }

    } else {
        var tempdiv = $("<div>");
        $(tempdiv).append(FullCourseHTML);
        var FinalHTML;
        //handling old content
        try {
            if ($(tempdiv).find('.resize-div').length > 0)
                FinalHTML = $(tempdiv).html() + styleData;
            else
                FinalHTML = oldContentFixedStyles + $(tempdiv).html();
            if ($(FinalHTML).find('.resize-div').length <= 0) {
                FinalHTML = FinalHTML.replace(/absolute/g, 'static');
                FinalHTML = FinalHTML.replace(/relative/gi, 'static');
                $(FinalHTML).find('div[contenttype="text"]').css({ 'height': '100%' });
                $(FinalHTML).find('.titlerow').attr('style', 'display:none');
            }
        } catch (e) {

        }
        if (outputMode == 'print') {
            printThisHTML(FinalHTML);
            $("#" + loaderId).remove();
        } else
            SaveAsPdf(FinalHTML);
        FinalHTML = "";
        FullCourseHTML = "";
        currPrintPageCnt = 0;
        FullCourseHTML = $('<table width="100%" id="savePDF"><tr class="Prow"><td></tr></td></table>');
        return $(tempdiv).html();
    }
}
function filteredDataToPDF(tempdata) {
    //to convert Bootsrtap Div as table
    $(tempdata).find(".row").each(function (i) {
        var RowParent = $(this).parent();
        var DupRow = $(this).clone();
        $(this).remove();
        var RowTable = $('<table width="100%" style="table-layout: fixed;">');
        var RowTR = $('<tr>');
        $(DupRow).children().each(function () {
            var RowTD = $('<td height="100%">');
            $(this).css('height', '100%');
            $(this).css('width', '98%');
            $(RowTD).append($(this));
            //to convert inside BS rows 
            $(this).find(".row").each(function (i) {
                var RowParent = $(this).parent();
                var DupRow = $(this).clone();
                $(this).remove();
                var RowTable = $('<table width="100%" style="table-layout: fixed;">');
                var RowTR = $('<tr>');
                $(DupRow).children().each(function () {
                    var RowTD = $('<td height="100%">');
                    $(this).css('height', '100%');
                    $(this).css('width', '98%');
                    $(RowTD).append($(this));
                    $(RowTR).append(RowTD);
                });
                $(RowTable).append(RowTR);
                $(RowParent).append(RowTable);
            });
            //end
            $(RowTR).append(RowTD);
        });
        $(RowTable).append(RowTR);
        $(RowParent).append(RowTable);
    });
    //to handle images --update with full url
    $(tempdata).find('img').each(function () {
        $(this).attr('src', $(this)[0].src)
    });
    //rating containers iimages
    $(tempdata).find("[id^='ratingmainContainer']").each(function () {
        $(this).width('100%');
    });
    //to write layer content in PDF
    $(tempdata).find(".layers").each(function (i) {
        $(this).removeAttr("style");
       // $(this).prepend("<h3 style='text-align: center'>layer Content</h3>");
        var DupLayer = $(this).clone();
        var layerParent = $(this).closest('.content');
        var temLayer = $('<div>');
        $(this).find('div[id^="closeBtn"]').remove();
        $(temLayer).append(DupLayer);
        $(this).remove();
        $(layerParent).append("<tr><td>" + $(temLayer).html() + "</td><td>");
    });
    $(tempdata).find(".layers").remove();
    //to remove text styles on content
    $(tempdata).find('div[contenttype="text"]').attr('style', '');
    $(tempdata).find('div[contenttype="text"]').each(function () {
        $(this).find('*').attr('style', '');
       
    });
    //to remove audio files
    $(tempdata).find('div[contenttype="audio"]').attr('style', '');
    $(tempdata).find('div[contenttype="audio"]').remove();
    $(tempdata).find('div#optionsContainer').children().each(function () {
        $(this).find('div:first').attr('style', 'position: ABSOLUTE;line-height: initial;');
        $(this).find('div:first').attr('class', 'pdfOP');
    });

    $(tempdata).find('div[contenttype="text"]').css({ 'height': '100%' }, { 'color': '#000' });
    $(tempdata).find("div[title='Close']").remove();
    $(tempdata).find("div[title='Close']").attr('style','display:none');
    
    //to write tabs content in PDF
    $(tempdata).find("[id^='tab_']").each(function (i) {
        $(this).removeAttr("style");
            $(this).prepend("<h2 style='text-align: center'>" + $(tempdata).find('li a[href=#' + $(this).attr('id') + ']').text() + "</h2>");
    });
    //to update single page table backgeround image
    if (trackObjects[SeqID].singleqtnperpage == "no") {
        $(tempdata).find("[id^='instmaintable']").each(function () {
            if ($(this).css('background-image') != 'url("")' && $(this).css('background-image') != undefined && $(this).css('background-image') != "") {
                var clonedObj = $(this).clone();
                var tempdiv = $('<div>');
                $(tempdiv).append(clonedObj);
                var htmlstring = $(tempdiv).html();
                if (($("#" + $(this).attr("id")).css('background-image')) != undefined) {
                    //if it is in current document
                    htmlstring = htmlstring.replace(($(this).css('background-image')).split('"')[1], ($("#" + $(this).attr("id")).css('background-image')).split('"')[1]);
                } else {
                    //if not in current document
                    var tempid = Math.round(new Date().getTime() / 1000);
                    htmlstring = htmlstring.replace($(htmlstring).attr("id"), tempid);
                    $('body').append($(htmlstring));
                    if ($('#' + tempid).css('background-image')!=undefined)
                        htmlstring = htmlstring.replace(($(this).css('background-image')).split('"')[1], ($('#' + tempid).css('background-image')).split('"')[1]);
                    $('#' + tempid).remove();
                }
                var UpdatedTable = $(htmlstring);
                $(this).replaceWith(UpdatedTable);
            }
        });
    }
    $(tempdata).find('*').css('line-height', 'initial');
    $(tempdata).find('div[id^="horizontalTab_"]').each(function () {
        $(this).find('ul').removeAttr('class');
        $(this).find('li').removeAttr('class');
        $(this).find('li').each(function () {
            $(this).find('a').html($(this).find('a').text());
        });
        $(this).find('div.r-tabs-accordion-title').remove();
        $(this).find('div.r-tabs-accordion-title').attr('style','display:none');
        $(this).find('li').attr('class', 'PDFTabLi');
        $(this).find('li').attr('style', 'margin:10px;font-size: 18px;');
    });
    $(tempdata).find('.ost').show();

    if ($(tempdata).find('.resize-div').length > 0) {
        $(tempdata).find('.resize-div div[type="image"] img').width('100%');
        $(tempdata).find('.resize-div img[type="image"]').width('100%');
        //for new content
    } else {
        //for old conetnt
        $(tempdata).find('img').each(function () {
            $(this).parents('div[entranceanimation]').width('600px');
        });
        $(tempdata).find('img').width("");
        $(tempdata).find('img').height("");
        $(tempdata).find('img').addClass("img-responsive");
    }
    //$(tempdata).append($(styleData));
    return tempdata;
}
function GetPageBGForPdfRow(htmlTr, data) {
    //to find respective page background style
    var bgindex = data.indexOf('instcontentbg');
    if (bgindex != -1) {
        var tempstring = data.substring(bgindex - 15, bgindex + 400);
        var styleDiv = $("<div class='instcontentbg'>");
        var styleclass=tempstring.split('<style>')[1].split('</style>')[0]
        $(styleDiv).append($('<style>' + styleclass + '</style>'));
        $('body').append(styleDiv);
        var bgimage = "none";
        if (styleclass.indexOf('background-image') != -1) {
            bgimage = $(styleDiv).css('background-image');
        }
        var bgcolor = "";
        if (styleclass.indexOf('background-color') != -1) {
            bgcolor = $(styleDiv).css('background-color')
        }
        $(htmlTr).css('background-size', $(styleDiv).css('background-size'));
        $(htmlTr).css('background-repeat', $(styleDiv).css('background-repeat'));
        $(htmlTr).css('background-image', bgimage);
        $(htmlTr).css('background-color', bgcolor);
        $(styleDiv).remove();
        return htmlTr;
    }
}
function GenerateSinglePagePDF(type) {
    outputMode = type;
    if ($('#savePDFLoader').length <= 0) {
        showPDFDownloader();
    }
    if (PagesIndexList == undefined)
        PagesIndexList = GetPagesIndexForPrint();
    var htmlTr = $("<tr class='Prow'>");
    var htmlTd = $("<td>");
    var data = ($(".SectionDiv").html()).replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "");
    var PageHTML = filteredDataToPDF($(data), SeqID);
    $(htmlTd).append(PageHTML);
    $(htmlTr).append(htmlTd);
    $(htmlTr).css('background-size', $('#content').css('background-size'));
    $(htmlTr).css('background-repeat', $('#content').css('background-repeat'));
    $(htmlTr).css('background-image', $('#content').css('background-image'));
    $(htmlTr).css('background-color', $('#content').css('background-color'));
    $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><h2 style='text-align:center'>" + trackObjects[SeqID].title + "</h2></td></tr></br>");
    $(FullCourseHTML).find("tr.Prow:last").after("<tr class='Prow'><td><div style='height:30px;width:100%'></div></td></tr>");
    $(FullCourseHTML).find("tr.Prow:last").after(htmlTr);
    var tempdiv = $("<div>");
    $(tempdiv).append(FullCourseHTML);
    var FinalHTML;
    //handling old content
    try {
        if ($(tempdiv).find('.resize-div').length > 0)
            FinalHTML = $(tempdiv).html() + styleData;
        else
            FinalHTML = oldContentFixedStyles + $(tempdiv).html();
        if ($(FinalHTML).find('.resize-div').length <= 0) {
            FinalHTML = FinalHTML.replace(/absolute/g, 'static');
            FinalHTML = FinalHTML.replace(/relative/gi, 'static');
            $(FinalHTML).find('div[contenttype="text"]').css({ 'height': '100%' });
            $(FinalHTML).find('.titlerow').attr('style', 'display:none');
        }
    } catch (e) {

    }
    FinalHTML= InsertPageTitlesForSinglePageContent(FinalHTML);
    if (outputMode == 'print') {
        printThisHTML(PagesIndexList + FinalHTML);
        $("#" + loaderId).remove();
    } else
        SaveAsPdf(PagesIndexList + FinalHTML);
    FinalHTML = "";
    FullCourseHTML = "";
    FullCourseHTML = $('<table width="100%" id="savePDF"><tr class="Prow"><td></tr></td></table>');
}
function showPDFDownloader() {
    var Loadingicon;
    try {
        Loadingicon = PageLoadingIcon;
    } catch (e) {

    }

    if (Loadingicon != "" && Loadingicon != undefined) {
        var classname = "fa fa-spin " + Loadingicon;
    }
    else {
        Loadingicon = "fa-spinner";
        var classname = "fa fa-spin " + Loadingicon;
    }
    var loaderDiv = $('<div>');
    $(loaderDiv).attr('id', loaderId);
    $(loaderDiv).css({ 'position': 'absolute', 'z-index': '99999999999', 'width': '100%', 'height': '100%', 'background': 'rgba(0,0,0,0.3)' });
    $(loaderDiv).append('<i class="' + classname + '" style="top: 48%;position: absolute;left: 48%;font-size: 30px;color:black;"></i>');
    $('body').prepend(loaderDiv);
}
$(function () {
    var stylesheets = ['styles/style.css', 'styles/theme.css', 'styles/skin_style.css'];
    $(stylesheets).each(function (i) {
        $.ajax({
            url: stylesheets[i],
            dataType: "text",
            success: function (cssText) {
                styleData += '<style>' + cssText + '</style>';
                // cssText will be a string containing the text of the file
            }
        })
    });
});
function printThisHTML(data, type) {
    var mywindow = window.open('', 'Print content', 'width=500px,height=auto,top=0,left=0,toolbars=no,scrollbars=yes,status=no,resizable=yes');
    $(mywindow).find("document").empty();
    mywindow.document.write('<html><head><title></title>');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/jquery.treeview.css" /> ');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/style.css" >');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/jquery.loader.min.css" >');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/skin_style.css" />');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/Popup/jquery-ui-1.12.1.custom.min.css" />');
    //mywindow.document.write('<link href="styles/matchgame.css" rel="stylesheet" type="text/css"/>');
    mywindow.document.write('<script src="scripts/jquery-1.7.2.js" ></script>');
    mywindow.document.write('<script src="scripts/CommonSkin.js" ></script>');
    //mywindow.document.write('<link href="styles/pink.flag/jplayer.pink.flag.css" rel="stylesheet" type="text/css" />');
    //mywindow.document.write('<script type="text/javascript" src="scripts/jquery.jplayer.min.js"></script>');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/tabs/tab-style.css" />');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/tabs/responsive-tabs.css" />');
    mywindow.document.write('<script src="scripts/tabs/jquery.responsiveTabs.js" type="text/javascript"></script>');
    //mywindow.document.write('<link rel="stylesheet" type="text/css" href="styles/videostyle.css" />');
    //mywindow.document.write('<style type="text/css">');
    //mywindow.document.write('@media print{');
    //mywindow.document.write('html, body {');
    //mywindow.document.write('width: 100%;');
    //mywindow.document.write('height: 90%;');
    //mywindow.document.write('}');
    //mywindow.document.write('}');
    //mywindow.document.write('.print {');
    //mywindow.document.write('page-break-after: always;');
    //mywindow.document.write('}');
    //mywindow.document.write('</style>');
    mywindow.document.write('</head>');
    mywindow.document.write('<body>');
    mywindow.document.write(data);
    mywindow.document.write('<script>');
    mywindow.document.write('$("img").css("height", "auto");');
    mywindow.document.write('$("svg").parent().css("height", "auto");');
	mywindow.document.write('setTimeout(function(){');
    mywindow.document.write('window.document.close();');
    mywindow.document.write('window.print();');
    mywindow.document.write('window.close();');
	mywindow.document.write('},500);');
    mywindow.document.write('</script>');
    mywindow.document.write('</body></html>');
    printAllContnet = "";
    currPrintPageCnt = 0;
    return true;

}
function GetPagesIndexForPrint() {
    var indexstyle = "<style>";
    indexstyle += ".mainIndex, .topicIndex, .subTopicIndex{ list-style: none;} #CourseIndex a {text-decoration: none;}";
    indexstyle += " .mainIndex li, .topicIndex li, .subTopicIndex li{margin: 6px;font-weight: bold;}.topicTitle {font-weight: bold;font-size: 16px;}";
    indexstyle += "</style>";
    PagesIndexList = $('<div id="CourseIndex">');
   //$(PagesIndexList).append("<div style='text-align:center;height:50px;'></div>");
    $(PagesIndexList).append("<h2 style='text-align:center;margin: 36px;font-size:20px;font-weight:bold;'>" + trackObjects[SeqID].title + "</h2>");
    $(PagesIndexList).append("<div style='font-size: 18px;margin-left: 47px;font-weight:bold;'>Table of contents :</div>");
    var Index = $('<ul class="mainIndex">');
    var topicIndex = $('<ul class="topicIndex">');
    var subTopicIndex = $('<ul class="subTopicIndex">');
    for (var i = 0; i < pages.length; i++) {
        var totalpagesObj = pages[i];
        $(totalpagesObj).each(function () {
            if ($(this)[0] != undefined) {
                if ($(this)[0].type != 'topic') {
                    $(Index).append("<li class='indexPageTitle'>" + "<a href='#" + $(this)[0].qPageId + "'>" + $(this)[0].title + "</a></li>");
                } else {
                    $(Index).append("<li class='indexTopic'>" + "<div class='topicTitle'>" + $(this)[0].title + ":</div></li>");
                    $($(this)[0].pages).each(function () {
                        if ($(this)[0].type != 'topic') {
                            $(topicIndex).append("<li class='indexPageTitle'>" + "<a href='#" + $(this)[0].qPageId + "'>" + $(this)[0].title + "</a></li>");
                        } else {
                            $(topicIndex).append("<li class='indexTopic'>" + "<div class='topicTitle'>" + $(this)[0].title + ":</div></li>");
                            $($(this)[0].pages).each(function () {
                                $(subTopicIndex).append("<li class='indexPageTitle'>" + "<a href='#" + $(this)[0].qPageId + "'>" + $(this)[0].title + "</a></li>");
                            });
                           // var tempSubtopicLi = $("<li>");
                            var subtopicDiv = $('<div>');
                            $(subtopicDiv).append(subTopicIndex);
                            //$(tempSubtopicLi).append(subtopicDiv);
                            $(topicIndex).find("li:last").append(subtopicDiv);
                            subTopicIndex = $('<ul class="subTopicIndex">');
                        }
                    });
                   // var tempLi = $("<li>");
                    var topicDiv = $('<div>');
                    $(topicDiv).append(topicIndex);
                    $(Index).find("li:last").append(topicDiv);
                   // $(Index).append(tempLi);
                    topicIndex = $('<ul class="topicIndex">');
                }
            }
        });
    }
    $(PagesIndexList).append(Index);
   // console.log($(PagesIndexList).html());
    var tempDIV = $('<div>');
    $(tempDIV).append(PagesIndexList);
    //console.log($(tempDIV).html() + indexstyle)
    return $(tempDIV).html() + indexstyle;
}
function InsertPageTitlesForSinglePageContent(finalhtml) {
    var cloneHTML = $(finalhtml).clone();
    $(cloneHTML).find('table[id^="instmaintable"]').each(function () {
        if ($(this).attr('id') != undefined) {
            var pageNumber = ($(this).attr('id')).split('instmaintable')[1];
            var pageObject = getPageByIndex(Number(pageNumber) - 1);
            if (pageObject != undefined)
            $(this).find("tr:first").before("<tr class='Prow titlerow'><td><div id='" + pageObject.qPageId + "' style='font-size:16px;font-weight:bold'><span >Page " + (pageObject.pageNumber + 1) + "</span>: " + pageObject.title + "</div><div style='height:20px;width:100%'></div></td></tr>");
        }
    });
    var tempdiv = $("<div>");
    $(tempdiv).append(cloneHTML);
    return $(tempdiv).html();
}