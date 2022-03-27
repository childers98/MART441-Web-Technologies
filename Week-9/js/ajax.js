$(document).ready(function () {
           $("button").click(function () {
               $("#meteoriteInformation").load("data/meteoriteInfo.txt", fadeText);
           });
       });

       function fadeText()
       {
           $("#meteoriteInformation").fadeOut("slow").fadeIn("slow");
       }
