import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },

           
            { path: 'managecallection', loadChildren: './manageCallection/managecallection.module#ManagecallectionModule' },
            { path: 'managedepartment', loadChildren: './manageDepartment/managedepartment.module#ManagedepartmentModule' },
            { path: 'managedocument', loadChildren: './manageDocument/managedocument.module#ManagedocumentModule' },
            { path: 'managehelp', loadChildren: './manageHelp/managehelp.module#ManagehelpModule' },
            { path: 'managetopic', loadChildren: './manageTopic/managetopic.module#ManagetopicModule' },
            { path: 'manageuser', loadChildren: './manageUser/manageuser.module#ManageuserModule' },
            { path: 'new', loadChildren: './new/new.module#NewModule' },
            { path: 'userregister', loadChildren: './userRegister/userregister.module#UserregisterModule' },

            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
