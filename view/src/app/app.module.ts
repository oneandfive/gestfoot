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

import { UserService } from 'src/app/services/user.service';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NotFoundComponent,
    AlertComponent
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
    RegisterModule,
  ],
  providers: [
    AppSettings,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
