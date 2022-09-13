import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from '../reducers/countries.reducers';

export const selectCountriesState = createFeatureSelector<any>("countries")

export const selectAllCountries = createSelector(
  selectCountriesState,
  (state) => state.countries
);

export const selectCountriesLoaded = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.loaded
);

export const selectCountriesError = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.error
);

// export const searchQuery = (val:"turkey", store) => {
//   return store.select(selectAllCountries)
//   .filter(countries => countries.common.name == val)
// }

export const searchQuery= (term?:string) => createSelector(selectCountriesState, state => state.countries.filter(x => x.name == term));
