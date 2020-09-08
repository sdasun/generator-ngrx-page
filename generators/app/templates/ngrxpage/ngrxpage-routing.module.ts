import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  <%= pascalName %>PageComponent,
} from 'src/app/<%= kebabName %>/containers';

export const routes: Routes = [
  {
    path: '',
    component: <%= pascalName %>PageComponent,
    data: { title: 'Module List' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class <%= pascalName %>RoutingModule { }
