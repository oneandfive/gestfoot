import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { TeamDTO } from 'src/app/model/teamDTO';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html'
})
export class SearchTeamComponent {
  public searchTeamForm: FormGroup;
  public settings: Settings;

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, private teamService: TeamService,
              private alertService: AlertService) {

    this.settings = this.appSettings.settings;

    this.createForm();
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }

  private createForm(): void {
    this.searchTeamForm = this.fb.group({
      name: [null],
      email: [null]
    });
  }

  public onSubmit(values: Object): void {
    if (this.searchTeamForm.valid) {
      const team = new TeamDTO();
      team.name = this.searchTeamForm.value.name;
      team.shortName = this.searchTeamForm.value.name;
      team.email = this.searchTeamForm.value.email;

      this.teamService.search(team).subscribe(
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
