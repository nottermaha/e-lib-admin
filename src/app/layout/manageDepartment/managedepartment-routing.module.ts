import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagedepartmentComponent } from './managedepartment.component';
import { ManagedepartmentFormComponent } from './managedepartment-form.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagedepartmentComponent
    },
    {
        path: 'managedepartment-form', 
        component: ManagedepartmentFormComponent
    },
    {
        path: 'managedepartment-form/:id_department',
        component: ManagedepartmentFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagedepartmentRoutingModule {
}
