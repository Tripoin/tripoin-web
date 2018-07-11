import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LatihanComponent } from './latihan.component';
import { LatihanComponentComponent } from './component/latihan-component.component';
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { EmailComponent } from './form-handling/email/email.component';
import { GenderComponent } from './form-handling/gender/gender.component';
import { FormResultComponent } from './form-handling/result/form-result.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { UploadFileComponent } from './http-client/upload/upload-file.component';

const routes: Routes = [{
  path: '',
  component: LatihanComponent,
  children: [{
    path: 'component',
    component: LatihanComponentComponent
  },{
    path: 'form-handling',
    component: FormHandlingComponent
  },{
    path: 'form-result',
    component: FormResultComponent
  },{
    path: 'http-client',
    component: HttpClientComponent
  },{
    path: 'upload-file',
    component: UploadFileComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatihanRoutingModule {
}

export const LATIHAN_COMPONENTS = [
  LatihanComponent,
  LatihanComponentComponent,
  FormHandlingComponent,
  EmailComponent,
  GenderComponent,
  FormResultComponent,
  HttpClientComponent,
  UploadFileComponent
];