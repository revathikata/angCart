import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngConceptsComponent } from './ang-concepts/ang-concepts.component';
@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.css',
  // encapsulation: ViewEncapsulation.Emulated,
})
export class FunctionsComponent {
  pData = ''
  destroy: boolean = true;
  items = ['item1', 'item2', 'item3', 'item4'];
  childD: any;
  desc: any;
  listData:any =[1,2,3,4,5,6,7,8,9,11,13,14,16,18]
  removedArray: any[] =[];
  searchletter: any;
  parentComp(newItem: any) {
    // this.items.push(newItem);
    this.childD = newItem
  }
  constructor(private dialog: MatDialog,) {

  }

  // ngOnInit() {
  //   console.log('ngOnIit');

  // }
  destroyComp() {
    this.destroy = false;
  }
  splice() {
    let arr: any = [1, 2, 3, 4, 5];
    // Use numerical values for start index and number of elements to remove
    arr.splice(2, 2, 'a', 'b'); // Start index: 2, Number of elements to remove: 2
    console.log(
      'is a method in JavaScript used to add or remove elements from an array.'
    );

    console.log(
      arr,
      " arr.splice(2, 2, 'a', 'b') , // Add elements starting from index 2, remove 0 elements, and insert 'a', 'b', 'c'"
    ); // Output: [1, 2, 'a', 'b', 5]

    let fruits = ['apple', 'banana', 'orange', 'mango'];
    // Remove one element starting from index 1
    let removed = fruits.splice(1, 1);
    console.log(fruits, 'fruits.splice(1, 1)'); // Output: ['apple', 'orange', 'mango']
    console.log(removed, 'removed Element');

    let colors = ['red', 'green', 'blue'];

    // Replace 1 element at index 1 with 'yellow'
    colors.splice(1, 1, 'yellow');
    console.log(colors); // Output: ['red', 'yellow', 'blue']

    let letters = ['a', 'b', 'c', 'd', 'e'];

    // Remove 2 elements starting from index 1 and insert 'x', 'y'
    let removedLetters = letters.splice(1, 2, 'x', 'y');
    console.log(letters); // Output: ['a', 'x', 'y', 'd', 'e']
    console.log(removedLetters); // Output: ['b', 'c']
    let animals = ['cat', 'dog', 'rabbit', 'hamster'];

    // Remove elements starting from index 2 without adding any new elements
    let removedAnimals = animals.splice(2);
    console.log(animals); // Output: ['cat', 'dog']
    console.log(removedAnimals); // Output: ['rabbit', 'hamster']
  }
  slice() {
    console.log(
      ' method in JavaScript is used to extract a portion of an array and return a new array without modifying the original array. It takes two parameters: the starting index (inclusive) and the ending index (exclusive)'
    );

    const array = [1, 2, 3, 4, 5];

    // Extracts elements from index 1 (inclusive) to index 4 (exclusive)
    const slicedArray = array.slice(1, 4);

    console.log(slicedArray, 'array.slice(1, 4)'); // Output: [2, 3, 4]
    console.log(array, ' original array'); // Original array remains unchanged: [1, 2, 3, 4, 5]

    const numbers = [1, 2, 3, 4, 5];
    const sliced = numbers.slice(1, 3); // Extract elements from index 1 to 2
    console.log(sliced); // Output: [2, 3]

    let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

    // Extract elements from index 1 to index 3 (excluding index 3)
    let selectedFruits = fruits.slice(1, 3);
    console.log(selectedFruits); // Output: ['banana', 'orange']

    let colors = ['red', 'green', 'blue', 'yellow', 'orange'];

    // Extract elements from index 2 to the end of the array
    let selectedColors = colors.slice(2);
    console.log(selectedColors); // Output: ['blue', 'yellow', 'orange']

    let letters = ['a', 'b', 'c', 'd', 'e'];

    // Extract elements from the end of the array
    let lastThreeLetters = letters.slice(-3);
    console.log(lastThreeLetters); // Output: ['c', 'd', 'e']

    let originalArray = [1, 2, 3, 4, 5];

    // Create a copy of the original array
    let copiedArray = originalArray.slice();
    console.log(copiedArray); // Output: [1, 2, 3, 4, 5]

    let arrayy = ['a', 'b', 'c', 'd', 'e'];

    let newArray = arrayy.slice(-3, -1);
    console.log(newArray); // Output: ['c', 'd']
  }
  swap() {
    let a = 10;
    let b = 20;

    // Swapping using a temporary variable
    let temp = a;
    a = b;
    b = temp;

    console.log('a =', a); // Output: a = 20
    console.log('b =', b); // Output: b = 10

    let x = 'neha';
    let y = 'karti';
    [x, y] = [y, x];
    console.log('swap:', x, 'and', y);
    [y, x] = [x, y];
    console.log('swap original:', x, 'and', y);

  }
  concatination() {
    // Concatenating arrays
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const concatenatedArray = arr1.concat(arr2);
    console.log(concatenatedArray, 'arr1.concat(arr2)'); // Output: [1, 2, 3, 4, 5, 6]

    // Concatenating strings
    const str1 = 'Hello, ';
    const str2 = 'world!';
    const concatenatedString = str1 + str2;
    console.log(concatenatedString); // Output: "Hello, world!"
  }
  mapAndReduce() {
    // Map example: doubling each element in an array
    const numbers = [1, 2, 3];
    const doubledNumbers = numbers.map((num) => num * 2);
    console.log(
      doubledNumbers,
      'const doubledNumbers = numbers.map(num => num * 2)'
    ); // Output: [2, 4, 6]

    // Reduce example: summing up elements in an array
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(
      sum,
      ' const sum = numbers.reduce((acc, curr) => acc + curr, 0)'
    ); // Output: 6
  }
  filter() {
    const words = ['apple', 'banana', 'grape', 'orange'];
    const filteredWords = words.filter((word) => word.length > 5);
    console.log(
      filteredWords,
      'const filteredWords = words.filter(word => word.length > 5);'
    ); // Output: ["banana", "orange"]

    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter((x) => x % 2 === 0);
    console.log(
      evenNumbers,
      'const evenNumbers = numbers.filter(x => x % 2 === 0);'
    ); // Output: [2, 4]
  }
  reverseArray() {
    // Reversing an array
    const arr = [1, 2, 3, 4, 5];
    arr.reverse();
    console.log(arr, ' arr.reverse()'); // Output: [5, 4, 3, 2, 1]

    // Reversing a string
    const str = 'hello';
    const reversedStr = str.split('').reverse().join('');
    console.log(
      reversedStr,
      "const reversedStr = str.split('').reverse().join('');"
    ); // Output: "olleh"
    const rev = "meeting"
    const strrev = rev.split('').reverse().join('')
    console.log(rev,'original',  strrev, "revStr");
  }
  reduce() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(
      sum,
      'const sum = numbers.reduce((acc, curr) => acc + curr, 0);'
    ); // Output: 15
  }
  find() {
    const numbers = [10, 20, 30, 40, 50];
    const found = numbers.find((x) => x > 25);
    console.log(found, 'const found = numbers.find(x => x > 25);'); // Output: 30
  }
  FindIndex() {
    const numbers = [10, 20, 30, 40, 50];
    const index = numbers.findIndex((x) => x > 25);
    console.log(index, 'const index = numbers.findIndex(x => x > 25);'); // Output: 2 (index of the first element > 25)
  }
  some() {
    const numbers = [1, 2, 3, 4, 5];
    const hasEven = numbers.some((x) => x % 2 === 0);
    console.log(hasEven, 'const hasEven = numbers.some(x => x % 2 === 0);'); // Output: true
  }
  Every() {
    const numbers = [2, 4, 6, 8, 10];
    const allEven = numbers.every((x) => x % 2 === 0);
    console.log(allEven, 'const allEven = numbers.every(x => x % 2 === 0);'); // Output: true
  }
  sort() {
    const fruits = ['banana', 'apple', 'orange', 'grape'];
    fruits.sort();
    console.log(fruits, 'fruits.sort()'); // Output: ['apple', 'banana', 'grape', 'orange']
  }
  includes() {
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers.includes(3), 'numbers.includes(3)'); // Output: true
    console.log(numbers.includes(10)); // Output: false
  }
  join() {
    const fruits = ['apple', 'banana', 'grape'];
    const result = fruits.join(', '); // Join with comma and space
    console.log(result, "const result = fruits.join(', ')"); // Output: 'apple, banana, grape'
  }
  pushPop() {
    const numbers = [1, 2, 3];
    numbers.push(4);
    console.log(numbers, 'numbers.push(4)'); // Output: [1, 2, 3, 4]
    const removed = numbers.pop();
    console.log(removed, 'const removed = numbers.pop()'); // Output: 4
  }
  shiftUnshift() {
    const numbers = [1, 2, 3];
    const removed = numbers.shift();
    console.log(removed, 'const removed = numbers.shift();'); // Output: 1
    numbers.unshift(0);
    console.log(numbers, 'numbers.unshift(0)'); // Output: [0, 2, 3]
  }
  IndexOfAndLastIndexOf() {
    const numbers = [1, 2, 3, 4, 5, 2];
    console.log(numbers.indexOf(2), 'numbers.indexOf(2)'); // Output: 1
    console.log(numbers.lastIndexOf(2), 'numbers.lastIndexOf(2)'); // Output: 5
  }
  forEach() {
    const numbers = [1, 2, 3];
    numbers.forEach((num) =>
      console.log(num, 'numbers.forEach(num => console.log(num))')
    ); // Output: 1, 2, 3 (prints each element)
  }
  Flat() {
    const arr = [1, 2, [3, 4, [5, 6]]];
    const flattened = arr.flat(2); // Flattens nested arrays up to depth 2
    console.log(flattened, 'const flattened = arr.flat(2)'); // Output: [1, 2, 3, 4, 5, 6]
  }
  copyWithIn() {
    const numbers = [1, 2, 3, 4, 5];
    numbers.copyWithin(0, 3, 4); // Copies the element at index 3 to index 0
    console.log(numbers, 'numbers.copyWithin(0, 3, 4)'); // Output: [4, 2, 3, 4, 5]
  }
  keysValuesEntries() {
    const numbers = [1, 2, 3];
    const keys = numbers.keys();
    const values = numbers.values();
    const entries = numbers.entries();

    console.log([...keys]); // Output: [0, 1, 2] (indices)
    console.log([...values]); // Output: [1, 2, 3] (values)
    console.log([...entries]); // Output: [[0, 1], [1, 2], [2, 3]] (index-value pairs)
  }
  ArrayFrom() {
    const set = new Set([1, 2, 3]);
    const arr = Array.from(set);
    console.log(arr); // Output: [1, 2, 3]
  }
  FillwithObjec() {
    const arr = new Array(3);
    arr.fill({}); // Fill with empty objects
    console.log(arr); // Output: [{}, {}, {}]
  }
  IncludesFromIndex() {
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers.includes(2, 2)); // Output: false (2 is not included from index 2 onwards)
    console.log(numbers.includes(3, 2)); // Output: true (3 is included from index 2 onwards)
  }
  At() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let index = 2;
    let fruit = fruits.at(index);
    console.log(fruit);
  }
  forloop() {
    this.desc = 'A for loop is used when you know how many times you need to repeat a certain block of code. It takes three statements',
      "1. Initialization statement 2. Condition Statement 3. Increment statement"
    for (let i = 0; i <= 4; i++) {
      console.log(i);
    }
  }
  while() {
    let i = 0;
    while (i < 6) {
      console.log(i);
      i++
    }
    console.log("A while loop is used when you don’t know how many times you need to repeat a block of code, but you know the condition that will end the loop.");

  }
  doWhileLoop() {
    console.log("A do-while loop is similar to a while loop, but the block of code is executed at least once, even if the condition is false.");
    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i < 6)
  }
  forInLoop() {
    console.log("A for-in loop is used to loop through the properties of an object");
    const obj: { [key: string]: number } = { a: 1, b: 4, c: 7 };

    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop + ': ' + obj[prop]);
      }
    }
  }
  forOfLoop() {

    console.log("A for-of loop is used to loop through the values of an iterable object (such as an array.");

    const arr = [1, 2, 3];

    for (let val of arr) {
      console.log(val);
    }
  }
  fn1() {
    console.log('print 1 to 10');
    for (let i = 0; i <= 10; i++) {
      console.log(i, 'res');
    }
  }
  fn2() {
    console.log('Print the odd numbers less than 100');
    for (let i = 1; i <= 100; i += 2) {
      console.log(i, 'res');
    }
  }
  fn3() {
    console.log('Print the odd numbers less than 100');
    for (let i = 1; i <= 10; i++) {
      console.log('7 * ' + i + ' = ' + 7 * i, 'res');
    }
  }
  printTables() {
    console.log(
      'Print all the multiplication tables with numbers from 1 to 10'
    );
    for (let i = 1; i <= 10; i++) {
      this.fn4(i);
      console.log(''); // Print a newline after each table
    }
  }
  fn4(n: any) {
    for (let i = 1; i <= 10; i++) {
      let row = n + ' * ' + i + ' = ' + n * i;
      console.log(row);
    }
  }
  fn5() {
    console.log('Calculate the sum of numbers from 1 to 10');
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    console.log(sum);
  }
  fn6() {
    console.log('Calculate 10!');
    let prod = 1;

    for (let i = 1; i <= 10; i++) {
      prod *= i;
    }
    console.log(prod);
  }
  fn7() {
    let sum = 0;

    for (let i = 11; i <= 30; i += 2) {
      sum += i;
    }
    console.log(sum);
  }
  sumArray(arr: number[]): number {
    console.log("Calculate the sum of numbers in an array of numbers");
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  calculateSum() {
    const arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
    const sum = this.sumArray(arr);
    console.log(sum); // You can display it in the console or assign it to a variable for further use
  }
  
 removeDuplicate(){
  function removeDuplicateChars(str:any) {
    // Convert string to an array of characters
    const charArray = str.split('');
    
    // Create a set to store unique characters
    const uniqueChars = new Set(charArray);
    
    // Convert the set back to an array and join to form a string
    return [...uniqueChars].join('');
}
  const str = "meetinggg";
  const removedStr = removeDuplicateChars(str);
  console.log(removedStr);
 
 }
 removeDuplicateArray(){
    const arr = ['one', 'two', 'three', 'two'];
    const unique = arr.filter((item, index) =>arr.indexOf(item) === index)

  console.log(unique, 'removed duplicate');
  }
 removeChar(){
  function removeDuplicateChars(str: string) {
    return str
        .split('')                               // Convert the string to an array of characters
        .filter((char, index, self) =>           // Filter out duplicate characters
            self.indexOf(char) === index)
        .join('');                               // Join the characters back into a string
}

const originalString = 'meeetting';
const uniqueString = removeDuplicateChars(originalString);

console.log(originalString,'original',uniqueString, 'removechar duplicate');  
 }
 checkPlaindrom(){
  function isPalindrome(str: string) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare the clean string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("racecar"), 'isPalindrome("racecar")'); // Output: true
console.log(isPalindrome("Hello"), 'isPalindrome("Hello")');   // Output: false
console.log(isPalindrome("meeting"), 'isPalindrome("meeting")');   
console.log(isPalindrome("mannam"), 'isPalindrome("mannam")');   
 }
 numberOfnumerical(){
  function countNumericals(str: string) {
    let count = 0;
    for (let char of str) {
        if (!isNaN(parseInt(char))) {
            count++;
        }
    }
    return count;
}

// Example usage:
const myString = "Hello123World4567";
const numericalCount = countNumericals(myString);
console.log("Number of numericals in the string:", numericalCount);
 }
 countOccPartiChar(){
  function countOccurrences(str: string, char: string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Example usage:
const myString = "Hello World";
const charToCount = "l";
const occurrenceCount = countOccurrences(myString, charToCount);
console.log("Occurrences of '" + charToCount + "' in the string:", occurrenceCount);
 }
 findnonMatchingChar(){
  function findNonMatchingCharacters(str1: string, str2: string) {
    const nonMatchingChars = [];
    const maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        if (str1[i] !== str2[i]) {
            if (str1[i] !== undefined) {
                nonMatchingChars.push(str1[i]);
            }
            if (str2[i] !== undefined) {
                nonMatchingChars.push(str2[i]);
            }
        }
    }

    return nonMatchingChars;
}

// Example usage:
const string1 = "hello";
const string2 = "helicopter";
const nonMatching = findNonMatchingCharacters(string1, string2);
console.log("Non-matching characters:", nonMatching);
 }
 totalMatchingIntergers(){
  function totalMatchingIntegers(arr: any) {
    let total = 0;

    for (let element of arr) {
        if (Number.isInteger(element)) {
            total += element;
        }
    }

    return total;
}

// Example usage:
const array = [1, 2, "3", 4, "5", 6];
const sumOfIntegers = totalMatchingIntegers(array);
console.log("Sum of matching integers:", sumOfIntegers);
 }
 findMaxnumber(){
  function findMax(arr: any) {
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    return Math.max(...arr);
}
  const numbers = [5, 3, 9, 1, 8, 2];
const maxNumber = findMax(numbers);
console.log("Maximum element:", maxNumber);
 }
 sortAccending(){
  function sortAscending(arr:any) {
    // Use the sort() method with a comparison function
    arr.sort(function(a:any, b:any) {
        return a - b; // Compare function for ascending order
    });
    return arr;
}

// Example usage:
const numbers = [5, 3, 9, 1, 8, 2];
const sortedNumbers = sortAscending(numbers);
console.log("Sorted array in ascending order:", sortedNumbers);
 }
 sortDecending(){
  function sortDescending(arr:any) {
    // Use the sort() method with a comparison function
    arr.sort(function(a:any, b:any) {
        return b - a; // Compare function for descending order
    });
    return arr;
}

// Example usage:
const numbers = [5, 3, 9, 1, 8, 2];
const sortedNumbersDescending = sortDescending(numbers);
console.log("Sorted array in descending order:", sortedNumbersDescending);
 }
