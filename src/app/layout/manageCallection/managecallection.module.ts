import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { ManagecallectionRoutingModule } from './managecallection-routing.module';
import { ManagecallectionComponent } from './managecallection.component';
import { ManagecallectionFormComponent } from './managecallection-form.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
// import { ConfigService } from '../../shared/services/config.service'



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManagecallectionRoutingModule,
        StatModule,
        // NgForm

    ],
    declarations: [
        ManagecallectionComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        // AppComponent
        ManagecallectionFormComponent
    ],
    providers: [],
    bootstrap: [ManagecallectionComponent]
})
export class ManagecallectionModule {}
