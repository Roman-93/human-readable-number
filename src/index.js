module.exports = function toReadable(number) {
    const oneArray = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tenArray = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numString = number.toString();

    if (number < 0) {
        return "Please enter a number from 1 to 999";
    }

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return oneArray[number];
    }

    if (number < 100) {
        return (tenArray[numString[0]] + " " + oneArray[numString[1]]).trim();
    }

    if (numString.length === 3) {
        if (numString[1] === "0" && numString[2] === "0") {
            return oneArray[numString[0]] + " hundred";
        } else {
            return (
                oneArray[numString[0]] +
                " hundred " +
                toReadable(+(numString[1] + numString[2]))
            );
        }
    }

    if (numString.length === 4) {
        if (
            numString[1] === "0" &&
            numString[2] === "0" &&
            numString[3] === "0"
        ) {
            return oneArray[numString[0]] + " thousand";
        } else {
            return (
                oneArray[numString[0]] +
                " thousand " +
                oneArray[numString[1]] +
                " hundred " +
                toReadable(+(numString[2] + numString[3]))
            );
        }
    }
};
