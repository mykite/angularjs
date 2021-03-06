import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule, XHRBackend } from '@angular/http'

import { AppComponent }  from './app.component'
import { routing } from './app.routing'

import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'
import { HeroSearchComponent } from './hero-search.component'

import { HeroService } from './hero.service'
import { InMemoryDataService } from './in-memory-data.service'
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

@NgModule({
  imports: [ 
  	BrowserModule,
   	FormsModule,
   	routing,
   	HttpModule
  ],
  declarations: [ 
   AppComponent, 
   HeroDetailComponent,  
   HeroesComponent,
   HeroSearchComponent 
  ],
  providers:	[ 
   HeroService,
   { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
   { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }