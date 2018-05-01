import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { CacheService } from '../services/cache-service';
import { SetupUserPage } from '../pages/setup-user/setup-user';
import { SetupExpensesPage } from '../pages/setup-expenses/setup-expenses';
	
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Step1 } from '../pages/transition-pages/step-1/step-1';
import { Step2 } from '../pages/transition-pages/step-2/step-2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    SetupUserPage,
    SetupExpensesPage,
    Step1,
    Step2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    SetupUserPage,
    SetupExpensesPage,
    Step1,
    Step2
  ],
  providers: [
    StatusBar,
    CacheService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
