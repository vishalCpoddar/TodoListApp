import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from 'src/app/components/to-dos/to-dos.component'
import { AboutComponent } from 'src/app/components/pages/about/about.component'

const routes: Routes = [
  { path:'', component:ToDosComponent},
  { path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
