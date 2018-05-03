import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { TopicService } from '../../shared/services/topic.service'

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-managetopic',
  templateUrl: './managetopic.component.html',
  styleUrls: ['./managetopic.component.scss'],
  animations: [routerTransition()]
})
  export class ManagetopicComponent implements OnInit {
    dataTable: any;
    data: any;
  
    constructor(private http: HttpClient, 
      private chRef: ChangeDetectorRef,
      private service: TopicService){}
      ngOnInit() {
        this.getTopic()
      }
      getTopic() {
      this.service.getTopic()
      .subscribe((value: any[]) => {
        this.data = value;
        // Now you can use jQuery DataTables :
        this.chRef.detectChanges();
        const table: any = $('table');
        this.dataTable = table.DataTable();
      });
    }
    setStatus($id) {
      this.service.setStatusTopic($id).subscribe(res => {
        console.log(res)
        this.getTopic()
      }, err => console.log(err))
    }
   
  }
