import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class IpoDetails {

  constructor(
    public ipoId:number,
    public companyId:number,
    public companyName:string,
    public stockExchange:string,
    public pricePerShare:number,
    public openDateTime:string,
    public remarks:string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class IpoService{
  constructor(private http:HttpClient){

  }
  getIpoDetails()
  {
    console.log("getipodetails");
    return this.http.get<IpoDetails[]>('http://localhost:9091/getipo')
  }
}
