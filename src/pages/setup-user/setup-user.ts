import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CacheService } from '../../services/cache-service';
import { Step2 } from '../transition-pages/step-2/step-2';

@Component({
  selector: 'page-setup-user',
  templateUrl: 'setup-user.html'
})
export class SetupUserPage {
  public userForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public cache: CacheService) {
    this.userForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: [''],
      // userName: [''],
      // email: [''],
      // password: [''],
      monthlyIncome: ['', Validators.required]
    });
  }

  public submitForm() {
    this.cache.income = this.userForm.value;
    this.navCtrl.push(Step2);
  }

}
