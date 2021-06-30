import { Component, OnInit } from '@angular/core';
import { IxDto } from 'src/app/model/ix-dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prods: IxDto[] = [];
  loading = false;
  constructor(private svc: ProductsService) { }

  ngOnInit(): void {
    this.svc.GetIx().subscribe(data => {
      data.forEach(i => {
        const ix = i.payload.toJSON();
        this.prods.unshift(ix);
      });
      setTimeout(() => (this.loading = false), 1000);

    });
    this.loading = true;
  }

}
