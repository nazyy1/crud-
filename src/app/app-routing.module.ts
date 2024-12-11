  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '' ,component : HomeComponent}, 
  {path: 'products' ,component : ProductsComponent},
  {path: 'update/:id' ,component : UpdateComponent},
  {path: 'login' ,component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
