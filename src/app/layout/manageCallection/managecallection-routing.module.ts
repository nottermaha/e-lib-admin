import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagecallectionComponent } from './managecallection.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagecallectionComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagecallectionRoutingModule {
}
