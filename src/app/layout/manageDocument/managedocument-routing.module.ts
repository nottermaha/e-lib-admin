import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagedocumentComponent } from './managedocument.component';
import { ManagedocumentFormComponent } from './managedocument-form.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagedocumentComponent
    },
    {
        path: 'managedocument-form', 
        component: ManagedocumentFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagedocumentRoutingModule {
}
