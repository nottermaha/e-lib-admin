import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageuserComponent } from './manageuser.component';
import { ManageUserFormComponent } from './manageUserForm/manageUser-form.component'
import { ViewUserFormComponent } from './viewUserForm/viewUserForm.component'
const routes: Routes = [
    {
        path: '', 
        component: ManageuserComponent
    },
    {
        path: 'ManageUserForm', 
        component: ManageUserFormComponent
    },
    {
        path: 'ManageUserForm/:IdStaff', 
        component: ManageUserFormComponent
    },
    {
        path: 'ViewUserForm/:IdStaff', 
        component: ViewUserFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageuserRoutingModule {
}
