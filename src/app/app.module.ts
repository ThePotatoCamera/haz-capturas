import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { MacComponent } from './body/mac/mac.component';
import { IosComponent } from './body/ios/ios.component';
import { LinuxComponent } from './body/linux/linux.component';
import { AndroidComponent } from './body/android/android.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MacComponent,
    IosComponent,
    LinuxComponent,
    AndroidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
