import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatestockComponent } from './createstock/createstock.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';

const routes: Routes = [
  
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'companylist',component:CompanyListComponent},
    {path:'insertcompany',component:CreatecompanyComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
