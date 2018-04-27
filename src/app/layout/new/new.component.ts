import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  animations: [routerTransition()]
})
export class NewComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    
  }

 


}
