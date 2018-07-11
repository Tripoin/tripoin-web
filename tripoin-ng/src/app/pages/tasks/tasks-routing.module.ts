import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { TaskLoopingComponent } from './component/looping/task-looping.component';
import { TaskSelectorComponent } from './component/selector/task-selector.component';
import { TaskConditionalComponent } from './component/conditional/task-conditional.component';
import { TaskInterpolationComponent } from './component/interpolation/task-interpolation.component';
import { TaskComponentComponent } from './component/task/task-component.component';
import { TaskEventHandlingComponent } from './form-handling/event-handling/task-event-handling.component';
import { TaskValidationComponent } from './form-handling/validation/task-validation.component';
import { TaskChangeStateComponent } from './form-handling/change-state/task-change-state.component';
import { BaseModalComponent } from './form-handling/validation/modal/base-modal.component';
import { NextStateComponent } from './form-handling/change-state/pages/result-state.component';
import { TaskHttpRequestComponent } from './rest-backend/http-request/http-request.component';
import { TaskUploadFileComponent } from './rest-backend/uploading-file/upload-file.component';

const routes: Routes = [{
  path: '',
  component: TasksComponent,
  children: [{
    path: 'task-selector',
    component: TaskSelectorComponent,
  },{
    path: 'task-interpolation',
    component: TaskInterpolationComponent,
  },{
    path: 'task-looping',
    component: TaskLoopingComponent,
  },{
    path: 'task-conditional',
    component: TaskConditionalComponent,
  },{
    path: 'task-component',
    component: TaskComponentComponent,
  },{
    path: 'task-event-handling',
    component: TaskEventHandlingComponent,
  },{
    path: 'task-validation',
    component: TaskValidationComponent,
  },{
    path: 'task-change-state',
    component: TasksComponent,
    children: [{
      path: '',
      component: TaskChangeStateComponent
    },{
      path: 'result-state',
      component: NextStateComponent
    }]
  },{
    path: 'task-http-client',
    component: TaskHttpRequestComponent,
  },{
    path: 'task-upload-file',
    component: TaskUploadFileComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class TasksRoutingModule {

}

export const routedComponents = [
  TasksComponent,
  TaskSelectorComponent,
  TaskInterpolationComponent,
  TaskLoopingComponent,
  TaskConditionalComponent,
  TaskComponentComponent,
  TaskEventHandlingComponent,
  TaskValidationComponent,
  TaskChangeStateComponent,
  TaskHttpRequestComponent,
  TaskUploadFileComponent,
  NextStateComponent,
  BaseModalComponent
];
