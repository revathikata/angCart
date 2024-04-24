import { Component } from '@angular/core';
import { ServicesService } from '../../service/services.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngConceptsComponent } from '../../functions/ang-concepts/ang-concepts.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  public productList: any;
  searchkey: string = ""
  filterCategory: any;
  dialgDD: any[] =[];
  dialogDD: any[] =[];
  removedItems: any[] =[];
  constructor(private api: ServicesService, private router: Router,private dialog: MatDialog) { }
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
  openDialog(): void {
    
    const dialogRef = this.dialog.open(AngConceptsComponent, { width: '600px' }); 
    console.log('openDialog() called');// Corrected width syntax
    dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
      if (result) {
        // Assuming you want to push result into some array
        this.dialogDD.push(result); // Corrected typo
       
      }
    });
  }
  remove(item: any): void {
    const index = this.dialogDD.indexOf(item);
    if (index !== -1) {
        // Remove the item from dialogDD and store it in removedItems
        const removedItem = this.dialogDD.splice(index, 1)[0];
        this.removedItems.push(removedItem);
    }
  }
  undoRemove(): void {
    // Check if there are removed items to undo
    if (this.removedItems.length > 0) {
        // Take the last removed item from removedItems and add it back to dialogDD
        const lastRemovedItem = this.removedItems.pop();
        this.dialogDD.push(lastRemovedItem);
    }
  }
}
