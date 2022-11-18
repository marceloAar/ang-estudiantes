import { Component, OnInit } from '@angular/core';
import { ServiceEstService } from './servicio/service-est.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  estudiantes: any[] = [];

  constructor(
    private appService : ServiceEstService
  ){

  }

  ngOnInit(): void {

    this.appService.getAll()
    .subscribe((data: any) => this.estudiantes = data);
    //console.log(this.estudiantes);

  }


}
