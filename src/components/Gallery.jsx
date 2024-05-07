import React from 'react'
import img7 from './hackimages/img7.jpg';
import img8 from './hackimages/img8.jpg';
import img9 from './hackimages/img9.jpg';
import './Gallery.css'
const Gallery = () => {
  return (
    <div>
      
      <div className="py-5 service-17">
    <div className="container">
       
        <div className="card-group">
            
            <div className="card mb-0">
                <div className="card-body text-center">
                    <div className="p-3">
                        <div className="my-3 display-5 text-info-gradiant">R</div>
                        <h5 className="font-weight-medium">Retargeting Market</h5>
                        <p>You can relay on our amazing features list and also our customer services will be great experience worth taking.</p>
                    </div>
                </div>
            </div>
            
            <div className="card mb-0">
                <img src={img7} alt="wrapkit" />
            </div>
            
            <div className="card mb-0">
                <div className="card-body text-center">
                    <div className="p-3">
                        <div className="my-3 display-5 text-info-gradiant">I</div>
                        <h5 className="font-weight-medium">Instant Solutions</h5>
                        <p>You can relay on our amazing features list and also our customer services will be great experience worth taking.</p>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="card-group">
          
            <div className="card mb-0">
                <img src={img8} alt="wrapkit" />
            </div>
            <div className="card mb-0">
                <div className="card-body text-center">
                    <div className="p-3">
                        <div className="my-3 display-5 text-info-gradiant">F</div>
                        <h5 className="font-weight-medium">Fruitful Results</h5>
                        <p>You can relay on our amazing features list and also our customer services will be great experience worth taking.</p>
                    </div>
                </div>
            </div>
          
            <div className="card mb-0">
                <img src={img9} alt="wrapkit" />
            </div>
        </div>
    </div>
</div>
 
    </div>
  )
}

export default Gallery
