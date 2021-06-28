import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public svc: InfoPaginaService, private route: Router) { }

  ngOnInit(): void {
    console.log()
  }


  Search(val: string) { 
    
    if (val.length > 0) {
      this.route.navigate(["/search" , val]);
     //  this.route.navigate(["search/" + val]);
    }


  }

}
