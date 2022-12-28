import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1>Mireia Belmonte</h1>
        <h2>
          enseña <strong>natación</strong>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
