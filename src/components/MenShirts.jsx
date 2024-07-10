import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/home.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function MenShirts() {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  const db = getFirestore();

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menShirts"));
        setData(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching collections: ", error);
      }
    };

    fetchCollections();
  }, [db]);

  const sortedData = [...data].sort((a, b) => {
    if (sortOption === "price-low") {
      return a.productPrice - b.productPrice;
    } else if (sortOption === "price-high") {
      return b.productPrice - a.productPrice;
    }
    return 0;
  });

  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <div className="new-arrivals container text-center mt-3 mb-5">
          <h1>Men Shirts</h1>
          <div className="form-group text-start mt-4">
            <label htmlFor="sortOptions" className="form-label ms-2">
              Sort by:
            </label>
            <select
              id="sortOptions"
              className="form-select form-control bg-dark text-light border-0"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price, Low To High</option>
              <option value="price-high">Price, High To Low</option>
            </select>
          </div>
          <p className="text-light text-end">{sortedData.length} Products</p>
          <div className="row justify-content-center gx-2 mt-2">
            {sortedData.map((item) => (
              <div className="col-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                <div className="card border-0 p-2">
                  <Link
                    to={`/product/${item.id}`}
                    state={{ product: item }}
                    className="link"
                  >
                    <img
                      src={item.productImage}
                      className="card-img-top card-img-custom"
                      alt={item.productTitle}
                    />
                    <div className="card-body p-2">
                      {!item.inStock && (
                        <div className="soldOutContainer">
                          <h6 className="card-text text-center">Sold Out</h6>
                        </div>
                      )}
                      <h5 className="card-title text-start">
                        {item.productTitle}
                      </h5>
                      <p className="card-text text-start">
                        Rs {item.productPrice} PKR
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenShirts;
