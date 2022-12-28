import iconModule from '../../assets/iconModule.svg';
import iconHour from '../../assets/iconHour.svg';
import styles from './Information.module.css';

const Information = () => {
  return (
    <section className={styles.info}>
      <div>
        <img src={iconModule} alt=''></img>
        <p>12 módulos</p>
      </div>
      <div>
        <img src={iconHour} alt=''></img>
        <p>+ 3,5 horas</p>
      </div>
      <button>Mas información</button>
    </section>
  );
};

export default Information;
