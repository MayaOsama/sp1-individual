import { Component, OnInit } from '@angular/core';
// Import the DataService
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
  var index= this.products.indexOf(product);
  if(index>-1)
    this.products.splice(index);
}
ngOnInit(){

}
}
