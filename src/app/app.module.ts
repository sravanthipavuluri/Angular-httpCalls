import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataserviceService } from './DataService.service';
import { PserviceService } from './pservice.service';
import { HttpModule } from '@angular/http';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RouterModule , Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '',redirectTo: '/list',pathMatch: 'full'},
  {path:'list' , component:UserlistComponent},
  {path:'detail/:id',component:UserdetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataserviceService,
    PserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
