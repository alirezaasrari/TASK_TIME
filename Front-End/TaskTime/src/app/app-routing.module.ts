import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CurrentWorkDayComponent } from './components/current-work-day/current-work-day.component';
import { StartComponent } from './components/dialog-ask-mode/start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  {
    path: 'adminpanel',
    component: AdminPanelComponent,
  },
  { path: 'current-day/:id', component: CurrentWorkDayComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
