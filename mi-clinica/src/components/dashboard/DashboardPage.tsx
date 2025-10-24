import dashboardMock from '../../services/dashboard.mock'
import './dashboard.css'
import './chartConfig'
import { KpiCards } from './KpiCards'
import { MarketOverviewCard } from './MarketOverviewCard'
import { PendingRequestsTable } from './PendingRequestsTable'
import { RevenueByTypeChart } from './RevenueByTypeChart'
import { TodoList } from './TodoList'
import { LeaveReportChart } from './LeaveReportChart'

export function DashboardPage() {
  const { kpis, marketOverview, pendingRequests, todo, revenueByType, leaveReport } =
    dashboardMock

  return (
    <main className="dashboard">
      <div className="dashboard__content">
        <KpiCards items={kpis} />
        <div className="dashboard__grid">
          <div className="dashboard__column dashboard__column--wide">
            <MarketOverviewCard data={marketOverview} />
            <PendingRequestsTable items={pendingRequests} />
          </div>
          <div className="dashboard__column dashboard__column--narrow">
            <TodoList items={todo} />
            <RevenueByTypeChart slices={revenueByType} />
            <LeaveReportChart items={leaveReport} />
          </div>
        </div>
      </div>
    </main>
  )
}
