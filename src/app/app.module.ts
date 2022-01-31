import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BankComponent,
    AddaccountComponent,
    MakepaymentComponent,
    BankbalanceComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
