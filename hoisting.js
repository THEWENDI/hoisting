// 1.
console.log(hello);
var hello = 'world';

//  var hello;
// console.log(hello);
// hello = "world";

// OUT PUT:
// undefined

// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// AFTER HOISTING BY INTERPRETER:
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// OUT PUT : 
// magnet

//3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY INTERPRETER:
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// 
// OUT PUT:
// super cool

//4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//OUT PUT:
//chicken
//half-chicken

// AFTER HOISTING BY INTERPRETER:
// var food = 'chicken';
// console.log(food);
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// eat();

//5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//OUT PUT:
// mean is not a function

// AFTER HOISTING BY INTERPRETER:
// var mean;
// mean();
// console.log(food);
// mean = function(){
//     var food;
//     food = 'chicken';
//     console.log(food);
//     food = 'fish';
//     console.log(food);
// }
// console.log(food);

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);  

//OUT PUT
//undefined 
//rock
//r&b
//disco

// AFTER HOISTING BY INTERPRETER:
// var genre;
// function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//OUT PUT:
//san jose
//seattle
//burbank
//san jose

// AFTER HOISTING BY INTERPRETER:
// function learn(){
//     var dojo;
//     dojo = 'seattle';
//     console.log(dojo);
//     dojo = 'burbank';
//     console.og(dojo);
// }
// dojo = 'san jose';
// console.log(dojo);
// learn();
// console.log(dojo);

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//OUT PUT:
//Assignment to constant variable (Since Dojo is const)

// AFTER HOISTING BY INTERPRETER:
// function(name, students){
//     const dojo = {};
//     dojo.name = name
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// 
