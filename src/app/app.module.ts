import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data-service';
import { CourseComponent } from './course/course.component';
import { ListComponent } from './list/list.component';
import { RoutingServiceService } from './routing-service.service';
import { TabsComponent } from './tabs/tabs.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishlishtComponent } from './wishlisht/wishlisht.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HeaderTitleService } from './header-title.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    ListComponent,
    TabsComponent,
    WishlishtComponent,
    DialogComponent,
    DashboardComponent,
    CartComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    HttpModule,
    RoutingServiceService,
    NgxPaginationModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [DataService, HeaderTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
