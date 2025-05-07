# 마인드케어센터 (MindCare Center)

![마인드케어센터 배너](public/images/thumb.png)

마인드케어센터는 현대인들의 다양한 심리적 어려움을 해결하기 위한 온라인 심리상담 플랫폼입니다. 관계 문제, 감정 문제, 비즈니스 문제 등 다양한 영역의 심리 상담을 제공하며, 온라인으로 쉽게 예약하고 상담받을 수 있는 서비스를 제공합니다.

## 주요 기능

### 사용자 기능
- **상담 예약 시스템**: 온라인으로 간편하게 상담 예약 가능
- **상담사 프로필**: 다양한 전문 상담사들의 상세 프로필 제공
- **온라인 결제**: 간편한 결제 시스템으로 상담 서비스 결제
- **마이페이지**: 개인 예약 내역 및 상담 기록 관리
- **리뷰 시스템**: 상담 후기 작성 및 조회 기능

### 상담 서비스
- **관계 문제 상담**: 연인, 가족, 직장, 친구 등 다양한 관계 문제 해결
- **감정 문제 상담**: 자존감, 불안, 스트레스, 무기력 등 감정적 어려움 해소
- **비즈니스 문제 상담**: 직장, 직업, 성취에서의 심리적 장애 극복 지원
- **맞춤형 심리 치료**: 개인별 상황에 맞는 심리 치료 프로그램 제공

## 기술 스택

### 프론트엔드
- **Next.js**: 서버 사이드 렌더링을 통한 빠른 페이지 로딩 및 SEO 최적화
- **React**: 컴포넌트 기반 사용자 인터페이스 구축
- **Redux & Redux Toolkit**: 전역 상태 관리 
- **Redux-Saga**: 비동기 액션 처리
- **SASS/SCSS**: 구조화된 스타일링
- **Ant Design**: UI 컴포넌트 라이브러리
- **Swiper**: 터치 슬라이더 구현

### 백엔드
- **Next.js API Routes**: 서버리스 API 엔드포인트
- **MongoDB & Mongoose**: 데이터베이스 및 ODM
- **NextAuth.js**: 사용자 인증 및 세션 관리
- **SWR**: 데이터 페칭 및 캐싱

### 외부 연동
- **Bootpay**: 결제 시스템 연동
- **Kakao Maps API**: 위치 기반 서비스 제공
- **Channel IO**: 실시간 고객 채팅 지원

## 프로젝트 구조

```
counselling_vercel/
├── components/      # 재사용 가능한 UI 컴포넌트
├── container/       # 페이지별 컨테이너 컴포넌트
│   ├── about/       # 소개 페이지 관련 컴포넌트
│   ├── detail/      # 상세 페이지 관련 컴포넌트
│   ├── main/        # 메인 페이지 관련 컴포넌트
│   └── reservation/ # 예약 관련 컴포넌트
├── css/             # 스타일 파일
├── hook/            # 커스텀 React 훅
├── modules/         # 유틸리티 모듈
├── pages/           # Next.js 페이지
│   ├── api/         # API 라우트
│   ├── bbs/         # 게시판 페이지
│   └── products/    # 상품 관련 페이지
├── public/          # 정적 파일
│   ├── fonts/       # 폰트 파일
│   ├── images/      # 이미지 파일
│   └── js/          # 자바스크립트 파일
└── redux/           # Redux 관련 파일
```

## 시작하기

### 필수 요구사항
- Node.js 14.0.0 이상
- MongoDB 데이터베이스
- Bootpay 계정 (결제 기능 사용 시)

### 설치

1. 저장소 복제하기
```bash
git clone https://github.com/your-username/counselling_vercel.git
cd counselling_vercel
```

2. 의존성 설치하기
```bash
yarn install
# 또는
npm install
```

3. 환경 변수 설정하기
`.env.local` 파일을 생성하고 다음 변수를 설정합니다:
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
BOOTPAY_APPLICATION_ID=your_bootpay_app_id
BOOTPAY_PRIVATE_KEY=your_bootpay_private_key
```

4. 개발 서버 실행하기
```bash
yarn dev
# 또는
npm run dev
```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속하기

## 배포

이 프로젝트는 Vercel을 통해 배포할 수 있습니다:

```bash
# Vercel CLI를 설치합니다
npm install -g vercel

# 로그인합니다
vercel login

# 배포합니다
vercel
```

## 주요 페이지

### 메인 페이지
- 서비스 소개 및 주요 상담 분야 안내
- 상담사 프로필 및 추천 상담 프로그램
- 사용자 후기 및 통계 정보

### 상담 예약 페이지
- 상담사 선택 및 예약 가능 일정 확인
- 상담 유형 및 시간 선택
- 결제 정보 입력 및 처리

### 마이페이지
- 예약한 상담 일정 관리
- 상담 내역 및 결제 이력 조회
- 개인 정보 관리

### 공지사항 및 블로그
- 심리 상담 관련 유용한 정보 제공
- 센터 소식 및 이벤트 안내
