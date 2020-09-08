import { createReducer, on } from '@ngrx/store';

import {
  <%= pascalName %>ApiActions,
  <%= pascalName %>PageActions,
} from 'src/app/<%= kebabName %>/actions';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export const reducer = createReducer(
  initialState,
  on(<%= pascalName %>PageActions.enter, state => ({
    ...state,
    loading: true,
  })),
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
