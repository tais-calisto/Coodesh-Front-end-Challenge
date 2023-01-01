import style from './Blog.module.css';
import background from '../../assets/endBg.svg';

const Blog = () => {
  return (
    <div className={style.container}>
      <img src={background}></img>
      <div className={style.contentContainer}>
        <h2>Aprende con los mejores</h2>
        <h3>
          Detrás de cada éxito, hay una história. <br />
          conoce en nuestro blog.
        </h3>
        <div className={style.btn}>
          <button className='buttonSecondaryWhite'>
            leer más en nuestro blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
