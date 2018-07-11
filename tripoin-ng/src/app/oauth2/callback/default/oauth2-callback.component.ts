
import { Component, OnDestroy } from '@angular/core';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'nb-oauth2-callback',
  template: '',
})
export class NbOAuth2CallbackComponent implements OnDestroy {

  alive = true;

  constructor(private authService: NbAuthService, private router: Router) {
    this.authService.authenticate('default')
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