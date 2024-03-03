import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  public countriesByRegion: SmallCountry[] = [];
  public bordersCountries: SmallCountry[] = [];

  constructor (
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}
  ngOnInit(): void {
    this.regionChanged();
    this.countryChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  regionChanged(): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(() => this.myForm.get('country')!.setValue('')),
      tap(() => this.bordersCountries = []),
      switchMap(region => this.countriesService.getCountriesByRegion(region))
    )
    .subscribe(countries => {
      console.log(countries);
      this.countriesByRegion = countries;
    });
  }

  countryChanged(): void {
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(() => this.myForm.get('borders')!.setValue('')),
      filter((alphaCode: string) => alphaCode.length > 0),
      switchMap(alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)),
      switchMap(country => this.countriesService.getCountriesBordersByAlphacodes(country.borders))
    )
    .subscribe(countries => {
      console.log({countries});
      this.bordersCountries = countries;
    });
  }
}
