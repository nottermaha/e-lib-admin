import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManagehelpRoutingModule } from './managehelp-routing.module';
import { ManagehelpComponent } from './managehelp.component';
import { ManagehelpFormComponent } from './managehelp-form.component';
import { ManageHelpContent } from './manageHelpContent/manageHelpContent.component';
import { ManageHelpContentFormComponent } from './manageHelpContentForm/manageHelpContent-form.component';



import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { HelpcategoriesService } from '../../shared/services/helpcategories.service'
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
        ManagehelpFormComponent,
        ManageHelpContent,
        ManageHelpContentFormComponent
    ],
    providers: [HelpcategoriesService]
})
export class ManagehelpModule {}
