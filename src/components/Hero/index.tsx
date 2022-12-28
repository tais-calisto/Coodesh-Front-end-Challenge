import styles from './Hero.module.css';
import heroMobile from '../../assets/heroMobile.svg';

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Mireia Belmonte</h1>
          <h2>
            enseña <strong>natación</strong>
          </h2>
        </div>
      </section>
      <section className={styles.heroMobile}>
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
      </section>
    </>
  );
};

export default Hero;
