import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent, TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  title = 'Control Flow';

  // SIGNAL es un observable que emite valores de manera reactiva en tiempo real sin la necesidad de un ciclo de vida.
  // Las señales permiten con precisión quirúrgica, saber
  // en dónde necesita Angular cambiar el valor de una
  // variable, calcular un nuevo valor, disparar un efecto
  // secundario, etc.

  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Ember']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
