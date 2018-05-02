import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CollectionService } from '../../shared/services/collection.service'
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'zero-config',
  templateUrl: './managecallection.component.html',
  styleUrls: ['./managecallection.component.scss'],
  animations: [routerTransition()]

})
export class ManagecallectionComponent implements OnInit {
  dataTable: any;
  data: any;

  constructor(private http: HttpClient, 
    private chRef: ChangeDetectorRef,
    private service: CollectionService){}
    ngOnInit() {
      this.getCollection()
    }
    getCollection() {
    this.service.getCollection()
    .subscribe((value: any[]) => {
      this.data = value;
      // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }
  setStatus($id) {
    this.service.setStatusCollection($id).subscribe(res => {
      console.log(res)
      this.getCollection()
    }, err => console.log(err))
  }
 
}
