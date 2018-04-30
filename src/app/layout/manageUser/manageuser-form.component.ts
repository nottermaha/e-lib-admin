import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'zero-config',
  templateUrl: './manageuser-form.component.html',
  styleUrls: ['./manageuser.component.scss'],
  animations: [routerTransition()]

})
export class ManageuserFormComponent implements OnInit {
  clients: any[];
  dataTable: any;

  constructor( ){}

  ngOnInit(){

  }

}
