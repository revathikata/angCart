import { Component } from '@angular/core';
import { ServicesService } from '../../service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  public productList: any;
  searchkey: string = ""
  filterCategory: any;
  constructor(private api: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.api.getProduct().subscribe((res: any) => {
      this.productList = res;
      this.filterCategory = res
      this.productList.forEach((element: any) => {
        if (element.category === "women's clothing" || element.category === "men's clothing") {
          element.category = "fashion"
        }
        Object.assign(element, { quantity: 1, total: element.price })
      });
      console.log(this.productList);
      
    })
    this.api.search.subscribe((val: any) => {
      this.searchkey = val;
    })
  }

  addToCart(item: any) {
    this.api.addTocart(item);
  }
  filter(catergory: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category === catergory || catergory == '') {
          return a;
        }
      })
  }
  functions() {
    this.router.navigate(['/funtions']);
  }
}
