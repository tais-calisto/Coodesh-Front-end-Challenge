import style from './Articles.module.css';
import { articles } from '../../utils/articles';

const Articles = () => {
  return (
    <section className={style.container}>
      <h2>Artículos Relacionados</h2>
      <ul className={style.articlesContainer}>
        {articles.map((a) => (
          <li key={a._id} className={style.article}>
            <h3>{a.title}</h3>
            <p>{a.date}</p>
          </li>
        ))}
      </ul>
      <div className={style.btn}>
        <button className='buttonSecondaryWhite'>
          Leer más en nuestro blog
        </button>
      </div>
    </section>
  );
};

export default Articles;
