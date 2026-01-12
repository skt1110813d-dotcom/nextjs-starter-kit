import Link from "next/link";
import { ArrowRight, Zap, Code, Palette, Lock, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "빠른 개발",
    description: "사전 구성된 컴포넌트와 유틸리티로 개발 시간을 단축하세요.",
  },
  {
    icon: Code,
    title: "타입 안정성",
    description: "TypeScript로 작성되어 타입 안정성과 자동 완성을 제공합니다.",
  },
  {
    icon: Palette,
    title: "모던 디자인",
    description: "TailwindCSS와 ShadcnUI로 아름다운 UI를 손쉽게 구현하세요.",
  },
  {
    icon: Lock,
    title: "보안",
    description: "최신 보안 모범 사례가 적용된 안전한 코드베이스입니다.",
  },
  {
    icon: Rocket,
    title: "성능 최적화",
    description: "Next.js의 최신 기능으로 최고의 성능을 제공합니다.",
  },
  {
    icon: Users,
    title: "커뮤니티",
    description: "활발한 커뮤니티와 지속적인 업데이트를 받을 수 있습니다.",
  },
];

const techStack = [
  { name: "Next.js 15", description: "최신 React 프레임워크" },
  { name: "TypeScript", description: "타입 안정성" },
  { name: "TailwindCSS", description: "유틸리티 기반 CSS" },
  { name: "ShadcnUI", description: "재사용 가능한 컴포넌트" },
  { name: "Lucide React", description: "아이콘 라이브러리" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24 md:py-32 max-w-screen-2xl">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            빠른 웹 개발을 위한
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              모던 스타터킷
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Next.js, TypeScript, TailwindCSS, ShadcnUI로 구성된 프로덕션 레디 스타터킷.
            지금 바로 시작하세요.
          </p>
          <div className="flex gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/signup">
                시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com" target="_blank">
                GitHub에서 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 md:py-32 bg-muted/50">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
              주요 기능
            </h2>
            <p className="max-w-[750px] text-lg text-muted-foreground">
              개발자 경험을 최우선으로 고려한 강력한 기능들
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <Icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container py-24 md:py-32 max-w-screen-2xl">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            최신 기술 스택
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground">
            검증된 최신 기술들로 구성된 스택
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <Card key={tech.name}>
              <CardHeader>
                <CardTitle className="text-lg">{tech.name}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 md:py-32 bg-muted/50">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            지금 바로 시작하세요
          </h2>
          <p className="max-w-[750px] text-lg text-muted-foreground">
            몇 분 안에 프로젝트를 시작하고 빠르게 개발하세요
          </p>
          <div className="flex gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/signup">무료로 시작하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
