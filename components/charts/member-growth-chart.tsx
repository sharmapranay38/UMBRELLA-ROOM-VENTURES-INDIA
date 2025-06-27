"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useDashboard } from "@/contexts/dashboard-context"

export function MemberGrowthChart() {
  const { stats } = useDashboard()
  const maxMembers = Math.max(...stats.memberGrowth.map((d) => d.members))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Member Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between space-x-2">
          {stats.memberGrowth.map((data, index) => {
            const height = (data.members / maxMembers) * 100
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-blue-500 rounded-t-md transition-all duration-300 hover:bg-blue-600 min-h-[20px]"
                  style={{ height: `${height}%` }}
                  title={`${data.month}: ${data.members} members`}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{data.month}</span>
                <span className="text-xs font-medium text-gray-900 dark:text-white">{data.members}</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
