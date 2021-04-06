import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UserTeamService } from '../../services/user-team/user-team.service';
import { UserDTO } from 'src/app/model/userDTO';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'gestFoot-team-choose',
  styleUrls: ['./team-choose.component.scss'],
  templateUrl: './team-choose.component.html'
})
export class TeamChooseComponent {
  public settings: Settings;

  teamSelected: string;
  teamOptions:Array<any> = [];

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router,
    private userTeamService: UserTeamService, private alertService: AlertService) {
    this.settings = this.appSettings.settings;

    this.searchUserTeams();

  }

  private searchUserTeams(): void {
    this.userTeamService.findUserTeams(1).subscribe(
      res => {
        if (res != null && res.length > 0) {
          res.forEach(element => {
            this.teamOptions.push(
              {value: element, viewValue: element.TEAM_NAME}
            );
          });
        }
        // this.router.navigate(['/team-choose']);
      },
      err => {
        this.alertService.openError('Algo va mal');
      }
    );
  }

  public onSubmit(values: Object): void {
      const user: UserDTO = new UserDTO();
      user.email = this.teamSelected;

      // this.loginService.findUserLogin(user).subscribe(
      //   res => {
      //     this.router.navigate(['/team-choose']);
      //   },
      //   err => {
      //     this.alertService.openError('Algo va mal');
      //   }
      // );
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false;
  }
}
