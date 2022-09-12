/* eslint-disable @ngrx/on-function-explicit-return-type */
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ICountry } from 'src/app/models/country';
import { IAppState } from '../index';
import { CountriesActions } from '../actions/action-types';

export interface CountriesState {
  countries: ICountry[];
  error?:string;
  loaded: boolean;
}

export const initialCountriesState: CountriesState = {
  countries: [],
  error:null,
  loaded:false,
}


export const countriesReducer = createReducer(
  initialCountriesState,
  on(CountriesActions.Init, (state:CountriesState) => ({ ...state, loaded: false, error: null })),
  on(CountriesActions.LoadCountries, (state) =>({...state, loaded: false, error: null})),
  on(CountriesActions.LoadCountriesSuccess, (state, { data }) => ({ ...state, countries: data, loaded: true, error: null, })),
  on(CountriesActions.LoadCountriesFailure, (state, { error }) => ({ ...state, error }))
);

export function logger(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
  return (state: IAppState, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}


