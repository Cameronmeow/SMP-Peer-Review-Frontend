import Chart from "./Chart";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import ReviewTable from "./Component/ReviewTable";

function Review(){
    return(
        <>
        <Header/>
        <div className="container">
            <div className="row">
            <div className="col-lg-4"><Chart question="Question 1" /></div>
            <div className="col-lg-4"><Chart question="Question 2" /></div>
            <div className="col-lg-4"><Chart question="Question 3" /></div>
            </div>
            <div className="row">
            <div className="col-lg-4"><Chart question="Question 4" /></div>
            <div className="col-lg-4"><Chart question="Question 5" /></div>
            <div className="col-lg-4"><Chart question="Question 6" /></div>
            </div>
        </div>
        <div className= "table-box" style={{fontFamily: "Tilt Neon, sans-serif",fontWeight: "100",fontStyle: "normal"}}>
        <div></div>
        <ReviewTable question="question 7"/>
        <ReviewTable question="question 8"/>
        <ReviewTable question="question 9"/>
        <h1 className="text-center">Low Rating Comments</h1>
        <ReviewTable question="question 1"/>
        <ReviewTable question="question 2"/>
        <ReviewTable question="question 3"/>
        <ReviewTable question="question 4"/>
        <ReviewTable question="question 5"/>
        <ReviewTable question="question 6"/>
        </div>
        <Footer/>
        </>
    );
}
export default Review;