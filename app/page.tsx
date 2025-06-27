import { Users, UserCheck, Shield, MessageCircle } from "lucide-react"
import { MetricCard } from "@/components/ui/metric-card"
import { MemberGrowthChart } from "@/components/charts/member-growth-chart"

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome to your Discord server admin panel</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Members"
          value="174"
          icon={<Users className="h-8 w-8" />}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Online Users"
          value="42"
          icon={<UserCheck className="h-8 w-8" />}
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard title="Active Roles" value="5" icon={<Shield className="h-8 w-8" />} />
        <MetricCard
          title="Messages Today"
          value="127"
          icon={<MessageCircle className="h-8 w-8" />}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      {/* Chart */}
      <MemberGrowthChart />
    </div>
  )
}
