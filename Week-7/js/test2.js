// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    constructor(title, artist, year, description, image)
    {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.description = description;
        this.image = image;
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
        return "Title: " + this.title + "<br> " + "Artist: " + this.artist + "<br>" + "Year: " + this.year + "<br>" + "Description: " + this.description + "<br>" + this.image;
    }

    // this is the property theTitle which returns the title as well only the title
    get theTitle()
    {
        return this.title, this.artist, this.year, this.description, this.image;
    }

}

// this function is called in the body of the HTML page so that the objects are created and added to the
// array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    //image is not working
    var myViewFinder = new ViewFinder("Stolen", "Adrian Brandon", "2019", "A piece from Adrian Brandon and his <i>Stolen</i> series.  He draws one minute of color for every year of their life before they were killed by police.", src="images/stolen-adrian_brandon.jpg");
    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("Justice for Breonna Taylor", "Shirien Damra", "2020", "A symbol to show that Breonna Taylor could have been anyone one of us and that justice should be served on her behalf.", src="images/justice_for_breonna-Shirien_Damra.jpg");
    var myViewFinder2 = new ViewFinder("See the Ability in Disability", "Kunyog", "2016", "A piece depicting the judgement of the disabled that they are not capable of doing anything due to their limitations.", "images/see-the-ability_KUNYOG.jpg");
    var myViewFinder3 = new ViewFinder("Ahmaud", "Multiple Artists", "2020", "Graffiti artists worked tirelessly on this piece to put a face to the name in the headlines.  The building serves as a canvas for current events and artists reactions.", "images/ahmaud.jpg");
    var myViewFinder4 = new ViewFinder("George Floyd Portrait", "Nikkolas Smith", "2020", "Paying tribute to the wrongful death of George Floyd", "src=images/george_floyd-nikkolas_smith.jpg");

    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    //add the next 4 viewfinders
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

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
