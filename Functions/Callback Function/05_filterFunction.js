const ages = [12, 18, 20, 15, 25];
const adults = ages.filter(function (age) {
  return age >= 18;
});

console.log(adults);
