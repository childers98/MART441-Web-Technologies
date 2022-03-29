$(document).ready(function () {
           $("button").click(function () {
               //change to dots?
               $("#meteoriteInformation").load("data/meteoriteInfo.txt", fadeText);

           });
       });

       function fadeText()
       {
           $("#meteoriteInformation").fadeOut("slow").fadeIn("slow");
       }
