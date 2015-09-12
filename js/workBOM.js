/**
 * Created by Nicole on 9/7/2015.
 */

/*Split up lines of code*/
function cleanInput(lines){

    return lines.replace(/\r\n|\r|\n/g, '~~').split('~~');

}


/*Format the blog links we receive in the document: http://boards.medscape.com/forums?128@834.nm0TaDmeO3k@.2a7caf92!comment=1 to this http://www.medscape.com/px/discussions/2a7ca1bf!comment=1 */
function formatBlogLink(link){

var newLink = link.match(/\d{1}\w{7}/g);
return "http://www.medscape.com/px/discussions/" + newLink + "!comment=1";

}


/*Loop through input and spit it out in the HTML format stated below.*/
function articlesEmail(userInput) {

            var articlesHTML = "";

            for(var i = 0; i < userInput.length; i+=3){
                articlesHTML += "\<a style=\"color:#0b486c; text-decoration:none; font-weight:bold;\" href=\"" + userInput[i+1] + "\?src=wnl_edit_bom_weekly&uac=%%uac%%&impID=%%JOBID%%&faf=1\"\>" + userInput[i] + "\<\/a\>\<br\>\<br\>";
            }

            return articlesHTML;

}


/*Loop through input and spit it out in the HTML format stated below.*/
function blogsEmail(userInput) {

    var blogsHTML = "";

    for(var i = 0; i < userInput.length; i+=4){
        blogsHTML += "\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td style=\"font-size:14px; font-family:Arial, Helvetica, sans-serif; color: #000000;\"\>\<a style=\"color:#0b486c; text-decoration:none;\" href=\"" + formatBlogLink(userInput[i+2]) +"\?src=wnl_edit_bom_weekly&uac=%%uac%%&impID=%%JOBID%%&faf=1\"\>\<strong\>"+ userInput[i] +"\<\/strong\>\<\/a\>\<br\>\<font style=\"font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#333333;\"\>"+ userInput[i+1] +"\<\/font\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\" valign=\"top\" style=\"font-size:1px; line-height:15px;\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>";
    }

    return blogsHTML;

}