sum(){
  const num1 = 5;
const num2 = 10;
const sum = num1 + num2
console.log("Sum of", num1, "and", num2, "is", sum);
// or
function sumOfIntegers(a:any, b:any) {
  return a + b;
}

// Example usage:
const numb1 = 8;
const numb2 = 11;
const sum2 = sumOfIntegers(numb1, numb2);
console.log("Sum of", numb1, "and", numb2, "is", sum2);
}
Average(){
  function calculateAverage(numbers:any) {
    const sum = numbers.reduce((acc:any, curr:any) => acc + curr, 0);
    return sum / numbers.length;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50]; // Example list of numbers
const average = calculateAverage(numbers);
console.log("Average:", average);
}
even(){
  function isEven(num:any) {
    return num % 2 === 0;
}

// Example usage:
console.log(isEven(4)); // Output: true (4 is even)
console.log(isEven(7)); // Output: false (7 is odd)
}
subStr(){
  function findAllSubstrings(input:any) {
    const result = [];
    const n = input.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            result.push(input.slice(i, j).join(''));
        }
    }

    return result;
}

// Example usage:
const input = ['a', 'b', 'c', 'd'];
const substrings = findAllSubstrings(input);
console.log("All possible substrings:", substrings);
}
fn(){
  function map(f:any, a:any) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x:any) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers));

  // FN
  function add(a:any, b:any) {
    return a + b;
}

