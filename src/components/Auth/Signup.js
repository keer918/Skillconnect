import React from 'react';
import './Login.css';

const Signup = () => {

  return (
    <div className="overlay">
      <form className='formstyles'>
        <div className="con">
          <header className="head-form">
            <h2>Sign Up</h2>
          </header>
          <br />
          <div className="field-set">
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              type="text"
              placeholder="UserName"
              required

            />
            <br />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              type="text"
              placeholder="Email"
              required
            />
            <br />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              type="text"
              placeholder="Phone Number"
              required
            />
            <br />
            <span className="input-item">
              <i className="fa fa-key" />
            </span>
            <input
              className="form-input"
              type='password'
              placeholder="Password"
              id="pwd"
              name="password"
              required

            />
            <span>
              <i
                className="fa fa-eye"
                aria-hidden="true"
                type="button"
                id="eye"
              />
            </span>
            <br />
            <span className="input-item">
              <i className="fa fa-key" />
            </span>
            <input
              className="form-input"
              placeholder="Confirm Password"
              id="confirmpwd"
              name="password"
              required
            />
            <br />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              type="text"
              placeholder="Phone Number"
              required
            />
            <br />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              type="text"
              placeholder="District"
              required
            />
            <br />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              type="text"
              placeholder="City"
              required
            />
            <br />
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              type="text"
              placeholder="State"
              required
            />
            <br />
            <button className="log-in">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
