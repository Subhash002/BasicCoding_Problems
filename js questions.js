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
  return `${0.62 * km} kms`;
};
// Javascript Program to Convert Celsius to Fahrenheit
const tofahrenheit=(cel)=>{
  return `${(cel*(9/5))+32} Degree F`
}
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
const fact = (num)=>{
  if (num === 1)
      return 1;
  else return num*fact(num-1);
}

// JavaScript Program to Display the Multiplication Table
const multiplicatinTable = (num)=>{
  for (let i = 1; i < 11; i++) {
      console.log(`${num} * ${i} =${num * i}`);
  }
}

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
const checkArmStrong1 = (n)=>{
  const numArray = n.toString().split("").map(n=>parseInt(n));
  return n === numArray.reduce((total,item)=>total + Math.pow(item, numArray.length), 0);
}
// JavaScript Program to Find Armstrong Number in an Interval
function armNumber(num1,num2){
  for(i=num1;i<=num2;i++){
      const numArray = i.toString().split("").map(i=>parseInt(i));
      if(i === numArray.reduce((total,item)=>total + Math.pow(item, numArray.length), 0)){
          console.log(i);
      }
  }
}
// JavaScript Program to Make a Simple Calculator
const calculator = (a,b,op)=>{
  let ops = {
      add: (a,b)=>a + b,
      substract: (a,b)=>a - b,
      multiply: (a,b)=>a * b,
      divide: (a,b)=>a / b,
      modulas: (a,b)=>a % b,
  }
  return ops[op](a,b);
} //eg-calculator(4, 3, 'add')


// JavaScript Program to Find the Sum of Natural Numbers
const sumNN=(n)=>{
  return n*(n+1)/2;
}
// JavaScript Program to Check if the Numbers Have Same Last Digit
const checkLastDigit = (...args)=>{
  const lastDigit = args.map((num)=>num % 10);
  return lastDigit.every((digit=>lastDigit.indexOf(digit) !== lastDigit.lastIndexOf(digit)));
}
// JavaScript Program to Find HCF or GCD
const multiFactor = (a,b,op)=>{
  let ops = {
      LCM: (a,b)=>{
          let results = [];
          for (let i = 1; i <= Math.max(a, b); i++) {
              if (a % i === 0 && b % i === 0)
                  results.push(i);
          }
          let hcf = Math.max(...results);
          return (a * b) / hcf;
      }
      ,
      HCF: (a,b)=>{
          let results = [];
          for (let i = 1; i <= Math.max(a, b); i++) {
              if (a % i === 0 && b % i === 0)
                  results.push(i);
          }
          return Math.max(...results);
      }
      ,
      GCD: (a,b)=>{
          return !b ? a : multiFactor(b, a % b, 'GCD')
      }
      ,
  };
  return ops[op](a, b);
}
// JavaScript Program to Find LCM
//-->LCM COVERED IN ABOVE Program
// JavaScript Program to Find the Factors of a Number
const factor = (num)=>{
  let results = [];
  for (let i = 1; i <= num; i++) {
      if (num % i === 0)
          results.push(i);
  }
  return results;
}
// JavaScript Program to Find Sum of Natural Numbers Using Recursion
const sumN=(n)=>{
  if(n<1) return 0;
  else 
      return n+sumN(n-1);
}
// JavaScript Program to Guess a Random Number
function guessRandomNumber(n) {
  return (n === Math.floor(Math.random() * 10) + 1) ? `CORRECT GUESS` : `INCORRECT GUESS`;
}

// JavaScript Program to Shuffle Deck of Cards
function generateDeck(){
	const deck=[];
	const suits=['clubs','diamonds','hearts','spades'];
	const values=['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
	for(const suit of suits){
        for(const value of values){
            deck.push({
                suit:suit,
                value:value,
            })
        }
    }
    return deck;
	
}

function shuffleDeck(deck){
	for(let i=deck.length-1;i>0;i--){
		let randomIndex=Math.floor(Math.random()*(i+1));
		let temp=deck[i];
		deck[i]=deck[randomIndex];
		deck[randomIndex]=temp;
	}
	return deck;
}

// JavaScript Program to Display Fibonacci Sequence Using Recursion
function fibRecursion(n){
  if(n<2){
    return n;
  }
  else return fibRecursion(n-1)+fibRecursion(n-2)
}
// JavaScript Program to Find Factorial of Number Using Recursion
const fact = (n)=>{
  if (n === 1)
      return 1;
  else
      return n * fact(n - 1);
}
// JavaScript Program to Convert Decimal to Binary
function toBinary(num){
  return num.toString(2);
}

// JavaScript Program to Find ASCII Value of Character
function toASCII(letter){
  return letter.charCodeAt();
}
// JavaScript Program to Check Whether a String is Palindrome or Not
const Palindrome=(str)=>{
  return (str.toLowerCase().split('').reverse().join('')===str.toLowerCase())?`PALINDROME`:`NOT A PALINDROME`;
}
// JavaScript Program to Sort Words in Alphabetical Order
function wordSort(str){
  return str.split('').sort().join('');
}
// JavaScript Program to Replace Characters of a String
const replacer = (str, findC, replaceC) => {
  const strArray = str.split('');
  const findArray = findC.split('');
  const replaceArray = replaceC.split('');
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < findArray.length; j++) {
      if (strArray[i] === findArray[j] && strArray[i + 1] === findArray[j + 1]) {
        strArray[i] = replaceArray[j];
        strArray[i + 1] = replaceArray[j + 1];
      }
    }
  }
  return strArray.join('');
}


