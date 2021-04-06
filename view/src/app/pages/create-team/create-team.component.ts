import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator, matchingPasswords } from 'src/app/validators/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UserDTO } from 'src/app/model/userDTO';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html'
})
export class CreateTeamComponent {
  public registerForm: FormGroup;
  public settings: Settings;

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, private userService: UserService,
              private alertService: AlertService) {

    this.settings = this.appSettings.settings;

    this.createForm();
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }

  private createForm(): void {
    this.registerForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      email: [null, Validators.compose([Validators.required, emailValidator])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: [null, Validators.compose([Validators.pattern('^[0-9]*$'), Validators.minLength(9)])],
    }, {validator: matchingPasswords('password', 'confirmPassword')});
  }

  public onSubmit(values: Object): void {
    if (this.registerForm.valid) {
      const user = new UserDTO();
      user.firstName = this.registerForm.value.firstName;
      user.lastName = this.registerForm.value.lastName;
      user.email = this.registerForm.value.email;
      user.password = this.registerForm.value.password;
      user.phone = this.registerForm.value.phone;

      this.userService.register(user).subscribe(
        res => {
          this.router.navigate(['/login']);
        },
        err => {
          this.alertService.openError('Algo va mal');
        }
      );
    }
  }

}
