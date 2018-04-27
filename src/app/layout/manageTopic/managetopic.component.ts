import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'app-managetopic',
  templateUrl: './managetopic.component.html',
  styleUrls: ['./managetopic.component.scss'],
  animations: [routerTransition()]
})
export class ManagetopicComponent implements OnInit {
  private data: any
  private alerts: Array<any> = [];

  constructor() {

  }

  ngOnInit() {
    
  }

 


}
