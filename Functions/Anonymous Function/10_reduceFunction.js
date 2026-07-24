const nums = [12, 20, 30];
const total = nums.reduce(function (sum, value) {
  return sum + value;
}, 0);
console.log(total);
