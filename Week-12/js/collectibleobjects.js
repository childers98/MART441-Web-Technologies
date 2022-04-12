    var test3 = collectibleCollide(collectibles1, collectibles2);
    var test4 = false;

    for(var i = 0; i < collectiblesArray.length; i++)
    {
      {
        test4 = collectibleCollide(collectible1, collectiblesArray[i]);
        if(test4 == false)
          {
            if(direction == "left")
            {
                moveRight();
            }
            else if(direction == "right")
            {
                moveLeft();
            }
            else if(direction == "up")
            {
                moveDown();
            }
            else if(direction == "down")
            {
                moveUp();
            }
          }
    if(test3 || test4)
    {

      {
        collectibles++;//check this name
        setCollectible.SetActive(false); //I don't think this is right
      }
        //console.log(test2);
     }
    }
    drawSquare();
}

function collectibleCollided(collectibles1, collectibles2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
