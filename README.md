# 나의 덕질 연대기

역대 최애 이름과 덕질 기간만 입력하면, 각자의 ChatGPT에서 맞춤 인터뷰·덕질 연대기 분석·X 공유용 결과 카드 생성을 진행하도록 안내하는 무료 정적 사이트입니다.

## 공개 주소

GitHub Pages 설정에서 `main` / `(root)`가 활성화되면 `https://mangang0713.github.io/fandom-timeline/`에서 접속할 수 있습니다.

## 작동 구조

- `index.html`: 랜딩 페이지
- `style.css`: 반응형 디자인
- `prompt.js`: ChatGPT 시작용 압축 프롬프트와 전체 복사 프롬프트
- `app.js`: ChatGPT 연결, 프롬프트 복사, FAQ/모달 동작

별도 백엔드, 데이터베이스 또는 OpenAI API 키가 필요 없습니다. 최애 목록 및 채팅 기록은 이 사이트에서 수집하지 않습니다. 이용자가 자신의 ChatGPT에서 대화하고 결과 이미지를 생성합니다.

ChatGPT URL 프롬프트 자동 입력은 공식적으로 보장된 연동 방식이 아니므로, 기기·브라우저에서 동작하지 않으면 '프롬프트 복사'로 수동 입력할 수 있습니다. 무료 플랜의 검색 및 이미지 생성 한도에 따라 일부 결과가 제한될 수 있습니다.

## GitHub Pages 배포

Repository → Settings → Pages → Build and deployment → Deploy from a branch → Branch: `main`, Folder: `/(root)` → Save.

## 기타

팬이 만든 비공식 프로젝트이며 OpenAI 및 아티스트/소속사와 제휴하지 않았습니다.
