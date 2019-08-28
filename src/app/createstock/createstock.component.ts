import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from '../service/stock-exchange.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-createstock',
  templateUrl: './createstock.component.html',
  styleUrls: ['./createstock.component.css']
})
export class CreatestockComponent implements OnInit {

  constructor(private stockExchangeService:StockExchangeService) { }

  ngOnInit() {
  }
  createStockExchange(stockFrom:NgForm)

  {
    console.log("test");
    this.stockExchangeService.createStockexchange(stockFrom.value)
    .subscribe( data => {
      alert("Stock created successfully.");
    });
    
  }
}
