import type { ChartData, ChartOptions } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import type { RevenueSlice } from '../../services/dashboard.mock'
import './dashboard.css'

interface Props {
  slices: RevenueSlice[]
}

export function RevenueByTypeChart({ slices }: Props) {
  const data: ChartData<'doughnut'> = {
    labels: slices.map((slice) => slice.label),
    datasets: [
      {
        data: slices.map((slice) => slice.value),
        backgroundColor: slices.map((slice) => slice.color),
        borderWidth: 0,
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  }

  return (
    <section className="dashboard-section">
      <div className="card">
        <header className="card__header">
          <h3 className="card__title">Ingresos por tipo</h3>
        </header>
        <div className="chart-wrapper chart-wrapper--small">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </section>
  )
}
