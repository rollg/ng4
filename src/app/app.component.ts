import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import * as mainActions from './state-management/actions/main-state.actions';
import {State} from './state-management/state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public elements = [{title: 'app works!'}];
    public dataFromTheStore: string|number = '';

    constructor(private store: Store<State>) {
        store.subscribe((data: State) => {
            this.dataFromTheStore = data.counter;
        });
    }

    dispatchIncrement() {
        this.store.dispatch({type: mainActions.INCREMENT});
    }

    dispatchEventFromEffect() {
        this.store.dispatch({type: mainActions.SET_TO_CONST, payload: {constValue: 7}});
    }

    dispatchDecrement() {
        this.store.dispatch({type: mainActions.DECREMENT, payload: {value: 1}});
    }

    addAnotherHeader() {
        this.elements.push({title: 'another title'});
    }
}
