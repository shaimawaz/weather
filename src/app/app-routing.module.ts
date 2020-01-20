import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './components/current/current.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: "home", component: CurrentComponent },
  { path: "search", component: SearchComponent },
  { path: "details/:name", component: DetailsComponent },
  { path: "", component: LoginComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
