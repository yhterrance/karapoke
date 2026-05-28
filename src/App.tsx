import { useDragRegion } from './useDragRegion'

const developmentCards = [
  {
    label: 'Library',
    value: 'Local-first songbooks',
  },
  {
    label: 'Sessions',
    value: 'Queue, key, tempo, and notes',
  },
  {
    label: 'Stage',
    value: 'Clean lyrics display for performers',
  },
]

export default function App() {
  const onDragRegionMouseDown = useDragRegion()

  return (
    <main className="app-shell">
      <div
        aria-hidden="true"
        className="window-drag-region"
        data-tauri-drag-region
        onMouseDown={onDragRegionMouseDown}
      />
      <section className="workspace" aria-labelledby="app-title">
        <div className="masthead">
          <p className="eyebrow">Karapoke desktop</p>
          <h1 id="app-title">Karaoke planning, rebuilt for live rooms.</h1>
          <p className="lede">
            A new Tauri app shell is ready. The product work now has a focused
            place for songbooks, set queues, and performance views.
          </p>
        </div>

        <div className="status-panel" aria-label="Development status">
          <div>
            <span className="status-dot" aria-hidden="true" />
            <span className="status-label">Under development</span>
          </div>
          <p>Desktop app scaffold active. Public placeholder lives in `site/`.</p>
        </div>

        <div className="feature-grid">
          {developmentCards.map((card) => (
            <article className="feature-card" key={card.label}>
              <p>{card.label}</p>
              <h2>{card.value}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
