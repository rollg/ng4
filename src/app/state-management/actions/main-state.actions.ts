import {Action} from '@ngrx/store';
import {type} from '../utils';

export const INCREMENT = type('[Counter] Increment');
export const DECREMENT = type('[Counter] Decrement');
export const SET_TO_CONST = type('[Counter] Set To Default Constant');

export class Increment implements Action {
    readonly type = INCREMENT;

    constructor(public payload: {someProperty: string, someOtherProperty: boolean}) {
        // dummy const (clang-format issue)
        const b = 0;
    };
}

export class SetToConst implements Action {
    readonly type = SET_TO_CONST;

    constructor(public payload: {constValue: number}) {
        // dummy const (clang-format issue)
        const b = 0;
    };
}

export class Decrement implements Action {
    public type = DECREMENT;

    constructor() {
        // dummy const (clang-format issue)
        const b = 0;
    };
}

export type Actions = Increment | SetToConst | Decrement;
