import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoDTO } from '../model/info-dto';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  data: InfoDTO = {};
  
  loaded = false;
  title = 'PORTFOLIOAPP';   


  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    console.warn('Salut des des services');
    this.http.get('assets/data/data-pagina.json').pipe().subscribe((data: InfoDTO) => {
      this.loaded = true;
      this.data = data;

      console.warn(`Msg SVC === > ${this.data.email}`);

    })
    
  }


  GetData(): Observable<any> {
    return this.http.get('assets/data/data-pagina.json');
  }

  GetTeam() {   
    return this.db.list('/team').snapshotChanges();  
    
  }


}
