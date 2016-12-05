//REST OPERATOR

//Definition:
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array
//It is an opposite of spread operator 


//ES5
//In ES5, we handled an indefinite number of arguments like so

// function logArguments(){
// 	for(var i=0;i< arguments.length;i++){
// 		console.log(arguments[i]);
// 	}
// }

// logArguments(1,2,3,4,5);


//ES6
"use strict";
console.log("**ES6 rest operator**")
function logArguments(...args){
	console.log("args:",args);
	console.log("args instance of array", (args instanceof Array));	
}

logArguments(1,2,3,4,5);


//Another way

function logArgumentsAnother(a,b,...args){
	console.log("a,b,args:", a,b,args);
}

logArgumentsAnother(1,2,3,4,5)


//TIP TO REMEMBER:
// spread operator (...) converts array in to list of arguments
// rest operator(...) converts list of arguments in to array 