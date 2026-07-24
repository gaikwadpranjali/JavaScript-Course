const nums = [12, 20, 30];
const sum = nums.reduce(function (total, value) {
  return total + value;
}, 0);
console.log(sum);
