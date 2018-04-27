import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagetopicComponent } from './managetopic.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagetopicComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagetopicRoutingModule {
}
