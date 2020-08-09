import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {ColorPickerModule} from "ngx-color-picker";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public entityArray = [
      /*
        {'initiative': 15, 'name': 'Slime'},
        {'initiative': 12, 'name': 'Archer thief'},
        {'initiative': 4, 'name': 'Vampire'}
       */
      ];

  timeoutHandler: number;
  color: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  public editEntity(currentEntity, index) {
    this.alertCtrl.create({
      subHeader: 'Edit entity',
      message: 'Current: "' + currentEntity.name + '"',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: currentEntity.name
        },
        {
          name: 'initiative',
          placeholder: 'Initiative',
          type: 'number',
          value: currentEntity.initiative
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: data => {
            if (data.name.length != 0 && data.initiative > 0) {
              this.entityArray[index] = {'initiative': data.initiative, 'name': data.name};
              this.entityArray.sort((a,b) => b.initiative - a.initiative);
            }
          }
        }
      ]
    }).then(alert => alert.present());
  };

  public addEntity() {
    let index = this.entityArray.length;
    this.alertCtrl.create({
      subHeader: 'Add new entity',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'initiative',
          placeholder: 'Initiative',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: data => {
            if (data.name.length != 0 && data.initiative > 0) {
              this.entityArray[index] = {'initiative': data.initiative, 'name': data.name};
              this.entityArray.sort((a,b) => b.initiative - a.initiative);
            }
          }
        }
      ]
    }).then(alert => alert.present());
  }

  public onColorChange(event){
    console.log(event)
  }

  public roll(maxValue) {
    this.alertCtrl.create({
      subHeader: 'D' + maxValue,
      cssClass: 'dice-alert',
      message: Math.floor(Math.random() * maxValue + 1).toString()
    }).then(alert => alert.present());
  }

  public deleteEntity(index) {
    this.alertCtrl.create({
      message: 'Do you want to delete this entity?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: () => {
            this.entityArray.splice(index, 1);
            this.entityArray.sort((a,b) => b.initiative - a.initiative);
          }
        }
      ]
    }).then(alert => alert.present());
  }


}
