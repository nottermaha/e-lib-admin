import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagedepartmentComponent } from './managedepartment.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagedepartmentComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagedepartmentRoutingModule {
}
