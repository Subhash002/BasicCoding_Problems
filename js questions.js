// JavaScript Program To Print Hello World
const helloWorld = () => {
  console.log("Hello World");
};
// JavaScript Program to Add Two Numbers
const sum = (...args) => {
  let sum = 0;
  args.forEach((num) => {
    sum += num;
  });
  return sum;
};
// JavaScript Program to Find the Square Root
const sqrRoot = (num) => {
  return Math.sqrt(num);
};
// JavaScript Program to Calculate the Area of a Triangle
const areaTring = (l, h) => {
  return (1 / 2) * l * h;
};
// JavaScript Program to Swap Two Variables
const swap = (x, y) => {
  [x, y] = [y, x];
  return [x, y];
};
// Javascript Program to Solve Quadratic Equation
function quardicEquation (a,b,c){
  let d = b * b - (4 * a * c);
  if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      console.log(`Roots are real and different`);
      console.log(`X1 IS ${x1} AND X2 IS ${x2}`);
  } else if (d === 0) {
      let x1 = (-b) / (2 * a);
      let x2 = x1;
      console.log(`Roots are real and same`);
      console.log(`X1 IS ${x1} AND X2 IS ${x2}`);
  } else {
      console.log(`Roots are complex and different`);
      console.log(`This cant be solved`);
  }
}

// JavaScript Program to Convert Kilometers to Miles
const toMiles = (km) => {
  return 0.62 * km;
};
// Javascript Program to Convert Celsius to Fahrenheit
// Javascript Program to Generate a Random Number
const geneRandom = () => {
  return Math.random();
};
// Javascript Program to Check if a number is Positive, Negative, or Zero
const numCheck = (num) => {
  if (Number.isInteger(num)) {
    return num > 0
      ? console.log("Positive Number")
      : num === 0
      ? console.log("Number is Zero")
      : console.log("Number is negetive");
  }
};
// Javascript Program to Check if a Number is Odd or Even
const oddEven = (num) => {
  return num % 2 === 0 ? `Even Number` : `Odd Number`;
};
// JavaScript Program to Find the Largest Among Three Numbers
const largestNum = (num1, num2, num3) => {
  if (Number.isInteger(num1, num2, num3)) {
    return num1 > num2 && num3
      ? `Number 1 is largest amoung all`
      : num2 > num3
      ? `Number 2 is alrgest amoung all`
      : `Number 3 is largest amoung all`;
  }
};
// JavaScript Program to Check Prime Number
const primeCheck = (num)=>{
  let counter = 0;
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          counter++;
      }
  }
  if (counter > 2)
      return `NOT A PRIME NUMBER`;
  else
      return `PRIME NUMBER`
}

// JavaScript Program to Print All Prime Numbers in an Interval
const primeCheckInterval = (num1,num2)=>{
  let primeList = [];
  for(let j=num1;j<num2;j++){
      let isFlag=0;
      for(let i=2;i<j;i++){
          if(j%i===0){
              isFlag=1;
          }
      }
      if(!isFlag){
          primeList.push(j)
      }
  }
  return primeList;
}
// JavaScript Program to Find the Factorial of a Number
// JavaScript Program to Display the Multiplication Table
// JavaScript Program to Print the Fibonacci Sequence
const fibonacciNumber = (n)=>{
  let sum = 0
  let first = 0;
  let second = 1;
  console.log(first);
  while (n > 0) {
      sum = first + second
      first = second;
      second = sum;
      console.log(first);
      n--;
  }
}
// JavaScript Program to Check Armstrong Number
// JavaScript Program to Find Armstrong Number in an Interval
// JavaScript Program to Make a Simple Calculator
// JavaScript Program to Find the Sum of Natural Numbers
// JavaScript Program to Check if the Numbers Have Same Last Digit
// JavaScript Program to Find HCF or GCD
// JavaScript Program to Find LCM
// JavaScript Program to Find the Factors of a Number
// JavaScript Program to Find Sum of Natural Numbers Using Recursion
// JavaScript Program to Guess a Random Number
// JavaScript Program to Shuffle Deck of Cards
// JavaScript Program to Display Fibonacci Sequence Using Recursion
function fibRecursion(n){
  if(n<2){
    return n;
  }
  else return fibRecursion(n-1)+fibRecursion(n-2)
}
// JavaScript Program to Find Factorial of Number Using Recursion
// JavaScript Program to Convert Decimal to Binary
// JavaScript Program to Find ASCII Value of Character
// JavaScript Program to Check Whether a String is Palindrome or Not
// JavaScript Program to Sort Words in Alphabetical Order
// JavaScript Program to Replace Characters of a String
// JavaScript Program to Reverse a String
const reverse=(string)=>{
  return string.split("").reverse().join("")
}
// JavaScript Program to Create Objects in Different Ways
// JavaScript Program to Check the Number of Occurrences of a Character in the String
// JavaScript Program to Convert the First Letter of a String into UpperCase
// JavaScript Program to Count the Number of Vowels in a String
// JavaScript Program to Remove a Property from an Object
// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
// JavaScript Program to Check if a Key Exists in an Object
// JavaScript Program to Clone a JS Object
// JavaScript Program to Loop Through an Object
// JavaScript Program to Merge Property of Two Objects
const mergeProperty=(...object)=>{
  return Object.assign(...object);
}
// JavaScript Program to Count the Number of Keys/Properties in an Object
// JavaScript Program to Add Key/Value Pair to an Object
// JavaScript Program to Replace All Occurrences of a String
// JavaScript Program to Create Multiline Strings
// JavaScript Program to Format Numbers as Currency Strings
// JavaScript Program to Generate Random String
function generateRandomString(wordLength,wordCount) {
  let randomString = '';
  for (let j = 0; j < wordCount; j++) {
      for (let i = 0; i < wordLength; i++) {
          let randomNumber = Math.floor(Math.random() * (122 - 97 + 1) + 97);
          randomString += String.fromCharCode(randomNumber);
      }
      randomString+=' ';
  }

  return randomString;
}
// JavaScript Program to Check if a String Starts With Another String
// JavaScript Program to Trim a String
// JavaScript Program to Convert Objects to Strings

