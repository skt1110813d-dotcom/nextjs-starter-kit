# 프로젝트 로드맵

**프로젝트명**: 견적서 웹 조회 및 PDF 다운로드 시스템
**버전**: 1.0.0
**최종 수정일**: 2026-01-17
**상태**: 진행 중

---

## 프로젝트 개요

Notion 데이터베이스를 백엔드로 활용하여 클라이언트에게 전문적인 견적서 웹 조회 및 PDF 다운로드 경험을 제공하는 시스템입니다.

**핵심 가치 제안**:
- 노션 계정 없이도 고유 링크로 견적서 조회 가능
- 원클릭 PDF 다운로드
- 전문적이고 일관된 브랜드 경험
- 실시간 업데이트 반영

**비즈니스 목표**:
- 견적서 공유 프로세스 간소화 (5분 -> 30초)
- 클라이언트 경험 개선 (NPS 8+ 달성)
- 견적서 승인률 15% 향상

---

## 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| **프레임워크** | Next.js (App Router) | 16.1.1 |
| **UI 라이브러리** | React | 19.2.3 |
| **언어** | TypeScript | 5.x |
| **스타일링** | TailwindCSS | v4 |
| **컴포넌트** | ShadcnUI | new-york |
| **아이콘** | Lucide React | 최신 |
| **데이터베이스** | Notion API | @notionhq/client 2.x |
| **PDF 생성** | jsPDF + html2canvas | 2.5.x / 1.4.x |
| **날짜 처리** | date-fns | 3.x |
| **유효성 검사** | Zod | 3.x |
| **토큰 생성** | nanoid | 5.x |
| **배포** | Vercel | - |

---

## 현재 프로젝트 상태

### 완료된 항목 (Phase 1 일부)

| 항목 | 상태 | 설명 |
|------|------|------|
| 프로젝트 초기 설정 | 완료 | Next.js 16, React 19, TypeScript 설정 |
| 필수 패키지 설치 | 완료 | @notionhq/client, date-fns, zod, nanoid, jspdf, html2canvas |
| TypeScript 타입 정의 | 완료 | `lib/types/` - Invoice, API 타입 정의 |
| Notion 클라이언트 설정 | 완료 | `lib/notion/client.ts` - 싱글톤 클라이언트 |
| Notion 데이터 파서 | 완료 | `lib/notion/parser.ts` - 데이터 변환 함수 |
| Notion 쿼리 함수 | 완료 | `lib/notion/queries.ts` - getInvoices, getInvoiceById |
| 인증 유틸리티 | 완료 | `lib/auth/token.ts` - 토큰 생성 및 검증 |
| PDF 생성기 | 완료 | `lib/pdf/generator.ts` - PDF 생성 함수 |
| API 에러 처리 | 완료 | `lib/api/errors.ts` - 에러 핸들링 |
| Zod 스키마 | 완료 | `lib/validations/invoice.ts` - 유효성 검사 |

### 미완료 항목

| 항목 | 우선순위 | 예상 공수 |
|------|----------|----------|
| 견적서 목록 페이지 UI | P0 | 2일 |
| 견적서 상세 페이지 UI | P0 | 2일 |
| API Routes 구현 | P0 | 1일 |
| Middleware 설정 | P0 | 0.5일 |
| 에러 페이지 구현 | P1 | 0.5일 |
| 반응형 디자인 | P1 | 2일 |
| PDF 템플릿 개선 | P1 | 1일 |
| 테스트 작성 | P2 | 2일 |
| 배포 설정 | P2 | 0.5일 |

---

## 개발 단계 (Phases)

### Phase 1: 기반 구조 완성 (1-2일)

**목표**: API Routes 및 Middleware 설정 완료, 라우팅 구조 확립
**예상 기간**: 1-2일
**상태**: 진행 중

#### 1.1 환경 설정 검증

- [x] 환경 변수 템플릿 생성 (`.env.example`)
  - 예상 시간: 0.5h
  - 우선순위: High
  - 완료 기준: `.env.example` 파일 생성, 필수 변수 문서화

