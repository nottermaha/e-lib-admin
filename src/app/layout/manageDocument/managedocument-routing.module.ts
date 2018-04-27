import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagedocumentComponent } from './managedocument.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagedocumentComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagedocumentRoutingModule {
}
