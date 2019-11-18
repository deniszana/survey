import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { survey } from '../models/survey.model';
import { response } from '../models/response.model';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-detail-survey',
  templateUrl: './detail-survey.component.html',
  styleUrls: ['./detail-survey.component.scss']
})
export class DetailSurveyComponent implements OnInit {

  survey: survey = null;

  constructor( 
   	private route: ActivatedRoute,
    private router: Router,
    private SurveyService : SurveyService) {  }

  ngOnInit() {

    let id = +this.route.snapshot.params['id'];
    console.log(id);
		this.SurveyService.getSurvey(id)
			.subscribe(response => {
        this.survey = (response.data as survey[])[0];
        console.log(this.survey)
				// this.titleService.setTitle(`Editer ${pokemon.name}`);
			});
  }

}
