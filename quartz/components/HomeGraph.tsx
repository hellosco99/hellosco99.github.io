import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/graph.inline"
import graphStyle from "./styles/graph.scss"

// On the index page we collapse the grid to a single full-width column and hide
// the (otherwise empty) right sidebar so the graph hero genuinely fills the viewport.
const heroStyle = `
body[data-slug="index"] #quartz-body {
  grid-template-columns: auto !important;
  grid-template-areas:
    "grid-header"
    "grid-center"
    "grid-footer" !important;
}
body[data-slug="index"] .sidebar.right {
  display: none !important;
}
.home-graph-hero {
  width: 100%;
  margin: 0;
}
.home-graph-hero .graph-outer {
  height: calc(100vh - 5rem);
  min-height: 480px;
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
