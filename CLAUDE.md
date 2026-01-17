# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Context
- PRD 문서: @docs/PRD.md
- 개발 로드맵: @docs/ROADMAP.md

## 프로젝트 개요

Next.js 16.1.1, React 19.2.3, TypeScript, TailwindCSS v4, ShadcnUI를 사용한 모던 웹 애플리케이션 스타터킷입니다.
한국어로 작성된 프로덕션 레디 템플릿으로, 빠른 웹 개발을 목표로 합니다.

### 기술 스택
- **프레임워크**: Next.js 16.1.1 (App Router)
- **UI 라이브러리**: React 19.2.3
- **언어**: TypeScript 5
- **스타일링**: TailwindCSS v4 + tw-animate-css
- **컴포넌트**: ShadcnUI (new-york 스타일)
- **아이콘**: Lucide React
- **상태관리**: React Hooks (추후 Zustand 통합 가능)
- **폼 유효성**: Zod
- **데이터베이스**: Notion API (@notionhq/client)
- **PDF 생성**: jsPDF + html2canvas
- **날짜 처리**: date-fns
- **토큰 생성**: nanoid

## 빠른 시작

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint

# ShadcnUI 컴포넌트 추가
npx shadcn@latest add [component-name]
```

## 프로젝트 구조

```
cladue-nextjs-starters/
├── .claude/                    # Claude Code 커스텀 설정
│   ├── agents/                 # 커스텀 에이전트
│   │   └── code-review-specialist.md
│   └── commands/               # 커스텀 커맨드
│       ├── git/                # Git 관련 커맨드
│       │   ├── branch.md
│       │   ├── commit.md
│       │   ├── merge.md
│       │   └── pr.md
│       └── sim-test.md         # 시뮬레이션 테스트
├── app/                        # Next.js App Router
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── features/page.tsx
│   ├── login/page.tsx
│   ├── pricing/page.tsx
│   ├── signup/page.tsx
│   ├── page.tsx                # 홈페이지
│   ├── layout.tsx              # 루트 레이아웃
│   └── globals.css             # 전역 스타일 (TailwindCSS)
├── components/
│   ├── layout/                 # 레이아웃 컴포넌트
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   └── ui/                     # ShadcnUI 컴포넌트
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       └── sheet.tsx
├── hooks/                      # 커스텀 Hooks
│   ├── use-theme.ts
│   ├── use-media-query.ts
│   └── use-mounted.ts
├── lib/                        # 유틸리티 함수
│   ├── utils.ts                # cn() 함수
│   ├── format.ts               # 포맷팅 함수
│   ├── validators.ts           # 유효성 검사 함수
│   ├── api/                    # API 에러 처리
│   │   └── errors.ts
│   ├── auth/                   # 인증 유틸리티
│   │   └── token.ts
│   ├── notion/                 # Notion API 클라이언트
│   │   ├── client.ts           # Notion 클라이언트 설정
│   │   ├── parser.ts           # Notion 응답 파싱
│   │   └── queries.ts          # 데이터베이스 쿼리
│   ├── pdf/                    # PDF 생성
│   │   └── generator.ts
│   ├── types/                  # TypeScript 타입 정의
│   │   ├── api.ts              # API 요청/응답 타입
│   │   ├── invoice.ts          # 견적서 타입
│   │   └── notion.ts           # Notion API 타입
│   └── validations/            # Zod 스키마
│       └── invoice.ts
├── public/                     # 정적 파일
├── .mcp.json                   # MCP 서버 설정
├── components.json             # ShadcnUI 설정
├── package.json
└── tsconfig.json
```

## Path Aliases 및 설정

### tsconfig.json
`@/*` 경로 별칭을 사용하여 절대 경로 import를 지원합니다:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/use-theme"
```

### components.json (ShadcnUI 설정)
- **Style**: "new-york"
- **Base Color**: "neutral"
- **CSS Variables**: true
- **Icon Library**: "lucide"
- **Aliases**:
  - `@/components` - 컴포넌트
  - `@/components/ui` - ShadcnUI 컴포넌트
  - `@/lib` - 유틸리티 함수
  - `@/lib/utils` - cn() 함수
  - `@/hooks` - 커스텀 Hooks

## 페이지 구조

### 구현된 페이지 (7개)
Next.js App Router를 사용하며, 각 폴더에 `page.tsx` 파일로 라우트를 정의합니다.

| 경로 | 파일 위치 | 설명 |
|------|-----------|------|
| `/` | `app/page.tsx` | 홈 (Hero, Features, Tech Stack, CTA 섹션) |
| `/about` | `app/about/page.tsx` | 회사 소개 |
| `/features` | `app/features/page.tsx` | 상세 기능 설명 |
| `/pricing` | `app/pricing/page.tsx` | 가격 정책 및 FAQ |
| `/contact` | `app/contact/page.tsx` | 문의 양식 |
| `/login` | `app/login/page.tsx` | 로그인 (인증 폼 예제) |
| `/signup` | `app/signup/page.tsx` | 회원가입 |

### Header 네비게이션
`components/layout/header.tsx`의 `navItems` 배열 (10-16행):
```typescript
const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/features", label: "기능" },
  { href: "/pricing", label: "가격" },
  { href: "/contact", label: "연락처" },
];
```

## 컴포넌트 시스템

### 레이아웃 컴포넌트
- **`app/layout.tsx`**: 루트 레이아웃 - 모든 페이지에 Header와 Footer를 포함
- **`components/layout/header.tsx`**: 반응형 네비게이션 (데스크톱/모바일 메뉴)
- **`components/layout/footer.tsx`**: 푸터 컴포넌트
- **`components/layout/theme-toggle.tsx`**: 다크/라이트 모드 전환 토글 버튼

### ShadcnUI 컴포넌트
`components/ui/` 디렉토리에 9개의 컴포넌트가 설치되어 있습니다:
- `avatar.tsx` - 사용자 아바타
- `badge.tsx` - 배지/태그
- `button.tsx` - 버튼
- `card.tsx` - 카드 컨테이너
- `dropdown-menu.tsx` - 드롭다운 메뉴
- `input.tsx` - 입력 필드
- `label.tsx` - 레이블
- `navigation-menu.tsx` - 네비게이션 메뉴
- `sheet.tsx` - 사이드 시트 (모바일 메뉴에서 사용)

새 컴포넌트 추가:
```bash
npx shadcn@latest add [component-name]
```

### 커스텀 Hooks
- **`hooks/use-theme.ts`**: 다크/라이트 모드 관리 (localStorage 기반)
  - `theme`, `setTheme`, `toggleTheme` 제공
- **`hooks/use-media-query.ts`**: 반응형 미디어 쿼리 감지
  - CSS 미디어 쿼리를 React 상태로 사용
- **`hooks/use-mounted.ts`**: 하이드레이션 불일치 방지
  - 컴포넌트가 마운트되었는지 확인

### 유틸리티 함수
- **`lib/utils.ts`**: `cn()` 함수 (clsx + tailwind-merge)
  - Tailwind 클래스를 병합하고 중복을 제거
- **`lib/format.ts`**: 날짜/시간, 통화, 숫자 포맷팅 함수
  - `formatDate`, `formatCurrency`, `formatNumber` 등
- **`lib/validators.ts`**: 유효성 검사 함수
  - `validateEmail`, `validatePhone`, `validatePassword` 등

## 테마 시스템

### CSS 변수 기반 테마
`app/globals.css`에서 CSS 변수로 테마 색상을 관리합니다:
- Light/Dark 모드 지원
- `useTheme` Hook으로 프로그래밍 방식으로 테마 전환 가능
- `ThemeToggle` 컴포넌트로 사용자 인터페이스 제공

### 다크 모드 Variant
TailwindCSS v4의 커스텀 variant 사용:
```css
@custom-variant dark (&:is(.dark *));
```

사용 예시:
```tsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">텍스트</p>
</div>
```

### 테마 토글 사용
```typescript
import { useTheme } from "@/hooks/use-theme";

const { theme, setTheme, toggleTheme } = useTheme();

// 테마 전환
toggleTheme();

// 특정 테마 설정
setTheme("dark");
```

## 스타일링 규칙

### TailwindCSS v4
- **PostCSS 기반**: `@tailwindcss/postcss` 사용
- **애니메이션**: `tw-animate-css`로 확장
- **CSS 변수**: 모든 색상과 테마 값을 CSS 변수로 관리
- **Radius**: `--radius` 변수로 모든 border-radius 통일 (기본값: 0.625rem)

### 스타일 우선순위
1. Tailwind 유틸리티 클래스 사용
2. 필요시 CSS 변수 활용
3. 복잡한 스타일은 별도 CSS 파일에 작성

## 개발 가이드

### 새 페이지 추가
1. `app/` 디렉토리에 새 폴더 생성
2. 폴더 내에 `page.tsx` 파일 생성:
   ```tsx
   export default function NewPage() {
     return (
       <div className="container py-8">
         <h1>새 페이지</h1>
       </div>
     );
   }
   ```
3. `components/layout/header.tsx`의 `navItems` 배열에 링크 추가 (10-16행)

### 새 UI 컴포넌트 추가
- **ShadcnUI 컴포넌트**: `npx shadcn@latest add [component-name]`
- **커스텀 컴포넌트**: `components/` 하위에 도메인별 폴더를 만들어 관리
  ```
  components/
  ├── auth/           # 인증 관련 컴포넌트
  ├── dashboard/      # 대시보드 관련 컴포넌트
  └── ui/             # ShadcnUI 컴포넌트
  ```

### 폼 처리
현재는 `useState`를 사용한 클라이언트 사이드 폼 처리를 사용합니다:
```tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 처리 로직
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 필드 */}
    </form>
  );
}
```

**추후 통합 가능**: React Hook Form + Zod (package.json에 추가 필요)

### API 라우트 추가
Next.js App Router의 Route Handlers 사용:
```typescript
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello" });
}
```

## Claude Code 통합

### 커스텀 에이전트
`.claude/agents/` 디렉토리에 커스텀 에이전트를 정의할 수 있습니다.

- **code-review-specialist**: 코드 리뷰 전문 에이전트
  - 코드 품질, 보안, 성능, 접근성 등을 종합적으로 검토
  - 코드 구현 완료 후 사용

### 커스텀 커맨드
`.claude/commands/` 디렉토리에 커스텀 커맨드를 정의할 수 있습니다.

#### Git 커맨드
- **`/git:commit`**: 이모지와 컨벤셔널 커밋 메시지로 커밋 생성
- **`/git:branch`**: 브랜치 생성, 전환, 삭제 등 브랜치 관리
- **`/git:merge`**: 브랜치를 안전하게 병합하고 충돌 해결
- **`/git:pr`**: GitHub Pull Request 생성 및 관리

#### 테스트 커맨드
- **`/sim-test`**: 페이지를 테스트하여 오류를 발견하고 자동으로 수정하는 반복 프로세스

### 사용 예시
```bash
# 커밋 생성
/git:commit -m "기능 추가"

