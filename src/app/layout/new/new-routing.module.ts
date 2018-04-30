import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new.component';
import { NewFormComponent } from './new-form.component';
const routes: Routes = [
    {
        path: '', 
        component: NewComponent
    },
    {
        path: 'new-form', 
        component: NewFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewRoutingModule {
}
