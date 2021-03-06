import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  Details:any =[
    {
        "Longitude" : "-087.687320",
        "Zipcode" : "60163",
        "ZipClass" : "STANDARD",
        "County" : "COOK",
        "City" : "BERKELEY",
        "State" : "IL",
        "Latitude" : "+41.811929"
    },
    {
        "Longitude" : "-122.296730",
        "Zipcode" : "94701",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.860576"
    },
    {
        "Longitude" : "-122.287130",
        "Zipcode" : "94702",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.864425"
    },
    {
        "Longitude" : "-122.275730",
        "Zipcode" : "94703",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.865725"
    },
    {
        "Longitude" : "-122.256729",
        "Zipcode" : "94704",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.866975"
    },
    {
        "Longitude" : "-122.242029",
        "Zipcode" : "94705",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.859830"
    },
    {
        "Longitude" : "-122.276080",
        "Zipcode" : "94707",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.892675"
    },
    {
        "Longitude" : "-122.260429",
        "Zipcode" : "94708",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.891825"
    },
    {
        "Longitude" : "-122.265530",
        "Zipcode" : "94709",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.879825"
    },
    {
        "Longitude" : "-122.302730",
        "Zipcode" : "94710",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.873366"
    },
    {
        "Longitude" : "-121.921498",
        "Zipcode" : "94712",
        "ZipClass" : "STANDARD",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.680181"
    },
    {
        "Longitude" : "-122.253582",
        "Zipcode" : "94720",
        "ZipClass" : "UNIQUE",
        "County" : "ALAMEDA",
        "City" : "BERKELEY",
        "State" : "CA",
        "Latitude" : "+37.866825"
    }
];
selectedCounty:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  selectCounty(County){
    console.log(County)
  }

}
