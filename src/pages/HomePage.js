import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";
import "../styles/homepage.css";
import { MdHeight } from "react-icons/md";

const HomePage = () => {
  const navigate = useNavigate();
  const img1 =
    "https://images.unsplash.com/photo-1464316325666-63beaf639dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const img2 =
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBmb3IlMjBzYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <Layout>
      <Slider />
      <div className="home-cat row d-flex align-items-center justify-content-center">
        <h1>Category</h1>
        <div className="col-md-5 ">
          <div className="Imagecontainer">
            <img src={img1} alt="Rent" style={{ width: "100%" }} />
            <button className="btn" onClick={() => navigate("/category/rent")}>
              FOR RENT
            </button>
          </div>
        </div>
        <div className="col-md-5">
          <div className="Imagecontainer">
            <img src={img2} alt="Rent" style={{ width: "105%",height: "410px"}} />
            <button className="btn" onClick={() => navigate("/category/sale")}>
              FOR SALE
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
