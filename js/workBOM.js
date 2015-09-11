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



function cleanInput(lines){

    return lines.replace(/\r\n|\r|\n/g, '~~').split('~~');

}

/* Work on a plugin to reduce repeated code*/
function articlesEmail(userInput) {

            var articlesHTML = "";

            for(var i = 0; i < userInput.length; i+=3){
                articlesHTML += "\<table align=\"left\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td style=\"font-size:14px; font-family:Arial, Helvetica, sans-serif; color: #000000;\"\>\<a style=\"color:#0b486c; text-decoration:none; font-weight:bold;\" href=\"" + userInput[i+1] + "\?src=wnl_edit_bom_weekly&uac=%%uac%%&impID=%%JOBID%%&faf=1\"\>" + userInput[i] + "\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\" valign=\"top\" style=\"font-size:1px; line-height:15px;\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\> \<\/tr\>\<\/table\>";
            }

            return articlesHTML;

}





$(function(){



    $("#generate").on("click", function(){

        var storiesInput = cleanInput($("#topStories").val());
        var newsInput = cleanInput($("#topNews").val());
        var blogsInput =  cleanInput($("#blogs").val());
        var editorsNote = $("#editorsNote").val();

        alert(storiesInput);
        alert(newsInput);
        alert(blogsInput);


        var storiesHTML = articlesEmail(storiesInput);
        var newsHTML = articlesEmail(newsInput);
        var blogsHTML = blogsInput;



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

    $("#displayContent").html(storiesHTML + "<br><br>" + newsHTML + "<br><br>" + blogsHTML);


    });







    $("#resetButton").on("click", function(){

        $("#displayContent").html(" ");
        $("#bomFrom").reset();

    });




   /*

Tweak javascript to jquery

        function eraseDiv() {


            var displayField = document.getElementById('newSplit');

            //Reset the display area to an empty square.
            displayField.innerText = " ";

            var form = document.getElementById('generateForm');

            //Reset form values.
            form.reset();

            //Reset the display area size to the original values.
            displayField.style.width = "600px";
            displayField.style.height = "400px";

        }

        var resetButton = document.getElementById('resetButton');
        resetButton.onclick = eraseDiv;


    }

     */





});