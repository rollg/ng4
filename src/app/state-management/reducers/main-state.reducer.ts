import {Action, ActionReducer} from '@ngrx/store';

import {ActionTypes} from '../actions';
import {initialState, State} from '../state';

export function mainStoreReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {counter : state.counter + 1};
        case ActionTypes.EVENT_FROM_EFFECT:
            return {counter : 4};
        default:
            return state;
    }
}
