

// Given: //

 students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];



//  Problem 1  //

// var parseAge = function(array){
// 	array.forEach(function(student){
// 		console.log(student.age);
// 	});
// }

// parseAge(students)



//  Problem 2  //

var parseNameCity = function(array){
	array.forEach(function(student){
		console.log(student.age, student.city);

	});
}

parseNameCity(students)