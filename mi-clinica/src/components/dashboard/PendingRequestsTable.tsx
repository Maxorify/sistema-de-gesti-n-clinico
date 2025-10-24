import type { PendingRequest } from '../../services/dashboard.mock'
import './dashboard.css'

interface Props {
  items: PendingRequest[]
}

const statusCopy: Record<PendingRequest['status'], string> = {
  completed: 'Completado',
  in_progress: 'En progreso',
  pending: 'Pendiente',
}

export function PendingRequestsTable({ items }: Props) {
  return (
    <section className="dashboard-section">
      <div className="card">
        <header className="card__header">
          <div>
            <h3 className="card__title">Solicitudes pendientes</h3>
            <p className="card__subtitle">Gestiona el alta de nuevos pacientes</p>
          </div>
          <div className="card__actions">
            <button type="button" className="btn btn--primary">
              Añadir miembro
            </button>
          </div>
        </header>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Centro</th>
                <th>Progreso</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const percent = Math.round(
                  (item.progress.completed / item.progress.total) * 100,
                )

                return (
                  <tr key={item.id}>
                    <td>
                      <div className="table-avatar">
                        <span
                          className="table-avatar__badge"
                          style={{ backgroundColor: item.customer.color }}
                        >
                          {item.customer.initials}
                        </span>
                        <div>
                          <p className="table-primary">{item.customer.name}</p>
                          <p className="table-secondary">{item.customer.role}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="table-primary">{item.company.name}</p>
                      <p className="table-secondary">{item.company.type}</p>
                    </td>
                    <td>
                      <div className="progress" aria-hidden>
                        <div
                          className={`progress__bar progress__bar--${item.status}`}
                          style={{ width: `${percent}%` }}
                          role="progressbar"
                          aria-valuenow={percent}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="table-secondary">
                        {item.progress.completed}/{item.progress.total}
                      </p>
                    </td>
                    <td>
                      <span className={`status status--${item.status}`}>
                        {statusCopy[item.status]}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
