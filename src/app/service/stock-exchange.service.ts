import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class StockExchange{
constructor(
  public id:number,
  public name:String,
  public brief:String,
  public ContactAddress:String,
  public remarks:String
  ){}

} 
@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  constructor(private httpClient:HttpClient) { }
 
 
  getStockExchange()
  {
    console.log("test call");
     return this.httpClient.get<StockExchange[]>('http://localhost:9091/stockexchangelist');
  }
  createStockexchange(StockExchange)
  {
    return this.httpClient.post<StockExchange>("http://localhost:9091/insertstockexchange",StockExchange);
  }
}
