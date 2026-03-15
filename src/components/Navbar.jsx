import { useState } from "react"
import "./Navbar.css"
import i18n from "../i18n"
import { useTranslation } from "react-i18next"

function Navbar(){

const { t } = useTranslation()

const [open,setOpen] = useState(false)
const [lang,setLang] = useState("English")

const languages = ["English","हिंदी","मराठी","ગુજરાતી"]

return(

<div className="navbar">

<div className="nav-left">

<div className="logo-circle">
M
</div>

<div className="nav-text">
<h2>{t("appName")}</h2>
<p>{t("platform")}</p>
</div>

</div>


<div className="nav-right">

<i className="fa-solid fa-globe globe-icon"></i>

<button
className="lang-btn"
onClick={()=>setOpen(!open)}
>

<span>{lang}</span>

<i className="fa-solid fa-chevron-down"></i>

</button>


{open && (

<div className="lang-dropdown">

{languages.map((l)=>(
<div
key={l}
className="lang-option"
onClick={()=>{

setLang(l)
setOpen(false)

if(l==="English") i18n.changeLanguage("en")
if(l==="हिंदी") i18n.changeLanguage("hi")
if(l==="मराठी") i18n.changeLanguage("mr")
if(l==="ગુજરાતી") i18n.changeLanguage("gu")

}}
>

{lang===l && "✓ "} {l}

</div>
))}

</div>

)}

</div>

</div>

)

}

export default Navbar