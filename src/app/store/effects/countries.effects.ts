import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { CountriesActions } from '../actions/action-types';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class CountriesEffects {

  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountriesActions.LoadCountries),
      tap( _ => this.loadingService.loadingOn()),
      switchMap(() =>
        from(this.dataService.getCountries()).pipe(
          map((data) => {
            this.loadingService.loadingOff();
            return CountriesActions.LoadCountriesSuccess({ data })
          }),
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
