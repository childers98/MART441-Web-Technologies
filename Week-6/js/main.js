var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20"];
//variable for the image name
var blankImagePath = "images/question-mark.jpg";
//array for the actual images
var actualImages = new Array();
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;

//JSON declaration - full name, age, and score
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

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
    var actualImagePath = ["images/angel.JPG", "images/angry.JPG", "images/barf.JPG", "images/love.JPG", "images/party.JPG", "images/please.JPG", "images/shh.JPG", "images/squint-tongue.JPG", "images/star.JPG", "images/zoink.JPG"];
    //Excess images
    //"images/broken-heart.jpg", "images/passion.jpg", "images/silly.jpg",


    // create another array to make sure the images only get added twice
  //changed the amount of zeroes here and more pictures showed up
    var count = [0,0,0,0,0,0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full

    //change this number to how many image tags there are
    while(actualImages.length < 20)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        // create an if statement that says if the total number added is less than 2, then
        //add images to the array
        //count to see if it has less than two
        if(count[randomNumber] < 2)
        {
            //get a random number between 0 and total images to choose from
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }

}

// //this is working properly
//   function flipImage(number)
//   {
//       document.getElementById(imageTags[number]).src= actualImages[number];
//           // this should be a quick function that just changes
//           // the image based on what number was pressed
//   }
//
// //Gonna need to make the images flip back over if they are wrong

function flipImage(number)
{
  //second image appear
  if(firstNumber >= 0)
  {
    secondNumber = number;
    document.getElementById(imageTags[number]).src = actualImages[secondNumber];
  }
  //first image appear
  else if(firstNumber < 0)
  {
    firstNumber = number;
    document.getElementById(imageTags[number]).src = actualImages[firstNumber];
  }

  //if the images do not match...
  if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
      //add to the score
      score++;
      setTimeout(imagesDissappear, 500); // calls a method after 1 second - made 500 instead of 1000
  }
  // check to see if the images do match
  else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
      score++;
      allFound++;

      firstNumber = -1;
      secondNumber = -1;
      if(allFound == actualImages.length/2)
      {
        player.score = score;
        localStorage.setItem("playerInfo", JSON.stringify(player));
        window.location = "end.html"; //change file name? Possibly?
      }
  }
}


function imagesDissappear() //name did not match at line 87
{
  //console.log(firstNumber);
  document.getElementById(imageTags[firstNumber]).src = blankImagePath;
  document.getElementById(imageTags[secondNumber]).src = blankImagePath;
  firstNumber = -1;
  secondNumber = -1;
}


//add JSON from textboxes
function addToPlayer()
{
  var firstName = document.getElementById("txtFirstName").value
  var lastName = document.getElementById("txtLastName").value
  var age = document.getElementById("txtAge").value

  player.firstname = firstName;
  player.lastname = lastName;
  player.age = age;
  localStorage.setItem("playerInfo", JSON.stringify(player));
  //redirect to the "main" matchup html
  window.location = "Childers_index.html";


  //can just do one of these haha
  // //console.log(firstName);
  // player.firstname = firstName;
  // localStorage.setItem("playerInfo", JSON.stringify(player));
  // window.location = "intro.html";
  //
  // //console.log(firstName);
  // player.lastname = lastName;
  // localStorage.setItem("playerInfo", JSON.stringify(player));
  // window.location = "intro.html";
  //
  // //console.log(firstName);
  // player.age = age;
  // localStorage.setItem("playerInfo", JSON.stringify(player));
  // window.location = "intro.html";

}

//get info from JSON
function playerInfo()
{
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);

  //missed this stuff
  var str = "Name: " + player.firstname + " " + player.lastname + "<br>" + //add breaks to make clarity/match the intro.html
  "Age: " + player.age + "<br>" +
  "Score: " + player.score;

  if(document.getElementById("endInformation") != null)
  {
    document.getElementById("endInformation").innerHTML = str;
  }
  //see if things are appearing in the console
  // console.log(player.firstname);
  // console.log(player.lastname);
  // console.log(player.age);
}
