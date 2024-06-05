import "../landing.css";
import bgimage from "../../assets/bg-landing-page.svg";

function Landing() {
  return (
    <div className="landingdiv" style={{backgroundImage: `url(${bgimage})`}}>
        <h1
            className="landing_text"
            style={{
            fontFamily: "Tilt Neon, sans-serif",
            fontWeight: "100",
            
            }}
        >
            Student Mentor Program
        </h1>
        <h3
            className="landing_text"
            style={{
            fontFamily: "Tilt Neon, sans-serif",
            fontWeight: "100",
            fontSize: "30px"
            }}
        >
            ISMP Peer Review
        </h3>
        
        <a style={{ fontWeight: "500" }} href="/home">
        <button
              type="button"
              
              className="btn hover-effect-button landing_btn" style={{height:"50px" , width:"90px", fontSize:"20px",fontWeight:"500"}}
            >
              Login
            </button></a>
    </div>
  );
}
export default Landing;