// JavaScript Program to Reverse a String
const reverse=(string)=>{
  return string.split("").reverse().join("")
}
// JavaScript Program to Create Objects in Different Ways
// Using constructor function 
function Person() {
  this.name = 'John',
  this.age = 20
}
const person = new Person();

//Using Instance of Object directly
const person=new Object({
  name = 'John',
  age = 20
})

//Using Object literal
let Person={
  name: 'John',
    age: 20
}
// JavaScript Program to Check the Number of Occurrences of a Character in the String
const occurEN=(str,check)=>{
  const splitArray=str.split('');
  let counter=0;
  splitArray.forEach(e=>{
      if(e===check) counter++;
  })
  return counter;
}
// JavaScript Program to Check the Number of Occurrences of a Character in the String and returns the most repeatative one
const CharCount=(str)=>{
  const mapping={};
  str.split('').forEach(e=>{
      if(!mapping[e]){
          mapping[e]=0;
      }
      mapping[e]++;
  })
  
return `${Object.keys(mapping).filter(key=>mapping[key]===Math.max(...(Object.values(mapping))))}:${Math.max(...(Object.values(mapping)))}`;
}
// JavaScript Program to Convert the First Letter of a String into UpperCase
const firstUpper = (str)=>{
  const strArray = str.split(" ");
  return strArray.map(e=>e[0].toUpperCase() + e.slice(1, e.length)).join(" ");
}

// JavaScript Program to Count the Number of Vowels in a String
const vowelCount=(str)=>{
  const vowels=['a','e','i','o','u'];
  const strArray=str.split("");
  let counter=0;
  strArray.forEach(el=>{
      if(vowels.includes(el)) counter++;
  })
  return `Total number of vowels in the provided string are ${counter}`;
}
// JavaScript Program to Remove a Property from an Object
const deletePro=(obj,property)=>{
  for(let x in obj){
      if(x===property){
          delete obj[x];
      }
  }
  return obj;
} // eg:-deletePro(person,'age')
// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
const checkString=(str,start,end)=>{
  const check=str.split('');;
   let isContain=false;
   if(check[0]===start && check[check.length-1]===end){
       isContain=true;
   }
   return isContain;
}
// JavaScript Program to Check if a Key Exists in an Object
const keyCheck=(obj,key)=>{
  let isContain=false;
  for(const k in obj){
      if(k===key) isContain=true;
  }
  return isContain;
}
// JavaScript Program to Clone a JS Object
//Method1-
const deepClone=(obj)=>{ return structuredClone(obj);}

//Method 2-
const clone=(input)=>{
  if(input===null || input!=='Object') return input;
  const copy=Array.isArray(input)?[]:{};
  for(key in input){
      const value=input[key];
      copy[key]=clone(value);
  }
  return copy;
}
// JavaScript Program to Loop Through an Object
const objectLoop = (input)=>{
  const isObject = (val)=>{
      return (val === null) ? false : (typeof val === 'object');
  }
  for (let key in input) {
      if (isObject(input[key]))
          objectLoop(input[key]);
      else
          console.log(key, input[key]);
  }
}

// JavaScript Program to Merge Property of Two Objects
const mergeProperty=(...object)=>{
  return Object.assign(...object);
}
// JavaScript Program to Count the Number of Keys/Properties in an Object
const objSize=(obj)=>{
  return `Value count is : ${Object.values(obj).length} and Key Values is ${Object.keys(obj)}`
}
// JavaScript Program to Add Key/Value Pair to an Object
const addKeyValue=(obj,key,value)=>{
  return {...obj,[key]:value};
}
// JavaScript Program to Replace All Occurrences of a String
const replaceOccur2=(str,word,replace)=>{
  return str.split(word).join(replace);
}
//M-2
const replaceOccur = (str,word,replace)=>{
  return str.split(' ').map(item => item === word ? replace : item).join(' ');
}
// JavaScript Program to Create Multiline Strings

// JavaScript Program to Format Numbers as Currency Strings
const formatCurrency=(number)=> {
  return (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number));
}
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
function startsWith(str, searchString) {
  const strArray = str.split('');
  const searchArray = searchString.split('');
  for(let i=0;i<str.length;i++){
      if(strArray[i]===searchArray[i] && strArray[i+1]===searchArray[i+1]) return true;
  }
  return false;
}
// JavaScript Program to Trim a String

