import * as fs from "fs";
const filePath = "./src/day-1/input.txt";
let data = "";
try {
    data = fs.readFileSync(filePath, "utf8");
}
catch (error) {
    console.error(error);
}
function dialer(instruction, startPos) {
    const direction = instruction[0];
    const distance = Number(instruction.slice(1, instruction.length));
    let currentNumber = startPos;
    let zeroCount = 0;
    if (direction === "L") {
        for (let i = 0; i < distance; i++) {
            const totalJump = currentNumber - 1;
            currentNumber = ((totalJump % 100) + 100) % 100;
            if (currentNumber === 0) {
                zeroCount++;
            }
        }
    }
    else if (direction === "R") {
        for (let i = 0; i < distance; i++) {
            currentNumber = (currentNumber + 1) % 100;
            if (currentNumber === 0) {
                zeroCount++;
            }
        }
    }
    return { currentNumber, zeroCount };
}
function getPassword(data) {
    const instructions = data.split("\n");
    let currentDialNumber = 50;
    let numOfZeros = 0;
    for (const instruction of instructions) {
        let { zeroCount, currentNumber } = dialer(instruction, currentDialNumber);
        numOfZeros += zeroCount;
        currentDialNumber = currentNumber;
    }
    return numOfZeros;
}
console.log(getPassword(data));
