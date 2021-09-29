import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';

const routes: Routes = [
  {path: "", component:TemperatureConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
