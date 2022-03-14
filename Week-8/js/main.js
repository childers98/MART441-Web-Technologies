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

    // var dog = new DogInfo("#dog", "images/sunflower.jfif"); // alt="sunflower" width="200"
    // allDogs.push(dog);
    //new var
    var tulip = new FlowerInfo("#flower", "images/tulip.jpg");
    // allFlowers.push(tulip);
    var viola = new FlowerInfo("#flower", "images/viola.jpg");
    var rose = new FlowerInfo("#flower", "images/roses.jpg");
    var poppy = new FlowerInfo("#flower", "images/red-poppy.jpg");
    var sunflower = new FlowerInfo("#flower", "images/sunflower.jfif");
    allFlowers.push(tulip, viola, rose, poppy, sunflower);

}
// $(document).ready(function(){
//     initializeArray();
//     console.log(allDogs.length);
//     console.log(allDogs[0].toString());
//     console.log(allDogs[0].theSelector);
//     console.log(allDogs[0].theImagePath);
//
//     $(allDogs[0].theSelector).src = allDogs[0].theImagePath;
//     $("#my_image").attr("src","second.jpg");
//     $(allDogs[0].theSelector).attr("src", allDogs[0].theImagePath);
//
//     $("button").click(function(){
//
//         $(".stuff").fadeOut();
//
//         $("#third").toggle();
//            setInterval(moveSquare, 1000);
//
//         $(allDogs[0].theSelector).fadeOut().fadeIn();

$(document).ready(function(){
    initializeArray();
    console.log(allFlowers.length);
    console.log(allFlowers[0].toString());
    console.log(allFlowers[0].theSelector);
    console.log(allFlowers[0].theImagePath);

    $(allFlowers[0].theSelector).src = allFlowers[0].theImagePath;
    $("#my_image").attr("src","second.jpg");
    $(allFlowers[0].theSelector).attr("src", allFlowers[0].theImagePath);

    $("button").click(function(){

        //anything with the stuff class fades out
        $(".stuff").fadeOut();


        $("#third").toggle();
           setInterval(moveSquare, 1000);
           

           //the next flower image fades in?
        $(allFlowers[0].theSelector).fadeOut().fadeIn();

    });

});

function moveSquare()
{
    //moves the square in a square formation
    //why is the square red
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}

// function moveCircle()
// {
//
// }






// var dogSelector = "#dog";
// var allDogs = new Array();

// class DogInfo{
//     constructor(selector, imagePath)
//     {
//         this.selector = selector;
//         this.imagePath = imagePath;
//     }
//
//     get theSelector(){
//         return this.selector;
//     }
//
//     get theImagePath(){
//         return this.imagePath;
//     }
//
//     toString()
//     {
//         return this.selector + ":" + this.imagePath;
//     }
// }
