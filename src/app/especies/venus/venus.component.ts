import { Component } from '@angular/core';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html',
  styleUrls: ['./venus.component.css']
})
export class VenusComponent {
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
