"use client"

import { useState } from "react"
import { Edit2, Eye, EyeOff } from "lucide-react"
import { useDashboard } from "@/contexts/dashboard-context"
import { RoleBadge } from "@/components/ui/role-badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RolesPage() {
  const { roles, updateRole } = useDashboard()
  const [editingRole, setEditingRole] = useState<string | null>(null)
  const [editName, setEditName] = useState("")

  const handleToggleVisibility = (roleId: string, currentVisibility: boolean) => {
    updateRole(roleId, { visible: !currentVisibility })
  }

  const handleStartEdit = (roleId: string, currentName: string) => {
    setEditingRole(roleId)
    setEditName(currentName)
  }

  const handleSaveEdit = (roleId: string) => {
    if (editName.trim()) {
      updateRole(roleId, { name: editName.trim() })
    }
    setEditingRole(null)
    setEditName("")
  }

  const handleCancelEdit = () => {
    setEditingRole(null)
    setEditName("")
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Roles</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage server roles and permissions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Server Roles</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {roles.map((role) => (
              <div
                key={role.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <RoleBadge name={role.name} color={role.color} />
                  <div>
                    <div className="flex items-center space-x-2">
                      {editingRole === role.id ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleSaveEdit(role.id)
                              if (e.key === "Escape") handleCancelEdit()
                            }}
                            autoFocus
                          />
                          <button
                            onClick={() => handleSaveEdit(role.id)}
                            className="px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="px-2 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{role.name}</span>
                          <button
                            onClick={() => handleStartEdit(role.id, role.name)}
                            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            aria-label={`Edit ${role.name} role`}
                          >
                            <Edit2 className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{role.memberCount} members</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Visible</span>
                    <button
                      onClick={() => handleToggleVisibility(role.id, role.visible)}
                      className={`
                        relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        ${role.visible ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}
                      `}
                      role="switch"
                      aria-checked={role.visible}
                      aria-label={`Toggle visibility for ${role.name} role`}
                    >
                      <span
                        className={`
                          inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                          ${role.visible ? "translate-x-6" : "translate-x-1"}
                        `}
                      />
                    </button>
                  </div>

                  <div className="text-gray-400">
                    {role.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
