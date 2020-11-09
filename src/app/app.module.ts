import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjayComponent } from './ajay/ajay.component';
import { AjdirectiveDirective } from './ajdirective.directive';
import { AjpipePipe } from './ajpipe.pipe';
import { OneComponent } from './ajay/one/one.component';
import { TwoComponent } from './ajay/two/two.component';
import { ThreeComponent } from './ajay/three/three.component';
import { FourComponent } from './ajay/four/four.component';
import { FiveComponent } from './ajay/five/five.component';

@NgModule({
  declarations: [
    AppComponent,
    AjayComponent,
    AjdirectiveDirective,
    AjpipePipe,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
