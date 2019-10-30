Neil Bernstein
Galvanize PRP72
SA 1 code

Self Assessment 1 ReadMe
STOP and READ
(This is called a "readme" for a good reason)

We know this can get exciting or nerve-wracking, but it is integral to your success to read every single part of this documentation before starting the assessment. You are responsible for submitting your assessment in a timely manner after the assessment time has elapsed

Assessment Time limit: 60 minutes

Record with Zoom
You are required to record your screen during the self assessment. If you haven't, watch this "How-To Record on Zoom  video. If you are having issues with Zoom, submit a help desk request.

The Assessment
Debug and research on the recorded screen. Gives us an idea on what you're attempting to check.
Use any text editor or IDE of your choice (repl.it  , codepen.io  , Sublime, Atom, etc.).
If you want your function solutions to count, do not comment them out or delete them.
Submission directions will be given in the next section. Read it after the time has elapsed.
Complete as many exercises as you can in the allotted time. You're purposefully given more exercises than what could be possible for the given time limit, so just keep working on these exercises while you have time!
This is an open book assessment. However, we do not recommend that you use previous problems you have solved as a reference.
Use MDN documentations, lectures, or Google a step in the process (do not look up the entire problem).
You can always skip around. You do not have to complete the problems from top to bottom.
Assessment Links
DO NOT comment your solution code in the gists provided. These will not count as submissions. As a reminder, submission directions will be given in the next section. Read it after the assessment time has elapsed.

If you have not finished all "Basic Requirement" Exercises (first 10 coding challenges) in any previous self assessment, start your assessment here  !

If you have completed or started any previous self assessments' "Additional Exercises", start your assessment here  !

You may begin the assessment -- Happy Hacking

++++
Self Assessment 1
Exercise 1 (booleans and conditionals)
Write a function wasItFunny which takes in a boolean argument (input value), and returns "meh" if the input was false, and "HAHAHA" if the input was true.

function wasItFunny(response) {

}
Calling your function should result in:

wasItFunny(true); //"HAHAHA"
wasItFunny(false); //"meh"
function wasItFunny(response) {
  //Write a function wasItFunny which takes in a boolean argument (input value), and returns "meh" if the input was false, and "HAHAHA" if the input was true.

  var input = response;

  if (input) {
    console.log("HAHAHA");
  } else {
    console.log("meh");
  }
}

wasItFunny(true); //"HAHAHA"
wasItFunny(false); //"meh"



++++

Exercise 2 (strings and conditionals)
Write a function isWordLong which takes in a string argument (input value), and returns true if the string is longer than 15 characters, and false if the string is less than or equal to 15 characters. You can assume that the input string will only contain letters.

function isWordLong(word) {

}
Calling your function should result in:

isWordLong('absentmindedness'); //true
isWordLong('aerodynamics'); //false

nsb
//Exercise 2 (strings and conditionals)
//Write a  which takes in a string argument (input value), and returns true if the string is longer than 15 characters, and false if the string is less than or equal to 15 characters. You can assume that the input string will only contain letters.

function isWordLong(word) {
 var wordTemp = word;
 if (wordTemp.length > 15) {
   console.log(true);
   return(true)
 } else {
   console.log(false);
   return(false)
 }
}

//Calling your function should result in:

isWordLong('absentmindedness'); //true
isWordLong('aerodynamics'); //false

++++
Exercise 3 (numbers)
Write a function addFourNums which takes in four number arguments (input values) and returns the value of the numbers added to each other

function addFourNums(numA, numB, numC, numD) {

}
Calling your function should result in:

addFourNums(10, 20, 30, 40); //100

nsb
//Exercise 3 (numbers)
//Write a function addFourNums which takes in four number arguments (input values) and returns the value of the numbers added to each other

function addFourNums(numA, numB, numC, numD) {
  var sum = numA + numB + numC + numD;
  console.log(sum);
  return sum
}

//Calling your function should result in:

addFourNums(10, 20, 30, 40); //100

++++
Exercise 4 (arrays)
Write a function addOnlyFirstFourNums which takes in an array argument (input value) and returns the value of only the first four numbers added to each other. You can assume that the input array will always have at least 4 numbers, and will only have number values.

function addOnlyFirstFourNums(numbers) {

}
Calling your function should result in:

addOnlyFirstFourNums([40, 600, 8000, 2, 19, 25, 60, 90]); //8642

nsb
//Exercise 4 (arrays)
//Write a function addOnlyFirstFourNums which takes in an array argument (input value) and returns the value of only the first four numbers added to each other. You can assume that the input array will always have at least 4 numbers, and will only have number values.

function addOnlyFirstFourNums(numbers) {
  var sumOfFirstFour = 0;
  for (i = 0; i < 4; i++) {
    sumOfFirstFour += numbers[i];
  }
  console.log(sumOfFirstFour);
  return sumOfFirstFour
}
//Calling your function should result in:

