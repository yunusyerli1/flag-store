import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
//import { selectAllTodos } from './todo.selectors';
import { DataService } from 'src/app/services/data.service';
import { IAppState } from '../index';
import { CountriesActions } from '../actions/action-types';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class CountriesEffects {


  // Run this code when a loadTodos action is dispatched
  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountriesActions.LoadCountries),
      tap( _ => this.loadingService.loadingOn()),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.dataService.getCountries()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((data) => {
            this.loadingService.loadingOff();
            return CountriesActions.LoadCountriesSuccess({ data })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(CountriesActions.LoadCountriesFailure({ error })))
        )
      )
    ) }
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private loadingService: LoadingService
  ) {}

}
