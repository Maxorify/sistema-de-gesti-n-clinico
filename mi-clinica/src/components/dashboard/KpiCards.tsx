import type { KpiCard } from '../../services/dashboard.mock'
import './dashboard.css'

interface Props {
  items: KpiCard[]
}

const arrow: Record<KpiCard['change']['direction'], string> = {
  up: '▲',
  down: '▼',
}

export function KpiCards({ items }: Props) {
  return (
    <section className="dashboard-section">
      <header className="dashboard-section__header">
        <h2 className="dashboard-section__title">Resumen rápido</h2>
        <p className="dashboard-section__subtitle">
          Indicadores principales del rendimiento de la clínica
        </p>
      </header>
      <div className="kpi-grid">
        {items.map((card) => (
          <article key={card.id} className="kpi-card">
            <p className="kpi-card__title">{card.title}</p>
            <div className="kpi-card__value">{card.value}</div>
            <div
              className={`kpi-card__change kpi-card__change--${card.change.tone}`}
            >
              <span aria-hidden>{arrow[card.change.direction]}</span>
              <span>{card.change.value}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
