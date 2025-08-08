"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider(
  {children, ...props}:
  React.ComponentProps<typeof NextThemesProvider>) {
  // 使用客户端渲染，避免水合不匹配
  const [mounted, setMounted] = React.useState(false);

  // 仅在客户端挂载后渲染
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // 返回一个占位符，避免水合不匹配
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
