import logo from '../logo_blue.svg'
function Footer() {
  return (
    <div className='justify-content-center align-items-center'>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      
        <footer
          className="text-center text-lg-start"
          style={{ backgroundColor: "#FFC107 ",
          fontFamily: "Tilt Neon, sans-serif",
          fontWeight: "100",
          fontStyle: "normal" }}
        >
        <div className="container d-flex justify-content-center flex-column py-1 align-items-center">
        <img src={logo} style={{ height: "90px", padding: "9px" }} href="https://smp.gymkhana.iitb.ac.in/" alt="smp logo"/>      
        
          <div className="container d-flex justify-content-center py-3">
            <button
              type="button"
              className="btn btn-black btn-lg btn-floating mx-2"
              style={{ backgroundColor: "#142749 ", color: "#FFC107" }}
            >
              <a href="https://www.facebook.com/smpiitb" target="_blank" style={{textDecoration:"none" , color: "#FFC107" }}><i className="fab fa-facebook-f"></i></a>
            </button>
            <button
              type="button"
              className="btn btn-black btn-lg btn-floating mx-2"
              style={{ backgroundColor: "#142749 ", color: "#FFC107" }}
            >
            <a href="https://www.instagram.com/smp.iitb/" target="_blank" style={{textDecoration:"none" , color: "#FFC107" }}><i className="fab fa-instagram"></i></a>

            </button>
           
          </div>
          </div>
          {/* <!-- Copyright --> */}
          <div
            className="text-center text-white p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            Made with ❤️ SMP Web Team
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      
      {/* <!-- End of .container --> */}
    </div>
  );
}

export default Footer;
