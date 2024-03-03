export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   { [key: string]: Currency };
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa:         string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currency {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  ara?: Ara;
  heb?: string;
  eng?: string;
  zho?: string;
  msa?: string;
  tam?: string;
  rus?: string;
  uzb?: string;
  tuk?: string;
  div?: string;
  tur?: string;
  por?: string;
  tet?: string;
  kaz?: string;
  aze?: string;
  fra?: string;
  vie?: string;
  prs?: string;
  pus?: string;
  jpn?: string;
  mya?: string;
  kir?: string;
  tha?: string;
  hye?: string;
  fas?: string;
  lao?: string;
  kor?: string;
  mon?: string;
  hin?: string;
  tgk?: string;
  nep?: string;
  fil?: string;
  urd?: string;
  dzo?: string;
  khm?: string;
  kat?: string;
  ind?: string;
  ben?: string;
  arc?: string;
  ckb?: string;
  sin?: string;
}

export enum Ara {
  Arabic = "Arabic",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
  CentralAsia = "Central Asia",
  EasternAsia = "Eastern Asia",
  SouthEasternAsia = "South-Eastern Asia",
  SouthernAsia = "Southern Asia",
  WesternAsia = "Western Asia",
}