- [ ] Notion Integration 연동 테스트
  - 예상 시간: 1h
  - 우선순위: High
  - 의존성: Notion API Key, Database ID
  - 완료 기준: Notion API 호출 성공, 더미 데이터 조회 확인

#### 1.2 API Routes 구현

- [ ] 견적서 목록 API 구현 (`app/api/invoices/route.ts`)
  - 예상 시간: 2h
  - 우선순위: High
  - 의존성: Notion 연동 테스트 완료
  - 완료 기준:
    - `GET /api/invoices` 엔드포인트 동작
    - 토큰 기반 인증 적용
    - 검색, 필터링, 정렬, 페이지네이션 파라미터 지원
    - 에러 응답 형식 준수

- [ ] 견적서 상세 API 구현 (`app/api/invoices/[id]/route.ts`)
  - 예상 시간: 1.5h
  - 우선순위: High
  - 의존성: 목록 API 완료
  - 완료 기준:
    - `GET /api/invoices/[id]` 엔드포인트 동작
    - 토큰 검증 및 권한 확인
    - 존재하지 않는 ID에 대해 404 반환

#### 1.3 Middleware 설정

- [ ] 토큰 검증 Middleware 구현 (`middleware.ts`)
  - 예상 시간: 1.5h
  - 우선순위: High
  - 완료 기준:
    - `/invoices` 경로에 대해 토큰 검증 수행
    - 토큰 없음: 401 페이지로 리다이렉트
    - 토큰 무효: 403 페이지로 리다이렉트
    - 유효한 토큰: 요청 계속 진행

#### 1.4 에러 페이지 구현

- [ ] 401 Unauthorized 페이지 (`app/401/page.tsx`)
  - 예상 시간: 0.5h
  - 우선순위: Medium
  - 완료 기준: "인증이 필요합니다" 메시지 표시

- [ ] 403 Forbidden 페이지 (`app/403/page.tsx`)
  - 예상 시간: 0.5h
  - 우선순위: Medium
  - 완료 기준: "접근 권한이 없습니다" 메시지 표시

- [ ] 404 Not Found 페이지 (`app/not-found.tsx`)
  - 예상 시간: 0.5h
  - 우선순위: Medium
  - 완료 기준: "페이지를 찾을 수 없습니다" 메시지 표시

**Phase 1 완료 기준**:
- Notion API로 데이터 조회 성공
- API Routes 정상 동작
- Middleware 토큰 검증 동작
- TypeScript 컴파일 에러 없음

---

### Phase 2: 핵심 기능 구현 (3-4일)

**목표**: 견적서 목록 및 상세 페이지 UI 구현
**예상 기간**: 3-4일
**상태**: 대기 중

#### 2.1 견적서 목록 페이지

- [ ] 서버 컴포넌트 구현 (`app/invoices/page.tsx`)
  - 예상 시간: 3h
  - 우선순위: High
  - 의존성: API Routes 완료
  - 완료 기준:
    - URL 토큰 파라미터 처리
    - 서버 사이드 데이터 페칭
    - 로딩 상태 처리 (Suspense)

- [ ] 검색 컴포넌트 구현 (`components/invoice/search-bar.tsx`)
  - 예상 시간: 2h
  - 우선순위: High
  - 완료 기준:
    - 디바운싱 300ms 적용
    - 검색어 URL 쿼리 동기화
    - 빈 검색어 처리

- [ ] 필터 컴포넌트 구현 (`components/invoice/filters.tsx`)
  - 예상 시간: 2h
  - 우선순위: High
  - 완료 기준:
    - 상태 필터 (Draft/Sent/Approved/Rejected)
    - 날짜 범위 필터 (프리셋 + 커스텀)
    - 필터 상태 URL 동기화

- [ ] 정렬 컴포넌트 구현 (`components/invoice/sort-select.tsx`)
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - 정렬 옵션 드롭다운
    - URL 쿼리 동기화

