/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  NbCardModule,
  NbLayoutModule,
} from '@nebular/theme';

import {
  NbAuthModule,
  NbOAuth2AuthStrategy,
  NbOAuth2ResponseType,
} from '@nebular/auth';

import { NbOAuth2LoginGoogleComponent } from './login/google/oauth2-login-google.component';
import { NbOAuth2CallbackGoogleComponent } from './callback/google/oauth2-callback-google.component';
import { NbOAuth2LoginComponent } from './login/default/oauth2-login.component';
import { NbOAuth2CallbackComponent } from './callback/default/oauth2-callback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: NbOAuth2LoginComponent,
      },
      {
        path: 'callback',
        component: NbOAuth2CallbackComponent,
      },
      {
        path: 'google',
        children: [
          {
            path: '',
            component: NbOAuth2LoginGoogleComponent,
          },
          {
            path: 'callback',
            component: NbOAuth2CallbackGoogleComponent,
          }
        ]
      }
    ]),

    /* NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '1091118519622-jk4oqajm8mk0v3a24g4hfda9eoebcnh6.apps.googleusercontent.com',
          clientSecret: 'PLmwZ_EsqcCO3EzLimCjzEkn',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            redirectUri: 'http://localhost:4200/oauth2/google/callback',
          },
          redirect: {
            success: 'http://localhost:4200',
          },
        }),
      ],
    }), */

    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: 'angular',
          clientSecret: 'P@ssw0rd123',
          authorize: {
            endpoint: 'http://localhost:8080/login/google',
            responseType: NbOAuth2ResponseType.TOKEN,
            redirectUri: 'http://localhost:4200',
          },
          redirect: {
            success: 'http://localhost:4200',
          },
        }),
      ],
    }),

    NbCardModule,
    NbLayoutModule,
  ],
  declarations: [
    NbOAuth2LoginComponent,
    NbOAuth2CallbackComponent,
    NbOAuth2LoginGoogleComponent,
    NbOAuth2CallbackGoogleComponent
  ],
})
export class NbOAuth2Module {
}