import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];

  constructor(private svc: InfoPaginaService) { }

  ngOnInit(): void {
    this.svc.GetTeam().subscribe(data => {
      data.forEach(team => {
        this.blogs.unshift(team.payload.toJSON());
      });
    });
  }

}
