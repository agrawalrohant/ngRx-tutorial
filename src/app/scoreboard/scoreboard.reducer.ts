import { createReducer, on , Action } from "@ngrx/store";
import * as ScoreBoardAction from "./scoreboard.actions";

export const initialState: State = {
    home: 0,
    away : 0
}

export interface State {
    home: number;
    away: number;
  }

const scoreBoardReducer = createReducer(initialState,
    on(ScoreBoardAction.homeScore, state => ({ ...state,home: state.home + 1})),
    on(ScoreBoardAction.awayScore, state => ({ ...state,away: state.away + 1})),
    on(ScoreBoardAction.resetScore, state => ({ home: 0,away: 0})),
    on(ScoreBoardAction.setScore, (state, { game }) => ({ home : game.home, away : game.away}))
    )
    

    export function rootReducer( state : State | undefined , action : Action){
        return scoreBoardReducer(state,action)
    }
