//Check Whether a Number is Positive or Negative

var a = [1, 2, 3, 4, 5, -6, -7, 8, 9, 0]
console.log("Program Start");
for (var i = 0; i > a.length; i++) {
    if (a[i] > 0) {
        console.log("positive " + a[i]);
    } else if (a[i] === 0) {
        console.log("it's Zero " + a[i]);
    } else {
        console.log("Negative " + a[i]);
    }
}
console.log("Program End");

//Swap Two Numbers

var a = 1;
var b = 2;
var c;
console.log(a, b);

c = a;
a = b;
b = c;
console.log(a, b);

//Check Whether a Character is an Alphabet or not

var a = "a";


if (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122 || a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) { //charCodeAt() = checking string in char.
    console.log("Alphabet Value : " + a.charCodeAt(0));
} else if (a.charCodeAt(0) >= 49 && a.charCodeAt(0) <= 57) {
    console.log("Numeric Value : " + a.charCodeAt(0));
}

//Check Whether a Character is a Vowel or Consonant

var vowel = ["a", "e", "i", "o", "u"];
var name = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (var i = 0; i < name.length; i++) {
    if (vowel.indexOf(name[i]) == -1) { //indexof() = checking position in array
        console.log(name[i] + " Is a consonant");
    } else {
        console.log(name[i] + " Is a Vowel");
    }
}
//Find the Largest Number Among Three Numbers

var a = 1;
var b = 21;
var c = 19;

if (a > b && a > c) {
    console.log("large" + (a));
} else if (b > a && b > c) {
    console.log("large" + (b));
} else if (c > a && c > b) {
    console.log("large" + (c))

}


//Find the Largest Number Among Three Numbers: code minimize
var a = 1;
var b = 21;
var c = 19;

if (a > b && a > c) {
    console.log("large" + (a));
} else if (b > c) {
    console.log("large" + (b));
} else {
    console.log("larger" + (c));
}


//Find the Roots of a Quadratic Equation
var a = 3;
var b = -5;
var c = -8;


var operand = (b * b) - (4 * a * c); //If get negative value in square.It's shows NaN
if (operand === NaN) {
    console.log("not number");
} else {
    var numerator = (-b) + Math.sqrt(operand); //Math.sqrt:For square root;
    var numerator0ne = (-b) - Math.sqrt(operand);
    console.log(numerator / 2 * a);
    console.log(numerator0ne / 2 * a);
}
//Check Leap Year

var year = [2016, 2015];
var DivYear = 4;
for (i = 0; i < year.length; i++) {

    if (year[i] % DivYear == 0) {
        console.log("Leap Year" + 2016);
    } else {
        console.log("Not Leap Year" + 2015);
    }
}
//Find Factorial of a Number

var num = 4;
var answer = 1;
for (var i = 4; i >= 1; i--) {
    answer = answer * i;
    /*answer=1*4;answer;
      answer=4*3=12; answer=12;
      answer=12*2=24; answer=24;
       answer=24*1=24; answer=24
       answer change in every loop*/
}
console.log(answer);
//Generate Multiplication Table
var table = 2;
for (var i = 1; i <= 10; i++) {
    console.log((i) * 2);
}
//Display Fibonacci Sequence
var previous = 0;
var current = 1;
var TillNumber = 10;
console.log(previous);
console.log(current);
for (var i = 1; i <= TillNumber; i++) {
    var Next = current + previous;
    previous = current;
    current = Next;
    console.log(Next);
}
//Display Characters from A to Z Using Loop

var a = 65;
var z = 91;
for (i = a; i < z; i++) {
    var str = String.fromCharCode(i); //String.fromCharCode = Convert a Unicode number into a character
    console.log(str);
}
//Number of Digits in an Integer

var MainVariable = 3436655443;
var i = 0;
while (MainVariable > 0) {
    MainVariable = parseInt(MainVariable / 10);
    i++;
}

console.log(i)
    //Reverse a Number
var MainVariable = 3436655443;
var Appender = ""; //in string number can't add
while (MainVariable > 0) {
    Appender = Appender + parseInt(MainVariable % 10)
    MainVariable = parseInt(MainVariable / 10);
}

console.log(Appender);
//Calculate the Power of a Number

var a = 12;
var b = 2;

for (var i = 1; i <= 12; i++) {
    a = a * i
    console.log(a);
}
//Check Whether a Number is Palindrome or Not
var MainVariable = 151;
var orginal = MainVariable; //orginal always const it will not change when mainvariable value changeing.
var Appender = "";
while (MainVariable > 0) {
    Appender = Appender + parseInt(MainVariable % 10)
    MainVariable = parseInt(MainVariable / 10);
}
var a = parseInt(Appender)
if (a == orginal) {
    console.log("It's Palindrome:" + a)
} else {
    typeof console.log("It's not Palindrome:" + a)
}