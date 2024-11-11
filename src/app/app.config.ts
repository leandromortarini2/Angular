import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(
      routes,
      // WITH INITIAL TRANSITION hace que se ejecute la animacion de opacidad cuando se carga la pagina
      withViewTransitions({
        skipInitialTransition: true,
      })
    ),
  ],
};
