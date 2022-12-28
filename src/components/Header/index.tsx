import { useState } from 'react';
import unycosLogo from '../../assets/unycos.svg';
import styles from './Header.module.css';
import iconChevronDown from '../../assets/chevron-down.svg';

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleDropdow = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setShowDropdown(false);
    setIsLogged(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <img src={unycosLogo} alt='Unycos Logo'></img>
          </div>
          <nav className={styles.navegation}>
            <ul>
              <li>
                <a href='#'>Cursos</a>
              </li>
              {isLogged ? (
                <li className={styles.dropdown}>
                  <div onClick={handleDropdow} className={styles.user}>
                    <p>
                      Hola, <strong>Glaydston</strong>
                    </p>
                    <img src={iconChevronDown}></img>
                  </div>
                </li>
              ) : (
                <>
                  <li>
                    <a href='#'>Register</a>
                  </li>
                  <li onClick={handleLogin}>
                    <a href='#'>Log in</a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {showDropdown ? (
        <ul className={styles.dropdownItems}>
          <li>Panel de Control</li>
          <li>Tus cursos</li>
          <li>Perfil</li>
          <li>cuenta</li>
          <li onClick={handleLogout}>Cerrar sesión</li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
