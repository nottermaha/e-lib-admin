import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagetopicComponent } from './managetopic.component';
import { ManagetopicFormComponent } from './managetopic-form.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagetopicComponent
    },
    {
        path: 'managetopic-form', 
        component: ManagetopicFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagetopicRoutingModule {
}
