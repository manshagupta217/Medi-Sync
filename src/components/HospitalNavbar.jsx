// import "./HospitalNavbar.css"
// import { Search, Bell, User } from "lucide-react"

// function HospitalNavbar(){

// return(

// <div className="admin-navbar">

//   {/* LEFT - LOGO */}
//   {/* <div className="nav-left">
//     <div className="logo-circle">M</div>
//     <span className="logo-text">MediSync</span>
//   </div> */}


//   {/* CENTER - SEARCH */}
//   <div className="nav-center">

//     <div className="search-box">

//       <Search size={18} className="search-icon"/>

//       <input
//       type="text"
//       placeholder="Search..."
//       />

//     </div>

//   </div>


//   {/* RIGHT - NOTIFICATION + USER */}
//   <div className="nav-right">

//     <div className="nav-icon">

//       <Bell size={20}/>

//       <span className="badge">3</span>

//     </div>

//     <div className="user">

//       <User size={18}/>

//       <div className="user-info">
//         <span>Admin Sharma</span>
//         <small>Hospital Admin</small>
//       </div>

//     </div>

//   </div>

// </div>

// )

// }

// export default HospitalNavbar

// import "./HospitalNavbar.css"

// function HospitalNavbar(){

// return(

// <div className="admin-navbar">

// <div className="nav-center">

// <div className="search-box">

// <input
// type="text"
// placeholder="Search..."
// />

// </div>

// </div>

// <div className="nav-right">

// <div>Bell</div>

// <div className="user">
// <span>Admin Sharma</span>
// </div>

// </div>

// </div>

// )

// }

// export default HospitalNavbar

import Sidebar from "../components/Sidebar"
import HospitalNavbar from "../components/HospitalNavbar"

function Hospitals(){

return(
<div style={{display:"flex"}}>

<Sidebar/>

<div style={{flex:1}}>

<HospitalNavbar/>

<div style={{padding:"40px"}}>
<h1>Hospital Page</h1>
</div>

</div>

</div>
)

}

export default Hospitals