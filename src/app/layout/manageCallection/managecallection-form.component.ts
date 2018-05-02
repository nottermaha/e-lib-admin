import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CollectionService } from '../../shared/services/collection.service'
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'zero-config',
  templateUrl: './managecallection-form.component.html',
  styleUrls: ['./managecallection.component.scss'],
  animations: [routerTransition()]

})
export class ManagecallectionFormComponent implements OnInit {
  value:any;
  id_collection:any;

  constructor(
    private service: CollectionService,
    private route: ActivatedRoute,
    private router: Router,
   ){
    this.value = {
    };
   }

  ngOnInit() {
    this.id_collection = this.route.snapshot.paramMap.get('id_collection');
    if (this.id_collection != null) {
      this.service.getCollectionById(this.id_collection).subscribe(res => {
        console.log(res)
        this.value = res
      }, err => console.log(err))
    }
  }
  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let params = myform.value;
    let status = '';
    // console.log('55555555555')
    // console.log(this.id_servicebox)
    if (this.id_collection == null) {
      status = 'create';
      // console.log('cre')
    } else {
      status = 'update';
      // console.log(myform.value)
      params['id'] = this.id_collection;
      // console.log('edi')
    }
    console.log(status)
    this.service.setCollection(params, status)
    .subscribe(res => {
      this.router.navigate(['managecallection']);
      console.log(res)
    }, err => console.log(err))
  }

}

