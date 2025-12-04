import * as fs from "fs";

const filePath = "./src/day-2/input.txt";
let input: String = "";

try {
    input = fs.readFileSync(filePath, "utf8");
} catch (error) {
  console.error(error);
}

function isInvalidID(id: number): boolean {
    const idStr: String = String(id);
    const lengthOfID: number = idStr.length;
  
    for (let block = 1; block <= lengthOfID / 2; block++) {
        if (lengthOfID % block !== 0) {
            continue;
        }

        const pattern: String = idStr.slice(0, block);
        let isRepeat = true;

        for (let i = block; i < lengthOfID; i += block) {
            if (idStr.slice(i, i + block) !== pattern) {
            isRepeat = false;
            break;
            }
        }

        if (isRepeat) return true;
    }
  
    return false;
  }

function getInvalidIDs(range: String): number[] {
    const initialBound: String = range.split("-")[0];
    const upperBound: String = range.split("-")[1]

    const ids: number[] = [];

    for (let i: number = Number(initialBound); i <= Number(upperBound); i++) {
        if (isInvalidID(i) === true) {
            ids.push(i);
        }
    }

    return ids;
}

function readInputs(input: String) {
    const ranges: String[] = input.split(",");
    let sumOfIDs: number = 0;

    for (const range of ranges) {
        const invalidIDs: number[] = getInvalidIDs(range.trim());
        for (const id of invalidIDs) {
            sumOfIDs += id;
        }
    }

    return sumOfIDs;
}

console.log(readInputs(input));