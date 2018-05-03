import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { StaffService } from '../../../shared/services/staff.service'
import { DepartmentService } from '../../../shared/services/departmemnt.service'
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewUserForm',
  templateUrl: './viewUserForm.component.html',
  animations: [routerTransition()]

})
export class ViewUserFormComponent implements OnInit {
  IdStaff: any;
  username: any;
  password: any;
  firstName: any;
  lastName: any;
  idDepartment: any;
  nameDepartment: any;

  constructor(
    private staffService: StaffService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.IdStaff = this.route.snapshot.paramMap.get('IdStaff');
  }

  ngOnInit() {
    this.getStaffById();
  }

  getDepartment(id) {
    this.departmentService.getDepartmentById(id).subscribe(res => {
      // console.log(res)
      this.idDepartment = res['id']
      this.nameDepartment = res['department_name']
    }, err => console.log(err))
  }

  getStaffById() {
    this.staffService.getStaffById(this.IdStaff).subscribe(res => {
      // console.log(res)
      this.username = res['username']
      this.password = res['password']
      this.firstName = res['f_name']
      this.lastName = res['l_name']
      this.getDepartment(res['department_id']);
    }, err => console.log(err))
  }

}
