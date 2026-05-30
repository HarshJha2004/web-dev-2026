const uniqueId = Symbol("rune_of_fire");
console.log(uniqueId.toString());

let weatherResponse = null;
console.log(weatherResponse);
console.log("type of null : ", typeof weatherResponse);

let name;
console.log(name);
console.log("The undefined type is : ", typeof name);

let secretKey = Symbol("XXXX5546");
console.log(secretKey);
console.log("type of symbol : ", typeof secretKey);

let salary = 123n;
console.log(`${salary}, type of bigInt ${typeof salary}`);

let fruits = ["apple", "mango"];
console.log(`fruits value : ${fruits}, array type : ${typeof fruits}`)

let employeeDetails = {
    name : "Jatashankar"
}

console.log(`value of obj : ${employeeDetails}, type of obj : ${typeof employeeDetails}`);


function cartoon(){
    return 'Doreamon';
}

console.log(`type of function : ${typeof cartoon}`)

const infinityRange = -Infinity;
console.log(infinityRange);