let sum = add;

function average(a:any, b:any, fn:any) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result);

// fnn
function compareBy(propertyName:any) {
  return function (a:any, b:any) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
let products = [
  { name: 'iPhone', price: 900 },
  { name: 'Samsung Galaxy', price: 850 },
  { name: 'Sony Xperia', price: 700 },
  { name: 'tata motor', price: 500 },
];

// sort products by name
console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);

// sort products by price
console.log('Products sorted by price:');
products.sort(compareBy('price'));
console.table(products);

  
}
remove(){
  // const remvddd = this.listData.shift()
  // console.log(remvddd,'shift is removing first ele');
  // const remvddd = this.listData.unshift(3,4)
  // console.log(remvddd,'unshift is removing first ele');
  const remvddd = this.listData.pop(3)
  console.log(remvddd,'pop is removes last ele');
  this.removedArray.push(remvddd)
  console.log(this.listData,'dd');
  this.listData = [...this.listData];
  
}
undo(){
  if(this.removedArray.length > 0){
    this.listData.push(this.removedArray.pop())
    console.log(this.listData, 'list');
    console.log(this.removedArray, 'rem');
    this.listData = [...this.listData];
  }
}

findremove(){
  console.log("Search letter:", this.searchletter);
  const searchString = String(this.searchletter);
  const index = this.listData.findIndex((item: any) => 
    { const itemString = String(item);
    return itemString === searchString;
  });
console.log("Index found:", index);

// If the element is found (index is not -1), remove it from the array
if (index !== -1) {
  this.listData.splice(index, 1);
  console.log("Updated listData:", this.listData);
} else {
  console.log("Element not found in listData.");
}
this.listData = [...this.listData];
}
addItem(){
  this.listData.push(this.searchletter)
  console.log(this.listData,'added');
  this.listData = [...this.listData];
  
}
}
