import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from '../service/stock-exchange.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockExchange:String[]
  constructor(private stockExchangeService:StockExchangeService) { }

  ngOnInit( ) {
    this.stockExchangeService.getStockExchange().subscribe(
      response =>{
        return this.handleSuccessfulResponse(response);
      });
  }

  handleSuccessfulResponse(response)
  {
    this.stockExchange=response;
  }
}
