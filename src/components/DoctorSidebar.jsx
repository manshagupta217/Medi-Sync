import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart2,
  User,
  LogOut
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Doctors", icon: Users, path: "/doctors" },
  { label: "Patient Records", icon: FileText, path: "/health-records" },
  { label: "Analytics", icon: BarChart2, path: "/analytics" },
  { label: "Profile", icon: User, path: "/profile" }
]

function DoctorSidebar() {

  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useAuth()

  const [expanded, setExpanded] = useState(false)

  return (

    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`flex-shrink-0 bg-white border-r flex flex-col min-h-[calc(100vh-3.5rem)] transition-all duration-300 ${expanded ? "w-56" : "w-14"} overflow-hidden`}
    >

      {/* BRAND */}

      <div className={`px-3 py-4 flex items-center gap-2 ${expanded ? "px-5" : "justify-center"}`}>

        <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-white">M</span>
        </div>

        {expanded && (
          <div>
            <p className="text-[13px] font-bold text-teal-700">MediSync</p>
            <p className="text-[10px] text-gray-500">Healthcare Platform</p>
          </div>
        )}

      </div>


      {/* NAVIGATION */}

      <nav className="flex-1 py-4 px-2 space-y-1">

        {navItems.map(({ label, icon: Icon, path }) => {

          const active = location.pathname === path

          return (

            <button
              key={path}
              onClick={() => navigate(path)}
              title={!expanded ? label : undefined}
              className={`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active
                  ? "bg-teal-50 text-teal-700"
                  : "text-gray-500 hover:bg-gray-100"
                }
                ${!expanded ? "justify-center" : ""}
              `}
            >

              <Icon className={`w-5 h-5 ${active ? "text-teal-600" : ""}`} />

              {expanded && <span>{label}</span>}

            </button>

          )
        })}

      </nav>


      {/* LOGOUT */}

      <div className="p-2 border-t">

        <button
          onClick={() => {
            logout()
            navigate("/")
          }}
          title={!expanded ? "Logout" : undefined}
          className={`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors ${!expanded ? "justify-center" : ""}`}
        >

          <LogOut className="w-5 h-5" />

          {expanded && <span>Logout</span>}

        </button>

      </div>

    </aside>
  )
}

export default DoctorSidebar