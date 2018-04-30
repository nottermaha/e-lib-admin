import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagehelpRoutingModule } from './managehelp-routing.module';
import { ManagehelpComponent } from './managehelp.component';
import { ManagehelpFormComponent } from './managehelp-form.component';



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
        ManagehelpRoutingModule,
        StatModule,
        // BrowserModule,
        HttpClientModule,
        
        // NgForm

    ],
    declarations: [
        ManagehelpComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        ManagehelpFormComponent
    ],
    providers: []
})
export class ManagehelpModule {}
