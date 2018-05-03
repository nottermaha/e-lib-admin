import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManageuserRoutingModule } from './manageuser-routing.module';
import { ManageuserComponent } from './manageuser.component';
import { ManageUserFormComponent } from './manageUserForm/manageUser-form.component'
import { ViewUserFormComponent } from './viewUserForm/viewUserForm.component'

import { StaffService } from '../../shared/services/staff.service'
import { DepartmentService } from '../../shared/services/departmemnt.service'

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
        ManageuserRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        
        // NgForm

    ],
    declarations: [
        ManageuserComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        ManageUserFormComponent,
        ViewUserFormComponent
    ],
    providers: [
        StaffService,
        DepartmentService
    ]
})
export class ManageuserModule {}
