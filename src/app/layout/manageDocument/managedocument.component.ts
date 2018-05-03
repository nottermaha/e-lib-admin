import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
// import { ConfigService } from '../../shared/services/config.service'
import { TopicService } from '../../shared/services/topic.service'
import { CountryService } from '../../shared/services/country.service'

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-managedocument',
  templateUrl: './managedocument.component.html',
  styleUrls: ['./managedocument.component.scss'],
  animations: [routerTransition()]
})
export class ManagedocumentComponent implements OnInit {
  clients: any[];
  dataTable: any;
  topic :any
  country :any

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef,
    private serviceTopic: TopicService,
    private serviceCountry: CountryService
  ){}

    ngOnInit() {
      this.getTopic()
      this.getCountry()
    }
    getTopic() {
      this.serviceTopic.getTopic().subscribe(res => {
        // console.log(res)
        this.topic = res
      }, err=> console.log(err))
    }
    getCountry() {
      this.serviceCountry.getCountry().subscribe(res => {
        console.log(res)
        this.country = res
      }, err=> console.log(err))
    }


}
