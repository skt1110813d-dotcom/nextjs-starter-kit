# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 15, TypeScript, TailwindCSS v4, ShadcnUI를 사용한 모던 웹 애플리케이션 스타터킷입니다.
한국어로 작성된 프로덕션 레디 템플릿으로, 빠른 웹 개발을 목표로 합니다.

## 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 아키텍처 및 구조

### Path Aliases
`tsconfig.json`에서 `@/*` 경로 별칭을 사용하여 절대 경로 import를 지원합니다:
- `@/components` - 컴포넌트
- `@/lib` - 유틸리티 함수
- `@/hooks` - 커스텀 Hooks
- `@/components/ui` - ShadcnUI 컴포넌트

### 레이아웃 구조
- `app/layout.tsx`: 루트 레이아웃으로 모든 페이지에 Header와 Footer를 포함
- `components/layout/header.tsx`: 반응형 네비게이션 (데스크톱/모바일)
- `components/layout/footer.tsx`: 푸터 컴포넌트
- `components/layout/theme-toggle.tsx`: 다크/라이트 모드 전환 컴포넌트

### 페이지 구조
Next.js App Router를 사용하며, 각 폴더에 `page.tsx` 파일로 라우트를 정의합니다:
- `/` - 홈 (Hero, Features, Tech Stack, CTA 섹션)
- `/about` - 회사 소개
- `/features` - 상세 기능 설명
- `/pricing` - 가격 정책 및 FAQ
- `/contact` - 문의 양식
- `/login` - 로그인
- `/signup` - 회원가입

### 컴포넌트 시스템

#### ShadcnUI 통합
`components.json` 설정:
- Style: "new-york"
- Base Color: "neutral"
- CSS Variables: true
- Icon Library: lucide-react

새 컴포넌트 추가:
```bash
npx shadcn@latest add [component-name]
```

#### 커스텀 Hooks
- `hooks/use-theme.ts`: 다크/라이트 모드 관리 (localStorage 기반)
- `hooks/use-media-query.ts`: 반응형 미디어 쿼리 감지
- `hooks/use-mounted.ts`: 하이드레이션 불일치 방지

#### 유틸리티 함수
- `lib/utils.ts`: cn() 함수 (clsx + tailwind-merge)
- `lib/format.ts`: 날짜/시간, 통화, 숫자 포맷팅 함수
- `lib/validators.ts`: 이메일, 전화번호, 비밀번호 등 유효성 검사 함수

### 테마 시스템
`app/globals.css`에서 CSS 변수로 테마 색상을 관리합니다:
- Light/Dark 모드 지원
- `useTheme` Hook으로 프로그래밍 방식으로 테마 전환 가능
- `ThemeToggle` 컴포넌트로 사용자 인터페이스 제공

### 스타일링 규칙
- TailwindCSS v4 사용 (PostCSS 기반)
- tw-animate-css로 애니메이션 확장
- `@custom-variant dark (&:is(.dark *))` 커스텀 다크 모드 variant

## 개발 가이드

### 새 페이지 추가
1. `app/` 디렉토리에 새 폴더 생성
2. 폴더 내에 `page.tsx` 파일 생성
3. `components/layout/header.tsx`의 `navItems` 배열에 링크 추가

### 새 UI 컴포넌트 추가
공통 UI 컴포넌트는 `components/ui/`에 위치하며, 대부분 ShadcnUI에서 생성됩니다.
커스텀 컴포넌트가 필요한 경우 `components/` 하위에 도메인별 폴더를 만들어 관리합니다.

### 폼 처리
- 현재는 클라이언트 사이드 폼 처리 (useState)
- 추후 React Hook Form + Zod 통합 가능 (package.json에 명시된 스택)

### 코드 작성 규칙
- 모든 주석과 문서는 **한국어**로 작성
- 변수명/함수명은 영어 (코드 표준)
- 커밋 메시지는 한국어
