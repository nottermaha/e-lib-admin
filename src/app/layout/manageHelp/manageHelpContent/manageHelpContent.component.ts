import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { HelpcategoriesService } from '../../../shared/services/helpcategories.service'


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manageHelpContent',
  templateUrl: './manageHelpContent.component.html',
  animations: [routerTransition()]
})
export class ManageHelpContent implements OnInit {
  dataTable: any;
  HelpContents: any;
  IdHelpCategories: any;

  constructor(
    private http: HttpClient,
    private chRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private service: HelpcategoriesService
  ) { 
    this.IdHelpCategories = this.route.snapshot.paramMap.get('IdHelpCategories');
  }

  ngOnInit() {
    this.getHelpContent()
  }

  getHelpContent() {
    this.service.getHelpContent(this.IdHelpCategories).subscribe(resp => {
      console.log(resp);
      this.HelpContents = resp;
      // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }

  setStatusHelpContent($id) {
    this.service.setStatusHelpContent($id).subscribe(res => {
      console.log(res)
      this.getHelpContent()
    }, err => console.log(err))
  }

}
