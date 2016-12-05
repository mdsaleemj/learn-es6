//var  versus let/const
//source : https://github.com/DrkSephy/es6-cheatsheet#var-versus-let--const


/*
  Besides var, we now have access to two new identifiers for storing values —let and const.
   Unlike var, let and const statements are not hoisted to the top of their enclosing scope.
*/

//An example of using var

'use strict'
// var snack='Meow Mix';

// function getFood(food){
//   if(food){
//   	var snack = 'Friskies';
//   	return snack;
//   }
//   return snack;
// }

// var food = getFood(false);

// console.log(food);



//However, observe what happens when we replace var using let:

let snack = 'Meow Mix';

function getFood(food){
	if(food){
		let snack = 'Friskies';
		return snack;
	}
	return snack;
}

let food = getFood(false);
console.log(food)



/*
Note: let and const are block scoped. 
Therefore, referencing block-scoped identifiers before they are defined will produce a ReferenceError.
*/

console.log(x);
let x = 'hi';