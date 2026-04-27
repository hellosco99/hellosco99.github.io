import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const style = `
.nav-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 1rem 0;
}
@media (max-width: 700px) {
  .nav-cards { grid-template-columns: 1fr; }
}
.nav-card {
  display: block;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--lightgray);
  border-radius: 12px;
  background: var(--light);
  color: var(--dark);
  text-decoration: none;
  transition: transform 120ms ease, border-color 120ms ease, background 120ms ease;
}
.nav-card:hover {
  transform: translateY(-2px);
  border-color: var(--secondary);
  background: var(--highlight);
}
.nav-card h3 {
  margin: 0 0 0.4rem 0;
  font-size: 1.3rem;
  color: var(--secondary);
}
.nav-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--gray);
}
`

type Card = { href: string; title: string; description: string }

const defaultCards: Card[] = [
  { href: "research/", title: "Research", description: "개념 노트, atomic notes" },
  { href: "papers/", title: "Paper", description: "논문 리뷰" },
  { href: "projects/", title: "Project", description: "실험과 프로젝트" },
]

export default ((opts?: { cards?: Card[] }) => {
  const cards = opts?.cards ?? defaultCards
  const NavCards: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div class="nav-cards">
        {cards.map((c) => (
          <a class="nav-card" href={c.href}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </a>
        ))}
      </div>
    )
  }
  NavCards.css = style
  return NavCards
}) satisfies QuartzComponentConstructor
