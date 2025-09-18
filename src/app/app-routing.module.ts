import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMobileComponent } from './post-mobile/post-mobile.component';
import { GetMobilesComponent } from './get-mobiles/get-mobiles.component';
import { UpdateComponent } from './update/update.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: SignInComponent },

  // 🔒 Protected routes
  { path: 'post', component: PostMobileComponent, canActivate: [authGuard]},
  { path: 'get', component: GetMobilesComponent,  canActivate: [authGuard]},
  { path: 'update/:id', component: UpdateComponent, canActivate: [authGuard] },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
