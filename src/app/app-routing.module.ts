import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatestockComponent } from './createstock/createstock.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { StockListComponent } from './stock-list/stock-list.component';


const routes: Routes = [
  
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'companylist',component:CompanyListComponent,canActivate:[AuthGaurdService]},
    {path:'insertcompany',component:CreatecompanyComponent,canActivate:[AuthGaurdService]} ,
    { path: 'logout', component: LogoutComponent },
    { path: 'admin', component: AdminComponent ,canActivate:[AuthGaurdService]},
    { path: 'user', component: UserComponent },
    {path:'stocklist',component:StockListComponent},
    {path:'insertstock',component:CreatestockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
