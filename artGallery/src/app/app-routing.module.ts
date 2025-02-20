import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ListComponent } from '../list/list.component';

const routes: Routes = [

  {path: '/artGallery/src/home', component: HomeComponent},
  {path: '/artGallery/src/about', component: AboutComponent},
  {path: '/artGallery/src/list', component: ListComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
