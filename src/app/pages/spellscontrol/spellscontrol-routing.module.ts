import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpellscontrolPage } from './spellscontrol.page';

const routes: Routes = [
  {
    path: '',
    component: SpellscontrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellscontrolPageRoutingModule {}
