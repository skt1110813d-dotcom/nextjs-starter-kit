import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/features", label: "기능" },
    { href: "/pricing", label: "가격" },
    { href: "/changelog", label: "변경사항" },
    { href: "/roadmap", label: "로드맵" },
  ],
  company: [
    { href: "/about", label: "회사 소개" },
    { href: "/blog", label: "블로그" },
    { href: "/careers", label: "채용" },
    { href: "/contact", label: "연락처" },
  ],
  resources: [
    { href: "/docs", label: "문서" },
    { href: "/guides", label: "가이드" },
    { href: "/help", label: "도움말" },
    { href: "/support", label: "고객지원" },
  ],
  legal: [
    { href: "/privacy", label: "개인정보처리방침" },
    { href: "/terms", label: "이용약관" },
    { href: "/cookies", label: "쿠키 정책" },
  ],
};

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* 브랜드 섹션 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">StarterKit</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              빠른 웹 개발을 위한 모던 스타터킷
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 링크 섹션들 */}
          <div>
            <h3 className="font-semibold mb-4">제품</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">회사</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">리소스</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">법률</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StarterKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
