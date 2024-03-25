import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ang-concepts',
  templateUrl: './ang-concepts.component.html',
  styleUrl: './ang-concepts.component.css'
})
export class AngConceptsComponent implements OnChanges,OnInit,DoCheck{
@Input() ChildData : any;

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  
}
ngOnInit(){
  console.log('oninit');
  
}
ngDoCheck(){
console.log('docheck');
if(this.ChildData && this.ChildData.length > 0){
  console.log('docheck, check calls');
  
}
}
}
