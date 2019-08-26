import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Company{
  constructor(
    public  id:String,
    public companyName:String,
    public turnOver:String,
    public ceo:String,
    public boardOfDirectors:String,
    public sectorId:String,
    public briefWriteUp:String,
    public stockPriceId:String
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor( private httpClient:HttpClient) {
    
   }
   getCompanies()
   {
     console.log("test call");
     return this.httpClient.get<Company[]>('http://localhost:9091/companylist1');
   }
}
