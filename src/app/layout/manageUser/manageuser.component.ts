import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { StaffService } from '../../shared/services/staff.service'
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
  staffs: any;
  dataTable: any;

  constructor(
    private staffService: StaffService,
    private http: HttpClient,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getStaff()
  }

  getStaff() {
    this.staffService.getStaff().subscribe(res => {
      console.log(res)
      this.staffs = res
      // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable();
    }, err => console.log(err))
  }

  setStatusStaff($id) {
    this.staffService.setStatusStaff($id).subscribe(res => {
      console.log(res)
      this.getStaff()
    }, err => console.log(err))
  }

}
