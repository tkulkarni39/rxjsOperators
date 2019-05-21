import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { StartWithComponent } from './start-with/start-with.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';




@NgModule({
  declarations: [
    AppComponent,
    OfOperatorComponent,
    OneComponent,
    TwoComponent,
    CombineLatestComponent,
    ConcatComponent,
    ForkJoinComponent,
    StartWithComponent,
    SwitchMapComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
