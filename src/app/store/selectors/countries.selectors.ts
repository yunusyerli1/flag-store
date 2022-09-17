import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICountriesState } from 'src/app/models/country';

export const selectCountriesState = createFeatureSelector<any>("countries")

export const selectAllCountries = createSelector(
  selectCountriesState,
  (state) => state.countries
);

export const selectCountriesLoaded = createSelector(
  selectCountriesState,
  (state: ICountriesState) => state.loaded
);

export const selectCountriesError = createSelector(
  selectCountriesState,
  (state: ICountriesState) => state.error
);