# 브랜치 생성 및 전환
/git:branch -c feature/new-page

# Pull Request 생성
/git:pr

# 시뮬레이션 테스트 실행
/sim-test
```

## MCP 통합

### 설정 파일
`.mcp.json` 파일에서 MCP (Model Context Protocol) 서버를 설정합니다.

### Playwright MCP
브라우저 자동화 및 테스트를 위한 Playwright MCP가 설정되어 있습니다.

**기능**:
- 웹페이지 자동화 테스트
- 스크린샷 캡처
- 폼 입력 및 제출
- 네비게이션 테스트
- 반응형 테스트

**사용 예시**:
```typescript
// Claude Code에서 Playwright 도구를 사용하여 웹페이지 테스트
// 예: "http://localhost:3000 페이지를 열고 로그인 버튼을 클릭해주세요"
```

### Sequential Thinking MCP
체계적인 사고와 문제 해결을 위한 Sequential Thinking MCP가 설정되어 있습니다.

**기능**:
- 복잡한 문제를 단계별로 분석
- 사고 과정을 추적하고 문서화
- 가설 생성 및 검증
- 대안적 접근 방식 탐색

**사용 예시**:
```typescript
// Claude Code에서 "use sequential thinking"을 요청하여 활성화
// 복잡한 아키텍처 설계나 디버깅 시 유용
```

## 코드 작성 규칙

### 언어 및 문서화
- **코드 주석**: 한국어로 작성
- **문서화**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **변수명/함수명**: 영어 (국제 코드 표준 준수)
- **타입/인터페이스명**: 영어 (PascalCase)

### 코드 스타일
```typescript
// ✅ 좋은 예시
interface UserProfile {
  name: string;        // 영어 속성명
  email: string;
}

