import Locations from "../components/Locations/Locations";
import useScrollToTop from "../hooks/useScrollToTop";

const LocationsPage = () => {
  useScrollToTop();

  return (
    <>
      <Locations page={true} />
    </>
  );
};

export default LocationsPage;
