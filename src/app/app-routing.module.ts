import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { BankComponent } from './bank/bank.component';
import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { HomeComponent } from './home/home.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'addaccount',
    component:AddaccountComponent
  },
  {
    path:'bankbalance',
    component:BankbalanceComponent
  },
  {
    path:'bank',
    component:BankComponent
  },
  {
    path: 'makepayment',
    component: MakepaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
