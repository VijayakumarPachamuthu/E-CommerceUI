import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMobileComponent } from './post-mobile/post-mobile.component';
import { GetMobilesComponent } from './get-mobiles/get-mobiles.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{
  path: 'post', component: PostMobileComponent
}, {
  path: 'get', component: GetMobilesComponent
}, { 
  path: 'update/:id', component: UpdateComponent
},{
  path: '', redirectTo: 'get', pathMatch: 'full'
},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
