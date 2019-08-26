import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
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
