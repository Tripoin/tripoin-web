
import { Component, OnDestroy } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'nb-oauth2-callback-google',
  template: '',
})
export class NbOAuth2CallbackGoogleComponent implements OnDestroy {

  alive = true;

  constructor(private authService: NbAuthService, private router: Router) {
    this.authService.authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
          console.log(authResult);
        if (authResult.isSuccess() && authResult.getRedirect()) {
          this.router.navigate(["/pages/dashboard"]);
        }
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}