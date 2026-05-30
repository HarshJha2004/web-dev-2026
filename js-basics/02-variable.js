var shipName = "The Amber";
console.log("Shipname: ", shipName);

let crewCount = 12;
console.log("crew count: ", crewCount);

const captainName = "Jack Sparrow";
console.log("CaptainName: ", captainName);

if(true){
    var leakTreasure = "Gold coins"; //This occurs issue of blockscope
}

console.log(leakTreasure);

let shipSpeed = 22;
let _privateLog = "secret";
let MONGODB_URI = " ";
let name = "Hitesh";

const treasureChest = {
    gold: 100,
    rubbies: 50,
    maps: 2
};

treasureChest.gold = 250; //property is changeble

let crewRoaster = ["Alok", "Abhinav", "Tanishq"];
crewRoaster.push("Harsh");
crewRoaster[0] = "Shiva";
console.log(crewRoaster);

crewRoaster = ["someone"];
console.log(crewRoaster);
