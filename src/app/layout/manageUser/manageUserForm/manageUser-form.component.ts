import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { StaffService } from '../../../shared/services/staff.service'
import { DepartmentService } from '../../../shared/services/departmemnt.service'
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manageUserForm',
  templateUrl: './manageUser-form.component.html',
  animations: [routerTransition()]

})
export class ManageUserFormComponent implements OnInit {
  IdStaff: any;
  username: any;
  password: any;
  firstName: any;
  lastName: any;
  idDepartment: any;
  departments: any;

  constructor(
    private staffService: StaffService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.IdStaff = this.route.snapshot.paramMap.get('IdStaff');
    this.idDepartment = 0;
  }

  ngOnInit() {
    this.getDepartment();
    if (this.IdStaff != null) {
      this.getStaffById();
    }
  }

  getDepartment() {
    this.departmentService.getDepartment().subscribe(res => {
      // console.log(res)
      this.departments = res
    }, err => console.log(err))
  }

  getStaffById() {
    this.staffService.getStaffById(this.IdStaff).subscribe(res => {
      // console.log(res)
      this.username = res['username']
      this.password = res['password']
      this.firstName = res['f_name']
      this.lastName = res['l_name']
      this.idDepartment = res['department_id']
    }, err => console.log(err))
  }

  onSubmit(myform: NgForm) {
    // console.log(myform.value)
    let params = myform.value;
    let status = '';
    if (this.IdStaff == null) {
      status = 'create';
    }
    else {
      status = 'update';
      params['id'] = this.IdStaff;
    }
    // console.log(params)
    this.staffService.setStaff(params, status).subscribe(res => {
      this.router.navigate(['manageuser']);
      console.log(res)
    }, err => console.log(err))
  }

}
