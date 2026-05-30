const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("Clue found: ", clue1);
console.log("Clue found: ", clue2);

const suspectName = "Dipesh";
const suspectAge = 21;
console.log("Suspect: ", suspectName, " | Age: ", suspectAge);

console.warn("Warning: Fingerprint Evidence Detected");
console.error("Warning: Fingerprint Evidence Detected");

//array of objects
const evidenceLog = [
    { id: 1, item: "Muddy footprint", location: "Window sill"},
    { id: 2, item: "Broken glass", location: "Living room"},
    { id: 3, item: "Red fiber strand", location: "Door handle"},
];

console.table(evidenceLog);

console.group("Grouped starts");
console.log("My Log 1");
console.log("My Log 2");
console.log("My Log 3");
console.groupEnd();


// console.time("time starts now");
// let dnaMatches = 0;
// for (let i = 0; i < 1_000_000; i++) {
//   dnaMatches++;
// }
// console.timeEnd();
