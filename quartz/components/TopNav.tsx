import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const style = `
.topnav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  flex: auto;
}
.topnav a {
  color: var(--darkgray);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.3rem 0;
  border-bottom: 2px solid transparent;
  transition: color 120ms ease, border-color 120ms ease;
}
.topnav a:hover {
  color: var(--secondary);
  border-bottom-color: var(--secondary);
}
`

type Link = { href: string; label: string }

const defaultLinks: Link[] = [
  { href: "/research/", label: "Research" },
  { href: "/papers/", label: "Paper" },
  { href: "/projects/", label: "Project" },
]

export default ((opts?: { links?: Link[] }) => {
  const links = opts?.links ?? defaultLinks
  const TopNav: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <nav class="topnav">
        {links.map((l) => (
          <a href={l.href}>{l.label}</a>
        ))}
      </nav>
    )
  }
  TopNav.css = style
  return TopNav
}) satisfies QuartzComponentConstructor
