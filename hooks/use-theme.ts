"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  // Lazy initialization으로 초기 렌더링 시 올바른 값 설정
  const [theme, setTheme] = useState<Theme>(() => {
    // 서버 렌더링 시에는 "light" 반환
    if (typeof window === "undefined") return "light";

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    return systemTheme;
  });

  // DOM 조작은 useLayoutEffect로 이동하여 깨빡임 방지
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // 사용자가 수동으로 테마를 설정하지 않은 경우에만 시스템 테마 따라가기
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme, setTheme: setThemeValue };
}
