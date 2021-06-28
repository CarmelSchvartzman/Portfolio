import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [];
  filteredProducts: any[] = [];
  constructor(private svc: AngularFireDatabase) {
    this.GetProducts().subscribe(p=>{
      
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

  SearchProduct(term: string) {console.warn(`INSIDE SVC : ${term} !!`);
    this.filteredProducts = this.products.filter(f => {
      return f == term;
    });
    console.warn(this.products);
    console.warn(this.filteredProducts);
  }
}
