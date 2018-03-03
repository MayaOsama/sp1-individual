import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import{ StoreComponent } from './StoreComponent';

const rouer :Routes =[
{
    path:'',
    component: StoreComponent ,
    pathMatch:'full';
}

];

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule],
providers:[]

})
export class StoreRoutingModule {}
