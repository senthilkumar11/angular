import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {

  constructor( private companyService:CompanyService) { }

  ngOnInit() {
  }
  createCompany(companyForm:NgForm):void
  {

  console.log(companyForm.value);
  this.companyService.createCompany(companyForm.value)
  .subscribe( data => {
    alert("Employee created successfully.");
  });
  }
}
