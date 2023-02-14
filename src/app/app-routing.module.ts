import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chart } from 'chart.js/dist';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';


const routes: Routes = [
  // {
  //   component:Chart,
  //   path:'Chart'
  // },
  // {
  //   component:PdfReaderComponent,
  //   path:'Report'
  // }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
