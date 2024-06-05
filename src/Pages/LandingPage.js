import React from "react";
import "../Features/backgroundcolor.css";
import "../Features/fonts.css";
import Card1 from "../assets/Card1.svg";
import { useNavigate } from "react-router-dom";
import Botton from "../components/Button/button";

const LandingPage = (props) => {
  const navigate = useNavigate;
  return (
    <div className="bg-color full-screen">
      <div className="flex justify-center">
        <div className="mr-10 mt-20 ml-20">
          <img
            src={Card1}
            alt="no internet"
            width={900}
            className="mb-10 ml-20"
          />
          <div className="text-left p-10">
            <h1 className="heading-font text-black text-8xl lg:text-7xl font-bold mb-5 lg:mb-10">
              Welcome to Resturant Service
            </h1>
            <div
              className="flex justify-center"
              onClick={() => navigate(props.LandingPage ? "/" : "/DetailsPage")}
            >
              <Botton text="Explore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
