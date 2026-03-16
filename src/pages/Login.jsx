import { useState } from "react"
import "./Login.css"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
// import { auth, provider } from "../firebase"
import { signInWithPopup } from "firebase/auth"

import {
User,
Stethoscope,
Building2,
Ambulance,
Shield,
Mail,
Lock,
Phone
} from "lucide-react"

import { useTranslation } from "react-i18next"

function Login() {

const navigate = useNavigate()

const { t } = useTranslation()

const [role,setRole] = useState("Patient")

const [loginType, setLoginType] = useState("email")

const handleLogin = () => {

if(role==="Patient"){
navigate("/dashboard")
}

else if(role==="Doctor"){
navigate("/dashboard")
}

else if(role==="Admin"){
navigate("/hospitals")
}

else if(role==="Emergency"){
navigate("/emergency")
}

else if(role==="Gov"){
navigate("/map")
}

}

const handleGoogleLogin = async () => {

try{

const result = await signInWithPopup(auth, provider)

const user = result.user

console.log("User:", user)
console.log(user.displayName)
console.log(user.email)

navigate("/dashboard")

}

catch(error){

console.error("Google Login Error:", error)

}

}

return(

<>
<Navbar/>

<div className="login-container">

<div className="login-card">

{/* HEADER */}

<div className="login-header">

<h2>{t("signin")}</h2>
<p>National Digital Health Platform</p>

</div>

<div className="login-body">

{/* ROLE TITLE */}

<p className="role-title">{t("selectRole")}</p>

{/* ROLE SELECT */}

<div className="roles">

<div
className={`role ${role==="Patient"?"active":""}`}
onClick={()=>setRole("Patient")}
>
<div className="icon green">
<User size={20} color="white"/>
</div>
<p>Patient</p>
</div>

<div
className={`role ${role==="Doctor"?"active":""}`}
onClick={()=>setRole("Doctor")}
>
<div className="icon blue">
<Stethoscope size={20} color="white"/>
</div>
<p>Doctor</p>
</div>

<div
className={`role ${role==="Admin"?"active":""}`}
onClick={()=>setRole("Admin")}
>
<div className="icon hospital">
<Building2 size={20} color="white"/>
</div>
<p>Hospital Admin</p>
</div>

<div
className={`role ${role==="Emergency"?"active":""}`}
onClick={()=>setRole("Emergency")}
>
<div className="icon orange">
<Ambulance size={20} color="white"/>
</div>
<p>Emergency Coordinator</p>
</div>

<div
className={`role ${role==="Gov"?"active":""}`}
onClick={()=>setRole("Gov")}
>
<div className="icon purple">
<Shield size={20} color="white"/>
</div>
<p>Government Authority</p>
</div>

</div>


{/* EMAIL PHONE TOGGLE */}

<div className="toggle">

<div className={`slider ${loginType}`}></div>

<button
className={loginType === "email" ? "active" : ""}
onClick={() => setLoginType("email")}
>
<Mail size={16}/> {t("email")}
</button>

<button
className={loginType === "phone" ? "active" : ""}
onClick={() => setLoginType("phone")}
>
<Phone size={16}/> {t("phone")}
</button>

</div>


{/* EMAIL LOGIN */}

{loginType === "email" && (

<>

<label>{t("email")}</label>

<div className="input-group">

<Mail size={18} className="input-icon"/>

<input
type="email"
placeholder="user@mediconnect.in"
/>

</div>


<label>{t("password")}</label>

<div className="input-group">

<Lock size={18} className="input-icon"/>

<input
type="password"
placeholder="••••••••"
/>

</div>

</>

)}


{/* PHONE LOGIN */}

{loginType === "phone" && (

<>

<label>{t("phone")}</label>

<div className="input-group">

<Phone size={18} className="input-icon"/>

<input
type="text"
placeholder="+91 98765 43210"
/>

</div>


<label>OTP</label>

<div className="input-group">

<Lock size={18} className="input-icon"/>

<input
type="text"
placeholder="Enter OTP"
/>

</div>

</>

)}


{/* SIGN IN BUTTON */}

<button
className="signin-btn"
onClick={handleLogin}
>
{t("signin")}
</button>


<p className="or">OR</p>


{/* GOOGLE LOGIN */}

{/* <button className="google-btn">

<img
src="https://www.svgrepo.com/show/475656/google-color.svg"
width="18"
/>

Sign in with Google

</button> */}

<button
className="google-btn"
onClick={handleGoogleLogin}
>

<img
src="https://www.svgrepo.com/show/475656/google-color.svg"
width="18"
/>

Sign in with Google

</button>


<p className="demo">
Demo: Select any role and click Sign In
</p>

</div>

</div>

</div>

</>

)

}

export default Login