function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "The Woods") {
        document.getElementById("story").innerHTML = "Our spirit now finds himself in the woods.  It is dark and cold.";
        document.getElementById("choice1").innerHTML = "Move through the forest as fast as possible";
        document.getElementById("choice2").innerHTML = "Wander aimlessly";
    } else if (choice == 2 && answer2 == "Towards the Castle") {
        document.getElementById("story").innerHTML = "Our spirit is now faced with giant castle doors.";
        document.getElementById("choice1").innerHTML = "Try the Doors";
        document.getElementById("choice2").innerHTML = "Look around for a window";
    } else if (choice == 1 && answer1 == "Move through the forest as fast as possible") {
        document.getElementById("story").innerHTML = "You have made your way into a meadow.  What would you like to do?";
        document.getElementById("choice1").innerHTML = "Pick a flower";
        document.getElementById("choice2").innerHTML = "Skip around";
    } else if (choice == 2 && answer2 == "Wander aimlessly") {
        document.getElementById("story").innerHTML = "It's a little too cold out. You freeze to death."  + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Try the Doors") {
        document.getElementById("story").innerHTML = "Darn.  They're locked.";
        document.getElementById("choice1").innerHTML = "Maybe I should knock";
        document.getElementById("choice2").innerHTML = "Look around for a window";
    } else if (choice == 2 && answer2 == "Skip around") {
        document.getElementById("story").innerHTML = "As you are skipping around a cute little fluffball with eyes approaches.  They seem quite upset.  This must be where they plant things.";
        document.getElementById("choice1").innerHTML = "Offer to help him replant";
        document.getElementById("choice2").innerHTML = "Ignore him";
    } else if (choice == 1 && answer1 == "Offer to help him replant") {
        document.getElementById("story").innerHTML = "The fluffball is a little irritated but seems to be okay with this solution." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Look around for a window") {
        document.getElementById("story").innerHTML = "You move to the right of the castle and find an open window."; //+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Hesitate";
        document.getElementById("choice2").innerHTML = "Jump through";
    } else if (choice == 2 && answer2 == "Jump through") {
        document.getElementById("story").innerHTML = "A cute fluffball appears stunned and confused.  Actually he looks a little angry.  The creatue spits acid at you.  You die." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Hesitate") {
        document.getElementById("story").innerHTML = "You hesitate.  What if someone is home?";
        document.getElementById("choice1").innerHTML = "Maybe I should knock";
        document.getElementById("choice2").innerHTML = "Jump through";
    } else if (choice == 1 && answer1 == "Maybe I should knock") {
        document.getElementById("story").innerHTML = "You knock on the door and wait patiently.  Finally the door opens.  You look down to see a cute little fluffball.";
        document.getElementById("choice1").innerHTML = "Greet them";
        document.getElementById("choice2").innerHTML = "Run away";
    } else if (choice == 1 && answer1 == "Greet them") {
        document.getElementById("story").innerHTML = "The fluffball happily welcomes you and asks if you would like to stay for awhile.  You happily agree and are happy with your day of adventure." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Run away") {
        document.getElementById("story").innerHTML = "You successfully escaped the fluffball.  That's enough adventuring for today." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Pick a flower") {
        document.getElementById("story").innerHTML = "As you are smelling your cute little flower a little fluffball with eyes approaches.  They seem quite upset.  This must be where they plant things.";
        document.getElementById("choice1").innerHTML = "Offer him the flower";
        document.getElementById("choice2").innerHTML = "Ignore him";
    } else if (choice == 2 && answer2 == "Ignore him") {
        document.getElementById("story").innerHTML = "The creatue spits acid at you.  You die." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Offer him the flower") {
        document.getElementById("story").innerHTML = "The fluffball seems to think that this was a sweet gesture.  He forgives you for picking one of his flowers." + "<br>Restart?";  //add a break so that restart appears on the next line
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "XXXX") {
        document.getElementById("story").innerHTML = "The creatue spits acid at you.  You die." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Quit";
    //Restart and Quit Options
   } else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "A tiny spirit floats on his lonesome.  He's decided it's time to explore the world.  Where should he go?";
        document.getElementById("choice1").innerHTML = "The Woods";
        document.getElementById("choice2").innerHTML = "Towards the Castle";
    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "Until next time!";

    }


}