- [ ] 견적서 카드 컴포넌트 구현 (`components/invoice/invoice-card.tsx`)
  - 예상 시간: 2h
  - 우선순위: High
  - 완료 기준:
    - 견적번호, 고객명, 발행일, 총액, 상태 표시
    - 상태별 배지 색상 (Gray/Blue/Green/Red)
    - 상세보기, PDF 다운로드 버튼

- [ ] 페이지네이션 컴포넌트 구현 (`components/invoice/pagination.tsx`)
  - 예상 시간: 1.5h
  - 우선순위: High
  - 완료 기준:
    - 이전/다음 버튼
    - 페이지 번호 표시 (최대 5개)
    - 총 건수 표시
    - URL 쿼리 동기화

- [ ] 빈 상태 컴포넌트 구현 (`components/invoice/empty-state.tsx`)
  - 예상 시간: 0.5h
  - 우선순위: Medium
  - 완료 기준:
    - 검색 결과 없음 메시지
    - 견적서 없음 메시지

#### 2.2 견적서 상세 페이지

- [ ] 서버 컴포넌트 구현 (`app/invoices/[id]/page.tsx`)
  - 예상 시간: 3h
  - 우선순위: High
  - 의존성: API Routes 완료
  - 완료 기준:
    - ID 및 토큰으로 데이터 조회
    - 존재하지 않는 견적서 처리 (not-found)

- [ ] 견적서 헤더 컴포넌트 (`components/invoice/invoice-header.tsx`)
  - 예상 시간: 1.5h
  - 우선순위: High
  - 완료 기준:
    - 견적번호, 발행일, 유효기간, 상태 표시
    - 목록으로 돌아가기 버튼
    - PDF 다운로드, 인쇄 버튼

- [ ] 고객 정보 섹션 (`components/invoice/client-info.tsx`)
  - 예상 시간: 1h
  - 우선순위: High
  - 완료 기준:
    - 고객명, 회사명, 이메일 표시

- [ ] 견적 항목 테이블 (`components/invoice/invoice-items-table.tsx`)
  - 예상 시간: 2h
  - 우선순위: High
  - 완료 기준:
    - 항목 설명, 수량, 단가, 금액 표시
    - 통화 포맷팅 (원화)
    - 반응형 테이블 (모바일 카드 변환)

- [ ] 금액 요약 컴포넌트 (`components/invoice/pricing-summary.tsx`)
  - 예상 시간: 1h
  - 우선순위: High
  - 완료 기준:
    - 소계, 세금 (세율 포함), 총액 표시
    - 총액 시각적 강조

- [ ] 추가 정보 섹션 (`components/invoice/additional-info.tsx`)
  - 예상 시간: 0.5h
  - 우선순위: Medium
  - 완료 기준:
    - 특이사항, 계약조건 표시 (있는 경우만)

**Phase 2 완료 기준**:
- 목록 페이지에서 Notion 데이터 표시
- 상세 페이지에서 모든 정보 표시
- 검색, 필터링, 정렬, 페이지네이션 동작
- 유효하지 않은 토큰 접근 시 에러 페이지 표시

---

### Phase 3: PDF 생성 및 다운로드 (2-3일)

**목표**: 고품질 PDF 생성 및 다운로드 기능 완성
**예상 기간**: 2-3일
**상태**: 대기 중

#### 3.1 PDF 템플릿 디자인

- [ ] PDF 전용 컴포넌트 구현 (`components/pdf/invoice-template.tsx`)
  - 예상 시간: 3h
  - 우선순위: High
  - 완료 기준:
    - A4 용지 크기 최적화 (210mm x 297mm)
    - 회사 로고 영역
    - 브랜드 컬러 적용
    - 인쇄 시 잘림 없음

- [ ] PDF 스타일 시트 (`components/pdf/pdf-styles.css`)
  - 예상 시간: 1.5h
  - 우선순위: High
  - 완료 기준:
    - @media print 스타일 정의
    - 페이지 브레이크 최적화
    - 네비게이션, 버튼 숨김

