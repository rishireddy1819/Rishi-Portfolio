import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', redirectTo: '/nav-bar', pathMatch: 'full'},
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'myskills', component: MyskillsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'getintouch', component: GetintouchComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
