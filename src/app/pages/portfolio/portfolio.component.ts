import { Component, OnInit } from '@angular/core';
import { ProdDto } from 'src/app/model/prod-dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  prods: ProdDto[] = [];
  constructor(private svc: ProductsService) { }

  ngOnInit(): void {
    this.svc.GetProducts().subscribe(p => {
      p.forEach(item => {
        const i = item.payload.toJSON();
        this.prods.unshift(i);
      });
    });
  }

}
