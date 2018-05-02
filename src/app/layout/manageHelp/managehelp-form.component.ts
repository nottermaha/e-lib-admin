import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HelpcategoriesService } from '../../shared/services/helpcategories.service'
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'zero-config',
  templateUrl: './managehelp-form.component.html',
  styleUrls: ['./managehelp.component.scss'],
  animations: [routerTransition()]

})
  export class ManagehelpFormComponent implements OnInit {
    value:any;
    id_helpcate:any;
  
    constructor(
      private service: HelpcategoriesService,
      private route: ActivatedRoute,
      private router: Router,
     ){
      this.value = {
      };
     }
  
    ngOnInit() {
      this.id_helpcate = this.route.snapshot.paramMap.get('id_helpcate');
      if (this.id_helpcate != null) {
        this.service.getHelpcategoriesById(this.id_helpcate).subscribe(res => {
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
      if (this.id_helpcate == null) {
        status = 'create';
        // console.log('cre')
      } else {
        status = 'update';
        // console.log(myform.value)
        params['id'] = this.id_helpcate;
        // console.log('edi')
      }
      console.log(status)
      this.service.setHelpcategories(params, status)
      .subscribe(res => {
        this.router.navigate(['managehelp']);
        console.log(res)
      }, err => console.log(err))
    }
  
  }