addOnlyFirstFourNums([40, 600, 8000, 2, 19, 25, 60, 90]); //8642

++++
Exercise 5 (numbers)
Write a function convertInchesToCentimeters which takes in a number argument (input value), inches, and returns the calculation of that number multiplied by precisely 2.54*

function convertInchesToCentimeters(inches) {
  //Do not worry about formatting your output to round to the nearest 2nd decimal number.
}
Calling your function should result in:

convertInchesToCentimeters(120); //304.8
* - Why 2.54? This is the standard calculation of inches to centimeters -- 1 inch == 2.54 centimeters


nsb
//Exercise 5 (numbers)
//Write a function convertInchesToCentimeters which takes in a number argument (input value), inches, and returns the calculation of that number multiplied by precisely 2.54*
//* - Why 2.54? This is the standard calculation of inches to centimeters -- 1 inch == 2.54 centimeters

function convertInchesToCentimeters(inches) {
  //Do not worry about formatting your output to round to the nearest 2nd decimal number.
  var valueInCent = inches * 2.54;
  console.log(valueInCent);
  return valueInCent
}
//Calling your function should result in:

convertInchesToCentimeters(120); //304.8

++++
Exercise 6 (objects)
Write a function myFavoriteSong which takes in no arguments (input values), but returns an object with the properties title, artist, and durationInSeconds. The values of each property is up to you, and you can explicitly type out these values, but these three properties should exist within the object your function returns.

function myFavoriteSong() {

}
Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

nsb
//Exercise 6 (objects)
//Write a function myFavoriteSong which takes in no arguments (input values), but returns an object with the properties title, artist, and durationInSeconds. The values of each property is up to you, and you can explicitly type out these values, but these three properties should exist within the object your function returns.

function myFavoriteSong() {
  var myFavSong = {
    title : "Uncle John's Band",
    artist : "Grateful Dead", 
    durationInSeconds : 420
  }
  console.log(myFavSong)
  return myFavSong
}

//Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

++++
Exercise 7 (objects and conditionals)
Write a function isItExpensive which takes in an object argument (input value). You can assume this object always has a price property. Your function should behave as follows: it should check the value of price.

If that value is less than 100, return false.
If the value is greater than or equal to 100, return true.
However, if the value is null, return the string "no data".
function isItExpensive(item) {

}
Calling your function should result in something like:

var appleWatch = {price: 400}
var applesAndWatches = {price: 30}
var watchingApples = {price: null}

isItExpensive(appleWatch); //true
isItExpensive(applesAndWatches); //false
isItExpensive(watchingApples); //"no data"

nsb

NOT ANSWERED

++++
Exercise 8 (strings and parameters)
Write a function introduceMe which takes in 2 arguments (input values): a string and a number. The function should return a string excitedly saying your name and how many pets you currently have.

function introduceMe(name, numPets) {

}
Calling your function should result in something like:

introduceMe("Alex", 2); //"Hi I am Alex and I have 2 pet(s)"
introduceMe("Sam", 0); //"Hi I am Sam and I have 0 pet(s)"

nsb
//Exercise 8 (strings and parameters)
//Write a function introduceMe which takes in 2 arguments (input values): a string and a number. The function should return a string excitedly saying your name and how many pets you currently have.

function introduceMe(name, numPets) {
  result = "";
  result = "Hi I am " + name + " and I have " + numPets + " pet(s)"
  console.log(result);
  return(result)
}
//Calling your function should result in something like:

introduceMe("Alex", 2); //"Hi I am Alex and I have 2 pet(s)"
introduceMe("Sam", 0); //"Hi I am Sam and I have 0 pet(s)"

++++
Exercise 9 (arrays and strings)
Write a function nextTwoBusTimes which takes in an array of numbers representing (in minutes) when the busses come for the day. Your function should return a string which denotes when the nearest bus arrives, and the one after that.

function nextTwoBusTimes(timesArr) {

}
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."

nsb
//Exercise 9 (arrays and strings)
//Write a function nextTwoBusTimes which takes in an array of numbers representing (in minutes) when the busses come for the day. Your function should return a string which denotes when the nearest bus arrives, and the one after that.

function nextTwoBusTimes(timesArr) {
  var nextTwoBusses = "The next 2 busses arrive in " + timesArr[0] + " and " + timesArr[1] + " minutes."
  console.log(nextTwoBusses);
  return nextTwoBusses
}
//Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."

++++
Exercise 10 (arrays and strings)
Write a function nextAndLastBusTimes which takes in an array of numbers representing (in minutes) when the busses come for the day. Your function should return a string which denotes when the nearest bus arrives, and the last for the day.

function nextAndLastBusTimes(timesArr) {

}
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes."

nsb
//Exercise 10 (arrays and strings)
//Write a function nextAndLastBusTimes which takes in an array of numbers representing (in minutes) when the busses come for the day. Your function should return a string which denotes when the nearest bus arrives, and the last for the day.

