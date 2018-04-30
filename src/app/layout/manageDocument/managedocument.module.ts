import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagedocumentRoutingModule } from './managedocument-routing.module';
import { ManagedocumentComponent } from './managedocument.component';
import { ManagedocumentFormComponent } from './managedocument-form.component';



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
        ManagedocumentRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        
        // NgForm

    ],
    declarations: [
        ManagedocumentComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        ManagedocumentFormComponent
    ],
    providers: []
})
export class ManagedocumentModule {}
