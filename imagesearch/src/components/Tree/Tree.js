import React,{useEffect} from "react";
import ImageCard from "../ImageCard/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import {getAllImages, fetchAsyncImages} from "../../features/Images/imageSlice";
import { useParams } from "react-router-dom";
import './Tree.css';

const Tree = (props) => {
    const {data}=props;
    const dispatch = useDispatch();
    let params = useParams();
    
    useEffect(()=>{
        dispatch(fetchAsyncImages(params.query));
    },[params.query]);

    const images = useSelector(getAllImages);
    
    const renderImages = (images.map((data) => {
      return( 
        <ImageCard key={data.image_id} data={data} />
      );
      }));
    return (
        <div className="container">
            <div className="image-container">{renderImages}</div>
        </div>
    );
};

export default Tree;