import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageuserComponent } from './manageuser.component';
import { ManageUserFormComponent } from './manageUserForm/manageUser-form.component'
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageuserRoutingModule {
}
