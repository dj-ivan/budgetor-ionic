import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CacheService } from '../../services/cache.service';
import { User } from '../../types/user-model';
import {FormControl, Validators} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-setup-user',
  templateUrl: 'setup-user.html',
})
export class SetupUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cache: CacheService) {
    this.user = new User();
  }
  public user: User;

  emailValidation = new FormControl('', [Validators.required, Validators.email]);
  firstNameValidation = new FormControl('', [Validators.required, Validators.minLength(1)]);
  lastNameValidation = new FormControl('', [Validators.required, Validators.minLength(1)]);
  userNameValidation = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
  incomeValidation = new FormControl('', [Validators.required, Validators.min(0)]);

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupUserPage');
  }


  public completeUserSetUp(firstName: string, lastName: string, emailAddress: string, userName: string, amount: Number) {
    // add income to memory 
    // this.db.database.ref('users/' + 1).set({
    //   username: 'ivan',
    //   email: 'test',
    //   income : amount
    // });

    // navigate to step 2 of the budgeting processz
    //this.router.navigate['/budget-setup'];
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.email = emailAddress;
    this.user.userName = userName;
    this.user.monthlyIncome = +amount;
    this.cache.user = this.user;
  }

  getEmailErrorMessage() {
    return this.emailValidation.hasError('required') ? 'You must enter a value' :
        this.emailValidation.hasError('email') ? 'Not a valid email' :
            '';
  }
  getFirstNameErrorMessage() {
    return this.firstNameValidation.hasError('required') ? 'You must enter a value' :
        '';
  }
  getLastNameErrorMessage() {
    return this.lastNameValidation.hasError('required') ? 'You must enter a value' :
        '';
  }
  getUserNameErrorMessage() {
    return this.userNameValidation.hasError('required') ? 'You must enter a value' :
        this.userNameValidation.hasError('minlength') ? 'User Name must be at least 5 characters' :
        this.userNameValidation.hasError('maxlength') ? 'User Name must not exceed 15 characters' :
            '';
  }
  getIncomeErrorMessage() {
    return this.incomeValidation.hasError('required') ? 'You must enter a value' :
        this.incomeValidation.hasError('min') ? 'Income must be greater than or equal to 0' :
            '';
  }

}
