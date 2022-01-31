import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  route: any;

  constructor() { }

  ngOnInit(): void {
  }
  create(name:any,phone:any,acc:any,upi:any,initial:any,remaining:any){
    localStorage.setItem("name",name)
    localStorage.setItem("phone",phone)
    localStorage.setItem("acc",acc)
    localStorage.setItem("upi",upi)
    localStorage.setItem("initial",initial)
    localStorage.setItem("remaining",remaining)
    this.route.navigate(['/makepayment']); // navigate to other page
  }
}
