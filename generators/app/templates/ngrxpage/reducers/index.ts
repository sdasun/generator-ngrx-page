import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as from<%= pascalName %> from 'src/app/<%= kebabName %>/reducers/<%= kebabName %>.reducer';
import * as fromRoot from 'src/app/reducers';

export const modulesFeatureKey = 'modules';

export interface ModulesState {
  [from<%= pascalName %>.collectionFeatureKey]: from<%= pascalName %>.State;
}

export interface State extends fromRoot.State {
  [modulesFeatureKey]: ModulesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: ModulesState | undefined, action: Action) {
  return combineReducers({
    [from<%= pascalName %>.collectionFeatureKey]: from<%= pascalName %>.reducer,
  })(state, action);
}
