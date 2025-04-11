"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, ChevronLeft, ChevronRight, Home, MessageCircle, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`border-r border-slate-800 bg-slate-900 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } hidden md:block`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          {!collapsed && <h2 className="text-lg font-semibold text-white">Menu</h2>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-slate-400 hover:text-white"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>
        <nav className="flex-1 space-y-1 p-2">
          <SidebarItem icon={<Home className="h-5 w-5" />} label="Dashboard" collapsed={collapsed} active />
          <SidebarItem icon={<BookOpen className="h-5 w-5" />} label="Planos de Aula" collapsed={collapsed} />
          <SidebarItem icon={<Users className="h-5 w-5" />} label="Presença" collapsed={collapsed} />
          <SidebarItem icon={<MessageCircle className="h-5 w-5" />} label="Comunicação" collapsed={collapsed} />
          <SidebarItem icon={<Calendar className="h-5 w-5" />} label="Calendário" collapsed={collapsed} />
        </nav>
        <div className="p-2">
          <SidebarItem icon={<Settings className="h-5 w-5" />} label="Configurações" collapsed={collapsed} />
        </div>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  collapsed: boolean
  active?: boolean
}

function SidebarItem({ icon, label, collapsed, active }: SidebarItemProps) {
  return (
    <Link
      href="#"
      className={`flex items-center space-x-2 rounded-md px-3 py-2 transition-colors ${
        active ? "bg-cyan-500/10 text-cyan-500" : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <div>{icon}</div>
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}
