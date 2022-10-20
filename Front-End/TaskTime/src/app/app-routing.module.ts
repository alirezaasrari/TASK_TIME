import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminRestandworkPanelComponent } from './components/admin-restandwork-panel/admin-restandwork-panel.component';
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
  {
    path: 'admin-restandwork-panel',
    component: AdminRestandworkPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
