import { createAction, props } from '@ngrx/store';
import { ICountry } from 'src/app/models/country';


 export const loadCountries = createAction(
   '[FlagList Component] Load Countries',
   props<{ countries: ICountry[] }>()
 );

 export const loadCountriesSuccess = createAction(
  '[FlagList Component] error country',
 );

 export const loadCountriesFailure = createAction(
   '[FlagList Component] error country',
   props<{ message: string }>()
 );
