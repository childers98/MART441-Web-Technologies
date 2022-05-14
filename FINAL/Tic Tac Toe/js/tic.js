function myFunction()
{
  //set DOM of boxes
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  //check if X won by checking all possible wins
  //456789
  if((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }
  //235689
  else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }
  //369
  //1234578
  else if((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b7").disabled = true;
    window.alert('Player X won');
  }
  //789
  //123456
  else if((b9 == 'x' || b9 == 'X') && (b8 == 'x' || b8 == 'X') && (b7 == 'x' || b7 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player X won');
  }
  //159
  //234678
  else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b7").disabled = true;
    window.alert('Player X won');
  }
  //357
  //124689
  else if((b3 == 'x' || b5 == 'X') && (b7 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }
  //258
  //134679
  else if((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }
  //456
  //123789
  else if((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X'))
  {
    document.getElementById('turn').innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
  }

  //check if player O finished
  //change X to O (same with the baby letters)
  //456789
  if((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player O won');
  }
  //235689
  else if((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player O won');
  }
  //369
  //1234578
  else if((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b7").disabled = true;
    window.alert('Player O won');
  }
  //789
  //123456
  else if((b9 == 'o' || b9 == 'O') && (b8 == 'o' || b8 == 'O') && (b7 == 'o' || b7 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player O won');
  }
  //159
  //234678
  else if((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b7").disabled = true;
    window.alert('Player O won');
  }
  //357
  //124689
  else if((b3 == 'o' || b5 == 'O') && (b7 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player O won');
  }
  //258
  //134679
  else if((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player O won');
  }
  //456
  //123789
  else if((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Player O won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player O won');
  }
  else if((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O'))
  {
    document.getElementById('turn').innerHTML = "Tie";
    window.alert('Tie');
  }
  else
  {
    if(flag == 1)
    {
      document.getElementById('turn').innerHTML = "Player X Turn";
    }
    else
    {
      document.getElementById('turn').innerHTML = "Player O Turn";
    }
  }
}

//reset game
function reset()
{
  location.reload();
  //double quotes not single quotes
  document.getElementById("b1").value = '';
  document.getElementById("b2").value = '';
  document.getElementById("b3").value = '';
  document.getElementById("b4").value = '';
  document.getElementById("b5").value = '';
  document.getElementById("b6").value = '';
  document.getElementById("b7").value = '';
  document.getElementById("b8").value = '';
  document.getElementById("b9").value = '';
}

//check turn of players and put proper X or O
//value and then disabled not value twice
flag = 1;
function firstBox()
{
  if (flag == 1)
  {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    flag = 0;
  }
  else
    {
      document.getElementById("b1").value = "O";
      document.getElementById("b1").disabled = true;
      flag = 1;
    }
  }

  function secondBox()
  {
    if (flag == 1)
    {
      document.getElementById("b2").value = "X";
      document.getElementById("b2").disabled = true;
      flag = 0;
    }
    else
      {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
      }
    }

    function thirdBox()
    {
      if (flag == 1)
      {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
      }
      else
        {
          document.getElementById("b3").value = "O";
          document.getElementById("b3").disabled = true;
          flag = 1;
        }
      }

      function fourthBox()
      {
        if (flag == 1)
        {
          document.getElementById("b4").value = "X";
          document.getElementById("b4").disabled = true;
          flag = 0;
        }
        else
          {
            document.getElementById("b4").value = "O";
            document.getElementById("b4").disabled = true;
            flag = 1;
          }
        }

        function fifthBox()
        {
          if (flag == 1)
          {
            document.getElementById("b5").value = "X";
            document.getElementById("b5").disabled = true;
            flag = 0;
          }
          else
            {
              document.getElementById("b5").value = "O";
              document.getElementById("b5").disabled = true;
              flag = 1;
            }
          }

      function sixthBox()
        {
          if (flag == 1)
            {
              document.getElementById("b6").value = "X";
              document.getElementById("b6").diabled = true;
              flag = 0;
            }
          else
            {
              document.getElementById("b6").value = "O";
              document.getElementById("b6").disabled = true;
              flag = 1;
            }
          }

        function seventhBox()
          {
            if (flag == 1)
            {
              document.getElementById("b7").value = "X";
              document.getElementById("b7").disabled = true;
              flag = 0;
            }
            else
              {
                document.getElementById("b7").value = "O";
                document.getElementById("b7").diabled = true;
                flag = 1;
                }
              }

    function eighthBox()
      {
        if (flag == 1)
        {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
        }
        else
        {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
        }
      }

    function ninthBox()
      {
      if (flag == 1)
      {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
      }
      else
      {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
      }
}
