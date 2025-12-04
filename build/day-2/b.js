import * as fs from "fs";
const filePath = "./src/day-2/input.txt";
let input = "";
try {
    input = fs.readFileSync(filePath, "utf8");
}
catch (error) {
    console.error(error);
}
function isInvalidID(id) {
    const idStr = String(id);
    const lengthOfID = idStr.length;
    for (let block = 1; block <= lengthOfID / 2; block++) {
        if (lengthOfID % block !== 0) {
            continue;
        }
        const pattern = idStr.slice(0, block);
        let isRepeat = true;
        for (let i = block; i < lengthOfID; i += block) {
            if (idStr.slice(i, i + block) !== pattern) {
                isRepeat = false;
                break;
            }
        }
        if (isRepeat)
            return true;
    }
    return false;
}
function getInvalidIDs(range) {
    const initialBound = range.split("-")[0];
    const upperBound = range.split("-")[1];
    const ids = [];
    for (let i = Number(initialBound); i <= Number(upperBound); i++) {
        if (isInvalidID(i) === true) {
            ids.push(i);
        }
    }
    return ids;
}
function readInputs(input) {
    const ranges = input.split(",");
    let sumOfIDs = 0;
    for (const range of ranges) {
        const invalidIDs = getInvalidIDs(range.trim());
        for (const id of invalidIDs) {
            sumOfIDs += id;
        }
    }
    return sumOfIDs;
}
console.log(readInputs(input));
