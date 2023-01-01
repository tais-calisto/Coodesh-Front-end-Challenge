import iconModule from '../../assets/iconModule.svg';
import iconHour from '../../assets/iconHour.svg';
import styles from './Information.module.css';

const Information = () => {
  return (
    <div className={styles.info}>
      <div>
        <img src={iconModule} alt=''></img>
        <p>12 módulos</p>
      </div>
      <div>
        <img src={iconHour} alt=''></img>
        <p>+ 3,5 horas</p>
      </div>
      <button className={styles.btn}>Mas información</button>
      <aside className={styles.mobileContainer}>
        <p>Aprende natación con una campeona olímpica</p>
        <button className='buttonSecondaryWhite'>Preguntas Frecuentes</button>
      </aside>
    </div>
  );
};

export default Information;
