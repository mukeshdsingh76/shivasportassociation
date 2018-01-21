import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  users: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public restProvider: RestProvider) {
      this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }


  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
