/**
 * Created by Nicole on 9/7/2015.
 */


/*$.fn.splitSomeLines = function(){

    return this.replace(/\r\n|\r|\n/g, '~~').split('~~');

};*/

/*
This example of turning text green works. Definitely define my reusable function outside of my document ready one.*/
$.fn.yellow = function() {
    this.css( "color", "yellow" );
};



$(function(){



    $("#generate").on("click", function(){

        var storiesInput = $("#topStories").val().replace(/\r\n|\r|\n/g, '~~').split('~~');
        var newsInput = $("#topNews").val().replace(/\r\n|\r|\n/g, '~~').split('~~');
        var blogsInput =  $("#blogs").val().replace(/\r\n|\r|\n/g, '~~').split('~~');
        var editorsNote = $("#editorsNote").val();

        alert(storiesInput);
        //alert(newsInput)


        /*messing around with for each.
        var arrayStories = [];
        var arrStrCount = 0;
         */

        var storiesHTML = articles(storiesInput);

        alert(storiesHTML);
/*
     var storiesLoop =  $.each(storiesInput, function(index, value) {

        storiesHTML += "\<table align=\"left\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td style=\"font-size:14px; font-family:Arial, Helvetica, sans-serif; color: #000000;\"\>\<a style=\"color:#0b486c; text-decoration:none; font-weight:bold;\" href=\""+ value +"\?src=wnl_edit_bom_weekly&uac=%%uac%%&impID=%%JOBID%%&faf=1\"\>"+ value +"\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\" valign=\"top\" style=\"font-size:1px; line-height:15px;\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\> \<\/tr\>\<\/table\>";

index+3;

        });
*/

        var storiesLength = storiesInput.length;
        var title = "";
        var titleURL = "";

        for(var i=0; i<storiesLength; i+=3){

            title = storiesInput[i];
            titleURL = storiesInput[i+1];

            alert(title + "-" + titleURL);
            storiesHTML += "\<table align=\"left\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td style=\"font-size:14px; font-family:Arial, Helvetica, sans-serif; color: #000000;\"\>\<a style=\"color:#0b486c; text-decoration:none; font-weight:bold;\" href=\""+ titleURL +"\?src=wnl_edit_bom_weekly&uac=%%uac%%&impID=%%JOBID%%&faf=1\"\>"+ title +"\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\" valign=\"top\" style=\"font-size:1px; line-height:15px;\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\> \<\/tr\>\<\/table\>";

        }




        /*This showed the html code is being stored in storiesHTML. Next test to see if it can be concatenated. */

/* All of this below works
        var displayStories = storiesInput[0] + "<br>" + storiesInput[1] + "<br><br>" + storiesInput[3] + "<br>" + storiesInput[4] + "<br><br>" + storiesInput[6] + "<br>" + storiesInput[7]+ "<br><br>" + storiesInput[9] + "<br>" + storiesInput[10] + "<br><br>" + storiesInput[12] + "<br>" + storiesInput[13] + "<br><br>" + storiesInput[15] + "<br>" + storiesInput[16] + "<br><br>" + storiesInput[18] + "<br>" + storiesInput[19] + "<br><br>" + storiesInput[21] + "<br>" + storiesInput[22] + "<br><br>";

        var displayNews = newsInput[0] + "<br>" + newsInput[1] + "<br><br>" + newsInput[3]+ "<br>" + newsInput[4]+ "<br><br>" + newsInput[6]+ "<br>" + newsInput[7]+ "<br><br>" + newsInput[9]+ "<br>" + newsInput[10]+ "<br><br>" + newsInput[12]+ "<br>" + newsInput[13] + "<br><br>";

        var displayBlogs = blogsInput[0] + "<br>" + blogsInput[1] + "<br>" + blogsInput[2]+ "<br><br>" + blogsInput[4]+ "<br>" + blogsInput[5]+ "<br>" + blogsInput[6]+ "<br><br>";

var displayEditorsNote = editorsNote;
*/





        $("#displayContent").yellow();
        $("#displayContent").css("width", "auto");
        $("#displayContent").css("height", "auto");

    $("#displayContent").html(storiesHTML);


    });


});