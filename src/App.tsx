import Header from './components/Header';
import heroImage from './assets/hero.svg';
import style from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <section className={style.hero}></section>
      <img src={heroImage} alt=''></img>
    </>
  );
}

export default App;
