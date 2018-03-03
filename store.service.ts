import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService{
  result:any;
  constructor(private _http:Http){}

  getUsers(){
    return this._http.get("/api/users")
    .map(result => this.result = result.json().data);

  }

  getProducts(){
return this._http.get("http://localhost:300/api/product/getProducts")
.map(result=> this.result= result.json().data);

  }

}
