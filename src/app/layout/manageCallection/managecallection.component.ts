import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
// import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';

@Component({
  selector: 'zero-config',
  templateUrl: './managecallection.component.html',
  styleUrls: ['./managecallection.component.scss'],
  animations: [routerTransition()]

})
export class ManagecallectionComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];
  clients: any[];
  // private dataTable:any
  constructor(private http: HttpClient){}

  ngOnInit(){
    // this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
    //   .subscribe((data: any[]) => this.clients = data);
  }
 


}
