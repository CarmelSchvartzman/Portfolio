import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoDTO } from '../model/info-dto';




@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  data: InfoDTO = {};
  team: any = {};
  loaded = false;

  constructor(private http: HttpClient) {
    console.warn('Salut des des services');
    this.http.get('assets/data/data-pagina.json').pipe().subscribe((data: InfoDTO) => {
      this.loaded = true;
      this.data = data;

      console.warn(`Msg SVC === > ${this.data.email}`);

    })
    this.GetTeam();
  }


  GetData(): Observable<any> {
    return this.http.get('assets/data/data-pagina.json');
  }

  private GetTeam() {
    // this.http.get("https://portfolioapp-10aa9-default-rtdb.europe-west1.firebasedatabase.app/team")
    //   .subscribe(d => {
    //     this.team = d;

    //   }

    //   );
  }


}
