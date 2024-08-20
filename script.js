function convertToRoman(num) {
   const romanSymbols = [
        ['M', 1000],  // 1000
        ['CM', 900],  // 900 (1000 - 100)
        ['D', 500],   // 500
        ['CD', 400],  // 400 (500 - 100)
        ['C', 100],   // 100
        ['XC', 90],   // 90 (100 - 10)
        ['L', 50],    // 50
        ['XL', 40],   // 40 (50 - 10)
        ['X', 10],    // 10
        ['IX', 9],    // 9 (10 - 1)
        ['V', 5],     // 5
        ['IV', 4],    // 4 (5 - 1)
        ['I', 1]      // 1
    ];

    let result = '';

    // Iterate over each Roman symbol
    for (let [symbol, value] of romanSymbols) {
        // While the current number is greater than or equal to the value
        while (num >= value) {
            result += symbol;  // Append the symbol to the result string
            num -= value;      // Subtract the value from the number
        }
    }

    return result;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
