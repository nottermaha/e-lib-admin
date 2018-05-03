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
            { path: 'managecallection/managecallection-form', loadChildren: './manageCallection/managecallection-form.component' },
           
            { path: 'managedepartment', loadChildren: './manageDepartment/managedepartment.module#ManagedepartmentModule' },
            { path: 'managedepartment/managedepartment-form', loadChildren: './manageDepartment/managedepartment-form.component' },
            
            { path: 'managedocument', loadChildren: './manageDocument/managedocument.module#ManagedocumentModule' },
            { path: 'managedocument/managedocument-form', loadChildren: './manageDocument/managedocument-form.component' },
            
            { path: 'managehelp', loadChildren: './manageHelp/managehelp.module#ManagehelpModule' },
            { path: 'managehelp/managehelp-form', loadChildren: './manageHelp/managehelp-form.component' },
           
            { path: 'managetopic', loadChildren: './manageTopic/managetopic.module#ManagetopicModule' },
            { path: 'managetopic/managetopic-form', loadChildren: './manageTopic/managetopic-form.component' },
            
            { path: 'manageuser', loadChildren: './manageUser/manageuser.module#ManageuserModule' },
           
            { path: 'new', loadChildren: './new/new.module#NewModule' },
            { path: 'new/new-form', loadChildren: './new/new-form.component' },

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
