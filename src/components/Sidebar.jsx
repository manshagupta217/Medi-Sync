// import { NavLink } from "react-router-dom"
// import {
// LayoutDashboard,
// Siren,
// Box,
// Share2,
// AlertTriangle,
// Stethoscope,
// FileText,
// Map,
// BarChart3,
// User
// } from "lucide-react"

// import "./Sidebar.css"

// function Sidebar(){

// return(

// <div className="sidebar">

// {/* LOGO */}

// <div className="sidebar-logo">

// <div className="logo-icon">M</div>

// <div>
// <h2>MediSync</h2>
// <p>Healthcare Platform</p>
// </div>

// </div>


// {/* MENU */}

// <nav className="menu">

// <NavLink to="/dashboard" className="menu-item">
// <LayoutDashboard size={24}/>
// <span>Dashboard</span>
// </NavLink>

// <NavLink to="/emergency" className="menu-item">
// <Siren size={24}/>
// <span>Emergency</span>
// </NavLink>

// <NavLink to="/resources" className="menu-item">
// <Box size={24}/>
// <span>Resources</span>
// </NavLink>

// <NavLink to="/sharing" className="menu-item">
// <Share2 size={24}/>
// <span>Resource Sharing</span>
// </NavLink>

// <NavLink to="/equipment" className="menu-item">
// <AlertTriangle size={24}/>
// <span>Equipment</span>
// </NavLink>

// <NavLink to="/doctors" className="menu-item">
// <Stethoscope size={24}/>
// <span>Doctors</span>
// </NavLink>

// <NavLink to="/patients" className="menu-item">
// <FileText size={24}/>
// <span>Patient Records</span>
// </NavLink>

// <NavLink to="/map" className="menu-item">
// <Map size={24}/>
// <span>Network Map</span>
// </NavLink>

// <NavLink to="/analytics" className="menu-item">
// <BarChart3 size={24}/>
// <span>Analytics</span>
// </NavLink>

// <NavLink to="/profile" className="menu-item">
// <User size={24}/>
// <span>Profile</span>
// </NavLink>

// </nav>
// </div>

// )

// }

// export default Sidebar


import { NavLink } from "react-router-dom"
import {
LayoutDashboard,
Siren,
Box,
Share2,
AlertTriangle,
Stethoscope,
FileText,
Map,
BarChart3,
User
} from "lucide-react"

import "./Sidebar.css"

function Sidebar(){

return(

<div className="sidebar">

{/* LOGO */}

<div className="sidebar-logo">

<div className="logo-icon">M</div>

<div>
<h2>MediSync</h2>
<p>Healthcare Platform</p>
</div>

</div>


{/* MENU */}

<nav className="menu">

<NavLink
to="/dashboard"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<LayoutDashboard size={24}/>
<span>Dashboard</span>
</NavLink>


<NavLink
to="/emergency"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<Siren size={24}/>
<span>Emergency</span>
</NavLink>


<NavLink
to="/resources"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<Box size={24}/>
<span>Resources</span>
</NavLink>


<NavLink
to="/sharing"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<Share2 size={24}/>
<span>Resource Sharing</span>
</NavLink>


<NavLink
to="/equipment"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<AlertTriangle size={24}/>
<span>Equipment</span>
</NavLink>


<NavLink
to="/doctors"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<Stethoscope size={24}/>
<span>Doctors</span>
</NavLink>


<NavLink
to="/patients"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<FileText size={24}/>
<span>Patient Records</span>
</NavLink>


<NavLink
to="/map"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<Map size={24}/>
<span>Network Map</span>
</NavLink>


<NavLink
to="/analytics"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<BarChart3 size={24}/>
<span>Analytics</span>
</NavLink>


<NavLink
to="/profile"
className={({ isActive }) =>
isActive ? "menu-item active" : "menu-item"
}
>
<User size={24}/>
<span>Profile</span>
</NavLink>

</nav>

</div>

)

}

export default Sidebar