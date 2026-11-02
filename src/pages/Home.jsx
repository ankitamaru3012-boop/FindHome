import Navbar from "../components/Navbar";
import "./Home.css";
import { useState,useEffect } from "react";
function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="hero">
        <div className="hero-content">
          <h1>Find a Place Worth Coming Home To</h1>
          <p>
            Discover exceptional homes in the world's most desirable locations.
          </p>
        </div>
      </section>
      <div className="property-search">
        <div className="row g-3 align-items-end">
          <div className="col-md-4">
            <div className="search-field location-field ">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter city or location"
              />
            </div>
          </div>

          <div className="col-md-2">
            <div className="search-field  ">
              <label>Looking to</label>
              <select className="form-select">
                <option>Buy</option>
                <option>Rent</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="search-field ">
              <label>Property Type</label>
              <select className="form-select">
                <option>All Properties</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>House</option>
                <option>Land</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <button className="btn search-btn w-100 ">Search</button>
          </div>
        </div>
      </div>
      <div className="featured-property">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-image-top">
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-image-top">
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
