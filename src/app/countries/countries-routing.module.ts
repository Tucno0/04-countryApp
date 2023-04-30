import { NgModule } from '@angular/core';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // forChild() porque es un modulo hijo
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule {}
