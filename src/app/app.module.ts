import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { LavoroComponent } from './lavoro/lavoro.component';
import { RegaliComponent } from './regali/regali.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { GalleriaModule} from 'primeng/galleria';
import { ImageModule} from 'primeng/image';
import { CarouselModule} from 'primeng/carousel';
import { MatCardModule} from '@angular/material/card';
import { utente } from './utente';




@NgModule({
  declarations: [
    AppComponent,
    LavoroComponent,
    RegaliComponent,
    ContattiComponent,
    HomeComponent

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
    MatCardModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
