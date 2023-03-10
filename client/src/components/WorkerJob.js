import React from 'react'
import Footer from './Footer'
import WorkerNav from './WorkerNav'

const WorkerJob = () => {
  return (
    <>
        {/* MAIN WRAPPER */}
        <div className="main-wrapper">
        <WorkerNav />
            
  {/* PAGE TITLE
  ================================================== */}
  <section className="page-title-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h1 className="h2 mb-4">Aggregate Agro</h1>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="page-title-list">
                <ol className="breadcrumb d-inline-block mb-0">
                  <li className="breadcrumb-item d-inline-block active">
                    <a href="#!" className="text-primary">
                      Get Your Opportunities
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


{/* JOB GRID 1 - LEFT SIDEBAR
  ================================================== */}
  <section>
    <div className="container">
      <div className="row mt-n6">
        {/* job-grid left */}
        <div className="col-lg-3 order-2 order-lg-1 mt-6">
          <div className="sidebar">
            <div className="sidebar-title">Search By</div>
            <div className="widget search">
              <form action="#!" className="search-bar">
                <div className="quform-element form-group">
                  <label htmlFor="search">Search By State</label>
                  <div className="quform-input">
                    <input
                      className="form-control border-radius-10"
                      id="search"
                      type="text"
                      name="search"
                      placeholder="search State"
                    />
                  </div>
                </div>
                <div className="quform-element form-group">
                  <label htmlFor="search">Search By City</label>
                  <div className="quform-input">
                    <input
                      className="form-control border-radius-10"
                      id="search"
                      type="text"
                      name="search"
                      placeholder="search City"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="sidebar-title">Salary Range</div>
            <div className="widget">
              <div className="price-range" />
            </div>
            <div className="sidebar-title">Job Type</div>
            <div className="widget">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="full-time"
                  id="full-time"
                />
                <label className="form-check-label mb-0" htmlFor="full-time">
                  Full Time
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="part-time"
                  id="part-time"
                />
                <label className="form-check-label mb-0" htmlFor="part-time">
                  Part Time
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="temporary"
                  id="temporary"
                />
                <label className="form-check-label mb-0" htmlFor="temporary">
                  Temporary
                </label>
              </div>
            </div>
            <div className="sidebar-title">Experience</div>
            <div className="widget">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="fresher"
                />
                <label className="form-check-label mb-0" htmlFor="fresher">
                  Fresher
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="oneyear"
                />
                <label className="form-check-label mb-0" htmlFor="oneyear">
                  Less than 1 year
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="twoyear"
                />
                <label className="form-check-label mb-0" htmlFor="twoyear">
                  2 Year
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="threeyear"
                />
                <label className="form-check-label mb-0" htmlFor="threeyear">
                  3 Year
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="fouryear"
                />
                <label className="form-check-label mb-0" htmlFor="fouryear">
                  4 Year
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="fouryear"
                />
                <label className="form-check-label mb-0" htmlFor="fouryear">
                  Above 4 Year
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* end job-grid left */}
        {/* job-grid right */}
        <div className="col-lg-9 order-1 order-lg-2 mt-6 job_offer">
          <div className="ps-lg-1-6 ps-xl-1-9">
            <div className="row mt-n1-9">
              <div className="col-md-6 mt-1-9">
                <div className="card border-color-extra-light-gray h-100 border-radius-5">
                  <div className="card-body p-1-6 p-xl-1-9">
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0">
                        <img
                          src="img/avatar/user.png"
                          className="border-radius-50 w-40px"
                          alt="..."
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">suriya</h6>
                        <span className="text-muted display-31">
                          Nov 18, 2021
                        </span>
                      </div>
                    </div>
                    <h5 className="text-primary mb-3">
                      12000{" "}
                      <span className="text-muted display-31">/ Month</span>{" "}
                    </h5>
                    <div className="mb-4">
                      <span className="display-30 me-2">
                        <i className="fas fa-map-marker-alt pe-2" />
                        Amreli, Gujarat
                      </span>
                      <span className="display-30">
                        <i className="far fa-clock pe-2" />
                        Full Time
                      </span>
                    </div>
                    <a href="job-details.html" className="butn butn-md radius">
                      Apply Now
                    </a>
                    <div className="farmer_con">
                      <ul>
                        <li>
                          {" "}
                          <a href="#">
                            {" "}
                            <i className="fa-solid fa-envelope" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            {" "}
                            <i className="fa-solid fa-phone" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <i className="fa-solid fa-circle" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-1-9">
                <div className="card border-color-extra-light-gray h-100 border-radius-5">
                  <div className="card-body p-1-6 p-xl-1-9">
                    <div className="d-flex mb-3">
                      <div className="flex-shrink-0">
                        <img
                          src="img/avatar/user.png"
                          className="border-radius-50 w-40px"
                          alt="..."
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">suriya</h6>
                        <span className="text-muted display-31">
                          Nov 18, 2021
                        </span>
                      </div>
                    </div>
                    <h5 className="text-primary mb-3">
                      12000{" "}
                      <span className="text-muted display-31">/ Month</span>{" "}
                    </h5>
                    <div className="mb-4">
                      <span className="display-30 me-2">
                        <i className="fas fa-map-marker-alt pe-2" />
                        Amreli, Gujarat
                      </span>
                      <span className="display-30">
                        <i className="far fa-clock pe-2" />
                        Full Time
                      </span>
                    </div>
                    <a href="job-details.html" className="butn butn-md radius">
                      Apply Now
                    </a>
                    <div className="farmer_con">
                      <ul>
                        <li>
                          {" "}
                          <a href="#">
                            {" "}
                            <i className="fa-solid fa-envelope" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            {" "}
                            <i className="fa-solid fa-phone" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <i className="fa-solid fa-circle" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end job-grid right */}
      </div>
    </div>
  </section>
  <Footer />


        </div>
    </>
  )
}

export default WorkerJob