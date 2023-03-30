function findMax(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var numbers = [5, 3, 8, 1, 9, 4];
var maxNumber = findMax(numbers); // returns 9
console.log(maxNumber);
