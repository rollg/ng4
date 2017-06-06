import * as mainActions from '../actions/main-state.actions';
import {initialState, State} from '../state';

export const reducer = (state = initialState, action: mainActions.Actions): State => {
    switch (action.type) {
        case mainActions.INCREMENT:
            return {counter : state.counter + 1};
        case mainActions.SET_TO_CONST:
            return {counter : action.payload.constValue};
        case mainActions.DECREMENT:
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};
