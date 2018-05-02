import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehelpComponent } from './managehelp.component';
import { ManagehelpFormComponent } from './managehelp-form.component';
import { ManageHelpContent } from './manageHelpContent/manageHelpContent.component';
import { ManageHelpContentFormComponent } from './manageHelpContentForm/manageHelpContent-form.component';

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
    {
        path: 'manageHelpContent/:IdHelpCategories', 
        component: ManageHelpContent
    },
    {
        path: 'manageHelpContentForm/:IdHelpCategories', 
        component: ManageHelpContentFormComponent
    },
    {
        path: 'manageHelpContentForm/:IdHelpCategories/:IdHelpContent', 
        component: ManageHelpContentFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagehelpRoutingModule {
}
