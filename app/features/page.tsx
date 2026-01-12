import {
  CheckCircle2,
  Smartphone,
  Shield,
  Zap,
  Code2,
  Database,
  Cloud,
  GitBranch,
  Layout,
  Palette,
  Search,
  Settings
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    category: "개발 환경",
    icon: Code2,
    items: [
      {
        title: "TypeScript 지원",
        description: "완전한 타입 안정성과 IntelliSense 지원",
        icon: CheckCircle2,
      },
      {
        title: "Hot Reload",
        description: "빠른 개발을 위한 즉각적인 피드백",
        icon: Zap,
      },
      {
        title: "ESLint & Prettier",
        description: "코드 품질과 일관성 유지",
        icon: Settings,
      },
    ],
  },
  {
    category: "UI/UX",
    icon: Layout,
    items: [
      {
        title: "반응형 디자인",
        description: "모든 디바이스에서 완벽하게 작동",
        icon: Smartphone,
      },
      {
        title: "다크 모드",
        description: "자동 테마 전환 및 사용자 설정",
        icon: Palette,
      },
      {
        title: "재사용 가능한 컴포넌트",
        description: "ShadcnUI 기반의 아름다운 컴포넌트",
        icon: Layout,
      },
    ],
  },
  {
    category: "성능 & 보안",
    icon: Shield,
    items: [
      {
        title: "최적화된 번들",
        description: "자동 코드 스플리팅과 트리 쉐이킹",
        icon: Database,
      },
      {
        title: "보안 헤더",
        description: "XSS, CSRF 등 주요 보안 위협 방어",
        icon: Shield,
      },
      {
        title: "이미지 최적화",
        description: "자동 이미지 최적화와 Lazy Loading",
        icon: Cloud,
      },
    ],
  },
  {
    category: "개발자 경험",
    icon: GitBranch,
    items: [
      {
        title: "Git Hooks",
        description: "커밋 전 자동 린팅과 포맷팅",
        icon: GitBranch,
      },
      {
        title: "디버깅 도구",
        description: "개발자 도구와 에러 추적",
        icon: Search,
      },
      {
        title: "문서화",
        description: "상세한 문서와 예제 코드",
        icon: CheckCircle2,
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="container py-12 md:py-24 max-w-screen-2xl">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
        <Badge variant="outline" className="mb-4">
          기능
        </Badge>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          강력한 기능들
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground">
          현대적인 웹 개발에 필요한 모든 것을 갖춘 완벽한 스타터킷
        </p>
      </div>

      <div className="space-y-16">
        {features.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CategoryIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Card key={item.title}>
                      <CardHeader>
                        <ItemIcon className="h-8 w-8 mb-2 text-primary" />
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
