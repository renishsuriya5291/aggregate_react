import WorkerNav from './WorkerNav'
import Footer from './Footer'
import { useContext,useEffect, useState,useRef } from 'react'
import AAContext from '../context/AAContext'
import { useNavigate } from 'react-router-dom'

const WorkerProfile = () => {
    const navigate = useNavigate();
    const context = useContext(AAContext)
    const { getUserData, userData, updateUser } = context;
    const ref = useRef(null);

    const [address, setAddress] = useState('')
    const [age, setAge] = useState(0)
    const [work_hour, setWork_hour] = useState(0)
    const [gender, setGender] = useState('')
    const [name, setName] = useState()
    const [occupation, setOccupation] = useState('')

    const handleEdit = ()=>{
      getUserData();
      setName(userData.name);
      setAddress(userData.address);
      setAge(userData.age);
      setWork_hour(userData.work_hour);
      setGender(userData.gender);
      setOccupation(userData.occupation);
    }

    const handleChange = (e)=>{
      if(e.target.name == 'name'){
        setName(e.target.value);
      }
      else if(e.target.name == 'age'){
        setAge(e.target.value);
      }
      else if(e.target.name == 'work_hour'){
        setWork_hour(e.target.value);
      }
      else if(e.target.name == 'gender'){
        setGender(e.target.value);
      }
      else if(e.target.name == 'occupation'){
        setOccupation(e.target.value);
      }
      else if(e.target.name == 'address'){
        setAddress(e.target.value);
      }
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      // console.log(name,address,occupation,gender,work_hour,age)
      updateUser({name,address,occupation,gender,work_hour,age})
      ref.current.click();
    }

    

  return (
    <>
    <div className="main-wrapper">
    <WorkerNav />
        {/* CANDIDATE DETAILS
  ================================================== */}
  <section>
    <div className="container" id="actionblock">
      <div className="row mb-2-5 mb-lg-2-9">
        <div className="col-lg-12">
          <div className="p-1-6 p-lg-1-9 border border-color-extra-light-gray border-radius-10">
            <div className="row align-items-center">
              <div className="col-lg-9 mb-4 mb-lg-0">
                <div className="text-center text-lg-start d-lg-flex align-items-center">
                  <div className="flex-shrink-0 mb-4 mb-lg-0">
                    <img
                      src="img/avatar/user.png"
                      style={{ width: 96, height: 96 }}
                      className="border-radius-50"
                      alt="..."
                    />
                  </div>
                  <div className="flex-grow-1 ms-lg-4">
                    <div className="display-30 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                        5.0
                      </span>
                    </div>
                    <h4 className="mb-3">{userData.name}</h4>
                    <span className="me-2">
                      <i className="ti-briefcase pe-2 text-secondary" />
                      {userData.occupation ===''?"Worker":userData.occupation}
                    </span>
                    <span className="me-2">
                      <i className="ti-location-pin pe-2 text-secondary" />
                      {userData.address === '' ? 'Not set':userData.address}
                    </span>
                    <span className="me-2">
                      <i className="ti-time pe-2 text-secondary" />
                      {userData.work_hour === '' ? 'Not set':userData.work_hour}
                    </span>
                    <span>
                      <i className="far fa-money-bill-alt pe-2 text-secondary" />
                      10000
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-12">
                    {/* <a href="#!" class="butn mb-3 w-100 text-center">Apply For Job</a> */}
                    <div
                      className="modal fade"
                      id="exampleModalToggle"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel"
                      tabIndex={-1}
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        id="modal"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalToggleLabel"
                            >
                              Edit profile
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                name='name'
                                id="name"
                                className="form-control"
                                aria-describedby="emailHelp"
                                value={name}
                                onChange={handleChange}
                                required="true"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                id="address"
                                onChange={handleChange}
                                value={address}
                                name="address"
                                className="form-control"
                                defaultValue="address"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Gender
                              </label>
                              <div className="options d-flex">
                              <select class="form-select" name="gender" onChange={handleChange} aria-label="Default select example">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Age
                              </label>
                              <input
                                type="number"
                                id="age"
                                name="age"
                                onChange={handleChange}
                                className="form-control"
                                defaultValue="age"
                                value={age}
                                required=""
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Work Hours
                              </label>
                              <input
                                type="number"
                                id="workhour"
                                className="form-control"
                                defaultValue={10}
                                value={work_hour}
                                onChange={handleChange}
                                required=""
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Occupation
                              </label>
                              <div className="options d-flex">
                              <select class="form-select" name='occupation' onChange={handleChange} aria-label="Default select example">
                                <option value="farmer">Farmer</option>
                                <option value="worker">Worker</option>
                                <option value="seller">Seller</option>
                                <option value="yard">Yard</option>
                              </select>
                              </div>
                            </div>
                            <div
                              id="loader"
                              style={{ display: "none", textAlign: "center" }}
                            >
                              <img
                                src="img/gif/load.gif"
                                alt=""
                                style={{ height: "3rem", width: "3rem" }}
                              />
                            </div>
                            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                            <button
                              id="follow"
                              className="butn mb-3 w-100 text-center follow"
                            >
                              Submit
                            </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalToggle2"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel2"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalToggleLabel2"
                            >
                              Modal 2
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            Hide this modal and show the first with the button
                            below.
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-primary"
                              data-bs-target="#exampleModalToggle"
                              data-bs-toggle="modal"
                            >
                              Back to first
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="butn mb-3 w-100 text-center"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                      onClick={handleEdit}
                      ref={ref}
                    >
                      Edit profile
                    </a>
                  </div>
                  <div className="col-12">
                    <a href="#!" className="butn w-100 text-center">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mb-2-5 mb-lg-2-9 pb-2-5 pb-lg-2-9 border-bottom border-color-extra-light-gray"
        id="recent_req"
      >
        <div className="col-lg-8 mb-1-9 mb-lg-0">
          <div className="pe-lg-1-6 pe-xl-1-9">
            <div className="row">
              <div className="col-lg-12 mb-1-9 mb-lg-2-5">
                <div className="dashboard-title">
                  <h5 className="mb-0">Recent Request</h5>
                </div>
                <div className="dashboard-widget">
                  <div
                    className="row mt-n1-9"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div className="col-xxl-6 mt-1-9" style={{ width: "100%" }}>
                      <div className="card-style2">
                        <div className="card-body">
                          <div className="d-sm-flex justify-content-between align-items-center">
                            <div className="d-sm-flex text-center text-sm-start mb-4 mb-sm-0">
                              <div
                                className="flex-shrink-0 mb-3 mb-sm-0"
                                style={{ marginTop: "1rem" }}
                              >
                                <img
                                  src="img/avatar/user.png"
                                  style={{ height: "4rem", width: "4rem" }}
                                  alt="User Default Image"
                                  className="border-radius-50"
                                />
                              </div>
                              <div className="flex-grow-1 ms-sm-3  mt-4">
                                <h5>
                                  <a href="employer-details.html">name</a>
                                </h5>
                                <div className="mb-3">
                                  <span className="text-secondary me-2 display-30">
                                    occupation
                                  </span>
                                  <span className="vertical-align-middle display-30">
                                    <i className="ti-location-pin pe-2 text-secondary" />
                                    address
                                  </span>
                                </div>
                                {/* <div>
                                                  <span class="company-info">App</span>
                                                  <span class="company-info">Development</span>
                                              </div> */}
                              </div>
                            </div>
                            <ul className="list-style pl-0">
                              {/* <li><a href="#!"><span class="ti-eye"></span></a></li> */}
                              <li>
                                <input
                                  type="hidden"
                                  id="acc_inp"
                                  defaultValue="id"
                                />
                                <input
                                  type="hidden"
                                  id="rej_inp"
                                  defaultValue="id"
                                />
                                <div
                                  id="acc_loader"
                                  style={{
                                    display: "none",
                                    textAlign: "center"
                                  }}
                                >
                                  <img
                                    src="img/gif/load.gif"
                                    alt=""
                                    style={{ height: "3rem", width: "3rem" }}
                                  />
                                </div>
                                <button
                                  className="butn acceptbtn"
                                  id="acceptbtn"
                                >
                                  <span className="ti-check" />
                                </button>
                              </li>
                              <li>
                                <input
                                  type="hidden"
                                  id="acc_inp"
                                  defaultValue="acc_id"
                                />
                                <input
                                  type="hidden"
                                  id="rej_inp"
                                  defaultValue="rej_id"
                                />
                                <div
                                  id="rej_loader"
                                  style={{
                                    display: "none",
                                    textAlign: "center"
                                  }}
                                >
                                  <img
                                    src="img/gif/load.gif"
                                    alt=""
                                    style={{ height: "3rem", width: "3rem" }}
                                  />
                                </div>
                                <button
                                  className="butn rejectbtn"
                                  id="rejectbtn"
                                >
                                  <span className="ti-close" />
                                </button>
                              </li>
                              {/* <li><button ><span class="ti-check"></span></button></li> */}
                              {/* <li><button ><span class="ti-close"></span></button></li> */}
                              {/* <li><a href="#!"><span class="ti-trash"></span></a></li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-1-9 mb-lg-2-5">
                <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                  <h4 className="mb-3">Candidates About :</h4>
                  <p>
                    We're seeking out a person with the innovative spark, eye
                    for example and layout, ardour for images and cappotential
                    to supply excessive first-rate layout collaterals
                    end-to-end. Draft mockups of internet site designs,
                    brochures, iconography, and every other advertising and
                    marketing substances required. Collaborate with advertising
                    and marketing groups and control to speak about which
                    mockups are effective, and use their remarks to expand very
                    last drafts. Revise the paintings of preceding designers to
                    create a unified aesthetic for our emblem substances. Work
                    on a couple of initiatives at once, and continually meet
                    draft deadlines. Communicate often with customers to replace
                    them at the development of the venture and to reply any
                    questions they may have.
                  </p>
                  <p className="mb-0">
                    A talented professional with an educational heritage in IT
                    and verified industrial improvement enjoy as C++ developer
                    given that 1999. Has a valid understanding of the software
                    program improvement lifestyles cycle. Was concerned in
                    greater than one hundred forty software program improvement
                    outsourcing projects.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 mb-1-9 mb-lg-2-5">
                <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                  <h4 className="mb-3">Education :</h4>
                  <p className="mb-4">
                    You want not less than a Bachelor's Degree in Marketing or
                    Business Administration to paintings as a marketer. An
                    organization can also additionally need you to get a
                    master's diploma to develop your communication, income and
                    public speakme talents earlier than getting into the
                    workforce. Earning a master's diploma can growth your
                    incomes ability and your eligibility to serve in management
                    roles for an organization.
                  </p>
                  <div className="vertical-timeline">
                    <div className="d-block d-sm-flex justify-content-between mb-1-9">
                      <div className="left-side">
                        <h5 className="display-28">Modern College</h5>
                        <span className="text-primary display-28">
                          1997 - 2001
                        </span>
                      </div>
                      <div className="right-side">
                        <h5 className="display-28">Computer Science</h5>
                        <p className="mb-0">
                          The first factor to keep in mind approximately
                          achievement is that it's a process – not anything
                          more, not anything less.
                        </p>
                      </div>
                    </div>
                    <div className="d-block d-sm-flex justify-content-between mb-1-9">
                      <div className="left-side">
                        <h5 className="display-28">Harvard University</h5>
                        <span className="text-primary display-28">
                          2002 - 2004
                        </span>
                      </div>
                      <div className="right-side">
                        <h5 className="display-28">Bachlors in Fine Arts</h5>
                        <p className="mb-0">
                          The first factor to keep in mind approximately
                          achievement is that it's a process – not anything
                          more, not anything less.
                        </p>
                      </div>
                    </div>
                    <div className="d-block d-sm-flex justify-content-between">
                      <div className="left-side">
                        <h5 className="display-28">Diploma In Fine Arts</h5>
                        <span className="text-primary display-28">
                          2004 - 2006
                        </span>
                      </div>
                      <div className="right-side">
                        <h5 className="display-28">
                          BBA at School of Design at University of Michigan
                        </h5>
                        <p className="mb-0">
                          The first factor to keep in mind approximately
                          achievement is that it's a process – not anything
                          more, not anything less.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-1-9 mb-lg-2-5">
                <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                  <h4 className="mb-3">Work &amp; Experience :</h4>
                  <p className="mb-4">
                    The work experience you want relies upon at the kind of
                    position you are making use of for. For most, it's miles
                    encouraged to paintings in an Internship position and then,
                    earn relevant certifications previous to being certified for
                    an entry-stage position.
                  </p>
                  <div className="vertical-timeline">
                    <div className="d-block d-sm-flex justify-content-between mb-1-9">
                      <div className="left-side">
                        <h5 className="display-28">Web Designer</h5>
                        <span className="text-primary display-28">
                          2001 - 2003
                        </span>
                      </div>
                      <div className="right-side">
                        <h5 className="display-28">Sparks Ltd.</h5>
                        <p className="mb-0">
                          The first factor to keep in mind approximately
                          achievement is that it's a process – not anything
                          more, not anything less.
                        </p>
                      </div>
                    </div>
                    <div className="d-block d-sm-flex justify-content-between">
                      <div className="left-side">
                        <h5 className="display-28">Sr. Java Developer</h5>
                        <span className="text-primary display-28">
                          2003 - 2008
                        </span>
                      </div>
                      <div className="right-side">
                        <h5 className="display-28">Drive Due Ltd.</h5>
                        <p className="mb-0">
                          The first factor to keep in mind approximately
                          achievement is that it's a process – not anything
                          more, not anything less.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-1-9 mb-lg-2-5">
                <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                  <h4 className="mb-3">Skills :</h4>
                  <div className="mb-1-9">
                    <div className="progress-text display-29 font-weight-600 mb-2">
                      <div className="row">
                        <div className="col-7">Graphics Design</div>
                        <div className="col-5 text-end">80%</div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium"
                      style={{ height: 10, borderRadius: 10 }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-primary"
                        style={{ width: "80%" }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={10}
                        role="progressbar"
                      />
                    </div>
                  </div>
                  <div className="mb-1-9">
                    <div className="progress-text display-29 font-weight-600 mb-2">
                      <div className="row">
                        <div className="col-7">Development</div>
                        <div className="col-5 text-end">92%</div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium"
                      style={{ height: 10, borderRadius: 10 }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-primary"
                        style={{ width: "92%" }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={70}
                        role="progressbar"
                      />
                    </div>
                  </div>
                  <div className="mb-1-9">
                    <div className="progress-text display-29 font-weight-600 mb-2">
                      <div className="row">
                        <div className="col-7">UI/UX Design</div>
                        <div className="col-5 text-end">70%</div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium"
                      style={{ height: 10, borderRadius: 10 }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-primary"
                        style={{ width: "70%" }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={70}
                        role="progressbar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="progress-text display-29 font-weight-600 mb-2">
                      <div className="row">
                        <div className="col-7">Photoshop</div>
                        <div className="col-5 text-end">75%</div>
                      </div>
                    </div>
                    <div
                      className="custom-progress progress progress-medium"
                      style={{ height: 10, borderRadius: 10 }}
                    >
                      <div
                        className="animated custom-bar progress-bar slideInLeft bg-primary"
                        style={{ width: "75%" }}
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={70}
                        role="progressbar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-1-9 mb-lg-2-5">
                <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                  <h4 className="mb-3">Awards :</h4>
                  <p className="mb-4">
                    The work experience you want relies upon at the kind of
                    position you are making use of for. For most, it's miles
                    encouraged to paintings in an Internship position and then,
                    earn relevant certifications previous to being certified for
                    an entry-stage position.
                  </p>
                  <div className="vertical-timeline">
                    <div className="d-block d-sm-flex justify-content-between mb-1-9">
                      <div className="left-side">
                        <h5 className="display-28">Web Developer</h5>
                        <span className="text-primary display-28">
                          1998 - 2001
                        </span>
                      </div>
                      <div className="right-side">
                        <h5 className="display-28">
                          Perfect Attendance Programs
                        </h5>
                        <p className="mb-0">
                          The first factor to keep in mind approximately
                          achievement is that it's a process – not anything
                          more, not anything less.
                        </p>
                      </div>
                    </div>
                    <div className="d-block d-sm-flex justify-content-between">
                      <div className="left-side">
                        <h5 className="display-28">Development</h5>
                        <span className="text-primary display-28">
                          2001 - 2003
                        </span>
                      </div>
                      <div className="right-side">
                        <h5 className="display-28">Top Performer Developer</h5>
                        <p className="mb-0">
                          The first factor to keep in mind approximately
                          achievement is that it's a process – not anything
                          more, not anything less.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="p-1-6 border border-color-extra-light-gray border-radius-10">
                  <h4 className="mb-3">Add Review:</h4>
                  {/* Form */}
                  <form
                    action="#!"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="quform-elements">
                      <div className="row">
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element mb-3">
                            <div className="quform-input">
                              <input
                                className="form-control border-radius-10"
                                type="text"
                                name="name"
                                placeholder="Your name here"
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element mb-3">
                            <div className="quform-input">
                              <input
                                className="form-control border-radius-10"
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Your email here"
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        <div className="col-md-12">
                          <div className="quform-element mb-3">
                            <div className="quform-input">
                              <select
                                id="ratings"
                                className="form-control form-select border-radius-10"
                                name="ratings"
                              >
                                <option >Ratings</option>
                                <option value="5">5 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="1">1 Star</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Begin Textarea element */}
                        <div className="col-md-12">
                          <div className="quform-element mb-3">
                            <div className="quform-input">
                              <textarea
                                className="form-control border-radius-10"
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Tell us a few words"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Textarea element */}
                        {/* Begin Submit button */}
                        <div className="col-md-12">
                          <div className="quform-submit-inner">
                            <button className="butn" type="submit">
                              Send Message
                            </button>
                          </div>
                          <div className="quform-loading-wrap text-start">
                            <span className="quform-loading" />
                          </div>
                        </div>
                        {/* End Submit button */}
                      </div>
                    </div>
                  </form>
                  {/* End Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="job-details-sidebar">
            <div className="widget">
              <div className="card border-color-extra-light-gray border-radius-10">
                <div className="card-body p-4">
                  <h4>Location</h4>
                  <iframe
                    className="map-h250"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </div>
            </div>
            <div className="widget">
              <div className="card border-color-extra-light-gray border-radius-10">
                <div className="card-body p-4">
                  <h4>Contact Information</h4>
                  <ul className="list-style5">
                    <li>
                      <span>Phone</span> (+44) 123 456 789
                    </li>
                    <li>
                      <span>Email</span> info@example.com
                    </li>
                    <li>
                      <span>Address</span> 66 Guild Street 512B, Great North
                      Town.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget">
              <div className="card border border-color-extra-light-gray border-radius-10">
                <div className="card-body p-4">
                  <h4>Quick Contacts</h4>
                  <form
                    className="contact quform"
                    action="https://jobboard.websitelayout.net/quform/contact.php"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="quform-elements">
                      <div className="row">
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label htmlFor="name">
                              Your Name{" "}
                              <span className="quform-required">*</span>
                            </label>
                            <div className="quform-input">
                              <input
                                className="form-control border-radius-10"
                                type="text"
                                name="name"
                                placeholder="Your name here"
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label htmlFor="email">
                              Your Email{" "}
                              <span className="quform-required">*</span>
                            </label>
                            <div className="quform-input">
                              <input
                                className="form-control border-radius-10"
                                type="text"
                                name="email"
                                placeholder="Your email here"
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label htmlFor="subject">
                              Your Subject{" "}
                              <span className="quform-required">*</span>
                            </label>
                            <div className="quform-input">
                              <input
                                className="form-control border-radius-10"
                                type="text"
                                name="subject"
                                placeholder="Your subject here"
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Text input element */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label htmlFor="phone">Contact Number</label>
                            <div className="quform-input">
                              <input
                                className="form-control border-radius-10"
                                type="text"
                                name="phone"
                                placeholder="Your phone here"
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Text input element */}
                        {/* Begin Textarea element */}
                        <div className="col-md-12">
                          <div className="quform-element form-group">
                            <label htmlFor="message">
                              Message <span className="quform-required">*</span>
                            </label>
                            <div className="quform-input">
                              <textarea
                                className="form-control border-radius-10"
                                name="message"
                                rows={3}
                                placeholder="Tell us a few words"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Textarea element */}
                        {/* Begin Captcha element */}
                        <div className="col-md-12">
                          <div className="quform-element">
                            <div className="form-group">
                              <div className="quform-input">
                                <input
                                  className="form-control border-radius-10"
                                  id="type_the_word"
                                  type="text"
                                  name="type_the_word"
                                  placeholder="Type the below word"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="quform-captcha">
                                <div className="quform-captcha-inner">
                                  <img
                                    src="quform/images/captcha/courier-new-light.png"
                                    alt="..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Captcha element */}
                        {/* Begin Submit button */}
                        <div className="col-md-12">
                          <div className="quform-submit-inner">
                            <button className="butn border-0" type="submit">
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                        {/* End Submit button */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="widget">
              <div className="card border-color-extra-light-gray border-radius-10">
                <div className="card-body p-4">
                  <h4>Social Profiles</h4>
                  <ul className="candidate-social-icon">
                    <li>
                      <a href="#!">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h4 className="mb-4">Related Candidates :</h4>
          <div className="featured-candidate owl-carousel owl-theme">
            <div className="card card-style7 radius-10">
              <div className="card-body">
                <a className="candidate-favourite" href="#!">
                  <i className="far fa-heart" />
                </a>
                <img
                  src="img/candidate/candidate-02.jpg"
                  className="border-radius-50 mb-3"
                  alt="..."
                />
                <div className="candidate-info">
                  <h4 className="h5">
                    <a href="candidate-details.html">Selma Kolkkala</a>
                  </h4>
                  <span className="display-30 text-muted d-block mb-2 font-weight-500">
                    UI/UX Specialist
                  </span>
                  <div className="display-30 text-warning">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                      4.0
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>
                    <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                    <strong>Australia</strong>
                  </span>
                  <span>
                    <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                    <strong>$60 / hr</strong>
                  </span>
                  <span>
                    <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                    <strong>98%</strong>
                  </span>
                </div>
                <a
                  href="candidate-details.html"
                  className="butn w-100 radius-10"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="card card-style7 radius-10">
              <div className="card-body">
                <a className="candidate-favourite" href="#!">
                  <i className="far fa-heart" />
                </a>
                <img
                  src="img/candidate/candidate-03.jpg"
                  className="border-radius-50 mb-3"
                  alt="..."
                />
                <div className="candidate-info">
                  <h4 className="h5">
                    <a href="candidate-details.html">Rens Westen</a>
                  </h4>
                  <span className="display-30 text-muted d-block mb-2 font-weight-500">
                    Research Assistant
                  </span>
                  <div className="display-30 text-warning">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                      4.0
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>
                    <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                    <strong>USA</strong>
                  </span>
                  <span>
                    <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                    <strong>$35 / hr</strong>
                  </span>
                  <span>
                    <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                    <strong>80%</strong>
                  </span>
                </div>
                <a
                  href="candidate-details.html"
                  className="butn w-100 radius-10"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="card card-style7 radius-10">
              <div className="card-body">
                <a className="candidate-favourite" href="#!">
                  <i className="far fa-heart" />
                </a>
                <img
                  src="img/candidate/candidate-04.jpg"
                  className="border-radius-50 mb-3"
                  alt="..."
                />
                <div className="candidate-info">
                  <h4 className="h5">
                    <a href="candidate-details.html">France Maheu</a>
                  </h4>
                  <span className="display-30 text-muted d-block mb-2 font-weight-500">
                    Digital Marketer
                  </span>
                  <div className="display-30 text-warning">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>
                    <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                    <strong>UK</strong>
                  </span>
                  <span>
                    <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                    <strong>$50 / hr</strong>
                  </span>
                  <span>
                    <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                    <strong>90%</strong>
                  </span>
                </div>
                <a
                  href="candidate-details.html"
                  className="butn w-100 radius-10"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="card card-style7 radius-10">
              <div className="card-body">
                <a className="candidate-favourite" href="#!">
                  <i className="far fa-heart" />
                </a>
                <img
                  src="img/candidate/candidate-05.jpg"
                  className="border-radius-50 mb-3"
                  alt="..."
                />
                <div className="candidate-info">
                  <h4 className="h5">
                    <a href="candidate-details.html">Richard Bureau</a>
                  </h4>
                  <span className="display-30 text-muted d-block mb-2 font-weight-500">
                    Charted Accountant
                  </span>
                  <div className="display-30 text-warning">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                      4.0
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>
                    <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                    <strong>Canada</strong>
                  </span>
                  <span>
                    <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                    <strong>$60 / hr</strong>
                  </span>
                  <span>
                    <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                    <strong>95%</strong>
                  </span>
                </div>
                <a
                  href="candidate-details.html"
                  className="butn w-100 radius-10"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="card card-style7 radius-10">
              <div className="card-body">
                <a className="candidate-favourite" href="#!">
                  <i className="far fa-heart" />
                </a>
                <img
                  src="img/candidate/candidate-06.jpg"
                  className="border-radius-50 mb-3"
                  alt="..."
                />
                <div className="candidate-info">
                  <h4 className="h5">
                    <a href="candidate-details.html">Uta Fuerst</a>
                  </h4>
                  <span className="display-30 text-muted d-block mb-2 font-weight-500">
                    Marketing Advisor
                  </span>
                  <div className="display-30 text-warning">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>
                    <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                    <strong>London</strong>
                  </span>
                  <span>
                    <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                    <strong>$35 / hr</strong>
                  </span>
                  <span>
                    <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                    <strong>75%</strong>
                  </span>
                </div>
                <a
                  href="candidate-details.html"
                  className="butn w-100 radius-10"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="card card-style7 radius-10">
              <div className="card-body">
                <a className="candidate-favourite" href="#!">
                  <i className="far fa-heart" />
                </a>
                <img
                  src="img/candidate/candidate-07.jpg"
                  className="border-radius-50 mb-3"
                  alt="..."
                />
                <div className="candidate-info">
                  <h4 className="h5">
                    <a href="candidate-details.html">Onuora Ubanwa</a>
                  </h4>
                  <span className="display-30 text-muted d-block mb-2 font-weight-500">
                    Marketing Manager
                  </span>
                  <div className="display-30 text-warning">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="px-2 py-1 bg-primary text-white ms-2 display-31 border-radius-10">
                      4.0
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>
                    <i className="ti-location-pin text-secondary me-2 display-31 display-sm-30" />
                    <strong>London</strong>
                  </span>
                  <span>
                    <i className="far fa-money-bill-alt text-secondary me-2 display-31 display-sm-30" />
                    <strong>$35 / hr</strong>
                  </span>
                  <span>
                    <i className="ti-briefcase text-secondary me-2 display-31 display-sm-30" />
                    <strong>75%</strong>
                  </span>
                </div>
                <a
                  href="candidate-details.html"
                  className="butn w-100 radius-10"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
      
  </div>
    </>
  )
}

export default WorkerProfile