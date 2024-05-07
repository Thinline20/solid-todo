import { useColorMode } from "@kobalte/core/color-mode";
import { DropdownMenuTriggerProps } from "@kobalte/core/dropdown-menu";
import { TbDeviceLaptop, TbMoon, TbSun } from "solid-icons/tb";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setColorMode } = useColorMode();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        as={(props: DropdownMenuTriggerProps) => (
          <Button class="relative" size="icon" variant="ghost" {...props}>
            <TbSun class="size-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <TbMoon class="absolute size-5 -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span class="sr-only">Toggle Theme</span>
          </Button>
        )}
       />
      <DropdownMenuContent class="[&>div]:flex [&>div]:gap-2">
        <DropdownMenuItem onSelect={() => setColorMode("light")}>
          <TbSun class="size-5" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setColorMode("dark")}>
          <TbMoon class="size-5" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() =>
            setColorMode(
              window?.matchMedia("(prefers-color-scheme: dark)").matches
                ? "light"
                : "dark",
            )
          }
        >
          <TbDeviceLaptop class="size-5" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
