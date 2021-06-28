import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ProdDto } from '../model/prod-dto';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private svc: AngularFireDatabase) {
    this.GetProducts().subscribe(p => {
      p.forEach(item => {
        const i = item.payload.toJSON();
        this.products.unshift(<ProdDto>i);
      });

    });
  }

  GetProducts(): Observable<any[]> {
    return this.svc.list('/productos').snapshotChanges();
  }

  GetIx(): Observable<any[]> {
    return this.svc.list('/productos_idx').snapshotChanges();
  }

  GetProductById(id: number): Observable<any> {
    return this.svc.object(`/productos/prod-${id}`).snapshotChanges();
  }

  SearchProduct(term: string) {
    this.filteredProducts = this.products.filter(f => {
      
      return f.producto.toLowerCase().includes(term.toLowerCase())
        ||
        f.resumen.toLowerCase().includes(term.toLowerCase());
    });
    //console.warn(this.products);
    //console.warn(this.filteredProducts);
  }
}
