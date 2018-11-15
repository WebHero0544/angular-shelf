import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'index',
        loadChildren: '../index/index.module#IndexModule'
      },
      {
        path: 'weather-stat',
        loadChildren: '../weather-stat/weather-stat.module#WeatherStatModule'
      },
      {
        path: 'disaster',
        loadChildren: '../disaster/disaster.module#DisasterModule'
      },
      {
        path: 'rain-stat',
        loadChildren: '../rain-stat/rain-stat.module#RainStatModule'
      },
      {
        path: 'manage',
        loadChildren: '../manage/manage.module#ManageModule'
      },
      { path: '', redirectTo: 'index', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
