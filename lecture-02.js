// function declaration
function cartoon(){
    function cartoonInsideCartoon(){
        return "Naruto";
    }
    return cartoonInsideCartoon;
}

const anime = cartoon();
const r = anime();


//function expression
let cartoon1 = function(){
    console.log("Anime");
}

cartoon();

//arrow function
const isAllowedToVote = age => age >= 18;

const isUserAllowToOpenBankAccount = (age, minBalance) => age >= 18 && minBalance >= 5000;

//data structures : store the data in particular strucutre in memory

//1.array
const fruits = ["apple", "mango", "banana"];

function printIt(element){
    console.log(element);
}

//HOF : wo function jo kisi dusre function ko accept kare(in argument)
function meraPyaraFunction(udharkaFunction){
    return udharkaFunction() + 40;
}

function cartoon2(){
    return 10;
}

console.log(meraPyaraFunction(cartoon2));

// HOF-example
function sayHii(){
    console.log("Harsh");
}

const name = sayHii
name();

// foreach method
const fruit = ["apple", "banana", "papaya", "kiwi", "orange"];

fruit.forEach(function(){
    console.log("Hii");
})

//implementation using arrow function
fruit.forEach((fruit) => {
    console.log(fruit);
})
