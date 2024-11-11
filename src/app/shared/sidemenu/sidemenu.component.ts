import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    // Es un método de los arrays que crea un nuevo array con todos los elementos de los sub-arrays
    // console.log(arr.flat());  [1, 2, 3, 4, [5, 6]]
    // console.log(arr.flat(2));  [1, 2, 3, 4, 5, 6]
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {}
}
