import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

//const cors = require('cors')({origin: true});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PORTFOLIOAPP';
  items: Observable<any[]>;
  teams: any[] = [];

  constructor(private svc: InfoPaginaService, private firestore: AngularFirestore, private db: AngularFireDatabase) {


    this.items = firestore.collection('/team').valueChanges();


    db.list('/team').snapshotChanges().subscribe(res => {
      res.forEach(t => {
        const team = t.payload.toJSON(); console.log(t.payload.toJSON());        
        this.teams.push(team);
      });
    });



  }






}
