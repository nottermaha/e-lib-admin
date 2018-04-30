import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageuserComponent } from './manageuser.component';
import { ManageuserFormComponent } from './manageuser-form.component';
const routes: Routes = [
    {
        path: '', 
        component: ManageuserComponent
    },
    {
        path: 'manageuser-form', 
        component: ManageuserFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageuserRoutingModule {
}
