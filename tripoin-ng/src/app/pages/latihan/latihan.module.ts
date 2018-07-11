import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { LATIHAN_COMPONENTS, LatihanRoutingModule } from './latihan-routing.module';
import { FormService } from './form-handling/service/form.service';
import { LatihanHttpBaseService } from './http-client/service/http-base.service';


@NgModule({
  imports: [
    LatihanRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...LATIHAN_COMPONENTS,
  ],
  providers: [
    FormService,
    LatihanHttpBaseService
  ]
})
export class LatihanModule {
}
