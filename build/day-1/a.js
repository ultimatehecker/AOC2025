import * as fs from "fs";
const filePath = "./src/day-1/input.txt";
let input = "";
try {
    input = fs.readFileSync(filePath, "utf8");
}
catch (error) {
    console.error(error);
}
/**
 * Takes one instruction and the current position, and calculates the new dial number after being rotated
 * @param instruction
 * @param startPos
 * @returns The new dial number
 */
function dialGetNumber(instruction, startPos) {
    const direction = instruction[0];
    const distance = Number(instruction.slice(1, instruction.length));
    let currentNumber = startPos;
    if (direction === "L") {
        const totalJump = currentNumber - distance;
        currentNumber = ((totalJump % 100) + 100) % 100;
    }
    else if (direction === "R") {
        currentNumber = (currentNumber + distance) % 100;
    }
    return currentNumber;
}
/**
 * Takes one instruction and the current position, and calculates the new dial number after being rotated
 * @param input
 * @returns
 */
function getPassword(input) {
    const instructions = input.split("\n");
    let currentDialNumber = 50;
    let actualPassword = 0;
    for (const instruction of instructions) {
        currentDialNumber = dialGetNumber(instruction, currentDialNumber);
        if (currentDialNumber == 0) {
            actualPassword++;
        }
    }
    return actualPassword;
}
console.log(getPassword(input));