#### 3.2 PDF 다운로드 기능

- [ ] PDF 다운로드 버튼 컴포넌트 (`components/invoice/pdf-download-button.tsx`)
  - 예상 시간: 2h
  - 우선순위: High
  - 의존성: PDF 템플릿 완료
  - 완료 기준:
    - 클릭 시 PDF 생성 및 다운로드
    - 로딩 인디케이터 표시
    - 파일명 형식: `견적서_[견적번호]_[고객명].pdf`

- [ ] PDF 생성 로딩 모달 (`components/invoice/pdf-loading-modal.tsx`)
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - 생성 중 스피너 표시
    - 생성 완료/실패 메시지

- [ ] PDF 생성 에러 처리
  - 예상 시간: 1h
  - 우선순위: High
  - 완료 기준:
    - 에러 발생 시 Toast 알림
    - 재시도 버튼 제공

#### 3.3 성능 최적화

- [ ] 이미지 압축 및 최적화
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - PDF 파일 크기 10MB 이하
    - 로고 이미지 최적화

- [ ] PDF 생성 시간 측정 및 개선
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - 평균 생성 시간 5초 이내
    - 성능 로깅 추가

**Phase 3 완료 기준**:
- PDF 생성 시간 5초 이내
- PDF 내용이 웹 페이지와 일치
- 모든 브라우저에서 정상 작동 (Chrome, Firefox, Safari, Edge)
- 모바일에서도 PDF 다운로드 정상 동작

---

### Phase 4: UI/UX 개선 (2-3일)

**목표**: 반응형 디자인 및 접근성 개선
**예상 기간**: 2-3일
**상태**: 대기 중

#### 4.1 반응형 디자인

- [ ] 모바일 레이아웃 조정 (768px 이하)
  - 예상 시간: 3h
  - 우선순위: High
  - 완료 기준:
    - 단일 컬럼 레이아웃
    - 터치 친화적 버튼 (최소 44x44px)
    - 가로 스크롤 없음

- [ ] 태블릿 레이아웃 조정 (768px ~ 1199px)
  - 예상 시간: 1.5h
  - 우선순위: Medium
  - 완료 기준:
    - 2 컬럼 그리드 (목록 페이지)
    - 적절한 여백 조정

- [ ] 모바일 필터 Sheet 구현
  - 예상 시간: 1.5h
  - 우선순위: Medium
  - 완료 기준:
    - 필터를 Sheet (사이드 패널)로 표시
    - 필터 버튼으로 토글

- [ ] 모바일 테이블 카드 변환
  - 예상 시간: 1.5h
  - 우선순위: High
  - 완료 기준:
    - 항목 테이블을 카드 리스트로 변환
    - 정보 가독성 유지

#### 4.2 다크 모드 지원

- [ ] 다크 모드 색상 팔레트 정의
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - 모든 색상 변수 다크 모드 대응
    - 상태 배지 색상 다크 모드 대응

- [ ] 견적서 컴포넌트 다크 모드 적용
  - 예상 시간: 2h
  - 우선순위: Medium
  - 완료 기준:
    - 모든 견적서 관련 컴포넌트 다크 모드 지원
    - 대비 비율 4.5:1 이상 유지

#### 4.3 로딩 상태 및 피드백

- [ ] 스켈레톤 UI 구현
  - 예상 시간: 2h
  - 우선순위: Medium
  - 완료 기준:
    - 목록 페이지: 카드 스켈레톤
    - 상세 페이지: 섹션별 스켈레톤

- [ ] Toast 알림 시스템 (`components/ui/toast`)
  - 예상 시간: 1h
  - 우선순위: Medium
  - 의존성: ShadcnUI Toast 컴포넌트
  - 완료 기준:
    - 성공/오류 메시지 표시
    - 자동 닫힘 (5초)

#### 4.4 접근성 개선

