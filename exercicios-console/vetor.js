const prompt = require("prompt-sync")();

const array = [1,2,3,4,5,6,7,8,9,10];

let srt1 = "Array=|";

for (let pos1=0; pos1 < array.length; pos1++){
    srt1 += array[pos1] + "|";              
    
};
console.log(srt1);

////////////////////////////////////////////////////////////

let str4 = "Array= |";

for (let i = 0; i < array.length; i++) {
    str4 += array[i] + "|";
}
console.log(str4);