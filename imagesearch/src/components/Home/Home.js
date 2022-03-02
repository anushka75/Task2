import ImageCard from "../ImageCard/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import {getAllImages, fetchAsyncImages} from "../../features/Images/imageSlice";
import '../Tree/Tree.css';
import React,{useEffect} from "react";

const Home = () => {
    const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(fetchAsyncImages());
    },[dispatch]);

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

export default Home;