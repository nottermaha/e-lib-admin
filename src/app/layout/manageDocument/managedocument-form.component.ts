import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'zero-config',
  templateUrl: './managedocument-form.component.html',
  styleUrls: ['./managedocument.component.scss'],
  animations: [routerTransition()]

})
export class ManagedocumentFormComponent implements OnInit {
  clients: any[];
  dataTable: any;

  constructor( ){}

  ngOnInit(){

  }

}
