import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  verDetalles(planta: string) {
    // Redirige al componente EnProceso
    this.router.navigate(['plantas']);
  }

  playBiteSound() {
    const audio = new Audio();
    audio.src = 'mordida.mp3';
    audio.load();
    audio.play();
  }
}
