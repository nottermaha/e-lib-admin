import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'zero-config',
  templateUrl: './managedepartment-form.component.html',
  styleUrls: ['./managedepartment.component.scss'],
  animations: [routerTransition()]

})
export class ManagedepartmentFormComponent implements OnInit {
  clients: any[];
  dataTable: any;

  constructor( ){}

  ngOnInit(){

  }

}
