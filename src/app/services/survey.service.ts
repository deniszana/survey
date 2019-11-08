import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/app.settings';
import { survey } from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor( private http:HttpClient) {  }

  const table:string = 'survey';

  retrieveAllSurveys() {
    return this.http.get<survey[]>(`${AppSettings.APP_URL}/${table}/`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteSurvey(id){
    return this.http.delete(`${AppSettings.APP_URL}/${table}/${id}`);
  }

  retrieveSurvey(id){
    return this.http.get<survey>(`${AppSettings.APP_URL}/${table}/${id}`);
  }

  updateSurvey(id, survey){
    return this.http.put(
          `${AppSettings.APP_URL}/${table}/${id}`
                , survey);
  }

  createSurvey(username, Survey){
    return this.http.post(
              `${AppSettings.APP_URL}/${table}`
                , survey);
  } 
}
