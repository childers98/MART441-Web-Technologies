var flowerSelector = "#flower";
var allFlowers = new Array();
class FlowerInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{

    var tulip = new FlowerInfo("#flower", "images/tulip.jpg");
    var viola = new FlowerInfo("#flower", "images/viola.jpg");
    var roses = new FlowerInfo("#flower", "images/roses.jpg");
    var sunflower = new FlowerInfo("#flower", "images/sunflower.jfif")
    allFlowers.push(tulip);
    //allFlowers.push(, viola, roses, sunflower);

}
$(document).ready(function(){
    initializeArray();
    //check that everything is going into the array
    console.log(allFlowers.length);
    console.log(allFlowers[0].toString());
    console.log(allFlowers[0].theSelector);
    console.log(allFlowers[0].theImagePath);

    //switch the image
    //https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery

    // $(allFlowers[0].theSelector).src = allFlowers[0].theImagePath;
    // $("#my_image").attr("src","second.jpg");
    $(allFlowers[0].theSelector).attr("src", allFlowers[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
           setInterval(moveRectangle, 1000);
           setInterval(moveLong, 1000);

           //chaining
        $(allFlowers[0].theSelector).fadeOut().fadeIn();

    });

});

//3 moving shapes
function moveSquare() //this one sometimes dissappears
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});

}

function moveRectangle()
{
    $("#rectangle").animate({left:300}).animate({top:400}).animate({left:0}).animate({top:350});
    $("#rectangle").delay(425).fadeOut();
    //other option for fade that I didn't try
    // setTimeout(function(){$("div").fadeOut(300);},1000);
}

function moveLong()
{
  //repeats through this in an odd way...gonna leave
  $("#long").delay(425).fadeIn();
  $("#long").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
  $("#long").delay(425).fadeOut();
}
