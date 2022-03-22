import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { LavoroComponent } from './lavoro/lavoro.component';
import { RegaliComponent } from './regali/regali.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import {GalleriaModule} from 'primeng/galleria';
import { FooterComponent } from './footer/footer.component';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import {MatCardModule} from '@angular/material/card';
import { regalo } from './regali/regalo';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LavoroComponent,
    RegaliComponent,
    ContattiComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    GalleriaModule,
    ImageModule,
    CarouselModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
