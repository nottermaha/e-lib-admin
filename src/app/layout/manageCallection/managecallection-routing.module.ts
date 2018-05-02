import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagecallectionComponent } from './managecallection.component';
import { ManagecallectionFormComponent } from './managecallection-form.component';
const routes: Routes = [
    {
        path: '', 
        component: ManagecallectionComponent
    },
    {
        path: 'managecallection-form', 
        component: ManagecallectionFormComponent
    },
    {
        path: 'managecallection-form/:id_collection', 
        component: ManagecallectionFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagecallectionRoutingModule {
}
