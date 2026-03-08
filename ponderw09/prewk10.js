for (let i=o ; i<5; i++) {
    console.log(i)
}

let balance = 100;
let months = 12;
let x;

for (x=1; x<= months; x++) {
    balance += 5;
    console.log("Month", x, "Balance", balance);
}

let i=0
while (i<=10){
    console.log(i);
    i++
}


//More array methods
//.includes () - returns true or false

let text = "Hello World, welcome to WWD131"
let results = text.toLowerCase().includes('world');
console.log(results);


//.find() - return an objects or value from the first instance it finds

const pets = [
    {id: 1,
    type: "cat",
    isFurry: true
    },
    {id: 2,
    type: "dog",
    isFurry: true
    },
    {id: 3,
    type: "lizard",
    isFurry: false
    }

];

let idResult = pets.find(function(item){
    return item.isFurry === true;
});

let furryResult = pets.filter(function(item){
    return item.isFurry === true;
})

console.log(furryResult);