function trimString(str) {
  let start = 0;
  let end = str.length - 1;
  while (str[start] === ' ')
      start++;
  while (str[end] === ' ')
      end--;
  return str.substring(start,end+1)
}
// JavaScript Program to Convert Objects to Strings
const objToString=(obj)=>{
  return JSON.stringify(obj);
}
// JavaScript Program to Check Whether a String Contains a Substring
const subString = (str,word)=>{
  const strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === word) {
          return true;
      }
  }
  return false;
}
// JavaScript Program to Compare Two Strings
const sameString=(str1,str2)=>{
  return JSON.stringify(str1)===JSON.stringify(str2);
}
// JavaScript Program to Encode a String to Base64
function Encode(str){
  return btoa(str);

}
// JavaScript Program to Replace all Instances of a Character in a String
const replaceOccur2=(str,word,replace)=>{
  return str.split(word).join(replace);
}
// JavaScript Program to Replace All Line Breaks with
const replaceLineBreaks=(str,replace)=>{
  return str.split(/\n/g).join(replace);
}
// JavaScript Program to Display Date and Time
const dateTime=()=>{
  return `Date is ${new Date().getDate()} TIme is ${new Date().toLocaleTimeString()}`
}
// JavaScript Program to Check Leap Year
function checkLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}
// JavaScript Program to Format the Date
function formatDate(){
  let date=new Date().getDate();
  let month=new Date().getMonth()+1;
  let year=new Date().getFullYear();
  return date+"-"+month+"-"+year;
}
// Javascript Program to Display Current Date
const currentDate2 = ()=>{
  return `current date is: ${new Date().getDate()}-` + new Date().toLocaleString("en-us", { month: "long" });
}
// JavaScript Program to Compare The Value of Two Dates
const compareDates = (d1,d2)=>{
  let date1 = new Date(d1);
  let date2 = new Date(d2);

  if (date1 < date2) {
      console.log(`${d1} is less than ${d2}`);
  } else if (date1 > date2) {
      console.log(`${d1} is greater than ${d2}`);
  } else {
      console.log(`Both dates are equal`);
  }
};
// JavaScript Program to Create Countdown Timer

// JavaScript Program to Remove Specific Item From an Array
const removeElement=(arr,n)=>{
  return arr.filter(e=>e!==n)
}
// JavaScript Program to Check if An Array Contains a Specified Value
const arraySearch=(arr,i)=>{
  return arr.includes(i);
}
// JavaScript Program to Insert Item in an Array
const arrayInsert = (arr, i) => {
  return [i,...arr];
};
// JavaScript Program to Append an Object to An Array
const appendObject=(arr,input)=>{
  return [...arr,structuredClone(input)];
}
// JavaScript Program to Check if An Object is An Array
function checkObject(obj){
  return Array.isArray(obj);
 }
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
function twodArray(...arr){
  let newArr = [];
  arr.forEach(e=>{
      newArr.push([e]);
  });
  return newArr;
}
// JavaScript Program to Extract Given Property Values from Objects as Array
function extractPropertyValues(obj, key) {
  let result=[];
  if(typeof obj==='object'){
    for(let [k,v] of Object.entries(obj)){
      if(k===key) result.push(v);
      else if( v==='object'){
        let innerResults=extractPropertyValues(v,key);
        result=result.concat(innerResults);
      }
    }
  }
  return JSON.stringify(result);
}
// JavaScript Program to Compare Elements of Two Arrays
function compareArrayOAI(array1, array2) {
  if (array1.length !== array2.length)
      return `Comparision is not possible`;
  else {
      let a1 = array1.slice().sort();
      let a2 = array2.slice().sort();
      for (let i = 0; i < a1.length; i++) {
          if (a1[i] !== a2[i])
              return false;
      }
  }
  return true;
}
// JavaScript Program to Get Random Item From an Array
const getRandEle=(arr)=>{
  let random=Math.floor(Math.random()*arr.length)
  return arr[random];
}
// JavaScript Program To Perform Intersection Between Two Arrays
function arrayIntersection(array1,array2){
  let setA=new Set(array1);
  let setB=new Set(array2);
  let results=[];
  for(let i of setA){
      if(setB.has(i)) results.push(i);
  }
  return results;
}
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
function checkInput(input){
  return (input===undefined) || (input===null)
}
// JavaScript Program to Set a Default Parameter Value For a Function

// JavaScript Program to Illustrate Different Set Operations
// Subset
function subset(setA,setB){
  for(let i of setB){
      if(!setA.has(i)) return false;
  }
  return true;
}

const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['apple', 'orange']);

//Set difference
function difference(setA,setB){
  let differenceSET=new Set(setA);
  for(let i of setB){
      differenceSET.delete(i);
  }
  return differenceSET;
}

//SET UNION
function union(a,b){
  let unionSet=new Set(a);
  for(let i of b){
      unionSet.add(i);
  }
  return unionSet;
}
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

//Implement a higher order function 'randInt' which take 2 arguments length and multiplier and return array of random numbers
const randInt = (len, multiplier) => Array.from({length: len}, () => parseInt(Math.random() * multiplier));
const withLength=(len,fn)=>(...args)=>fn(len,...args)
const random5=withLength(5,randInt);
const random10=withLength(10,randInt);

//mishraprasant73@gmail.com