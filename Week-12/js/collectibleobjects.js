var test3 = collectibleCollide(collectible1, collectible2);
var test4 = false;
for(var i = 0; i < collectiblesArray.length; i++)
{
  test4 = collectibleCollide(collectible1, collectiblesArray[i]);
  if(test4 == true)
  {
    collectibles++;//check this name
    //collectible disappears
  }
}
