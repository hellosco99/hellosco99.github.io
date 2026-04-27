import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1rem;
  margin: 0;
  font-family: var(--headerFont);
  font-weight: 600;
  letter-spacing: -0.01em;
}
.page-title a {
  color: var(--dark);
  font-weight: 600;
  border-bottom: none !important;
  background: transparent !important;
  padding: 0 !important;
}
.page-title a:hover {
  color: var(--secondary);
  border-bottom: none !important;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
