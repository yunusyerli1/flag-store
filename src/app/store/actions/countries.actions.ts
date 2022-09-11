import { createAction, props } from '@ngrx/store';
import { ICountry } from 'src/app/models/country';


 export const loadCountries = createAction(
   '[FlagList Component] Load Countries',
   props<{ countries: ICountry[] }>()
 );

 export const errorCountry = createAction(
   '[get countries] error country',
   props<{ message: string }>()
 );



// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

