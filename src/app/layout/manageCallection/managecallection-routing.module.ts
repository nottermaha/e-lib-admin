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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagecallectionRoutingModule {
}