// 함수는 camelCase
function validateUserInput(data: UserProfile): boolean {
  // 주석은 한국어로
  // 사용자 입력 유효성 검사
  return data.name.length > 0 && data.email.includes("@");
}

// ❌ 나쁜 예시
interface 사용자프로필 {  // 타입명은 영어로
  이름: string;        // 속성명은 영어로
}
```

### 커밋 메시지 규칙
```bash
# 한국어로 작성하되, 명확하고 간결하게
git commit -m "로그인 페이지 반응형 레이아웃 개선"
git commit -m "버그 수정: 다크 모드에서 버튼 색상 오류"
git commit -m "기능 추가: 사용자 프로필 아바타 업로드"
```

## 알려진 이슈 및 개선 사항

### 버전 표기 불일치
**문제**: `app/page.tsx` 40행에 "Next.js 15"로 표기되어 있지만, 실제 프로젝트는 Next.js 16.1.1을 사용합니다.

**수정 방법**:
```tsx
// app/page.tsx (40행)
// 변경 전
{ name: "Next.js 15", description: "최신 React 프레임워크" },

// 변경 후
{ name: "Next.js 16", description: "최신 React 프레임워크" },
```

### 추후 통합 가능한 라이브러리
현재 프로젝트에는 포함되지 않았지만, 필요시 추가 가능한 라이브러리:
- **Zustand**: 상태 관리
- **React Hook Form**: 폼 관리
- **Zod**: 스키마 유효성 검사
- **TanStack Query**: 서버 상태 관리
- **Framer Motion**: 애니메이션

## 배포

### Vercel 배포 (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 수동 배포
```bash
# 빌드
npm run build

