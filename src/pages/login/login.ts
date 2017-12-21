import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:any;
  password:any;

  errorMessage:any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController,
  private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.errorMessage='';
    let valid = true;
    let alert;
    console.log("username : "+this.username)
    console.log("password : "+this.password)
    if(this.username==undefined || this.username==""){
      valid=false;
      this.pushMessage('Please enter Username');
    }
    if(this.password==undefined || this.password==""){
      valid=false;
      this.pushMessage('Please enter Password');
           
    }

    if(valid){
      if(this.username.trim()== "admin" && this.password.trim()=="123456"){
        this.navCtrl.push('DetailsPage');
        this.presentToast();
      }else{
      console.log(this.errorMessage);
        alert = this.alertCtrl.create({
        title:"Login",
        message:"Invalid Username / Password.<br>Please enter valid credentials.",
        buttons: ['Dismiss']
      });
      alert.present();
    }
    }else{
      alert = this.alertCtrl.create({
        title:"Login",
        message:this.errorMessage,
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'LoggedIn successfully',
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

  pushMessage(msg){
    this.errorMessage+=msg+"<br>";
  }

}
