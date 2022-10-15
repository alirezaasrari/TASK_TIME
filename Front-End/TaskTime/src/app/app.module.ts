import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './components/dialog-ask-mode/start/start.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAskModeComponent } from './components/dialog-ask-mode/dialog-ask-mode.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CurrentWorkDayComponent } from './components/current-work-day/current-work-day.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DialogLeavingWorkComponent } from './components/current-work-day/dialog-leaving-work/dialog-leaving-work.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DialogAskModeComponent,
    CurrentWorkDayComponent,
    DialogLeavingWorkComponent,
    AdminPanelComponent,
  ],
  imports: [
    MatSnackBarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatIconModule,
    NgxStarRatingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [DialogAskModeComponent]
})
export class AppModule { }
