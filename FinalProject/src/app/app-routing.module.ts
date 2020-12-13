import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CATSComponent } from './cats/cats.component' 
import { NearMeComponent } from './near-me/near-me.component'
import { StatisticsComponent } from "./statistics/statistics.component"

const routes: Routes = [
{ path: 'Cats', component: CATSComponent},
{ path: 'Near', component: NearMeComponent},
{ path: 'StatsPage', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
