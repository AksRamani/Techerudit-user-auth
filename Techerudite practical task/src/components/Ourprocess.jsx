import React from "react";
// import "./Process.css"; // Assuming you are using a separate CSS file for styling

const Ourprocess = () => {
  return (
    <section className="process-section">
      <h2>Our Process</h2>
      <div className="process-steps">
        <div className="process-step">
          <div className="circle">
            <div className="circle-content">1</div>
          </div>
          <h3>Step 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            diam nonummy eirmod tempor.
          </p>
        </div>

        <div className="process-step">
          <div className="circle">
            <div className="circle-content">2</div>
          </div>
          <h3>Step 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            diam nonummy eirmod tempor.
          </p>
        </div>

        <div className="process-step">
          <div className="circle">
            <div className="circle-content">3</div>
          </div>
          <h3>Step 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            diam nonummy eirmod tempor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ourprocess;
