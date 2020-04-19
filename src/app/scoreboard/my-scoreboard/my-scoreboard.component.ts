import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, homeScore, awayScore, resetScore, setScore } from '../scoreboard.actions';
import { Store, select} from '@ngrx/store';

@Component({
  selector: 'app-my-scoreboard',
  templateUrl: './my-scoreboard.component.html',
  styleUrls: ['./my-scoreboard.component.css']
})
export class MyScoreboardComponent implements OnInit {

  constructor(private store :Store<{ game : Game}>) {
     store.pipe(select('game')).subscribe(game => {
      this.game$ = game;
    });
  }

  game$:Game;

  ngOnInit() {}

  homeScore(){
    this.store.dispatch(homeScore());
  }

  awayScore(){
    this.store.dispatch(awayScore());
  }

  resetScore(){
    this.store.dispatch(resetScore());
  }

  /*setScore(){
    this.store.dispatch(setScore());
  }*/

}