- [ ] ARIA 레이블 추가
  - 예상 시간: 1.5h
  - 우선순위: Medium
  - 완료 기준:
    - 모든 인터랙티브 요소에 적절한 ARIA 레이블
    - aria-live 영역 설정 (상태 변경 알림)

- [ ] 키보드 네비게이션 검증
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - Tab 키로 모든 요소 접근 가능
    - Enter/Space로 버튼 활성화
    - Esc로 모달 닫기
    - 포커스 표시 명확

- [ ] 색상 대비 검증
  - 예상 시간: 0.5h
  - 우선순위: Medium
  - 완료 기준:
    - 모든 텍스트 대비 비율 4.5:1 이상
    - 큰 텍스트 대비 비율 3:1 이상

**Phase 4 완료 기준**:
- 모든 기기에서 UI 정상 표시
- Lighthouse Accessibility 점수 90+
- 다크 모드 완벽 지원
- WCAG 2.1 AA 수준 준수

---

### Phase 5: 테스트 및 배포 (1-2일)

**목표**: 품질 보증 및 프로덕션 배포
**예상 기간**: 1-2일
**상태**: 대기 중

#### 5.1 단위 테스트

- [ ] 데이터 파싱 함수 테스트 (`lib/notion/parser.test.ts`)
  - 예상 시간: 1.5h
  - 우선순위: Medium
  - 완료 기준:
    - parseNotionInvoice 함수 테스트
    - parseNotionInvoiceSummaries 함수 테스트
    - 엣지 케이스 처리 확인

- [ ] 금액 계산 로직 테스트 (`lib/format.test.ts`)
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - formatCurrency 함수 테스트
    - 통화 포맷팅 정확성 확인

- [ ] 토큰 유효성 검사 테스트 (`lib/auth/token.test.ts`)
  - 예상 시간: 1h
  - 우선순위: Medium
  - 완료 기준:
    - generateAccessToken 함수 테스트
    - isValidTokenFormat 함수 테스트

#### 5.2 통합 테스트

- [ ] API Route 테스트
  - 예상 시간: 2h
  - 우선순위: Medium
  - 완료 기준:
    - 유효한 토큰으로 목록 조회 성공
    - 유효한 토큰으로 상세 조회 성공
    - 무효한 토큰 시 401/403 반환

- [ ] Notion API 연동 테스트 (Mock)
  - 예상 시간: 1.5h
  - 우선순위: Medium
  - 완료 기준:
    - Notion API 응답 Mock 구성
    - 연동 실패 시 에러 처리 확인

#### 5.3 E2E 테스트 (Playwright)

- [ ] 견적서 조회 플로우 테스트
  - 예상 시간: 2h
  - 우선순위: Low
  - 완료 기준:
    - 목록 페이지 접속 및 카드 표시
    - 검색/필터링/정렬 동작
    - 상세 페이지 이동

- [ ] PDF 다운로드 플로우 테스트
  - 예상 시간: 1h
  - 우선순위: Low
  - 완료 기준:
    - PDF 다운로드 버튼 클릭
    - 파일 다운로드 확인

#### 5.4 배포 설정

- [ ] Vercel 프로젝트 설정
  - 예상 시간: 0.5h
  - 우선순위: High
  - 완료 기준:
    - GitHub 리포지토리 연결
    - 자동 배포 설정

- [ ] 환경 변수 설정 (Production)
  - 예상 시간: 0.5h
  - 우선순위: High
  - 완료 기준:
    - NOTION_API_KEY 설정
    - NOTION_DATABASE_ID 설정
    - NEXT_PUBLIC_BASE_URL 설정

- [ ] 도메인 설정 (선택)
  - 예상 시간: 0.5h
  - 우선순위: Low
  - 완료 기준:
    - 커스텀 도메인 연결
    - SSL 인증서 확인

#### 5.5 모니터링 설정

- [ ] Vercel Analytics 연동
  - 예상 시간: 0.5h
  - 우선순위: Low
  - 완료 기준:
    - Analytics 컴포넌트 추가
    - 대시보드 접근 확인

