import * as fs from "fs";

const filePath = "./src/day-2/input.txt";
let input: String = "";

try {
    input = fs.readFileSync(filePath, "utf8");
} catch (error) {
    console.error(error);
}

function getInvalidID(range: String): number[] {
    const initialBound: String = range.split("-")[0];
    const upperBound: String = range.split("-")[1]

    const ids: number[] = [];

    for(let i: number = Number(initialBound); i < Number(upperBound); i++) {
        if(String(i).length % 2 == 0) {
            const currentNumber: String = String(i);

            let firstHalf = currentNumber.slice(0, currentNumber.length / 2);
            let secondHalf = currentNumber.slice(currentNumber.length / 2);

            if(firstHalf[0] == "0" || secondHalf[0] == "0") {
                continue
            }

            if(firstHalf == secondHalf) {
                ids.push(i)
            }
        }
    }

    return ids;
}

function interpretInputs(input: String): number {
    const varriances: String[] = input.split(",");
    let sumOfIds: number = 0;

    for(const varriance of varriances) {
        const invalidIDs: number[] = getInvalidID(varriance.trim())
        for(const invalidID of invalidIDs) {
            sumOfIds += invalidID;
        }
    }

    return sumOfIds;
}

console.log(interpretInputs(input))