import React from "react";
import background from "../assets/Pathmain-bg-bottom.png";

const HeroSection = () => {
  return (
    <>
      <div class="row flex-lg-row-reverse align-items-center g-5 w-100">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={background}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 d-flex flex-column gap20">
          <h2 class="f36 fw-semibold text-uppercase">
            How much could you save?
          </h2>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-flex flex-column bg-white shadow p-4 rounded-4">
            <p class="lead mb-4 text-center fw-bold">
              Is your turnover expected to be more than £85k?
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                class="btn btn-primary px-3 gap-3 rounded-pill"
              >
                Yes
              </button>
              <button
                type="button"
                class="btn btn-primary px-3 gap-3 rounded-pill"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
