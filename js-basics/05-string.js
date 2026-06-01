const codeName = "Shadow Fox";
const backupName = String("Night Own");
const templateName = `Agent ${codeName}`;

let intercepted = "HELLO";
intercepted[0] = "S"; //silent fail
console.log(intercepted);

const sectorCode = "OMEGA-7";

console.log(sectorCode.length);
console.log(sectorCode.charAt(99));
console.log(sectorCode[99]);
console.log(sectorCode.at(-1));

// const rawTransmission = "The Eagle has landed";
// console.log(rawTransmission.toLocaleLowerCase());

const message = "The drop point is at dock 7. Repeat: Dock 7";
console.log(message.indexOf("Dock"));

message.slice(0, 12);

const orders = "       move-north|hold-position|extract-vip";
let orderList = orders.split(" | ");
console.log("Split", orderList);

const myDataValue = "SOS".split("");
console.log(typeof myDataValue);
console.log(Array.isArray(myDataValue));

const missionNumber = "42";
console.log(missionNumber.padStart(6, "0"));

const spellCard = `

++========================
| Spell: ${myDataValue} |


`;

console.log(spellCard);


console.log(void "hitesh");

let generalStore = { name: "Kirana", goods: 2 };
console.log(generalStore);
generalStore = null;
console.log(generalStore);


