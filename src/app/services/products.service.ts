import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [];
  constructor(private svc: AngularFireDatabase) {

  }

  GetProducts(): Observable<any[]> {
    return this.svc.list('/productos').snapshotChanges();
  }

  GetIx(): Observable<any[]> {
    return this.svc.list('/productos_idx').snapshotChanges();
  }
}