// JavaScript Program to Check Whether a String Contains a Substring
// JavaScript Program to Compare Two Strings
// JavaScript Program to Encode a String to Base64
// JavaScript Program to Replace all Instances of a Character in a String
// JavaScript Program to Replace All Line Breaks with
// JavaScript Program to Display Date and Time
// JavaScript Program to Check Leap Year
// JavaScript Program to Format the Date
// Javascript Program to Display Current Date
// JavaScript Program to Compare The Value of Two Dates
// JavaScript Program to Create Countdown Timer
// JavaScript Program to Remove Specific Item From an Array
const removeElement=(arr,n)=>{
  return arr.filter(e=>e!==n)
}
// JavaScript Program to Check if An Array Contains a Specified Value
// JavaScript Program to Insert Item in an Array
// JavaScript Program to Append an Object to An Array
// JavaScript Program to Check if An Object is An Array
// JavaScript Program to Empty an Array
const empty = (arr) => {
  return (arr = "");
};
// JavaScript Program to Add Element to Start of an Array
const addFirst = (arr,ele)=>{
  let result = [];
  result[0] = ele;
  for (let i = 0; i < arr.length; i++) {

      result[i+1] = arr[i];
  }
  return result;
}
// JavaScript Program to Remove Duplicates From Array
const removeEle = (arr)=>{
  let results = [];
  for (let i = 0; i < arr.length; i++) {
      if (!results.includes(arr[i])) {
          results.push(arr[i]);
      }
  }
  return results;
}
// JavaScript Program to Merge Two Arrays and Remove Duplicate Items
const removeEle = (arr1,arr2)=>{
  let newArray=[...arr1,...arr2]
let results = [];
for (let i = 0; i < newArray.length; i++) {
    if (!results.includes(newArray[i])) {
        results.push(newArray[i]);
    }
}
return results;
}
// JavaScript Program to Sort Array of Objects by Property Values
function functionSort(arr){
  return arr.sort((a,b)=>{
    a.x-b.x;
  })
}
// JavaScript Program to Create Two Dimensional Array
// JavaScript Program to Extract Given Property Values from Objects as Array
// JavaScript Program to Compare Elements of Two Arrays
// JavaScript Program to Get Random Item From an Array
const getRandEle=(arr)=>{
  let random=Math.floor(Math.random()*arr.length)
  return arr[random];
}
// JavaScript Program To Perform Intersection Between Two Arrays
// JavaScript Program to Split Array into Smaller Chunks
function splitter(arr,n){
  let newArray=[];
  for(let i=0;i<arr.length;i+=n){
      let smallArray=arr.slice(i,i+n);
      newArray.push(smallArray);
  }
  return newArray;
}

// JavaScript Program to Include a JS file in Another JS file
// JavaScript Program to Get File Extension
const fileExt = (completeName) => {
  let check = completeName.split("");
  return check.slice(check.indexOf(".") + 1, check.length).join("");
};
// JavaScript Program To Check If A Variable Is undefined or null
// JavaScript Program to Set a Default Parameter Value For a Function
// JavaScript Program to Illustrate Different Set Operations
// Javascript Program to Generate a Random Number Between Two Numbers
function randomBw(max,min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// JavaScript Program To Get The Current URL
const currentURL=()=>{
  return window.location.href;
}
// JavaScript Program to Validate An Email Address
const emailValidate=(email)=>{
  if(email.split("").includes('.','@','com')){
      return `Valid EMAIL`;
  } else return `INVALID EMAIL`;
}
// JavaScript Program to Check If a Variable is of Function Type
// JavaScript Program To Work With Constants
// JavaScript Program to Pass Parameter to a setTimeout() Function
const delayedFunction=(fn,delay)=>{
  return setTimeout(fn,delay);
}
// JavaScript Program to Generate a Range of Numbers and Characters
// JavaScript Program to Perform Function Overloading
// JavaScript Program to Implement a Stack
// JavaScript Program to Implement a Queue
// JavaScript Program to Check if a Number is Float or Integer
const numCheck=(num)=>{
  if(Number.isInteger(num)){
    //Will implement soon
  }
}
// JavaScript Program to Pass a Function as Parameter
const functionUnderFuntion = (fun, str) => {
  return fun(str);
};
// JavaScript Program to Get the Dimensions of an Image
const imageSize = ()=>{//This function will return dimention of first image of any website
  let myImage = document.querySelector("img");
  let width = myImage.clientWidth;
  let height = myImage.clientHeight;
  console.log(width);
  console.log(height)
}
// JavaScript Program to Remove All Whitespaces From a Text
const removeSpace = (str) => {
  return str
    .split("")
    .filter((e) => !e === " ")
    .join("");
};
// JavaScript Program to Write to Console
const writeConsole=(value)=>{
  return `${value}`;
}
// JavaScript Program to Convert Date to Number
const dateToString=()=>{
  let date=new Date();
  return date.getTime();
}
// Implement Area with two subclass that inherits properties of base class area
//JavaScript Program to remove duplicates from array.
const removeEle = (arr)=>{
  let results = [];
  for (let i = 0; i < arr.length; i++) {
      if (!results.includes(arr[i])) {
          results.push(arr[i]);
      }
  }
  return results;
}
//mishraprasant73@gmail.com