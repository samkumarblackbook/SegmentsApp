import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
// import { LoginComponent } from './login/login.component';
// import { UserProfileComponent } from './users/user-profile.component';
// import { AuthService, AuthGuardService, UserGuard, UserResolve } from './services';
// import { UnauthorizedComponent } from './unauthorized';

const routes: Routes = [
  { path: '', redirectTo: 'segments', pathMatch: 'full' },
  {
    path: 'segments',
    component: MainComponent,
    // children: [
    //   {
    //     path: '',
    //     component: UserProfileComponent,
    //     canActivate:[AuthGuardService]
    //   },
    //   {
    //     path: ':id',
    //     component: UserProfileComponent,
    //     resolve:{
    //       user: UserResolve
    //     },
    //     canActivate:[AuthGuardService,UserGuard]
    //   }
    // ]
  },
  // { path: 'unauthorized', component: UnauthorizedComponent },
  // { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    // AuthGuardService,
    // UserGuard,
    // UserResolve
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    // console.debug('Routes Module Built')
  }
}

export const routingComponents = [MainComponent, AppComponent];
