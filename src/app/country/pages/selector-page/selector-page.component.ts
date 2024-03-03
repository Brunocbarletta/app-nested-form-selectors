import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap, tap } from 'rxjs';

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

  constructor (
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}
  ngOnInit(): void {
    this.regionChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  regionChanged(): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(() => this.myForm.get('country')!.setValue('')),
      switchMap(region => this.countriesService.getCountriesByRegion(region))
    )
    .subscribe(countries => {
      console.log(countries);
      this.countriesByRegion = countries;
    });
  }
}
