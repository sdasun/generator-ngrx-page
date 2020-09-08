import { createAction, props } from '@ngrx/store';


export const listTicketsSuccess = createAction(
    '[<%= pascalName %>/API] List Item Success',
    props<{ result: any[] }>()
);

export const listTicketsFailure = createAction(
    '[[<%= pascalName %>/API] List Item Failure',
    props<{ error: any }>()
);
