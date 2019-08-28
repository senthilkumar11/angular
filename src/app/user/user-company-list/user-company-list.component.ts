import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-user-company-list',
  templateUrl: './user-company-list.component.html',
  styleUrls: ['./user-company-list.component.css']
})
export class UserCompanyListComponent implements OnInit {

  company:String[];

  constructor(private companyService:CompanyService) { }

  ngOnInit() { this.companyService. getCompanies().subscribe(
    response =>this.handleSuccessfulResponse(response),
   );
  }
  handleSuccessfulResponse(response)
  {
      this.company=response;
  }
}
