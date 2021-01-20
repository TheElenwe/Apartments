const readlineSync = require("readline-sync");
let entry = 1;
let sum = 0;
let totalSum = 0;
while (entry > 0) {
  entry = Number(readlineSync.question("Apartments price \n"));
  if (entry > 0) {
    sum++;
  }
  if (entry > 0) {
    totalSum += entry;
  }
}
console.log(`${sum} Apartments have registed `);
avg = totalSum / 4;
console.log(` The average price for rent is ${avg}`);

while (true) {
  entry = String(readlineSync.question("Give numbers"));
  if (entry < 1) {
    console.log("Quit program");
    break;
  }
  if (entry > avg) {
    console.log("Above average price");
  } else {
    console.log("Bellow average price");
  }
}

