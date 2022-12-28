import Header from './components/Header';
import iconModule from './assets/iconModule.svg';
import iconHour from './assets/iconHour.svg';
import style from './App.module.css';
import Slider from './components/Slider';
import { content } from './utils/content';
import LessonPlan from './components/LessonPlan';
import Courses from './components/Courses';
import Infos from './components/Infos';

function App() {
  return (
    <>
      <Header />
      <section className={style.hero}>
        <div>
          <h1>Mireia Belmonte</h1>
          <h2>
            enseña <strong>natación</strong>
          </h2>
        </div>
      </section>
      <section className={style.info}>
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
      <Slider />
      <section className={style.content}>
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
      <LessonPlan />
      <Courses />
      <Infos />
    </>
  );
}

export default App;
