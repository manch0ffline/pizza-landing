"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/language-context";
import { ThemeProvider } from "@/theme/theme-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
