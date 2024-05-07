import React from 'react';
import './Profile.css'

const Profile = () => {
  return (
    <div className="row py-5 px-4" id="a">
      <div className="col-md-5 mx-auto">
        {/* Profile widget */}
        <div className="bg-black shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover">
            <div className="media align-items-end profile-head">
              <div className="profile mr-3">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                      alt="..."
                      width="130"
                      className="rounded mb-2 img-thumbnail"
                    />
                    <a href="#" className="btn btn-outline-light btn-sm btn-block">Edit profile</a>
                  </div>
                  <div className="col-8">
                  <h4 style={{fontFamily:"Edwardian Script",fontWeight:"bold"}}>Mark Williams</h4>
                  
                    <p>Address: New York City</p>
                    <p>Email: mark@example.com</p>
                    <p>Phone: +1234567890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="px-5 py-5" style={{marginTop:"20px",boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
            <div className=" rounded shadow-sm bg-dark" style={{marginTop:"20px",marginRight:"50px",padding:"20px"}} >
            <h5 className="mb-0">Skills</h5>
              <p className="font-italic mb-0">Web Developer</p>
              <p className="font-italic mb-0">Lives in New York</p>
              <p className="font-italic mb-0">Photographer</p>
            </div>
          </div>
          <div className="py-4 px-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">Recent photos</h5>
              <a href="#" className="btn btn-link text-muted">Show all</a>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-lg-6 mb-2 pl-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-lg-6 pr-lg-1 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-lg-6 pl-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
