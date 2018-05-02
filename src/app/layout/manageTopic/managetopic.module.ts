import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagetopicRoutingModule } from './managetopic-routing.module';
import { ManagetopicComponent } from './managetopic.component';
import { ManagetopicFormComponent } from './managetopic-form.component';



import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { TopicService } from '../../shared/services/topic.service'
// import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManagetopicRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        
        // NgForm

    ],
    declarations: [
        ManagetopicComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        ManagetopicFormComponent
    ],
    providers: [TopicService]
})
export class ManagetopicModule {}
