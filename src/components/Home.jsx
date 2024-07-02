import React, { useEffect, useState } from "react";

import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import "../firebase";
import "../styles/home.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Home() {
  const [coverImages, setCoverImages] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [featureCollection, setFeatureCollection] = useState([]);
  const [premiumItem, setPremiumItem] = useState([]);

  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    const coverImgsRef = ref(storage, "coverImages");

    listAll(coverImgsRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));

        Promise.all(promises)
          .then((urls) => {
            const coverImgs = res.items.map((itemRef, index) => ({
              id: itemRef.name,
              imgUrl: urls[index],
            }));
            setCoverImages(coverImgs);
          })
          .catch((error) => {
            console.error("Error fetching download URLs: ", error);
          });
      })
      .catch((error) => {
        console.error("Error listing images: ", error);
      });
  }, [storage]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const newArrivalsSnapshot = getDocs(collection(db, "newArrivals"));
        const featureCollectionSnapshot = getDocs(
          collection(db, "featureCollection")
        );
        const premiumItemSnapshot = getDocs(collection(db, "premiumItem"));

        const [newArrivalsData, featureCollectionData, premiumItemData] =
          await Promise.all([
            newArrivalsSnapshot,
            featureCollectionSnapshot,
            premiumItemSnapshot,
          ]);

        const newArrivals = newArrivalsData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const featureCollection = featureCollectionData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const premiumItem = premiumItemData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNewArrivals(newArrivals);
        setFeatureCollection(featureCollection);
        setPremiumItem(premiumItem);
      } catch (error) {
        console.error("Error fetching collections: ", error);
      }
    };

    fetchCollections();
  }, [db]);

  return (
    <div className="main-container">
      <div className="announcement-bar">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>
    
      <NavBar />

      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade bg-black"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {coverImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {coverImages.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image.imgUrl}
                className="d-block w-100"
                alt={image.id}
              />
            </div>
          ))}
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
        <h2>New Arrival</h2>
        <div className="row justify-content-center mt-4">
          {newArrivals.map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card border-0 p-2">
                <img
                  src={item.productImage}
                  className="card-img-top card-img-custom"
                  alt={item.productTitle}
                />
                <div className="card-body p-2">
                  <h5 className="card-title text-start">{item.productTitle}</h5>
                  <p className="card-text text-start">
                    Rs {item.productPrice} PKR
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-collection container mt-2 mb-3">
        <h2 className="">Feature Collection</h2>
        <div className="row justify-content-center mt-4">
          {featureCollection.map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card border-0 p-2">
                <img
                  src={item.productImage}
                  className="card-img-top card-img-custom"
                  alt={item.productTitle}
                />
                <div className="card-body p-2">
                  <h5 className="card-title text-start">{item.productTitle}</h5>
                  <p className="card-text text-start">
                    Rs {item.productPrice} PKR
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="premium-item container-md mt-2 mb-3">
        <div className="row justify-content-center mt-4">
          {premiumItem.map((item) => (
            <div className="col-12 mb-4" key={item.id}>
              <div className="card border-0 p-1">
                <div className="d-lg-flex align-items-lg-center">
                  <img
                    src={item.productImage}
                    className="img-custom me-3 rounded"
                    alt="..."
                  />
                  <div className="card-body card-body-custom">
                    <h2 className="card-title mb-4">{item.productTitle}</h2>
                    <p className="card-text mb-5">{item.productDescription}</p>
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
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
