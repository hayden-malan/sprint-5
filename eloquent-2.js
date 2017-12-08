//exercise 1 - hash triangle, 1 to 7

//my code - correct also, was surprised that I figured it out. didn't think it would work.
var hash = "#";
var hashPlus = "#";
for (hash.length = 1; hash.length <= 7; hash = hash + hashPlus)
console.log(hash); 
 

//answer code
for (var line = "#"; line.length < 8; line += "#")
console.log(line);

//exercise 2 - FizzBuzz all numbers to 100, fizz is divisible by 3, buzz is divisible by 5, fizzbuzz is 3 and 5

//my code - works but fiz and buz are displayed next to the number and not replaced by it
for (var number = 1; number <= 100; number++) {
    var output = "";
    if (number % 3 == 0)
      output += "Fizz";
    if (number % 5 == 0)
      output += "Buzz";
    console.log(output , number);
  }

//answer code
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }

  //exercise 3 - Chess Board

  //my code - works well! was hard to make sure that it works for any size, but i figured it out in the end
  var boardSize = 8;
  var oddLine
  var evenLine
  for (oddLine = 0; oddLine < boardSize / 2; oddLine++) {
  console.log(" #".repeat(boardSize/2));
  for (evenLine = 0; evenLine < boardSize / boardSize; evenLine++) {
  console.log("# ".repeat(boardSize/2));
  }
  }

  //answer code
  var size = 8;
  
  var board = "";
  
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
    }
    board += "\n";
  }
  
  console.log(board);