import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSettings } from '../settings/app.settings';
import { survey } from '../models/survey.model';
import { response } from '../models/response.model';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class SurveyService {

  private  SurveyUrl: string = 'survey';

constructor( private http:HttpClient) {   }

 

  retrieveAllSurveys() {
    return this.http.get<survey[]>(`${AppSettings.APP_URL}/${this.SurveyUrl}/`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteSurvey0(id){
    return this.http.delete(`${AppSettings.APP_URL}/${this.SurveyUrl}/${id}`);
  }

  retrieveSurvey(id){
    return this.http.get<survey>(`${AppSettings.APP_URL}/${this.SurveyUrl}/${id}`);
  }

  updateSurvey0(id, survey){
    return this.http.put(
          `${AppSettings.APP_URL}/${this.SurveyUrl}/${id}`
                , survey);
  }

  createSurvey(username, Survey){
    return this.http.post(
              `${AppSettings.APP_URL}/${this.SurveyUrl}`
                , survey);
  }
  
  
	/** GET Surveys */
	getSurveys(): Observable<survey[]> {
		return this.http.get<survey[]>(`${AppSettings.APP_URL}/${this.SurveyUrl}`).pipe(
			tap(_ => this.log(`fetched Surveys`)),
			catchError(this.handleError('getSurveys', []))
		);
	}

	/** GET Survey */
	getSurvey(id: number): Observable<any> {
		const url = `${AppSettings.APP_URL}/${this.SurveyUrl}/${id}`;

		return this.http.get<any>(url).pipe(
			tap(_ => this.log(`fetched Survey id=${id}`)),
			catchError(this.handleError<any>(`getSurvey id=${id}`))
		);
	}

	/** PUT: update the Survey on the server */
	updateSurvey(Survey: survey): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.put(`${AppSettings.APP_URL}/${this.SurveyUrl}/${Survey.survey_id}`, Survey, httpOptions).pipe(
			tap(_ => this.log(`updated Survey id=${Survey.survey_id}`)),
			catchError(this.handleError<any>('updateSurvey'))
		);
	}

	/** DELETE Survey */
	deleteSurvey(Survey: survey): Observable<survey> {
		const url = `${AppSettings.APP_URL}/${this.SurveyUrl}/${Survey.survey_id}`;
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.delete<survey>(url, httpOptions).pipe(
			tap(_ => this.log(`deleted Survey id=${Survey.survey_id}`)),
			catchError(this.handleError<survey>('deleteSurvey'))
		);
	}

	/** POST Survey */
	addSurvey(Survey: survey): Observable<survey> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.post<survey>(`${AppSettings.APP_URL}/${this.SurveyUrl}`, Survey, httpOptions).pipe(
			tap((Survey: survey) => this.log(`added Survey with id=${Survey.survey_id}`)),
			catchError(this.handleError<survey>('addSurvey'))
		);
	}

	/* GET Surveys search */
	searchSurveys(term: string): Observable<survey[]> {
		if (!term.trim()) {
			// si le terme de recherche n'existe pas, on renvoie un tableau vide.
			return of([]);
		}

		return this.http.get<survey[]>(`api/Surveys/?name=${term}`).pipe(
			tap(_ => this.log(`found Surveys matching "${term}"`)),
			catchError(this.handleError<survey[]>('searchSurveys', []))
		);
	}

	// Retourne la liste des types des Pokémons
	getSurveyTypes(): Array<string> {
		return [
			'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
			'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
		];
	}

	/* handleError */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);

			return of(result as T);
		};
	}

	/* log */
	private log(log: string) {
		console.info(log);
	}

}
