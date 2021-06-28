import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

import { AngularFireDatabase } from '@angular/fire/database';

//const cors = require('cors')({origin: true});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PORTFOLIOAPP';   
  teams: any[] = [];

  constructor(private svc: InfoPaginaService, private db: AngularFireDatabase) {
   

    // db.list('/team').snapshotChanges().subscribe(res => {
    //   res.forEach(t => {
    //     const team = t.payload.toJSON(); //console.log(t.payload.toJSON());        
    //     this.teams.push(team);
    //   });
    // });



  }






}
