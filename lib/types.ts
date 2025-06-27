export interface User {
  id: string
  username: string
  avatar: string
  joinDate: string
  role: string
  status: "online" | "offline" | "away" | "dnd"
}

export interface Role {
  id: string
  name: string
  color: string
  memberCount: number
  visible: boolean
}

export interface Message {
  id: string
  username: string
  avatar: string
  content: string
  timestamp: string
  channel: string
}

export interface ServerStats {
  totalMembers: number
  onlineUsers: number
  activeRoles: number
  messagesToday: number
  memberGrowth: { month: string; members: number }[]
}
