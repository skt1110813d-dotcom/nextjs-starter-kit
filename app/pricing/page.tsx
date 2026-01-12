import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "무료",
    price: "0",
    description: "개인 프로젝트와 학습용",
    features: [
      "기본 컴포넌트",
      "커뮤니티 지원",
      "기본 문서",
      "GitHub 액세스",
      "무제한 프로젝트",
    ],
    cta: "시작하기",
    highlighted: false,
  },
  {
    name: "프로",
    price: "29,000",
    description: "전문 개발자와 팀용",
    features: [
      "모든 무료 기능",
      "프리미엄 컴포넌트",
      "우선 지원",
      "고급 문서",
      "상업적 사용 가능",
      "프로젝트 템플릿",
      "정기 업데이트",
    ],
    cta: "프로 시작하기",
    highlighted: true,
  },
  {
    name: "엔터프라이즈",
    price: "문의",
    description: "대규모 조직용",
    features: [
      "모든 프로 기능",
      "전담 지원",
      "맞춤 개발",
      "SLA 보장",
      "온프레미스 옵션",
      "교육 세션",
      "컨설팅",
    ],
    cta: "문의하기",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-24 max-w-screen-2xl">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center mb-16">
        <Badge variant="outline" className="mb-4">
          가격
        </Badge>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          간단하고 투명한 가격
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground">
          프로젝트 규모에 맞는 최적의 플랜을 선택하세요
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.highlighted ? "border-primary shadow-lg" : ""}
          >
            <CardHeader>
              {plan.highlighted && (
                <Badge className="w-fit mb-2">추천</Badge>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">
                  {plan.price === "문의" ? "" : "₩"}
                  {plan.price}
                </span>
                {plan.price !== "문의" && (
                  <span className="text-muted-foreground">/월</span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href="/signup">{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">환불 정책이 있나요?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                네, 구매 후 30일 이내에 100% 환불이 가능합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">플랜을 변경할 수 있나요?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">상업적 사용이 가능한가요?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                프로 플랜 이상에서는 제한 없이 상업적으로 사용 가능합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
