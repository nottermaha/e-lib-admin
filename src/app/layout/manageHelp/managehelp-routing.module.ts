import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehelpComponent } from './managehelp.component';
import { ManagehelpFormComponent } from './managehelp-form.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagehelpComponent
    },
    {
        path: 'managehelp-form', 
        component: ManagehelpFormComponent
    },
    {
        path: 'managehelp-form/:id_helpcate', 
        component: ManagehelpFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagehelpRoutingModule {
}
