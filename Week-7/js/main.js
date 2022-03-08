//Create empty array to fill later
var myViewFinderArray = new Array();

//main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title, artist, year, description, image)
    {
        this.title = title;
        this.artist  = artist;
        this.year = year;
        this.description = description;
        //is this one image or imagePath?
        this.image = image;
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
        //redid this
        let str;
        str = 'Title: ${this.title}, Artist: ${this.artist}, Year: ${this.Year}, Description: ${this.description} ${imagePath}';
        return str;
        // return "Title: " + this.title;
    }

    // this is the property theTitle which returns the title as well only the title
    get theTitle()
    {
        return this.title;
    }

    //added this stuff
    //image
    constructor(imagepath)
    {
      this.imagePath = imagePath;
    }

    toString()
    {
      return this.imagePath;
    }
    get theImage()
    {
      return this.imagePath;
    }

    //Artist
    constructor(artist)
    {
      this.artist = artist;
    }

    toString()
    {
      return this.artist;
    }
    get theArtist()
    {
      return this.artist;
    }

    //Year
    constructor(year)
    {
      this.year = year;
    }

    toString()
    {
      return this.year;
    }
    get theYear()
    {
      return this.year;
    }

    //Description
    constructor(description)
    {
      this.description = description;
    }

    toString()
    {
      return this.description;
    }
    get theDescription()
    {
      return this.description;
    }


}

// this function is called in the body of the HTML page so that the objects are created and added to the
// array myViewFinderArray
function initializeArray()
{
    //adding objects to the array
    // create the first object from the class ViewFinder
    //Adrian Brandon's, "Stolen"
    var myViewFinder = new ViewFinder("A piece from Adrian Brandon's 'Stolen' series.  He draws one minute of color for every year of their life before they were killed by police.");

    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("A really angry tiger");
    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    // add the second object to the array
    myViewFinderArray.push(myViewFinder1);

}

// this function gets an object from the array and puts it into the element with the id title
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

    //added this
    document.getElementById("artist").innerHTML = my
}