- [ ] 에러 모니터링 설정 (Sentry)
  - 예상 시간: 1h
  - 우선순위: Low
  - 완료 기준:
    - Sentry 프로젝트 생성
    - 클라이언트/서버 설정 완료
    - 테스트 에러 전송 확인

**Phase 5 완료 기준**:
- 모든 테스트 통과
- 프로덕션 배포 완료
- 모니터링 대시보드 정상 작동
- 접속 URL 확인 및 동작 검증

---

## 마일스톤 (Milestones)

| 마일스톤 | 완료 조건 | 예상 완료일 | 상태 |
|---------|----------|-----------|------|
| M0: 기반 설정 완료 | 유틸리티 라이브러리 구현 | 2026-01-16 | 완료 |
| M1: API 기능 완료 | API Routes, Middleware 동작 | Phase 1 종료 | 계획 |
| M2: 핵심 UI 완료 | 목록/상세 페이지 동작 | Phase 2 종료 | 계획 |
| M3: PDF 기능 완료 | PDF 생성 및 다운로드 | Phase 3 종료 | 계획 |
| M4: MVP 출시 | 반응형, 접근성 적용 | Phase 4 종료 | 계획 |
| M5: 프로덕션 배포 | 테스트 통과, 배포 완료 | Phase 5 종료 | 계획 |

---

## 위험 요소 및 대응 전략

### 기술적 위험

#### 1. Notion API Rate Limit 초과

- **위험**: 초당 3 요청 제한으로 인해 동시 접속 시 오류 발생 가능
- **영향도**: High
- **대응책**:
  - Next.js ISR 캐싱 적용 (목록 5분, 상세 1분)
  - 클라이언트 사이드 검색/필터링으로 API 호출 최소화
  - 에러 발생 시 재시도 로직 구현 (지수 백오프)
- **대안**: Redis 캐싱 레이어 추가 (향후 고려)

#### 2. PDF 생성 브라우저 호환성

- **위험**: html2canvas가 특정 브라우저에서 렌더링 오류 발생 가능
- **영향도**: Medium
- **대응책**:
  - 주요 브라우저 (Chrome, Firefox, Safari, Edge) 테스트
  - PDF 전용 심플한 레이아웃 사용
  - 폴백으로 인쇄 기능 제공
- **대안**: 서버 사이드 PDF 생성 (Puppeteer) 전환

#### 3. PDF 생성 성능 저하

- **위험**: 복잡한 레이아웃 또는 큰 이미지로 인한 생성 지연
- **영향도**: Medium
- **대응책**:
  - PDF 템플릿 단순화
  - 이미지 압축 및 최적화
  - 로딩 인디케이터로 사용자 경험 개선
- **대안**: Web Worker에서 PDF 생성

#### 4. Notion 데이터베이스 스키마 변경

- **위험**: Notion 필드명 변경 시 파싱 오류 발생
- **영향도**: Medium
- **대응책**:
  - 필드명을 상수로 관리 (`lib/constants/notion-fields.ts`)
  - 파싱 에러 핸들링 강화
  - Notion 스키마 문서화 및 버전 관리
- **대안**: Notion 필드 ID 기반 접근 (안정적)

### 일정 위험

#### 1. Notion API 학습 곡선

- **위험**: Notion API 쿼리 작성 및 데이터 파싱에 예상보다 시간 소요
- **영향도**: Medium
- **대응책**:
  - 이미 구현된 쿼리 함수 활용 (`lib/notion/queries.ts`)
  - 공식 문서 및 예제 코드 참조
- **대안**: 더미 데이터로 UI 먼저 개발 후 API 연동

#### 2. 반응형 디자인 복잡도

- **위험**: 테이블의 모바일 변환 등 복잡한 반응형 로직 구현 지연
- **영향도**: Low
- **대응책**:
  - ShadcnUI 컴포넌트 활용으로 기본 반응형 확보
  - 모바일 전용 컴포넌트 분리 (복잡도 감소)
