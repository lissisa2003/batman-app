import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent,
        MovieCardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
