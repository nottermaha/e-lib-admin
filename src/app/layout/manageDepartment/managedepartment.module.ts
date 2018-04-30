import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagedepartmentRoutingModule } from './managedepartment-routing.module';
import { ManagedepartmentComponent } from './managedepartment.component';
import { ManagedepartmentFormComponent } from './managedepartment-form.component';



import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
// import { ConfigService } from '../../shared/services/config.service'
// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManagedepartmentRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        
        // NgForm

    ],
    declarations: [
        ManagedepartmentComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        ManagedepartmentFormComponent
    ],
    providers: []
})
export class ManagedepartmentModule {}
