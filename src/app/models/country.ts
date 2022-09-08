export interface ICountry {
  name: Name;
  population:number;
  region:string;
  capital:string;
  flags:Flag;
  tld:string;
}



type Name = {
  [key: string]: any;
  name: string;
};

type Flag = {
  [key: string]: any;
  flag: string;
};
