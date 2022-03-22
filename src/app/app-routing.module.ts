import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LavoroComponent } from './lavoro/lavoro.component';
import { ContattiComponent } from './contatti/contatti.component';
import { RegaliComponent } from './regali/regali.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'lavoro', component: LavoroComponent},
  {path: 'regali', component: RegaliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
