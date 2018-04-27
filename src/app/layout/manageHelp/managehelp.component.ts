import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'app-managehelp',
  templateUrl: './managehelp.component.html',
  styleUrls: ['./managehelp.component.scss'],
  animations: [routerTransition()]
})
export class ManagehelpComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    
  }

 


}