function nextAndLastBusTimes(timesArr) {
  var nextAndLastBusses = "The next bus is in " + timesArr[0] + " minutes. The last bus is in " + timesArr[1] + " minutes."
  console.log(nextAndLastBusses);
  return nextAndLastBusses
}


//Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes."

++++
Finished with these exercises?
Still have time to tackle more? Keep at it here!

++++
Self Assessment 1 Additional Exercises
Exercise 1
Write a function convertTo which takes in a string and a number.

If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54
function convertTo(units, num) {
  //Do not worry about formatting your output to round to the nearest 2nd decimal number.
}
Calling your function should result in something like:

convertTo('cm', 100); //254
convertTo('in', 50.8); //20

nsb
//Self Assessment 1 Additional Exercises
//Exercise 1
//Write a function convertTo which takes in a string and a number.

//If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
//If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54
function convertTo(units, num) {
  //Do not worry about formatting your output to round to the nearest 2nd decimal number.
  result = num;
  if (units === 'cm') {
    result *= 2.54;
    console.log(result)
    return result;
  } else {
    result /= 2.54;
    console.log(result)
    return result;
  }
}

//Calling your function should result in something like:

convertTo('cm', 100); //254
convertTo('in', 50.8); //20

++++
Exercise 2
Write a function displayBusTimes which takes in an object and a string. The object is the collection of bus time schedules, and the string will be the bus line the user's interested in. See below:

var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45]
};
Your function should output a string with the times the user is interested in.

function displayBusTimes(busScheduleObj, busLine) {

}
Calling your function should result in something like:

displayBusTimes(cityZBusSchedules, "bus15Schedule"); //"The bus will arrive in the next [11,22,33,44] minutes."
Of course, depending on the input value, it should output correct values..

displayBusTimes(cityZBusSchedules, "bus22Schedule"); //"The bus will arrive in the next [15,30,45] minutes."

nsb
//Exercise 2
//Write a function displayBusTimes which takes in an object and a string. The object is the collection of bus time schedules, and the string will be the bus line the user's interested in. See below:

var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45]
};

//Your function should output a string with the times the user is interested in.

function displayBusTimes(busScheduleObj, busLine) {
  var myBusArr = [];
  for ( var i = 0; i <busScheduleObj[busLine].length; i++) {
    myBusArr.push(busScheduleObj[busLine][i]);
  }
  console.log("The bus will arrive in the next [" + myBusArr + "] minutes.")
}

//Calling your function should result in something like:

displayBusTimes(cityZBusSchedules, "bus15Schedule"); //"The bus will arrive in the next [11,22,33,44] minutes."

//Of course, depending on the input value, it should output correct values..

displayBusTimes(cityZBusSchedules, "bus22Schedule"); //"The bus will arrive in the next [15,30,45] minutes."

++++
Exercise 3
Write a function addGenre which takes in an object and astring. This function will add a property "genre", and assign to it the input string

function addGenre(song, genre) {

}
Calling your function should result in something like:

var favoriteSong = {title: "Countdown", artist: "Beyonce", durationInSeconds: 212};

addGenre(favoriteSong, "Contemporary R&B");

console.log(favoriteSong); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212, genre: "Contemporary R&B"};

nsb
//Exercise 3
//Write a function addGenre which takes in an object and astring. This function will add a property "genre", and assign to it the input string

function addGenre(song, genre) {
  song["genre"] = genre;
  console.log(song);
  return song; 
}

//Calling your function should result in something like:

var favoriteSong = {title: "Countdown", artist: "Beyonce", durationInSeconds: 212};

addGenre(favoriteSong, "Contemporary R&B");

console.log(favoriteSong); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212, genre: "Contemporary R&B"};


++++++++
Submission Page
By the start of the next class, submit the following below: (1) Your Secret Gist, and (2) your assessment video link.

(1) A secret gist (How-To is below) with your final solution code.
Create this within 5 minutes after the end of the assessment period to get a proper time stamp.
Comment out any non-code in your submission.
If you want your function solutions to count, do not comment them out.
How to create a 'gist' with your final code block

- Copy the entire solution code you have for the assessment.
- Go to gist.github.com
- Paste the solution code in the large empty text field.
- title it `self-assessment-1.js`
- In the description, write your full name (first and last will suffice)
- Click 'Create secret gist' at the bottom right
- The URL is now ready to be submitted.
(2) Your assessment video link.
This means that you will have to upload your Zoom recording online (i.e. upload to Google Drive or Dropbox; YouTube not recommended_) then submit the URL.

We understand video rendering + upload times may vary, which is why we allow submissions up to the beginning of next class time.
1
Gist Link Submission
After you have created a Secret Gist, submit the link here by the beginning of the next class period after the assessment.

Sample gist link:

https://gist.github.com/userName1000/12345678901234567890123456789012

