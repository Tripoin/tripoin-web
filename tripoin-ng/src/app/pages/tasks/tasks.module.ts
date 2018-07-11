import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TasksRoutingModule, routedComponents } from './tasks-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from '../dashboard/dashboard.module';
import { BaseModalComponent } from './form-handling/validation/modal/base-modal.component';
import { ResultStateService } from './form-handling/change-state/services/state.service';
import { HttpBaseService } from './rest-backend/services/http-base.service';
import { HttpInterceptorService } from './rest-backend/services/http-interceptor.service';

@NgModule({
  imports: [
    ThemeModule,
    TasksRoutingModule,
    DashboardModule
  ],
  declarations: [
    ...routedComponents
  ],
  entryComponents: [
    BaseModalComponent
  ],
  bootstrap: [],
  providers: [
    ResultStateService,
    HttpBaseService,
    HttpInterceptorService
  ],
})
export class TasksModule { }
