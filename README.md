안녕하세요, '구디사는 개발자 9Diin' 입니다. <br />
<br />
해당 프로젝트는 NEXT.js (14버전)과 Supabase, 그리고 Markdown Editor 라이브러리를 사용하여 CRUD(Create, Read, Update, Delete) 기능을 구현한 나만의 TODO-LIST 및 TODO-BOARD를 구현해보는 예제 프로젝트입니다. <br />
<br />
해당 프로젝트는 전적으로 Shadcn UI 디자인 시스템을 사용하여 UI/UX 개발을 진행하였습니다. <br />
해당 프로젝트의 디자인은 전적으로 필자(구디사는 개발자)의 개인 작업물이며, 무단 복제 배포를 금지합니다. <br />
<br />
그러나 `코드의 재사용 및 배포는 전적으로 모든 영역에서 허용`합니다. 감사합니다. <br />
그러면 프로젝트 개발을 위한 `프로젝트 생성`, `개발환경 세팅` 등과 같은 각 단계별 커리큘럼을 작성해보도록 하겠습니다.

### 프로젝트 환경설정

1. Shadcn UI 공식문서의 CLI를 통해 NEXT.js 프로젝트를 생성합니다. 하기에 작성한 명령어를 통해 설치해줍니다. 또한, 모든 기본 설정을 통해 진행하였습니다. 단, 컬러 테마는 본인의 취향에 맞게 선택해주십시오.

-   npx shadcn@latest init
-   전반적인 폰트는 Google Font의 `Noto Sans KR` 폰트를 사용했습니다. (feat. app > layout.tsx 파일 참조)
