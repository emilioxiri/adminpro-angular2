import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register/register.component';


export const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
