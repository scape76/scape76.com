"use client";

import {
  LaptopIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "./use-theme";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

export function ThemeSelector() {
  const [theme, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-7">
          {theme === "anime" ? (
            <Icons.anime className="size-6" />
          ) : (
            <PersonIcon className="size-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("default")}>
          <PersonIcon className="mr-2 size-4" />
          <span className="text-sm">Default</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("anime")}>
          <Icons.anime className="mr-2 size-4" />
          <span className="text-sm">Anime</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
