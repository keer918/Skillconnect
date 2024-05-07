import React from 'react'
import img3 from './hackimages/img3.jpg';
import img6 from './hackimages/img6.png'
import './Home.css';
const Search = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <div className="static-slider9 position-relative">
  <div className="row">
    <div className="container" style={{margin:"20px"}}>
      <div className="col-md-5 info-detail align-self-center" >
        <h1 className="title">Unleash your potential and fuel your passion</h1>
        <form className="form-inline">
          <div className="form-group">
            </div>
            <input type="text" class="form-control form-control-lg mr-2 mb-2" id="inputPassword2" placeholder="Enter Location or skill"></input>
          <button type="submit" className="btn btn-md btn-success-gradiant text-white border-0 mb-2">Search</button>
        </form>
      </div>
    </div>
    <div className="col-md-5 bg-img" style={{backgroundImage: `url(${img3})`,backgroundSize: 'cover', height: '70vh',width:"50%",margin:"30px"}}>
    </div>
  </div>
</div>
    </div>
  )
}

export default Search
