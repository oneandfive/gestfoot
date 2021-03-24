import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;

  constructor(public appSettings: AppSettings, private translate: TranslateService) {
    translate.setDefaultLang('es');

    this.settings = this.appSettings.settings;
  }

  ngOnInit() { }
}
