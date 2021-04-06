import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { emailValidator } from 'src/app/validators/app-validators';
import { LoginService } from './login.service';
import { UserDTO } from 'src/app/model/userDTO';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'gestFoot-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public settings: Settings;

  loginForm: FormGroup;
  user: FormControl;
  password: FormControl;
  rememberMe: boolean;

  public hide =  true;

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, private translate: TranslateService,
    private loginService: LoginService, private alertService: AlertService) {
    this.settings = this.appSettings.settings;

    this.createControls();
    this.createForm();
  }

  private createControls(): void {
    this.user = new FormControl(null, Validators.compose([Validators.required, emailValidator]));
    this.password = new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]));
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      user: this.user,
      password: this.password,
      rememberMe: false
    });
  }

  public onSubmit(values: Object): void {
    if (this.loginForm.valid) {
      const user: UserDTO = new UserDTO();
      user.email = this.loginForm.value.user;
      user.password = this.loginForm.value.password;

      this.loginService.findUserLogin(user).subscribe(
        res => {
          this.router.navigate(['/team-choose']);
        },
        err => {
          this.alertService.openError('Algo va mal');
        }
      );
    }
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
