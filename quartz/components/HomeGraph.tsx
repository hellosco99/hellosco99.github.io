import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/graph.inline"
import graphStyle from "./styles/graph.scss"

const heroStyle = `
.home-graph-hero {
  width: 100%;
  margin: 1rem 0 2rem 0;
}
.home-graph-hero .graph-outer {
  height: 75vh;
  min-height: 560px;
  border-radius: 12px;
  border: 1px solid var(--lightgray);
  background: var(--light);
  position: relative;
}
.home-graph-hero .graph-container {
  width: 100%;
  height: 100%;
  cursor: grab;
}
.home-graph-hero .graph-container:active {
  cursor: grabbing;
}
.home-graph-hero h2 {
  margin-bottom: 0.4rem;
}
.home-graph-hero .home-graph-caption {
  font-size: 0.85rem;
  color: var(--gray);
  margin-bottom: 1rem;
}
`

const defaultHeroOptions = {
  drag: true,
  zoom: true,
  depth: -1,
  scale: 1.0,
  repelForce: 0.6,
  centerForce: 0.3,
  linkDistance: 50,
  fontSize: 0.7,
  opacityScale: 1,
  showTags: true,
  removeTags: [],
  focusOnHover: true,
  enableRadial: true,
}

export default ((opts?: Partial<typeof defaultHeroOptions>) => {
  const HomeGraph: QuartzComponent = (_props: QuartzComponentProps) => {
    const config = { ...defaultHeroOptions, ...opts }
    return (
      <div class="home-graph-hero">
        <h2>지도</h2>
        <p class="home-graph-caption">노드 = 노트, 엣지 = 위키링크. 드래그·줌·클릭으로 탐색.</p>
        <div class="graph-outer">
          <div class="graph-container" data-cfg={JSON.stringify(config)}></div>
        </div>
      </div>
    )
  }

  HomeGraph.css = graphStyle + heroStyle
  HomeGraph.afterDOMLoaded = script

  return HomeGraph
}) satisfies QuartzComponentConstructor
