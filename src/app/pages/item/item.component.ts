import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdDto } from 'src/app/model/prod-dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  index!: number;
  item!: ProdDto;
  constructor(private route: ActivatedRoute, private svc: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      console.log(p['id']);
      this.svc.GetProductById(p["id"]).subscribe(i => {console.log(i.payload.toJSON());
          this.item = i.payload.toJSON();
      });
    });
  }

}
