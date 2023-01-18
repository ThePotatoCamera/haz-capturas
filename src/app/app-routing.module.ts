import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WindowsComponent } from "./body/windows/windows.component";
import { MacComponent } from "./body/mac/mac.component";
import { LinuxComponent } from "./body/linux/linux.component";
import { AndroidComponent } from "./body/android/android.component";
import { IosComponent } from "./body/ios/ios.component";

const routes: Routes = [
  { path: 'windows', component: WindowsComponent },
  { path: 'mac', component: MacComponent },
  { path: 'linux', component: LinuxComponent },
  { path: 'android', component: AndroidComponent },
  { path: 'ios', component: IosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
