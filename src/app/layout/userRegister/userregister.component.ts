import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss'],
  animations: [routerTransition()]
})
export class UserregisterComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    
  }

 


}
