import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'bc-<%= kebabName %>-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './<%= kebabName %>-page.component.html',
  styleUrls: ['./<%= kebabName %>-page.component.scss']
})
export class <%= pascalName %>PageComponent {
  constructor() { }
}
