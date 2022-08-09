import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./stylesCard.css" 

const Card = (props) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card p-2 h-100">
            <img src="https://cdn.themedizine.com/2019/04/CTANGANA-ONTAS-500x300.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">More info...</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 h-100">
            <img src="https://larepublica.pe/resizer/KBl9Nq2xJTvRHmV4hYaqOAKEyaU=/500x300/top/larepublica.pe/resizer/MKh4INmCoetuITc41hwZECs5r3M=/500x300/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/72KDJR2WUVCETEBTLONPM7LZ24.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">More info...</a>          
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 h-100">
            <img src="https://franciscotorreblanca.es/wp-content/uploads/2014/06/memes-francisco-torreblanca.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. The content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">More info...</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 h-100">
            <img src="https://initeconline.com/wp-content/uploads/2018/07/5-memes-que-han-hecho-historia-en-Internet.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary">More info...</a>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Card