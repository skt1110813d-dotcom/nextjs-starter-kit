# StarterKit - 모던 웹 스타터킷

Next.js, TypeScript, TailwindCSS, ShadcnUI를 사용한 프로덕션 레디 웹 애플리케이션 스타터킷입니다.

## 🚀 주요 기능

- ⚡ **Next.js 15** - 최신 React 프레임워크
- 🔷 **TypeScript** - 타입 안정성
- 🎨 **TailwindCSS v4** - 유틸리티 기반 CSS
- 🧩 **ShadcnUI** - 재사용 가능한 컴포넌트
- 🎯 **Lucide React** - 아름다운 아이콘
- 🌙 **다크 모드** - 라이트/다크 테마 지원
- 📱 **반응형 디자인** - 모든 디바이스 지원

## 📦 포함된 컴포넌트

### 레이아웃 컴포넌트
- `Header` - 반응형 헤더 (데스크톱/모바일 네비게이션)
- `Footer` - 링크와 소셜 미디어가 포함된 푸터
- `ThemeToggle` - 다크/라이트 모드 전환

### UI 컴포넌트 (ShadcnUI)
- Button, Card, Input, Label
- Badge, Avatar
- Dropdown Menu, Navigation Menu
- Sheet (모바일 메뉴)

## 🛠️ 설치 및 시작

### 필수 요구사항
- Node.js 18.17 이상
- npm, yarn, 또는 pnpm

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 📁 프로젝트 구조

```
.
├── app/                    # Next.js 앱 디렉토리
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   ├── about/             # 소개 페이지
│   ├── features/          # 기능 페이지
│   ├── pricing/           # 가격 페이지
│   ├── contact/           # 연락처 페이지
│   ├── login/             # 로그인 페이지
│   └── signup/            # 회원가입 페이지
├── components/            # React 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── ui/               # ShadcnUI 컴포넌트
├── hooks/                # 커스텀 React Hooks
│   ├── use-theme.ts      # 테마 관리
│   ├── use-media-query.ts # 미디어 쿼리
│   └── use-mounted.ts    # 마운트 상태
├── lib/                  # 유틸리티 함수
│   ├── utils.ts          # 공통 유틸리티
│   ├── format.ts         # 포맷팅 함수
│   └── validators.ts     # 유효성 검사
└── public/               # 정적 파일
```

## 🎨 커스터마이징

### 테마 색상 변경

`app/globals.css` 파일에서 CSS 변수를 수정하여 테마 색상을 변경할 수 있습니다.

### 새 페이지 추가

1. `app/` 디렉토리에 새 폴더 생성
2. 폴더 내에 `page.tsx` 파일 생성
3. `components/layout/header.tsx`의 `navItems` 배열에 링크 추가

### 새 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

## 📚 유틸리티 함수

### Format (lib/format.ts)
- `formatDate()` - 날짜 포맷팅
- `formatDateTime()` - 날짜/시간 포맷팅
- `formatCurrency()` - 통화 포맷팅
- `formatNumber()` - 숫자 포맷팅
- `formatRelativeTime()` - 상대 시간 표시

### Validators (lib/validators.ts)
- `isValidEmail()` - 이메일 유효성 검사
- `isValidPhoneNumber()` - 전화번호 유효성 검사
- `isStrongPassword()` - 비밀번호 강도 검사
- `isValidUrl()` - URL 유효성 검사

## 🪝 커스텀 Hooks

### useTheme
다크/라이트 테마 관리:

```tsx
import { useTheme } from "@/hooks/use-theme";

const { theme, toggleTheme, setTheme } = useTheme();
```

### useMediaQuery
미디어 쿼리 감지:

```tsx
import { useIsMobile, useIsDesktop } from "@/hooks/use-media-query";

const isMobile = useIsMobile();
const isDesktop = useIsDesktop();
```

## 🚀 배포

### Vercel (권장)

```bash
npm run build
```

[Vercel](https://vercel.com)에 배포하는 것이 가장 쉽습니다.

### 기타 플랫폼

프로덕션 빌드:

```bash
npm run build
npm start
```

## 📄 라이선스

MIT License

---

Made with ❤️ by StarterKit Team
