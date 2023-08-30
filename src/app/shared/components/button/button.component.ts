import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() isDisabled! : boolean;
  @Output() buttonClick = new EventEmitter();
  onClick(): void {
    this.buttonClick.emit();
  }
}