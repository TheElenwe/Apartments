const readlineSync = require("readline-sync");
let entry = 1;
let sum = 0;
let totalSum = 0;
while (entry > 0) {
  entry = Number(readlineSync.question("Apartments price \n"));
  sum++;
  totalSum += entry;
}

avg = totalSum / 4
console.log(`${sum} Apartments have registed . The average price for rent is ${avg}$`);

while (true) {
  entry = String(readlineSync.question("Give numbers"));
  if (entry < 1) {
    console.log("Quit Program");
    break;
  }
  if (entry > avg) {
    console.log("Above average price");
  } else {
    console.log("Bellow average price");
  }
}
