import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpellscontrolPageRoutingModule } from './spellscontrol-routing.module';

import { SpellscontrolPage } from './spellscontrol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpellscontrolPageRoutingModule
  ],
  declarations: [SpellscontrolPage]
})
export class SpellscontrolPageModule {}
