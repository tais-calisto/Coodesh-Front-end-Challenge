import styles from './Star.module.css';
import starIMG from '../../assets/star.svg';

const Star = () => {
  return (
    <section className={styles.container}>
      <div>
        <img src={starIMG}></img>
        <h2>
          Los estudiantes le dan a Unycos una calificación promedio de 4.7 de 5
          estrellas.
        </h2>
      </div>
      <div>
        <p>
          100% de garantía de satisfacción. 30 días de garantía de devolución de
          dinero.
        </p>
      </div>
    </section>
  );
};

export default Star;
