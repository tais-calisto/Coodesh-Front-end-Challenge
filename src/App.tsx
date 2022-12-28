import Header from './components/Header';
import iconModule from './assets/iconModule.svg';
import iconHour from './assets/iconHour.svg';
import style from './App.module.css';
import Slider from './components/Slider';

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
      <h2>Contenido exclusivo</h2>
    </>
  );
}

export default App;
