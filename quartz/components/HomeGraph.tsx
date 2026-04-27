import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/graph.inline"
import graphStyle from "./styles/graph.scss"

// Full-bleed homepage graph: breaks out of the centered content column to span the
// full viewport width minus a small margin, and stretches vertically to fill the
// remaining viewport height beneath the top header.
const heroStyle = `
.home-graph-hero {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 1rem;
  box-sizing: border-box;
}
.home-graph-hero .graph-outer {
  height: calc(100vh - 9rem);
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
