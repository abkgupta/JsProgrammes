const numbers = [15.5, 2.3, 1.1, 4.7];
console.log( numbers.reduce(getSum, 0));

function getSum(total, num) {
    console.log(Math.round(num))
  return total + Math.round(num);
}