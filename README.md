# PL Architecture Modern Website Prototype

GitHub Pages에 바로 업로드 가능한 정적 홈페이지 패키지입니다.

## 이번 버전 변경사항

- 네이비/화이트 기반의 대형 건축사무소형 프리미엄 디자인 테마 적용
- 생성한 홈페이지 이미지 콘셉트에 맞춘 Hero, Company Overview, History, Services, Featured Projects, Stats, Process, Credentials 레이아웃 반영
- PDF 브로슈어 기반 전체 프로젝트 아카이브 유지
- 개별 프로젝트 상세 페이지 유지 및 공통 헤더/푸터 개선
- GitHub Pages용 `.nojekyll`, `sitemap.xml`, `robots.txt` 포함

## 배포

1. ZIP 압축 해제
2. 폴더 안의 파일 전체를 GitHub 저장소 루트에 업로드
3. Settings → Pages → Deploy from branch → main / root

## 수정 위치

- 메인 페이지: `index.html`
- 전체 스타일: `assets/css/styles.css`
- 프로젝트 데이터: `data/projects.json`
- 프로젝트 상세: `projects/*/index.html`
- 이미지: `assets/images/`

공개 전 연락처, 주소, 이메일, 법적 문구는 실제 정보로 확인 후 교체하세요.
