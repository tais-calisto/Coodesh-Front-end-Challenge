import Header from './components/Header';
import heroImage from './assets/hero.svg';
import style from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <section className={style.hero}>
        <img src={heroImage} alt=''></img>
        <div>
          <h1>Mireia Belmonte</h1>
          <h2>enseña natación</h2>
        </div>
      </section>
    </>
  );
}

export default App;