$(function(){



    $("#generate").on("click", function(){

        var storiesInput = cleanInput($("#topStories").val());
        var newsInput = cleanInput($("#topNews").val());
        var blogsInput =  cleanInput($("#blogs").val());
        var editorsNote = $("#editorsNote").val();
        var editNoteArticle = $("#editNoteArticle").val();
        var editNoteLink = $("#editNoteLink").val();

        alert(storiesInput);
        alert(newsInput);
        alert(blogsInput);


        var storiesHTML = articlesEmail(storiesInput);
        var newsHTML = articlesEmail(newsInput);
        var blogsDispHTML = blogsEmail(blogsInput);



           var finalBOMHTML = "\<body bgcolor=\"#B2B2B2\" topmargin=\"0\" leftmargin=\"0\" marginheight=\"0\" marginwidth=\"0\" style=\"-webkit-font-smoothing: antialiased;width:100% !important;background:#B2B2B2;-webkit-text-size-adjust:none; padding: 0px; margin: 0px;\"\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td align=\"center\" valign=\"middle\" bgcolor=\"#B2B2B2\"\>\<table width=\"650\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"table\"\>\<tr\>\<td bgcolor=\"#0F5980\"\>\<a href=\"http:\/\/www.medscape.com\?src=wnl_edit_bom_weekly&uac=%%uac%%&impID=%%JOBID%%\"\>\<img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/bom\/template\/v2\/medscape_bom.gif\" alt=\"Medscape Business of Medicine\" width=\"650\" height=\"75\" border=\"0\" class=\"header\" style=\"display:block;\"\>\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"650\" bgcolor=\"#FFFFFF\"\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td height=\"20\" bgcolor=\"#FFFFFF\" class=\"padding2\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td align=\"left\"\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"15\" bgcolor=\"#FFFFFF\" class=\"padding\"\>&nbsp;\<\/td\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:14px;\"\>\<tr\>\<td\>\<!-- Table 1 - Left--\>\<table width=\"100%\" align=\"left\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:14px;\" class=\"table2\"\>\<tr\>\<td height=\"5\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td valign=\"top\" align=\"left\" style=\"font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:18px; font-weight:bold;\"\>Top Stories\<\/td\>\<td valign=\"top\" align=\"right\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#666666; font-weight:bold;\"\>\<span class=\"applelinks2\"\>%%=ContentAreaByName(\"Shared Items\Shared Contents\date\")=%%\<\/span\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\" valign=\"top\" style=\"font-size:1px; line-height:15px;\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td align=\"left\" valign=\"top\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#0b486c;\"\>\<table border=\"0\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" width=\"310\"\>\<tr\>\<td height=\"10\" align=\"center\" valign=\"bottom\"\>\<img height=\"7\" src=\"http:\/\/a1977.g.akamai.net\/f\/1977\/1448\/1d\/webmd.download.akamai.com\/1448\/headers_footers_new\/text_advertisement_top.gif\" width=\"77\" border=\"0\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"10\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"10\" border=\"0\" alt=\"\"\>\<\/td\>\<td\>\<table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td valign=\"top\" with=\"300\" height=\"250\" align=\"right\"\>%%=ContentAreaByName(\"my contents\Medscape News\Medpulse\Business of Medicine MedPulse\medpulse_tower_usmd\")=%%\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"1\" class=\"padding2\" style=\"font-size:1px; line-height:1px;\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>" + storiesHTML +  "\<\/td\>\<\/tr\>\<tr\>\<td valign=\"top\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#0b486c;\"\>   \<table width=\"33%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td height=\"20\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td valign=\"top\"\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td valign=\"top\" width=\"34\"\>\<img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/bom\/template\/icon_news.gif\" width=\"34\" height=\"25\" alt=\"icon_news\" style=\"display:block;\" border=\"0\"\>\<\/td\>\<td width=\"2\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<td valign=\"middle\" style=\"color:#000000; font-size:16px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;\"\>Top News\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>" + newsHTML + "\<table width=\"40%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td height=\"20\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td valign=\"top\"\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td valign=\"top\" width=\"34\"\>\<img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/bom\/template\/icon_blogs.gif\" width=\"34\" height=\"25\" alt=\"icon_blogs\" style=\"display:block;\" border=\"0\"\>\<\/td\>\<td width=\"2\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<td valign=\"middle\" style=\"color:#000000; font-size:16px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;\"\>Blogs\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>" + blogsDispHTML +   "\<\/td\>\<\/tr\>\<tr\>\<td valign=\"top\"\>\<!-- Practice Management --\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td height=\"20\" valign=\"top\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td valign=\"middle\" align=\"left\" bgcolor=\"#0b486c\" style=\"color:#0b486c;\"\>\<TABLE width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<TR\>\<TD width=\"10\" height=\"30\" valign=\"top\"\>\<IMG src=\"http:\/\/img.medscape.com\/pi\/features\/newsletters\/bom\/spacer.gif\" border=\"0\" style=\"display:block;\" width=\"1\" height=\"1\" alt=\"\"\>\<\/TD\>\<TD valign=\"middle\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#ffffff; font-weight:bold;\"\>Editor's Note\<\/TD\>\<TD width=\"10\" valign=\"top\"\>\<IMG src=\"http:\/\/img.medscape.com\/pi\/features\/newsletters\/bom\/spacer.gif\" border=\"0\" style=\"display:block;\" width=\"1\" height=\"1\" alt=\"\"\>\<\/TD\>\<\/TR\>\<\/TABLE\>\<\/td\>\<\/tr\>\<tr\>\<td valign=\"top\" bgcolor=\"#EEEEEE\"\>\<TABLE width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<TR\>\<TD width=\"10\" valign=\"top\" bgcolor=\"#EEEEEE\"\>\<IMG src=\"http:\/\/img.medscape.com\/pi\/features\/newsletters\/bom\/spacer.gif\" border=\"0\" style=\"display:block;\" width=\"1\" height=\"1\" alt=\"\"\>\<\/TD\>\<TD valign=\"top\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000; padding-top:7px; padding-bottom:10px;\" bgcolor=\"#EEEEEE\"\>" + editorsNote + "\"\<a style=\"color:#006699; text-decoration:underline;\" href=\""+ editNoteLink + "\?src=wnl_edit_bom_weekly&uac=%%uac%%&impID=%%JOBID%%&faf=1\"\>" + editNoteArticle + "\<\/a\>\" - \<a href=\"mailto:LKane@webmd.net\" style=\"color:#006699; text-decoration:underline;\"\>Leslie Kane\<\/a\>, Director, Medscape Business of Medicine\<\/TD\>\<TD width=\"10\" valign=\"top\" bgcolor=\"#EEEEEE\"\>\<IMG src=\"http:\/\/img.medscape.com\/pi\/features\/newsletters\/bom\/spacer.gif\" border=\"0\" style=\"display:block;\" width=\"1\" height=\"1\" alt=\"\"\>\<\/TD\>\<\/TR\>\<\/TABLE\>\<\/td\>\<\/tr\>\<\/table\>\<!--AD--\>\<\/td\>\<\/tr\>\<\/table\>\<!-- Table 2 - Right--\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<td width=\"15\" bgcolor=\"#FFFFFF\" class=\"padding\"\>&nbsp;\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"25\" bgcolor=\"#FFFFFF\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td bgcolor=\"#EEEEEE\" class=\"hide\"\>%%=ContentAreaByName(\"Shared Items\Shared Contents\Social_Bar_Phoenix\")=%%\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"20\" bgcolor=\"#DDDDDD\"\>&nbsp;\<\/td\>\<\/tr\>\<tr\>\<td height=\"20\" bgcolor=\"#FFFFFF\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"25\" bgcolor=\"#FFFFFF\" class=\"padding\"\>&nbsp;\<\/td\>\<td align=\"left\" bgcolor=\"#FFFFFF\" style=\"FONT-SIZE: 11px; text-decoration:none; color:#333333; font-family:Arial, Helvetica, sans-serif\" class=\"footertext\"\>\<a href=\"http:\/\/help.medscape.com\" style=\"text-decoration:none; color: #333333; font-family:arial; font-size:11px;\" class=\"footertext\"\>Help\<\/a\> &nbsp;&nbsp;|&nbsp;&nbsp; \<a href=\"https:\/\/profreg.medscape.com\/px\/forgotpassword.do\" style=\"text-decoration:none; color: #333333; font-family:arial; font-size:11px;\" class=\"footertext\"\>Password Assistance\<\/a\> &nbsp;&nbsp;|&nbsp;&nbsp; \<a href=\"https:\/\/profreg.medscape.com\/px\/profile.do\?cid=med\" style=\"text-decoration:none; color: #333333; font-family:arial; font-size:11px;\" class=\"footertext\"\>My Account\<\/a\> &nbsp;&nbsp;|&nbsp;&nbsp; \<a href=\"http:\/\/www.medscape.com\/public\/privacy\" style=\"text-decoration:none; color: #333333; font-family:arial; font-size:11px;\" class=\"footertext\"\>Privacy Policy\<\/a\>\<br\>\<br\>You are receiving this communication because you are a registered member of Medscape.\<br\>The email address associated with your membership is \<A href=\"mailto:%%EMAIL_ADDRESS%%\" style=\"text-decoration:none; color: #333333; font-family:arial; font-size:11px;\" class=\"footertext\"\>%%EMAIL_ADDRESS%%\<\/A\>.\<br\>\<br\>\<a style=\"text-decoration:none; color: #333333; font-family:arial; font-size:11px;\" href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=0&prod=30\" class=\"footertext\"\>Unsubscribe from this newsletter\<\/a\>\<BR\>\<br\>\<a style=\"text-decoration:none; color: #333333; font-family:arial; font-size:11px;\" href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=1&prod=30\" class=\"footertext\"\>Unsubscribe from all Medscape from WebMD newsletters\<\/a\>\<BR\>\<br\>\<span class=\"applelinks\"\>Medscape from WebMD\<BR\>825 Eighth Avenue\<BR\>New York, NY 10019\<\/span\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"20\" bgcolor=\"#FFFFFF\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>\<custom name=\"opencounter\" type=\"tracking\"\>\<\/body\>";




        $("#displayTextContent").css("width", "auto");
        $("#displayTextContent").css("height", "auto");

        $("#displayContent").css("width", "auto");
        $("#displayContent").css("height", "auto");

        $("#displayTextContent").text(finalBOMHTML);

        $("#displayContent").html(finalBOMHTML);


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