import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehelpComponent } from './managehelp.component';

const routes: Routes = [
    {
        path: '', 
        component: ManagehelpComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagehelpRoutingModule {
}