# 빌드 결과는 .next/ 디렉토리에 생성됨
# Node.js 서버에서 실행
npm start
```

## 추가 정보

### 환경 변수
`.env.local` 파일을 생성하여 환경 변수를 관리합니다:
```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

### 성능 최적화
- **Image Optimization**: Next.js의 `<Image>` 컴포넌트 사용
- **Font Optimization**: `next/font`로 폰트 최적화
- **Code Splitting**: 자동으로 코드 분할
- **SSR/SSG**: App Router의 Server Components 활용

### 보안
- **CSP**: Content Security Policy 설정 (필요 시)
- **환경 변수**: 민감한 정보는 `.env.local`에 저장 (Git 제외)
- **API 보호**: API Route에서 인증/권한 검증

---

## 견적서 시스템 (Invoice System)

### 개요
Notion 데이터베이스를 백엔드로 활용하여 견적서 웹 조회 및 PDF 다운로드를 제공하는 시스템입니다.

### 주요 기능
- **견적서 목록 조회**: 검색, 필터링, 정렬, 페이지네이션
- **견적서 상세 보기**: 전체 정보 표시 (고객 정보, 항목, 금액)
- **PDF 다운로드**: 브랜드 템플릿 적용된 PDF 생성
- **토큰 기반 인증**: 고유 URL 토큰으로 접근 제어

### 환경 변수 설정
`.env.example`을 `.env.local`로 복사하여 설정:
```bash
cp .env.example .env.local
```

필수 환경 변수:
- `NOTION_API_KEY`: Notion Integration API 키
- `NOTION_DATABASE_ID`: 견적서 데이터베이스 ID
- `NEXT_PUBLIC_BASE_URL`: 사이트 기본 URL

### 타입 시스템
주요 타입 정의는 `lib/types/` 디렉토리에 있습니다:
```typescript
import type { Invoice, InvoiceSummary, ApiResponse } from "@/lib/types";
```

### Notion API 사용
```typescript
import { getInvoices, getInvoiceById, validateToken } from "@/lib/notion";

// 견적서 목록 조회
const { invoices, pagination } = await getInvoices({
  token: "access-token",
  search: "검색어",
  statusFilter: ["Sent", "Approved"],
  sort: "date_desc",
  page: 1,
  limit: 20,
});

// 견적서 상세 조회
const invoice = await getInvoiceById("notion-page-id", "access-token");

// 토큰 검증
const isValid = await validateToken("access-token");
```

### PDF 생성
```typescript
import { generateInvoicePdf } from "@/lib/pdf";

// HTML 요소를 PDF로 변환하여 다운로드
const result = await generateInvoicePdf("invoice-content", invoice, {
  scale: 2,
  margin: 10,
});
```

### 유효성 검사 (Zod)
```typescript
import { getInvoicesParamsSchema, invoiceSchema } from "@/lib/validations";

// 요청 파라미터 검증
const result = getInvoicesParamsSchema.safeParse(queryParams);
if (result.success) {
  const { token, search, status } = result.data;
}
```

### 에러 처리
```typescript
import { handleApiError, Errors } from "@/lib/api";

// API Route에서 에러 처리
try {
  // 비즈니스 로직
} catch (error) {
  return handleApiError(error);
}

// 사전 정의된 에러 생성
throw Errors.unauthorized("인증이 필요합니다");
throw Errors.notFound("견적서를 찾을 수 없습니다");
```

### 인증 유틸리티
```typescript
import { generateAccessToken, isValidTokenFormat, generateAccessUrl } from "@/lib/auth";

// 새 토큰 생성
const token = generateAccessToken(32);

// 토큰 형식 검증
if (isValidTokenFormat(token)) {
  // 유효한 형식
}

// 접근 URL 생성
const url = generateAccessUrl(token);
// → https://example.com/invoices?token=xxx
```

---

**마지막 업데이트**: 2026-01-16
**프로젝트 버전**: 0.1.0
