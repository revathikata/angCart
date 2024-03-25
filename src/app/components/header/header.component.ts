import { Component } from '@angular/core';
import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public totalItems:  number = 0;
  searchText :string = ''
constructor(private cartService : ServicesService){}

ngOnInit():void{
  this.cartService.getPoducts().subscribe((res:any) =>{
  this.totalItems = res.length
  })
}
search(event:any){
  this.searchText = ( event.target as HTMLInputElement).value
  console.log(this.searchText);
  this.cartService.search.next(this.searchText)
}
}
