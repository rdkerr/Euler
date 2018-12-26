var calculateSumofMultiples = function(range) {
    var numbers = Array.from(new Array(range - 1), (val, index) => index + 1);
    return numbers.filter(isMultiple).reduce((sum, value) => sum += value, 0);
}

var isMultiple = function(number) {
    return number % 3 === 0 || number % 5 === 0;
}

console.log(calculateSumofMultiples(10));
console.log(calculateSumofMultiples(1000));