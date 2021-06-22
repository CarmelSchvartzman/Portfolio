import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teams: any[] = [];
  constructor(private svc: InfoPaginaService) { //console.warn("AboutComponent CTOR")
  }

  ngOnInit(): void {

    this.svc.GetTeam().subscribe(data => {
      data.forEach(team => {
        this.teams.unshift(team.payload.toJSON());
      });
    });


  }

}
