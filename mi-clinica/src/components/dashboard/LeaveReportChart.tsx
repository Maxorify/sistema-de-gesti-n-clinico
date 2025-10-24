import type { ChartData, ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'
import type { LeaveReportPoint } from '../../services/dashboard.mock'
import './dashboard.css'

interface Props {
  items: LeaveReportPoint[]
}

export function LeaveReportChart({ items }: Props) {
  const data: ChartData<'line'> = {
    labels: items.map((item) => item.label),
    datasets: [
      {
        label: 'Licencias utilizadas',
        data: items.map((item) => item.taken),
        borderColor: 'rgba(79, 70, 229, 1)',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        fill: true,
        tension: 0.35,
        pointRadius: 4,
      },
      {
        label: 'Licencias disponibles',
        data: items.map((item) => item.available),
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.35,
        pointRadius: 4,
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <section className="dashboard-section">
      <div className="card">
        <header className="card__header">
          <h3 className="card__title">Reporte de ausencias</h3>
        </header>
        <div className="chart-wrapper chart-wrapper--medium">
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  )
}
