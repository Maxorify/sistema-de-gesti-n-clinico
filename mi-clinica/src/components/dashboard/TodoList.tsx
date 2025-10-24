import type { TodoItem } from '../../services/dashboard.mock'
import './dashboard.css'

interface Props {
  items: TodoItem[]
}

const statusCopy: Record<TodoItem['status'], string> = {
  due: 'Para mañana',
  done: 'Completado',
  expired: 'Atrasado',
}

export function TodoList({ items }: Props) {
  return (
    <section className="dashboard-section">
      <div className="card">
        <header className="card__header">
          <h3 className="card__title">Lista de tareas</h3>
          <button type="button" className="btn btn--icon" aria-label="Añadir tarea">
            +
          </button>
        </header>
        <ul className="todo-list">
          {items.map((item) => (
            <li key={item.id} className={`todo-list__item todo-list__item--${item.status}`}>
              <div>
                <p className="todo-list__title">{item.title}</p>
                <p className="todo-list__meta">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{statusCopy[item.status]}</span>
                </p>
              </div>
              <input type="checkbox" checked={item.status === 'done'} readOnly />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
