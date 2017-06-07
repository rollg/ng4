import * as mainActions from '../actions/main-state.actions';
import {initialState} from '../state';
import {Counter} from '../../models';

export const reducer = (state = initialState, action: mainActions.Actions): Counter => {
    switch (action.type) {
        case mainActions.INCREMENT:
            return {counter: state.counter + 1};
        case mainActions.SET_TO_CONST:
            return {counter: action.payload.constValue};
        case mainActions.DECREMENT:
            return {counter: state.counter - 1};
        default:
            return state;
    }
};
