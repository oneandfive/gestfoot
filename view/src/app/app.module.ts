import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { AppSettings } from './app.settings';

import { ErrorComponent } from './pages/errors/error/error.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { TeamChooseModule } from './pages/team-choose/team-choose.module';

import { UserService } from './services/user/user.service';
import { TeamService } from './services/team/team.service';
import { UserTeamService } from './services/user-team/user-team.service';

import { AlertComponent } from './shared/alert/alert.component';
import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './pages/search/search.component';
import { FullScreenComponent } from './pages/components/fullscreen/fullscreen.component';
import { MessagesComponent } from './pages/components/messages/messages.component';
import { UserMenuComponent } from './pages/components/user-menu/user-menu.component';
import { PipesModule } from './pages/components/pipes/pipes.module';
import { SidenavComponent } from './pages/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './pages/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './pages/components/menu/horizontal-menu/horizontal-menu.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NotFoundComponent,
    AlertComponent,
    PagesComponent,
    SearchComponent,
    FullScreenComponent,
    MessagesComponent,
    UserMenuComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    TeamChooseModule,
    RegisterModule,
    PipesModule,
    PerfectScrollbarModule
  ],
  providers: [
    AppSettings,
    UserService,
    TeamService,
    UserTeamService,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
