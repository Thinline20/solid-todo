import { A } from "@solidjs/router";

import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header class="container flex justify-between py-4">
      <nav>
        <A href="/">Home</A>
      </nav>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
