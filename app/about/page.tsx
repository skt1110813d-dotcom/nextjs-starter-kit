import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Heart, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "목표 지향적",
    description: "개발자의 생산성을 극대화하는 것이 우리의 최우선 목표입니다.",
  },
  {
    icon: Users,
    title: "커뮤니티 중심",
    description: "오픈소스 커뮤니티의 힘을 믿고 함께 성장합니다.",
  },
  {
    icon: Heart,
    title: "사용자 우선",
    description: "개발자 경험을 최우선으로 생각하고 설계합니다.",
  },
  {
    icon: Rocket,
    title: "혁신적",
    description: "최신 기술과 모범 사례를 지속적으로 도입합니다.",
  },
];

const stats = [
  { label: "GitHub Stars", value: "1,000+" },
  { label: "프로젝트", value: "500+" },
  { label: "기여자", value: "50+" },
  { label: "국가", value: "30+" },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 max-w-screen-2xl">
      {/* Hero Section */}
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
        <Badge variant="outline" className="mb-4">
          소개
        </Badge>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          빠른 웹 개발을 위한 최고의 선택
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground">
          StarterKit은 현대적인 웹 애플리케이션을 빠르게 개발할 수 있도록 설계된
          프로덕션 레디 스타터킷입니다.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{stat.label}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">우리의 미션</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              우리는 개발자들이 비즈니스 로직에 집중할 수 있도록 반복적인 설정과 보일러플레이트
              코드를 제거하는 것을 목표로 합니다. 최신 기술 스택과 모범 사례를 사용하여
              누구나 쉽게 고품질의 웹 애플리케이션을 만들 수 있도록 돕습니다.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">핵심 가치</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <CardHeader>
                  <Icon className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
