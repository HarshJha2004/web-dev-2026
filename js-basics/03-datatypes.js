const weaponName = "Flam Sword";
console.log("Weapon: ", weaponName, "| type: ", typeof weaponName);

const attackPower = 75;
const attackUpgrade = 1.5;

console.log("type of attack power: ",typeof attackPower);
console.log("type of attack upgrade: ",typeof attackUpgrade);

const isLoggedin = true;
let bonusEffect;

let currentStatus = null;
let weatherApiResponse = null;
console.log("type of null: ",typeof weatherApiResponse);

const uniqueRuneId = Symbol("rune_of_fire");
const uniqueRuneId2 = Symbol("rune_of_fire");

console.log("Rune: ", uniqueRuneId.toString(), " | type of: ", typeof uniqueRuneId);

const inventory = ["Flame sword", "Health Poition", "Shield"];
console.log("Inventory: ", inventory, " | type: ", typeof inventory);

function castSpell(){
    return "Fireball";
}
console.log("Spell Type: ", typeof castSpell);

console.log(typeof "chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let originalHP = 100;
let cloneHP = originalHP;

cloneHP = 80;

console.log("Original HP: ", originalHP);
console.log("clone HP: ", cloneHP);

const originalSword = {
    name: "Flame Sword",
    damage: 75,
    typeofWeapon: "fire"
};

const cloneSword = originalSword;

cloneSword.name = "Katana";

console.log(originalSword);

const armorOriginal = {
    name: "Iron plate",
    defence: 80,
    buff: {
        fire: 10
    }
};

const armorCopy = {...armorOriginal}; //shallow copy
armorCopy.buff.fire = 150;

const PoitionOriginal = { name: "Health", effects: {heal: 40, mana: 30}};
const poitionCopy = structuredClone(PoitionOriginal);

console.log(typeof null === "object");
console.log(Array.isArray(inventory));
