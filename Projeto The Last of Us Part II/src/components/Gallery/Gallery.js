import { useState, useEffect } from "react";
import { images } from "../../data/GalleryData";
import Aos from "aos";
import "aos/dist/aos.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Button from "../Button/Button";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  const [moreImages, setMoreImages] = useState(6);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const load = images.slice(0, moreImages);

  const loadMore = () => {
    setMoreImages(moreImages + moreImages);
  };

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <>
      <div className={styles.container} id="gallery">
        <h2>Galeria</h2>
        <div data-aos="fade-up" className={styles.gallery}>
          {load.map((src, index) => (
            <img
              src={src}
              onClick={() => setIsOpen(true)}
              key={index}
              alt=""
              className={styles.images}
            />
          ))}

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </div>
        <div className={styles.button}>
            <Button onClick={() => loadMore()}>Load more</Button>
          </div>
      </div>
    </>
  );
};

export default Gallery;
