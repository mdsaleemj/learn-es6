

//IN ES5 , we could find the max of values in an array by using the apply method on Math.max like this:
//because Math.max expects argument list


//ES5 
//SNIPPET START

 'use strict';
// var max = Math.max.apply(null,[-1, 100, 9001, -32]);
// console.log("Max Value:" , max);



//ES6
// ... is the spread operator if used with array

//Definition:
//The spread syntax allows an expression to be expanded in places
// where multiple arguments (for function calls) or multiple elements (for array literals)
//  or multiple variables  (for destructuring assignment) are expected.


var max = Math.max(...[-1, 100, 9001, -32]);
console.log("Max Valule:" , max);


//spread the array value in to individual values
var myFun = function(a,b,c){
	console.log("arguments a,b,c:" ,a,b,c);
}

var params = [1,2,3];
myFun(...params);



//Spreading the value for array literals;
console.log("***spreading the value for array literals***");
var array = [1,2,3,4];
var [a,b,c,d] = [...array];   //both array destructing and spread the array
console.log("a,b,c,d:",a,b,c,d);


//concat the array using spread operator
let cities = ['San Francisco', 'Los Angeles'];
let places = ['Miami', ...cities, 'chicago'];
console.log("places:",places);