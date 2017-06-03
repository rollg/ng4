import { ActionReducer, Action } from '@ngrx/store';
import {State, initialState} from '../state';
import {ActionTypes} from '../actions';

export const mainStoreReducer: ActionReducer<State> = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                counter: state.counter + 1
            };
        case ActionTypes.EVENT_FROM_EFFECT:
            return {
                counter: 4
            };
        default:
            return state;
    }
};
