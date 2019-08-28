import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';

@Component({
  selector: 'app-user-ipo-list',
  templateUrl: './user-ipo-list.component.html',
  styleUrls: ['./user-ipo-list.component.css']
})
export class UserIpoListComponent implements OnInit {

  ipoDetails:string[];
  constructor(private ipoService:IpoService) { }

  ngOnInit() {this.ipoService.getIpoDetails().subscribe(
    response => this.handleSuccessfulResponse(response),
  );
  }
  handleSuccessfulResponse(response)
  {
    console.log("ipo details:"+response);
    this.ipoDetails=response;
  }

}

