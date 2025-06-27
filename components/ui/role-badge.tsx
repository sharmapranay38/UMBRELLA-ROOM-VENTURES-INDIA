interface RoleBadgeProps {
  name: string
  color: string
}

export function RoleBadge({ name, color }: RoleBadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {name}
    </span>
  )
}
