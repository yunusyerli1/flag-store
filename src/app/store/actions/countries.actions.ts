import { createAction, props } from '@ngrx/store';
import { ICountry } from 'src/app/models/country';


export const getItems = createAction('[get countries] get countries');

export const loadCountries = createAction(
  '[FlagList Component] Load Countries',
  props<{ countries: ICountry[] }>()
);

export const errorCountry = createAction(
  '[get countries] error country',
  props<{ message: string }>()
);

