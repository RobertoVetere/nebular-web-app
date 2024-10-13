import { Component, Input, Output, EventEmitter } from '@angular/core';
type ButtonStatus = 'primary' | 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() status: ButtonStatus = 'primary';
  @Input() disabled: boolean = false; // Opción para deshabilitar el botón
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Tamaño del botón
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
