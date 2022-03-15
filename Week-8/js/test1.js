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
    //changed #s to the flower name
    var viola = new FlowerInfo("#voila", "images/viola.jpg");
    var roses = new FlowerInfo("#roses", "images/roses.jpg");
    var sunflower = new FlowerInfo("#sunflower", "images/sunflower.jfif")
    allFlowers.push(tulip, viola, roses, sunflower);
    //allFlowers.push(, viola, roses, sunflower);

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



        $("#third").toggle(); //turns it off and then on
          //when the shapes start moving
           setInterval(moveSquare, 1000);
           setInterval(moveRectangle, 1000);
           setInterval(moveLong, 500);

           //this doesn't work either
        $(allFlowers[0].theSelector).fadeOut().fadeTo("src", allFlowers[1].theImagePath).fadeIn();

        //changing the image - https://www.tutorialrepublic.com/faq/how-to-change-the-image-source-using-jquery.php#:~:text=Answer%3A%20Use%20the%20jQuery%20attr,you%20clicks%20on%20the%20image.
        $(document).ready(function(){
            $("flower").click(function(){
                // Change src attribute of image
                $(this).attr("src", "images/viola.jpg");
            });
        });





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

//3 moving shapes
function moveSquare()
{
    //this one stays on the screen w/ no fade functions
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
  //repeats through this
  $("#long").delay(425).fadeIn();
  $("#long").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
  $("#long").delay(425).fadeOut();
}

//change the text of my first quote
$(document).ready(function () {
    $("button").click(function () {
        $("#infoid").text("You are the artist of your own life.  Don't hand the paintbrush to anyone else. - Unknown");
    });
});



//doesn't work if the image one is running
//change my word-rotate
var words = ["cool.", "passion.", "hope.", "focus.", "peace."]; //put the orignal word at the end of the array so that it will look like it is repeating
var number = 0; //changed count to number

//stops changing after the button click???
changeWord(); // Call the changeWord function
setInterval(changeWord, 2000); // Call it every 3 seconds

function changeWord() {

    // Define the word to create
    var current_word = words[number];
    console.log(current_word);

    // Change the word in the HTML
    $("#rotate_word").html(current_word);

    // Get the next word index in the array
    number++;

    // If we've reached the end of the word list, go back to the start
    if (number == words.length) { number = 0; }
}


//if this one is active renders the one above useless
//change the images
var imagePath = ["images/roses.jpg", "images/viola.jpg", "images/sunflower.jpg", "images/tulip.jpg", "images/red-poppy.jpg"]; //put the orignal word at the end of the array so that it will look like it is repeating
var count = 0;

changeImage(); // Call the changeWord function
setInterval(changeWord, 2000); // Call it every 3 seconds

function changeImage() {

    // Define the word to create
    var current_image = imagePath[count];
    console.log(current_imagePath);

    // Change the word in the HTML
    $("#flower").html(current_imagePath);

    // Get the next word index in the array
    count++;

    // If we've reached the end of the word list, go back to the start
    if (count == imagePath.length) { count = 0; }
}
