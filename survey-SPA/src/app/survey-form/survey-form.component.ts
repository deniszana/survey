import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
import { survey } from '../models/survey.model';


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {
  @Input() survey: survey; // propriété d'entrée du composant
  isAddForm: boolean;
  

  constructor(private SurveyService: SurveyService,
		private router: Router) { }

  ngOnInit() {

     this.isAddForm = this.router.url.includes('add');
	 console.log('isAddForm', this.isAddForm);
  }

  onSubmit(): void {
		if (this.isAddForm) {
			this.SurveyService.addSurvey(this.survey)
				.subscribe(survey => {
					this.survey = survey;
					this.goList()
				});
		} else {
			this.SurveyService.updateSurvey(this.survey)
				.subscribe(_ => this.goBack());
		}
	}

	goBack(): void {
		let link = ['edit', this.survey.survey_id];
		this.router.navigate(link);
	}

	goList(): void {
		let link = ['listsurvey'];
		this.router.navigate(link);
	}

	delete(survey: survey): void {
		this.SurveyService.deleteSurvey(survey)
			.subscribe(_ => this.goList());
	}

}
