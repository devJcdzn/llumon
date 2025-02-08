"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const onToggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Button onClick={onToggleTheme} variant={"ghost"} size={"icon"}>
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
};
