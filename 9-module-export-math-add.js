//ES6 Export


'use strict';

//exporting variables

export let name = 'David';
export let age  ='25';


//Exporting a list of objects

function sumTwo(a,b){
	return a+b;
}

function sumThree(a,b,c){
	return a+b+c;
}
 
export  {sumTwo , sumThree}; //this exporting the list of function as single object

//or can be done by the following way

// export function sumTwo(a,b){
// 	return a + b;
// }

// export function sumThree(a, b,c){
// 	return a + b + c;
// }



