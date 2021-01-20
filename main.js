const readlineSync = require("readline-sync");
let entry = 1;
let sum = 0;
let totalSum = 0;
let entry1 = 1;
while (entry > 0) {
  entry = Number(readlineSync.question("Apartments price \n"));
  if (entry > 0) {
    sum++;
  }
  if (entry > 0) {
    totalSum += entry;
  }
}
console.log(`${sum} apartments have registed `);
avg = totalSum / 4;
console.log(` The average price for rent is ${avg}`);

while (entry1 > 0) {
  entry1 = String(readlineSync.question("give numbers"));
  
  if (entry1 > avg) {
    console.log("Above average price");
  } else if (entry1 < avg) {
    console.log("Above below price");
  }
  if (entry1<=0){
    console.log("quit program")
}
}

