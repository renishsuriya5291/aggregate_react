import React,{ useEffect } from 'react'
import Footer from './Footer'
import WorkerNav from './WorkerNav'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/login');
    }
  }, [])
  

  return (
    <>

  {/* MAIN WRAPPER */}
  <div className="main-wrapper">
    {/* HEADER */}
    <WorkerNav />

    <section className="banner2">
  <div className="container">
    <div className="row">
      <div className="content-column col-lg-7">
        <div className="inner-column pe-xxl-5">
          <div className="banner-title mb-md-2-5">
            <h1 className="mb-3">Achieve Your Perfect Job</h1>
            <p className="display-28">Search Jobs to Get Opportunities</p>
          </div>
          {/*Start Job Search Form */}
          <div className="job-search-form">
            <form
              action="#!"
              method="post"
              encType="multipart/form-data"
            >
              <div className="quform-elements">
                <div className="row mt-n3">
                  {/* Begin Text input element */}
                  <div className="col-md-5 mt-3">
                    <div className="quform-element">
                      <div className="quform-input">
                        {/* <input id="job-search" class="form-control" type="text" name="job-search" placeholder="State" /> */}
                        <select
                          name="job-search"
                          id="job-search"
                          className="form-control"
                        >
                          <option>Gujarat</option>
                          <option>Maharashtra</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Text input element */}
                  <div className="col-md-4 mt-3">
                    <div className="quform-element">
                      <div className="quform-input">
                        {/* <input id="email" class="form-control" type="text" name="email" placeholder="City" /> */}
                        <select
                          name="job-search"
                          id="job-search"
                          className="form-control"
                        >
                          <option>Amreli</option>
                          <option>Junagadh</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Text input element */}
                  {/* Begin Submit button */}
                  <div className="col-md-3 mt-3">
                    <div className="quform-submit-inner">
                      <button className="butn" type="submit">
                        <span>Find Jobs</span>
                      </button>
                    </div>
                    <div className="quform-loading-wrap">
                      <span className="quform-loading" />
                    </div>
                  </div>
                  {/* End Submit button */}
                </div>
              </div>
            </form>
          </div>
          {/*End Job Search Form */}
          {/* Popular Search */}
          {/* <div class="popular-searches">
                          <span class="pe-3 font-weight-600">Lorem ipsum dolor sit amet, consectetur adipisicing
                              elit. Sed nulla quam excepturi nostrum hic fuga, nesciunt quo illum natus
                              dignissimos? </span>
                      </div> */}
          {/* End Popular Search */}
        </div>
      </div>
      <div className="image-column col-lg-5">
        <div className="image-box">
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="img/bg/whome1.jpg"
                className="border-radius-5 whimg1"
                alt="..."
              />
            </div>
            <div className="col-6">
              <img
                src="img/bg/whome2.jpg"
                className="mb-4 border-radius-5 whimg2"
                alt="..."
              />
              <img
                src="img/bg/whome3.jpg"
                className="border-radius-5 whimg3"
                alt="..."
              />
            </div>
          </div>
          <div className="banner-image-text d-none d-sm-block">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <i className="ti-export display-25 text-primary" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h6 mb-0">Find Your Jobs</h4>
                <small>It only takes a few Minitues</small>
              </div>
            </div>
          </div>
          <div className="banner-image-text bottom-text text-center d-none d-sm-block">
            <h6 className="mb-3">100+ Workers</h6>
            <ul className="list-unstyled users-list m-0">
              <li>
                <img
                  className="rounded-circle"
                  src="img/avatar/avatar-01.jpg"
                  alt="..."
                />
              </li>
              <li>
                <img
                  className="rounded-circle"
                  src="img/avatar/avatar-02.jpg"
                  alt="..."
                />
              </li>
              <li>
                <img
                  className="rounded-circle"
                  src="img/avatar/avatar-03.jpg"
                  alt="..."
                />
              </li>
              <li>
                <img
                  className="rounded-circle"
                  src="img/avatar/avatar-05.jpg"
                  alt="..."
                />
              </li>
              <li>
                <img
                  className="rounded-circle"
                  src="img/avatar/avatar-06.jpg"
                  alt="..."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  {/* JOB CATEGORIES
  ================================================== */}
  <section>
    <div className="container border-bottom border-color-extra-light-gray mb-6 pb-6">
      <div className="section-heading2">
        <span># State</span>
        <h2>
          <strong>Top trending</strong> State
        </h2>
      </div>
      <div className="job-categories owl-carousel owl-theme">
        <div className="card card-style5">
          <div
            className="categories-img bg-img cover-background min-height-250"
            style={{backgroundImage: 'url("img/bg/worker1.jpg")'}}
          />
          <div className="card-body">
            <span className="job-position">02 Jobs</span>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="categories-icon">
                  <img src="img/icons/icon-14.png" alt="..." />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5 mb-1">
                  <a href="job-listing.html" className="text-white">
                    Gujarat
                  </a>
                </h4>
                <p className="mb-0 display-30 text-white">
                  Amreli, Junagadh, Bhavnagar &amp; More..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-style5">
          <div
            className="categories-img bg-img cover-background min-height-250"
            style={{backgroundImage: 'url("img/bg/worker1.jpg")'}}
          />
          <div className="card-body">
            <span className="job-position">86 Jobs</span>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="categories-icon">
                  <img src="img/icons/icon-14.png" alt="..." />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5 mb-1">
                  <a href="job-listing.html" className="text-white">
                    Maharashtra
                  </a>
                </h4>
                <p className="mb-0 display-30 text-white">
                  Raybag, Amravati &amp; More..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-style5">
          <div
            className="categories-img bg-img cover-background min-height-250"
            style={{backgroundImage: 'url("img/bg/worker1.jpg")'}}
            
          />
          <div className="card-body">
            <span className="job-position">20 Jobs</span>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="categories-icon">
                  <img src="img/icons/icon-14.png" alt="..." />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5 mb-1">
                  <a href="job-listing.html" className="text-white">
                    Uttar Pradesh
                  </a>
                </h4>
                <p className="mb-0 display-30 text-white">
                  Bikapur, Ghazipur, Ghaziabad &amp; More..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-style5">
          <div
            className="categories-img bg-img cover-background min-height-250"
            style={{backgroundImage: 'url("img/bg/worker1.jpg")'}}
          />
          <div className="card-body">
            <span className="job-position">12 Jobs</span>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="categories-icon">
                  <img src="img/icons/icon-14.png" alt="..." />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5 mb-1">
                  <a href="job-listing.html" className="text-white">
                    Kerala
                  </a>
                </h4>
                <p className="mb-0 display-30 text-white">
                  Mannar, Vengola &amp; More ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-style5">
          <div
            className="categories-img bg-img cover-background min-height-250"
            style={{backgroundImage: 'url("img/bg/worker1.jpg")'}}

          />
          <div className="card-body">
            <span className="job-position">55 Jobs</span>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="categories-icon">
                  <img src="img/icons/icon-14.png" alt="..." />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5 mb-1">
                  <a href="job-listing.html" className="text-white">
                    Uttarakhand
                  </a>
                </h4>
                <p className="mb-0 display-30 text-white">
                  Kharsali, Mukhba &amp; More..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-style5">
          <div
            className="categories-img bg-img cover-background min-height-250"
            style={{backgroundImage: 'url("img/bg/worker1.jpg")'}}

          />
          <div className="card-body">
            <span className="job-position">43 Jobs</span>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="categories-icon">
                  <img src="img/icons/icon-14.png" alt="..." />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5 mb-1">
                  <a href="job-listing.html" className="text-white">
                    Madhya Pradesh
                  </a>
                </h4>
                <p className="mb-0 display-30 text-white">
                  Deori, Nandi &amp; More..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row mt-n1-9">
        <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
          <div className="d-sm-flex align-items-center">
            <div className="flex-shrink-0 mb-3 mb-sm-0">
              <img src="img/icons/icon-09.png" alt="..." />
            </div>
            <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
              <h3 className="countup h1 text-secondary mb-1">400</h3>
              <span className="text-muted">Jobs Posted</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
          <div className="d-sm-flex align-items-center">
            <div className="flex-shrink-0 mb-3 mb-sm-0">
              <img src="img/icons/icon-10.png" alt="..." />
            </div>
            <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
              <h3 className="countup h1 text-secondary mb-1">125</h3>
              <span className="font-weight-500 text-muted">Jobs Filled</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
          <div className="d-sm-flex align-items-center">
            <div className="flex-shrink-0 mb-3 mb-sm-0">
              <img src="img/icons/icon-11.png" alt="..." />
            </div>
            <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
              <h3 className="countup h1 text-secondary mb-1">220</h3>
              <span className="font-weight-500 text-muted">City</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9 text-center text-sm-start">
          <div className="d-sm-flex align-items-center">
            <div className="flex-shrink-0 mb-3 mb-sm-0">
              <img src="img/icons/icon-21.png" alt="..." />
            </div>
            <div className="flex-grow-1 border-sm-start border-color-extra-light-gray ps-sm-3 ps-xl-4 ms-sm-3 ms-xl-4">
              <h3 className="countup h1 text-secondary mb-1">150</h3>
              <span className="font-weight-500 text-muted">Workers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
  {/* RECENT JOBS
  ================================================== */}
  <section className="bg-light recent-job-style1">
    <div className="container">
      <div className="section-heading2">
        <span># Recent Jobs</span>
        <h2>
          <strong>Latest job</strong>
        </h2>
      </div>
      <div className="row mt-n1-9">
        <div className="col-md-6 col-lg-4 mt-1-9">
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
                  <h6 className="mb-0">renish</h6>
                  <span className="text-muted display-31">Nov 18, 2021</span>
                </div>
              </div>
              <h5 className="text-primary mb-3">
                10000<span className="text-muted display-31">/ Month</span>{" "}
              </h5>
              <div className="mb-4">
                <span className="display-30 me-2">
                  <i className="fas fa-map-marker-alt pe-2" />
                  surat, gujarat
                </span>
                <span className="display-30">
                  <i className="far fa-clock pe-2" />
                  10
                </span>
              </div>
              <a href="#" className="butn butn-md radius">
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
        <div className="col-md-6 col-lg-4 mt-1-9">
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
                  <h6 className="mb-0">renish</h6>
                  <span className="text-muted display-31">Nov 18, 2021</span>
                </div>
              </div>
              <h5 className="text-primary mb-3">
                10000<span className="text-muted display-31">/ Month</span>{" "}
              </h5>
              <div className="mb-4">
                <span className="display-30 me-2">
                  <i className="fas fa-map-marker-alt pe-2" />
                  surat, gujarat
                </span>
                <span className="display-30">
                  <i className="far fa-clock pe-2" />
                  10
                </span>
              </div>
              <a href="#" className="butn butn-md radius">
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
        <div className="col-md-6 col-lg-4 mt-1-9">
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
                  <h6 className="mb-0">renish</h6>
                  <span className="text-muted display-31">Nov 18, 2021</span>
                </div>
              </div>
              <h5 className="text-primary mb-3">
                10000<span className="text-muted display-31">/ Month</span>{" "}
              </h5>
              <div className="mb-4">
                <span className="display-30 me-2">
                  <i className="fas fa-map-marker-alt pe-2" />
                  surat, gujarat
                </span>
                <span className="display-30">
                  <i className="far fa-clock pe-2" />
                  10
                </span>
              </div>
              <a href="#" className="butn butn-md radius">
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
      <a
        href="candidate-details.html"
        className="butn w-100 radius fprofile_btn2"
      >
        More Jobs <i className="fa-solid fa-arrow-right" />
      </a>
    </div>
  </section>


