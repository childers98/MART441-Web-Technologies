//This part appears to be functioning correctly
//array of image names that correspond to the image tags
//does there need to be 20 imageTags? or can it be duplicated?
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20"];
//variable for the image name
var blankImagePath = "images/question-mark.jpg";
//array for the actual images
var actualImages = new Array();

function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function createRandomImageArray()
{
    //Array of actual images
      //technically this is 13 images right here
    var actualImagePath = ["images/angel.jpg", "images/angry.jpg", "images/barf.jpg", "images/love.jpg", "images/party.jpg", "images/passion.jpg", "images/please.jpg", "images/shh.jpg", "images/silly.jpg", "images/squint-tongue.jpg", "images/star.jpg", "images/zoink.jpg"];
    //Excess images
    //"images/broken-heart.jpg",

    // create another array to make sure the images only get added twice
//change the amount of zeroes here and more pictures showed up
    var count = [0,0,0,0,0,0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full

//change this number to how many image tags there are
//In this case I made 20 because there are 10 pairs
    while(actualImages.length < 20)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        //add images to the array
//this seems to be the broken part
//count to see if it has less than two
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            //this seems to be working now....
            count[randomNumber] = count[randomNumber] + 1;
        }
    }

}

//this is working properly
  function flipImage(number)
  {
      document.getElementById(imageTags[number]).src= actualImages[number];
          // this should be a quick function that just changes
          // the image based on what number was pressed
  }

//Gonna need to make the images flip back over if they are wrong
