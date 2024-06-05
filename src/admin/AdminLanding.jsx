import "../landing.css";
import bgimage from "./bg-landing-page_blue.svg";

function AdminLanding() {
  return (
    <div className="landingdiv" style={{backgroundImage: `url(${bgimage})`}}>
        <h1
            className="landing_text"
            style={{
            fontFamily: "Tilt Neon, sans-serif",
            fontWeight: "100",
            color:"white"
            }}
        >
            Student Mentor Program
        </h1>
        <h3
            className="landing_text"
            style={{
            fontFamily: "Tilt Neon, sans-serif",
            fontWeight: "100",
            fontSize: "30px",
            color:"white"
            }}
        >
            ISMP Peer Review-Admin Login
        </h3>
        
        <a style={{ fontWeight: "500" }} href="/admin/home">
        <button
              type="button"
              
              className="btn hover-effect-admin landing_btn" style={{height:"50px" , width:"90px", fontSize:"20px",fontWeight:"500"}}
            >
              Login
            </button></a>
    </div>
  );
}
export default AdminLanding;