{/* OUR PROCESS
  ================================================== */}
  <section className="bg-light">
    <div className="container">
      <div className="section-heading2">
        <span># How We Work</span>
        <h2>
          <strong>Our working</strong> process
        </h2>
      </div>
      <div className="row mt-n1-9">
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2 first">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img src="img/icons/icon-22.png" alt="..." />
              </div>
              <div className="process-contnet">
                <h4 className="h5">01. Create Account</h4>
                <p className="mb-0">Sign Up Your Profile</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img src="img/icons/icon-23.png" alt="..." />
              </div>
              <div className="process-contnet">
                <h4 className="h5">02. Display Job</h4>
                <p className="mb-0">Searches Job</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img src="img/icons/icon-24.png" alt="..." />
              </div>
              <div className="process-contnet">
                <h4 className="h5">03. Find Your Job</h4>
                <p className="mb-0">Choose A Suitable Job</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mt-1-9">
          <div className="process-style2 last">
            <div className="process-arrow">
              <div className="process-icon-box">
                <img src="img/icons/icon-25.png" alt="..." />
              </div>
              <div className="process-contnet">
                <h4 className="h5">04. Apply job</h4>
                <p className="mb-0">Get Job Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



   {/* FEATURED CANDIDATES
  ================================================== */}
  <section>
    <div className="container">
      <div className="section-heading2">
        <span># Farmers</span>
        <h2>
          <strong>Top</strong> worker's
        </h2>
      </div>
      <div className="featured-candidate owl-carousel owl-theme">
        <div className="card card-style7">
          <div className="card-body">
            <a className="candidate-favourite" href="#!">
              <i className="far fa-heart" />
            </a>
            <img
              src="img/avatar/user.png"
              style={{ width: 96, height: 96 }}
              className="border-radius-50 mb-3"
              alt="..."
            />
            <div className="candidate-info">
              <h4 className="h5">
                <a href="#">renish</a>
              </h4>
              <span className="display-30 text-muted d-block mb-2 font-weight-500" />
              <div className="display-30 text-warning">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span className="px-2 py-1 bg-primary text-white ms-2 display-31">
                  4.0
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>
                <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                <strong>surat, gujarat</strong>
              </span>
              <span>
                <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                <strong>10000/ Month</strong>
              </span>
              <span>
                <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                <strong>10</strong>
              </span>
            </div>
            <a href="#" className="butn w-100 radius">
              View Profile
            </a>
          </div>
        </div>
        <div className="card card-style7">
          <div className="card-body">
            <a className="candidate-favourite" href="#!">
              <i className="far fa-heart" />
            </a>
            <img
              src="img/avatar/user.png"
              style={{ width: 96, height: 96 }}
              className="border-radius-50 mb-3"
              alt="..."
            />
            <div className="candidate-info">
              <h4 className="h5">
                <a href="#">renish</a>
              </h4>
              <span className="display-30 text-muted d-block mb-2 font-weight-500" />
              <div className="display-30 text-warning">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span className="px-2 py-1 bg-primary text-white ms-2 display-31">
                  4.0
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>
                <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                <strong>surat, gujarat</strong>
              </span>
              <span>
                <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                <strong>10000/ Month</strong>
              </span>
              <span>
                <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                <strong>10</strong>
              </span>
            </div>
            <a href="#" className="butn w-100 radius">
              View Profile
            </a>
          </div>
        </div>
      </div>
      {/* <a href="candidate-details.html" class="butn w-100 radius fprofile_btn">More Profile <i class="fa-solid fa-arrow-right"></i></a> */}
    </div>
  </section>


  {/* TESTIMONIAL
  ================================================== */}
  <section className="bg-light">
    <div className="container">
      <div className="section-heading2">
        <span># Reviews</span>
        <h2>
          <strong>Our satisfied</strong> Users
        </h2>
      </div>
      <div className="testimonial2-carousel owl-carousel owl-theme">
        <div className="testimonial-wrapper">
          <div className="testimonial-icon">
            <i className="ti-quote-left" />
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quasi architecto aspernatur nesciunt sint totam tempora! Illum
            repellat, esse eaque maiores excepturi optio!
          </p>
          <div className="testimonial-box">
            <div className="d-sm-flex justify-content-between align-items-center">
              <div className="mb-2 mb-sm-0">
                <h4 className="h5">suriya</h4>
                {/* <span class="designation">Web Designer</span> */}
              </div>
              <div className="display-31 text-warning">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="candidate-details.html"
        className="butn w-100 radius fprofile_btn2"
        style={{ maxWidth: 175 }}
      >
        More Reviews <i className="fa-solid fa-arrow-right" />
      </a>
    </div>
  </section>
  {/* FOOTER
  ================================================== */}
  <Footer />




   </div>
   </>
  )
}

export default Home