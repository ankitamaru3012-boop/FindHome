import Navbar from "../components/Navbar";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [properties, setProperties] = useState([]);
  const getProperties = async () => {
    const response = await axios.get("http://localhost:5000/properties");
    setProperties(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getProperties();
  }, []);
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
            {properties.map((property) => (
              <div className="col-md-4" key={property.id}>
                <div className="card">
                  <div className="card-body">
                    <h4>{property.title}</h4>
                    <p>
                      {property.city} , {property.country}
                    </p>
                    <h5 className="card-text">
                      {property.currency} {property.price}
                    </h5>
                    <p>{property.bedrooms} Bedrooms</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
