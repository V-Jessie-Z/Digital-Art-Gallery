import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ListComponent } from '../list/list.component';
import { ArtistComponent } from '../artist/artist.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component: ListComponent},
  { path: 'artists/:name', component: ArtistComponent } ,
 { path: '', redirectTo: 'home', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
