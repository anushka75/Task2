import React,{useState} from "react";
import './Header.css';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [query, setQuery] = useState("");
    const history = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        history(`/${query}`);
        setQuery(""); 
     }; 

    return (
        <div>
            <div className="containerr">
                <form className="form"  onSubmit={submitHandler}>
                    <input type="text" value={query} placeholder="search images" className="searchbar" onChange={(e)=> setQuery(e.target.value)}></input>
                    <button className="buttonss" type="submit" >Search</button>
                </form> 

                <div className="button-images">
                    <Link to="/flower">
                    <button type="button" value="Fruit" className="buttonss">Flowers</button>
                    </Link>
                    <Link to="/fruit">
                    <button type="button" className="buttonss">Fruits</button>
                    </Link>
                    <Link to="/concert">
                    <button type="button" className="buttonss">Concert</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;