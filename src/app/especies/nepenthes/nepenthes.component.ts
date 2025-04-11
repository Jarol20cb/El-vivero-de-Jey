import { Component } from '@angular/core';

@Component({
  selector: 'app-nepenthes',
  templateUrl: './nepenthes.component.html',
  styleUrls: ['./nepenthes.component.css']
})
export class NepenthesComponent {
  // Variable para la imagen ampliada
  modalImageUrl: string | null = null;

  // Función para abrir el modal con la imagen
  openImage(imageUrl: string): void {
    this.modalImageUrl = imageUrl;
  }

  // Función para cerrar el modal
  closeImage(): void {
    this.modalImageUrl = null;
  }
}
