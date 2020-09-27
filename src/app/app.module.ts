  /**
   * Date: 8/22/2020
   * Description: app module component class
   * Author: Auto Generated
  */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LocationComponent } from 'src/app/components/home/location/location.component';
import { GalleryComponent } from 'src/app/components/home/gallery/gallery.component';
import { CategoryComponent } from 'src/app/components/home/category/category.component';
import { DetailComponent } from './components/detail/detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    HomeComponent,
    LocationComponent,
    GalleryComponent,
    CategoryComponent,
    DetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
