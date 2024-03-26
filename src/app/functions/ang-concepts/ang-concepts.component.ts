import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ang-concepts',
  templateUrl: './ang-concepts.component.html',
  styleUrl: './ang-concepts.component.css'
})
export class AngConceptsComponent implements OnChanges,OnInit,DoCheck,AfterContentInit
,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy{
@Input() ChildData : any;

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
}
