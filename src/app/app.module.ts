import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { DetailSurveyComponent } from './detail-survey/detail-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
    ListSurveyComponent,
    DetailSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
