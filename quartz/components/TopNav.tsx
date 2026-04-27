import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const style = `
.topnav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.75rem;
  flex: auto;
  justify-content: flex-end;
}
.topnav a {
  color: var(--darkgray);
  text-decoration: none;
  font-weight: 450;
  font-size: 0.9rem;
  padding: 0;
  border-bottom: none;
  transition: color 120ms ease;
}
.topnav a:hover {
  color: var(--dark);
  border-bottom: none;
}
@media all and (max-width: 800px) {
  .topnav {
    gap: 1rem;
  }
  .topnav a {
    font-size: 0.85rem;
  }
}
`

type Link = { href: string; label: string }

const defaultLinks: Link[] = [
  { href: "/about", label: "About" },
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
