export interface ICountry {
  name?: string;
  population?:number;
  region?:string;
  capital?:string;
  flag?:string;
  code?:string;
}

export interface ICountriesState {
  countries: ICountry[];
  error?:string;
  loaded: boolean;
}
