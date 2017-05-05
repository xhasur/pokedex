import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../pageNotFound/pageNotFound.component';


export const APPROUTER:Routes= [
    {path:'', component: AppComponent},
    {path:'home', component: HomeComponent},
    {path:'**', component: PageNotFoundComponent}
]