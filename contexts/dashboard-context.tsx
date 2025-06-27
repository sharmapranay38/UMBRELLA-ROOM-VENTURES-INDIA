"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { User, Role, Message, ServerStats } from "@/lib/types"
import { mockUsers, mockRoles, mockMessages, mockStats } from "@/lib/mock-data"

interface DashboardContextType {
  users: User[]
  roles: Role[]
  messages: Message[]
  stats: ServerStats
  darkMode: boolean
  sidebarOpen: boolean
  addUser: (user: Omit<User, "id">) => void
  updateRole: (id: string, updates: Partial<Role>) => void
  deleteMessage: (id: string) => void
  toggleDarkMode: () => void
  toggleSidebar: () => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [roles, setRoles] = useState<Role[]>(mockRoles)
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [stats] = useState<ServerStats>(mockStats)
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Load dark mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved) {
      setDarkMode(JSON.parse(saved))
    }
  }, [])

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const addUser = (userData: Omit<User, "id">) => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
    }
    setUsers((prev) => [...prev, newUser])
  }

  const updateRole = (id: string, updates: Partial<Role>) => {
    setRoles((prev) => prev.map((role) => (role.id === id ? { ...role, ...updates } : role)))
  }

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id))
  }

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  return (
    <DashboardContext.Provider
      value={{
        users,
        roles,
        messages,
        stats,
        darkMode,
        sidebarOpen,
        addUser,
        updateRole,
        deleteMessage,
        toggleDarkMode,
        toggleSidebar,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
