import { Component, signal } from '@angular/core';
import { RegistroReactivo } from './registro-reactivo/registro-reactivo';

@Component({
  imports: [RegistroReactivo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('template-drive');
}
