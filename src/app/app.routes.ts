import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'contact',component: ContactComponent},
    {path:'contact',redirectTo:'about',pathMatch:'full'},
    {path: 'user/:id',component: UserComponent},
    ///{
       /// path: 'dashboard',component: DashboardComponent,children:[
          // {path:'',redirectTo:'settings',pathMatch:'full'},
            //{path:'settings',component: SettingsComponent},
            //{path: 'profile',component:ProfileComponent},
            
        //]
        //Lazy Loading
        //path: 'dashboard',
        //loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    ///},
    { 
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
          { path: 'settings', loadComponent: () => import('./dashboard/settings/settings.component').then(m => m.SettingsComponent) },
          { path: 'profile', loadComponent: () => import('./dashboard/profile/profile.component').then(m => m.ProfileComponent) },
          { path: '', redirectTo: 'settings', pathMatch: 'full' }
        ]
      },
    {path: '**',component: NotFoundComponent}

];

export const AppRoutingModule=RouterModule.forRoot(routes);

