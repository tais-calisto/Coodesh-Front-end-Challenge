import { useState } from 'react';
import unycosLogo from '../../assets/unycos.svg';
import styles from './Header.module.css';

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setIsLogged(!isLogged);
  };

  const handleDropdow = () => {
    setShowDropdown(!showDropdown);
  };

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
          {isLogged ? (
            <div className={styles.dropdown}>
              <li onClick={handleDropdow}>
                <p>
                  Hola, <strong>Glaydston</strong>
                </p>
              </li>
              {showDropdown ? (
                <ul className={styles.dropdwonItems}>
                  <li>Panel de Control</li>
                  <li>Tus cursos</li>
                  <li>Perfil</li>
                  <li>cuenta</li>
                  <li onClick={handleClick}>Cerrar sesión</li>
                </ul>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <>
              <li>
                <a href='#'>Register</a>
              </li>
              <li onClick={handleClick}>
                <a href='#'>Log in</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
