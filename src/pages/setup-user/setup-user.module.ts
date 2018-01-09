import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetupUserPage } from './setup-user';

@NgModule({
  declarations: [
    SetupUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SetupUserPage),
  ],
})
export class SetupUserPageModule {}