- **대안**: Phase 4를 MVP 이후로 연기

---

## 품질 관리 기준

### 코드 품질

- [ ] TypeScript strict mode 준수
- [ ] ESLint 규칙 통과 (no warnings)
- [ ] 단위 테스트 커버리지 60% 이상 (핵심 로직)
- [ ] 한국어 주석 및 문서화 (변수명/함수명은 영어)
- [ ] 컴포넌트 재사용성 확보 (UI 컴포넌트 분리)

### 성능 기준

- [ ] Lighthouse Performance 점수: 90+ (데스크톱)
- [ ] Lighthouse Performance 점수: 80+ (모바일)
- [ ] First Contentful Paint: < 1.5초
- [ ] Time to Interactive: < 3.5초
- [ ] PDF 생성 시간: < 5초

### 접근성 기준

- [ ] Lighthouse Accessibility 점수: 90+
- [ ] WCAG 2.1 AA 레벨 준수
- [ ] 키보드 네비게이션 지원
- [ ] 스크린 리더 호환성

### 보안 기준

- [ ] HTTPS 통신 필수
- [ ] 환경 변수로 API 키 관리
- [ ] 토큰 브루트포스 방지 (32자 이상)
- [ ] XSS 방어 (React 자동 이스케이핑)
- [ ] CSRF 방어 (Next.js 기본 제공)

---

## 배포 전략

### 환경 구성

| 환경 | URL | 설명 |
|------|-----|------|
| Development | http://localhost:3000 | 로컬 개발 환경 |
| Preview | https://*.vercel.app | PR별 자동 배포 환경 |
| Production | https://invoice.example.com | 프로덕션 환경 |

### 배포 체크리스트

#### 프로덕션 배포 전

- [ ] 환경 변수 설정 완료
  - `NOTION_API_KEY`
  - `NOTION_DATABASE_ID`
  - `NEXT_PUBLIC_BASE_URL`
- [ ] Notion 데이터베이스 접근 권한 확인
- [ ] 테스트 토큰으로 기능 검증
- [ ] 빌드 오류 없음 확인

#### 배포 후

- [ ] 프로덕션 URL 접속 확인
- [ ] 토큰 기반 인증 동작 확인
- [ ] PDF 다운로드 동작 확인
- [ ] 모바일 접속 확인
- [ ] Vercel Analytics 데이터 수집 확인

---

## 유지보수 계획

### 모니터링

| 분류 | 도구 | 목적 |
|------|------|------|
| 성능 | Vercel Analytics | Core Web Vitals, 페이지 뷰 |
| 에러 | Sentry | 실시간 에러 추적, 알림 |
| API 사용량 | 자체 로깅 | Notion API 호출 횟수 추적 |

### 업데이트 주기

- **버그 수정**: 발견 즉시 (핫픽스)
- **마이너 업데이트**: 격주 (기능 개선)
- **메이저 업데이트**: 분기별 (새로운 기능)
- **의존성 업데이트**: 월별 (보안 패치)

### 향후 개선 계획

**Phase 2 (MVP 이후 3개월)**:
- 견적서 승인/거절 기능
- 이메일 자동 발송 (Resend 연동)
- 견적서 버전 관리

**Phase 3 (MVP 이후 6개월)**:
- 관리자 대시보드
- 결제 연동 (Toss Payments)
- 다국어 지원 (영어)

**Phase 4 (MVP 이후 12개월)**:
- 고급 검색 (Algolia)
- PDF 템플릿 커스터마이징
- 전자 서명 기능
- Public API 제공

---

## 문서 변경 이력

| 버전 | 날짜 | 변경 내용 | 작성자 |
|------|------|----------|--------|
| 0.1.0 | 2026-01-16 | 초기 로드맵 작성 | Development Team |
| 1.0.0 | 2026-01-17 | PRD 기반 상세 로드맵 갱신 | Development Team |

---

*이 로드맵은 프로젝트 진행 상황에 따라 지속적으로 업데이트됩니다.*
