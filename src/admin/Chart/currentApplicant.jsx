import PieChartComponent from "./PieChartComponent.jsx";

function CurrentApplicant() {
  return (
    <div class="wrapper">
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="title text-center mb-5">
          <h1>What's your favorite FOOD?</h1>
        </div>
        <div class="chart-wrapper">
          <PieChartComponent />
        </div>
      </div>
    </div>
  );
}

export default CurrentApplicant;
