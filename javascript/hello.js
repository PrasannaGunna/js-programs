// // Hello Program//
// console.log('Hello,World');


// // Add Numbers//
// var num1 =(10)
// var num2 =(20)
// result = num1+num2
// document.write(result);  //to get result in webpage//


// //square root//
// var a = 20
// var result = Math.sqrt(20)
// console.log(result);

// //using prompt//
// var number = prompt('Enter the number: ');
// var result = Math.sqrt(number);
// console.log(`The square root of ${number} is ${result}`);



//Calculate the Area of a Triangle//
// var basevalue = 10
// var heightvalue =20
// var tri = (basevalue*heightvalue) /2;
// console.log(tri);


//swap variables//
// a=10;
// b=20;
// temp = a;
// a = b;
// b = temp;
// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);


//Kilometers to Miles//
// var kilometers = 4
// var factor = 0.621371
// var miles = kilometers * factor;
// console.log(miles);


// //Celsius to Fahrenheit//
// var celsius =50
// var fahrenheit = (celsius * 1.8) + 32
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


//Generate a Random Number//
// var a = Math.random();
// console.log(a);


//Odd//
// var a =7
// if(a % 2 == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }


//Even//
// var a =10
// if(a % 2 == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }


//large number//
// var a = 10
// var b = 80
// var c = 50
// if(a>=b && a>=c) {
//     largest = a;
// }
// else if (b>=a && b>=c) {
//     largest = b;
// }
// else {
//     largest = c;
// }
// console.log("The largest number is " + largest);


//Factorial//
// var a = 5

// var fact=1;  
      
// for(var i = 1; i <= a; i++){    
//       fact=fact*i;    
//   }    
//   console.log("Factorial of " + a + " is: " + fact);  


//Multiplication Table//
// var a = 4
// for(let i = 1; i <= 10; i++) {
//     const result = i * a;
//     console.log(`${a} * ${i} = ${result}`);
// }


//Fibonacci Series//
// var n = 10
// var n1 = 0;
// var n2 = 1;
// var n3;

// console.log('Fibonacci Series : ');

// for (var i = 1; i <= n; i++) {
//     console.log(n1);
//     n3 = n1 + n2;
//     n1 = n2;
//     n2 = n3;
// }


//reverse//
// var rev = 0;
// var num = 185;
// var rem;

// while(num != 0){
// 	rem = num % 10;
//   rev = rev * 10 + rem;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : " + rev);



// Armstrong number//
// let sum = 0;
// var number = 258;
// let temp = number;
// while (temp > 0) {
   
//     let remainder = temp % 10;
//     sum += remainder * remainder * remainder;
//     temp = parseInt(temp / 10); 
// }

// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }


//Calculater//
// var operator = prompt('Enter operator ( either +, -, * or / ): ');
// var number1 = parseFloat(prompt('Enter first number: '));
// var number2 = parseFloat(prompt('Enter second number: '));

// let result;

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);



//Palindrome//
// var n = 546;

// var rem;
// var rev = 0;
// var temp = n;

// while (n != 0) {
//     rem = n % 10;
//     rev = rev * 10 + rem;
//     n = parseInt(n / 10);
// }

// if (temp == rev) {
//     console.log('It is a palindrome');
// } else {
//     console.log("it is not a palindrome");
// }




// Sum of natural number//
// let a =50
// let sum = 0;
// for (let i = 1; i <= a; i++) {
//     sum += i;
// }
// console.log('The sum of natural numbers:', sum);


//Check the Last Digit//
// a = 106
// b = 206
// c = 406
// const res1 = a % 10;
// const res2 = b % 10;
// const res3 = c % 10;

// if(res1 == res2 && res1 == res3) {
//     console.log(`${a}, ${b} and ${c} have the same last digit.`);
// }
// else {
//     console.log(`${a}, ${b} and ${c} have different last digit.`);
// }




//ASCII Value//
// var string = prompt('Enter a character: ');
// var result = string.charCodeAt(0);
// console.log(`The ASCII value is: ${result}`);



//LCM//
// num1 = 50
// num2 = 100
// let min = (num1 > num2) ? num1 : num2;

// // while loop
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++;
// }



//Words in Alphabetical order//
// const string = prompt('Enter a sentence: ');
// const words = string.split(' ');
// words.sort();
// console.log('The sorted words are:');
// for (const element of words) {
//   console.log(element);
// }



//
// const person = {
//     name: 'sidhu',
//     gender: 'male'
// }
// console.log(person);


// Replace a character of a string//
// var string = ' yellow flower with green leaves';
// var newText = string.replace('yellow', 'green');
// console.log(newText);



// Convert first letter of a string to uppercase//
// function capitalizeFirstLetter(str) {
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalized;
// }
// const string = prompt('Enter a string: ');

// const result = capitalizeFirstLetter(string);

// console.log(result);





// Number of vowels in a string //
// function countVowel(str) { 
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }
// const string = prompt('Enter a string: ');
// const result = countVowel(string);
// console.log(result);




// Remove a property from an object//
// var employee = { 
//     name: 'Hema',
//     age: 28,
//     hobbies: ['playing', 'crafts', 'reading'],
//     greet: function() {
//         console.log('');
//     },
//     extra :{
//         height : 5
//     }
// };
// delete employee.greet;
// delete employee['extra'];
// console.log(employee);



