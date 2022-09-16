import { FrontPageComponent } from './front-page/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchPageComponent } from './launch-page/launch-page/launch-page.component';
import { HomeComponent } from './home/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: 'front-page', component: FrontPageComponent },
  { path: 'launch-page', component: LaunchPageComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: '**', component: FrontPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
