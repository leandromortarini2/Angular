import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition"></app-title>
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero"
      />
      <div
        class="bg-blue-500 w-32 h-32"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransitionComponent {}
