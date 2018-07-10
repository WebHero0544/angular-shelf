import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicNoPageComponent } from './base/components/public-no-page/public-no-page.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',  //要使用相对路径
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PublicNoPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
