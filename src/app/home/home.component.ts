import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  verTienda() {
    this.router.navigate(['error']);
  }

  venus(planta: string) {
    this.router.navigate(['especies/venus']);
  }

  drosera(planta: string) {
    this.router.navigate(['especies/drosera']);
  }

  nepenthe(planta: string) {
    this.router.navigate(['especies/nepenthes']);
  }

  sarracenia(planta: string) {
    this.router.navigate(['especies/sarracenia']);
  }

  playBiteSound() {
    const audio = new Audio();
    audio.src = 'mordida.mp3';
    audio.load();
    audio.play();
  }
}
