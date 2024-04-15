import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import dumData from '../../../assets/data/dumData.json';

@Component({
  selector: 'app-ang-concepts',
  templateUrl: './ang-concepts.component.html',
  styleUrl: './ang-concepts.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class AngConceptsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit
  , AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() ChildData: any;
  ppData: any
  @Output() notify: EventEmitter<string> = new EventEmitter<string>()
  getDD: any = [];
  getItems: any = [];
  addedArray: any = [];
  passData() {
    this.notify.emit("this msg coming from child")
  }
  constructor() {
    console.log("constructor called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges called');

  }
  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngDoCheck() {
    console.log('docheck');
    if (this.ChildData && this.ChildData.length > 0) {
      console.log('docheck, check calls');

    }
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");

  }
  OnClose(): void {
    // this.dialogRef.close(this.ppData);
  }
  findSubstrings(inputString: any) {
    const substrings = [];
    for (let i = 0; i < inputString.length; i++) {
      for (let j = i + 1; j <= inputString.length; j++) {
        substrings.push(inputString.slice(i, j));
      }
    }
    return substrings;
  }
  sub() {
    const inputStr = "abcd";
    const output = this.findSubstrings(inputStr);
    console.log("Input:", inputStr);
    console.log("Output:", output);
  }


  removeDuplicate() {
    function removeDuplicateWords(inputString: any) {
      // Split the input string into an array of words
      const wordsArray = inputString.split(" ");

      // Create a Set from the array to automatically remove duplicates
      const uniqueWordsSet = new Set(wordsArray);

      // Convert the Set back to an array and join the words into a string
      const uniqueString = Array.from(uniqueWordsSet).join(" ");

      return uniqueString;
    }

    const inputStr = "meeting meeting remove duplicate word";
    const output = removeDuplicateWords(inputStr);
    console.log("Input:", inputStr);
    console.log("Output:", output);
  }

  removChar() {
    function removeDuplicateChars(inputString: any) {
      // Split the input string into an array of characters
      const charsArray = inputString.split("");

      // Create a Set from the array to automatically remove duplicates
      const uniqueCharsSet = new Set(charsArray);

      // Convert the Set back to an array and join the characters into a string
      const uniqueString = Array.from(uniqueCharsSet).join("");

      return uniqueString;
    }

    const inputStr = "meeting";
    const output = removeDuplicateChars(inputStr);
    console.log("Input:", inputStr);
    console.log("Output:", output);
  }
  practice() {
    let array = [1, 2, 3, 4, 5]
    console.log(array.reverse(), 'reverse');
    console.log(array.at(2), 'reverse');
    let concat1 = [1, 2]
    let concat2 = [5, 6]
    console.log(concat1.concat(concat2), 'concate')
    console.log(concat1.constructor, 'constructor')
    let within = [12, 13, 5, 6, 8, 1]
    console.log(within.copyWithin(1, 0, 2), 'array.copyWithin(target, start, end)')
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let entt = fruits.entries()
    console.log(entt, 'entries');

  }
  jsonData() {
    this.getDD = dumData.orders
    console.log(this.getDD);
    console.log(this.getDD.entries());

  }
  removeArray() {
    console.log(dumData);
    dumData.orders.splice(0, 0,)
  }
  add() {
    let arr = [{ id: 1, name: 'neha' }];
    while (true) {
      const itemName = prompt("Enter item name (or click Cancel to stop):");
      if (itemName === null) {
        break; // Exit the loop if user cancels
      }
      if (itemName.trim() !== '') {
        arr.push({ id: arr.length + 1, name: itemName });
        console.log('Array:', arr); // Output the array for demonstration
        this.addedArray = arr
        console.log(this.addedArray, 'arr');

      }
    }
  }
  remov() {
    this.addedArray.pop()
  }
  pract() {
    const isEven = (n: any) => {
      return n % 2 == 0;
    }

    let printMsg = (evenFunc: any, num: any) => {
      const isNumEven = evenFunc(num);
      console.log(`${num} is an even number: ${isNumEven}.`)
    }

    // Pass in isEven as the callback function
    printMsg(isEven, 4);
    // => The number 4 is an even number: True.

// reduce
    const numbers = [1, 2, 3, 4];

    const sum = numbers.reduce((accumulator, curVal) => {
      return accumulator + curVal;
    });

    console.log(sum); // 10
    const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];
// map
    const announcements = members.map((member) => {
      return member + " joined the contest.";
    });

    console.log(announcements);
    // for each
    const numberss = [28, 77, 45, 99, 27];

    numberss.forEach((number,index) => {  
  console.log(`${index}:${number}`);
}); 
// filter
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});
console.log(filteredArray,'filter');
// 

// const promise = new Promise((resolve, reject) => {
//   const res = true;
//   // An asynchronous operation.
//   if (res) {
//     resolve('Resolved!');
//   }
//   else {
//     reject(Error('Error'));
//   }
// });

// promise.then((res) => console.log(res), (err) => console.error(err));
// .then
// const promise = new Promise((resolve, reject) => {    
//   setTimeout(() => {
//     resolve('Result');
//   }, 200);
// });

// promise.then((res) => {
//   console.log(res);
// }, (err) => {
//   console.error(err);
// });
// promise all
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 300);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 200);
// });

// Promise.all([promise1, promise2]).then((res) => {
//   console.log(res[0]);
//   console.log(res[1]);
// });
// nested promise and .then
// const promise = new Promise((resolve, reject) => {  
//   setTimeout(() => {
//     resolve('*');
//   }, 1000);
// });

// const twoStars = (star:any) => {  
//   return (star + star);
// };

// const oneDot = (star:any) => {  
//   return (star + '.');
// };

// const print = (val:any) => {
//   console.log(val);
// };

// // Chaining them all together
// promise.then(twoStars).then(oneDot).then(print);

// multiple chaining .then
// const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

// promise.then(res => {
//   return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
// }).then((res) => {
//   console.log(res)
// }, (err) => {
//   console.error(err)
// });

// fake promise http req
const mock = (success:any, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(success) {
        resolve({status: 200, data:{}});
      } else {
        reject({message: 'Error'});
      }
    }, timeout);
  });
}
const someEvent = async () => {
  try {
    await mock(true, 1000);
  } catch (e:any) {
    console.log(e.message,someEvent);
  }
}
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'mysite.com/getjson');
// console.log(xhr);
  }
  practice2(){
    function substrgg(sub: any) {
      const result = [];
     for(let i = 0; i < sub.length; i++ ){
      for(let j = i + 1; j <= sub.length; j++){
        result.push(sub.slice(i, j).join(''));
      }
     }
     return result;
    }
  const arr = ['a','b','c','d']
  const formdd = substrgg(arr);
  console.log(formdd, 'substr formated');
  
  }
 
}
