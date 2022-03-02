import React from "react";
import { Link } from "react-router-dom";
import './ImageCard.css'

const ImageCard = (props) => {
  const {data} = props;
  console.log(data);
  return (
    <div className="card-item">
      <Link to={`/${data.category}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={`http://127.0.0.1:5000/${data.image_path}`} alt={data.image_id}/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;