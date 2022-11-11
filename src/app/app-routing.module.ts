import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [{path:'home',component:HomeComponent},{path:'about',component:AboutComponent},{path:'library',component:LibraryComponent},{path:'contact',component:ContactComponent},{path:'training',component:TrainingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
