//01.Length ---> used for telling how many elements are present in the current array
let arr1 = ["Apple", "Banana", "Cherry"];
console.log("Length of the array : ", arr1.length);

//02.push() ---> adds a new element at the end of array
let arr2 = ["Spider Man", "Iron Man", "Black Panter"];
console.log("Adding a new element in the array :", arr2.push("Wonder Women"));

//03.pop() ---> removes the last element
let arr3 = ["Jake", "Jay", "Sunghoon", "Heesung"];
console.log("Removing the last Element from the arary :", arr3.pop());

//04.unshift() ---> adds elements at the begining
let arr4 = ["Heesung", "Sunno", "Niki"];
console.log(
  "Adding a element at the begining of the array :",
  arr4.unshift("Jungwon"),
);

//05.shift() ---> removes first element
let arr5 = ["Heesung", "Sunno", "Niki"];
console.log("Removing the first element from the array :", arr5.shift());

//06.includes() ---> states whether the element is the part of the array
let arr6 = ["Python", "Java", "C", "C++"];
console.log(
  "checking whether React is the part of the array :",
  arr6.includes("React"),
);

//07.indexOf() ---> returns the index of the element
let arr7 = ["Apple", "Banana", "Cherry"];
console.log("Index of the element Banana is :", arr7.indexOf("Banana"));

//08.join() ---> converts the array into string.
let arr8 = ["DSA", "DBMS", "DTE", "C++"];
console.log("Converting array into string :", arr8.join("-"));

//09.slice() ---> returns a copy of the array
let arr9 = ["Jin", "Namjoon", "Suga", "J-Hope", "Jimin", "V", "Jungkook"];
console.log("Returning  a copy of the array :", arr9.slice(2));

//10.splice() ---> adds or removes the elements in the array
let arr10 = ["apple", "banana", "cherry"];
console.log("Addding Mongo the the Array :", arr10.splice(1, 1, "mango"));

//11.reverse() ---> reverses the string
let arr11 = ["apple", "banana", "cherry"];
console.log("REversing the array :", arr11.reverse());

//12.sort() ---> sorts the numbers or array
let nums2 = [5, 2, 8, 1];
nums2.sort((a, b) => a - b);
console.log("Sorting the Numbers from the array :", nums2);

//13.concat()---> adds two arrays
let a = [1, 2, 3];
let b = [14, 5, 6, 7];
console.log("Adding two Array together :", a.concat(b));

//14.forEach()---> returns each element of the array
let arr12 = ["Asus", "HP", "Lenovo"];
arr12.forEach((laptop, index) => {
  console.log("Returning each element of the array :", index, laptop);
});
//15.map()--->  creates a new array
let numbers = [1, 2, 3];
let result = numbers.map((num) => num * 2);
console.log("Creating a new array :", result);

//16.filter() ---> returns the same element from the array
let nums = [10, 20, 30, 40];
let result1 = nums.filter((num) => num > 20);
console.log("Returning same elements from the array :", result1);

//17.find() ---> returns the first matching element
let nums1 = [10, 20, 30];
console.log(
  "Returning the first matching elements : ",
  nums1.find((num) => num > 15),
);
