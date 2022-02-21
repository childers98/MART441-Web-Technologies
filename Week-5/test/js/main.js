//This part appears to be functioning correctly
//array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
//, "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20"];
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
    var actualImagePath = ["images/angel.jpg", "images/angry.jpg", "images/barf.jpg", "images/broken-heart.jpg", "images/love.jpg", "images/party.jpg", "images/passion.jpg", "images/please.jpg", "images/shh.jpg", "images/silly.jpg", "images/squint-tongue.jpg", "images/star.jpg", "images/zoink.jpg"];

    // create another array to make sure the images only get added twice
    var count = [0,0];
    // create a while statement to check to see if our actual image array is full

//okay so which part of this isn't working...
    while(actualImages.length < 10)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        //add images to the array
//this seems to be the broken part
//not counting to 2 and stopping just adding each one randomly and only the first two
//doesn't work with anything 4 and below
        if(count[randomNumber] < 5)
        //creating an even number of things now(with 5)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
    //THIS seems to be what isn't working
    //not stopping after it hits 2
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
