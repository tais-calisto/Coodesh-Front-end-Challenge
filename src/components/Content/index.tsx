import { content } from '../../utils/content';
import styles from './Content.module.css';

const Content = () => {
  return (
    <section className={styles.content}>
      <h2>Contenido exclusivo</h2>
      <ul>
        {content.map((c) => (
          <li key={c._id}>
            <img src={c.image} alt=''></img>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
      <button>Mas información</button>
    </section>
  );
};

export default Content;
