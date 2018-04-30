import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ManagecallectionRoutingModule } from './managecallection-routing.module';
import { ManagecallectionComponent } from './managecallection.component';

import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
// import { ConfigService } from '../../shared/services/config.service'
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManagecallectionRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        // NgForm

    ],
    declarations: [
        ManagecallectionComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        // AppComponent
    ],
    providers: [],
    bootstrap: [ManagecallectionComponent]
})
export class ManagecallectionModule {}
