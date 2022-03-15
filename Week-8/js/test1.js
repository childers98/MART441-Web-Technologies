var flowerSelector = "#flower";//id
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
    //make new objects for the array with id of flower and image src
    var tulip = new FlowerInfo("#flower", "images/tulip.jpg");
    var viola = new FlowerInfo("#flower", "images/viola.jpg");
    var roses = new FlowerInfo("#flower", "images/roses.jpg");
    var sunflower = new FlowerInfo("#flower", "images/sunflower.jpg")
    //allFlowers.push(flower);
    allFlowers.push(tulip, viola, roses, sunflower);

}
$(document).ready(function(){
    initializeArray();
    //check that everything is going into the array
    console.log(allFlowers.length);
    console.log(allFlowers[0].toString());
    console.log(allFlowers[0].theSelector);
    console.log(allFlowers[0].theImagePath);


//this is supposed to change the image source...
    // $(allFlowers[0].theSelector).src = allFlowers[0].theImagePath;
    // $("#my_image").attr("src","second.jpg");

    $(allFlowers[0].theSelector).attr("src", allFlowers[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();//for the quotes
        $("#bright").toggle(); //turns it off and then on
          //when the shapes start moving
           setInterval(moveSquare, 1000);
           setInterval(moveRectangle, 1000);
           setInterval(moveLong, 500);
           setInterval(moveMini, 500);

        //make the images fade in and out
        $(allFlowers[0].theSelector).fadeOut().fadeIn();

        //changing the image - https://www.tutorialrepublic.com/faq/how-to-change-the-image-source-using-jquery.php#:~:text=Answer%3A%20Use%20the%20jQuery%20attr,you%20clicks%20on%20the%20image.
        $(document).ready(function(){
            $("flower").click(function(){
                // Change src attribute of image
                $(this).attr("src", "secoind.jpg");
            });
        });


        //change the images
        // var imagePath = ["images/roses.jpg", "images/viola.jpg", "images/sunflower.jpg", "images/tulip.jpg", "images/red-poppy.jpg"]; //put the orignal word at the end of the array so that it will look like it is repeating
        // var count = 0;


        //maybe use fadeTo
        //switch the image
        //https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
//         $(allFlowers).attr("src", "second.jpg");//images/viola.jpg
//         $(allFlowers).on({
//           'click': function(){
//             $(allFlowers).attr('src', "second.jpg");
//           }
//         });
//         //rotate the image
//         $(allFlowers).on({
//           'click': function(){
//             var src = ($(this).attr('src') === 'img1_on.jpg')
//               ? 'img2_on.jpg'
//               : 'img1_on.jpg';
//               $(this).attr('src', src);
//           }
//         })
//
//
    });

});

//4 moving shapes
function moveSquare()
{
    $("#mini-square").delay(150).fadeIn();
    $("#square").animate({left:300}).animate({top:400}).animate({left:20}).animate({top:200});
    $("#square").delay(15).fadeOut();

}

function moveMini()
{
    //this one stays on the screen w/ no fade functions
    $("#mini-square").delay(1425).fadeIn();
    $("#mini-square").animate({left:1500}).animate({top:400}).animate({left:500}).animate({top:200});
    $("#mini-square").delay(1425).fadeOut();
}

function moveRectangle()
{
    $("#mini-square").fadeIn();
    $("#rectangle").animate({left:300}).animate({top:400}).animate({left:0}).animate({top:350});
    $("#rectangle").delay(425).fadeOut();
}

function moveLong()
{
  //repeats through this
  $("#long").delay(425).fadeIn();
  $("#long").animate({left:250}).animate({top:400}).animate({left:0}).animate({bottom:300});
  $("#long").delay(500).fadeOut();
}

//change the text of my first quote
$(document).ready(function () {
    $("button").click(function () {
        $("#infoid").text("You are the artist of your own life.  Don't hand the paintbrush to anyone else. - Unknown");
    });
});

//change my word-rotate
var words = ["cool.", "passion.", "hope.", "focus.", "peace."]; //put the orignal word at the end of the array so that it will look like it is repeating
var number = 0; //changed count to number

//stops changing after the button click???
changeWord(); // Call the changeWord function
setInterval(changeWord, 2000); // Call it every 3 seconds

function changeWord() {

    var current_word = words[number];
    console.log(current_word);

    // Change the word in the HTML
    $("#rotate_word").html(current_word);

    // Get the next word index in the array
    number++;

    // If we've reached the end of the word list, go back to the start
    if (number == words.length) { number = 0; }
}
