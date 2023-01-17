import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WindowsComponent } from "./body/windows/windows.component";
import { MacComponent } from "./body/mac/mac.component";

const routes: Routes = [
  { path: 'windows', component: WindowsComponent },
  { path: 'mac', component: MacComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
