interface StatusBadgeProps {
  status: "online" | "offline" | "away" | "dnd"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    online: { color: "bg-green-500", label: "Online" },
    offline: { color: "bg-gray-500", label: "Offline" },
    away: { color: "bg-yellow-500", label: "Away" },
    dnd: { color: "bg-red-500", label: "Do Not Disturb" },
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${config.color}`} />
      <span className="text-sm text-gray-600 dark:text-gray-400">{config.label}</span>
    </div>
  )
}
