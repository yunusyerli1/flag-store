import { createAction, props } from "@ngrx/store";
import { ICountry } from "src/app/models/country";

export enum CountriesActionsNames {
  Init = '[Flag List] Init',
  LoadCountries = '[Flag List] Load Countries',
  LoadCountriesSuccess = '[Flag List] Load Countries Success',
  LoadCountriesFailure = '[Flag List] Load Countries Failure',
}

export const Init = createAction(CountriesActionsNames.Init);

export const LoadCountries = createAction(CountriesActionsNames.LoadCountries);

export const LoadCountriesSuccess = createAction(
  CountriesActionsNames.LoadCountriesSuccess,
  props<{ data: ICountry[] }>()
);

export const LoadCountriesFailure = createAction(
  CountriesActionsNames.LoadCountriesFailure,
  props<{ error: string | null }>()
);
