import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'app-managedepartment',
  templateUrl: './managedepartment.component.html',
  styleUrls: ['./managedepartment.component.scss'],
  animations: [routerTransition()]
})
export class ManagedepartmentComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    
  }

 


}
