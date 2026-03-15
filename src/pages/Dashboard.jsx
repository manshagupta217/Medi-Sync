import Sidebar from "../components/Sidebar"
import HospitalNavbar from "../components/HospitalNavbar"
import "./Dashboard.css"
import HospitalTable from "../components/HospitalTable"

function Dashboard(){

return(

<div className="dashboard-layout">

<Sidebar/>

<div className="dashboard-main">

<HospitalNavbar/>

<div className="dashboard-content">

<h2>Welcome, Suresh Kumar 👋</h2>
<p>City General Hospital — Live Status</p>

{/* RESOURCE CARDS */}

<div className="cards">

<div className="card">
<h4>ICU Beds</h4>
<h2>8 / 40</h2>
<div className="progress">
<div className="bar orange"></div>
</div>
<p>80% utilized</p>
</div>

<div className="card">
<h4>General Beds</h4>
<h2>45 / 200</h2>
<div className="progress">
<div className="bar orange"></div>
</div>
<p>78% utilized</p>
</div>

<div className="card">
<h4>Ventilators</h4>
<h2>6 / 25</h2>
<div className="progress">
<div className="bar orange"></div>
</div>
<p>76% utilized</p>
</div>

<div className="card">
<h4>Operation Theatres</h4>
<h2>3 / 8</h2>
<div className="progress">
<div className="bar green"></div>
</div>
<p>63% utilized</p>
</div>

<div className="card">
<h4>Ambulances</h4>
<h2>4 / 12</h2>
<div className="progress">
<div className="bar green"></div>
</div>
<p>67% utilized</p>
</div>

</div>

{/* Hospital Network Table */}

<HospitalTable/>

{/* Network Capacity */}

<div className="capacity-section">

<h3>Network Capacity</h3>

<div className="capacity-grid">

<div className="capacity-card">
<h4>City</h4>
<h2 className="green">38%</h2>
<p>Available</p>
</div>

<div className="capacity-card">
<h4>Metro</h4>
<h2 className="orange">12%</h2>
<p>Available</p>
</div>

<div className="capacity-card">
<h4>District</h4>
<h2 className="red">3%</h2>
<p>Available</p>
</div>

<div className="capacity-card">
<h4>Sunrise</h4>
<h2 className="green">65%</h2>
<p>Available</p>
</div>

<div className="capacity-card">
<h4>National</h4>
<h2 className="orange">22%</h2>
<p>Available</p>
</div>

</div>

</div>

</div>

</div>

</div>

)

}

export default Dashboard