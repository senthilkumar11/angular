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
import { UserComponent } from './user/user/user.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { ImportStockpriceComponent } from './import-stockprice/import-stockprice.component';
import { ListIpoDetailsComponent } from './list-ipo-details/list-ipo-details.component';
import { UserIpoListComponent } from './user/user-ipo-list/user-ipo-list.component';
import { UserCompanyListComponent } from './user/user-company-list/user-company-list.component';



const routes: Routes = [
  
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'companylist',component:CompanyListComponent,canActivate:[AuthGaurdService]},
    {path:'insertcompany',component:CreatecompanyComponent,canActivate:[AuthGaurdService]} ,
    { path: 'admin', component: AdminComponent ,canActivate:[AuthGaurdService]},
    {path:'stocklist',component:StockListComponent,canActivate:[AuthGaurdService]},
    {path:'insertstock',component:CreatestockComponent,canActivate:[AuthGaurdService]},
    {path:'import',component:ImportStockpriceComponent,canActivate:[AuthGaurdService]},
    {path:'ipo',component:ListIpoDetailsComponent,canActivate:[AuthGaurdService]},

    { path: 'logout', component: LogoutComponent},
    
    { path: 'user', component: UserComponent },
    {path:'useripo',component:UserIpoListComponent},
    {path:'usercompanylist',component:UserCompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
