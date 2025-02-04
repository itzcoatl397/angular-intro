import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { DbzModule } from './dbz/dbz.module';
import { AppComponent } from './app.component';
import { HeroModule } from './heroes/components/hero.module';
import {MainPageComponent} from './dbz/pages/main-page.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,

    HeroModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