// program to check if a string starts with 'M' and ends with 'A'//
// function checkString(str) {
//     if(str.startsWith('M') && str.endsWith('A')) {
//         console.log('The string starts with M and ends with A');
//     }
//     else if(str.startsWith('M')) {
//         console.log('The string starts with M but does not end with A');
//     }
//      else if(str.endsWith('A')) {
//         console.log('The string starts does not with M but end with A');
//     }
//     else {
//         console.log('The string does not start with M and does not end with A');
//     }
// }
// let string = prompt('Enter a string: ');
// checkString(string);



//check if a key exists//
// const person = {
//     id: 1,
//     name: 'sidhu',
//     age: 10
// }
// const hasKey = 'name' in person;

// if(hasKey) {
//     console.log('The key exists.');
// }
// else {
//     console.log('The key does not exist.');
// }



// program to clone the object//
// const person = {
//     name: 'sidhu',
//     age: 10
// }
// const clonePerson = Object.assign({}, person);

// console.log(clonePerson);
// clonePerson.name = 'Sidharth';

// console.log(clonePerson.name);
// console.log(person.name);



//loop through an object using for...in loop//
// const student = { 
//     name: 'sidhu',
//    age: 10,
//     hobbies: ['playing', 'games', 'movies'],
// };
// for (let key in student) { 
//     let value;
//     value = student[key];
//     console.log(key + " - " +  value); 
// } 



//merge property of two objects//
// var person = {
//     name: 'sidhu',
//     age:7
// }
// var student = {
//     gender: 'male'
// }
// const newObj = Object.assign(person, student);
// console.log(newObj);



// count the number of keys/properties in an object //
// const student = { 
//     name: 'sidhu',
//         age: 10,
//          hobbies: ['playing', 'games', 'movies'],
//      };
// let count = 0;
// for(let key in student) {
//     ++count;
// }
// console.log(count);



// program to add a key/value pair to an object//
// const person = {
//     name: 'sidhu',
//     age: 7,
//     gender: 'male'
// }
// person.height = 4;
// console.log(person);



// program to replace all occurrence of a string//
// const string = 'a yellow flower with yellow leaves';
// const regex = /yellow/gi;
// const newText = string.replace(regex, 'blue');
// console.log(newText);


//multiline strings//
// const message = 'I am prasanna\n' + 
//     'employee\n' + 
//     'in Techno Elevate.'
// console.log(message);



// generate random strings//
// const characters ='kjhiuty5e4TYREW43TY';
// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
// console.log(generateString(6));



//string starts with another string//
// const string = 'hello';
// const toCheckString = 'hey';
// if(string.startsWith(toCheckString)) {
//     console.warn('The string starts with "hey".');
// }
// else {
//     console.warn(`The string does not starts with "hey".`);
// }


//trim a string//
// const string = '      Hello World       ';
// const result = string.trim();
// console.log(result);




// convert an object to a string //
// const person = {
//     name: 'sidhu',
//     age: 7
// }
// const result =  JSON.stringify(person);
// console.log(result);
// console.log(typeof result);



// js program to perform string comparison//
// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';
// const result = string1.toUpperCase() === string2.toUpperCase();
// if(result) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }



// encode a string to Base64 //
// const str = "Learning Angular"; 
// const result = window.btoa(str);
// console.log(result);
// const result1 = window.atob(result);
// console.log(result1);



//replace all instances of a character in a string//
// const string = 'Learning angular Program';
// const result = string.replace(/a/g, "A");
// console.log(result);



// replace all line breaks in a string with <br> //
// const string = `I am Learning Angular.
// Angular is tough.
// Angular is okay.`;
// const result = string.replace(/(\r\h\y)/g, '<br>');
// console.log(result);



//display the date and time//
// const date = new Date(2022, 0, 9, 5, 25, 8);
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log('Date: ' + n);
// console.log('Time: ' + time);



//leap year//
// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// const year = prompt('Enter a year:');
// checkLeapYear(year);



// display the date //
// const date = new Date();
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log('Date: ' + n);
// console.log('Time: ' + time);



//insert an item at a specific index into an array//
// function insertElement() {
//     let array = [1, 2, 3, 4, 5];
//     let index = 3;
//     let element = 8;
//     array.splice(index, 0, element);
//     console.log(array);
// }
// insertElement();



//shift//
// names =['manu','janu','banu']
// names.shift();
// console.log(names);

//pop//
// names =['manu','janu','banu']
// names.pop();
// console.log(names);




//empty an array//
// function emptyArray(arr) {
//     arr = [];
//     return arr;
// }
// const array = [2, 8 ,36];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);




//add element to an array//
// function addElement(arr) {
//     arr.unshift(10);
//     console.log(arr);
// }
// const array = [2,5, 6];
// addElement(array);



//convert date to number//
// const a = new Date();
// console.log(a);
// const result = a.getTime();
// console.log(result);




// passing object //
// let obj = {
//     name: 'sidhu',
//     age: 7
// }
// console.log(obj);




//named function//
// function example(a,b){
// var res = a+b;
// console.log(res);
// }
// example(10,20);



//Switch//
// var arr = [1,2,3,4,5,6]
// for (var i=0; i<arr.length; i++){
//     if(arr[i]==5){
//         console.log(arr[i]);
//     }
// }




//call back function//
// function prasanna(hai){
//     console.log("this is prasanna");
//     hai()
// }
// function me(){
//     console.log("this is me");
// }
// prasanna(me);