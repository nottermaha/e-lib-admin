import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { DepartmentService } from '../../shared/services/departmemnt.service'



import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-managedepartment',
  templateUrl: './managedepartment.component.html',
  styleUrls: ['./managedepartment.component.scss'],
  animations: [routerTransition()]
})
export class ManagedepartmentComponent implements OnInit {
  clients: any[];
  dataTable: any;
  data: any;

  constructor(private http: HttpClient, 
    private chRef: ChangeDetectorRef,
    private service: DepartmentService){}

  // ngOnInit(){
  //   this.service.getDepartment()
  //     .subscribe((data: any[]) => {
  //       this.clients = data;
  
  //       // Now you can use jQuery DataTables :
  //       const table: any = $('table');
  //       this.dataTable = table.DataTable();
  //     });
  // }


  ngOnInit() {
    this.service.getDepartment().subscribe(res => {
      console.log(res)
      this.data = res
    }, err=> console.log(err))
  }

 
}
