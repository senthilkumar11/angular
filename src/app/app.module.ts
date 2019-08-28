import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatestockComponent } from './createstock/createstock.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { ImportStockpriceComponent } from './import-stockprice/import-stockprice.component';
import { ListIpoDetailsComponent } from './list-ipo-details/list-ipo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatestockComponent,
    LoginComponent,
    RegisterComponent,
    CreatecompanyComponent,
    CompanyListComponent,
    HeaderComponent,
    LogoutComponent,
    AdminComponent,
    UserComponent,
    StockListComponent,
    ImportStockpriceComponent,
    ListIpoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
