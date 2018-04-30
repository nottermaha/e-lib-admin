import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { ConfigService } from '../../shared/services/config.service'

@Component({
  selector: 'zero-config',
  templateUrl: './managecallection-form.component.html',
  styleUrls: ['./managecallection.component.scss'],
  animations: [routerTransition()]

})
export class ManagecallectionFormComponent implements OnInit {
  clients: any[];
  dataTable: any;

  constructor( ){}

  ngOnInit(){

  }

}
