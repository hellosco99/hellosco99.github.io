import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/graph.inline"
import graphStyle from "./styles/graph.scss"

// Distill-style hero: a fixed-height graph panel at the top, then content
// flows beneath. Not viewport-filling.
const heroStyle = `
.home-graph-hero {
  width: 100%;
  margin: 0 0 2.5rem 0;
}
.home-graph-hero .graph-outer {
  height: 60vh;
  min-height: 380px;
  max-height: 560px;
  border: 1px solid var(--hairline, var(--lightgray));
  border-radius: 4px;
  background: var(--light);
  position: relative;
  overflow: hidden;
}
.home-graph-hero .graph-container {
  width: 100%;
  height: 100%;
  cursor: grab;
}
.home-graph-hero .graph-container:active { cursor: grabbing; }
.home-graph-hero .graph-container .node { fill: var(--secondary); }
.home-graph-hero .graph-container .link { stroke: var(--lightgray); }
.home-graph-hero .graph-container text {
  font-family: var(--bodyFont);
  fill: var(--darkgray);
}
`

const defaultHeroOptions = {
  drag: true,
  zoom: true,
  depth: -1,
  scale: 1.4,
  repelForce: 0.7,
  centerForce: 0.35,
  linkDistance: 60,
  fontSize: 0.9,
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
