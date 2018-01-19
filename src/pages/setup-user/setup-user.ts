import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CacheService } from '../../services/cache-service';

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
    //console.log(this.userForm.value);
    this.cache.user = this.userForm.value;
    console.log(this.cache.user);
    //this.navCtrl.push(SetupBudgetPage);
  }

}
