import {Action} from '@ngrx/store';
import {type} from '../utils';

export const INCREMENT = type('INCREMENT');
export const DECREMENT = type('DECREMENT');
export const SET_TO_CONST = type('SET_TO_CONST');

export class Increment implements Action {
    readonly type = INCREMENT;

    constructor(public payload: {someProperty: string, someOtherProperty: boolean}) {};
}

export class SetToConst implements Action {
    readonly type = SET_TO_CONST;

    constructor(public payload: {constValue: number}) {};
}

export class Decrement implements Action {
    readonly type = DECREMENT;

    constructor(public payload: { value: number }) {};
}

export type Actions = Increment | SetToConst | Decrement;
