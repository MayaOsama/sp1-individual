import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
// Define a users property to hold our user data
products: Array<any>;
// Create an instance of the StoreService through dependency injection
  constructor(private _storeService: StoreService) {
  this._storeService.getProducts().subscribe(res => this.products = res);

  }
  deleteProduct(product){
      this._storeService.deleteProduct(product).subscribe((res:any )=>{
        this._storeService.getProducts().subscribe(res => this.products = res)
      });

  }
  EditProduct(product,name,price){
    var newp=
    {
      name:name,
      price:price,
    };
      this._storeService.EditProduct(product,newp).subscribe((res:any )=>{
        this._storeService.getProducts().subscribe(res => this.products = res)
      });

    }
    CreateProduct(name,price,sellerName){
      var product={
        name:name,
        price:price,
        seller:sellerName
      } ;
      this._storeService.CreateProduct(product).subscribe((res:any )=>{
        this._storeService.getProducts().subscribe(res => this.products = res)
      });


    }

  ngOnInit(){

  }
}
