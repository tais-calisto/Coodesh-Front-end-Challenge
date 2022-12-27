import unycosLogo from '../../assets/unycos.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <img src={unycosLogo} alt='Unycos Logo'></img>
      </div>

      <nav className={styles.navegation}>
        <ul>
          <li>
            <a href='#'>Cursos</a>
          </li>
          <li>
            <a href='#'>Register</a>
          </li>
          <li>
            <a href='#'>Log in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
