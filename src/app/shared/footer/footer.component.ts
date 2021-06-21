import { Component, OnInit } from '@angular/core';
import { InfoDTO } from 'src/app/model/info-dto';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  data:InfoDTO = {}; 
  constructor(private svc: InfoPaginaService) { }

  ngOnInit(): void {
    console.warn(`Msg COMP  === > ${this.svc.data.email}`);

    this.svc.GetData().subscribe((data: InfoDTO) => {
    
      this.data = data;      
     
      
    });
    



  }

}
