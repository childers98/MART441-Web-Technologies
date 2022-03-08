class ViewFinder {
    constructor(title, artist, year, description, image) {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.description = description;
        this.image = image;
    }

    //returns the title
    toString()
    {
      return "Title: " + this.title <br> "Artist: " + this.artist <br> "Year: " + this.year <br> "Description: " <br> this.image;
    }

    get theTitle()
    {
      return this.title;
    }

    get theArtist()
    {
      return this.artist;
    }

    get theYear()
    {
      return this.year;
    }

    get theDescription()
    {
      return this.description;
    }

    get theImage()
    {
      return this.image;
    }



   //  get title() {
   //      return this.title;
   //          }
   //  set title(title) {
   //      this.title = title;
   //  }
   // walk() {
   //      return `I am walking across the frozen tundra at ${this.speed} miles per hour`;
   //  }
   //  timeToTravel()
   //  {
   //      //let time = this.distance/this.speed;
   //
   //      return time;
   //  }

    // toString() {
    //     let str;
    //     str = `This person has ${this.eyeColor} eyes, has ${this.hairColor} hair, and is currently moving at ${this.speed} miles per hour.`;
    //     return str;
    // }
}

function initializeArray()
{
    //adding objects to the array
    // create the first object from the class ViewFinder
    //Adrian Brandon's, "Stolen"

    //Template - title, artist, year, description, image
    //var myViewFinder = new ViewFinder('title', 'artist', 'year', 'description', 'image');



    // create a second object from the class ViewFinder
    var myViewFinder = new ViewFinder("Stolen", "Adrian Brandon", "2019", "A piece from Adrian Brandon's Stolen series.  He draws one minute of color for every year of their life before they were killed by police.", "images/stolen-adrian_brandon.jpg");

    // var myViewFinder1 = new ViewFinder('title', 'artist', 'year', 'description', 'image');
    //
    // var myViewFinder2 = new ViewFinder('title', 'artist', 'year', 'description', 'image');
    //
    // var myViewFinder3 = new ViewFinder('title', 'artist', 'year', 'description', 'image');
    //
    // var myViewFinder4 = new ViewFinder('title', 'artist', 'year', 'description', 'image');



    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    // add all the other objects
    // myViewFinderArray.push(myViewFinder1);
    // myViewFinderArray.push(myViewFinder2);
    // myViewFinderArray.push(myViewFinder3);
    // myViewFinderArray.push(myViewFinder4);

}

// this function gets an object from the array and puts it into the element with the id title
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}
