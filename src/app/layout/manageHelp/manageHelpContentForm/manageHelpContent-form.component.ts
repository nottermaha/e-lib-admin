import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { HelpcategoriesService } from '../../../shared/services/helpcategories.service'
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manageHelpContentForm',
  templateUrl: './manageHelpContent-form.component.html',
  animations: [routerTransition()]

})
export class ManageHelpContentFormComponent implements OnInit {
  value: any;
  id_helpcate: any;
  IdHelpCategories: any;
  IdHelpContent: any;
  content: any;

  constructor(
    private service: HelpcategoriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.IdHelpCategories = this.route.snapshot.paramMap.get('IdHelpCategories');
    this.IdHelpContent = this.route.snapshot.paramMap.get('IdHelpContent');
  }

  ngOnInit() {
    if (this.IdHelpContent != null) {
      this.service.getHelpContentById(this.IdHelpContent).subscribe(res => {
        console.log(res)
        this.content = res['help_content']
      }, err => console.log(err))
    }
   }

  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let params = myform.value;
    let status = '';
    if (this.IdHelpContent == null) {
      status = 'create';
      params['help_id'] = this.IdHelpCategories;
    }
    else {
      status = 'update';
      params['id'] = this.IdHelpContent;
    }
    console.log(params)
    this.service.setHelpContent(params, status).subscribe(res => {
      this.router.navigate(['managehelp/manageHelpContent', this.IdHelpCategories]);
      console.log(res)
    }, err => console.log(err))
  }

}
