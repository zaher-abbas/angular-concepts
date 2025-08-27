import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgStyle
  ],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Output() msg: EventEmitter<String> = new EventEmitter();
  @Input() bgColor: string = "#ffff";
  @Input() txtColor: string = "#0000";
  @Input() label: string = "Click Me";

  sendButtonLabel() {
    this.msg.emit(this.label);
  }
}
