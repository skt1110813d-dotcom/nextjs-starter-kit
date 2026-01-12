"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

// 네비게이션 메뉴 항목
const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/features", label: "기능" },
  { href: "/pricing", label: "가격" },
  { href: "/contact", label: "연락처" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* 로고 */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">StarterKit</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 버튼들 */}
        <div className="flex items-center justify-end flex-1 md:flex-initial space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <Link href="/login">로그인</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:flex">
            <Link href="/signup">시작하기</Link>
          </Button>

          {/* 모바일 메뉴 */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/login">로그인</Link>
                  </Button>
                  <Button className="w-full justify-start" asChild>
                    <Link href="/signup">시작하기</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
