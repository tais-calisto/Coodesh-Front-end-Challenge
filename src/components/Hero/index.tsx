import styles from './Hero.module.css';
import hero from '../../assets/hero.svg';
import heroMobile from '../../assets/heroMobile.svg';

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <img src={hero}></img>
        <div className={styles.content}>
          <h1>Mireia Belmonte</h1>
          <h2>
            enseña <strong>natación</strong>
          </h2>
        </div>
      </div>
      <div className={styles.heroMobile}>
        <img src={heroMobile}></img>
        <div className={styles.content}>
          <h1>Mireia Belmonte</h1>
          <h2>
            enseña <strong>natación</strong>
          </h2>
        </div>
        <div className={styles.btn}>
          <button>SOLICITAR INFORMACIÓN</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
