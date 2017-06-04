import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {ActionTypes} from './state-management/actions/main-state.actions';
import {State} from './state-management/state';

@Component({
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
})
export class AppComponent {
    public elements = [ {title : 'app works!'} ];
    public dataFromTheStore: string|number = '';

    constructor(private store: Store<State>) {
        store.subscribe((data: State) => {
            this.dataFromTheStore = data.counter;
        });
    }

    dispatchIncrement() {
        this.store.dispatch({type : ActionTypes.INCREMENT});
    }

    addAnotherHeader() {
        this.elements.push({title : 'another title'});
    }
}
