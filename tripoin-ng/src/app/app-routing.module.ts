import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'oauth2', loadChildren: 'app/oauth2/oauth2.module#NbOAuth2Module' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [{
        path: '',
        component: NbLoginComponent,
      },{
        path: 'login',
        component: NbLoginComponent,
      },{
        path: 'register',
        component: NbRegisterComponent,
      },{
        path: 'logout',
        component: NbLogoutComponent,
      },{
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },{
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'pages/404' }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
