import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss'],
  animations: [routerTransition()]
})
export class ManageuserComponent implements OnInit {
  clients: any[];
  dataTable: any;

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef){}

  ngOnInit(){
    this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
      .subscribe((data: any[]) => {
        this.clients = data;
  
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
      });
  }


}
