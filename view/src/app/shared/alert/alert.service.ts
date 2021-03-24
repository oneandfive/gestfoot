import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarRef,
        MatSnackBarVerticalPosition} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarAutoHide = '3000';

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  public openSuccess(message, duration = 50000) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarConfig.panelClass = 'green-snackbar';

    this.zone.run(() => {
      this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
    });
  }

  public openAlert(message, duration = 50000) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarConfig.panelClass = 'yellow-snackbar';

    this.zone.run(() => {
      this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
    });
  }

  public openError(message, duration = 50000) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarConfig.panelClass = 'red-snackbar';

    this.zone.run(() => {
      this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
    });
  }
}
