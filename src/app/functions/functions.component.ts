import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class FunctionsComponent {
  pData = ''
  destroy: boolean = true;
  items = ['item1', 'item2', 'item3', 'item4'];
  childD: any;
  desc: any;
  parentComp(newItem: any) {
    // this.items.push(newItem);
    this.childD = newItem
  }
  constructor() {

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
}
