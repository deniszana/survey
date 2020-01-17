import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { survey } from '../models/survey.model';
import { SurveyService } from '../services/survey.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: survey[] = [
  {"survey_id":1,"survey_name_fr":"premier ","survey_name_en":"premier en","survey_name_pt":"premier pt","survey_description_fr":"premier survey","survey_description_en":"premier survey en","survey_description_pt":"premier survey fr","created":"2019-11-12T00:00:00.000Z","updated":"2019-11-12T00:00:00.000Z","survey_status":"ini","survey_begin_date":"2019-11-12T00:00:00.000Z","survey_end_date":"2020-11-12T00:00:00.000Z"},
  {"survey_id":2,"survey_name_fr":"deuxieme ","survey_name_en":"deuxieme en","survey_name_pt":"deuxieme pt","survey_description_fr":"deuxieme survey","survey_description_en":"deuxieme survey en","survey_description_pt":"deuxieme survey fr","created":"2019-11-12T00:00:00.000Z","updated":"2019-11-12T00:00:00.000Z","survey_status":"ini","survey_begin_date":"2018-11-12T00:00:00.000Z","survey_end_date":"2019-11-11T00:00:00.000Z"}
];


@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.scss']
})
export class ListSurveyComponent implements OnInit {

  constructor(  
    private router: Router,
    private surveyService:SurveyService
    ) { }

  private surveys: any = null;
  displayedColumns: string[] = ['survey_id', 'survey_name_fr', 'survey_description_fr', 'survey_begin_date', 'survey_end_date'];
  
  dataSource = new MatTableDataSource([]);

  
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

 
  ngOnInit() {

    this.getSurveys();
    // this.surveyService.retrieveAllSurveys()
    //                      .pipe()
    //                      .subscribe( data => {
    //                         console.log(data);
    //                      }); 
                      
 //   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    //console.log(ELEMENT_DATA2);
    this.dataSource.sort = this.sort;
  }
  
  getSurveys(): void {
    console.log( 'ici');
		this.surveyService.getSurveys()
			.subscribe(Surveys => {
        this.surveys = Surveys;
        console.log(this.surveys.data as survey[]);
        this.dataSource = new MatTableDataSource(this.surveys.data as survey[]);
      }  );
	}

	selectSurvey(Survey: survey): void {
		let link = ['edit', Survey.survey_id];
		this.router.navigate(link);
	}

   goAdd() {
		let link = ['add'];
		this.router.navigate(link);     
   }
}
