import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'initiative',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/initiative/initiative.module').then( m => m.InitiativePageModule)
          },
        ]
      },
      {
        path: 'spellscontrol',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/spellscontrol/spellscontrol.module').then( m => m.SpellscontrolPageModule)
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
