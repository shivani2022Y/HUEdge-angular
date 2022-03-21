import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CartListComponent } from "./cart-list/cart-list.component";
import { CourseComponent } from "./course/course.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { ListComponent } from "./list/list.component";
import { TabsComponent } from "./tabs/tabs.component";


const routes = [
  { path: 'courses', component: TabsComponent, children: [
    { path: '', redirectTo: 'all',  pathMatch: 'full' },
    { path: 'course-description', component: DashboardComponent},
    // {path: 'cart', component: CartListComponent},
    { path: ':side' , component: ListComponent }

  ]},

  { path: 'user-profile', loadChildren: () => import('./profile/profile-module').then(m => m.profileModule) },
  //{ path: 'course-description', loadChildren: () => import('./dashboard/dashboar-module').then(m => m.dashboardModule) },
  { path: '**', redirectTo: '/courses/all' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingServiceService {

  constructor() { }
}
