import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  cartItems:any = []
  public productList = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  getPoducts(){
   return this.productList.asObservable()
  }
  setProducts(product:any){
 this.cartItems.push(...product)
 this.productList.next(product)
  }
  addTocart(product:any){
    this.cartItems.push(product);
    this.productList.next(this.cartItems)
    this.getTotalPrice()
    console.log(product);
    
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItems.map((a:any) =>{
      grandTotal += a.total
    } )
    return grandTotal;
  }
  removeItem(product:any){
    this.cartItems.map((a:any, index:any) =>{
      if(product.id === a.id){
        this.cartItems.splice(index,1)
      }
    })
    this.productList.next(this.cartItems)
  }
  removeAll(){
    this.cartItems =[]

  }
}
