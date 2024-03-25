import { Component } from '@angular/core';
import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public product :any =[]
  grandTotal : number = 0
constructor( private servc : ServicesService){}

ngOnInit():void{
  this.servc.getPoducts().subscribe((res:any) =>{
    this.product = res;
    this.grandTotal = this.servc.getTotalPrice();
  })
}
removeItem(item:any){
this.servc.removeItem(item)
}
emptyCart(){
  this.servc.removeAll();
}
}
