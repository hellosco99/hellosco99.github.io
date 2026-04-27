# hellosco99.github.io

[hellosco99.github.io](https://hellosco99.github.io) — AI safety / alignment 연구 노트.

[Quartz 4](https://quartz.jzhao.xyz/) 기반. 콘텐츠는 [hellosco99/ai-safety-research](https://github.com/hellosco99/ai-safety-research) repo의 `blog/` 폴더를 git submodule로 끌어와서 빌드.

## Architecture

```
hellosco99.github.io/
├── content/                       ← submodule = ai-safety-research repo (전체)
│   └── blog/                      ← 실제 빌드 대상 (-d content/blog)
├── quartz/                        ← Quartz 프레임워크 (커스터마이즈됨)
│   └── components/HomeGraph.tsx   ← 홈페이지 그래프 hero (커스텀)
├── quartz.config.ts               ← 사이트 설정
├── quartz.layout.ts               ← 레이아웃 (index에서만 HomeGraph)
└── .github/workflows/deploy.yml   ← push → Pages 자동 배포
```

`content/blog/` 외의 파일들 (research repo의 `daily_log.md`, `ROADMAP.md` 등)은 `content/` 안에 물리적으로 존재하지만 빌드 대상이 아니라서 사이트에 노출되지 않음.

## Workflow

### 글 쓸 때
research repo의 `blog/` 폴더에서 작성·commit·push.

### 배포할 때
이 repo에서:

```bash
npm run sync   # submodule을 research/main HEAD로 업데이트 + 로컬 빌드
git add content && git commit -m "publish: ..." && git push
```

`git push` → GitHub Action이 자동으로 빌드·배포. 1~2분 후 사이트 반영.

### 로컬 미리보기

```bash
npm run dev    # http://localhost:8080 에 핫리로드 서버
```

## Scripts

- `npm run dev` — 로컬 dev 서버 (content/blog 기준)
- `npm run build` — public/ 정적 빌드
- `npm run sync` — submodule pull + build (배포 직전 한 번)

## 커스터마이즈 포인트

- **HomeGraph 그래프 옵션** (`quartz/components/HomeGraph.tsx`): `defaultHeroOptions` 객체에서 `linkDistance`, `repelForce`, `fontSize` 등 조정
- **글 색상/폰트** (`quartz.config.ts`): `theme.colors`, `theme.typography`
- **레이아웃** (`quartz.layout.ts`): `defaultContentPageLayout` — beforeBody/left/right 슬롯에 컴포넌트 배치

## Stack

Quartz 4.5.2 · Node 22 · GitHub Pages · KaTeX · D3 force graph
