import { Action } from '@ngrx/store';
import {type} from '../utils';

export const ActionTypes = {
    INCREMENT: type('INCREMENT'),
    EVENT_FROM_EFFECT: type('EVENT_FROM_EFFECT')
};

export class Increment implements Action {
    type = ActionTypes.INCREMENT;

    constructor(payload: { someProperty: string, someOtherPropery: boolean }) {};
}

export type Actions = Increment;
