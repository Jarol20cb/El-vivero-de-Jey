import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  busqueda: string = '';
  filtro: string = 'todos';
  carrito: any[] = [];
  mostrarOverlay: boolean = false;

  productos = [
    {
      nombre: 'Venus Atrapamoscas',
      tipo: 'venus',
      descripcion: 'Trampas activas. Ideal para empezar.',
      imagen: 'tienda/venus.jpg',
      precio: 15,
      precioOriginal: 25,
      disponible: true,
      enOferta: true
    },
    {
      nombre: 'Trio Salvaje para principiantes',
      tipo: 'venus',
      descripcion: 'Inicia tu primera aventura con el pack de principiantes',
      imagen: 'tienda/pack.jpg',
      precio: 39.90,
      precioOriginal: 45,
      disponible: true,
      enOferta: true
    },
    {
      nombre: 'Venus Atrapamoscas ARCP',
      tipo: 'venus',
      descripcion: 'Trampas grandes. Come presas grandes.',
      imagen: 'tienda/venus-arcp.jpg',
      precio: 35,
      precioOriginal: 35,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Venus Akai Ryu',
      tipo: 'venus',
      descripcion: 'Gran tamaño. Color llamativo.',
      imagen: 'tienda/venus-akai-ryu.jpg',
      precio: 50,
      precioOriginal: 50,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Venus Atrapamoscas Cocodrile',
      tipo: 'venus',
      descripcion: 'Bocas grandes y rojizas. Adulta.',
      imagen: 'tienda/venus-dentae.jpg',
      precio: 100,
      precioOriginal: 100,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Drosera Capensis Tipica',
      tipo: 'drosera',
      descripcion: 'Fácil cuidado. Usa mucílago pegajoso.',
      imagen: 'tienda/drosera-capensis.jpg',
      precio: 15,
      precioOriginal: 15,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Drosera Spatulata Tipica',
      tipo: 'drosera',
      descripcion: 'Compacta. Atrapa insectos con mucílago.',
      imagen: 'tienda/drosera-spatulata.jpg',
      precio: 15,
      precioOriginal: 15,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Nepenthe Graciliflora',
      tipo: 'nepenthes',
      descripcion: 'Jarros delgados. Climas húmedos.',
      imagen: 'tienda/nepenthe-graciliflora.jpg',
      precio: 185,
      precioOriginal: 230,
      disponible: false,
      enOferta: true
    },
    {
      nombre: 'Pinguiculas',
      tipo: 'pinguicula',
      descripcion: 'Hojas pegajosas. Fácil de cuidar.',
      imagen: 'tienda/pinguicula.jpg',
      precio: 40,
      precioOriginal: 40,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Pinguiculas Afrodita',
      tipo: 'pinguicula',
      descripcion: 'Compacta. Color atractivo.',
      imagen: 'tienda/pingulcula-afrodita.jpg',
      precio: 40,
      precioOriginal: 40,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Nepenthe Hookeriana',
      tipo: 'nepenthes',
      descripcion: 'Híbrido fuerte. Jarros medianos.',
      imagen: 'tienda/nepenthe-hookeriana.jpg',
      precio: 80,
      precioOriginal: 80,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Nepenthe Coccinea',
      tipo: 'nepenthes',
      descripcion: 'Crecimiento rápido. Jarros vistosos.',
      imagen: 'tienda/nepenthe-coccinea.jpg',
      precio: 40,
      precioOriginal: 40,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Sarracenia Jutathip Soper',
      tipo: 'sarracenias',
      descripcion: 'Rojiza. Atrae con néctar.',
      imagen: 'tienda/sarracenia-jutathip-soper.jpg',
      precio: 45,
      precioOriginal: 45,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Sarracenia Jutathip Soper (Pequeña)',
      tipo: 'sarracenias',
      descripcion: 'Versión joven. Mismo color.',
      imagen: 'tienda/sarracenia-jutathip-soper-pequeña.jpg',
      precio: 27,
      precioOriginal: 27,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Sarracenia flava',
      tipo: 'sarracenias',
      descripcion: 'Trompetas altas. Atrapa voladores.',
      imagen: 'tienda/sarracenia-flava.jpg',
      precio: 20,
      precioOriginal: 20,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Sarracenia Scarlet Bell',
      tipo: 'sarracenias',
      descripcion: 'Hojas rojizas. Exterior ideal.',
      imagen: 'tienda/sarracenia-scarlet-Bell.jpg',
      precio: 45,
      precioOriginal: 45,
      disponible: true,
      enOferta: false
    },
    {
      nombre: 'Sarracenia Purpurea',
      tipo: 'sarracenias',
      descripcion: 'Robusta. Tolera frío.',
      imagen: 'tienda/sarracenia-purpurea.jpg',
      precio: 30,
      precioOriginal: 30,
      disponible: true,
      enOferta: false
    }
  ];    

  get productosFiltrados() {
    return this.productos.filter(p =>
      (this.filtro === 'todos' || p.tipo === this.filtro) &&
      p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  setFiltro(tipo: string) {
    this.filtro = tipo;
  }

  anadirAlCarrito(producto: any) {
    const existente = this.carrito.find(p => p.nombre === producto.nombre);
    if (existente) {
      existente.cantidad += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  cambiarCantidad(item: any, cambio: number) {
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
      this.carrito = this.carrito.filter(p => p !== item);
    }
  }

  cancelarCarrito() {
    this.carrito = [];
    this.mostrarOverlay = false;
  }

  enviarPedidoWhatsApp() {
    const mensaje = this.carrito.map(p =>
      `🌱 ${p.nombre} x${p.cantidad} - S/ ${p.precio * p.cantidad}`
    ).join('\n');

    const total = this.carrito.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);
    const mensajeFinal = `¡Hola! Me gustaría solicitar las siguientes plantas:\n\n${mensaje}\n\nTotal: S/ ${total}`;
    const numeroWhatsApp = '51925566082';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeFinal)}`;

    window.open(url, '_blank');
  }

  toggleOverlay() {
    this.mostrarOverlay = !this.mostrarOverlay;
  }

  getCantidadTotal() {
    return this.carrito.reduce((sum, item) => sum + item.cantidad, 0);
  }
}
