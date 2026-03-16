// 

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function Dashboard(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{flex:1,padding:"30px"}}>

<Navbar/>

<h2>Dashboard</h2>
<p>Welcome to MediSync</p>

<div style={{display:"flex",gap:"20px",marginTop:"20px"}}>

<div style={{background:"white",padding:"20px",borderRadius:"10px"}}>
<h4>ICU Beds</h4>
<h2>8 / 40</h2>
</div>

<div style={{background:"white",padding:"20px",borderRadius:"10px"}}>
<h4>General Beds</h4>
<h2>45 / 200</h2>
</div>

<div style={{background:"white",padding:"20px",borderRadius:"10px"}}>
<h4>Ventilators</h4>
<h2>6 / 25</h2>
</div>

</div>

</div>

</div>

)

}

export default Dashboard