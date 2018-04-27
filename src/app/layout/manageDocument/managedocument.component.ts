import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'app-managedocument',
  templateUrl: './managedocument.component.html',
  styleUrls: ['./managedocument.component.scss'],
  animations: [routerTransition()]
})
export class ManagedocumentComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    
  }

 


}
