// function myFilter(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }


// const numbers = [1, 2, 3, 4];
// const evenNumbers = myFilter(numbers, num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// function largeNumber(arr){
//   return Math.max(...arr);
// }
// const arr = [1, 3, 2, 8, 4];
// const largeNum = largeNumber(arr);
// console.log("Large number is ", largeNum);

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// function largeNumber(arr){
//   return arr.filter(num => num % 2===0);
// }
// const arr = [1, 3, 2, 8, 4];
// const largeNum = largeNumber(arr);
// console.log("New Array Even Number ", largeNum);



// function checkForFive(){
//   const arr = [2,4, 5, 6];
//   if(arr.includes(1)){
//     console.log("5 is included in array");
//   }else{
//     console.log("5 is not included in array list");
//   }
// }
// checkForFive();

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);

console.log("Merged Object:", mergedObject);
