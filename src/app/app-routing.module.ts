import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './components/current/current.component';
import { SearchComponent } from './components/search/search.component';


const routes:Routes =[
  {path: "", component:CurrentComponent},
  {path: "search" , component: SearchComponent},
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
