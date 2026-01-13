import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink],
  template: `<main>
    <header class="brand-name">
      <a [routerLink]="['/']">
        <img
          class="brand-logo"
          src="../assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </a>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
})
export class App {
  title = "homes";
}
