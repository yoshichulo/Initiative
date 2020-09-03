import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.page.html',
  styleUrls: [
    './dices.page.scss',
    '../../app.component.scss'
  ],
})
export class DicesPage implements OnInit {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  public roll(maxValue) {
    this.alertCtrl.create({
      subHeader: 'D' + maxValue,
      cssClass: 'dice-alert',
      message: Math.floor(Math.random() * maxValue + 1).toString()
    }).then(alert => alert.present());
  }

  ngOnInit() {
  }

}
