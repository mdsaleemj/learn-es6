
//SNIPPET START

//ES5

// var luke = {
// 	occupation : 'jedi',
// 	father : 'anakin'
// };

// var occupation = luke.occupation; //jedi
// var father = luke.father; //anakin


//SNIPPET START

//ES6

let luke = {
	occupation : 'jedi',
	father : 'anakin'
};

let {occupation,father} = luke;

console.log(occupation); //jedi
console.log(father); //anakin
