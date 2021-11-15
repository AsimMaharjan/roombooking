import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ImageDetail from "../components/ImageDetail";
const Error = () => {
  return (
    <Hero>
      <ImageDetail title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </ImageDetail>
    </Hero>
  );
};

export default Error;