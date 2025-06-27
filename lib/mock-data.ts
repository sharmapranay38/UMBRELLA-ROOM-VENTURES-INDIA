import type { User, Role, Message, ServerStats } from "./types"

export const mockUsers: User[] = [
  {
    id: "1",
    username: "AdminUser",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "2023-01-15",
    role: "Admin",
    status: "online",
  },
  {
    id: "2",
    username: "ModeratorJohn",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "2023-02-20",
    role: "Moderator",
    status: "online",
  },
  {
    id: "3",
    username: "GamerGirl",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "2023-03-10",
    role: "Member",
    status: "away",
  },
  {
    id: "4",
    username: "DevCoder",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "2023-04-05",
    role: "Developer",
    status: "dnd",
  },
  {
    id: "5",
    username: "MusicLover",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "2023-05-12",
    role: "Member",
    status: "offline",
  },
  {
    id: "6",
    username: "ArtistPro",
    avatar: "/placeholder.svg?height=40&width=40",
    joinDate: "2023-06-18",
    role: "Artist",
    status: "online",
  },
]

export const mockRoles: Role[] = [
  { id: "1", name: "Admin", color: "#ff4444", memberCount: 2, visible: true },
  { id: "2", name: "Moderator", color: "#44ff44", memberCount: 3, visible: true },
  { id: "3", name: "Developer", color: "#4444ff", memberCount: 5, visible: true },
  { id: "4", name: "Artist", color: "#ff44ff", memberCount: 8, visible: false },
  { id: "5", name: "Member", color: "#888888", memberCount: 156, visible: true },
]

export const mockMessages: Message[] = [
  {
    id: "1",
    username: "AdminUser",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Welcome everyone to our Discord server! Please read the rules.",
    timestamp: "2024-01-20T10:30:00Z",
    channel: "general",
  },
  {
    id: "2",
    username: "GamerGirl",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Thanks for the warm welcome! Excited to be here.",
    timestamp: "2024-01-20T10:35:00Z",
    channel: "general",
  },
  {
    id: "3",
    username: "DevCoder",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Anyone interested in a coding session this weekend?",
    timestamp: "2024-01-20T11:15:00Z",
    channel: "development",
  },
  {
    id: "4",
    username: "MusicLover",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Check out this amazing playlist I made!",
    timestamp: "2024-01-20T12:00:00Z",
    channel: "music",
  },
]

export const mockStats: ServerStats = {
  totalMembers: 174,
  onlineUsers: 42,
  activeRoles: 5,
  messagesToday: 127,
  memberGrowth: [
    { month: "Jan", members: 120 },
    { month: "Feb", members: 135 },
    { month: "Mar", members: 148 },
    { month: "Apr", members: 162 },
    { month: "May", members: 174 },
  ],
}
