import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ang-concepts',
  templateUrl: './ang-concepts.component.html',
  styleUrl: './ang-concepts.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class AngConceptsComponent implements OnChanges,OnInit,DoCheck,AfterContentInit
,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy{
@Input() ChildData : any;
ppData:any
 @Output() notify : EventEmitter<string> = new EventEmitter<string>()
 passData(){
  this.notify.emit("this msg coming from child")
 }
constructor(){
  console.log("constructor called");
  
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  console.log('ngOnChanges called');
  
}
ngOnInit(){
  console.log('ngOnInit called');
}
ngDoCheck(){
console.log('docheck');
if(this.ChildData && this.ChildData.length > 0){
  console.log('docheck, check calls');
  
}
}
ngAfterContentInit(): void {
  console.log('ngAfterContentInit called');
  
}
ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked called");
}
ngAfterViewInit(){
console.log("ngAfterViewInit called");
}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked called");
}
ngOnDestroy(): void {
  console.log("ngOnDestroy called");
  
}
OnClose():void{
  // this.dialogRef.close(this.ppData);
}
 findSubstrings(inputString:any) {
  const substrings = [];
  for (let i = 0; i < inputString.length; i++) {
      for (let j = i + 1; j <= inputString.length; j++) {
          substrings.push(inputString.slice(i, j));
      }
  }
  return substrings;
}
sub(){
  const inputStr = "abcd";
const output = this.findSubstrings(inputStr);
console.log("Input:", inputStr);
console.log("Output:", output);
}


removeDuplicate(){
  function removeDuplicateWords(inputString:any) {
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

removChar(){
function removeDuplicateChars(inputString:any) {
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
}
