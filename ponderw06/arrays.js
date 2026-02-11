let pets = ['goldfish', 'dog', 'rhino'];

console.log(pets.length);

pets[0] = 'bunny';

console.log(pets);

pets.push('lizard');

console.log(pets);

const steps = ['one', 'two', 'three'];

//.forEach call a function for every item in the array

steps.forEach(function(item){
    console.log(item);
})

steps.forEach(showSteps);
function showSteps(item) {
    console.log(steps);
}


//. .map also calls a function but create a new array from the original array
let myList = document.querySelector('#myList');

const stepsHtml =steps.map(listTemplate);

function listTemplate(item){
    return `<li>${item}</li>`
}

myList.innerHtml = stepsHtml.join('');

//.map 

let grades = ['A', 'B', 'D'];

let points;

let gpaPoints = grades.map(convert);

function convert(grade){
    switch(grade.toUpperCase()) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 1;
            break;
        default:
            alert('not valid grade');
    }
    return points;
}
console.log(gpaPoints);
console.log(grades);


//.reduce - reduce down to a single value with an accumulator

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total,item){
    return total + item;
}

console.log(totalPoints);

let gpaAverage = totalPoints/gpaPoints.length;

console.log(gpaAverage);

//. filtering make a new array but only items that pass a vertain conditions

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length <= 6;
})

console.log(shortWords);