import React from "react";
import { Link } from "react-router-dom";
import { locationData } from "./LocationsData";
import styles from "./Locations.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const Locations = ({ page }) => {
  const mapData = !page ? locationData.slice(0, 6) : locationData;

  return (
    <div className={styles.container}>
      <div className={`${styles.locations} ${page ? styles.page : ""}`}>
        <div className={styles.location_content}>
          <h2 className={styles.locations_content_title}>
            Discover your tropic
          </h2>
          <div className={styles.locations_content_gallery}>
            {mapData.map(({ id, location, isFeatured, img, alt }) => (
              <div className={styles.gallery_item} key={id}>
                <img src={img} alt={alt} className={styles.gallery_item_img} />
                <div className={styles.overlay} />
                <div className={styles.gallery_item_content}>
                  <span className={styles.gallery_item_content_icon}>
                    <IoLocationOutline />
                  </span>
                  <h2 className={styles.gallery_item_content_location}>
                    {location}
                  </h2>
                </div>
                {isFeatured && (
                  <div className={styles.gallery_item_tag}>Featured</div>
                )}
              </div>
            ))}
          </div>
          {!page && (
            <div className={styles.locations_content_viewmore}>
              <Link to="/locations">
                View More{" "}
                <span className={styles.locations_content_viewmore_icon}>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Locations;
