import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rpb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  label: string;

  @Output()
  clicked = new EventEmitter<MouseEvent>();

  constructor() {}

  onClick(event) {
    this.clicked.emit(event);
  }
}
