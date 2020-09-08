import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { <%= pascalName %>RoutingModule } from 'src/app/<%= kebabName %>/<%= kebabName %>-routing.module';
import {
  <%= pascalName %>PageComponent,
} from 'src/app/<%= kebabName %>/containers';

import * as fromStats from 'src/app/<%= kebabName %>/reducers';
import { MaterialModule } from 'src/app/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from "@angular/forms";

export const COMPONENTS = [
];

export const CONTAINERS = [
  <%= pascalName %>PageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatTooltipModule,
    MatSlideToggleModule,
    <%= pascalName %>RoutingModule,
    ReactiveFormsModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromStats.modulesFeatureKey, fromStats.reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    // EffectsModule.forFeature([StatEffects]),
  ],
  declarations: [COMPONENTS, CONTAINERS]
})
export class <%= pascalName %>Module { }
