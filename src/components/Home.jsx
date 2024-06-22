import React from "react";

import "../styles/home.css";

import nav_logo from "../assets/nav_logo.webp";
import carousel_1 from "../assets/carousel-1.png";
import carousel_2 from "../assets/carousel-2.png";
import carousel_3 from "../assets/carousel-3.png";
import exampleimg from "../assets/exampleimg.avif";
import premium_item from "../assets/premium_item.webp";

function Home() {
  return (
    <div className="main-container">
      <div className="announcement-bar">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>

      <nav
        className="navbar sticky-top navbar-expand-lg custom-navbar"
        data-bs-theme="dark"
      >
        <div className="container me-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img className="navbar-brand" src={nav_logo} alt="nav logo" />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Men T-Shirt</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Women Shirt</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Kids T-Shirt</span>
              </li>

              <li className="nav-item">
                <span className="nav-link">About</span>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-search me-4"></i>
            <i className="bi bi-cart"></i>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={carousel_3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="new-arrivals container text-center mt-2 mb-3">
        <h2 className="">New Arrival</h2>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 p-2">
              <img
                src={exampleimg}
                className="card-img-top card-img"
                alt="..."
              />
              <div className="card-body p-2">
                <h5 className="card-title text-start">Card title</h5>
                <p className="card-text text-start">Rs 19.99 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 p-2">
              <img
                src={carousel_3}
                className="card-img-top card-img"
                alt="..."
              />
              <div className="card-body p-2">
                <h5 className="card-title text-start">Card title</h5>
                <p className="card-text text-start">Rs 19.99 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 p-2">
              <img
                src={carousel_2}
                className="card-img-top card-img"
                alt="..."
              />
              <div className="card-body p-2">
                <h5 className="card-title text-start">Card title</h5>
                <p className="card-text text-start">Rs 19.99 PKR</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 p-2">
              <img
                src={carousel_1}
                className="card-img-top card-img"
                alt="..."
              />
              <div className="card-body p-2">
                <h5 className="card-title text-start">Card title</h5>
                <p className="card-text text-start">Rs 19.99 PKR</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-collection container mt-2 mb-3">
        <h2 className="">Feature Collection</h2>
        <div className="row justify-content-center mt-4">
          {Array(5)
            .fill()
            .map((_, idx) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
                <div className="card border-0 p-2">
                  <img
                    src={exampleimg}
                    className="card-img-top card-img-custom"
                    alt="..."
                  />
                  <div className="card-body p-2">
                    <h5 className="card-title text-start">Card title</h5>
                    <p className="card-text text-start">Rs 19.99 PKR</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="premium-item container-md mt-2 mb-3">
        <div className="row justify-content-center mt-4">
          <div className="col-12 mb-4">
            <div className="card border-0 p-1">
              <div className="d-lg-flex align-items-lg-center">
                <img
                  src={premium_item}
                  className="img-custom me-3 rounded"
                  alt="..."
                />
                <div className="card-body card-body-custom">
                  <h2 className="card-title mb-4">
                    Explore Our Premium T-shirt Range!
                  </h2>
                  <p className="card-text mb-5">
                    Step into unparalleled comfort and style with our T-shirts,
                    blending top-notch quality with affordable prices. Each
                    design is a statement, reflecting your unique taste. Explore
                    our collection now and redefine your wardrobe!
                  </p>
                  <button
                    type="button"
                    className="btn btn-custom btn-outline-secondary"
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="row">
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-6 mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Phone number"
              max={11}
            />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Comment"></textarea>
          </div>
          <button type="submit" className="btn btn-light mt-4">
            Send
          </button>
        </form>
      </div>
{/* 
      <div className="container mt-4 sub-to-emails">
        <h4>Subscribe to our emails</h4>
        <div className="row mt-3">
          <div className="col-12">
            <div className="input-container">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
