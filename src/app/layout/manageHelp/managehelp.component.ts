import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { HelpcategoriesService } from '../../shared/services/helpcategories.service'


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-managehelp',
  templateUrl: './managehelp.component.html',
  styleUrls: ['./managehelp.component.scss'],
  animations: [routerTransition()]
})
export class ManagehelpComponent implements OnInit {
  dataTable: any;
  data: any;

  constructor(private http: HttpClient, 
    private chRef: ChangeDetectorRef,
    private service: HelpcategoriesService){}
    ngOnInit() {
      this.getHelpcategories()
    }
    getHelpcategories() {
    this.service.getHelpcategories()
    .subscribe((value: any[]) => {
      this.data = value;
      // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }
  setStatus($id) {
    this.service.setStatusHelpcategories($id).subscribe(res => {
      console.log(res)
      this.getHelpcategories()
    }, err => console.log(err))
  }
 
}
