import type { ChartOptions, TooltipItem } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import type { MarketOverviewData } from '../../services/dashboard.mock'
import './dashboard.css'

interface Props {
  data: MarketOverviewData
}

export function MarketOverviewCard({ data }: Props) {
  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      borderRadius: 8,
      maxBarThickness: 22,
    })),
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
        },
        ticks: {
          callback: (value) => `${value}`,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'bar'>) =>
            `${context.dataset.label}: ${context.parsed.y}`,
        },
      },
    },
  }

  const formattedTotal = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: data.currency,
    maximumFractionDigits: 0,
  }).format(data.total)

  return (
    <section className="dashboard-section">
      <div className="card card--stretch">
        <header className="card__header">
          <div>
            <h3 className="card__title">{data.title}</h3>
            <p className="card__subtitle">{data.subtitle}</p>
          </div>
          <div className="card__actions">
            <button type="button" className="btn btn--ghost">
              Este mes
            </button>
          </div>
        </header>
        <div className="market-overview__summary">
          <div>
            <span className="market-overview__total">{formattedTotal}</span>
            <span className="market-overview__currency">{data.currency}</span>
            <span className="market-overview__change">
              {data.change > 0 ? '+' : ''}
              {data.change}%
            </span>
          </div>
        </div>
        <div className="chart-wrapper">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </section>
  )
}
