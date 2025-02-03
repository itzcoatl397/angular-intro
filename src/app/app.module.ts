import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/components/counter.module';
import { AppComponent } from './app.component';
import { HeroModule } from './heroes/components/hero.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
