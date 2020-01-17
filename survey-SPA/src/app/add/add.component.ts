import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { survey } from '../models/survey.model';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  
  survey: survey = null;

  constructor( 
   	private route: ActivatedRoute,
    private router: Router,
    private SurveyService : SurveyService) {  }

  ngOnInit() {
    this.survey = new survey();
  }

}
