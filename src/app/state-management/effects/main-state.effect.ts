import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MainEffects {

    @Effect() update$ = this.action$
        .ofType('SUPER_SIMPLE_EFFECT')
        .switchMap(() =>
            Observable.of({ type: 'SUPER_SIMPLE_EFFECT_HAS_FINISHED' })
        );

    constructor(private action$: Actions) {}
}
