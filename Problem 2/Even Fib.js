var evenFibBelow = function(number) {
    var fibNumbers = [0, 1, 2];
    var total = 0;
    if (number < 0) {
        return total;
    } else {
        while (number > fibNumbers[2]) {
            total += nextFib(fibNumbers);
            while (fibNumbers[0] % 2 === 1) {
                nextFib(fibNumbers);
            }
        }
        if (fibNumbers[0] < number) {
            total += fibNumbers[0];
        }
    }
    return total;
}

var nextFib = function(array) {
    var ret = array.shift();
    array.push(array[0] + array[1]);
    return ret;
}

console.log(evenFibBelow(20));
console.log(evenFibBelow(4000000));
