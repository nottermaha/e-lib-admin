import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'zero-config',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new.component.scss'],
  animations: [routerTransition()]

})
export class NewFormComponent implements OnInit {
  clients: any[];
  dataTable: any;

  constructor( ){}

  ngOnInit(){

  }

}
