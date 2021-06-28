import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdDto } from 'src/app/model/prod-dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  value!: string;
  prods: ProdDto[] = [];
  constructor(private ar: ActivatedRoute, private svc: ProductsService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((v) => {//console.warn(`INSIDE SEARCH : ${v["val"]} !!`);
      this.value = v['val']; //console.warn(v);
      this.svc.SearchProduct(this.value);
      this.prods = this.svc.filteredProducts;
    });
  }

}
