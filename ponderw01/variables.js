const PI = 3.14;
let radius =3;
console.log(PI * PI)
console.log(PI + radius * PI)

const one = 5;
const two = '2';
console.log ( one + two)
console.log ((one)*(two))
console.log ((one)**(two))
console.log (one**two) // so if one of the variables is a string and the other one a number it will take both as if and "add" them
//but if the are both the same, both are numbers it will give us the right sum answered and with strings it will do the same.


let course = "CSE131";
let student = "Yare" //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block

//even if the const "student" is outside of the "if" statement it will choose the one that is inside the statement.