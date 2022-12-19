import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { SidebarComponent } from './sidebar/sidebar.component';

import { NaviServiceService } from './navi-service.service';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [NaviServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
