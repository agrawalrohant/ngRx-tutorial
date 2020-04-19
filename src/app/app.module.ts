import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from "./counter/counter.reducer";
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { MyScoreboardComponent } from './scoreboard/my-scoreboard/my-scoreboard.component';
import * as fromScoreBoard from "./scoreboard/scoreboard.reducer";

@NgModule({
  declarations: [
    
    AppComponent,
    MyCounterComponent,
    MyScoreboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot( 
        {
          count: counterReducer,
          game: fromScoreBoard.rootReducer
        }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
