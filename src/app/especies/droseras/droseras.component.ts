import { Component } from '@angular/core';

@Component({
  selector: 'app-droseras',
  templateUrl: './droseras.component.html',
  styleUrls: ['./droseras.component.css']
})
export class DroserasComponent {
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
