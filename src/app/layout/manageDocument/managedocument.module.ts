import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagedocumentRoutingModule } from './managedocument-routing.module';
import { ManagedocumentComponent } from './managedocument.component';
import { ManagedocumentFormComponent } from './managedocument-form.component';

// Import your library
import { ArchwizardModule } from 'angular-archwizard';

import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { TopicService } from '../../shared/services/topic.service'
import { CountryService } from '../../shared/services/country.service'
// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { PageHeaderModule } from '../../shared';
@NgModule({
    imports: [
        ArchwizardModule,
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
        ManagedocumentFormComponent,

    ],
    providers: [TopicService,CountryService]
})
export class ManagedocumentModule {}
