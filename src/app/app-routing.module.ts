import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { DetailSurveyComponent } from './detail-survey/detail-survey.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path:"listsurvey" , component: ListSurveyComponent },
  { path:"edit/:id" , component: DetailSurveyComponent },
  { path:"add" , component: AddComponent }, 
  { path:"" , redirectTo: "listsurvey" , pathMatch: "full" },
];

//  { path:"**" , component: Notfound404Component }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
