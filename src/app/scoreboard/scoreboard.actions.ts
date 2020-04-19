import { createAction, props } from "@ngrx/store";

export const homeScore = createAction("[Scoreboard Page] Home Score");
export const awayScore = createAction("[Scoreboard Page] Away Score");
export const resetScore = createAction("[Scoreboard Page] Reset Score");
export const setScore = createAction("[Scoreboard Page] Set Score", props<{game : Game}>());

export class Game  {

    constructor(){}

        home:number;
        away : number;
}