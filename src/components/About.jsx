import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

function About() {
  const [aboutUsImages, setAboutUsImages] = useState([]);

  const storage = getStorage();

  useEffect(() => {
    const coverImgsRef = ref(storage, "aboutImages");

    listAll(coverImgsRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));

        Promise.all(promises)
          .then((urls) => {
            const coverImgs = res.items.map((itemRef, index) => ({
              id: itemRef.name,
              imgUrl: urls[index],
            }));
            setAboutUsImages(coverImgs);
          })
          .catch((error) => {
            console.error("Error fetching download URLs: ", error);
          });
      })
      .catch((error) => {
        console.error("Error listing images: ", error);
      });
  }, [storage]);

  return (
    <>
      <NavBar />
      <div className="img-container vh-100">
        {aboutUsImages.map((image) => (
          <img
            key={image.id}
            src={image.imgUrl}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
            alt="About Us"
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default About;
