import Button from '../Button/Button';
import styles from './Hero.module.scss';

const HomePageContent = () => {
  return (
    <>
      <h1 className={styles.hero_content_title}>Adventure Awaits</h1>
      <span className={styles.hero_content_tagline}>
        The best option for your travels.
      </span>
      <p className={styles.hero_content_description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae
        itaque ea ducimus, mollitia voluptate laudantium.
      </p>
      <div className={styles.hero_content_cta}>
        <Button to="/booknow">Book Now</Button>
        <Button to="/learnmore" outline>
          Learn More
        </Button>
      </div>
    </>
  );
};

export default HomePageContent;
