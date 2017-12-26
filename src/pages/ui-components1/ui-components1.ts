import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the UiComponents1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ui-components1',
  templateUrl: 'ui-components1.html',
})
export class UiComponents1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiComponents1Page');
  }
  showPromptAlert(){
    this.alertCtrl.create({
      inputs:[
        {
          name:'',

        }
      ]
    });
  }

}
