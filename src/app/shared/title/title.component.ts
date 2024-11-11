import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h2 class="text-3xl font-bold">
    {{ title }}
  </h2> `,
})
export class TitleComponent {
  // REQUIRED es un decorador que indica que el atributo es requerido
  @Input({ required: true, alias: 'title' }) title: string = '';

  // TRANSFORM es un decorador que indica que el atributo se transforma a boolean
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
