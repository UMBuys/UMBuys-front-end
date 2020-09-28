  /**
   * Date: 8/22/2020
   * Description: Angular Routing config
   * Author: Auto Generated
  */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { DetailComponent } from 'src/app/components/detail/detail.component';

const routes: Routes = [
    // TODO: when path is '' need to redirectTo to welcome page
    // Yiwei Yao
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'error', component: ErrorComponent },
    { path: 'home', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
