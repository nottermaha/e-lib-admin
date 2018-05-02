import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DepartmentService } from '../../shared/services/departmemnt.service'
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'zero-config',
  templateUrl: './managedepartment-form.component.html',
  styleUrls: ['./managedepartment.component.scss'],
  animations: [routerTransition()]

})
export class ManagedepartmentFormComponent implements OnInit {

  value:any;
  id_department:any;

  constructor(
    private service: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
   ){

    this.value = {
      
    };

   }

  ngOnInit() {
    this.id_department = this.route.snapshot.paramMap.get('id_department');
    if (this.id_department != null) {
      this.service.getDepartmentById(this.id_department).subscribe(res => {
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
    if (this.id_department == null) {
      status = 'create';
      // console.log('cre')
    } else {
      status = 'update';
      // console.log(myform.value)
      params['id'] = this.id_department;
      // console.log('edi')
    }
    console.log(status)
    this.service.setDepartment(params, status)
    .subscribe(res => {
      this.router.navigate(['managedepartment']);
      console.log(res)
    }, err => console.log(err))
  }

}
